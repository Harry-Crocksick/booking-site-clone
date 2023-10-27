const clients = [
  'https://booking.webestica.com/assets/images/client/01.svg',
  'https://booking.webestica.com/assets/images/client/02.svg',
  'https://booking.webestica.com/assets/images/client/03.svg',
  'https://booking.webestica.com/assets/images/client/04.svg',
  'https://booking.webestica.com/assets/images/client/05.svg',
  'https://booking.webestica.com/assets/images/client/06.svg',
];

const container = document.querySelector('#clientsListContainer');
const template = document.querySelector('#clientsList');

clients.forEach(client => container.append(createClients(client)));

function createClients(client) {
  const clone = template.content.cloneNode(true);
  const image = clone.querySelector('img');
  image.src = client;
  image.setAttribute('alt', client);
  console.log(client);

  return clone;
}
