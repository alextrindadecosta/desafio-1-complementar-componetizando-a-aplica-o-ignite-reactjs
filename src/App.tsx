import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GenreResponseProps } from './interfaces/GenreResponseProps'
import { MovieProps } from './interfaces/MovieProps'

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';


export function App() {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar
        setMovies={setMovies}
        setSelectedGenre={setSelectedGenre}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId} 
      />
      <Content
        selectedGenre={selectedGenre}
        movies={movies} 
      />

    </div>
  )
}