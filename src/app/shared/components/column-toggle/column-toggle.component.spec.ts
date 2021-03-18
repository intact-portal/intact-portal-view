import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColumnToggleComponent} from './column-toggle.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ColumnToggleComponent', () => {
  let component: ColumnToggleComponent;
  let fixture: ComponentFixture<ColumnToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnToggleComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnToggleComponent);
    component = fixture.componentInstance;
    component.columns = [];
    component.isTabActive = true;
    component.dataTable = $('<table></table>').DataTable({
      data: [
        {name: 'A', value: 1},
        {name: 'B', value: 2},
      ],
      columns: [
        {
          data: 'name',
          title: 'Name'
        },
        {
          data: 'value',
          title: 'Value'
        }
      ]
    });
    component.columnView = 'test_columnView';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
