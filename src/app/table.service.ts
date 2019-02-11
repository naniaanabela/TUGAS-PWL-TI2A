import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  CourseService(): any[]{
    throw new Error("Method not implemented.");
  }
  constructor() { }

  getNania(){
    return[
      {id:0, hobby:"Bermain Game", ket:"main game disaat memiliki waktu senggang agar tidak bosan"},
      {id:1, hobby:"Mendengarkan Musik", ket:"dengan mendengarkan musik, membuat pikiran dan batin saya menjadi tenang"},
      {id:2, hobby:"Tidur", ket:"tidur adalah hal yang berharga bagi saya dimasa sibuk seperti sekarang ini"}
    ]
  }
}