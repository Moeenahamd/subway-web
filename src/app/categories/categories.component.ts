import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import { Category } from '../category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryList :Category; 
  constructor(private categoryService:HeaderServiceService) { }

  ngOnInit(): void {
    
    this.categoryService.getCategories().subscribe(data=>this.categoryList=data);
  }

}
