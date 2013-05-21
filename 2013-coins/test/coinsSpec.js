describe("CoinsJs", function() {
  describe("convertStringToPence()", function() {
    describe('valid uses', function() {
      it("should convert a single digit", function() {
        var input = "4",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(4);
      });

      it("should convert a double digit", function() {
        var input = "85",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(85);
      });

      it("should convert a pence symbol", function() {
        var input = "197p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(197);
      });

      it("should convert a pence symbol and single digit", function() {
        var input = "2p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(2);
      });

      it("should convert a pounds decimal", function() {
        var input = "1.87",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(187);
      });

      it("should convert pound symbol", function() {
        var input = "£1.23",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(123);
      });

      it("should convert a single digit pound symbol", function() {
        var input = "£2",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(200);
      });

      it("should convert a double digit pound symbol", function() {
        var input = "£10",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(1000);
      });

      it("should convert ten thousand with a comma", function() {
        var input = "£10,000",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(1000000);
      });

      it("should convert a pound and pence symbol", function() {
        var input = "£1.87p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(187);
      });

      it("should convert missing pence", function() {
        var input = "£1p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(100);
      });

      it("should convert missing pence but present decimal point", function() {
        var input = "£1.p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(100);
      });

      it("should handle buffered zeros", function() {
        var input = "001.41p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(141);
      });

      it("should handle rounding three decimal places to two", function() {
        var input = "4.235p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(424);
      });

      it("should handle rounding with symbols", function() {
        var input = "£1.257422457p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(126);
      });
    });

    describe('invalid uses return 0', function() {
      it("should handle an empty string", function() {
        var input = "",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(0);
      });

      it("should handle a non-numeric character", function() {
        var input = "1x",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(0);
      });

      it("should handle a non-numeric character x2", function() {
        var input = "£1x.0p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(0);
      });

      it("should handle missing digits", function() {
        var input = "£p",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(0);
      });

      it("shouldn't accept text", function() {
        var input = "text",
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(0);
      });

      it("shouldn't accept booleans", function() {
        var input = true,
          actual = CoinsJs.convertStringToPence(input);
        expect(actual).toBe(0);
      });
    });
  });

  describe("calculateCoins()", function() {
    it("should return a correct object of coins for 1p", function() {
      var coins = CoinsJs.calculateCoins(1);

      expect(coins).toEqual({ 
        1: 1, 
        2: 0, 
        5: 0, 
        10: 0, 
        20: 0, 
        50: 0, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for 2p", function() {
      var coins = CoinsJs.calculateCoins(2);

      expect(coins).toEqual({ 
        1: 0, 
        2: 1, 
        5: 0, 
        10: 0, 
        20: 0, 
        50: 0, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for 5p", function() {
      var coins = CoinsJs.calculateCoins(5);

      expect(coins).toEqual({ 
        1: 0, 
        2: 0, 
        5: 1, 
        10: 0, 
        20: 0, 
        50: 0, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for 10p", function() {
      var coins = CoinsJs.calculateCoins(10);

      expect(coins).toEqual({ 
        1: 0, 
        2: 0, 
        5: 0, 
        10: 1, 
        20: 0, 
        50: 0, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for 20p", function() {
      var coins = CoinsJs.calculateCoins(20);

      expect(coins).toEqual({ 
        1: 0, 
        2: 0, 
        5: 0, 
        10: 0, 
        20: 1, 
        50: 0, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for 50p", function() {
      var coins = CoinsJs.calculateCoins(50);

      expect(coins).toEqual({ 
        1: 0, 
        2: 0, 
        5: 0, 
        10: 0, 
        20: 0, 
        50: 1, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for £1", function() {
      var coins = CoinsJs.calculateCoins(100);

      expect(coins).toEqual({ 
        1: 0, 
        2: 0, 
        5: 0, 
        10: 0, 
        20: 0, 
        50: 0, 
        100: 1, 
        200: 0
       });
    });

    it("should return a correct object of coins for £2", function() {
      var coins = CoinsJs.calculateCoins(200);

      expect(coins).toEqual({ 
        1: 0, 
        2: 0, 
        5: 0, 
        10: 0, 
        20: 0, 
        50: 0, 
        100: 0, 
        200: 1
       });
    });

    it("should return a correct object of coins for 99p", function() {
      var coins = CoinsJs.calculateCoins(99);

      expect(coins).toEqual({ 
        1: 0, 
        2: 2, 
        5: 1, 
        10: 0, 
        20: 2, 
        50: 1, 
        100: 0, 
        200: 0
       });
    });

    it("should return a correct object of coins for 1002p", function() {
      var coins = CoinsJs.calculateCoins(1002);

      expect(coins).toEqual({ 
        1: 0, 
        2: 1, 
        5: 0, 
        10: 0, 
        20: 0, 
        50: 0, 
        100: 0, 
        200: 5
       });
    });
  });
});
