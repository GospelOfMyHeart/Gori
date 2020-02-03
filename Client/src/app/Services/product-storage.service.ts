import { DrinkModelConverterService } from './drink-model-converter.service';
import { CategoriesService } from './categories.service';
import { DrinkViewModel } from './../ViewModels/drink-view-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DrinkModel } from '../Models/drink-model';
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class ProductStorageService {

  apiRoute:string = environment.apiBaseUrl+"/Drinks";

  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService) { }

  public getAllDrinks(): Observable<DrinkModel[]>{    
    return this.http.get<DrinkModel[]>(this.apiRoute);
  }

  public getDrink(id: number): Observable<DrinkModel>{
    return this.http.get<DrinkModel>(this.apiRoute+"/"+id);
  }
  public addDrink(drinkModel: DrinkModel): Observable<DrinkModel>{
    return this.http.post<DrinkModel>(this.apiRoute, drinkModel);
  }
  public updateDrink(drinkModel:DrinkModel):Observable<DrinkModel>{
    return this.http.put<DrinkModel>(this.apiRoute+'/'+drinkModel.id,drinkModel);
  }
  public deleteDrink(drinkId:number):Observable<null>{
    return this.http.delete<null>(this.apiRoute+'/'+drinkId);
  }
}
