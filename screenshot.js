var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare.goto('https://automundial.co')
  // .type('input[title="Search"]', 'github nightmare')
  // .click('#uh-search-button')
  // .wait('#main')
  // .evaluate(function () {
  //   return document.querySelector('#main .searchCenterMiddle li a').href
  // })
  .screenshot('index.png')
  .end()
  .then(function (result) {
    console.log(result)
  })
