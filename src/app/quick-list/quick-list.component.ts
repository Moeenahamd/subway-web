import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-quick-list',
  templateUrl: './quick-list.component.html',
  styleUrls: ['./quick-list.component.css']
})
export class QuickListComponent implements OnInit {

  constructor(private quickListService:HeaderServiceService) { }
  quickList:any;
  ngOnInit(): void {
    this.quickListService.getQuickList().subscribe(data=>console.log(this.quickList=data))
  }
  QuickList(){
    console.log("Moeen AHmad");
  }

}
