import { Button } from '../components/Button';
import { useEffect } from 'react';

import { SideBarButtonProps } from '../interfaces/SideBarButtonProps'
import { MovieProps } from '../interfaces/MovieProps'
import { GenreResponseProps } from '../interfaces/GenreResponseProps'

import { api } from '../services/api';

export function SideBarButton(props: SideBarButtonProps) {

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${props.selectedGenreId}`).then(response => {
          props.setMovies(response.data);
        });
    
        api.get<GenreResponseProps>(`genres/${props.selectedGenreId}`).then(response => {
          props.setSelectedGenre(response.data);
        })
      }, [props.selectedGenreId]);


    function handleClickButton(id: number) {
        props.setSelectedGenreId(id);
    }

    return (
        <Button
            key={String(props.genre.id)}
            title={props.genre.title}
            iconName={props.genre.name}
            onClick={() => handleClickButton(props.genre.id)}
            selected={props.selectedGenreId === props.genre.id}
        />
    );
}