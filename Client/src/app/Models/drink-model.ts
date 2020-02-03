export class DrinkModel {
    public id: number;
    public name: string;
    public priceLiter: number;
    public actualVolume: number;
    public drinkCategoryId: number;
    constructor(values:Object={}){
        Object.assign(this,values);
    }
}
