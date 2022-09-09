import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clap',
  templateUrl: './clap.component.html',
  styleUrls: ['./clap.component.scss']
})
export class ClapComponent implements OnInit {

  @Input() clapCount: number = 0;
  @Output() changeClap = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.clap();

  }
  clap() {
    this.changeClap.emit();
  }

}
