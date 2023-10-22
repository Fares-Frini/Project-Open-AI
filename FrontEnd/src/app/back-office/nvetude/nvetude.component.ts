import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface nvetude {
  id: number;
  name: string;
}
var ELEMENT_DATA: nvetude[] = [];
@Component({
  selector: 'app-nvetude',
  templateUrl: './nvetude.component.html',
  styleUrls: ['./nvetude.component.css']
})

export class NvetudeComponent {
  displayedColumns: string[] = ['id', 'name','action'];
  dataSource = new MatTableDataSource<nvetude>(ELEMENT_DATA);
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
  this.http.get("/api/nvetude").subscribe((data) =>
  {
    this.myData = data;
      ELEMENT_DATA = this.myData;
      this.dataSource = new MatTableDataSource<nvetude>(ELEMENT_DATA);
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
  selector: 'AddNvetude',
  templateUrl: 'addnvetude.html',
  styleUrls: ['nvetude.component.css'],
})
export class AddNvetude implements OnInit {
  url = "../assets/images/bookDefault.png"
  name: string | null = "";
  file: any;
  img: any;
  ngOnInit(): void {
  }

  
}

