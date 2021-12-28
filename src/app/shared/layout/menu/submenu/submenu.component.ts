import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmenuComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
