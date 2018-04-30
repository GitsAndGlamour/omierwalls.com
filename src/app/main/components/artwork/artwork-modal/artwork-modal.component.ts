import {Component, Input, OnInit} from '@angular/core';
import {Art} from '../artwork.component';

class Size {
  code: string;
  height: number;
  width: number;
  constructor(code: string, height: number, width: number) {
    this.code = code;
    this.height = height;
    this.width = width;
  }
}

class CanvasOption {
  code: number;
  name: string;
  sizes: Size[];
  constructor(code: number, name: string, sizes: Size[]) {
    this.code = code;
    this.name = name;
    this.sizes = sizes;
  }
}

@Component({
  selector: 'app-artwork-modal',
  templateUrl: './artwork-modal.component.html',
  styleUrls: ['./artwork-modal.component.css']
})
export class ArtworkModalComponent implements OnInit {

  @Input() public art: Art;
  price: number;
  size: Size;
  qty = 1;
  amountPerSqIn: 0.25;
  selectedCategory: CanvasOption;
  selectedSize: Size;
  canvasOptions: CanvasOption[] = [];

constructor() {
}

ngOnInit(): void {
  this.addCanvasOptions();
  this.selectedCategory = this.canvasOptions[0];
  this.selectedSize = this.selectedCategory.sizes[0];
}
  adjustPrice(price, criteria) {
    console.log(price, criteria);
  }
  public selectCategory(option: CanvasOption) {
  console.log(option);
  this.selectedCategory = option;
    console.log(JSON.stringify(this.selectedCategory));
  }
  public selectSize(value: any) {
    console.log(value);
    this.selectedSize = value;
  }

  incrementQuantity(up: boolean) {
  console.log(up, this.qty);
    if (up) {
      ++this.qty;
    } else {
      --this.qty;
    }
  }

  addCanvasOptions() {
    this.canvasOptions.push(new CanvasOption(1, 'Reccommended', []));
    this.canvasOptions.push(new CanvasOption(2, 'Square', []));
    this.canvasOptions.push(new CanvasOption(3, 'Panoramic', []));
    this.canvasOptions.push(new CanvasOption(4, 'Large', []));
    this.canvasOptions.push(new CanvasOption(5, 'Small', []));
    this.canvasOptions[0].sizes.push(new Size('a', 11, 17));
    this.canvasOptions[0].sizes.push(new Size('b', 22, 34));
    this.canvasOptions[0].sizes.push(new Size('c', 33, 51));
    this.canvasOptions[1].sizes.push(new Size('a', 8, 8));
    this.canvasOptions[1].sizes.push(new Size('b', 10, 10));
    this.canvasOptions[1].sizes.push(new Size('c', 16, 16));
    this.canvasOptions[1].sizes.push(new Size('d', 24, 24));
    this.canvasOptions[1].sizes.push(new Size('e', 30, 30));
    this.canvasOptions[1].sizes.push(new Size('f', 45, 45));
    this.canvasOptions[2].sizes.push(new Size('a', 8, 24));
    this.canvasOptions[2].sizes.push(new Size('b', 10, 42));
    this.canvasOptions[2].sizes.push(new Size('c', 12, 36));
    this.canvasOptions[2].sizes.push(new Size('d', 15, 45));
    this.canvasOptions[2].sizes.push(new Size('e', 16, 48));
    this.canvasOptions[2].sizes.push(new Size('f', 18, 54));
    this.canvasOptions[3].sizes.push(new Size('a', 16, 20));
    this.canvasOptions[3].sizes.push(new Size('b', 24, 36));
    this.canvasOptions[3].sizes.push(new Size('c', 18, 24));
    this.canvasOptions[3].sizes.push(new Size('d', 30, 40));
    this.canvasOptions[3].sizes.push(new Size('e', 36, 54));
    this.canvasOptions[3].sizes.push(new Size('f', 40, 40));
    this.canvasOptions[4].sizes.push(new Size('a', 8, 8));
    this.canvasOptions[4].sizes.push(new Size('b', 12, 8));
    this.canvasOptions[4].sizes.push(new Size('c', 11, 14));
    this.canvasOptions[4].sizes.push(new Size('d', 12, 12));
    this.canvasOptions[4].sizes.push(new Size('e', 12, 18));
    this.canvasOptions[4].sizes.push(new Size('f', 16, 20));
  }
}
