import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'jardin-bruyere-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
