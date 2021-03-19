import { GildedRose } from '../app/gilded-rose';
import { Normal, AgedBrie, Sulfuras, BackstagePass } from '../app/items';

const items = [
    new Normal("+5 Dexterity Vest", 10, 20),
    new AgedBrie("Aged Brie", 2, 0),
    new Normal("Elixir of the Mongoose", 5, 7),
    new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new Normal("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);
var days: number = 2;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}