const beritas = [
    {
        image: "https://www.screamous.com/cdn/shop/articles/tees_1080x.jpg?v=1617250928",
        tanggal: "April 1, 2021",
        tittle: "HOW TO TAKE CARE OF YOUR CLOTHES",
        ket: "HOW TO TAKE CARE OF YOUR HEART CLOTHES Memakai outfit dari brand favoritmu tentunya akan membuat penampilan semakin keren. Jadi pasti ga mau dong kalo outfit yang baru kamu beli jadi cepat rusak karena tidak tahu bagaimana cara merawatnya. Ini dia DO & DON’T’S bagaimana cara merawat outfit kamu.   T-SHIRT      PISAHKAN CUCIAN BERWARNA DAN PUTIH Sebelum dicuci, pisahkan terlebih dahulu t-shirt berwarna dan putih. Hal ini di lakukan untuk menghindari terjadi nya kelunturan warna serta menjaga agar kondisi dan kualitas warna t-shirt tetap terjaga.JANGAN MEMAKAI MESIN CUCI Ini merupakan cara yang cukup ampuh untuk menjaga kualitas t-shirt, walaupun menggunakan mesin cuci lebih mudah dan praktis,  namun menggunakan mesin cuci dapat membuat kondisi t-shirt menjadi melar dan sablonan baju akan rusak."
    },
    {
        image: "https://www.screamous.com/cdn/shop/articles/scrms_x_u_1080x.jpg?v=1617250612",
        tanggal: "April 1, 2021",
        tittle: "SCREAMOUS X USUGROW",
        ket: "HOW TO TAKE CARE OF YOUR HEART CLOTHES Memakai outfit dari brand favoritmu tentunya akan membuat penampilan semakin keren. Jadi pasti ga mau dong kalo outfit yang baru kamu beli jadi cepat rusak karena tidak tahu bagaimana cara merawatnya. Ini dia DO & DON’T’S bagaimana cara merawat outfit kamu.   T-SHIRT      PISAHKAN CUCIAN BERWARNA DAN PUTIH Sebelum dicuci, pisahkan terlebih dahulu t-shirt berwarna dan putih. Hal ini di lakukan untuk menghindari terjadi nya kelunturan warna serta menjaga agar kondisi dan kualitas warna t-shirt tetap terjaga.JANGAN MEMAKAI MESIN CUCI Ini merupakan cara yang cukup ampuh untuk menjaga kualitas t-shirt, walaupun menggunakan mesin cuci lebih mudah dan praktis,  namun menggunakan mesin cuci dapat membuat kondisi t-shirt menjadi melar dan sablonan baju akan rusak."
    },
    {
        image: "https://www.screamous.com/cdn/shop/articles/E-Poster_Map_ebd7cff7-aa09-45d5-8eaf-04bbe39dabab_1080x.jpg?v=1572445154",
        tanggal: "October 30, 2019",
        tittle: "KICKFEST BANDUNG XIII",
        ket: "Ada yang berbeda di Kickfest XIII yang hadir tanggal 31 Oktober-3 November 2019. Selain durasi perayaan yang lebih panjang menjadi 4 hari,  Screamous akan hadir dengan tampilan yang fresh!   Screamous mengajak youth generation untuk berani mengekspresikan diri melalui produk Screamous yang terelaborasi menjadi produk yang comfy, colorful, vibrant & high quality. Memberi dorongan untuk berani beda adalah cara kami untuk memperkuat identitas dalam keseharian dan bersikap. Itu yang coba kami usung dalam semua image identity Screamous.   Di Kickfest kali ini kami sudah menyiapkan special merchandise; scarf eksklusif dan Screamous Festival Survival Kit untuk kamu semua yang berbelanja di booth Screamous dengan minimal pembelanjaan  250.000 rupiah"
    },
    {
        image: "https://www.screamous.com/cdn/shop/articles/0a0e3655-4b36-401f-8d8e-d729e438b7c6_1080x.JPG?v=1571037705",
        tanggal: "October 14, 2019",
        tittle: "Intimate Session wit Coldiac",
        ket: "Merayakan dibukanya store ke-7 Screamous di Malang, kami menggelar  Intimate Session with Coldiac, yang menjadi bagian dari Tiba-tiba Ngegigs Vol. 2 yang digelar tanggal 30 September 2019 lalu. Diadakan di Screamous shophouse Malang, Jalan Soekarno Hatta A5, momentum ini sekaligus menjadi ajang temu bagi para fans Coldiac. Sekitar 80 orang hadir untuk menonton performance Coldiac selama 2 jam penuh dengan suguhan lagu-lagu hitsnya seperti Vow, Don’t Love Me, White Room, Belong. Diselingi canda tawa, suasana yang dibangun oleh Sambadha, Tama, Derry dan Bima benar-benar intim, seru dan menjadi moment yang sangat menyenangkan. Terima kasih untuk semua yang hadir, it was an awesome experience! Sampai ketemu di Tiba-Tiba Ngegigs Vol.3!"
    },
    {
        image: "https://www.screamous.com/cdn/shop/articles/Cover-Web_e7fab89a-b70c-43b6-9f9e-f27810863d44_1080x.jpg?v=1564393034",
        tanggal: "July 28, 2019",
        tittle: "Launching of Arkiv X Screamous",
        ket: "Merayakan pencapaian 15 tahun perjalanan kami, adalah sebuah kebanggaan bisa mengajak seorang seniman muda berbakat asal Bandung yang karyanya sangat dikenal di dunia internasional, Arkiv Vilmansa untuk berkolaborasi dengan kami. Tak banyak seniman muda yang memiliki karir cemerlang seperti Arkiv, sehingga kami tidak hanya mengapresiasi dan tapi juga bersemangat merespon karya Arkiv setara dengan kolaborator lain, karena kami merasa memiliki spirit berkarya yang sama, tumbuh dan berkembang di industri kreatif kota Bandung. Selain itu, ada sentimental value dalam project ini sangat bisa mengukuhkan identitas Screamous. ARKIV VILMANSA Memulai karirnya di tahun 2005, Arkiv dikenal sebagai toy desainer pertama dari Indonesia dan juga seorang urban painter.   Karya seni Arkiv yang unik dan gampang dikenali membuatnya sangat mudah menarik perhatian para kolektor dan penikmat seni."
    }
];

function magazine(beritas){
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    img.src = beritas.image;
    let figcaption = document.createElement('figcaption');
    let date = document.createElement('p');
    date.textContent = beritas.tanggal;
    let container = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = beritas.tittle;
    let ket = document.createElement('p');
    ket.textContent = beritas.ket;
    
    
    content.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figcaption.appendChild(date);
    figcaption.appendChild(container);
    container.appendChild(h1);
    container.appendChild(ket);
}

function judul(){
    let content = document.querySelector('.content');
    let judul = document.createElement('h1');
    judul.textContent = "News";
    judul.style.cssText = 'text-align: center;'; /*css*/
    content.appendChild(judul);
    
    beritas.map((beritas) => {
        magazine(beritas);
    });
    
}
    judul();

