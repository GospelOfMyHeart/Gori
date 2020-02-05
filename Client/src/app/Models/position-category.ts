export class PositionCategoryModel {
    public id: number;
    public title: string;
    public description: string;
    constructor(values: object = {}){
        Object.assign(this, values);
    }
}
