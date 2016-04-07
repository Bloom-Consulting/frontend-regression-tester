var Nightmare = require('nightmare'),
    vo = require('vo')

function * run(url, filename) {
    var nightmare = new Nightmare({
        show: false,
        width: 1024,
        height: 768
    })
    var dimensions = yield nightmare.goto(url)
        .wait('body')
        .evaluate(function() {
            var body = document.querySelector('body')
            return {
                height: body.scrollHeight,
                width:body.scrollWidth
            }
        })

    console.dir(dimensions)
    yield nightmare.viewport(dimensions.width, dimensions.height)
        .wait(1000)
        .screenshot(require('path')
            .join(__dirname, filename))

    yield nightmare.end()
}

vo(run)('http://wired.com', 'archive.png', function() {
    console.log('done')
})
