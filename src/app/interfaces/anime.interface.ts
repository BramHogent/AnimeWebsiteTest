export interface Anime {
  id: number;
  title: string;
  englishTitle?: string;
  synopsis: string;
  imageUrl: string;
  season: string;
  year: number;
  episodes: number;
  status: 'airing' | 'finished' | 'upcoming';
  rating: number;
  genres: string[];
  studio: string;
  averageScore?: number;
}

export interface Review {
  id: number;
  animeId: number;
  username: string;
  rating: number;
  comment: string;
  date: Date;
  helpful: number;
}

export interface Season {
  season: 'winter' | 'spring' | 'summer' | 'fall';
  year: number;
}
