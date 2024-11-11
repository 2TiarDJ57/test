// DOM 
// Document Object Model
// const judul = document.querySelector('#judul');
// const input = document.querySelector('input');
// const p3 = document.querySelectorAll('p')[2];
// const p2 = document.querySelectorAll('p')[1];
// const p = document.querySelectorAll('p')[0];
// const tombol = document.querySelector('button');

// judul.innerHTML = '<i> Semangat </i>';
// p.innerText = 'Semangat untuk menjadi Web Developer';
// p2.style.backgroundColor = 'red';
// p2.classList.add('bergerak');
// p2.classList.remove('bergerak');

// tombol.addEventListener('click', () => {
//     p3.innerHTML = '<b> Hallo Kalian Klick Tombol </b>';
// });


// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const p = document.querySelectorAll('p')[0];

// button.addEventListener('click', () => {
//     p.innerText = input.value;
// });

// const clickHandler = () => {
//     const isi = input.value;
//     p.innerText = isi;
// }

// input.addEventListener('input', clickHandler);


// Jquery
$(document).ready(function () {
    const h2 = $('h2');
    const input = $('input');
    const button = $('button');
    const p = $('p');

    h2.html('<i>Selamat</i>')
    h2.append('<b> Belajar Jquery </b>')
    h2.prepend('<b> Prepend </b>')
    h2.after('<h3> Ini After Tag h2 </h3>')
    h2.before('<h3> Ini Before Tag h2</h3>')

    // h2.remove()
    // h2.empty()

    h2.addClass('bergerak')
    h2.removeClass('border')

    const style = {
        color: 'salmon',
        backgroundColor: 'blue'
    }

    h2.css(style);

    button.click(function(){
        p.toggleClass('border', 2000)
    });

    let arr = [0, 1, 2];

    let arr2 = arr;

    arr.push(3);

    arr2.push(4);

    console.log(arr);

    

    


    
});







