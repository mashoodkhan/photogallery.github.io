import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from 'src/app/imgservice.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  title = "Animals";
  showAnimals = [];
  constructor(private animalservice:ImgserviceService) { 
    this.showAnimals = this.animalservice.getAnimals();
  }

  ngOnInit(): void {
  }
 

}
