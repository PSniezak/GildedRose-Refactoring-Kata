import { AgedBrie, Normal, Sulfuras, BackstagePass } from './items';

type GildedRoseItems = Normal | AgedBrie | Sulfuras | BackstagePass;

export class GildedRose {
  items: GildedRoseItems[];
  
  constructor(items: GildedRoseItems[] = []) {
    this.items = items;
  }
  
  updateQuality = () => {
    return this.items.map((item) => {
      return item.decay();
    });
  }
}
