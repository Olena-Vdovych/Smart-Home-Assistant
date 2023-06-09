const bedroomContainer = document.getElementById('bedroom-container');
const livingRoomContainer = document.getElementById('living-room-container');
const kitchenContainer = document.getElementById('kitchen-container');

document.getElementById('clock-submit').addEventListener('click', function (e) {
    e.preventDefault();
    let room = document.getElementById('room-select').value;
    let time = document.getElementById('time-input').value;
    let melody = document.getElementById('melody-select').options[document.getElementById('melody-select').selectedIndex].textContent;

    let key = room + 'Alarm';

    if (room === 'bedroom') {
        bedroomContainer.innerHTML = `Alarm clock at ${time}, alarm ${melody}`;

        localStorage.setItem(key, bedroomContainer.innerHTML);
    } else if (room === 'living-room') {
        livingRoomContainer.innerHTML = `Alarm clock at ${time}, alarm ${melody}`;

        localStorage.setItem(key, livingRoomContainer.innerHTML);
    } else if (room === 'kitchen') {
        kitchenContainer.innerHTML = `Alarm clock at ${time}, alarm ${melody}`;

        localStorage.setItem(key, kitchenContainer.innerHTML);
    }
});



