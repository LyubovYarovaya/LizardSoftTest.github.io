import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "TZ"
  toggle = true


  cards: Card[] = [
    {title: 'Card one', text: 'One'},
    {title: 'Card one', text: 'One'},
    {title: 'Card one', text: 'One'},
    {title: 'Card one', text: 'One'},
    {title: 'Card one', text: 'One'}
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
