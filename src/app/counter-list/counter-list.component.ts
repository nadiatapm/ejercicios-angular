import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable }
  from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counters: FirebaseListObservable<any>;//any sirve si no quieres especificar

  constructor(private af: AngularFireDatabase) {
    this.counters = this.af.list('/counter');
  }
  ngOnInit() {

  }

}
