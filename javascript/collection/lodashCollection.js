var _ = require('lodash');

var obj1 = {
    'a': 'roshan',
    'b': 'rohan'
}

_.forEach(obj1, (value, key) => {
    console.log(value, key)
})

console.log(_.every([1, 2, 3, 4, 5, 5, 6], (x) => {
    return x < 7;
}))

var arr1 = [
    {
        name: 'rosahn josih',
        user: 'active'
    },
    {
        name: 'sandeep subedi',
        user: 'active'
    },
    {
        name: 'bipin gaire',
        user: 'inactive'
    }
]

console.log(_.filter(arr1, (obj) => {
    return obj.user === 'active';
}))


console.log(_.find(arr1, (obj) => {
    return obj.user === 'active';
}))

console.log(_.flatMap(arr1, (obj) => {

    return [obj, obj];
}))

console.log(_.groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (element) => {
    if (element % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}))

var array = [
    {
        name: 'roshan',
        surname: 'joshi',
        age: 28
    },
    {
        name: 'roshan',
        surname: 'khanal',
        age: 23
    }
];

console.log(_.keyBy(array, 'surname'))
console.log(_.keyBy(array, (obj) => {
    return obj.age;
}))


console.log(_.map(array, (obj) => {
    return obj.surname
}));

console.log(_.reduce([1, 2, 3, 4], (accumulator, current) => {
    return accumulator + current;
}, 0));


obj1 = {
    a: 10,
    e: 10,
    b: 30,
    c: 60,
    d: null
};

console.log(_.reduce(obj1, (accumulator, value, key) => {
    (accumulator[value] || (accumulator[value] = [])).push(key);
    return accumulator;
}, {}))

console.log(_.reject([{a:true, name:'first'}, {a:false, name:'second'}, {a:true, name:'third'}, {a: false, name:'fourth'}], (obj)=>{
    return obj.a;
}))

console.log(_.size([{a:1, b:2}, {a:2}]));

console.log(_.some([false, false, false, false, true], (element)=>{
    return element;
}));

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
  console.log(_.sortBy(users, [function(object) { return object.age; }]));