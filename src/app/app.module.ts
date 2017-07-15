import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MediaItemComponent } from '../pages/media-item/media-item.component';
import { MediaItemListComponent } from '../pages/media-item-list/media-item-list.component';
import { FavoriteDirective } from '../pages/favorite.directive';
import { CategoryListPipe } from '../pages/category-list.pipe';
import { MediaItemTemplateFormComponent } from '../pages/media-item-template-form/media-item-template-form.component';
import { MediaItemModalFormComponent } from '../pages/media-item-modal-form/media-item-modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemTemplateFormComponent,
    MediaItemModalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
