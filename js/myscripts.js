

var display = "0";
var memory = 0;

$(document).ready(function() {

    // functionality of button "1"
  $("#btn1").click(function() {
    if (display === "0")
    {
      display ="1";
    }
    else
    {
      display +="1";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "2"
  $("#btn2").click(function() {
    if (display === "0")
    {
      display ="2";
    }
    else
    {
      display +="2";
    }
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "3"
  $("#btn3").click(function() {
  if (display === "0")
  {
    display ="3";
  }
  else
  {
    display +="3";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "4"
  $("#btn4").click(function() {
  if (display === "0")
  {
    display ="4";
  }
  else
  {
    display +="4";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "5"
  $("#btn5").click(function() {
  if (display === "0")
  {
    display ="5";
  }
  else
  {
    display +="5";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "6"
  $("#btn6").click(function() {
  if (display === "0")
  {
    display ="6";
  }
  else
  {
    display +="6";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "7"
  $("#btn7").click(function() {
  if (display === "0")
  {
    display ="7";
  }
  else
  {
    display +="7";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "8"
  $("#btn8").click(function() {
  if (display === "0")
  {
    display ="8";
  }
  else
  {
    display +="8";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "9"
  $("#btn9").click(function() {
  if (display === "0")
  {
    display ="9";
  }
  else
  {
    display +="9";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "0"
  $("#btn0").click(function() {
  if (display !== "0")
  {
    display +="0";
  }
  $("#calc-display").html(display);
  console.log(display);
  });

    // functionality of button "."
  $("#btnDot").click(function() {
    if (display.includes(".") === false)
    {
      display +=".";
      $("#calc-display").html(display);
      console.log(display);
    }
  });

    // functionality of button "CE"
  $("#btnCE").click(function() {
    display ="0";
    $("#calc-display").html(display);
    console.log(display);
  });

    // functionality of button "/"
  $("#btnDiv").click(function() {
    if (memory === 0)
    {
      memory = Number(display);
      $("#calc-display").html(display);
      display ="0";
      console.log("memory is: ", memory);
    }
    else
    {
      memory = memory / Number(display);
      $("#calc-display").html(display);
      display ="0";
      console.log("memory is: ", memory);
    }
    
  });

});
