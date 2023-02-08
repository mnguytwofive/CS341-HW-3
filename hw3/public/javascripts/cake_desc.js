//Milton Nguy
//Function that access the array of radio and prints text based on selection and
//notes contained in textarea.
function cake_desc(x) {
    var radios = document.getElementsByName(x);
    var quantity_cc = document.getElementById("count").value;
    for(i = 0; i < radios.length; i++) {
      if(radios[i].checked)
        document.getElementById("order_type").innerHTML
          = "- " + quantity_cc + " "+ radios[i].value + " cheesecake";
        document.getElementById("order_notes").innerHTML = "- Order Notes: " + document.getElementById("Notes").value;
      }
}