import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from 'src/app/imgservice.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit {
  title = "Nature";
  showNature = [];
  constructor(private natureService : ImgserviceService) {
    this.showNature = this.natureService.getNature();
   }

  ngOnInit(): void {
  }

}
