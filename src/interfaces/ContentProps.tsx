import { GenreResponseProps } from './GenreResponseProps'
import { MovieProps } from './MovieProps'

export interface ContentProps {
    selectedGenre: GenreResponseProps;
    movies: MovieProps[];
}