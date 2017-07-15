import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-mw-media-item-template-form',
  templateUrl: 'media-item-template-form.component.html',
  styleUrls: ['media-item-template-form.component.scss']
})
export class MediaItemTemplateFormComponent {
  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
