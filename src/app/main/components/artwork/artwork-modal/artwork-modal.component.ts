import {Component, Input, OnInit} from '@angular/core';
import {Art} from '../artwork.component';

export class Size {
  code: string;
  height: number;
  width: number;
  constructor(code: string, height: number, width: number) {
    this.code = code;
    this.height = height;
    this.width = width;
  }
}

export class CanvasOption {
  code: number;
  name: string;
  sizes: Size[];
  constructor(code: number, name: string, sizes: Size[]) {
    this.code = code;
    this.name = name;
    this.sizes = sizes;
  }
}

export class Product {
  option: CanvasOption;
  size: Size;
  constructor(option: CanvasOption, size: Size) {
    this.option = option;
    this.size = size;
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
  selectedProduct: Product;
  selectedSize: Size;
  canvasOptions: CanvasOption[] = [];
  adjustedHeight = 150 * 11 / 17;
  adjustedWidth = 150;
  ratio: number;

constructor() {
}

ngOnInit(): void {
  this.addCanvasOptions();
  this.selectedCategory = this.canvasOptions[0];
  this.selectedSize = this.selectedCategory.sizes[0];
  this.selectedProduct = new Product(this.selectedCategory, this.selectedSize);
}
  adjustPrice(price, criteria) {
    console.log(price, criteria);
  }
  public selectCategory(option: CanvasOption) {
    this.selectedCategory = option;
    console.log(JSON.stringify(this.selectedCategory));
  }
  public selectSize(value: Size) {
  console.log(value);
    this.selectedSize = value;
    this.ratio = this.selectedSize.height / this.selectedSize.width;
    this.adjustedHeight = Math.floor(150 * this.ratio);
    console.log(this.adjustedWidth, this.adjustedHeight);
  }
  public selectProduct() {
    console.log(this.selectedProduct);
    this.selectSize(this.selectedProduct.size);
    this.selectCategory(this.selectedProduct.option);
  }
  incrementQuantity(up: boolean) {
  console.log(up, this.qty);
    if (up) {
      ++this.qty;
    } else {
      --this.qty;
    }
    if (this.qty < 1) {
      this.qty = 1;
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
