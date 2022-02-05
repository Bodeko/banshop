import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LocalizationModule } from '@banshop/russian/localization';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument({ logOnly: environment.production }) : [],
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    LocalizationModule,
  ],
  providers: [],
})
export class AppCoreModule {}