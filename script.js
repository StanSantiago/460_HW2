function validInput(){
  var m, b, xMin, xMax, content;

  m = document.getElementById("m").value;
  b = document.getElementById("b").value;
  xMin = document.getElementById("xMin").value;
  xMax = document.getElementById("xMax").value;

  if(isNaN(m) || isNaN(b) || isNaN(xMin) || isNaN(xMax)){
    content = "<p>Please input numbers</p>";
  }else if((Math.abs(m) > 1000) || (Math.abs(b) > 1000) || (Math.abs(xMin) > 1000) || (Math.abs(xMax) > 1000)){
    content = "<p>Please use values between -1000 and 1000</p>";
  }else if (xMin > xMax) {
    content = "<p>x minimum must be less than x maximum</p>";
  }else if ((xMax - xMin) > 9) {
    content = "<p>Range of x must be no greater than 10</p>";
  }else{
    var result
    content = "<table class = \"table table-hover\"><thread><tr><th>x</th><th>y</th></tr></thread><tbody>";
    for(i = xMin; i <= xMax; i++){
      result = (i * m + parseInt(b))
      content += '<tr><th>' + i + '</th><th>' + result + '</th><tr>';
    }
    content += "</tbody></table>";
  }
  $('#here_table').append(content);
}
