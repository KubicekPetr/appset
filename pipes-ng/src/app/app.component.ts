import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;

  onInputChange(name: string, value: string) {
    this[name] = typeof(this[name]) === 'number' ? parseFloat(value) : value;
  }
}
