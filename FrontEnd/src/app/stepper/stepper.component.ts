import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators,FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StepperService } from "./stepper.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})

export class StepperComponent implements OnInit {
  public nvetude : any | undefined ;
  public thematique : any | undefined;
  public competence : any | undefined;
  public souscompetence : any | undefined;
  public getJsonValue :any ;
  public postJsonValue : any;
  constructor(private _formBuilder: FormBuilder , private http:HttpClient ) {}
 
  ngOnInit(): void {
    this.getMethod();
  }
  
  public getMethod()
  {
    this.http.get("/api/nvetude").subscribe((data) =>
    {
      console.log(data);
      this.nvetude=data;
    })
    this.http.get("/api/thematique").subscribe((data) =>
    {
      console.log(data);
      this.thematique=data;
    })
    this.http.get("/api/competence").subscribe((data) =>
    {
      console.log(data);
      this.competence=data;
    })
    this.http.get("/api/souscompetence").subscribe((data) =>
    {
      console.log(data);
      this.souscompetence=data;
    })
  }
  

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
  anneeControl = new FormControl<object | null>(null, Validators.required);
  selectanneeFormControl = new FormControl('', Validators.required);

  matiereControl = new FormControl<object | null>(null, Validators.required);
  selectmatiereFormControl = new FormControl('', Validators.required);

  competenceControl = new FormControl<object | null>(null, Validators.required);
  selectcompetenceFormControl = new FormControl('', Validators.required);

  souscompetenceControl = new FormControl<object | null>(null, Validators.required);
  selectsouscompetenceFormControl = new FormControl('', Validators.required);
}
