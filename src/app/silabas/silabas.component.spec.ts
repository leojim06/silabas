import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilabasComponent } from './silabas.component';

describe('SilabasComponent', () => {
  let component: SilabasComponent;
  let fixture: ComponentFixture<SilabasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilabasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilabasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
