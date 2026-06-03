import { linux, img_papel, wallpaper, wallparede, fecha_all, direito_walpaper } from "./linux.js";

const wallpapers = [
    { img: '/giovaniOS/assets/wallpapers/img1.webp' },
    { img: '/giovaniOS/assets/wallpapers/img2.webp' },
    { img: '/giovaniOS/assets/wallpapers/img3.webp' },
    { img: '/giovaniOS/assets/wallpapers/img4.webp' },
    { img: '/giovaniOS/assets/wallpapers/img5.webp' },
    { img: '/giovaniOS/assets/wallpapers/img6.webp' },
    { img: '/giovaniOS/assets/wallpapers/img7.webp' },
    { img: '/giovaniOS/assets/wallpapers/img8.webp' },
    { img: '/giovaniOS/assets/wallpapers/img9.webp' },
    { img: '/giovaniOS/assets/wallpapers/img10.webp' },
    { img: '/giovaniOS/assets/wallpapers/img11.webp' },
    { img: '/giovaniOS/assets/wallpapers/img12.webp' },
    { img: '/giovaniOS/assets/wallpapers/img13.webp' },
    { img: '/giovaniOS/assets/wallpapers/img14.webp' },
    { img: '/giovaniOS/assets/wallpapers/img15.webp' },
    { img: '/giovaniOS/assets/wallpapers/img16.webp' },
    { img: '/giovaniOS/assets/wallpapers/img17.webp' },
    { img: '/giovaniOS/assets/wallpapers/img18.webp' }
];
const wallpaperSalvo = localStorage.getItem("wallpaper");
wallpapers.forEach(e => {
    const wallpapel = document.createElement("div")
    wallpapel.classList.add('papelfundo')

    wallpapel.innerHTML = `
        <div class="img">
            <img src=${e.img}>
        </div>
    `
    wallpapel.addEventListener('click', () => {
        linux.style.background = `url(${e.img})`
        linux.style.backgroundRepeat = 'no-repeat'
        linux.style.backgroundSize = 'cover'
    })
    localStorage.setItem("wallpaper", e.img);
    img_papel.appendChild(wallpapel)
})

function toglewalpaper(){
    wallpaper.classList.toggle("oculto")
}
wallparede.addEventListener("click", toglewalpaper)
direito_walpaper.addEventListener("click", toglewalpaper)

fecha_all.addEventListener("click", () => {
    wallpaper.classList.toggle("oculto");
});
