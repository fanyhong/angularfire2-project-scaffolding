import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './home/home.component';
import { provideRouter, RouterConfig } from '@angular/router';
import { 
  FIREBASE_PROVIDERS, 
  defaultFirebase,
  AngularFire, 
  AuthMethods,
  AuthProviders, 
  firebaseAuthConfig
} from 'angularfire2';
import { FirebaseConfig } from '../firebaseconfig'
import * as firebase from 'firebase';     // to avoid error 'could not find namespace firebase'


const routes: RouterConfig = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },  
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig.CONFIG_DATA)
  ],
  providers: [
    APP_ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    firebaseAuthConfig({
      method: AuthMethods.Popup,
      provider: AuthProviders.Google
    })
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
