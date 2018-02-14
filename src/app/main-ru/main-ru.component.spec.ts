import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRuComponent } from './main-ru.component';

describe('MainRuComponent', () => {
  let component: MainRuComponent;
  let fixture: ComponentFixture<MainRuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
