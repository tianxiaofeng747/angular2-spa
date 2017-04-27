import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSonComponent } from './hero-son.component';

describe('HeroSonComponent', () => {
  let component: HeroSonComponent;
  let fixture: ComponentFixture<HeroSonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
