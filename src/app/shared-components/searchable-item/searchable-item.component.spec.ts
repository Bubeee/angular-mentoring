import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableItemComponent } from './searchable-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchableItemComponent', () => {
  let component: SearchableItemComponent;
  let fixture: ComponentFixture<SearchableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
