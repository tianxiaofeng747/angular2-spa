/**
 * Created by smallKugua on 2016/12/18.
 */

import { Component }          from '@angular/core';
import { MissionService }     from '../servers/mission.service';
@Component({
    selector: 'mission-control',
    template: `
    <h2>Mission Control</h2>
    <button (click)="announce()">Announce mission</button>
    <my-astronaut *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut" [history]="history">
    </my-astronaut>
    <h3>History</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
    providers: [MissionService]
})
export class MissionControlComponent {
    astronauts = ['Lovell', 'Swigert', 'Haise'];
    history :number[] = [];
    missions = ['Fly to the moon!',
        'Fly to mars!',
        'Fly to Vegas!'];
    nextMission = 0;
    constructor(private missionService: MissionService) {

    }
    announce() {
        this.missionService.add();
        this.history.push(this.missionService.theNum);
    }
}