//Frontend
$(document).ready(function(){
  $("form#pizza-selection").submit(function(event) {

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
    }
    var inputtedSize = $("select#size").val();
    $("#result").text()

//Backend
    var newPizza = new Pizza(inputtedToppings,inputtedSize);

    function Pizza(toppings, size) {
      this.toppings = toppings;
      this.size = size;
    }


    Pizza.prototype.Size = function() {
      var pizzaPrice = 0;
      if(this.size === "small") {
        var pizzaPrice = 8;
        return Toppings(pizzaPrice);
      } else if (this.size === "medium") {
        var pizzaPrice = 10;
        return Toppings(pizzaPrice);
      } else if (this.size === "large") {
        var pizzaPrice = 12;
        return Toppings(pizzaPrice);
    }


    Pizza.prototype.Toppings = function() {
      alert((this.toppings.length) * 1.5);
      return (this.toppings.length) * 1.5;

    }

    Ticket.prototype.FinalPrice = function() {
      return 0 + this.Age() + this.Showtime();
    }



    Ticket.prototype.receipt = function() {
    return this.movie + " " + this.showtime + " " + this.age + " " + this.finalPrice();
    }


    var inputtedAge = 0;
    var inputtedMovie = "";
    var inputtedShowtime = "";
    var ticketPrice = 0;


    $("#result").text(currentTicket.FinalPrice())
  event.preventDefault();
  });
});
