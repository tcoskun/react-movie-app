import * as React from 'react';
import { Link } from 'react-router-dom'; 
import { withTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from 'swiper/core';
import styled from 'styled-components';
import { Button, Image } from '../components/Styled';
import Api from '../api';
import { SearchMovieResponse, MovieModel, CategorySliderProps, CategorySliderState } from '../types'

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

class CategorySlider extends React.Component<CategorySliderProps> {
  public state: CategorySliderState = {
    categoryItemCount: 0,
    showPreview: {},
    list: []
  }

  resizeHanlder = () => {
    const width = window.innerWidth;
    let categoryItemCount = 0;
    if (width < 300) {
      categoryItemCount = 1;
    } else if (width < 500) {
      categoryItemCount = 2;
    } else if (width < 700) {
      categoryItemCount = 3;
    } else if (width < 900) {
      categoryItemCount = 4;
    } else if (width < 1100) {
      categoryItemCount = 5;
    } else if (width < 1300) {
      categoryItemCount = 6;
    } else if (width < 1700) {
      categoryItemCount = 7;
    } else {
      categoryItemCount = 8;
    }
    
    this.setState({categoryItemCount});
  }

  componentDidMount() {
    Api.get(`discover/movie?&sort_by=popularity.desc&with_genres=${this.props.withGenre}&without_genres=${this.props.withoutGenre}`).then((response: SearchMovieResponse) => {
      let list = response.results;
      this.setState({ list });
    })
    window.onresize = this.resizeHanlder;
    this.resizeHanlder();
  }

  render() {
    const imageBaseUrl = 'https://image.tmdb.org';
    const Div = styled.div``;
    
    return (
      <Swiper
        virtual
        slidesPerView={this.state.categoryItemCount}
        spaceBetween={0}
        pagination
        navigation
        style={{ height: '300px'}}
      >
        {
          this.state.list.map((item: MovieModel) => 
            <SwiperSlide key={`slide-${item.id}`} style={{ listStyle: 'none' }}>
              <Div>
                <Image src={`${imageBaseUrl}/t/p/w500${item.poster_path}`} style={{display: this.state.showPreview[item.id] ? 'none': 'show'}}
                  onMouseOver={() => {
                    let showPreview = {
                      [`${item.id}`]: true
                    }
                    this.setState({showPreview})
                  }}>
                </Image>
                <Div className='category-preview' style={{display: this.state.showPreview[item.id] ? 'show': 'none'}}
                  onMouseLeave={() => {
                    this.setState({showPreview: {}})
                  }}>
                  <Div className='category-title'>{item.title}</Div>
                  <Link to={`/details/${item.id}`}>
                    <Button fontSize={15}>{this.props.t('banner.detail')}</Button>
                  </Link>
                </Div>
              </Div>
            </SwiperSlide>
          )
        }
      </Swiper>
    );
  }
}

export default withTranslation()(CategorySlider);