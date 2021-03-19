const MAXIMUM_QUALITY = 50;
const MINIMUM_QUALITY = 0;

const isLessThanMaximum = (quality: number): boolean => quality < MAXIMUM_QUALITY;
const isOverMinimum = (quality: number): boolean => quality > MINIMUM_QUALITY;

export const increaseQuality = (quality: number): number => isLessThanMaximum(quality) ? quality + 1 : quality;
export const decreaseQuality = (quality: number): number => isOverMinimum(quality) ? quality - 1 :  quality;

export const decreaseSellIn = (sellIn: number): number => sellIn - 1;