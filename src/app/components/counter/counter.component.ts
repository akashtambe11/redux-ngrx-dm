import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromCounterActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('counterState').subscribe(({ counter }) => {
      this.count = counter;
    });
  }

  OnIncreaseClick() {
    this.store.dispatch(fromCounterActions.increment());
  }

  OnDecreaseClick() {
    this.store.dispatch(fromCounterActions.decrement());
  }

  OnResetClick() {
    this.store.dispatch(fromCounterActions.reset());
  }
}
