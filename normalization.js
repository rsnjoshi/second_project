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

    console.log(obj);
}


