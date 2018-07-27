describe('Home page', function() {
    before(function() {
        casper.start('https://selfservice-ci.apps.np.sdppcf.com/');
    });
    it('should have an element in DOM', function(){
        casper.waitForSelector('#correctElement', function() {
            '.login-form-heading'.should.be.inDOM;
        });
    });
    // it('should bring you to another page on click', function() {
    //     casper.thenClick('#destroyEverything', function(){
    //         this.echo('Clicked on Destory everything');
    //     });
    //     casper.waitFor(function check() {
    //         return this.evaluate(function() {
    //             return /urlthatwewant/.test(document.location.pathname);
    //         });
    //     }, function then() {
    //         // Succeeded
    //         this.echo('->Succeeded in loading the another page');
    //         this.capture(anotherPage.png');
    //     }, function timeout() {
    //         this.echo('Failed to load page').exit();
    //     });
    // });
})