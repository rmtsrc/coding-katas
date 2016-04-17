'use strict';

import { assert } from 'chai';
import jsdom from 'jsdom';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const Package = require(process.cwd() + '/src/modules/component/Bill/Package').default;

describe('#Package', () => {
  beforeEach(() => {
    // A super simple DOM ready for React to render into
    // Store this DOM and the window in global scope ready for React to access
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
  });

  it('will render package details', () => {
    const fixture = require(process.cwd() + '/test/fixtures/bill.json');

    let renderedComponent = ReactTestUtils.renderIntoDocument(
      <Package data={fixture.package} />
    ),
    component = ReactTestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'div'
    ).outerHTML;

    assert.include(component, 'Name');
    assert.include(component, 'Variety with Movies HD');
    assert.include(component, 'Sky Talk Anytime');
    assert.include(component, 'Fibre Unlimited');

    assert.include(component, 'Cost');
    assert.include(component, '50');
    assert.include(component, '5');
    assert.include(component, '16.4');

    assert.include(component, 'Total');
    assert.include(component, '71.4');
  });
});
