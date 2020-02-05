import { PositionCategoriesService } from './Services/position-categories.service';
import { DrinkModelConverterService } from './Services/drink-model-converter.service';
import { FormBackComponent } from './Components/FormsUtils/FormBack/FormBack.component';
import { ProductStorageService } from './Services/product-storage.service';
import { CategoriesService } from './Services/categories.service';
import { MenuServiceService } from './Services/menu-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './AppRoutingModule/app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { CurrentSumComponent } from './Components/current-sum/current-sum.component';
import { MenuComponent } from './Components/MenuComponent/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductStorageComponent } from './Components/ProductStorageComponent/product-storage/product-storage.component';
import { CategoriesComponent } from './Components/CategoriesComponent/categories/categories.component';
import { CategoryCreateComponent } from './Components/CategoriesComponent/category-create/category-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryEditComponent } from './Components/CategoriesComponent/category-edit/category-edit.component';
import { ProductStorageCreateComponent } from './Components/ProductStorageComponent/product-storage-create/product-storage-create.component';
import { ProductStorageEditComponent } from './Components/ProductStorageComponent/product-storage-edit/product-storage-edit.component';
import { PositionCategoriesComponent } from './Components/PositionCategoriesController/positionCategories/position-categories/position-categories.component';
import { PositionCategoriesFormComponent } from './Components/PositionCategoriesController/positionCategoriesForm/position-categories-form/position-categories-form.component';
import { PositionCategoriesCreateComponent } from './Components/PositionCategoriesController/positionCategoriesCreate/position-categories-create/position-categories-create.component';
import { PositionCategoriesEditComponent } from './Components/PositionCategoriesController/positionCategoriesEdit/position-categories-edit/position-categories-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CurrentSumComponent,
    MenuComponent,
    ProductStorageComponent,
    CategoriesComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    ProductStorageCreateComponent,
    ProductStorageEditComponent,
    FormBackComponent,
    PositionCategoriesComponent,
    PositionCategoriesFormComponent,
    PositionCategoriesCreateComponent,
    PositionCategoriesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MenuServiceService, CategoriesService, ProductStorageService,DrinkModelConverterService,
              PositionCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
