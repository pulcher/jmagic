/**
 * ts-mocha
 *
 * Copyright © 2016 Harold Pulcher. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import Greeting from '../src/Greeting';

describe('Greeting', () => {

    describe('greeting.hello()', () => {

    // before(function() {
    //   this.attempts = 2;
    // });

    // after(function() {
    //   expect(this.attempts).to.be.equal(0);
    // });

    // beforeEach(function() {
    //   this.attempts--;
    // });

    // afterEach(function() {
    //   // runs after each test in this block
    // });

    it.only('should return welcome message for a guest user', () => {
      const greeting = new Greeting();
      const message = greeting.hello();
      expect(message).to.be.equal('Welcome, Guest!');
    });

    it('should return welcome message for a named user', () => {
      const greeting = new Greeting('John');
      const message = greeting.hello();
      expect(message).to.be.equal('Welcome, John!');
    });

  });
});

