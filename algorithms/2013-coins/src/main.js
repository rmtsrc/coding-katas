$(document).ready(function() {

    /**
     * When a user clicks the Calculate button
     */
    $("#coins-js-form").submit(function(event) {
        // Prevent the default form submit action
        event.preventDefault();

        var inputAmount = $("#input-amount").val(),
            pence = CoinsJs.convertStringToPence(inputAmount),
            coins = CoinsJs.calculateCoins(pence);

        $("#input-pence").text(pence);

        $("#output-2-pounds").text(coins[200]);
        $("#output-1-pound").text(coins[100]);
        $("#output-50-pence").text(coins[50]);
        $("#output-20-pence").text(coins[20]);
        $("#output-10-pence").text(coins[10]);
        $("#output-5-pence").text(coins[5]);
        $("#output-2-pence").text(coins[2]);
        $("#output-1-pence").text(coins[1]);
    });

});
