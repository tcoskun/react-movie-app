export const enum Genres {
  Action = 28,
  Animation = 16,
  Comedy = 35,
  Crime = 80,
  ScienceFiction = 878,
  Western = 37
}

export interface SearchMovieResponse {
  page: number,
  total_pages: number
  total_results: number
  results: Array<MovieModel>,
  
}

export interface MovieModel {
  id: number,
  title: string,
  overview: string,
  poster_path: string
}

export interface CategorySliderProps {
  t: any,
  withGenre: Genres,
  withoutGenre?: Genres
}

export interface CategorySliderState {
  categoryItemCount: number,
  showPreview: any,
  list: Array<MovieModel>
}

export interface BannerState {
  bannerItems: Array<MovieModel>
}

export interface MovieDetailProps {
  t: any,
  id: string
}

export interface ListItem {
  id: number,
  name: string
}

export interface MovieDetail {
  id: number,
  poster_path: string,
  title: string,
  overview: string,
  release_date: string,
  genres: Array<ListItem>,
  production_countries: Array<ListItem>
}

export interface MovieDetailState {
  detail: MovieDetail
}

export interface ButtonProps {
  fontSize?: number
}

export interface HrProps {
  margin: number
}

export interface LayoutState {
  selectedLanguage: string
}