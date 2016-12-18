import { Component, EventEmitter,Input,Output,OnChanges,SimpleChange  } from '@angular/core';
@Component({
    selector:'hero-test',
    //template:'<h4 *ngIf="isShow">小田 test  {{ isShow}}</h4>',
    templateUrl:'./hero-test-component.html'
})
export class HeroTestComponent {
    _name : string = 'no name';
    @Input() major: number;
    @Input() minor: number;
    @Input()  name: string;
    @Output() onVoted = new EventEmitter<boolean>();
    constructor(
    ){
    }
    changeLog:string[] = [];
    voted = false;
    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let from = JSON.stringify(changedProp.previousValue);
            let to =   JSON.stringify(changedProp.currentValue);
            log.push( `${propName} changed from ${from} to ${to}`);
        }
        this.changeLog.push(log.join(', '));
    }

    intervalId = 0;
    message = '';
    seconds = 11;
    clearTimer() { clearInterval(this.intervalId); }
    ngOnInit()    { this.start(); }
    ngOnDestroy() { this.clearTimer(); }
    start() { this.countDown(); }
    stop()  {
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`;
    }
    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'Blast off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10; } // reset
                this.message = `T-${this.seconds} seconds and counting`;
            }
        }, 1000);
    }
}