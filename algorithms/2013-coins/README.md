JS / FRONT END DEVELOPER ASSESSMENT
-----------------------------------

## Summary

Write a simple application that given a number of pennies will calculate the minimum number of Sterling coins needed to make that amount.

 Eg. 123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p

## Requirements

 * Account for only the common £2, £1, 50p, 20p, 2p and 1p coins. Ignore those commemorative £5 coins.
 * You MUST use JavaScript, CSS and HTML to do this. No server-side code is allowed.
 * The user interface should consist of a input field that accepts an 'amount' string (Eg. 92p, £2.12) 
    and displays the denominations needed when the user hits 'enter'.

## What we are looking for

 * Verbalising how you're approaching and solving the problem and breaking it down as you're coding. 
 * High quality and maintainable code.
 * Accessible, semantic, valid HTML.
 * Use of test driven development and writing new unit tests.
 * Well documented and commented code.
 * Follow coding standards.
 * Extensible user input parsing and validation.
 * Experience of using debugging tools such as FireBug or Web Inspector.
 * To sensibly separate functionality (Eg, input, models, utils, views) following OO paradigms.
 * Clean visual design.
 * Optional use of a JavaScript framework such as JQuery.
 * Optionally mocking any of your object(s).
 * Ability to find documentation online.
 
## Test Data

Our tester has given us some test data and started writing some Jasmine tests (test/coinsSpec.js) to help you understand the expected user input to this application.

In the first column is a string of user input, and in the second the desired integer expressed as pence.

	| input         | pence (canonical) | description                               |
	| 4             | 4                 | single digit                              |
	| 85            | 85                | double digit                              |
	| 197p          | 197               | pence symbol                              |
	| 2p            | 2                 | pence symbol single digit                 |
	| 1.87          | 187               | pounds decimal                            |
	| £1.23         | 123               | pound symbol                              |
	| £2            | 200               | single digit pound symbol                 |
	| £10           | 1000              | double digit pound symbol                 |
	| £10,000       | 1000000           | ten thousand with a comma                 |
	| £1.87p        | 187               | pound and pence symbol                    |
	| £1p           | 100               | missing pence                             |
	| £1.p          | 100               | missing pence but present decimal point   |
	| 001.41p       | 141               | buffered zeros                            |
	| 4.235p        | 424               | rounding three decimal places to two      |
	| £1.257422457p | 126               | rounding with symbols                     |

Likewise, the application should not accept the following inputs, 

	| input | pence (canonical) | description           |
	|       | 0                 | empty string          |
	| 1x    | 0                 | non-numeric character |
	| £1x.0p| 0                 | non-numeric character |
	| £p    | 0                 | missing digits        |
