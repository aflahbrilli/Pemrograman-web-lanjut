import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mahasiswa={
    nama_mhs:'',
    pendidikan:{
      nama_jurusan:'',
      nama_prodi:''
    }
  }

  onSubmit(){
    console.log("hasiln inputan:");
    console.log(this.mahasiswa);
  }
}
