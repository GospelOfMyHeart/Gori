import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-FormBack',
  templateUrl: './FormBack.component.html',
  styleUrls: ['./FormBack.component.css']
})
export class FormBackComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }
  
  back(){
    this.location.back();
  }
}
