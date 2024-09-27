import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createItem } from './store/items.actions'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AppState {
  items: string[];
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Lista de Items </h1>
    <input [(ngModel)]="newItem" placeholder="Agregar nuevo item" />
    <button (click)="addItem()" >Agregar</button>
    <ul>
      <li *ngfor="let item of items$ | async">{{ item }}</li>
    </ul>
  `,
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  items$: Observable<string[]>;
  newItem: string = '';

  constructor(private store: Store<AppState>) {
    this.items$ = store.select("items");
  }

  addItem() {
    if (this.newItem.trim()) {
      this.store.dispatch(createItem({item: this.newItem}));
      this.newItem = '';
    }
  }

}
