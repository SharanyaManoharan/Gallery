import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


//Component imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { appRoutes } from '../routes';
//Custom Service imports
import { ImageService } from './image/shared/image.service'
//custom pipes
import { ImageFilterPipe } from './image/shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageDetailComponent,
    ImageFilterPipe 
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ImageService, ImageFilterPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
