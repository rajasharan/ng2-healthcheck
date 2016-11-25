import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscription } from 'rxjs/Rx';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/repeatWhen';

@Component({
  selector: 'health-check',
  templateUrl: './healthcheck.component.html',
  styleUrls: ['./healthcheck.component.css']
})
export class HealthCheckComponent implements OnInit, OnDestroy {
  @Input() pingUrl: string;
  @Input() pingIntervalMilli: number;

  private timer: Observable<number>;
  private pingObservable: Observable<Response>;
  private subscription: Subscription;
  private currentStatus: number | string;
  private success: number;
  private failure: number;

  constructor(private http: Http) {
    this.pingIntervalMilli = 3000;
    this.timer = Observable.timer(0, this.pingIntervalMilli);
    this.success = 0;
    this.failure = 0;
  }

  ngOnInit(): void {
    this.subscription = this.http.get(this.pingUrl)
      .repeatWhen(() => this.timer)
      .retryWhen(err => {
        return err.do(res => {
          this.currentStatus = res.status === 0? "Error": res.status;
          this.failure++;
        }).delay(this.pingIntervalMilli)
      })
      .subscribe(res => {
        this.currentStatus = res.status
        this.success++;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
