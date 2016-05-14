import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TimeRegAppComponent } from '../app/time-reg.component';

beforeEachProviders(() => [TimeRegAppComponent]);

describe('App: TimeReg', () => {
  it('should create the app',
      inject([TimeRegAppComponent], (app: TimeRegAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'time-reg works!\'',
      inject([TimeRegAppComponent], (app: TimeRegAppComponent) => {
    expect(app.title).toEqual('time-reg works!');
  }));
});
