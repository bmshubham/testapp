import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mw-media-item',
  templateUrl: 'media-item.component.html',
  styleUrls: ['media-item.component.scss']
})
export class MediaItemComponent {

  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  name = 'The Redemption';

  wasWatched() {
    return true;
  }

  onDelete() {
    // console.log('deleted');
    this.delete.emit(this.mediaItem);
  }
}
