import "../style/main.css";

class card {
    constructor (index, value1,value2)
 {
    this.index = index;
    this.value1 = value1;
    this.value2 = value2;
 }
toHtml() {
    const div = document.createElement('div');
    const index = document.createElement('p')
    const value1 = document.createElement('p');
    const value2 = document.createElement('p');
    
    
    index.textContent = this.index;
    value1.textContent = this.value1;
    value2.textContent = this.value2;
    div.classList.add('bg-black', 'text-white', 'w-[200px]' , 'h-[200px]', 'lg:w-[300px]', 'lg:h-[300px]', 'rounded-lg', 'flex' , 'items-center', 'flex-col', 'justify-center', 'carte' );
    value1.classList.add('lg:hidden');
    value2.classList.add('hidden', 'lg:block')
    

    div.appendChild(index);
    div.appendChild(value1);
    div.appendChild(value2);
    return div

}
}; 

const cards = [
    new card (1, '200px/200px', '300px/300px' ),
    new card (2, '200px/200px', '300px/300px' ),
    new card (3, '200px/200px', '300px/300px' ),
    new card (4, '200px/200px', '300px/300px' ),
    new card (5, '200px/200px', '300px/300px' ),
    new card (6, '200px/200px', '300px/300px' ),
    new card (7, '200px/200px', '300px/300px' ),
    new card (8, '200px/200px', '300px/300px' ),
    new card (9, '200px/200px', '300px/300px' ),
]

const container = document.querySelector('.container');

cards.forEach(card => {
    container.appendChild(card.toHtml());
})



const btn = document.querySelector('button')
const carte = document.querySelectorAll('.carte')
console.log(carte)

btn.addEventListener('click', ()=> {
    container.classList.toggle('bg-blue-600');
    container.classList.toggle('bg-gray-800'); 
    carte.forEach(cart => {
    cart.classList.toggle('bg-black')
    cart.classList.toggle('bg-red-600')
    })
})