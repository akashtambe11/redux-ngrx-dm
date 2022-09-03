import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserActions from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-redux';

  constructor(private store: Store, private router: Router) {}
  ngOnInit(): void {
    // this.store.dispatch(UserActions.loadUsers()); // action dispatch
  }

  onBtnClick(routeName: string) {
    if (routeName == 'counter') {
      this.router.navigate(['/counter']);

    } else if (routeName == 'user') {
      this.router.navigate(['/user']);
 
    }
  }
}
