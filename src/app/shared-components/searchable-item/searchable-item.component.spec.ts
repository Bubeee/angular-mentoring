import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableItemComponent } from './searchable-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DurationPipe } from '../../common/pipes/duration.pipe';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmaitonDialogOverlayService } from '../../common/services/confirmation-dialog-overlay/confirmation-dialog-overlay.service';
import { SearchableItem } from './searchable-item';

describe('SearchableItemComponent', () => {
  let component: SearchableItemComponent;
  let fixture: ComponentFixture<SearchableItemComponent>;
  const confirmaitonDialogOverlayServiceStub = { open: _ => null };
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SearchableItemComponent, DurationPipe],
        providers: [
          {
            provide: ConfirmaitonDialogOverlayService,
            useValue: confirmaitonDialogOverlayServiceStub
          }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchableItemComponent);
    component = fixture.componentInstance;
    component.searchableItem = new SearchableItem({
      id: 1,
      topRated: true,
      date: new Date(),
      title: 'title',
      description: 'some course',
      duration: 202
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
