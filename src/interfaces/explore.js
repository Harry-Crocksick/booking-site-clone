const cities = [{
    id: 1,
    name: 'San Francisco',
    distance: '25 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/01.jpg'
  },
  {
    id: 2,
    name: 'Miami',
    distance: '45 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/02.jpg'
  },
  {
    id: 3,
    name: 'Sanjosh',
    distance: '55 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/03.jpg'
  },
  {
    id: 4,
    name: 'Los Angeles',
    distance: '1-hour drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/04.jpg'
  },
  {
    id: 5,
    name: 'New York',
    distance: '2-hour drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/05.jpg'
  },
  {
    id: 6,
    name: 'North Justen',
    distance: '20 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/06.jpg'
  },
  {
    id: 7,
    name: 'Rio',
    distance: '3-hour drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/07.jpg'
  },
  {
    id: 8,
    name: 'Las Vegas',
    distance: '55 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/08.jpg'
  },
  {
    id: 9,
    name: 'Texas',
    distance: '13 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/09.jpg'
  },
  {
    id: 10,
    name: 'Chicago',
    distance: '35min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/10.jpg'
  },
  {
    id: 11,
    name: 'New Keagon',
    distance: '1hour 13min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/11.jpg'
  },
  {
    id: 12,
    name: 'Oslo',
    distance: '13 min drive',
    image: 'https://booking.webestica.com/assets/images/category/hotel/nearby/12.jpg'
  },
];

const container = document.querySelector('#citiesContainer');
const template = document.querySelector('#citiesList');

function createCitiyList({ id, name, distance, image }) {
  const clone = template.content.cloneNode(true);
  const cityList = clone.querySelector('.cityList');
  const cityImage = clone.querySelector('.image');
  const cityName = clone.querySelector('.cityName');
  const cityDistance = clone.querySelector('.distance');

  cityList.setAttribute('id', id);
  cityImage.src = image;
  cityImage.setAttribute('alt', name);
  cityName.innerText = name;
  cityDistance.innerText = distance;

  return clone;
}

cities.forEach(city => container.append(createCitiyList(city)));
