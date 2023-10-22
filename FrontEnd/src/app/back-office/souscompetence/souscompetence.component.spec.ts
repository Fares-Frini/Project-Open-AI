import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscompetenceComponent } from './souscompetence.component';

describe('SouscompetenceComponent', () => {
  let component: SouscompetenceComponent;
  let fixture: ComponentFixture<SouscompetenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouscompetenceComponent]
    });
    fixture = TestBed.createComponent(SouscompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
