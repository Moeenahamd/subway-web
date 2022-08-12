import { Component, OnInit } from '@angular/core';
import { DialogResult } from '../dialogResult';
import { HeaderServiceService } from '../header-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ChooseItemsDialogComponent } from '../choose-items-dialog/choose-items-dialog.component';
import { ItemsCountService } from '../items-count.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:DialogResult[];
  count:number=0;
  result:DialogResult;
  title:string="Cart";
  constructor(private cartItemCountService:ItemsCountService,private headerService:HeaderServiceService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.cartItems=this.headerService.getCartItem();
    console.log(this.cartItems);
    this.setCart();
  }
  incrementCartItem(index:number){
    this.cartItems[index].totalPrice=this.cartItems[index].totalPrice+this.cartItems[index].price;
    this.cartItems[index].cartItemsCount=this.cartItems[index].cartItemsCount+1;
    this.setCart();
  }
   decrementCartItem(index:number){	
    if(this.cartItems[index].cartItemsCount>1){	
    this.cartItems[index].totalPrice=this.cartItems[index].totalPrice-this.cartItems[index].price;	
    this.cartItems[index].cartItemsCount=this.cartItems[index].cartItemsCount-1;	
    }	
    this.setCart();	
  }
  setCart(){
    this.count=0;
    for(var i=0;i<this.cartItems.length;i++)
    {
      this.count=this.count+this.cartItems[i].totalPrice;
    }
  }
  deleteCart(index){
    this.cartItems.splice(index, 1);
    
    this.cartItemCountService.updatedItemCount(-1);
    this.setCart();
  }
  editCart(item,index) {
    let dialogRef=this.dialog.open(ChooseItemsDialogComponent, {
      width: '70%',
      
      data: {
        "cartItemsCount":1,
        "itemImage":item.itemImage,
        "head":item.itemName,
        "Breads":["Wheat Spesica","Honay Oet","Wheat","Italian","Parmesan Oregano"],
        "Veggis":["Lettuce","Tomato","Pickles","Jalpeno","Onion","Olives"],
        "Sauces":["South West Chalpeot","Thousand Iceland","BBQ Sauce","Musterd Sauce","Chilli Sauce","Olive Oil","Honey Mustard"],
        "Cheese":["With Cheese","Without Cheese"]
      }
    });
    dialogRef.afterClosed().subscribe(value => {
      this.result=value;
      if(this.result.cartItemsCount){ 
        this.cartItems[index]=value
      }
      
    });
    this.setCart();
  }
}
