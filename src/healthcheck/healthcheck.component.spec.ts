/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HealthCheckComponent } from './healthcheck.component';

describe('HealthCheckComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HealthCheckComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(HealthCheckComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(HealthCheckComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  xit('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(HealthCheckComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
