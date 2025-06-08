$(".gallery__slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});


const swiper = new Swiper(".product-swiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  on: {
    init(swiper) {
      updateProgress(swiper);
    },
    slideChange(swiper) {
      updateProgress(swiper);
    },
  },
});

function updateProgress(swiper) {
  const totalSlides = swiper.slides.length - swiper.params.slidesPerView;
  const progressPercent = (swiper.activeIndex / totalSlides) * 100;
  const clampedProgress = Math.min(Math.max(progressPercent, 0), 100);
  document.querySelector(".progress-bar").style.width = `${clampedProgress}%`;
}


const searchInput = document.querySelector('.header__search-input');
const searchButton = document.querySelector('.header__search-icon');

searchInput.addEventListener('focus', () => {
  searchButton.style.opacity = '1';
});

searchInput.addEventListener('blur', () => {
  searchButton.style.opacity = '';
});

/* ---------------------------------- */

document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.classList.toggle('button--empty');
  });

  btn.addEventListener('mouseleave', () => {
    btn.classList.toggle('button--empty');
  });
});

/* ---------------------------------- */

document.querySelectorAll('.product-card-like').forEach(function (likeBtn) {
  likeBtn.addEventListener('click', function () {
    const path = likeBtn.querySelector('path');
    if (path) {
      const currentFill = path.getAttribute('fill');
      path.setAttribute('fill', currentFill === 'black' ? 'none' : 'black');
    }
  });
});

/* ---------------------------------- */
const headerFull = document.querySelector('.header--full');
const headerScroll = document.querySelector('.header--scroll');

function toggleHeaderByScroll() {
  if (window.scrollY === 0) {
    headerFull.style.display = 'block';
    headerScroll.style.display = 'none';
  } else {
    headerFull.style.display = 'none';
    headerScroll.style.display = 'block';
  }
}

window.addEventListener('scroll', toggleHeaderByScroll);
document.addEventListener('DOMContentLoaded', toggleHeaderByScroll);

/* ---------------------------------- */



