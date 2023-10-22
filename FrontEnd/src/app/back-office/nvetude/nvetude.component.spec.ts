import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvetudeComponent } from './nvetude.component';

describe('NvetudeComponent', () => {
  let component: NvetudeComponent;
  let fixture: ComponentFixture<NvetudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NvetudeComponent]
    });
    fixture = TestBed.createComponent(NvetudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
