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
        })
    })
});
