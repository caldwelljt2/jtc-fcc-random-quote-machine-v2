//https://bible-api.com/psalms%20150
// import {ajax} from './jquery.min.js'

// let test = ajax({
//     'url': 'http://apis.is/car',
//     'type': 'GET',
//     'dataType': 'json',
//     'data': {'number': 'aa031'},
//     'success': function(response) {
//       console.log(response);
//     }
//   });

//   console.log(ajax)
let response = fetch("https://bible-api.com/psalms%20150")
// let myUrl = 'https://bible-api.com/psalms%20150'
async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    }

console.log(funcName())

fetch("https://bible-api.com/psalms%20150").then(res => res.json()).then(data = alert.log(data))