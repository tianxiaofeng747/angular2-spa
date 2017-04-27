import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSon2Component } from './hero-son2.component';

describe('HeroSon2Component', () => {
  let component: HeroSon2Component;
  let fixture: ComponentFixture<HeroSon2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSon2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
