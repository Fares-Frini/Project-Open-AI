import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface competence {
  id: number;
  name: string;
}

var ELEMENT_DATA: competence[] = [];

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent {
  displayedColumns: string[] = ['id', 'name','action'];
  dataSource = new MatTableDataSource<competence>(ELEMENT_DATA);

  constructor( private http:HttpClient ) {}
myData: any;

ngOnInit(): void {
  this.getMethod();
}

public getMethod()
{
  this.http.get("/api/competence").subscribe((data) =>
  {
    this.myData = data;
      ELEMENT_DATA = this.myData;
      this.dataSource = new MatTableDataSource<competence>(ELEMENT_DATA);
  })
}
onDelBook(id: number) {
}
openEdit(): void {
  }
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
@Component({
  selector: 'AddCompetence',
  templateUrl: 'addcompetence.html',
  styleUrls: ['competence.component.css'],
})
export class AddCompetence implements OnInit {
  url = "../assets/images/bookDefault.png"
  name: string | null = "";
  file: any;
  img: any;
  ngOnInit(): void {
  }

  
}
