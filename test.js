const point = [10, 25, -34];
const [x, y, z] = point;
console.log(x, y, z);
console.log("x====", z);

const people = {
    name: 'xiao ming',
    age: '18',
    like: 'study'
}
const { name, age } = people;
console.log(name);

const food = ['apple', 'banana'];
const books = ['yuwen', 'shuxue'];
const produce = [...food, ...books];
console.log('produce', produce);

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;

console.log('items', items);

function sum(...nums) {
    console.log('nums', nums);

    let total = 0;
    for (const num of nums) {
        total += num;
        console.log('total', total);
    }
    return total;
}
sum(1, 2, 3);