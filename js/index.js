const container = document.getElementById('container');
const sleepTimeButton = document.getElementById('sleepTimeButton');
const sortButton = document.getElementById('button');
let sleepTime;
let sortingInProgress = false;

let data = Array.from({ length: 190 }, (_, index) => index);
data.shift();
let shuffledData = shuffleArray(data);
createDivsFromArray(shuffledData, container);

function updateRangeValue() {
    document.querySelectorAll('.range_box input').forEach(item => {
        const rangeValue = item.closest('.range_box').querySelector('.rangeValue');
        rangeValue.innerHTML = item.value;
    });
}

window.addEventListener('load', updateRangeValue);

document.querySelectorAll('.range_box input').forEach(item => {
    item.addEventListener('mousemove', function() {
        this.closest('.range_box').querySelector('.rangeValue').innerHTML = this.value;
    });
});


function createDiv(height) {
    const div = document.createElement('div');
    const width = window.innerWidth;

    div.className = 'item';
    div.style.height = height * 4 + 'px';
    if (width < 800) {
        div.style.height = height * 8 + 'px';
    }
    return div;
}

function createDivsFromArray(arr, container) {
    container.innerHTML = '';
    arr.forEach(item => {
        container.appendChild(createDiv(item));
    });
}

function updateDivs(arr, container) {
    container.innerHTML = '';
    arr.forEach(item => {
        container.appendChild(createDiv(item));
    });
}

async function bubbleSort(arr, container, sleepTime) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;

                sleepTime = sleepTimeButton.value;
                await sleep(sleepTime);
                updateDivs(arr, container);
            }
        }
    } while (swapped);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

sortButton.addEventListener('click', () => {
    if (!sortingInProgress) {
        bubbleSort(shuffledData.slice(), container, sleepTime);
        sortingInProgress = true;
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width < 800) {
        shuffledData = shuffleArray(Array.from({ length: 60 }, (_, index) => index));
    }
    updateDivs(shuffledData, container);
});
