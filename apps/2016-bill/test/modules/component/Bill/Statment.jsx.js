'use strict';

import { assert } from 'chai';
import jsdom from 'jsdom';

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

const Statment = require(process.cwd() + '/src/modules/component/Bill/Statment').default;

describe('#Statment', () => {
  beforeEach(() => {
    // A super simple DOM ready for React to render into
    // Store this DOM and the window in global scope ready for React to access
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
    global.window = document.defaultView;
    global.navigator = {userAgent: 'node.js'};
  });

  it('will render statment details', () => {
    const fixture = require(process.cwd() + '/test/fixtures/bill.json');

    let renderedComponent = ReactTestUtils.renderIntoDocument(
      <Statment data={fixture.statement} total={fixture.total} />
    ),
    component = ReactTestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'dl'
    ).outerHTML;

    assert.include(component, 'Generated');
    assert.include(component, '2015-01-11');

    assert.include(component, 'Due');
    assert.include(component, '2015-01-25');

    assert.include(component, 'Period');
    assert.include(component, '2015-01-26');
    assert.include(component, '2015-02-25');

    assert.include(component, 'Total');
    assert.include(component, '136.03');
  });
});
