var _ = require('lodash')

function obj1(name, address){
    this.name = name;
    this.address = address;
}

function obj2(color){
    this.color = color;
}

obj1.prototype.occupation = "engineer";
obj2.prototype.height = "5|6";

console.log(_.assign({eid: "213123"}, new obj1('ram', 'nepal'), new obj2('grey')));

console.log(_.assignIn({eid: "342423"}, new obj1('ram', 'nepal'), new obj2('grey')))

var obj3 = {
    a: [
        {
            b:{
                c: 'hello'
            }
        },
        {
            d: "world"
        }
    ]
}

console.log(_.at(obj3, ['a[0].b.c', 'a[1].d']));


console.log(_.defaults( { 'a': 23 }, { 'a': 3 }), {'a': 23, 'b':'39'});

obj3 = {
    roshan: {age: 23},
    rohan: {age: 20},
    rojan: {age: 19}
}

console.log(_.findKey(obj3, (obj)=>{
    return obj.age < 20;
}))


