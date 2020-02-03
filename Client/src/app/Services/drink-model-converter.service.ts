import { CategoriesService } from './categories.service';
import { DrinkViewModel } from './../ViewModels/drink-view-model';
import { DrinkModel } from './../Models/drink-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class DrinkModelConverterService {

  constructor( private categoriesService: CategoriesService) {
   
   }
   
  public ConvertToDrinkViewModel(model: DrinkModel): DrinkViewModel{
    return this.getDrinkViewModel(model);
  }

  private getDrinkViewModel(model: DrinkModel): DrinkViewModel{

    let newModel = new DrinkViewModel({id: model.id,
      name: model.name,
      priceLiter: model.priceLiter,
      actualVolume: model.actualVolume,
      drinkCategoryName: ""
     });
    this.categoriesService.getCategory(model.drinkCategoryId).subscribe((data)=>{newModel.drinkCategoryName = data.title});

    return newModel;
  }
}
