import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { increment, decrement, reset } from '../../counter.action';

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css'],
})
export class MycounterComponent implements OnInit {
  count$: Observable<number>;
  counter: any;

  constructor(private store: Store<{ count: number }>) {
    //retreiving data
    this.count$ = store.select('count');
    console.log(this.count$);
  }

  ngOnInit(): void {
    this.store.select('count').subscribe((data: any) => {
      this.counter = data.counter;
    });
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
