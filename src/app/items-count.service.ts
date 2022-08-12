import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ItemsCountService {
  private message= new BehaviorSubject <number>(0);
  count = this.message.asObservable();
  itemCount:number=0;
  constructor() { }

  updatedItemCount(data: number){
    this.itemCount=this.itemCount + data;
    this.message.next(this.itemCount);
  }
}
