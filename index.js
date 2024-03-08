function togglehideshow()  {
    var a = document.getElementById("accordion");
    var m = document.getElementById("main");
    if (a.style.display === "none")  {
        a.style.display = "block";
        m.style.filter = "blur(3px)";
        m.style.color = "grey";
    }  else  {
        a.style.display = "none";
        m.style.filter = "none";
        m.style.color = "white";
    };
}

function author()  {
    var am = document.getElementById("a_message");
     if (am.style.display === "none")  {
        am.style.display = "block";
     } else  {
        am.style.display = "none";
     };
}

