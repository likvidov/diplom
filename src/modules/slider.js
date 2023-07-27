const slider = (block, items, currentSlide = 0, countSlide = 3) => {
  const sliderBlock = document.getElementById(block);
  const slides = sliderBlock.querySelectorAll(items);

  const showSlide = (elems, current) => {
    elems.forEach((elem, i) => {
      if (i === current) {
        elem.classList.remove('hide');
      }
    });
  }

  const showSlides = (elems, countSlide, currentSlide) => {
    let current = currentSlide;

    elems.forEach(elem => {
      elem.classList.add('hide');
    })

    for (let i = 0; i < countSlide; i++) {
      showSlide(elems, current);
      current++;
      if (current == elems.length) current = 0;
    }
  }

  sliderBlock.addEventListener('click', e => {
    e.preventDefault();

    if (!e.target.closest(`.${block}__arrow`)) return;

    if (e.target.closest(`.${block}__arrow--right`)) {
      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      showSlides(slides, countSlide, currentSlide);
    } else if (e.target.closest(`.${block}__arrow--left`)) {
      currentSlide--;

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      showSlides(slides, countSlide, currentSlide);
    }

  })

  showSlides(slides, countSlide, currentSlide);
}

export default slider;