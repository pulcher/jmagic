var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('http://google.com/', function() {
    // search for 'casperjs' from google form
    this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function() {
    // save the page for verification
    casper.page.render("google-first.jpg");

    // aggregate results for the 'first' search
    links = this.evaluate(getLinks);
    // now search for 'phantomjs' by filling the form again
    this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});

casper.then(function() {
    // save the page for verification
    casper.page.render("google-second.pdf")

    // aggregate results for the 'second' search
    links = links.concat(this.evaluate(getLinks));
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});
