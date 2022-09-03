import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store';
// import { reducers, metaReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
// import { UserEffects } from './store/effects/user.effects';
import { CounterComponent } from './components/counter/counter.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent, UserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   },
    // }),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(AppReducers),
    // StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(AppEffects),
    // EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


