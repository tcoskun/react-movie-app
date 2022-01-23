import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { Image, Div, Hr, H2, H3 } from '../components/Styled'
import Api from '../api';
import { MovieDetailProps, MovieDetailState, ListItem } from '../types'

class MovieDetail extends React.Component<MovieDetailProps> {
  public state: MovieDetailState = {
    detail: {
      id: 0,
      overview: '',
      poster_path: '',
      release_date: '',
      title: '',
      genres: [],
      production_countries: []
    }
  }

  componentDidMount() {
    Api.get(`movie/${this.props.id}`).then((response: MovieDetail) => {
      let detail = response;
      this.setState({ detail });
    })
  }

  render() {
    const imageBaseUrl = 'https://image.tmdb.org'

    return (
      <Div className='detail-content'>
        <Div className='detail-content-item'>
          <Image className='detail-content-item' src={`${imageBaseUrl}/t/p/w500${this.state.detail.poster_path}`}></Image>
        </Div>
        <Div className='detail-content-item movie-desc'>
          <Hr margin={1}/>
          <H2>{this.state.detail.title}</H2>

          <Hr margin={1}/>
          <Div>{this.state.detail.overview}</Div>
          
          <Hr margin={1}/>
          <Div>
            <H3 style={{fontWeight: 'bold'}}>
              {this.props.t('details.genre')}
            </H3>
            <Div>{this.state.detail.genres.map((g: ListItem) => g.name).join(', ')}</Div>
          </Div>
          
          <Hr margin={1}/>
          <Div>
            <H3 style={{fontWeight: 'bold'}}>
              {this.props.t('details.productionCountries')}
            </H3>
            <Div>{this.state.detail.production_countries.map((g: ListItem) => g.name).join(', ')}</Div>
          </Div>

          <Hr margin={1}/>
          <Div>
            <H3 style={{fontWeight: 'bold'}}>
              {this.props.t('details.releaseDate')}
            </H3>
            <Div>{this.state.detail.release_date}</Div>
          </Div>
          <Hr margin={1}/>        
        </Div>
      </Div>
    );
  }
}

export default withTranslation()(MovieDetail);