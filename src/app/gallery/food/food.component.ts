import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from 'src/app/imgservice.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  title = "Food";
  showFood = [];
  constructor(private foodService:ImgserviceService) {
     
    this.showFood = this.foodService.getFood();
   }

  ngOnInit(): void {
  }

}
