import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';

// import { MediaItemService } from './media-item.service';
// import { lookupListToken } from './providers';

@Component({
  selector: 'app-mw-media-item-modal-form',
  templateUrl: 'media-item-modal-form.component.html',
  styleUrls: ['media-item-modal-form.component.scss']
})
export class MediaItemModalFormComponent {
  form;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private mediaItemService: MediaItemService,
  //   @Inject(lookupListToken) public lookupLists,
  //   private router: Router) {}

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   medium: this.formBuilder.control('Movies'),
    //   name: this.formBuilder.control('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('[\\w\\-\\s\\/]+')
    //   ])),
    //   category: this.formBuilder.control(''),
    //   year: this.formBuilder.control('', this.yearValidator),
    // });
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([ Validators.required, Validators.pattern('[\\w\\-\\s\\/]+') ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { 'year': {
          min: minYear,
          max: maxYear
        } };
    }
  }

  onSubmit(mediaItem) {
  //   this.mediaItemService.add(mediaItem)
  //     .subscribe(() => {
  //       this.router.navigate(['/', mediaItem.medium]);
  //     });
  console.log(mediaItem);
  }
}
