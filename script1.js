function myFunction() {
  var s = document.getElementById("myNav");
  if (s.className === "nav1") {
    s.className += " responsive";
  } else {
    s.className = "nav1";
  }
}