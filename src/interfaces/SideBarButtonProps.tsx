export interface SideBarButtonProps {
    genre: {
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
    };
    setMovies: Function;
    setSelectedGenre: Function;
    selectedGenreId: number;
    setSelectedGenreId: Function;
}