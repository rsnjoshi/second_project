var _ = require('lodash');

console.log(_.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2))

console.log(_.compact([1, 2, 3, 4, false, null, '', 3]));

console.log(_.differenceWith([1, 2, 3, 4, 5, 9], [1, 2, 3, 4, 5, 4, 4, 4, 4, 4, 4], _.isEqual))

console.log(_.isEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

var users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(_.dropWhile(users, function (o) {
    console.log(o)
    return !o.active;
}));

console.log(_.findIndex(users, {
    user: 'barney',
    active: false
}));

var arr1 = [
    ['name', 'roshan_joshi'],
    ['age', 23],
    ['address', 'nepal']
]

console.log(_.fromPairs(arr1));

console.log(_.indexOf([1,2,3,4,5,6,2,5], 5));

console.log(_.indexOf([1,2,3,4,5,6,2,7,5], 2, 3));

console.log(_.join([1,2,3],'@'));

console.log(_.nth([1,2,3,4,5,6], -2));

console.log(_.nth([1,2,3,4,5,6], 3));

console.log(_.pull([1,2,3,4,5,6,6,6,7,8,9],6,8,1,2,3,4));

console.log(_.remove([0,1,2,3,4,5,6,7,8,9,10,11,12,13],(x)=>{
    return x % 2 == 0;
}));

console.log(_.slice([1,2,3,4,5,6], 2, 5));

console.log(_.sortedIndex([1,2,3,4,5,6,7], 8));

console.log(_.sortedUniq([1,2,2,3,3,3]));

console.log(_.union([2,3], [1, 2,3]));

console.log(_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'y': 1 }], 'x'));

console.log(_.without([1,2,3,4,5,6,7],2,3,4,5))

console.log(_.zip([1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]));

