# Question 1

## 1

/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/
/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.

 需要按照姓名（firstName、lastName）加上客戶編號（customerID）的組合進行字典序排序。**`lastName`** 和 **`customerID`** 的排序應該忽略任何非數字字符

```jsx
function sortUserName(users) {
    return users.sort((a, b) => {
        // 首先比較 firstName
        let nameCompare = a.firstName.localeCompare(b.firstName);
        if (nameCompare !== 0) return nameCompare;

        // 如果 firstName 相同，比較 lastName，考慮空字符串
        if (a.lastName && b.lastName) {
            nameCompare = a.lastName.localeCompare(b.lastName);
            if (nameCompare !== 0) return nameCompare;
        } else if (a.lastName || b.lastName) {
            return a.lastName ? 1 : -1; // 將空的 lastName 排在後面
        }

        // 如果名字相同，按 customerID 的數字值排序
        return parseInt(a.customerID, 10) - parseInt(b.customerID, 10);
    });
}
```

Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/

```jsx
// 假設層級如下：
const professionPriority = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1
};

function sortByType(users, priorityMap) {
    return users.sort((a, b) => {
        const priorityA = priorityMap[a.profession] || 0; // 未知職業視為最低優先級
        const priorityB = priorityMap[b.profession] || 0;
        return priorityB - priorityA;
    });
}

// 如果新增職業，只需更新映射表extension
const newProfessionPriority = {
    ...professionPriority,
    newProfession: 6 // 假設這是新的最高優先級職業
};

const usersArray = [
    {firstName: 'Alice', lastName: 'Zephyr', customerID: '001', note: 'Note 1', profession: 'engineer'},
    {firstName: 'Bob', lastName: 'Yellow', customerID: '002', note: 'Note 2', profession: 'student'},
    {firstName: 'Clara', lastName: 'Xavier', customerID: '003', note: 'Note 3', profession: 'systemAnalytics'},
    {firstName: 'David', lastName: 'Winston', customerID: '004', note: 'Note 4', profession: 'freelancer'},
    {firstName: 'Eve', lastName: 'Ventura', customerID: '005', note: 'Note 5', profession: 'productOwner'}
];

// sortByType(usersArray, professionPriority );
sortByType(usersArray, newProfessionPriority);
```

## 2

```html
/** HTML
<div class="container">
<div class="header">5/8 外出確認表</div>
<div class="content">
<ol class="shop-list">
<li class="item">麵包</li>
<li class="item">短袖衣服</li>
<li class="item">飲用水</li>
<li class="item">帳篷</li>
</ol>
<ul class="shop-list">
<li class="item">暈車藥</li>
<li class="item">感冒藥</li>
<li class="item">丹木斯</li>
<li class="item">咳嗽糖漿</li>
</ul>
</div>
<div class="footer">以上僅共參考</div>
</div>
**/
/** CSS
.container {
font-size: 14px;
}
.container .header {
font-size: 18px;
}
.container .shop-list {
list-style: none;
margin-left: -15px;
}
.container .shop-list li.item {
color: green;
}
.container .shop-list .item {
/* Explain why does this color not works, and how to fix make it work on 1st list */
color: blue;
}
/* Write styling make every other line give background color to next one */
**/

```

```css
.container .shop-list li.item{ color: green;}
和
.container .shop-list .item {color: blue;}  
 綠色的層級更高，所以只會顯示綠色

.container .shop-list li.item {
    color: green; /* 綠色適用於所有列表項 */
}

.container .shop-list li.item:nth-child(odd) {
    background-color: #f0f0f0; /* 每隔一個項目的背景顏色 */
}

.container ol.shop-list li.item {
    color: blue; /* （第一個列表）中的項目設置藍色 ，把層級蓋過第一層就可以覆蓋掉原本顏色*/
}**

```

## 3

/**
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
Please write down a function to console log unique value from this array.
**/

```jsx
function getUniqueNumber(items) {
    // 將數組轉換成 Set，自動移除重複項
    const uniqueItems = new Set(items);
    
    // 使用 console.log 打印所有獨特的值
    console.log(Array.from(uniqueItems));
}

或是

function getUniqueNumber(items) {
    let seen = {}; // 儲存看過的元素
    let unique = []; // 儲存獨特的元素

    for (let item of items) {
        if (!seen[item]) { // 如果這個元素尚未被記錄
            unique.push(item); // 加入到獨特元素的列表
            seen[item] = true; // 標記為已見
        }
    }

    console.log(unique);
}
```

