import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { Medico } from '../medico';
import { Paciente } from '../paciente';
import { Consulta } from '../consulta';
import { Exame } from '../exame';
import { Cirurgia } from '../cirurgia';
import { Internacao } from '../internacao';
import { Atendimentops } from '../atendimentops';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {

  model0 = new Medico();
  model1 = new Paciente();
  model2 = new Consulta();
  model3 = new Exame();
  model4 = new Cirurgia();
  model5 = new Internacao();
  model6 = new Atendimentops();


  onSubmit0(){
    JSON.stringify(this.model0);
  }
  onSubmit1(){
    JSON.stringify(this.model1);
  }
  onSubmit2(){
    JSON.stringify(this.model2);
  }
  onSubmit3(){
    JSON.stringify(this.model3);
  }
  onSubmit4(){
    JSON.stringify(this.model4);
  }
  onSubmit5(){
    JSON.stringify(this.model5);
  }
  onSubmit6(){
    JSON.stringify(this.model6);
  }


  constructor() { }

  ngOnInit() {
  }

}
