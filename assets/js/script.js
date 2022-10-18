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
  {
    id: '5',
    name: 'Coloe',
    image: './assets/images/person5.jpg',
    position: 'Professor at Newyork University',
    description: 'Have the time to share your thought and options with expects for each topic',
  },
  {
    id: '6',
    name: 'Diana',
    image: './assets/images/person6.jpg',
    position: 'Professor at Landon University',
    description: 'Have the time to share your thought and options with expects for each topic',
  },

];

document.addEventListener('DOMContentLoaded', () => {
  speakers.forEach((speaker) => {
    const feature = document.querySelector('.feature-body');
    const div = document.createElement('div');
    div.innerHTML = `
              <div class="feature-card" id="speaker${speaker.id}">
                      <div class="feature-img">
                          <img src="${speaker.image}" alt="speaker-image">
                      </div>
               
                      <div class="feature-content">
                          <h2>${speaker.name}</h2>
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
  const speaker5 = document.getElementById('speaker5');
  const speaker6 = document.getElementById('speaker6');

  more.onclick = () => {
    if (speaker5.style.display === '' || speaker5.style.display === 'none') {
      more.innerHTML = 'Less <i class="fa-solid fa-chevron-up"></i>';
      speaker5.style.display = 'flex';
      speaker6.style.display = 'flex';
    } else {
      more.innerHTML = 'More <i class="fa-solid fa-chevron-down"></i>';
      speaker5.style.display = 'none';
      speaker6.style.display = 'none';
    }
  };
});

// Speakers
