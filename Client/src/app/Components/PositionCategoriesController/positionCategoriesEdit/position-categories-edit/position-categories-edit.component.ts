import { Location } from '@angular/common';
import { PositionCategoryFormModel } from 'src/app/Models/FormModels/position-category-form-model';
import { PositionCategoriesService } from './../../../../Services/position-categories.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position-categories-edit',
  templateUrl: './position-categories-edit.component.html',
  styleUrls: ['./position-categories-edit.component.css']
})
export class PositionCategoriesEditComponent implements OnInit {

  positionCategoryFormModel: PositionCategoryFormModel= new PositionCategoryFormModel({positionCategoryModel:{id:0,title:"",description:""},isValid:false});

  constructor(private activeRoute:ActivatedRoute,
    private positionCategoriesService: PositionCategoriesService,
    private location: Location) { 

     activeRoute.params.subscribe((params)=>{
      positionCategoriesService.getPositionCategory(params.id).subscribe(
        (model)=>{
          this.positionCategoryFormModel = new PositionCategoryFormModel({positionCategoryModel:model,isValid: true});
        }
      )
     }); 
    }

  ngOnInit() {

  }

  savePositionCategory(){
    this.positionCategoriesService.updatePositionCategory(this.positionCategoryFormModel.positionCategoryModel).subscribe(
      ()=>{
        this.location.back()
      });
  }
  deletePositionCategory(){
    this.positionCategoriesService.deletePositionCategory(this.positionCategoryFormModel.positionCategoryModel.id).subscribe(
      ()=>{
        this.location.back()
      });
  }


}
