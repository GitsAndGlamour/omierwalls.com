import { Component, OnInit } from '@angular/core';

export class Art {
  url: string;
  title: string;
  media: string;
  isOriginalAvailable?: string;
  price: number;
  description: string;
  constructor(url, title, price, description, media, isOriginalAvailable?) {
    this.url = url;
    this.title = title;
    this.media = media;
    this.price = price;
    this.description = description;
    this.isOriginalAvailable = isOriginalAvailable ? isOriginalAvailable : false;
  }
}

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {
  artwork: Art[] = [];
  url = 'http://via.placeholder.com/300x300';
  selectedArt: Art;
  constructor() {
  }

  ngOnInit() {
  }
  addArtwork() {
    const artwork: Art[] = [];
    artwork.push(new Art(this.url, 'title 1', 599.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'painting'));
    artwork.push(new Art(this.url, 'title 2', 670.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'drawing'));
    artwork.push(new Art(this.url, 'title 3', 420.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'other'));
    artwork.push(new Art(this.url, 'title 4', 700.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'painting'));
    artwork.push(new Art(this.url, 'title 5', 430.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'drawing'));
    artwork.push(new Art(this.url, 'title 6', 250.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'other'));
    artwork.push(new Art(this.url, 'title 7', 400.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'painting'));
    artwork.push(new Art(this.url, 'title 8', 140.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'drawing'));
    artwork.push(new Art(this.url, 'title 9', 800.00, 'Dolorum culpa temporibus illum ab esse est, eligendi fugit' +
      ' veniam excepturi modi minus, atque ipsam magni incidunt sed, quia hic dolore quos.', 'other', true));
    return Array.from(artwork);
  }
  selectArt(art: Art) {
    this.selectedArt = art;
  }
}
