import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<h1> hello {{name}} </h1>`,
  // styleUrls: ['./servers.component.css']
styles:[`
  h1 {
    color:dodgerblue;
  }`]
})
export class ServersComponent implements OnInit {

  name:string="angular"
  constructor() { }

  ngOnInit() {
  }

}

