var ROMAN_MAPPINGS = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
};

function toRoman(num) {
    var str = "";

    for (var roman in ROMAN_MAPPINGS) {
        var arabic = ROMAN_MAPPINGS[roman];
        while (num >= arabic) {
            str += roman;
            num -= arabic;
        }
    }

    return str;
};


var tests = [
    {
        name: "1 to I",
        input: 1,
        output: "I"
    },
    {
        name: "2 to II",
        input: 2,
        output: "II"
    },
    {
        name: "3 to III",
        input: 3,
        output: "III"
    },
    {
        name: "4 to IV",
        input: 4,
        output: "IV"
    },
    {
        name: "5 to V",
        input: 5,
        output: "V"
    },
    {
        name: "6 to VI",
        input: 6,
        output: "VI"
    },
    {
        name: "7 to VII",
        input: 7,
        output: "VII"
    },
    {
        name: "8 to VIII",
        input: 8,
        output: "VIII"
    },
    {
        name: "9 to IX",
        input: 9,
        output: "IX"
    },
    {
        name: "10 to X",
        input: 10,
        output: "X"
    },
    {
        name: "11 to XI",
        input: 11,
        output: "XI"
    },
    {
        name: "39 to XXXIX",
        input: 39,
        output: "XXXIX"
    },
    {
        name: "49 to XLIX",
        input: 49,
        output: "XLIX"
    },
    {
        name: "89 to LXXXIX",
        input: 89,
        output: "LXXXIX"
    },
    {
        name: "399 to CCCXCIX",
        input: 399,
        output: "CCCXCIX"
    },
    {
        name: "499 to CDXCIX",
        input: 499,
        output: "CDXCIX"
    },
    {
        name: "899 to DCCCXCIX",
        input: 899,
        output: "DCCCXCIX"
    },
    {
        name: "999 to CMXCIX",
        input: 999,
        output: "CMXCIX"
    },
    {
        name: "1999 to MCMXCIX",
        input: 1999,
        output: "MCMXCIX"
    },
];

for (index = 0; index < tests.length; ++index) {
    if (toRoman(tests[index].input) !== tests[index].output) {
        throw new Error("Test " + tests[index].name + " failed");
    }
}