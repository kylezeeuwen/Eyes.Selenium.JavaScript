'use strict';

const _ = require('lodash');

const Eyes = require('eyes.selenium').Eyes;

const eyes = new Eyes();
eyes.setApiKey('QOGiL4D1LkSfX5BYk510005gByM1075rpOGiYY0RjOMWgkM110');

describe('Take visual regression snapshots', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = true;
  });

  it(`Has the bug`, function(done) {

    eyes.open(
      browser,
      'simple bug example',
      'element.all busted'
    );

    browser.get('https://github.com/applitools/Eyes.Selenium').then( () => {
      return element.all(by.css('div')).each(function(element) {
        console.log(`will not get here`);
      });
    }).then( () => {
      console.log(`done taking snapshots`);
      eyes.close(false);
      done();
    }).catch( (error) => {
      console.log('test error:');
      console.log(error);
      eyes.close(false);
      done();
    })
  })
});


