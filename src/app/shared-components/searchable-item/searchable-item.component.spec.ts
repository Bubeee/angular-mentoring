import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableItemComponent } from './searchable-item.component';

describe('SearchableItemComponent', () => {
  let component: SearchableItemComponent;
  let fixture: ComponentFixture<SearchableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchableItemComponent ]
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
