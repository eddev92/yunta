import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/tools/menu/menu.component';
import { FooterComponent } from './components/tools/footer/footer.component';
import { TableComponent } from './components/tools/table/table.component';
import { PreloaderComponent } from './components/tools/preloader/preloader.component';
import { OurServicesComponent } from './components/tools/our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TableComponent,
    PreloaderComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
