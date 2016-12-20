import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '论楼主';
  words:Array<string>=[
    '哦，听说楼主很帅？',
    '是吗，没见过啊',
    '真的真的，那天去软件园看到的'
  ];

}
