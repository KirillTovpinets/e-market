import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
import { Http } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { Ng2FileInputModule } from 'ng2-file-input';
import { SlickModule } from 'ngx-slick';
import { ChangeColorDirective } from "./directives/changeColorOnScroll.directive";
import { ScrollToModule } from 'ng2-scroll-to-el';
import {MatButtonModule, MatCheckboxModule, MatSliderModule, MatExpansionModule} from '@angular/material';
import {TranslateService} from 'ng2-translate';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/lite/admincomponent/admin.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './admin/lite/homecomponent/homepage.component';
import { CathalogComponent } from './admin/lite/cathalogcomponent/cathalog.component';
import { AddComponent } from './admin/lite/addcomponent/add.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MenuComponent } from './menu/menu.component';
import { ThumbComponent } from './thumb/thumb.component';
import { AddService } from './admin/lite/services/get-params.service';
import { NotificationsModule, NotificationsService } from 'angular4-notify';
import { ChartService } from './shared/chart.service';
import { ChartComponent } from './chart/chart.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { ContactsComponent } from './contacts/contacts.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestComponent } from './test/test.component';
import { GuaranteeComponent } from './guarantee/guarantee.component';
import { PaymentComponent } from './payment/payment.component';

registerLocaleData(localeRu, "ru");

@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective,
    MainComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    HomepageComponent,
    CathalogComponent,
    AddComponent,
    CatalogComponent,
    MenuComponent,
    ThumbComponent,
    ChartComponent,
    DetailsComponent,
    FooterComponent,
    ContactsComponent,
    PrivacyComponent,
    DeliveryComponent,
    AboutusComponent,
    TestComponent,
    GuaranteeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    ScrollToModule.forRoot(),
    ModalGalleryModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Ng2FileInputModule.forRoot({
       dropText:"Перетащите файлы сюда",
       browseText:"Обзор",
       removeText:"Удалить",
       invalidFileText:"Этот формат файла недопустим.",
       invalidFileTimeout:8000,
       removable:true,
       multiple:false,
       showPreviews:true,
       extensions:['jpg', 'png']
    }),
    NotificationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSliderModule,
    MatExpansionModule,
    HttpClientModule,
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    })
  ],
  providers: [AuthGuard, AddService, NotificationsService, ChartService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  isScrolling: boolean = false;
  ScrollBody($event:any):void{
    if ($event.target.scrollTop != 0) {
      this.isScrolling = true; 
    }
  }
}
