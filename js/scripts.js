//Frontend
$(document).ready(function(){
  $("form#pizza-selection").submit(function(event) {
    toppingsArray = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppingsArray.push($(this).val());
    });
    var inputtedSize = $("select#size").val();
    var newPizza = new Pizza(toppingsArray,inputtedSize);
    $("#result").text(newPizza.FinalPrice(toppingsArray,inputtedSize));
    $(".bottom").show();
    event.preventDefault();
  });
});

//Backend

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}


Pizza.prototype.Size = function() {
  if(this.size === "small") {
    return 8;
  } else if (this.size === "medium") {
    return 10;
  } else if (this.size === "large") {
    return 12;
  }
}

Pizza.prototype.Toppings = function(toppingsArray,inputtedSize) {
  return (this.toppings.length) * 1.5;
}

Pizza.prototype.FinalPrice = function() {
  return "Your total comes to $" + (0 + this.Size() + this.Toppings()).toFixed(2);
}
