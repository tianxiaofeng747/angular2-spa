import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponentComponent } from './hero-detail-component.component';

describe('HeroDetailComponentComponent', () => {
  let component: HeroDetailComponentComponent;
  let fixture: ComponentFixture<HeroDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
