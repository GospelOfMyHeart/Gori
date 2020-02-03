import { Location } from '@angular/common';
import { DrinkCategoryModel } from './../../../Models/drink-category-model';
import { CategoriesService } from './../../../Services/categories.service';
import { DrinkModel } from './../../../Models/drink-model';
import { ProductStorageService } from './../../../Services/product-storage.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-storage-edit',
  templateUrl: './product-storage-edit.component.html',
  styleUrls: ['./product-storage-edit.component.css']
})
export class ProductStorageEditComponent implements OnInit {

  drinkId: number;
  drinkModel: DrinkModel;

  selectedCategory: DrinkCategoryModel = new DrinkCategoryModel({});
  categories: DrinkCategoryModel[] = [];

  drinkUpdateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private productService: ProductStorageService,
    private categoryService: CategoriesService,
    private location: Location
  ) {
    this.drinkId = this.activeRoute.snapshot.params.id;
    this.activeRoute.params.subscribe(params=>this.drinkId=params.id);

    this.drinkUpdateForm = fb.group({
      productName:['',[Validators.required]],
      pricePerLiter:['',[Validators.required, Validators.pattern(/^[.\d]+$/)]],
      actualVolume:['',[Validators.required,Validators.pattern(/^[.\d]+$/)]],
      drinkCategoryName:['',[Validators.required]]
    });
   }

  ngOnInit() {
    this.updateView();
  }

  updateView(){
    this.productService.getDrink(this.drinkId).subscribe((drinkModel)=>{
      
      this.drinkModel = drinkModel;

      this.categoryService.getAllCategories()
      .subscribe((model)=>{

      this.selectedCategory=model.find((element)=>element.id == this.drinkModel.id);
      this.categories = model;

      this.drinkUpdateForm.get('productName').setValue(this.drinkModel.name);
      this.drinkUpdateForm.get('pricePerLiter').setValue(this.drinkModel.priceLiter);
      this.drinkUpdateForm.get('actualVolume').setValue(this.drinkModel.actualVolume);
      this.drinkUpdateForm.get('drinkCategoryName').setValue(this.drinkModel.drinkCategoryId);
      });
    });

    
  }
  deleteDrink(){

    
    this.productService.deleteDrink(this.drinkId).subscribe(()=>{
      this.back();
    });
  }

  saveDrink(){
    this.drinkModel.name = this.drinkUpdateForm.get('productName').value;
    this.drinkModel.priceLiter =this.drinkUpdateForm.get('pricePerLiter').value;
    this.drinkModel.actualVolume=this.drinkUpdateForm.get('actualVolume').value;
    this.drinkModel.drinkCategoryId =this.drinkUpdateForm.get('drinkCategoryName').value;

      this.productService.updateDrink(this.drinkModel).subscribe((model)=>{
        this.location.back();
      })
  }
  back(){
    this.location.back();

  }

}
