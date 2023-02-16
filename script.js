// definisi dom adalah antarmuka untuk html. yang mempresentasikan halaman web dapat mengubah dan memanipulasi strukturnya

// DOM selection
    // getelementbyid()
// const judul = document.getElementById('judul')
// judul.style.color = 'blue'
// judul.style.backgroundColor = 'red'
// judul.innerHTML = 'tes'

    // getelementsbytagname()
// const p = document.getElementsByTagName('p')

// p[0].style.color = 'green'
// for (let i = 0; i < p.length; i++) {
//     if (i == 3) {
//         p[i].style.backgroundColor = 'red'
//         p[i].innerHTML = 'Paragraf 4 Baru'
//     } else {
        // p[i].style.backgroundColor = 'green'
//     }
// }

    // getelementbyclassname()
// const p1 = document.getElementsByClassName('p1')


    // queryselection() menampilkan sebuah element
// const p4 = document.querySelector('#b p')
// console.log('p4');
// p4.style.color = 'red'
// p4.style.backgroundColor = 'silver'

// const li2 = document.querySelector('section#b ul li:nth-child(2)')
// li2.style.color = '#00a19b'
// li2.style.backgroundColor = '#c8ccce'


    // quaryselectionall()
// const p = document.querySelectorAll('p')
// // console.log(p);
// const sectionb = document.querySelectorAll('section#b')
// console.log(sectionb);
// const sectiona = document.querySelectorAll('section#a')
// console.log(sectiona);
// const p2 = document.querySelectorAll('section#a .p2')
// p2.style.color = 'red'


// manipulasi element
// element.innerHTML untuk mengubah isi dari elemen yang pernah kita isi atau mengubah tag elementnya
// const judul = document.getElementById('judul')
// judul.innerHTML = '<img width="100" src="https://s3-id-jkt-1.kilatstorage.id/fastnlow/2019/07/Perubahan-Logo-Mazda-Dari-Masa-Ke-Masa-9-880x495.png">'


// element.style untuk mengubah style dari element yang kita seleksi

// element.setAttribute() untuk emmanipulasi attribute yang melekat pada elment HTML
// const judul = document.getElementsByTagName('h1')[0];

// // untuk membuat attribute di dalam element
// judul.setAttribute('class', 'judul judul2');

// // untuk delete attribute di dalam element
// judul.removeAttribute('class')

// const judul = document.createElement('p')
// judul.innerHTML = 'Ini paragraf baru'
// document.body.appendChild(judul)

// const new_p = document.createElement('p')
// const new_text = document.createTextNode('New Paragraph')
// new_p.appendChild(new_text)
// const sectionA = document.getElementById('a')
// sectionA.appendChild(new_p)

// // membuat list baru memakai js dom
// const new_li = document.createElement('li')

// const newlitext = document.createTextNode('item 4')
// new_li.appendChild(newlitext)

// const ul = document.querySelector('section#b ul')

// const li2 = ul.querySelector('li:nth-child(4)')

// ul.insertBefore(new_li, li2)


// deleting element
// const p1 = document.getElementsByClassName('p1')[0]
// sectionA.removeChild(p1)

// event js dom
const p3 = document.querySelector('.p3')
function change_color() {
    p3.style.backgroundColor = 'salmon'
}

const p2 = document.querySelector('.p2')
function show_alert() {
    alert('Berhasil klik paragraf 2')
}

const p1 = document.querySelector('.p1')
p1.onclick = show_alert;

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul')
    const new_li = document.createElement('li')
    const text_li = document.createTextNode('Ini item baru')
    
    new_li.appendChild(text_li)
    ul.appendChild(new_li)
})

// event mouseenter
p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'red'
    p3.innerHTML = 'Berubah'
    // alert('hai')
})

// event mouseleave
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white'
    p3.innerHTML = 'Paragraf 3'
})