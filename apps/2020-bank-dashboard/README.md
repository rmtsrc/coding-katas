# Bank dashboard

For the purpose of this exercise we are building a bank dashboard and would like you to add some functionality.

## The task

We would like you to design and build a simple app that displays some information about bank usage.

- Display a list of transactions including name of account holder and retailer where money was spent

NOTE: there is some delay on APIs which we would like you to handle elegantly

## Getting started

The main component is `App.js` and you can access the API at `http://localhost:3001/`

## What we are looking for

There is no right or wrong approach, what we are looking for is an understanding of good software development principles and seeing how you apply them.

- Do ask us questions as you go along
- Do feel free to look up any docs online
- Do write unit tests
- Do keep an eye on errors in console
- Don't worry about not finishing exercise in allocated time

## API

Starting:

- `cd api`
- `yarn`
- `yarn start`

The API consists of four endpoints accessible with GET requests

`http://localhost:3001/api/transactions`

```js
{
    id: number,
    userId:  number,
    retailerId: number,
    currency: string,
    amount: number
}[]
```

`http://localhost:3001/api/users/{userId}`

```js
{
    id: number,
    name: string,
    dateOfBirth: string
}
```

`http://localhost:3001/api/retailers/{retailerId}`

```js
{
    id: number,
    name: string,
    city: string
}
```
