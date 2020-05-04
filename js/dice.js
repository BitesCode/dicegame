function won() {
    var random = Math.floor(Math.random() * 6) + 1;

    var random2 = Math.floor(Math.random() * 6) + 1;

    var button = document.getElementById("myBtn");
    buttontoggle(true);
    var randomNumber1 = random;

    var myButtonClasses = document.getElementById("myBtn").classList

    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];



    image1.setAttribute("src", randomImageSource);


    setTimeout(function() {
        button.disabled = false;

    }, 2000);
    button.disabled = true;


    var randomNumber2 = random2;
    // myButtonClasses.remove("button");
    // myButtonClasses.add("buttonD");




    setTimeout(function() {


        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
        return buttontoggle(false);
    }, 2000);




    console.log(random);
    console.log(random2);

    setTimeout(function() {
        if (random > random2) {
            document.querySelector('h1').innerHTML = "🏆Player Wins!🏆";
            console.log("1");
        } else if (random2 > random) {
            document.querySelector('h1').innerHTML = "🏆Computer Wins!🏆";
            console.log("2");
        } else {
            document.querySelector('h1').innerHTML = "Draw!";
            console.log("D");
        }
    }, 2000);

}

function myFunction() {


    won();

}

function buttontoggle(x) {
    var button = document.getElementById("myBtn");
    if (x) {
        button.style.backgroundColor = "#757575";
    } else {
        button.style.backgroundColor = "#00C853";
    }
}