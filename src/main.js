import './styles/main.scss';
import _ from 'lodash';

// Importing images and audio
import asterixImg from './assets/images/asterix.png';
import obelixImg from './assets/images/obelix.png';
import getafixImg from './assets/images/getafix.png';
import dogmafixImg from './assets/images/dogmafix.png';
import dogmaAudioSrc from './assets/audio/asterix.mp3';

// Webpack Test
console.log('Webpack работает 😏', _.chunk([1,2,3,4], 2));

// Character biographies with formatting
const bios = {
  Asterix: `
    <strong>Age:</strong> ~35 лет<br>
    <strong>Height:</strong> ~1,35 м<br>
    Small but incredibly agile Gallic warrior. Always protects his friends and village. Gains strength from the magic potion of druid Getafix. Loves adventures and victories over Romans.
  `,
  Obelix: `
    <strong>Age:</strong> ~35 лет<br>
    <strong>Height:</strong> ~1,80 м<br>
    Best friend of Asterix, huge and strong. Always ready for battle, loves fighting with Romans and carrying stones. A bit naive but with a kind heart.
  `,
  Getafix: `
    <strong>Age:</strong> ~60 лет<br>
    <strong>Height:</strong> ~1,70 м<br>
    Wise druid of the village, master of preparing the magic potion that grants strength to the Gauls. Calm, intelligent and caring mentor of Asterix and Obelix.
  `
};

// Modal window
const modal = document.getElementById('bioModal');
const modalTitle = document.getElementById('modalTitle');
const modalBio = document.getElementById('modalBio');
const closeBtn = modal.querySelector('.close');

document.querySelectorAll('.character button').forEach(btn => {
  btn.addEventListener('click', e => {
    const parent = e.target.parentElement;
    const name = parent.dataset.name;
    modalTitle.textContent = name;
    modalBio.innerHTML = bios[name];
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { 
  if (e.target === modal) modal.style.display = 'none'; 
});

// Substitute pictures
document.querySelector('[data-name="Asterix"] img').src = asterixImg;
document.querySelector('[data-name="Obelix"] img').src = obelixImg;
document.querySelector('[data-name="Getafix"] img').src = getafixImg;

const dogBtn = document.getElementById('dogmafixBtn');
dogBtn.src = dogmafixImg;

const audio = document.getElementById('dogmafixAudio');
audio.src = dogmaAudioSrc;

// Manage audio player
dogBtn.addEventListener('click', () => {
  if (audio.paused) audio.play();
  else audio.pause();
});