import * as React from 'react';
import { Link } from 'react-router-dom'; 
import { withTranslation, WithTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from 'swiper/core';
import Api from '../api';
import { Image, Div, Button } from '../components/Styled';
import { SearchMovieResponse, MovieModel, BannerState } from '../types'

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

class Banner extends React.Component<WithTranslation> {
  state: BannerState = {
    bannerItems: []
  }

  componentDidMount() {
    Api.get('trending/movie/week').then((response: SearchMovieResponse) => {
      const bannerItems = response.results;
      this.setState({ bannerItems });
    })
  }

  render() {
    const imageBaseUrl = 'https://image.tmdb.org';

    return (
      <Swiper
        id='banner-swiper'
        virtual
        slidesPerView={1}
        spaceBetween={0}
        autoplay
        navigation
        pagination
        style={{height: '600px'}}
      >
        {
          this.state.bannerItems.map((item: MovieModel) => 
            <SwiperSlide key={`slide-${item.id}`} style={{ listStyle: 'none' }}>
              <Div className='slider-wrapper center'>
                <Div className='movie-info'>
                  <Div className='movie-title'>{item.title}</Div>
                  <Div className='movie-description'>{item.overview}</Div>
                  <Link to={`/details/${item.id}`}>
                    <Button>{this.props.t('banner.detail')}</Button>
                  </Link>
                </Div>
                <Div className='center'>
                  <Image src={`${imageBaseUrl}/t/p/w500${item.poster_path}`}></Image>
                </Div>
              </Div>
          </SwiperSlide>
          )
        }
      </Swiper>
    );
  }
}

export default withTranslation()(Banner);