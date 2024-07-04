const products = [
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r98q-lwwxorsa04ez6e_370x.jpg?v=1719385992",
        name: "Screamous Jacket Harrington CLETO BLACK",
        desc: [
            "Material : Polyester Taslan, Tartan Lining",
        ],
        price: "Rp. 210.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r98s-lvy9ckcli2v160_370x.jpg?v=1717138805",
        name: "Screamous Jacket Harrington CLETO CREAM",
        desc: [
            "Material : Polyester Taslan, Tartan Lining",
        ],
        price: "Rp. 210.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r98s-lvpp7am1cirge1_370x.jpg?v=1716622692",
        name: "Screamous Reversible Jacket ARILE BLACK - GREY",
        desc: [
            "Material : Polyester Taslan, Tartan Lining",
        ],
        price: "Rp. 227.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r98p-lqojii9eds4y36_370x.jpg?v=1705657873",
        name: "Screamous Jacket Varsity FOOJIE NAVY BLUE",
        desc: [
            "Material : Cotton Fleece 280 Gsm",
        ],
        price: "Rp. 227.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7qukz-lj2gfdn66xkr89_370x.jpg?v=1689073278",
        name: "Screamous Sweater Pria Pullover Hoodie LOGO CROWN SAFARI",
        desc: [
            "Material : Fleece CVC 280 Gsm ( Cotton 70% Polyester 30% )",
        ],
        price: "Rp. 199.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-liv1ctmqxd1z7e_41145739-6055-41e7-a2f2-d2a9c91cedc3_370x.jpg?v=1688617083",
        name: "Screamous Sweater Pria Crewneck OVERSIZED LEGEND TINY WHITE NAVY BLUE",
        desc: [
            "Material : 100% Cotton Fleece 280 gsm",
            "Sablon : Highdensity",
        ],
        price: "Rp. 189.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7qul6-ljdtj65nqzpz6e_370x.jpg?v=1689756123",
        name: "Screamous Polo Shirt CROWN LINE GREY BLACK",
        desc: [
            "Material : 100% Cotton CVC",
        ],
        price: "Rp. 127.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r991-lt4p5scpnbgt10_370x.jpg?v=1711028944",
        name: "Screamous Kaos T-Shirt MIX BLACK",
        desc: [
            "Material : Cotton 30's, 160 gsm",
            "Sablon : Plastisol",
        ],
        price: "Rp. 85.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r990-lwwxorsjzq5qeb_370x.jpg?v=1719386030",
        name: "Screamous Kaos T-Shirt CROWN LOGO SS DARK BROWN",
        desc: [
            "Material : Cotton 30's, 160 gsm",
        ],
        price: "Rp. 85.000"
    },
    {
        image: "https://www.screamous.com/cdn/shop/files/id-11134207-7r98y-lwwxorsjrar2ba_370x.jpg?v=1719385773",
        name: "Screamous Sweater Pria Cardigan MIRO BLACK",
        desc: [
            "Material : Fleece CVC 280 Gsm ( Cotton 70% Polyester 30% )",
        ],
        price: "Rp. 185.000"
    }
];

function card(product) {
    let container = document.querySelector('.container');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let img = document.createElement('img');
    img.src = product.image;
    let h1 = document.createElement('h1');
    h1.textContent = product.name;
    let p = document.createElement('p');
    p.textContent = "Deskripsi Produk:";
    let h2 = document.createElement('h2');
    h2.textContent = product.price;
    let ul = document.createElement('ul');
    product.desc.map((d)=>{
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    let size = document.createElement('span');
    size.textContent = "Size Chart (klik pilihan ukuran): ";

    let s = document.createElement('span');
    s.textContent = "S ";
    s.addEventListener("click", () => alert('(S) Lebar Dada 52,5 cm, Tinggi Belakang 62,5 cm, Panjang Lengan 74 cm'));

    let m = document.createElement('span');
    m.textContent = "M ";
    m.addEventListener("click", () => alert('(M) Lebar Dada 55 cm, Tinggi Belakang 65 cm, Panjang Lengan 76 cm'));
    
    let l = document.createElement('span');
    l.textContent = "L ";
    l.addEventListener("click", () => alert('(L) Lebar Dada 57,5 cm, Tinggi Belakang 67,5 cm, Panjang Lengan 78 cm'));

    let xl = document.createElement('span');
    xl.textContent = "XXL ";
    xl.addEventListener("click", () => alert('(XL) Lebar Dada 60 cm, Tinggi Belakang 70 cm, Panjang Lengan 80 cm'));

    let xxl = document.createElement('span');
    xxl.textContent = "XXL ";
    xxl.addEventListener("click", () => alert('(XXL) Lebar Dada 62,5 cm, Tinggi Belakang 72,5 cm, Panjang Lengan 82 cm'));

    let button = document.createElement('button');
    button.textContent = "Beli sekarang";
    button.addEventListener("click", () => confirm('anda yakin ingin membeli produk ini?'));

    let like = document.createElement('button');
    like.textContent = "Like";
    like.addEventListener("click", () => alert('Anda menyukai produk ini'));

    let komentar = document.createElement('button');
    komentar.textContent = "Comentar";
    komentar.addEventListener("click", () => prompt('Berikan ulasan mengenai produk ini!'));

    container.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figcaption.appendChild(h1);
    figcaption.appendChild(size);
    figcaption.appendChild(s)
    figcaption.appendChild(m);
    figcaption.appendChild(l)
    figcaption.appendChild(xl);
    figcaption.appendChild(xxl);
    figcaption.appendChild(p);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(button);
    figcaption.appendChild(like);
    figcaption.appendChild(komentar);
}

products.map((product)=>{
    card(product);
})
