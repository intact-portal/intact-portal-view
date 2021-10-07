import {Interactor} from '../../interactions/shared/model/interactions-results/interactor/interactor.model';
import {Pagination} from '../shared/pagination.model';

export interface ResolutionEntry extends Pagination<Interactor[]> {
  term?: string;
}
