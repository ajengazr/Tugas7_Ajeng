
function head(){
    let header = document.querySelector('header');
    let h1 = document.createElement('h1');
    h1.textContent = "SCREAMOUS";
    let nav = document.createElement('nav');
    let p1 = document.createElement('a');
    p1.textContent = "Home ";
    p1.addEventListener("click", () => alert('fitur belum tersedia'));
    let p2 = document.createElement('a');
    p2.textContent = "Shop ";
    p2.addEventListener('click', function(event){
        const newPageURL = 'http://127.0.0.1:5500/html/index.html'
        window.open(newPageURL, '_self');

    });
    let p3 = document.createElement('a');
    p3.textContent = "Magazine"; 
    p3.addEventListener('click', function(event){
        const newPageURL = 'http://127.0.0.1:5500/html/magazine.html'
        window.open(newPageURL, '_self');

    });


    header.appendChild(h1);
    header.appendChild(nav);
    nav.appendChild(p1);
    nav.appendChild(p2);
    nav.appendChild(p3);

}

head();