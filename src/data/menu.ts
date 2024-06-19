export interface MenuItem {
  id: number;
  number: string;
  label: string;
  link: string;
}

export const menu: MenuItem[] = [
  {
    id: 1,
    number: '00',
    label: 'HOME',
    link: '/#home'
  },
  {
    id: 2,
    number: '01',
    label: 'DESTINATION',
    link: '/#destination'
  },
  {
    id: 3,
    number: '02',
    label: 'CREW',
    link: '/#crew'
  },
  {
    id: 4,
    number: '03',
    label: 'TECHNOLOGY',
    link: '/#technology'
  }
];
