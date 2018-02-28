import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthorizationService } from '../../common/services/authorization/authorization.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const authorizationServiceStub = {
    IsAuthenticated: null
  };

  const routerStub = {
    url: '/login',
    events: Observable.of('test', 'some test')
  };
  const storeStub = {};

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        providers: [
          {
            provide: AuthorizationService,
            useValue: authorizationServiceStub
          },
          {
            provide: Router,
            useValue: routerStub
          },
          {
            provide: Store,
            useValue: storeStub
          }
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isAuthenicated should return true if the service returns true', () => {
    TestBed.get(AuthorizationService).IsAuthenticated = _ => true;
    expect(component.isAuthenticated()).toBeTruthy();
  });

  it('isAuthenicated should return false if the service returns false', () => {
    TestBed.get(AuthorizationService).IsAuthenticated = _ => false;
    expect(component.isAuthenticated()).toBeFalsy();
  });

  it('isNotOnLoginPage should return false when page is /login', () => {
    expect(component.isNotOnLoginPage()).toBeFalsy();
  });
});
