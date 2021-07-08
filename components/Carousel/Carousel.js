/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

let currentIndex = 1;

function CreateCarousel (){
  const carousel = document.createElement('div'),
    leftButton = document.createElement('div'),
    img1 = document.createElement('img'),
    img2 = document.createElement('img'),
    img3 = document.createElement('img'),
    img4 = document.createElement('img'),
    rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img1.classList.add('img-1');
  img2.classList.add('img-2');
  img3.classList.add('img-3');
  img4.classList.add('img-4');

  img1.style.display = "block";
  img1.style.animation = "fadeIn 1s linear";
  img1.style.animationFillMode = "forwards";

  leftButton.textContent = '<';
  rightButton.textContent = '>';
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  rightButton.addEventListener('click', function(){
    if(currentIndex !== 4){
      let currentImage = document.querySelector(`.img-${currentIndex}`);
      currentImage.style.display = "none";
      currentIndex++;
      let nextImage = document.querySelector(`.img-${currentIndex}`);
      nextImage.style.display = "block";
      nextImage.style.animation = "fadeIn 1s linear";
      nextImage.style.animationFillMode = "forwards";
    } else {
      let currentImage = document.querySelector(`.img-${currentIndex}`);
      currentImage.style.display = "none";
      currentIndex = 1;
      let nextImage = document.querySelector(`.img-${currentIndex}`);
      nextImage.style.display = "block";
      nextImage.style.animation = "fadeIn 1s linear";
      nextImage.style.animationFillMode = "forwards";

    }
  })

  leftButton.addEventListener('click', function(){
    if(currentIndex !== 1){
      let currentImage = document.querySelector(`.img-${currentIndex}`);
      currentImage.style.display = "none";
      currentIndex--;
      let nextImage = document.querySelector(`.img-${currentIndex}`);
      nextImage.style.display = "block";
      nextImage.style.animation = "fadeIn 1s linear";
      nextImage.style.animationFillMode = "forwards";
    } else {
      let currentImage = document.querySelector(`.img-${currentIndex}`);
      currentImage.style.display = "none";
      currentIndex = 4;
      let nextImage = document.querySelector(`.img-${currentIndex}`);
      nextImage.style.display = "block";
      nextImage.style.animation = "fadeIn 1s linear";
      nextImage.style.animationFillMode = "forwards";
    }
  })

  return carousel;
}

carouselContainer.appendChild(CreateCarousel());

