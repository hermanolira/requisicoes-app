import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'req-root',
  template: `
    <ul>
      <li class="text" *ngFor="let item of items | async">
        {{ item.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  
  items: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
}
