/**
 * Created by smallKugua on 2016/12/18.
 */
import { Component, Input, OnDestroy } from '@angular/core';
import { MissionService } from '../servers/mission.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
    selector: 'my-astronaut',
    template: `
    <p>
      <strong>{{astronaut}}</strong>
      <button
        (click)="confirm()">
        减去
      </button>
    </p>
  `
})
export class AstronautComponent implements OnDestroy {
    @Input() astronaut: string;
    @Input() history : number[];
    mission = '<no mission announced>';
    confirmed = false;
    announced = false;
    subscription: Subscription;
    constructor(private missionService: MissionService) {

    }
    private num:number = 0;
    confirm() {
        this.missionService.del();
        this.history.push(this.missionService.theNum);
    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}