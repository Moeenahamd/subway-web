import { Component, OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-choose-items-dialog',
  templateUrl: './choose-items-dialog.component.html',
  styleUrls: ['./choose-items-dialog.component.css']
})
export class ChooseItemsDialogComponent implements OnInit {
  
  constructor( private cartService:HeaderServiceService,public dialogRef: MatDialogRef<ChooseItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    selecteBread:string="";
    selectedSaucesList:any[]=[];
    selectedViggisList:any[]=[];
    selectedCheese:string="";
    cartItemsCount:number=1;
    breads:string[];
  onViggisChange(value){
    this.selectedViggisList.push(value);
   }
   onBreadChange(value){
     this.selecteBread=value;
  }
  onSauceChange(value){
    this.selectedSaucesList.push(value);
  }
  onCheeseChange(value){
    this.selectedCheese=value;
 }
  ngOnInit(): void {
    this.breads=this.data.Breads;
    this.cartItemsCount=this.data.cartItemsCount;
  }
  addCartItem():void{
    this.cartItemsCount=this.cartItemsCount+1;

  }
  removeCartItem():void{
    if(this.cartItemsCount>0){
      this.cartItemsCount=this.cartItemsCount-1;
    }
  }
  onClose(): void {
    this.cartService.incrementCartItemCount();
   this.dialogRef.close({
    "itemImage":this.data.itemImage,
    "itemName":this.data.head,
    "cartItemsCount":this.cartItemsCount,
    "selecteBread":this.selecteBread,
    "selectedViggisList":this.selectedViggisList,
    "selectedSaucesList":this.selectedSaucesList,
    "selectedCheese":this.selectedCheese,
    "price":100,
    "totalPrice":100 * this.cartItemsCount,
  });
  }

}

