import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
