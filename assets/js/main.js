console.log("test");

/* 

function 
    Countdown in Minuten
    Pausieren
    neu Starten

setInterval()
clearInterval()
if


*/

// input Feld    - Counter
const inputField = document.querySelector("#minutes");





// Start Button - Start
const btnStart = document.querySelector("#start");
btnStart.addEventListener("click", () => {
    console.log("in event listener");
    btnStart.disabled = true;   // Deaktivieren vom btn       zum aktivieren false
    btnReset.disabled = true;
    funcInterval();

});


// function
let stop2teInterval = null;
let stopInterval = null;
function funcInterval(counterReset) {
    console.log("in funcInterval");
    const inputFiledVal = inputField.value

    console.log(inputFiledVal);


    counter = Number(inputFiledVal) * 60
    console.log(counter);
    console.log(counterReset)
    if (counterReset) { counter = counterReset }    // das sollte machen, das wenn der ResetButton gedrückt wird,
    // er dort weiter Zählt wo er angehalten wurde

    stop2teInterval = stopInterval                // stop Interval wird in stop2teInterval gespeichert bzw übergeben

    // setInterval
    stopInterval = setInterval(() => {
        console.log("in interval");
        console.log(counter);
        counter = counter - 1;
        console.log(counter);
        console.log("Min: " + Math.floor(counter / 60) + " Sek: " + counter % 60);
        const countMin = Math.floor(counter / 60);  // 0 Stellen nach dem Komma
        const countMin_String00 = countMin.toString().padStart(2, "0");  // Zahl in String damit mit padStart 2 Zahl immer zweistellig macht

        console.log(countMin_String00)

        const countSek = counter % 60;
        const countSek_String00 = countSek.toString().padStart(2, "0");


        const outputField = document.querySelector("#time");
        if (counter == 0 || counter < 0) {
            outputField.innerHTML = `${countMin_String00}:${countSek_String00}`;

            clearInterval(stopInterval);
            btnStart.disabled = false;   // Deaktivieren vom btn       zum aktivieren false


        }
        else if (isNaN(counter)) {              // stopt wenn counter ist nicht Buchstabe bzw. Stopt wenn counter ist Buchstabe
            clearInterval(stopInterval);
            btnStart.disabled = false;
        }
        else {
            outputField.innerHTML = `${countMin_String00}:${countSek_String00}`;
        }


    }, 100)

};

// Pause Button - Pause
const btnPause = document.querySelector("#pause");
btnPause.addEventListener("click", () => {
    clearInterval(stopInterval);

    clearInterval(stop2teInterval);     // !!! Problem,   wenn man öffters den Knop Reset drück, dann
    // !!! bräuchte man für jeden neue setInterval-Runde die im Hintergrund Parallel laufen 
    // !!! einen eigenen zusätzlichen stop2teInterval stop...100Interval knopf
    // !!! fals man btnReset 100x hintereinander drückt
    btnReset.disabled = false;
});

// Reset Button - Reset
const btnReset = document.querySelector("#restart");
btnReset.addEventListener("click", () => {
    console.log("counter für Reset:" + counter)
    const counterReset = counter
    funcInterval(counterReset);   // Restart
    btnStart.disabled = true;   // Deaktivieren vom btn       zum aktivieren false
    btnReset.disabled = true;
});
