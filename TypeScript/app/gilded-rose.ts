import { Normal } from './item';

export class GildedRose {
  items: Normal[];
  
  constructor(items: Normal[] = []) {
    this.items = items;
  }
  
  updateQuality() {
    return this.items.map(function (item) {
      return item.decay();
    });
  }
}
