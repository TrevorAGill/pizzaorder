//Frontend
$(document).ready(function(){
  $("form#pizza-selection").submit(function(event) {

    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
    }
    var inputtedSize = $("select#size").val();


//Backend
    var newPizza = new Pizza(inputtedToppings,inputtedSize);

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
