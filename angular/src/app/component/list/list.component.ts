import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES } from '../../mock-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes = HEROES;

  @Input() listData: object;

  constructor() { }

  ngOnInit() {
    
  }

}
