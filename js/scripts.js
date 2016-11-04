function User(name, street, city, state, zip, phone) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
}

function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

function toppingsChecker(toppings) {

}

function orderPrice(size, toppings) {
   var price;
   if(pizzaSize === medium) {
     price = "$12.99";
   } else {
     price = "$21.99";
   }
   return price;
 };


$(document).ready(function() {


  $("#order-type-next").on('click', function() {
  $("#order-type").fadeOut(200);
  $("#account-form").delay(100).fadeIn(600);

  });
  $("#account-next").on('click', function() {
  $("#account-form").fadeOut(200);
  $("#pizza-form").delay(100).fadeIn(600);

  });

  $("form").submit(function(event) {
    event.preventDefault();


    $("#account").each(function() {
      var name = $(this).find("#name").val();
      var street = $(this).find("#street").val();
      var city = $(this).find("#city").val();
      var state = $(this).find("#state").val();
      var phoneNumber = $(this).find("#number").val();

      var newUser = new User(name, street, city, state, phoneNumber);
      console.log(newUser);
    });

    var newPizza = new Pizza(name, street);
    console.log(newPizza);

  });
  // $("#order-type-next").on('click', function() {
  // $("#order-type").fadeOut(200);
  // $("#account-form").delay(100).fadeIn(600);
  //
  // });
  //
  // var newAccount = new User()



});
