var fetch = require('node-fetch')

var prom = fetch("http://www.json-generator.com/api/json/get/cuQryUYrNe?indent=2")

prom
    .then((response)=>{
        response.json()
            .then((res)=>{
                console.log(res)
            })
    })


    