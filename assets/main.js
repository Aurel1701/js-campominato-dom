document.querySelector(".play").addEventListener("click", print);

function print(params) {
    document.querySelector('.container').innerHTML = ''

    let difficoltà = document.querySelector('#difficoltà').value
    

// assegno le celle a seconda della difficoltà 

// difficoltà facile

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)

        }
        for (let y = 0; y < 16; y++) {
            
        }
        
        var arrayBombe = Bomb(100)
       
        
// difficoltà media

    } else if (difficoltà == 'medium') {
        for (let i = 1; i <= 81; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
            

        }
        var arrayBombe = Bomb(81)

// difficoltà alta

    } else if (difficoltà == 'hard') {
        for (let i = 1; i <= 49; i++) {
            document.querySelector('.container').insertAdjacentHTML('beforeend', ` <div class="cells">${i}  
            </div>`)
            Bomb()
        }
        var arrayBombe = Bomb(49)
        

    }
    colorCell(arrayBombe)
    
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
    return arrayBomb
  
}

// colore le celle di blu al click

function colorCell(arrayBombe) {
    console.log(arrayBombe);
     const cells = document.querySelectorAll('.cells')


        for (let i = 0; i < cells.length; i++) {

        const cellElement = cells[i];

        cellElement.addEventListener('click', function () {
         
         console.log(this.textContent);
          let number = parseInt(this.textContent) 
          console.log(number);
          if (arrayBombe.includes(number)) {

            this.style.backgroundColor = 'red'
            
              
          }else{
            this.style.backgroundColor = 'cornflowerblue'
          }

        });

  }
}
 // celle bomba

 


