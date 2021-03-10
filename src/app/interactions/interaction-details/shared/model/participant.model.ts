export class Participant {
  object: "interactor" | "interaction";
  id: string;
  sequence: string;
  type: {id: string, name: string};
  organism: {taxid: string, common: string, scientific: string};
  identifier: {db: string, id: string};
  label: string;
}
