function change(){
    // document.getElementById("H1").innerHTML = "CSIE@CGU";
    // document.getElementById("P").innerHTML = "怎麼那麼棒！！.";
    $("#H1").html("CSIE@CGU");
    $("#P").html("怎麼那麼棒！！.");
  }
    
  function myFunction(){
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "change this document";
    document.body.appendChild(btn);
    btn.addEventListener("click", change); // click是一個動作
  }
  