import { PositionCategoryModel } from './../position-category';
export class PositionCategoryFormModel {
    public positionCategoryModel: PositionCategoryModel;
    public isValid: boolean
    constructor(values:Object = {}){
        Object.assign(this,values);
    }
}
