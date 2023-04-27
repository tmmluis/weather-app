import lisbon from '../assets/lisbon.png';
import london from '../assets/london.png';
import stockholm from '../assets/stockholm.png';

export type City = {
  image: string;
  name: string;
  country: string;
};

const cities = [
  {
    image: lisbon,
    name: 'Lisbon',
    country: 'Portugal',
  },
  {
    image: london,
    name: 'London',
    country: 'United Kingdom',
  },
  {
    image: stockholm,
    name: 'Stockholm',
    country: 'Sweden',
  },
];

let currentCity = 0;

export function getCity() {
  const city = cities[currentCity];

  currentCity++;
  if (currentCity > cities.length - 1) {
    currentCity = 0;
  }
  return city;
}
