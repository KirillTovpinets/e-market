import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app/app.component';

import { SlickModule } from 'ngx-slick';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { ChangeColorDirective } from "./directives/changeColorOnScroll.directive";
import { ScrollToModule } from 'ng2-scroll-to-el';

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
import { MainRuComponent } from './main-ru/main-ru.component';

@NgModule({
  declarations: [
    AppComponent,
    Parallax,
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
    MainRuComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    ScrollToModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NotificationsModule
  ],
  providers: [AuthGuard, AddService, NotificationsService, ChartService],
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
