import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventionsComponent } from './inventions/inventions.component';
import { DetailsComponent } from './details/details.component';
import { InventionService } from './InventionService';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'inventions',
        pathMatch: 'full'
      },
      {
        path: 'inventions',
        component: InventionsComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
