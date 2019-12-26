'use strict';

import { assert } from 'chai';
import jsdom from 'jsdom';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const VideoStore = require(process.cwd() + '/src/modules/component/Bill/VideoStore').default;

describe('#VideoStore', () => {
  beforeEach(() => {
    // A super simple DOM ready for React to render into
    // Store this DOM and the window in global scope ready for React to access
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
  });

  it('will render Video Store details', () => {
    const fixture = require(process.cwd() + '/test/fixtures/bill.json');

    let renderedComponent = ReactTestUtils.renderIntoDocument(
      <Video Store data={fixture.videoStore} />
    ),
    component = ReactTestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'div'
    ).outerHTML;

    assert.include(component, 'Rentals');
    assert.include(component, 'Buy and Keep');
    assert.include(component, 'Title');
    assert.include(component, 'Cost');

    assert.include(component, '50 Shades of Grey');
    assert.include(component, '4.99');

    assert.include(component, 'That\'s what she said');
    assert.include(component, '9.99');

    assert.include(component, 'Brokeback mountain');
    assert.include(component, '9.99');

    assert.include(component, 'Total');
    assert.include(component, '24.97');
  });
});
