import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultMedicPageComponent } from './consult-page/consult-medic-page/consult-medic-page.component';
import {MatCheckboxModule, MatFormFieldModule, MatInputModule, MatTableModule, MatTabsModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ConsultPageComponent} from './consult-page/consult-page.component';
import { GenericFormComponent } from './consult-page/generic-form/generic-form.component';
//import { ConsultPacientPageComponent } from './consult-page/consult-pacient-page/consult-pacient-page.component';
//import { NewPageComponent } from './consult-page/new-page/new-page.component';
//import { DynamicFormComponent }         from './dynamic-form.component';
//import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultPageComponent,
    ConsultMedicPageComponent,
    GenericFormComponent,
    //ConsultPacientPageComponent,
    //NewPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    //DynamicFormComponent,
    //DynamicFormQuestionComponent,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
