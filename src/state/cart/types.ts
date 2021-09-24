import {makeAutoObservable} from "mobx";

export enum ProductType {
  Cucumber = 'Cucumber',
  Pumpkin = 'Pumpkin',
  Potato = 'Potato',
}

export class Cart {
  public products: { [key: string]: number };

  constructor() {
    makeAutoObservable(this);
    this.products = {}
  }

  public addProduct(product: ProductType) {
    this.products[product] = this.products[product] ? this.products[product] + 1 : 1
  }

  public removeProduct(product: ProductType) {
    if (this.products[product]) {
      this.products[product] = this.products[product] - 1
    }
  }

  public deleteProduct(product: ProductType) {
    if (this.products[product]) {
      delete this.products[product]
    }
  }

  public clearCart() {
    this.products = {}
  }

  public get count(): number {
    let count = 0;
    if (this.products) {
      for (let product in this.products) {
        count += this.products[product];
      }
    }
    return count;
  }
}