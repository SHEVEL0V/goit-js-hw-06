const items = document.querySelectorAll(".item");
const itemsQty = items.length;
console.log(`Number of categories: ${itemsQty}`);

const itemFirstTitle = items[0].children[0].textContent;
const itemFirstQtyEl = items[0].querySelectorAll("li").length;

const itemSecondTitle = items[1].children[0].textContent;
const itemSekondQtyEl = items[1].querySelectorAll("li").length;

const itemThirdTitle = items[2].children[0].textContent;
const itemTirdQtyEl = items[2].querySelectorAll("li").length;

console.log(`Category: ${itemFirstTitle}`);
console.log(`Elements: ${itemFirstQtyEl}`);

console.log(`Category: ${itemSecondTitle}`);
console.log(`Elements: ${itemSekondQtyEl}`);

console.log(`Category: ${itemThirdTitle}`);
console.log(`Elements: ${itemTirdQtyEl}`);
