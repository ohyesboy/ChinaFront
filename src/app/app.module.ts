import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { BackListComponent } from './back-list/back-list.component';
import { RouterModule } from "@angular/router";
import { PrintComponent } from './print/print.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    OrderListComponent,
    BackListComponent,
    MainComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule .forRoot([
      {path: "", "component": MainComponent},
      {path: "print/:id", "component": PrintComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
