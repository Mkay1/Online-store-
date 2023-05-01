function Lesson(){
    alert("Note!!! \nThe Lessons are spelled as \n'JavaScript'\n'HTML'\n'CSS'")
    var Name = window.prompt("What's your name ???");

    if (Name =="Musa"){
        document.write("Hello " + Name + "...<br>");
        var Learn = alert("what would youn like to learn today???");
        if (Learn == "JavaScript" || "CSS" || "HTML"){
            document.write("Welcome To Today's lesson on "+ Learn + "... <br>");
            window.open("")
        }    
    }
    else if (Name == ""){
        var Name = window.prompt("please what is your name...")
        document.write("Hello " + Name + "...<br>");
        var Learn = window.prompt("what would youn like to learn today???");
        if (Learn == "JavaScript" || "CSS" || "HTML"){
            document.write("Welcome To Today's lesson on "+ Learn + "... <br>");
        } 
    }
    else ("You are not on the list for todya's class")
}

