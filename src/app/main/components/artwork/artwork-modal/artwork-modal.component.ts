import {Component, Input, OnInit} from '@angular/core';
import {Art} from '../artwork.component';

@Component({
  selector: 'app-artwork-modal',
  templateUrl: './artwork-modal.component.html',
  styleUrls: ['./artwork-modal.component.css']
})
export class ArtworkModalComponent implements OnInit {

  @Input() public art: Art;
  price: number;
  constructor() { }

  ngOnInit() {
  }
  adjustPrice(price, criteria) {
    console.log(price, criteria);
  }

}
