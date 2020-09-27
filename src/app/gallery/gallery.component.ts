import { Component, OnInit } from '@angular/core';
import { ImgserviceService } from '../imgservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  title = 'Latest Images';
  displayImages = [];
  
  constructor(private imgservice : ImgserviceService,private router:Router)
   {   
  }
  ngOnInit(): void {
    this.displayImages = this.imgservice.getImages();
  }
 

  

  
}
