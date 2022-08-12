import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import {Slider} from '../slider';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {  
  sliderItems:Slider;
  constructor(private footLongService:HeaderServiceService) { }

  ngOnInit(): void {
  this.footLongService.getSlider().subscribe(data=>this.sliderItems=data);
    
  }

}
