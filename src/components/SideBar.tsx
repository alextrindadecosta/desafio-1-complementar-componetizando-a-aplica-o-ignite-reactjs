import { useEffect, useState } from 'react';
import { api } from '../services/api';

import { SideBarButton } from './SideBarButton';
import { GenreResponseProps } from '../interfaces/GenreResponseProps'
import { SideBarProps } from '../interfaces/SideBarProps';

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => <SideBarButton
          key={genre.name}
          genre={genre}
          setMovies={props.setMovies}
          setSelectedGenre={props.setSelectedGenre}
          setSelectedGenreId={props.setSelectedGenreId}
          selectedGenreId={props.selectedGenreId} />
        )}
      </div>

    </nav>
  )
}