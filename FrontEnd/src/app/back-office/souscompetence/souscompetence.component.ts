import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface souscompetence {
  id: number;
  name: string;
}

var ELEMENT_DATA: souscompetence[] = [];

@Component({
  selector: 'app-souscompetence',
  templateUrl: './souscompetence.component.html',
  styleUrls: ['./souscompetence.component.css']
})
export class SouscompetenceComponent {

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource = new MatTableDataSource<souscompetence>(ELEMENT_DATA);

  constructor( private http:HttpClient ) {}
myData: any;

ngOnInit(): void {
  this.getMethod();
}

public getMethod()
{
  this.http.get("/api/souscompetence").subscribe((data) =>
  {
    this.myData = data;
      ELEMENT_DATA = this.myData;
      this.dataSource = new MatTableDataSource<souscompetence>(ELEMENT_DATA);
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
  selector: 'AddsousCompetence',
  templateUrl: 'addsouscompetence.html',
  styleUrls: ['souscompetence.component.css'],
})
export class AddsousCompetence implements OnInit {
  url = "../assets/images/bookDefault.png"
  name: string | null = "";
  file: any;
  img: any;
  ngOnInit(): void {
  }

  
}
