import { PositionCategoriesEditComponent } from './../Components/PositionCategoriesController/positionCategoriesEdit/position-categories-edit/position-categories-edit.component';
import { PositionCategoriesCreateComponent } from './../Components/PositionCategoriesController/positionCategoriesCreate/position-categories-create/position-categories-create.component';
import { PositionCategoriesComponent } from './../Components/PositionCategoriesController/positionCategories/position-categories/position-categories.component';
import { ProductStorageEditComponent } from './../Components/ProductStorageComponent/product-storage-edit/product-storage-edit.component';
import { ProductStorageCreateComponent } from './../Components/ProductStorageComponent/product-storage-create/product-storage-create.component';
import { CategoryEditComponent } from './../Components/CategoriesComponent/category-edit/category-edit.component';
import { CategoriesComponent } from './../Components/CategoriesComponent/categories/categories.component';
import { ProductStorageComponent } from './../Components/ProductStorageComponent/product-storage/product-storage.component';

import { MenuComponent } from '../Components/MenuComponent/menu/menu.component';
import { environment } from './../../environments/environment';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryCreateComponent } from '../Components/CategoriesComponent/category-create/category-create.component';

const appRoutes = environment.routes;


const routes: Routes = [
  {
  path: '',
  redirectTo: appRoutes.vault,
  pathMatch: 'full'
  },
  {
    path: appRoutes.menu,
    component: MenuComponent
  },
  {
    path: appRoutes.vault,
    component: ProductStorageComponent
  },
  {
    path: appRoutes.categories,
    component: CategoriesComponent
  },
  {
    path: appRoutes.categoriesCreate,
    component: CategoryCreateComponent
  },
  {
    path: appRoutes.categoriesEdit+'/:id',
    component: CategoryEditComponent
  },
  {
    path: appRoutes.vault,
    component: ProductStorageComponent
  },
  {
    path: appRoutes.vaultCreate,
    component: ProductStorageCreateComponent
  },
  {
    path: appRoutes.vaultEdit+'/:id',
    component: ProductStorageEditComponent
  },
  {
    path: appRoutes.positionCategories,
    component: PositionCategoriesComponent
  },
  {
    path: appRoutes.positionCategoriesCreate,
    component: PositionCategoriesCreateComponent
  },
  {
    path: appRoutes.positionCategoriesEdit+'/:id',
    component: PositionCategoriesEditComponent
  }
  // {
  //   path: 'orders'
  // },
  // {
  //   path: 'vault'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
