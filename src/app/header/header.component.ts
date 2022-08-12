import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import { Header } from '../header';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsCountService } from '../items-count.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  itemList =[
    {
      name:"Home",
      route:"",
      menu:[]
    },
    {
      name:"Menu",
      route:"#",
      menu:[
        {name:"Drinks"},
        {name:"Deals"},
        {name:"Combo"},
        {name:"Salad"},
        {name:"6Inch"},
        {name:"FootLong"},
        {name:"Platter"},
      ]
    },
    {
      name:"News",
      route:"news",
      menu:[
      ]
    }
  ]


  header:Header;
  route:string;
  cartCount:number;
  headerColor:string="origional";
  constructor(private cartItemCountService:ItemsCountService,private router: Router,private headerService:HeaderServiceService) { }

  ngOnInit(): void {
    this.cartItemCountService.count.subscribe(data=>this.cartCount=data);
    this.headerService.getHeader().subscribe(data=>this.header=data);
  }
  setroute(index){
    if(this.header.navElements[index].route=="")
    {
      this.route=this.router.url;
    }
    else{
      this.route=this.header.navElements[index].route;
    }
    console.log(this.route);
    
  }
  getroute(index):string{
    if(this.header.navElements[index].route=="")
    {
      this.route=this.router.url;
    }
    else{
      this.route=this.header.navElements[index].route;
    }
    console.log(this.route);
    return "category";
  }
  @HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
  const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (number > 10) {
     this.headerColor="bg-dark"
  } else {
    
  this.headerColor="origional";
  }
  }
}
