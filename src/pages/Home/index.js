import React,{useState, useEffect} from 'react';

import './styles.css';
import ApresentationImage from '../../assets/apresentation-image-home.png';
import ApresentationImageMobile from '../../assets/apresentation-image-home-mobile.png';

import imgBlog1 from '../../assets/blog-img-1.png';

import imgPodcast from '../../assets/podcast-img-1.png';

import imgCourse from '../../assets/course-img-1.png';

import imgMarket from '../../assets/market-img-1.png';

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
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            number: 122
        }
        ]);

        setCourses([{
            id: 0,
            marketImg: imgCourse,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            date: '04 ABR'
        } 
        ]);

        setMarket([{
            id: 0,
            marketImg: imgMarket,
            name: 'Condicionador Namah',
            description: 'Lorem ipsum dolor',
            price:'69,00'
        } 
        ]);
    },[])

  return (
      <div className="container">
            <div className="apresentation-box" >
                <img alt="apresentation" src={ApresentationImage} className="desktop-apresentation-image"/>
                <img alt="apresentation" src={ApresentationImageMobile} className="mobile-apresentation-image"/>
                <div>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>

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
      </div>
  );
}

export default Home;