//Milton Nguy
//When user clicks button, it'll respond differently base on input.
function removeElements() {
    if (document.getElementById("Notes").value.includes("vegan")) {
      alert("WARNING: CHEESECAKE CONTAINS DAIRY")
    }
    else {
      var toppings_cc = document.getElementById("toppings_selector");
      document.getElementById("user_input").remove()
      document.getElementById("toppings_selector").remove()
      document.getElementById("count").remove()
      document.getElementById("quantity_title").remove()
      document.getElementById("order").innerHTML = "Thank you! Your order has been placed. You have ordered: ";      
    }
}