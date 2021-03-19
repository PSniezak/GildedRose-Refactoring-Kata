import { increaseQuality, decreaseQuality } from './utils';

export class Item {
  readonly name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}

export class Normal extends Item {
  decay () {
    this.quality = decreaseQuality(this.quality);
    this.quality = this.sellIn <= 0 ? decreaseQuality(this.quality) : this.quality;
    this.sellIn -= 1;

    return this;
  }
}

export class AgedBrie extends Item {
  decay () {
    this.quality = increaseQuality(this.quality);
    this.quality = this.sellIn < 0 ? increaseQuality(this.quality) : this.quality;
    this.sellIn -= 1;

    return this;
  }
}