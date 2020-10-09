//Api response simulation

import imgBlog1 from '../assets/blog-img-1.png';
import imgBlog2 from '../assets/blog-img-2.png';
import imgBlog3 from '../assets/blog-img-3.png';

import imgPodcast from '../assets/podcast-img-1.png';

import imgCourse from '../assets/course-img-1.png';

import imgMarket1 from '../assets/market-img-1.png';
import imgMarket2 from '../assets/market-img-2.png';
import imgMarket3 from '../assets/market-img-3.png';
import imgMarket4 from '../assets/market-img-4.png';

const api = (fakeRoute) => {
        var response = [];
        switch (fakeRoute) {
            case '/blogs':
                response = [{
                    id: 0,
                    marketImg: imgBlog1,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    topic: 'VIAGEM',
                    author: 'Fulano de Tal',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...'
                },{
                    id: 1,
                    marketImg: imgBlog2,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    topic: 'DESENVOLVIMENTO PESSOAL',
                    author: 'Fulano de Tal',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...'
                },{
                    id: 2,
                    marketImg: imgBlog3,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    topic: 'VIAGEM',
                    author: 'Fulano de Tal',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...'
                },
                {
                    id: 3,
                    marketImg: imgBlog2,
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    topic: 'VIAGEM',
                    author: 'Fulano de Tal',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...'
                }
                ]
                break;
                
            case '/podcasts':
                response = [{
                    id: 0,
                    marketImg: imgPodcast,
                    title: 'Nome do episódio do podcast lorem ipsum dolor sit amet consectetur eli...',
                    number: 122
                }
                ]
                break;

            case '/courses':
                response = [{
                    id: 0,
                    marketImg: imgCourse,
                    title: 'Imersão Vinyasa Flow',
                    date: '04 ABR'
                } 
                ]
                break;

            case '/market':
                response = [{
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
                ]
                break;

            default:
                break;
    }
    return response;
}

export default api;