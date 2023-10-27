const hotels = [{
    id: 1,
    image: 'https://booking.webestica.com/assets/images/category/hotel/01.jpg',
    description: 'Baga Comfort',
    location: 'New York',
    price: '$455',
    rating: 4.5
  },
  {
    id: 2,
    image: 'https://booking.webestica.com/assets/images/category/hotel/02.jpg',
    description: 'New Apollo Hotel',
    location: 'California',
    price: '$585',
    rating: 4.8
  },
  {
    id: 3,
    image: 'https://booking.webestica.com/assets/images/category/hotel/03.jpg',
    description: 'New Age Hotel',
    location: 'Los Angeles',
    price: '$385',
    rating: 4.6
  },
  {
    id: 4,
    image: 'https://booking.webestica.com/assets/images/category/hotel/04.jpg',
    description: 'Helios Beach Resort',
    location: 'Chicago',
    price: '$665',
    rating: 4.8
  }
];

const container = document.querySelector('#hotelsContainer');
const template = document.querySelector('#hotels');

hotels.forEach(hotel => container.append(createHotels(hotel)));

function createHotels(hotel) {
  const clone = template.content.cloneNode(true);
  const image = clone.querySelector('img');
  const description = clone.querySelector('.description');
  const price = clone.querySelector('.price');
  const rating = clone.querySelector('.rating');
  const location = clone.querySelector('.hotelLocation');

  image.src = hotel.image;
  description.innerText = hotel.description;
  price.innerText = hotel.price;
  rating.innerText = hotel.rating;
  location.innerText = hotel.location;

  return clone;
}
