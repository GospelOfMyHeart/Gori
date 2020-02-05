import { environment } from 'src/environments/environment';
import { PositionCategoriesService } from './../../../../Services/position-categories.service';
import { PositionCategoryModel } from './../../../../Models/position-category';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-categories',
  templateUrl: './position-categories.component.html',
  styleUrls: ['./position-categories.component.css']
})
export class PositionCategoriesComponent implements OnInit {

  createRoute: string = environment.routes.positionCategoriesCreate;
  editRoute: string = environment.routes.positionCategoriesEdit;

  categoriesPosition: PositionCategoryModel[] = [];

  constructor(
    private positionCategoriesService: PositionCategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.positionCategoriesService.getAllPositionCategories().subscribe((model)=>{
      this.categoriesPosition = model;
    });
  }
  navigateToCreate(){
    this.router.navigateByUrl(this.createRoute);
  }

  navigateToEdit(id: number){
    this.router.navigate([this.editRoute+'/'+id]);
  }

}
