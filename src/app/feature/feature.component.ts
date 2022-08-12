import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  features:any
  lable1:string
  lable2:string
  lable3:string
  lable4:string
  
  constructor(private featuresService:HeaderServiceService) { }

  ngOnInit(): void {
    this.featuresService.getFeature().subscribe(data=>{
      this.lable1=data.features[0].lable
      this.lable2=data.features[1].lable
      this.lable3=data.features[2].lable
      this.lable4=data.features[3].lable
    })
    
  }

}
