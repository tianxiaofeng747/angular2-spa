import {Component} from '@angular/core';
import {Hero}    from '../../service/hero';
@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.less']
})
export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    newHero() {
        this.model = new Hero(42, '', '');
    }
}
