import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Participant} from 'complexviewer';

@Injectable()
export class InteractionParticipantsService {

  private participantStatus: Map<Participant, Status> = new Map<Participant, Status>();
  private idToParticipant: Map<string, Participant> = new Map<string, Participant>();
  private proteinSetsUpdateSubject = new Subject<{ expanded: Participant[]; collapsed: Participant[] }>();
  public proteinSetsUpdated = this.proteinSetsUpdateSubject.asObservable();

  constructor() {
  }

  public initParticipants(participants: Participant[], statusByDefaultForProteins: Status.EXPANDED | Status.COLLAPSED = Status.EXPANDED) {
    this.participantStatus.clear();
    for (const participant of participants) {
      if (participant.object === 'interactor') {
        this.participantStatus.set(participant, participant.type.name === 'protein' || participant.type.name === 'peptide' ? statusByDefaultForProteins : Status.NON_PROTEIN);
        this.idToParticipant.set(participant.identifier.id, participant);
      }
    }
  }

  public setProteinStatus(participant: Participant, status: Status.COLLAPSED | Status.EXPANDED) {
    if (!this.participantStatus.has(participant)) {
      throw new Error(`${participant?.label} (id:${participant?.identifier.id}) was not defined as a participant`);
    }
    this.participantStatus.set(participant, status);
    this.notifySetsListener();
  }

  public updateProteinsStatus(expandedProteins: Participant[]) {
    const collapsedProteins = new Set<Participant>(this.proteinParticipants);
    expandedProteins.forEach(participant => {
      collapsedProteins.delete(participant);
      this.participantStatus.set(participant, Status.EXPANDED);
    });
    collapsedProteins.forEach(value => this.participantStatus.set(value, Status.COLLAPSED));
    this.notifySetsListener();
  }

  public expandAllProteins() {
    this.participantStatus.forEach((participantStatus, participant) => {
      if (participantStatus === Status.COLLAPSED) {
        this.participantStatus.set(participant, Status.EXPANDED);
      }
    });
    this.notifySetsListener();
  }

  public collapseAllProteins() {
    this.participantStatus.forEach((participantStatus, participant) => {
      if (participantStatus === Status.EXPANDED) {
        this.participantStatus.set(participant, Status.COLLAPSED);
      }
    });
    this.notifySetsListener();
  }

  private notifySetsListener() {
    const expanded = [], collapsed = [];
    this.participantStatus.forEach((status, participant) => {
      if (status === Status.EXPANDED) {
        expanded.push(participant);
      } else if (status === Status.COLLAPSED) {
        collapsed.push(participant);
      }
    });
    this.proteinSetsUpdateSubject.next({expanded: expanded, collapsed: collapsed});
  }

  public getParticipantStatus(participant: Participant): Status {
    return this.participantStatus.get(participant);
  }

  public getParticipantsByStatus(status: Status): Participant[] {
    const selectedParticipants = [];
    this.participantStatus.forEach((participantStatus, participant) => {
      if (participantStatus === status) {
        selectedParticipants.push(participant);
      }
    });
    return selectedParticipants;
  }

  get participants(): Participant[] {
    const participants = [];
    this.participantStatus.forEach((status, participant) => participants.push(participant));
    return participants;
  }

  get expandedParticipants(): Participant[] {
    return this.getParticipantsByStatus(Status.EXPANDED);
  }

  get collapsedParticipants(): Participant[] {
    return this.getParticipantsByStatus(Status.COLLAPSED);
  }

  get nonProteinParticipants(): Participant[] {
    return this.getParticipantsByStatus(Status.NON_PROTEIN);
  }

  get proteinParticipants(): Participant[] {
    const proteins = [];
    this.participantStatus.forEach((status, participant) => {
      if (status !== Status.NON_PROTEIN) {
        proteins.push(participant);
      }
    });
    return proteins;
  }

  public getParticipantAndStatusById(id: string): { participant: Participant, status: Status } {
    const participant = this.idToParticipant.get(id);
    return {participant: participant, status: this.participantStatus.get(participant)};
  }
}

export enum Status {
  EXPANDED,
  COLLAPSED,
  NON_PROTEIN
}
