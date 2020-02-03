import { DrinkModelConverterService } from './../../../Services/drink-model-converter.service';
import { environment } from 'src/environments/environment';
import { DrinkViewModel } from './../../../ViewModels/drink-view-model';
import { ProductStorageService } from './../../../Services/product-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-storage',
  templateUrl: './product-storage.component.html',
  styleUrls: ['./product-storage.component.css']
})
export class ProductStorageComponent implements OnInit {

  createRoute = environment.routes.vaultCreate;
  editRoute = environment.routes.vaultEdit;

  drinks: DrinkViewModel[] = [];

  constructor(
    private productStorageService: ProductStorageService,
    private convertor: DrinkModelConverterService,
    private router: Router) { }

  ngOnInit() {
    this.productStorageService.getAllDrinks()
    .subscribe((data)=>this.drinks=data
    .map<DrinkViewModel>((model)=>{
      return this.convertor.ConvertToDrinkViewModel(model)
    }));
  }
  

  navigateToCreate(){
    this.router.navigateByUrl(this.createRoute);
  }
  
  navigateToEdit(id: number){

    this.router.navigate([this.editRoute+"/"+id]);
  }
}
