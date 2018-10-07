function validInput(){
  var m, b, xMin, xMax, text;

  m = document.getElementById("m").value;
  b = document.getElementById("b").value;
  xMin = document.getElementById("xMin").value;
  xMax = document.getElementById("xMax").value;

  if(isNaN(m) || isNaN(b) || isNaN(xMin) || isNaN(xMax)){
    text = "Please input numbers";
  }else if((Math.abs(m) > 1000) || (Math.abs(b) > 1000) || (Math.abs(xMin) > 1000) || (Math.abs(xMax) > 1000)){
    text = "Please use values between -1000 and 1000";
  }else if (xMin > xMax) {
    text = "x minimum must be less than x maximum";
  }else if ((xMax - xMin) > 9) {
    text = "Range of x must be no greater than 10";
  }else{
    text = "Valid input";
  }
  document.getElementById("demo").innerHTML = text;
}
