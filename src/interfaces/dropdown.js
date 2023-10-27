const titles = [
  'Flight',
  'Tour',
  'Cab',
  'Directory',
  'Add Listing',
  'Hero',
  'Booking Confirmed',
  'Compare Listing',
  'Offer Detail'
];

const container = document.querySelector('#mainDropdownContainer');
const template = document.querySelector('#mainDropdown');

titles.forEach(title => container.append(createDropdown(title)));

function createDropdown(title) {
  const clone = template.content.cloneNode(true);
  const a = clone.querySelector('a');
  a.innerText = title;
  a.href = `/${title}`;
  return clone;
}
