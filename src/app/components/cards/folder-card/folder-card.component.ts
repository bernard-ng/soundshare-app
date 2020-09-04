import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-folder-card',
  templateUrl: './folder-card.component.html',
  styleUrls: ['./folder-card.component.scss'],
})
export class FolderCardComponent implements OnInit {

  @Input() name;
  @Input() icon;
  @Input() count;
  constructor() { }

  ngOnInit() {}

}
