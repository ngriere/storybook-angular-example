import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bouton-custom',
  templateUrl: './bouton-custom.component.html',
  styleUrls: ['./bouton-custom.component.scss']
})
export class BoutonCustomComponent implements OnInit {

  @Input() type?: string;

  @Input() label?: string;

  @Input() isDisabled = false;

  constructor() {}

  ngOnInit(): void {}

  getTypeBouton(): string {
    if (this.type === 'primaire') {
      return 'bouton-custom--primaire';
    } else {
      return 'bouton-custom--secondaire';
    }
  }
}
