var fetch = require('node-fetch')
var _ = require('lodash')

fetch("http://www.json-generator.com/api/json/get/bQjBFfNale?indent=2")
    .then((response) => {
        response.json()
            .then((res) => {
                // normalizePhone(res);
                maleFemale(res);

            })
            .catch((error) => {
                console.log('error');
            })
    })
    .catch((error) => {
        console.log('error');
    })
    .finally(() => {
        console.log('aru kam garam na')
    })

function normalizePhone(payload) {
    var obj = _.keyBy(payload, (object) => {
        return object.phone
    });
    console.log(obj);
}


/* this function creates an object with keys male and female, categorize each and every object with
respect to their gender property*/

function maleFemale(payload) {
    var obj = _.reduce(payload, (accumulator, current) => {
        (accumulator[current.gender] || (accumulator[current.gender] = [])).push(current);
        return accumulator;
    }, {})
    eyeColor(obj);
    
}


function eyeColor(payload){
    function genderAndColor(gender, eye_color){
        this.gender = gender;
        this.eye_color = eye_color;
    }
    _.forEach(payload, (value, key)=>{
       var obj = _.reduce(value, (accumulator, current)=>{
            (accumulator[current.eyeColor] || (accumulator[current.eyeColor] = [])).push(current);
            return accumulator;
        }, {});
        console.log(new genderAndColor(key, obj));
    })
}