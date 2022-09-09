import {Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  clap = 15;
datas : any =[
  {
    frameworkName :'Angular',
    headerName : 'How to Learn Angular',
    description : 'Learn one way to build applications with Angular ' +
      'and reuse your code and abilities to build apps for any deployment ' +
      'target. For web, mobile web, native mobile and native desktop.',

  }

];

  constructor() { }

  ngOnInit(): void {

  }

  clickClap() {
    console.log('alkışlandı...');
    this.clap++;
  }

}
