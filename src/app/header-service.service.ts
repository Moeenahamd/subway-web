import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Header } from './header';
import { Observable } from 'rxjs';
import { Footer } from './footer';
import { Category } from './category';
import {FootLong} from './footLong'
import { Slider } from './slider';
import {Cart} from './cart';
import { DialogResult } from './dialogResult';
import { TodaysMenu } from './todaysmenu';
@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  private observableCache: { [key: number]: Observable<Header> } = {};
  private clubCache: { [key: number]: Header } = {};
  private headerUrl="/assets/data/header.json";
  private footerUrl="/assets/data/footer.json";
  private categoriesUrl="/assets/data/categories.json";
  private footLongUrl="/assets/data/footLong.json";
  private sliderUrl="/assets/data/slider.json";
  private todaysmenuUrl="/assets/data/todaysmenulist.json";
  private featuresUrl="/assets/data/feature.json";
  private quicklistUrl="/assets/data/quicklist.json";
  private cartItemsCount=0;
  private cartItems:DialogResult[]=[];
  constructor(private http:HttpClient) { }
  getFeature():Observable<any>{
    return this.http.get<any>(this.featuresUrl);
  }
  getHeader():Observable<Header>{
    return this.http.get<Header>(this.headerUrl);
  }
  getFooter():Observable<Footer>{
    return this.http.get<Footer>(this.footerUrl);
  }
  getCategories():Observable<Category>{
    return this.http.get<Category>(this.categoriesUrl);
  }
  getFootLong():Observable<FootLong>{
    return this.http.get<FootLong>(this.footLongUrl);
  }
  getSlider():Observable<Slider>{
    return this.http.get<Slider>(this.sliderUrl);
  }
  getTodaysMenuList():Observable<TodaysMenu[]>{
    return this.http.get<TodaysMenu[]>(this.todaysmenuUrl);
  }
  incrementCartItemCount():void{
    this.cartItemsCount=this.cartItemsCount+1;
    console.log(this.cartItemsCount);
  }
  getCartItemsCount():number{
    return this.cartItemsCount;
  }
  addItemToCart(item:any):void{
    this.cartItems.push(item);
  }
  getCartItem():DialogResult[]{
    return this.cartItems;
  }
  getQuickList():Observable<any>{
    return this.http.get<any>(this.quicklistUrl);
  }
}
