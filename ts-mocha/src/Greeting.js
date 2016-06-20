/**
 * ts-mocha
 *
 * Copyright © 2016 Harold Pulcher. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

class Greeting {

  constructor(name) {
    this.name = name || 'Guest';
  }

  hello() {
    if (this.name === 'Harold')
      return 'Welcome, dude!'
      
    return `Welcome, ${this.name}!`;
  }

}

export default Greeting;