## 4

/**Can you explain about Interface and Enum, and where will you be using, please make some examples.**/

### Interface : **員工角色的定義**

假設咖啡店有不同的員工，比如收銀員、咖啡師和經理。這些員工雖然職責不同，但他們都需要完成一個共同的任務：接待顧客。我們可以定義一個接口來確保每個員工都有接待顧客的能力。

```jsx
interface Employee {
    name: string;
    greetCustomer(): void; // 所有員工必須實現的方法
}

class Cashier implements Employee {
    constructor(public name: string) {}

    greetCustomer() {
        console.log(`${this.name} says: "Welcome to our coffee shop! How can I help you today?"`);
    }
}

class Barista implements Employee {
    constructor(public name: string) {}

    greetCustomer() {
        console.log(`${this.name} says: "Welcome! Your coffee will be ready soon."`);
    }
}

let alice = new Cashier("Alice");
let bob = new Barista("Bob");

alice.greetCustomer();  // Alice says: "Welcome to our coffee shop! How can I help you today?"
bob.greetCustomer();    // Bob says: "Welcome! Your coffee will be ready soon."

```

- 這樣無論員工的具體職位是什麼，他們都能按照店裡的標準來接待顧客。

### Enum : **定義咖啡類型**

咖啡店提供多種咖啡，比如美式、拿鐵和卡布奇諾。我們可以使用枚舉來定義這些不同的咖啡類型，使得訂單系統中只能選擇這些預定義的選項。

```jsx
enum CoffeeType {
    Americano,
    Latte,
    Cappuccino
}

function orderCoffee(type: CoffeeType) {
    console.log(`Order received for: ${CoffeeType[type]}`);
}

orderCoffee(CoffeeType.Latte); // Order received for: Latte

```

Enum的好處是它清晰定義了咖啡類型的選項，避免了錯誤或不一致的訂單，比如如果有人嘗試訂購不存在的咖啡類型，程序將無法編譯或執行相關的錯誤操作。

## 5

/**Can you explain the problem with the following code, and how to fix it.**/

```jsx
class Count extends React.Component {
constructor(props) {
super(props);
this.state = { count: 0 };
this.handleAddCount = this.handleAddCount.bind(this);
}
handleAddCount(){
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
}
render() {
return (
<div>
<h2>{this.state.count}</h2>
<button onClick={this.handleAddCount}>Add</button>
</div>
);
}
}
ReactDOM.render(
<Count />,
document.getElementById('root')
);
```

```jsx
// 修改 handleAddCount 方法，來確保每次執行這個funtion都會由新的值+1
handleAddCount(){
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
}
```

## 6

/**Please write the sample code to debounce handleOnChange**/

```jsx
var SearchBox = React.createClass({
render: function() {
return <input type="search" name="p" onChange={this.handleOnChange} />;
},
handleOnChange: function(event) {
// make ajax call
}
});
```

```jsx
function debounce(fn, delay) {
    let timer = null;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

 // 結合至React
var SearchBox = React.createClass({
    componentDidMount: function() {
        this.handleOnChange = debounce(this.handleOnChange.bind(this), 300);
    },

    render: function() {
        return <input type="search" name="p" onChange={this.handleOnChange} />;
    },

    handleOnChange: function(event) {
        console.log('Search value:', event.target.value);
        // 假設這裡會有一個 AJAX 請求
        // makeAjaxCall(event.target.value);
    }
});
```

改用funtion components 和Hooks寫法

```jsx
import React, { useState, useCallback } from 'react';

function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

function SearchBox() {
    const [value, setValue] = useState('');

    const handleOnChange = useCallback((event) => {
        setValue(event.target.value);
        console.log('Search value:', event.target.value);
        // 假設這裡會有一個 AJAX 請求
        // makeAjaxCall(event.target.value);
    }, []);

    const debouncedHandleOnChange = useCallback(debounce(handleOnChange, 300), []);

    return (
        <input type="search" name="p" onChange={debouncedHandleOnChange} />
    );
}

export default SearchBox;
```
