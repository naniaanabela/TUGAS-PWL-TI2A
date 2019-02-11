import { Component } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'NurcahyaNaniaAnabela-TI2A';
  alamat = 'Jl. Taman Bunga Merak 1 No. 48';

  tanggal = Date.now();

  hby: any[];
  constructor(private tableServ:TableService){}

  ngOnInit(){
    this.hby = this.tableServ.getNania();
  }
}
