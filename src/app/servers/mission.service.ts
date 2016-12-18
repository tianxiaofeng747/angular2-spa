/**
 * Created by smallKugua on 2016/12/18.
 */

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class MissionService {
    // Observable string sources
    /*private missionAnnouncedSource = new Subject<string>();
    private missionConfirmedSource = new Subject<string>();
    // Observable string streams
    missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    missionConfirmed$ = this.missionConfirmedSource.asObservable();
    // Service message commands
    announceMission(mission: string) {
        this.missionAnnouncedSource.next(mission);
    }
    confirmMission(astronaut: string) {
        this.missionConfirmedSource.next(astronaut);
    }*/
    theNum:number = 0;
    add(){
        this.theNum ++;
    }
    del(){
        this.theNum --;
    }
}