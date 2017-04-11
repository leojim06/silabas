import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilabaComponent } from './silaba.component';

describe('SilabaComponent', () => {
  let component: SilabaComponent;
  let fixture: ComponentFixture<SilabaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilabaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
