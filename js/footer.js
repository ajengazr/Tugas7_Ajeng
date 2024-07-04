function foot(){
    let footer = document.querySelector('footer');
    let footerKiri = document.querySelector('.footer-kiri');
    let imege = document.createElement('img');
    imege.src = "https://www.screamous.com/cdn/shop/files/blk-logo_240x.png?v=1678180118";
    let footerCenter = document.querySelector('.footer-center');
    let pCen = document.createElement('p');
    pCen.textContent = "Follow Us";
    let img1 = document.createElement('img');
    img1.src = "https://cdn-icons-png.flaticon.com/128/3955/3955024.png";
    img1.addEventListener('click', function(event) {
        window.open('https://www.instagram.com/ajengazr/', '_blank');
      });
    let img2 = document.createElement('img');
    img2.src = "https://cdn-icons-png.flaticon.com/128/145/145802.png";
    img2.addEventListener('click', function(event) {
        window.open('https://www.facebook.com/ajeng.a.maharani.750', '_blank');
      });
    let img3 = document.createElement('img');
    img3.src = "https://cdn-icons-png.flaticon.com/128/5969/5969020.png";
    img3.addEventListener('click', function(event) {
        window.open('https://x.com/pyccol0', '_blank');
      });
    let footerKanan = document.querySelector('.footer-kanan');
    let p1Kan = document.createElement('p');
    p1Kan.textContent = "About Us";
    p1Kan.addEventListener("click", () => alert('fitur belum tersedia'));
    let p2Kan = document.createElement('p');
    p2Kan.textContent = "copyright 2024 by Ajeng Azzahra Maharani";

    footer.appendChild(footerKiri);
    footerKiri.appendChild(imege);
    footer.appendChild(footerCenter);
    footerCenter.appendChild(pCen);
    footerCenter.appendChild(img1);
    footerCenter.appendChild(img2);
    footerCenter.appendChild(img3);
    footer.appendChild(footerKanan);
    footerKanan.appendChild(p1Kan);
    footerKanan.appendChild(p2Kan);
}

foot();