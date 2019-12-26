// @See: http://www.seeingwithc.org/topic1html.html

var validCoins = [200, 100, 50, 20, 10, 5, 2, 1];

function findCoinsGreedy(amount) {
  var coins = {};

  while (amount > 0) {
    for (coinIndex in validCoins) {
      var currentCoin = validCoins[coinIndex];

      coins[currentCoin] = Math.floor(amount / currentCoin);
      amount -= coins[currentCoin] * currentCoin;
    }
  }

  return coins;
}

function isFloat(n) {
  return n % 1 !== 0;
}

// @See: https://codereview.stackexchange.com/a/156099
const coinChangerES6 = (denominations, amount) =>
  [...denominations]
    .sort((a, b) => b - a)
    .reduce(
      ({ coins, remainder }, value) => ({
        coins: {
          ...coins,
          [value]: Math.floor(remainder / value),
        },

        remainder: remainder % value,
      }),
      { remainder: amount, coins: {} }
    );

var CoinsJs = {
  convertStringToPence: function(str) {
    if (typeof str !== 'string' || !str instanceof String) {
      return 0;
    }

    if (str.match(/[^\d,.£p]+/)) {
      return 0;
    }

    var isPounds = str.indexOf('£') !== -1;

    var num = parseFloat(str.replace(/[^\d.]+/g, ''), 10);
    if (isNaN(num)) {
      return 0;
    }

    if (isFloat(num) || isPounds) {
      num = num.toFixed(2) * 100;
    }

    return num;
  },
  calculateCoins: function(amount) {
    return coinChangerES6(validCoins, amount).coins;
  },
};
