import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { PositionCategoryFormModel } from 'src/app/Models/FormModels/position-category-form-model';

@Component({
  selector: 'app-position-categories-form',
  templateUrl: './position-categories-form.component.html',
  styleUrls: ['./position-categories-form.component.css']
})
export class PositionCategoriesFormComponent implements OnInit,OnChanges {


  @Input()
  positionCategoryFormModel: PositionCategoryFormModel;
  
  positionCategoryForm: FormGroup;  

  constructor(private fb: FormBuilder) { 
    this.positionCategoryForm = fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]]
    });


    this.positionCategoryForm.get("title").valueChanges.subscribe((val)=>{
      this.positionCategoryFormModel.positionCategoryModel.title = val;
    });
    this.positionCategoryForm.get("description").valueChanges.subscribe((val)=>{
      this.positionCategoryFormModel.positionCategoryModel.description = val;
    });
    this.positionCategoryForm.valueChanges.subscribe(()=>{
      this.positionCategoryFormModel.isValid=!this.positionCategoryForm.invalid;

      console.log("is valid in form"+ !this.positionCategoryForm.invalid)
    });
  }

  ngOnInit() {  
    if(this.positionCategoryFormModel.positionCategoryModel.id != 0){
      this.updateView();
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.positionCategoryFormModel ){
     this.positionCategoryFormModel = changes.positionCategoryFormModel.currentValue;
     this.updateView();
    }
  }
  updateView(){
    this.positionCategoryForm.get("title").setValue(this.positionCategoryFormModel.positionCategoryModel.title);
    this.positionCategoryForm.get("description").setValue(this.positionCategoryFormModel.positionCategoryModel.description);
  }
}
