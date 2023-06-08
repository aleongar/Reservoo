import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './service/auth/auth-interceptor.service';
import { FormsModule } from '@angular/forms';
import { RegistroCienteComponent } from './registro-ciente/registro-ciente.component';
import { RestaurantesInfoComponent } from './restaurantes-info/restaurantes-info.component';
import { SafeHTMLPipe } from './safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponentComponent,
    LoginComponent,
    RegistroCienteComponent,
    RestaurantesInfoComponent,
    SafeHTMLPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
