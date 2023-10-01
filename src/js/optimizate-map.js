import throttle from 'lodash.throttle';

const map = document.querySelector('.map-iframe');
const examSection = document.querySelector('.exam-section');

function handleScroll() {
  const positionCreditSection = examSection.getBoundingClientRect();
  if (map.style.display === 'block') {
    return;
  }

  if (positionCreditSection.top <= 0) {
    map.style.display = 'block';
  }
}

window.addEventListener('scroll', throttle(handleScroll, 300));
