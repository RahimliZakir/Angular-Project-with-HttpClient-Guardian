import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { 
  }

  products: Product[] = [
    {
      id: 1,
      name: "Pear",
      description: "Pears are fruits produced and consumed around the world, growing on a tree and harvested in late Summer into October.",
      img: "https://static.libertyprim.com/files/familles/poire-large.jpg?1569271830",
      price: 6.75
    },
    {
      id: 2,
      name: "Grapefruit",
      description: "The grapefruit (Citrus × paradisi) is a subtropical citrus tree known for its relatively large, sour to semisweet, somewhat bitter fruit.", img: "https://www.kirbysproduce.com/wp-content/uploads/2020/04/pink-grapefruit.jpg",
      price: 19.29
    },
    {
      id: 3,
      name: "Mango",
      description: "A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India. ",
      img: "http://www.greenada.com/Uploads/UrunResimleri/buyuk/greenada-meyvemango-adet-f949.jpg",
      price: 23.560
    },
    {
      id: 4,
      name: "Coconut",
      description: "The coconut tree (Cocos nucifera) is a member of the palm tree family (Arecaceae) and the only living species of the genus Cocos.",
      img: "https://static8.depositphotos.com/1000141/964/i/600/depositphotos_9647938-stock-photo-fresh-coconut.jpg",
      price: 14.4321
    }
  ];

  GetProducts(): Product[] {
    return this.products;
  }

  GetProductById(id: number): Product {
    return this.products.filter(prod => prod.id == id)[0];
  }
}
