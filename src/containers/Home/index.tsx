import React from 'react';

import Images from '../../components/Images/index';

import '../../styles/Home.scss';

const images = [
  {
    uri: 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/115824710_4685711718109314_4802704472827200547_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=aZsqq9vRoqgAX_jri9i&oh=e0a3ba5f47bada7246029d4ff9b690ef&oe=5F4B0021',
    id: '23621011060892340926'
  },
  {
    uri: 'https://instagram.fhan2-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/106080146_115879293303847_90532674285427911_n.jpg?_nc_ht=instagram.fhan2-5.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Op4GTAjgwNoAX8y2Z1Z&oh=52ea1187de7f47d0758c49374dbf5bb3&oe=5F4BCB14',
    id: '23621011060892340925'
  },
  {
    uri: 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/115824710_4685711718109314_4802704472827200547_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=aZsqq9vRoqgAX_jri9i&oh=e0a3ba5f47bada7246029d4ff9b690ef&oe=5F4B0021',
    id: '23621011060892340924'
  },
  {
    uri: 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/115824710_4685711718109314_4802704472827200547_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=aZsqq9vRoqgAX_jri9i&oh=e0a3ba5f47bada7246029d4ff9b690ef&oe=5F4B0021',
    id: '23621011060892340923'
  },
  {
    uri: 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/115824710_4685711718109314_4802704472827200547_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=aZsqq9vRoqgAX_jri9i&oh=e0a3ba5f47bada7246029d4ff9b690ef&oe=5F4B0021',
    id: '23621011060892340926'
  },
  {
    uri: 'https://instagram.fhan2-2.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/115824710_4685711718109314_4802704472827200547_n.jpg?_nc_ht=instagram.fhan2-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=aZsqq9vRoqgAX_jri9i&oh=e0a3ba5f47bada7246029d4ff9b690ef&oe=5F4B0021',
    id: '23621011060892340928'
  }
]


const Home: React.FC = () => {
  return (
    <div className='home'>
      <Images images={images} />
    </div>
  );
};

export default Home;
