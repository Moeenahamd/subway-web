import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';
import { Footer } from '../footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer:Footer
  constructor(private footerService:HeaderServiceService) { }

  ngOnInit(): void {
    this.footerService.getFooter().subscribe(data=>this.footer=data);
  }

}
