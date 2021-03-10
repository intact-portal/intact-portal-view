import { TestBed, inject } from '@angular/core/testing';

import { InteractionParticipantsService } from './interaction-participants.service';

describe('InteractionParticipants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionParticipantsService]
    });
  });

  it('should be created', inject([InteractionParticipantsService], (service: InteractionParticipantsService) => {
    expect(service).toBeTruthy();
  }));
});
