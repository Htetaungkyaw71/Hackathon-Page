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
