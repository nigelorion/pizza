function User(name, street, city, state, zip, phone) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.priceChecker = function() {
  var price = this.toppings.length;
  if (this.size === "Large") {
    price = 21.99 + price;
  } else  {
    price = 12.99 + price;
  }
  return price;
}

User.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
}


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
      var zip = $(this).find("#zip").val();
      var phoneNumber = $(this).find("#number").val();

    var newUser = new User(name, street, city, state, zip, phoneNumber);

    var size = $("#size").val();
    var toppings = $('input:checkbox:checked').map(function() {
    return this.value;
    }).get();
    var newPizza = new Pizza(size, toppings);
    (newUser.fullAddress());

    $("#userAddress").text(newUser.fullAddress());
    $("#userName").text(newUser.name);
    $("#userPrice").text(newPizza.priceChecker());
    $("#contactNumber").text(newUser.phone)
    $("#pizza-form").fadeOut(200);
    $("#order-confirmation").delay(200).fadeIn(200);
    });
  });
});
