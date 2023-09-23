const refs = {
  buttonMap: document.getElementById('btn-phone'),
  aboutContainer: document.getElementById('about'),
  innerContainer: document.getElementById('inner'),
};

const handleButtonMap = e => {
  const active = refs.aboutContainer
    .getAttribute('class')
    .includes('about-active');
  console.log(active);
  e.currentTarget === refs.buttonMap && active === true
    ? (refs.aboutContainer.setAttribute('class', 'about'),
      refs.innerContainer.setAttribute('class', 'about-inner-container'))
    : (refs.aboutContainer.setAttribute('class', 'about-active'),
      refs.innerContainer.setAttribute(
        'class',
        'about-active-inner-container'
      ));
};

refs.buttonMap.addEventListener('click', handleButtonMap);
