interface DestinationData {
  id: number;
  img: string;
  title: string;
  description: string;
  distanceKm: string;
  travelTime: string;
}

export const destinations: DestinationData[] = [
  {
    id: 1,
    img: 'src/assets/destination/image-moon.webp',
    title: 'MOON',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distanceKm: '384.400 km',
    travelTime: '3 days'
  },
  {
    id: 2,
    img: 'src/assets/destination/image-mars.webp',
    title: 'MARS',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distanceKm: '225 MIL. km',
    travelTime: '9 MONTHS'
  },
  {
    id: 3,
    img: 'src/assets/destination/image-europa.webp',
    title: 'EUROPA',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distanceKm: '628 MIL. KM',
    travelTime: '3 YEARS'
  },
  {
    id: 4,
    img: 'src/assets/destination/image-titan.webp',
    title: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distanceKm: '1.6 BIL. KM',
    travelTime: '7 YEARS'
  }
];
