var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 517};
casper.on('page.error', function(msg, trace) {
    this.echo('Error: ' + msg, 'ERROR');
    for(var i=0; i<trace.length; i++) {
        var step = trace[i];
        this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
    }
});
casper.test.begin('Resurrectio test', function(test) {
    casper.start('https://fix.telstra.com/');
    casper.waitForSelector("form[name=Login] input[name='username']",
        function success() {
            test.assertExists("form[name=Login] input[name='username']");
            this.click("form[name=Login] input[name='username']");
        },
        function fail() {
            test.assertExists("form[name=Login] input[name='username']");
        });
    casper.waitForSelector("input[name='username']",
        function success() {
            this.sendKeys("input[name='username']", "akent86@bigpond.com");
        },
        function fail() {
            test.assertExists("input[name='username']");
        });
    casper.waitForSelector("form[name=Login] input[name='password']",
        function success() {
            test.assertExists("form[name=Login] input[name='password']");
            this.click("form[name=Login] input[name='password']");
        },
        function fail() {
            test.assertExists("form[name=Login] input[name='password']");
        });
    casper.waitForSelector("input[name='password']",
        function success() {
            this.sendKeys("input[name='password']", "Renae2809");
        },
        function fail() {
            test.assertExists("input[name='password']");
        });
    casper.waitForSelector(x("//a[normalize-space(text())='Log in']"),
        function success() {
            test.assertExists(x("//a[normalize-space(text())='Log in']"));
            this.click(x("//a[normalize-space(text())='Log in']"));
        },
        function fail() {
            test.assertExists(x("//a[normalize-space(text())='Log in']"));
        });

    casper.run(function() {test.done();});
});