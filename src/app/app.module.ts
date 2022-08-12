import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { MatDialogModule,MatDialog ,MatDialogRef} from '@angular/material/dialog';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component';
import { ChooseItemsDialogComponent } from './choose-items-dialog/choose-items-dialog.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CommonModule } from '@angular/common';
import { QuickListComponent } from './quick-list/quick-list.component';
import { PlatterComponent } from './platter/platter.component';
import { SaladComponent } from './salad/salad.component';
import { DealsComponent } from './deals/deals.component';
import { ComboComponent } from './combo/combo.component';
import { FootLongComponent } from './foot-long/foot-long.component';
import { SixInchComponent } from './six-inch/six-inch.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeatureComponent } from './feature/feature.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent} from './map/map.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    RegisterComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    TodaysMenuComponent,
    ChooseItemsDialogComponent,
    QuickListComponent,
    PlatterComponent,
    SaladComponent,
    DealsComponent,
    ComboComponent,
    FootLongComponent,
    SixInchComponent,
    CategoriesComponent,
    FeatureComponent,
    CartComponent,
    CheckOutComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule,
    MatDialogModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbnyhvcUcR8WGCCZYjjNws3ah40XOfoDs'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
