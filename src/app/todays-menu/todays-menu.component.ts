import { Component, OnInit ,HostListener } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig , MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogResult} from '../dialogResult';
import { ChooseItemsDialogComponent } from '../choose-items-dialog/choose-items-dialog.component';
import { HeaderServiceService } from '../header-service.service';
import { TodaysMenu } from '../todaysmenu';
import { ItemsCountService } from '../items-count.service';
@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css']
})
export class TodaysMenuComponent implements OnInit {
  title:string="Todays Delicious Menu";
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';
  result:DialogResult;
  cards:TodaysMenu[]=[];
  constructor(private cartItemCountService:ItemsCountService,public dialog: MatDialog,private cartService:HeaderServiceService) {}
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.cartService.getTodaysMenuList().subscribe(data=>{this.cards=data
    this.slides = this.chunk(this.cards, 3);
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }})
  }
  openDialog(item:any) {
    let dialogRef=this.dialog.open(ChooseItemsDialogComponent, {
      width: '70%',
    
      data: {
        "cartItemsCount":1,
        "itemImage":item.img,
        "head":item.description,
        "Breads":["Wheat Spesica","Honay Oet","Wheat","Italian","Parmesan Oregano"],
        "Veggis":["Lettuce","Tomato","Pickles","Jalpeno","Onion","Olives"],
        "Sauces":["South West Chalpeot","Thousand Iceland","BBQ Sauce","Musterd Sauce","Chilli Sauce","Olive Oil","Honey Mustard"],
        "Cheese":["With Cheese","Without Cheese"]
      }
    });
    dialogRef.afterClosed().subscribe(value => {
      this.result=value;
      this.cartService.addItemToCart(this.result);
      this.cartItemCountService.updatedItemCount(1);
    });
    
  }
  
  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
}
