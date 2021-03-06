import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KomponenComponent } from './komponen/komponen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KomponenlistComponent } from './komponenlist/komponenlist.component';
import { FindPipe } from './find.pipe';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { KomponenService } from './komponen/komponen.service';

@NgModule({
  declarations: [
    AppComponent,
    KomponenComponent,
    KomponenlistComponent,
    FindPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService, KomponenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
