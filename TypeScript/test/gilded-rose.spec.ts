import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', () => {
    describe('General', () => {
        it('should add a new item with default values', () => {
            const gildedRose = new GildedRose([ new Item('Beer', 0, 0) ]);

            const [item] = gildedRose.items;
    
            expect(item.name).to.equal('Beer');
            expect(item.sellIn).to.equal(0);
            expect(item.quality).to.equal(0);
        });

        it("should decrease an item's values after a day", () => {
            const gildedRose = new GildedRose([ new Item('Apple', 1, 1) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.sellIn).to.equal(0);
            expect(item.quality).to.equal(0);
        });
    });

    describe('Quality System', () => {
        it("should decrease quality twice as fast when sell's date has passed", () => {
            const gildedRose = new GildedRose([ new Item('Milk', 0, 10) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(8);
        });

        it('should never have an item with a negative quality', () => {
            const gildedRose = new GildedRose([ new Item('Pepper', 0, 0) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(0);
        });

        it("should not increase an item's quality above 50", () => {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 50) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(50);
        });
    });

    describe('Aged Brie', () => {
        it("should increase in quality the older it gets", () => {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 5) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(6);
        });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
        it("should not decrease in sellIn or quality", () => {
            const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 80) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.sellIn).to.equal(1);
            expect(item.quality).to.equal(80);
        });
    });
});
