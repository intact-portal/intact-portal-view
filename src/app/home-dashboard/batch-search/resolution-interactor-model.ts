import {Interactor} from "../../interactions/shared/model/interactions-results/interactor/interactor.model";
import {Pagination} from "../shared/pagination.model";

export class ResolutionEntry extends Pagination<Interactor[]> {
  public term?: string;
}
