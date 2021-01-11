var screen = document.querySelector('.screen');

document.querySelectorAll('td').forEach(function(td){
    td.addEventListener('click', function(e){

        var digit = e.target.innerText;
        try {
            if (digit == "C") {
                screen.value = "";
            } else if (digit == "%") {
                if (screen.value != "") {
                    screen.value = eval(screen.value) / 100;
                }
            } else if (digit == "←") {
                screen.value = screen.value.slice(0, -1);
            } else if (digit == "=") {
                if (screen.value != "") {
                    screen.value = eval(screen.value);
                }
            } else {
                screen.value += digit;
                if (screen.value.length > 10) {
                    screen.value = screen.value.substring(0, 11);
                }
            }
        }
        catch(err) {
            alert("Please enter the correct math problem!");
        }

    });
});