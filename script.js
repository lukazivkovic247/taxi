function enableField() {
document.getElementById("mestoin").disabled=false;
}
function mesto() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('mestoin');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
cene = document.getElementsByClassName("cena");
km = document.getElementsByClassName("km");
for (i = 0; i < cene.length; i++) {
  cene[i].innerText = (eval(km[i].innerText) * 70);
  if (eval(cene[i].innerText) % 50 >= 25) {
    cene[i].innerText = eval(cene[i].innerText) + (50 - (cene[i].innerText%50));
  }
  else {
    cene[i].innerText = eval(cene[i].innerText) - (eval(cene[i].innerText) % 50)
  }
}