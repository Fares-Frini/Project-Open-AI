import { Component } from '@angular/core';
import {FormBuilder, Validators,FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

interface Annee {
  name: string;
}

interface Matiere {
  name: string;
}

interface Competence {
  name: string;
}

interface souscompetence {
  name: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent {
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  isEditable = false; 
  anneeControl = new FormControl<Annee | null>(null, Validators.required);
  selectanneeFormControl = new FormControl('', Validators.required);
  annees: Annee[] = [  
    {name: '1ère Année'},
    {name: '2ème Année'},
    {name: '3ème Année'},
    {name: '4ère Année'},
    {name: '5ère Année'},
    {name: '6ère Année'},
  ];

  matiereControl = new FormControl<Matiere | null>(null, Validators.required);
  selectmatiereFormControl = new FormControl('', Validators.required);
  matieres: Competence[] = [  
    {name: 'Français'},
    {name: 'Anglais'},
    {name: 'Mathématique'},
    {name: 'Physique'},
    {name: 'Arabe'},
    {name: 'Informatique'},
  ];

  competenceControl = new FormControl<Competence | null>(null, Validators.required);
  selectcompetenceFormControl = new FormControl('', Validators.required);
  competences: Competence[] = [  
    {name: 'competences'},
    {name: 'competences'},
    {name: 'competences'},
    {name: 'competences'},
    {name: 'competences'},
    {name: 'competences'},
  ];

  souscompetenceControl = new FormControl<souscompetence | null>(null, Validators.required);
  selectsouscompetenceFormControl = new FormControl('', Validators.required);
  souscompetences: Competence[] = [  
    {name: 'souscompetences'},
    {name: 'souscompetences'},
    {name: 'souscompetences'},
    {name: 'souscompetences'},
    {name: 'souscompetences'},
    {name: 'souscompetences'},
  ];
}
