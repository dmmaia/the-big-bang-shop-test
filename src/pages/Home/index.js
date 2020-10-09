import React,{useState, useEffect} from 'react';

import './styles.css';

import api from '../../services/api';

import ApresentationBox from './ApresentationBox';
import BlogContainerItem from './BlogContainerItem';
import PodcastContainerItem from './PodcastContainerItem';
import CursoConatinerItem from './CursoContainerItem';
import MarketContainerItem from './MarketContainerItem';
import NewLetter from './NewLetter';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [podcasts, setPodcasts] = useState([]);
    const [courses, setCourses] = useState([]);
    const [market, setMarket] = useState([]);

    useEffect(()=>{
        setBlogs(api('/blogs'));

        setPodcasts(api('/podcasts'));

        setCourses(api('/courses'));

        setMarket(api('/market'));
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

            <h2 className="sectionTitleHome">Blog</h2>

            <div className="NewContentBlogBox">
                <div>
                    <BlogContainerItem {...(blogs[0])} />
                    <BlogContainerItem {...(blogs[1])} />
                </div>
                
                <div>
                    <BlogContainerItem {...(blogs[2])} />
                    <BlogContainerItem {...(blogs[3])} />
                    <NewLetter />
                </div>
                <button className="showAllPosts">VEJA TODOS OS POSTS  ➞</button>
            </div>
      </div>
  );
}

export default Home;