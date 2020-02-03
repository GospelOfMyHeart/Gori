export class DrinkViewModel {
    public id: number;
    public name: string;
    public priceLiter: number;
    public actualVolume: number;
    public drinkCategoryName: string;
    constructor(values: Object={}){
        Object.assign(this, values);
    }
}
