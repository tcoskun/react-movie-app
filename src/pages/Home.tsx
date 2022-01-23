import * as React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import Banner from '../components/Banner';
import CategorySlider from '../components/CategorySlider';
import { Div, Hr, H2 } from '../components/Styled'
import { Genres } from '../types'

class Home extends React.Component<WithTranslation> {

  render() {
    return (
      <Div>
        <Banner />
        <Hr margin={3}/>
        <Div className='category-content'>
          <H2>{this.props.t('genre.action')}</H2>
          <CategorySlider withGenre={Genres.Action}></CategorySlider>
          <Hr margin={3}/>

          <H2>{this.props.t('genre.animation')}</H2>
          <CategorySlider withGenre={Genres.Animation} withoutGenre={Genres.Comedy}></CategorySlider>
          <Hr margin={3}/>

          <H2>{this.props.t('genre.comedy')}</H2>
          <CategorySlider withGenre={Genres.Comedy} withoutGenre={Genres.Animation}></CategorySlider>
          <Hr margin={3}/>

          <H2>{this.props.t('genre.crime')}</H2>
          <CategorySlider withGenre={Genres.Crime} withoutGenre={Genres.Action}></CategorySlider>
          <Hr margin={3}/>

          <H2>{this.props.t('genre.scienceFiction')}</H2>
          <CategorySlider withGenre={Genres.ScienceFiction}></CategorySlider>
          <Hr margin={3}/>
          
          <H2>{this.props.t('genre.western')}</H2>
          <CategorySlider withGenre={Genres.Western}></CategorySlider>
          <Hr margin={3}/>
        </Div>
      </Div>
    );
  }
}

export default withTranslation()(Home);