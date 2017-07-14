import { Component } from '@angular/core';

@Component({
    selector: 'app-mw-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'First Media Item',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294415623654,
        isFavorite: false
    };
    onMediaItenDelete(mediaItem) {

    }
}
