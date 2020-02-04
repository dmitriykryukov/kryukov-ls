const parallax = document.querySelector('.parallax');
const parallaxDown = document.querySelector('.parallax-down');
const layers = parallax.children;
const layersDown = parallaxDown.children;

function moveLayersDependsOnScroll(wScroll, items) {
  Array.from(items).forEach(item => {

    const divider = item.dataset.speed;       
    const strafe = wScroll*divider / 10;
    item.style.transform = `translateY(-${strafe}%)`;
  })
}

function moveLayersDependsOnScrollDown(wScroll, items) {
  Array.from(items).forEach(item => {

    const divider = item.dataset.speed;       
    const strafe = (wScroll-5000)*divider / 10;
    item.style.transform = `translateY(-${strafe}%)`;
  })
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  if (wScroll > 3200) {
    moveLayersDependsOnScrollDown(wScroll, layersDown);
  } else {
    moveLayersDependsOnScroll(wScroll, layers);
  }
  
  
})