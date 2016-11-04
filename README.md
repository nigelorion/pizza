# Pizza Online Ordering

### Specs

* The user clicks through the form in sections.

* All fields are submitted when the final section is met.

* The users contact information is stored as a new object built from a constructor with each input form as a property.
    * Example: user name = "Nigel Burnett"
               user street = "12345 ne 123 ave"

* The user selects which size pizza and the specific toppings.
    * Example: pizza size = "Large"
               pizza toppings = ["Peppers", "Pineapple"]
* The selected toppings are stored inside the pizza object as an array.

* The price is calculated by calling a prototype on the pizza object.
    * Each topping is $1.00
    * The length of the toppings array plus the set value for medium or large sizes is the final price.

* The full address is taken out of the user object and concatenated together via a prototype method.

* All processed user input is displayed to the user as a order confirmation.
