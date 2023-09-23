import './style.css';

const toggleBtn = document.querySelector('#toggle');
toggleBtn.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark');
});
