import { Location } from '@angular/common';
import { PositionCategoriesService } from './../../../../Services/position-categories.service';
import { PositionCategoryFormModel } from './../../../../Models/FormModels/position-category-form-model';
import { PositionCategoryModel } from './../../../../Models/position-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-categories-create',
  templateUrl: './position-categories-create.component.html',
  styleUrls: ['./position-categories-create.component.css']
})
export class PositionCategoriesCreateComponent implements OnInit {

  

  constructor(private positionCategoriesService:PositionCategoriesService,
    private location: Location) { }

  positionCategoryFormModel: PositionCategoryFormModel = new PositionCategoryFormModel(
    {
      positionCategoryModel:{id:0,title:"",description:""},
      isValid:false}
    );

  ngOnInit() {
  }
  Create(){
    this.positionCategoriesService.addPositionCategory(this.positionCategoryFormModel.positionCategoryModel)
      .subscribe(()=>this.location.back(),
    (error)=>console.log(error));
  }
  isValid(): boolean{
    return this.positionCategoryFormModel.isValid;
  }

}
