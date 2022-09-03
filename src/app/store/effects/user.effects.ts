import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { createEffect, ofType } from '@ngrx/effects';

import { UserService } from 'src/app/services/user.service';
import * as fromUserActions from '../actions/user.actions';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserEffects {
  // loadUsers = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromUserActions.loadUsers),
  //     mergeMap((action) =>
  //       this.userService.getUsers().pipe(
  //         map((users) => new fromUserActions.loadUsersSuccess({ data: users })),
  //         catchError((error) => {
  //           console.log(error);
  //           return of(fromUserActions.loadUsersFailure({ error }));
  //         })
  //       )
  //     )
  //   )
  // );

  // loadUsers = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(fromUserActions.loadUsers),
  //     switchMap(() => {
  //       return this.userService.getUsers().pipe(
  //         map((users) => {
  //           fromUserActions.loadUsersSuccess({ data: users });
  //         }),
  //         catchError((error) => {
  //           console.log(error);
  //           return of(fromUserActions.loadUsersFailure({ error: error }));
  //         })
  //       );
  //     })
  //   )
  // );

  // fetchMasterVehicles = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(fromUserActions.loadUsers),
  //     switchMap(() => {
  //       return this.userService.getUsers().pipe(
  //         map((users) => fromUserActions.loadUsersSuccess({ users })),
  //         catchError((error) => {
  //           console.log(error);
  //           return of(fromUserActions.loadUsersFailure({ error }));
  //         })
  //       );
  //     })
  //   )
  // );

  constructor(private actions$: Actions, private userService: UserService) {}
}
