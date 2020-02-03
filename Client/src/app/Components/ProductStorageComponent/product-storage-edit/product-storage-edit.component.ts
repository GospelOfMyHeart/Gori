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

  id: number;
  model: DrinkModel;

  selectedCategory: DrinkCategoryModel = new DrinkCategoryModel({});
  categories: DrinkCategoryModel[] = [];

  drinkUpdateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private productService: ProductStorageService,
    private categoryService: CategoriesService
  ) {
    this.id = this.activeRoute.snapshot.params.id;
    this.activeRoute.params.subscribe(params=>this.id=params.id);

    this.drinkUpdateForm = fb.group({
      productName:['',[Validators.required]],
      pricePerLiter:['',[Validators.required, Validators.pattern(/^[,\d]+$/)]],
      actualVolume:['',[Validators.required,Validators.pattern(/^[,\d]+$/)]],
      drinkCategoryName:['',[Validators.required]]
    });
   }

  ngOnInit() {
    this.updateView();
  }

  updateView(){
    this.productService.getDrink(this.id).subscribe((model)=>{
      this.model = model;
      this.categoryService.getCategory(model.drinkCategoryId)
      .subscribe((model)=>{
      this.selectedCategory=model;

    });
    });

    
  }
  deleteCategory(){

  }

  saveCategory(){

  }

}
