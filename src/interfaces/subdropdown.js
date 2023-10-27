const titles = [
  'Hotel Home',
  'Hotel Chain',
  'Hotel Resort',
  'Hotel Grid',
  'Hotel List',
  'Hotel Detail',
  'Hotel Booking'
];

const container = document.querySelector('#dropdownContainer');
const template = document.querySelector('#dropdown');

titles.forEach(title => container.append(createDropdown(title)));

function createDropdown(title) {
  const clone = template.content.cloneNode(true);
  const link = clone.querySelector('.dropdownLink');
  link.innerText = title;
  return clone;
}
