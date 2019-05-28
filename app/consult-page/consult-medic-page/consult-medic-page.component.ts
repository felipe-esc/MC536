import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {FormsModule} from '@angular/forms';

export interface Medico {
  medico: string;
  crm: number;
  idade: number;
}

// objeto de teste, será substituido pelo objeto retornado pelo back-end
const TEST_MEDICO: Medico[] = [
  { medico: 'Jose Carlos', crm: 123, idade: 44 },
  { medico: 'Josue da Silva', crm: 456, idade: 54 },
  { medico: 'Maria Lucia', crm: 789, idade: 45 },
  { medico: 'Luis Carvajal', crm: 132, idade: 66 },
];

@Component({
  selector: 'app-consult-medic-page',
  templateUrl: './consult-medic-page.component.html',
  styleUrls: ['./consult-medic-page.component.css']
})

export class ConsultMedicPageComponent implements OnInit {
  // valores que serão carregados nas colunas, precisam ser iguais aos valores de matColumnDef
  dataSource = new MatTableDataSource((TEST_MEDICO));
  displayedColumns = ['medico', 'crm', 'idade'];
  nomeChecked = false;
  crmChecked = false;
  idadeChecked = false;
  showTable: string;


  applyFilter(filterValue: string) {
    this.showTable = filterValue;
    // implementação dos filtros desejados aqui
  }
  constructor() { }

  ngOnInit() {
  }

}

//FILTER VALUE
export class SelectValueBindingExample {
  selected = '';
}

//FORMULARIO VALUE
export class FormFieldOverviewExample {

}
