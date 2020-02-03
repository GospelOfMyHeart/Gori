import { Location } from '@angular/common';
import { DrinkModel } from './../../../Models/drink-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from './../../../Services/categories.service';
import { DrinkCategoryModel } from './../../../Models/drink-category-model';
import { Component, OnInit } from '@angular/core';
import { ProductStorageService } from 'src/app/Services/product-storage.service';

@Component({
  selector: 'app-product-storage-create',
  templateUrl: './product-storage-create.component.html',
  styleUrls: ['./product-storage-create.component.css']
})
export class ProductStorageCreateComponent implements OnInit {

  productCreateForm: FormGroup;

  categories: DrinkCategoryModel[] = [];

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private productStorageService: ProductStorageService,
    private location: Location
  ) {
    this.productCreateForm = fb.group(
      {
        productName:['',[Validators.required]],
        pricePerLiter:['',[Validators.required, Validators.pattern(/^[,\d]+$/)]],
        actualVolume:['',[Validators.required,Validators.pattern(/^[,\d]+$/)]],
        drinkCategoryName:['',[Validators.required]]
      }
    )
   }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((data)=>this.categories = data);
  }

  createDrinkProduct(){
    let name = this.productCreateForm.get('productName').value;
    let priceLiter = this.productCreateForm.get('pricePerLiter').value.replace(".",",");
    let actualVolume = this.productCreateForm.get('actualVolume').value;
    let drinkCategoryId = this.productCreateForm.get('drinkCategoryName').value;


    let model = new DrinkModel({id:0,name,priceLiter,actualVolume,drinkCategoryId});

    this.productStorageService.addDrink(model).subscribe((data)=>{
      this.location.back();
    });
  }

}
