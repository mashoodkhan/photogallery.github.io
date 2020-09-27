import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgserviceService {

  visibleImg = [];
  showAnimals=[];
  showFood=[];
  showNature=[];
  showToy=[];
  getImages()
  {
     return this.visibleImg = images.filter((img)=>img.url);
  }
  getAnimals()
  {
     return this.showAnimals = images.filter((anCtg)=>anCtg.category == "animals");
  }
  getFood()
  {
     return this.showAnimals = images.filter((fdCtg)=>fdCtg.category == "food");
  }
  getNature()
  {
     return this.showAnimals = images.filter((ntCtg)=>ntCtg.category == "nature");
  }
  getToy()
  {
     return this.showAnimals = images.filter((tyCtg)=>tyCtg.category == "toy");
  }
  // getImage(id:number)
  // {
  //   return images.slice(0).find(image=>image.id == id);
  // }

  constructor() { }
}
const images = [

  {"id":1,"category":"animals","caption":"Daring :The Tiger","url":"assets/img/tiger.jpg"},
  {"id":2,"category":"animals","caption":"King of forest:The Lion","url":"assets/img/lion.jpg"},
  {"id":3,"category":"animals","caption":"Heavy weight :The Elephant","url":"assets/img/elephant.jpg"},
  {"id":4,"category":"animals","caption":"Lovable:The Dog","url":"assets/img/dog.jpg"},
  {"id":5,"category":"animals","caption":"Beautiful:The Zebra","url":"assets/img/zebra.jpg"},

  {"id":6,"category":"nature","caption":"King of forest:The Tiger","url":"assets/img/nature1.jpg"},
  {"id":7,"category":"nature","caption":"King of forest:The Tiger","url":"assets/img/nature2.jpg"},
  {"id":8,"category":"nature","caption":"King of forest:The Tiger","url":"assets/img/nature3.jpg"},
  {"id":9,"category":"nature","caption":"King of forest:The Tiger","url":"assets/img/nature4.jpg"},
  {"id":10,"category":"nature","caption":"King of forest:The Tiger","url":"assets/img/nature5.jpg"},

  {"id":11,"category":"food","caption":"King of forest:The Tiger","url":"assets/img/pizza.jpg"},
  {"id":12,"category":"food","caption":"King of forest:The Tiger","url":"assets/img/biryani.jpg"},
  {"id":13,"category":"food","caption":"King of forest:The Tiger","url":"assets/img/noodles.jpg"},
  {"id":14,"category":"food","caption":"King of forest:The Tiger","url":"assets/img/salad.jpg"},
  {"id":15,"category":"food","caption":"King of forest:The Tiger","url":"assets/img/chicken.jpg"},

  {"id":16,"category":"toy","caption":"King of forest:The Tiger","url":"assets/img/toy1.jpg"},
  {"id":17,"category":"toy","caption":"King of forest:The Tiger","url":"assets/img/toy2.jpg"},
  {"id":18,"category":"toy","caption":"King of forest:The Tiger","url":"assets/img/toy3.jpg"},
  {"id":19,"category":"toy","caption":"King of forest:The Tiger","url":"assets/img/toy4.jpg"},
  {"id":20,"category":"toy","caption":"King of forest:The Tiger","url":"assets/img/toy5.jpg"}


]