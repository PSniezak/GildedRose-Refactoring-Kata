import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Normal, AgedBrie, Sulfuras, BackstagePass } from '../app/items';

describe('Gilded Rose', () => {
    describe('General', () => {
        it('should add a new item with default values', () => {
            const gildedRose = new GildedRose([ new Normal('Beer', 0, 0) ]);

            const [item] = gildedRose.items;
    
            expect(item.name).to.equal('Beer');
            expect(item.sellIn).to.equal(0);
            expect(item.quality).to.equal(0);
        });

        it("should decrease an item's values after a day", () => {
            const gildedRose = new GildedRose([ new Normal('Apple', 1, 1) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.sellIn).to.equal(0);
            expect(item.quality).to.equal(0);
        });
    });

    describe('Quality System', () => {
        it("should decrease quality twice as fast when sell's date has passed", () => {
            const gildedRose = new GildedRose([ new Normal('Milk', 0, 10) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(8);
        });

        it('should never have an item with a negative quality', () => {
            const gildedRose = new GildedRose([ new Normal('Pepper', 0, 0) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(0);
        });

        it("should not increase an item's quality above 50", () => {
            const gildedRose = new GildedRose([ new AgedBrie('Aged Brie', 1, 50) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(50);
        });
    });

    describe('Aged Brie', () => {
        it("should increase in quality the older it gets", () => {
            const gildedRose = new GildedRose([ new AgedBrie('Aged Brie', 5, 5) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(6);
        });
    });

    describe('Sulfuras, Hand of Ragnaros', () => {
        it("should not decrease in sellIn or quality", () => {
            const gildedRose = new GildedRose([ new Sulfuras('Sulfuras, Hand of Ragnaros', 1, 80) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.sellIn).to.equal(1);
            expect(item.quality).to.equal(80);
        });
    });

    describe('Backstage passes', () => {
        it("should increase in quality by 1 with a sell in above 10", () => {
            const gildedRose = new GildedRose([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 11, 0) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(1);
        });

        it("should increase in quality by 2 with a sell in between 10 and 6", () => {
            const gildedRose = new GildedRose([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 7, 0) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(2);
        });

        it("should increase in quality by 3 with a sell in between 1 and 5", () => {
            const gildedRose = new GildedRose([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 2, 0) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(3);
        });

        it("should have a quality of 0 after the sellIn date", () => {
            const gildedRose = new GildedRose([ new BackstagePass('Backstage passes to a TAFKAL80ETC concert', 0, 5) ]);

            const [item] = gildedRose.updateQuality();

            expect(item.quality).to.equal(0);
        });
    });
});
