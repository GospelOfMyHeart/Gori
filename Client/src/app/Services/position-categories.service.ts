import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PositionCategoryModel } from '../Models/position-category';

@Injectable()
export class PositionCategoriesService {

  apiRoute:string = environment.apiBaseUrl+"/PositionCategories";

  constructor(
    private http: HttpClient,
   ) { }

  public getAllPositionCategories(): Observable<PositionCategoryModel[]>{    
    return this.http.get<PositionCategoryModel[]>(this.apiRoute);
  }

  public getPositionCategory(id: number): Observable<PositionCategoryModel>{
    return this.http.get<PositionCategoryModel>(this.apiRoute+"/"+id);
  }
  public addPositionCategory(PositionCategoryModel: PositionCategoryModel): Observable<PositionCategoryModel>{
    return this.http.post<PositionCategoryModel>(this.apiRoute, PositionCategoryModel);
  }
  public updatePositionCategory(PositionCategoryModel:PositionCategoryModel):Observable<PositionCategoryModel>{
    return this.http.put<PositionCategoryModel>(this.apiRoute+'/'+PositionCategoryModel.id,PositionCategoryModel);
  }
  public deletePositionCategory(PositionCategoryId:number):Observable<null>{
    return this.http.delete<null>(this.apiRoute+'/'+PositionCategoryId);
  }
}
