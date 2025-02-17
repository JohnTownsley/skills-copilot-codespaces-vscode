function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    console.log(memberValue);
    console.log(memberText);
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    console.log(memberValue);
    console.log(memberText);
    if (memberValue == "1") {
        document.getElementById("member").innerHTML = "1";
        document.getElementById("member").style.color = "white";
        document.getElementById("member").style.backgroundColor = "green";
        document.getElementById("member").style.border = "1px solid green";
    } else if (memberValue == "2") {
        document.getElementById("member").innerHTML = "2";
        document.getElementById("member").style.color = "white";
        document.getElementById("member").style.backgroundColor = "green";
        document.getElementById("member").style.border = "1px solid green";
    } else if (memberValue == "3") {
        document.getElementById("member").innerHTML = "3";
        document.getElementById("member").style.color = "white";
        document.getElementById("member").style.backgroundColor = "green";
        document.getElementById("member").style.border = "1px solid green";
    } else if (memberValue == "4") {
        document.getElementById("member").innerHTML = "4";
        document.getElementById("member").style.color = "white";
        document.getElementById("member").style.backgroundColor = "green";
        document.getElementById("member").style.border = "1px solid green";
    } else if (memberValue == "5") {
        document.getElementById("member").innerHTML = "5";
        document.getElementById("member").style.color = "white";
        document.getElementById("member").style.backgroundColor = "green";
        document.getElementById("member").style.border = "1px solid green";
    }
}