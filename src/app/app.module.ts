import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { Routes, RouterModule } from '@angular/router';
import { PullAfService } from './services/pull-af.service';
import { firebaseConfig } from './app.firebase.config';

export const routes: Routes = [
  { path: '', redirectTo: '/Allen_1', pathMatch: 'full' },
  { path: ':id', component: HeroSectionComponent }
];

export const appRoutingProviders: any[] = [

];
@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders, PullAfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
