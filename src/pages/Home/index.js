import React,{useState, useEffect} from 'react';

import './styles.css';

import imgBlog1 from '../../assets/blog-img-1.png';

import imgPodcast from '../../assets/podcast-img-1.png';

import imgCourse from '../../assets/course-img-1.png';

import imgMarket1 from '../../assets/market-img-1.png';
import imgMarket2 from '../../assets/market-img-2.png';
import imgMarket3 from '../../assets/market-img-3.png';
import imgMarket4 from '../../assets/market-img-4.png';

import ApresentationBox from './ApresentationBox';
import BlogContainerItem from './BlogContainerItem';
import PodcastContainerItem from './PodcastContainerItem';
import CursoConatinerItem from './CursoContainerItem';
import MarketContainerItem from './MarketContainerItem';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [courses, setCourses] = useState([]);
    const [market, setMarket] = useState([]);

    useEffect(()=>{
        setBlogs([{
            id: 0,
            marketImg: imgBlog1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            topic: 'VIAGEM',
            author: 'Fulano de Tal'
        }
        ]);

        setPodcasts([{
            id: 0,
            marketImg: imgPodcast,
            title: 'Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...',
            number: 122
        }
        ]);

        setCourses([{
            id: 0,
            marketImg: imgCourse,
            title: 'Imersão Vinyasa Flow',
            date: '04 ABR'
        } 
        ]);

        setMarket([{
            id: 0,
            marketImg: imgMarket1,
            name: 'Condicionador Namah',
            description: 'Lorem ipsum dolor',
            price:'69,00'
        },{
            id: 1,
            marketImg: imgMarket2,
            name: 'Livro Acenda a Sua Luz',
            description: 'Carol Rache',
            price:'54,00'
        },{
            id: 2,
            marketImg: imgMarket3,
            name: 'Camiseta Solidária',
            description: 'Tamanho único',
            price:'149,00'
        },{
            id: 3,
            marketImg: imgMarket4,
            name: 'Tapete Viagem Pássaro',
            description: '',
            price:'237,00'
        },{
            id: 4,
            marketImg: imgMarket2,
            name: 'Livro Acenda a Sua Luz',
            description: 'Carol Rache',
            price:'54,00'
        },{
            id: 5,
            marketImg: imgMarket3,
            name: 'Camiseta Solidária',
            description: 'Tamanho único',
            price:'149,00'
        },{
            id: 6,
            marketImg: imgMarket4,
            name: 'Tapete Viagem Pássaro',
            description: '',
            price:'237,00'
        },
        ]);
    },[])

  return (
      <div className="container">
            <ApresentationBox />

            <div className="NewContentBox">
                <BlogContainerItem {...(blogs[0])} />
                <div className="rightPlace">
                    <PodcastContainerItem {...(podcasts[0])} />
                    <div className="rightPlaceBottomBox">
                        <CursoConatinerItem {...(courses[0])} />
                        <MarketContainerItem {...(market[0])} />
                    </div>
                </div>
            </div>

            <div className="recomendedBox">
                <div className="recomendedText">
                    <p>nossos especialistas</p>
                    <h2>recomendam</h2>
                </div>

                {market.map(marketItem => marketItem.id===0?'':<MarketContainerItem {...marketItem} />)}
            </div>
      </div>
  );
}

export default Home;