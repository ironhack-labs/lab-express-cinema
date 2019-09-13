document.addEventListener('DOMContentLoaded', () => {

  // Other way to apply the fade-in effect to the elements.
  // We can select all the elements that we want to fade and go through
  // them adding the attribute data-fadein
  // The next example is to apply this effect to all the elements
  // that have the class "movie".
  // const movies = [...document.querySelectorAll('.movie')]
  // movies.forEach(movie => movie.setAttribute("data-fadein", ""))

  const fadeInOnLoadDOMElements = [...document.querySelectorAll('[data-fadein]')]
  const scaleOnLoadDOMElements = [...document.querySelectorAll('[data-scale]')]

  fadeInOnLoadDOMElements.forEach((fadeInElement, idx) => {
    setTimeout(() => {
      fadeInElement.classList.add('fade-in')
    }, idx * 100)
  })

  scaleOnLoadDOMElements.forEach((scaleElement, idx) => {
    setTimeout(() => {
      scaleElement.classList.add('scale')
    }, idx * 100)
  })

}, false);
