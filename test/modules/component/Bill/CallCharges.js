'use strict';

import { assert } from 'chai';
import jsdom from 'jsdom';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const CallCharges = require(process.cwd() + '/src/modules/component/Bill/CallCharges').default;

describe('#CallCharges', () => {
  beforeEach(() => {
    // A super simple DOM ready for React to render into
    // Store this DOM and the window in global scope ready for React to access
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
  });

  it('will render call charge details', () => {
    const fixture = require(process.cwd() + '/test/fixtures/bill.json');

    let renderedComponent = ReactTestUtils.renderIntoDocument(
      <CallCharges data={fixture.callCharges} />
    ),
    component = ReactTestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'div'
    ).outerHTML;

    assert.include(component, 'Called');
    assert.include(component, '07716393769');

    assert.include(component, 'Duration');
    assert.include(component, '00:23:03');

    assert.include(component, 'Cost');
    assert.include(component, '2.13');

    assert.include(component, 'Total');
    assert.include(component, '59.64');
  });
});
