const fetch = require('node-fetch');
var url = "https://en.wikipedia.org/w/api.php";

var params = {
    action: "query",
    list: "search",
    srsearch: "Nelson Mandela",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

const promise1 = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve('yo!')
    }, 5000);

    // resolve('hello');

    // setTimeout(function () {
    //     resolve('foo');
    // }, 5000);

})

promise1.then(function (value) {
    console.log(value);
})

//setTimeout(function () { console.log('hello') }, 100);

// fetch(url)
//     .then(function (response) {
//         let a = Promise.resolve(response);
//         a.then(console.log(value));
//     });

    // .then(function (response) {
    //     if (response.query.search[0].title === "Nelson Mandela") {
    //         console.log("Your search page 'Nelson Mandela' exists on English Wikipedia");
    //     }
    // })