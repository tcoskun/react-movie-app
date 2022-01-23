import * as React from 'react';
import { useParams  } from 'react-router-dom';
import { Div } from '../components/Styled';
import MovieDetail from '../components/MovieDetail';

const Details: React.FC = (): JSX.Element => {
  const params = useParams();

  return <Div><MovieDetail id={`${params.id}`}></MovieDetail></Div>
};

export default Details;