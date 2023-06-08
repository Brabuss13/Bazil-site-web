window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to('.images-container', {height: 400, duration: 1.3, delay: 0.4, ease: 'power2.out'})
    .to('.bloc-txt', {height: 'auto', duration: 0.6, ease: 'power2.out'}, '-=0.8')
    .to('.bloc-txt h2', {y: 0, ease: 'power2.out'}, '-=0.6')

    .to('.f2', {y: 0, duration: 0.6, ease: 'power2.out'})
    .add(() => {
        document.querySelector('.flip-img1').style.backgroundImage = "url('img/d5d7f3a2ecdd_bazil-1.jpeg')";
    })
    .to('.f2', {y: '-100%'})

    .to('.load-container', {opacity: 0, duration: 0.8, delay: 0.7})
    .add(() => {
        document.querySelector('.load-container').style.display = "none";
    })
    .add(() => {
        document.querySelector('video').play()
    }, '-=10.8')

}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
    })

window.addEventListener("scroll",function(){
    var main  = document.querySelector("main");
    main.classList.toggle("sticky", window.scrollY > 50);
    })

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

$(document).ready(function(){
    $( ".toggle" ).click(function() {
        $( ".menu" ).slideToggle( 1000 );
      });
    $( ".annim-filtre" ).click(function() {
        $( ".box1-filtre-" ).slideToggle( 1000 );
      });
});

$( ".fa-times" ).hover(function(){
    $( ".fa-times" ).toggleClass("rotation")
    });

    function nonScroll()
    { 
    scrollHaut = window.pageYOffset; 
    scrollGauche = window.pageXOffset;
    window.onscroll = function() 
    { 
    window.scrollTo(scrollGauche, scrollHaut); 
    }; 
    } 
    
    function ouiScroll()
    { 
    window.onscroll = function() {}; 
    } 

    const wrapper = document.querySelector(".wrapper");
    const fileName = document.querySelector(".file-name");
    const defaultBtn = document.querySelector("#default-btn");
    const customBtn = document.querySelector("#custom-btn");
    const cancelBtn = document.querySelector("#cancel-btn i");
    const img = document.querySelector("img");
    let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
    function defaultBtnActive(){
      defaultBtn.click();
    }
    defaultBtn.addEventListener("change", function(){
      const file = this.files[0];
      if(file){
        const reader = new FileReader();
        reader.onload = function(){
          const result = reader.result;
          img.src = result;
          wrapper.classList.add("active");
        }
        cancelBtn.addEventListener("click", function(){
          img.src = "";
          wrapper.classList.remove("active");
        })
        reader.readAsDataURL(file);
      }
      if(this.value){
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
      }
    });