import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface thematique {
  id: number;
  name: string;
}
var ELEMENT_DATA: thematique[] = [];

@Component({
  selector: 'app-thematique',
  templateUrl: './thematique.component.html',
  styleUrls: ['./thematique.component.css']
})
export class ThematiqueComponent {
  displayedColumns: string[] = ['id', 'name','action'];
  dataSource = new MatTableDataSource<thematique>(ELEMENT_DATA);
 /*  constructor(public dialog: MatDialog) { }
  openAdd(): void {
    const dialogRef = this.dialog.open(AddBookDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

} */
constructor( private http:HttpClient ) {}
myData: any;

ngOnInit(): void {
  this.getMethod();
}

public getMethod()
{
  this.http.get("/api/thematique").subscribe((data) =>
  {
    this.myData = data;
      ELEMENT_DATA = this.myData;
      this.dataSource = new MatTableDataSource<thematique>(ELEMENT_DATA);
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
  selector: 'AddThematique',
  templateUrl: 'addthematique.html',
  styleUrls: ['thematique.component.css'],
})
export class AddThematique implements OnInit {
  url = "../assets/images/bookDefault.png"
  name: string | null = "";
  file: any;
  img: any;
  ngOnInit(): void {
  }

  
}


