Bill Viewer
===========

## Introduction

Displays a customer's bill.

## Requirements

* Complete the task in a language of your choice using whatever tools or frameworks that you want.
* Must consume bill JSON from a HTTP endpoint: `bill.json`
* JSON must be consumed by a server acting as a proxy.

## What we're looking for

* TDD/BDD
* Simple and eloquent code
* Knowledge of front end development
* Bill should be easy to understand (good user experience)

## Setup and Prerequisites
### npm
In order to use or develop, you will need **[npm](https://www.npmjs.com/)** (Node Package Manager) installed on your computer.

In order to check whether you have **npm** installed, run the following command in the command line:
```
npm -v
```
If the command line returns the following response:
```
-bash: npm: command not found
```
You can install **npm** by downloading/installing **[Node.js](https://nodejs.org/download/)** on your computer. Or using your systems package manager e.g. `brew install node`

## Running tests and server
```
make
```

Note: this will only run on Mac or Linux machines (due to usage of symlinks).

To run tests on there own `npm test` can be used.

Demo will be running at: [http://localhost:3000](http://localhost:3000)

## Created with
* [webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [React](https://facebook.github.io/react/)
* [React Router](https://rackt.github.io/react-router/)
* [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/)
