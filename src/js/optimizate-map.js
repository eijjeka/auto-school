import throttle from 'lodash.throttle';

const map = document.querySelector('.map-iframe');
const examSection = document.querySelector('.exam-section');

function handleScroll() {
  const positionCreditSection = examSection.getBoundingClientRect();
  if (map.style.display === 'block') {
    return;
  }
  screenWidth = window.innerWidth;
  console.log('screenWidth: ', screenWidth);

  if (positionCreditSection.top <= 0 && screenWidth <= 768) {
    map.style.display = 'block';
  }
}

window.addEventListener('scroll', throttle(handleScroll, 300));
