// Menu

const menu = document.getElementById('hambugar');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close');

menu.onclick = () => {
  overlay.style.display = 'block';
  document.body.style.position = 'fixed';
};

close.onclick = () => {
  overlay.style.display = 'none';
  document.body.style.position = 'relative';
};

document.querySelectorAll('#menu_link').forEach((btn) => {
  btn.onclick = () => {
    overlay.style.display = 'none';
    document.body.style.position = 'relative';
  };
});

// Menu

// Speakers

const speakers = [
  {
    id: '1',
    name: 'Yochai Benkler',
    image: './assets/images/person1.jpg',
    position: 'Professor at Harvard computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',
  },
  {
    id: '2',
    name: 'James',
    image: './assets/images/person2.jpg',
    position: 'Professor at University of Cambridge',
    description: 'Have the time to share your thought and options with expects for each topic',
  },
  {
    id: '3',
    name: 'Thomas',
    image: './assets/images/person3.jpg',
    position: 'Professor at Yale computer science school',
    description: 'Have the time to share your thought and options with expects for each topic',
  },
  {
    id: '4',
    name: 'David',
    image: './assets/images/person4.jpg',
    position: 'Professor at Standford University',
    description: 'Have the time to share your thought and options with expects for each topic',
  },

];

speakers.forEach((speaker) => {
  const feature = document.querySelector('.feature-body');
  const div = document.createElement('div');
  div.innerHTML = `
            <div class="feature-card" id="speaker${speaker.id}">
                    <div class="feature-img">
                        <img src="${speaker.image}" alt="speaker-image">
                    </div>
             
                    <div class="feature-content">
                        <h1>${speaker.name}</h1>
                        <h3>${speaker.position}</h3>
                        <span></span>
                        <p>
                           ${speaker.description}
                        </p>
                    </div>        
            </div>  
    `;
  feature.appendChild(div);
});

const more = document.querySelector('#more');
const speaker3 = document.getElementById('speaker3');
const speaker4 = document.getElementById('speaker4');

more.onclick = () => {
  if (speaker3.style.display === '' || speaker3.style.display === 'none') {
    more.innerHTML = 'Less <i class="fa-solid fa-chevron-up"></i>';
    speaker3.style.display = 'flex';
    speaker4.style.display = 'flex';
  } else {
    more.innerHTML = 'More <i class="fa-solid fa-chevron-down"></i>';
    speaker3.style.display = 'none';
    speaker4.style.display = 'none';
  }
};

// Speakers
