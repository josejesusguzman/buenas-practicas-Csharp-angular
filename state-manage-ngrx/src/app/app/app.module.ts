import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemsReducer } from '../store/items.reducer';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    AppComponent,
    CommonModule,
    StoreModule.forRoot({ items: itemsReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class AppModule { }
