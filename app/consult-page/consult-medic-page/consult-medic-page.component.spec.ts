// arquivo para testes, NÃO SERÁ USADO
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultMedicPageComponent } from './consult-medic-page.component';

describe('ConsultMedicPageComponent', () => {
  let component: ConsultMedicPageComponent;
  let fixture: ComponentFixture<ConsultMedicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultMedicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultMedicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
