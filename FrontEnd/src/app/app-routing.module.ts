import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office/back-office.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path:'',redirectTo:'home/steps',pathMatch:'full'},
  {path:'backoffice',component:BackOfficeComponent},
  {path:'home',component:HomeComponent,children: [
    {path: "steps",component:StepperComponent},
    {path: "questions",component:QuestionsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
