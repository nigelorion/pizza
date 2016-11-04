function User(name, street, city, state, zip, phone) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
}

function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
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
  // $("#order-type-next").on('click', function() {
  // $("#order-type").fadeOut(200);
  // $("#account-form").delay(100).fadeIn(600);
  //
  // });

  var newAccount = new User()



});
