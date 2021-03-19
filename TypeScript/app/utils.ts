const MAXIMUM_QUALITY = 50;
const MINIMUM_QUALITY = 0;

const isLessThanMaximum = (quality: number): boolean => quality < MAXIMUM_QUALITY;
const isOverMinimum = (quality: number): boolean => quality > MINIMUM_QUALITY;

export const increaseQuality = (quality: number, increaseBy: number = 1): number => isLessThanMaximum(quality) ? quality + increaseBy : quality;
export const decreaseQuality = (quality: number, decreaseBy: number = 1): number => isOverMinimum(quality) ? quality - decreaseBy :  quality;

export const decreaseSellIn = (sellIn: number): number => sellIn - 1;