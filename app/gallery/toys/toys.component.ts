import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from 'src/app/imgservice.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {
  title = "Toys";
  showToy = [];
  constructor(private toyService:ImgserviceService) { 
    this.showToy = this.toyService.getToy();
  }

  ngOnInit(): void {
  }

}
