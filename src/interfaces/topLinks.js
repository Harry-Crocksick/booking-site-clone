const links = [
  'Flights',
  'Hotels',
  'Tours',
  'Cabs',
  'About',
  'Contact',
  'us',
  'Blogs',
  'Services',
  'Detail',
  'page',
  'Services',
  'Policy',
  'Testimonials',
  'Newsletters',
  'Podcasts',
  'Protests',
  'NewsCyber',
  'Education',
  'Sports',
  'Tech and Auto',
  'Opinion',
  'Share Market'
];

const container = document.querySelector('#topLinksContainer');
const template = document.querySelector('#topLinks');

function createLinks(link) {
  const clone = template.content.cloneNode(true);
  const a = clone.querySelector('a');
  a.setAttribute('href', `/${link.toLowerCase()}`);
  a.innerText = link;

  return clone;
}

links.forEach(link => container.append(createLinks(link)));
