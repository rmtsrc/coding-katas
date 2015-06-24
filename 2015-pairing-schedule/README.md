# Pairing generator

## Summary

In our developer team we use pair programming: that means every day two
developers work together and we try to swap the pairs every day so that
everyone pairs with everyone else.

We want to create a simple web application that will generate all the possible
programming pairs in a group of developers.

The application must run in a browser and must be written entirely in
JavaScript, preferably making use of an MVC framework like Backbone.js,
AngularJS, Ember.JS.

## Requirements

The application will allow you to enter an arbitrary number of names and will
generate a list of all the possible combinations.

For example, if you enter the following developer names:

  * Sam
  * Richard
  * Francesco
  * Mateusz

The output would be:

  * Sam - Richard
  * Sam - Francesco
  * Sam - Mateusz
  * Richard - Francesco
  * Richard - Mateusz
  * Francesco - Mateusz

## Validation

The application must not allow you to:

* enter the same name twice
* enter an empty name

You can add additional validation rules as you see fit.

## Data persistence

For the purpose of this test, you are not required to persist the data.
All data will be lost when you close the app.

## What we are looking for

Please develop this as you would a piece of production code.

We are particularly interested in the following:

  * Testing
  * Performance
  * Maintainability

You should also aim for:

  * Clean separation of JavaScript and HTML
  * Well documented and commented code
  * Accessible, semantic, valid HTML
  * Cross-browser compatibility
  * User input parsing and validation
  * Clean visual design
