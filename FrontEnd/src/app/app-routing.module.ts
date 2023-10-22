import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office/back-office.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { StepperComponent } from './stepper/stepper.component';
import { NvetudeComponent } from './back-office/nvetude/nvetude.component';
import { ThematiqueComponent } from './back-office/thematique/thematique.component';
import { CompetenceComponent } from './back-office/competence/competence.component';
import { SouscompetenceComponent } from './back-office/souscompetence/souscompetence.component';

const routes: Routes = [
  {path:'',redirectTo:'home/steps',pathMatch:'full'},
  {path:'backoffice',component:BackOfficeComponent,children:[
    {path:"nvetude",component:NvetudeComponent},
    {path:"thematique",component:ThematiqueComponent},
    {path:"competence",component:CompetenceComponent},
    {path:"souscompetence",component:SouscompetenceComponent}
  ]},
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
