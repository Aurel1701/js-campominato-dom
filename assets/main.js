document.querySelector(".play").addEventListener("click", print);

function print(params) {
    document.querySelector('.container').innerHTML = ''

    let difficoltà = document.querySelector('#difficoltà').value
    console.log(difficoltà);

// assegno le celle a seconda della difficoltà 

// difficoltà facile

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)

        }
        for (let y = 0; y < 16; y++) {
            
        }
        Bomb(100)
       
        
// difficoltà media

    } else if (difficoltà == 'medium') {
        for (let i = 1; i <= 81; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
            

        }
        Bomb(81)

// difficoltà alta

    } else if (difficoltà == 'hard') {
        for (let i = 1; i <= 49; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
            Bomb()
        }
        Bomb(49)
        

    }
    colorBlue()
    
}

// genero numeri random

function Bomb(numberCell) {
    let arrayBomb = []

    while (arrayBomb.length < 16) {
        let numberRandom = Math.floor(Math.random() * (numberCell - 1 + 1)) + 1
        if (!arrayBomb.includes(numberRandom)) {
            arrayBomb.push(numberRandom)
            

    
        }
    }
    console.log(arrayBomb.length);
    console.log(arrayBomb);
  
}

// colore le celle di blu al click

function colorBlue() {
     const cells = document.querySelectorAll('.cells')


        for (let i = 0; i < cells.length; i++) {

        const cellElement = cells[i];

        cellElement.addEventListener('click', function () {
         this.style.backgroundColor = 'cornflowerblue'

        });

  }
}



