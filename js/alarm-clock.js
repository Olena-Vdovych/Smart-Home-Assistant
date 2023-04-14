document.getElementById("clock-submit").addEventListener("click", function (event) {
    event.preventDefault();
    let time = document.getElementById('time-input').value;
    let melody = document.getElementById('melody-select').value;

    document.getElementById("bedroom-container").innerHTML = `Alarm clock at ${time}, alarm ${melody}`;
});

