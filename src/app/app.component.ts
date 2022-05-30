import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dollar:any;
  updated:any;

  changeToRupees(){
    this.updated = this.dollar*77.55
  }
}

