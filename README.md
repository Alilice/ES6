<!-- 2019.3.28 by kelly -->

### 1.const与let变量

var定义的变量存在变量提升，提升到变量的顶部

let与const声明的变量解决了这个问题，因为他们是块级作用域，在代码块（用{}表示）中使用let或const声明变量，改变量会存在暂时性死区

### 2.模板字面量

在es6之前，将字符串链接在一起的方法是+或者concat（）方法
模板字面量用``,可以包含用${expression}表示占位符

let message=`I come from ${county}`;

### 3.解构

在es6中，可以使用解构从数组和对象中提取值并赋值给独特的变量

<!-- 数组的解构 -->
const point=[1,21,3];
const [x,y,z]=point;
console.log(x,y,z);   //1 21 3

<!-- 对象的解构 -->
const people={
    name: 'xiao ming',
    age: '18',
    like: 'study'
}
const {name,age}=people;
console.log(name);    //xiao ming

### 4.对象字面量简写法

如果属性名称和所分配的变量名称一样，那么就可以从对象属性中删掉这些重复的变量名称
const people={
    name,
    age,
    action(){...}
}

### 5.for...of循环

for...of结合兄弟循环形式for循环和for...in循环的优势，默认情况下，包含以下数据类型：String，Array，Map和Set
注意：不包含object数据类型

for最大的确定是需要跟踪计数器和退出条件
for...in循环会访问所有可枚举的属性，意味着如果向数组的原型中添加任何其他属性，这些属性也会出现在循环中
forEach()是数组方法，只能放在数组中

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

### 6.展开运算符  (...)

展开运算符（用三个连续的（...）表示），是es6中的新概念，使你能够将字面量对象展开为多个元素

const food=['apple','banana'];
console.log(...food); //apple banana

<!-- 展开运算符的另外一个用途是结合数组 -->

const food=['apple','banana'];
const books=['yuwen','shuxue'];
const produce=[...food,...books];

console.log(produce);  // [ 'apple', 'banana', 'yuwen', 'shuxue' ]

### 7.剩余参数（可变参数 (...)）

剩余参数也是用三个连续的点（...）表示，使你能够将不定数量的元素表示为数组

<!-- 用途一:将变量赋数组时 -->

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;

console.log('items',items);  //[ 'cheese', 'eggs', 'milk', 'bread' ]

<!-- 用途二:可变参数函数 -->

function sum(...nums) {
  console.log('nums',nums); //[1,2,3]
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
sum(1,2,3);

### 8.es6箭头函数

<!-- this问题 -->
// 构造函数
function IceCream() {
  this.scoops = 0;
}

// 为 IceCream 添加 addScoop 方法
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // 一个箭头函数被传递给setTimeout
    this.scoops++;
    console.log('scoop added!');
    console.log(dessert.scoops);//1
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();

<!-- 默认参数函数 -->
    <!-- es5 -->
    function greet(name, greeting) {
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

    return `${greeting} ${name}!`;
    }
    <!-- es6 -->
    function greet(name = 'Student', greeting = 'Welcome') {
    return `${greeting} ${name}!`;
    }