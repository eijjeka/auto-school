const refs = {
  buttonMap: document.getElementById('btn-phone'),
  aboutContainer: document.getElementById('about'),
  innerContainer: document.getElementById('inner'),
  map: document.getElementById('map'),
  imgPhone: document.getElementById('img-phone'),
};

let intervalShake;

const handleButtonMap = e => {
  const active = refs.aboutContainer
    .getAttribute('class')
    .includes('about-active');
  open = true;
  e.currentTarget === refs.buttonMap && active === true
    ? (refs.aboutContainer.setAttribute('class', 'about'),
      refs.innerContainer.setAttribute('class', 'about-inner-container'))
    : (refs.aboutContainer.setAttribute('class', 'about-active'),
      refs.innerContainer.setAttribute(
        'class',
        'about-active-inner-container'
      ));
};

const mouseEnterModalContact = () => {
  clearInterval(intervalShake);
};

const mouseEnterMap = () => {
  const active = refs.aboutContainer
    .getAttribute('class')
    .includes('about-active');

  if (!active) {
    intervalShake = setInterval(() => {
      shakePhone(refs.imgPhone);
    }, 3000);
  } else {
    clearInterval(intervalShake);
  }
};

const shakePhone = element => {
  element.animate(
    [{ transform: 'rotate(15deg)' }, { transform: 'rotate(0deg)' }],
    {
      duration: 120,
      iterations: 4,
    }
  );
};

refs.buttonMap.addEventListener('click', handleButtonMap);
refs.map.addEventListener('mouseenter', mouseEnterMap);
refs.aboutContainer.addEventListener('mouseenter', mouseEnterModalContact);
