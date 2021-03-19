import { AgedBrie, Normal } from './item';

type GildedRoseItems = Normal | AgedBrie;

export class GildedRose {
  items: GildedRoseItems[];
  
  constructor(items: GildedRoseItems[] = []) {
    this.items = items;
  }
  
  updateQuality() {
    return this.items.map(function (item) {
      return item.decay();
    });
  }
}
