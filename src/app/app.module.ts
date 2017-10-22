import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/tools/menu/menu.component';
import { FooterComponent } from './components/tools/footer/footer.component';
import { PreloaderComponent } from './components/tools/preloader/preloader.component';
import { OurServicesComponent } from './components/tools/our-services/our-services.component';
import { PortafolioComponent } from './components/tools/portafolio/portafolio.component';
import { TableModule } from './components/tools/table/table.module';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TableComponent } from './components/tools/table/table.component';
import { AppService } from './app.services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PreloaderComponent,
    OurServicesComponent,
    PortafolioComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
