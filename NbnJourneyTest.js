var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 517};
casper.on('page.error', function(msg, trace) {
    this.echo('Error: ' + msg, 'ERROR');
    for(var i=0; i<trace.length; i++) {
        var step = trace[i];
        this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
    }
});
casper.test.begin('NBN Speed test', function(test) {
    casper.start('https://nbnspeedtest.telstra.com/');
    casper.waitForSelector("tr:nth-child(7) td:nth-child(1)",
        function success() {
            test.assertExists("tr:nth-child(7) td:nth-child(1)");
            this.click("tr:nth-child(7) td:nth-child(1)");
        },
        function fail() {
            test.assertExists("tr:nth-child(7) td:nth-child(1)");
        });
    casper.waitForSelector(".speed-results-reason button",
        function success() {
            test.assertExists(".speed-results-reason button");
            this.click(".speed-results-reason button");
        },
        function fail() {
            test.assertExists(".speed-results-reason button");
        });

    casper.run(function() {test.done();});
});