const btn = document.getElementById('generateBtn');
const randomNumberEl = document.getElementById('numberGenerated');

function generateRandomNumber() {
    let minNum = parseInt(document.getElementById('minNum').value);
    let maxNum = parseInt(document.getElementById('maxNum').value);

    if(minNum !== '' && maxNum !== '' && minNum < maxNum) {
        randomNumberEl.style.display = 'flex';

        let randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        randomNumberEl.innerText = randomNumber;
    }

    else {
        randomNumberEl.style.display = 'flex';
        randomNumberEl.innerText = 'Error';

        setTimeout(function() {
            randomNumberEl.style.display = 'none';
        }, 1600);
    }
}

btn.addEventListener('click', generateRandomNumber);