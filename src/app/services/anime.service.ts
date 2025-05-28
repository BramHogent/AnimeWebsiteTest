import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Anime, Review, Season } from '../interfaces/anime.interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  // Mock data for demonstration
  private mockAnime: Anime[] = [
    {
      id: 1,
      title: 'Attack on Titan: Final Season',
      englishTitle: 'Attack on Titan',
      synopsis: 'The final season of the epic tale of humanity\'s fight against the Titans.',
      imageUrl: 'https://cdn.myanimelist.net/images/anime/1988/117611.jpg',
      season: 'winter',
      year: 2025,
      episodes: 12,
      status: 'airing',
      rating: 9.0,
      genres: ['Action', 'Drama', 'Fantasy'],
      studio: 'Studio MAPPA',
      averageScore: 9.2
    },
    {
      id: 2,
      title: 'Demon Slayer: Infinity Castle Arc',
      englishTitle: 'Demon Slayer',
      synopsis: 'Tanjiro and the Hashira face their greatest challenge in the Infinity Castle.',
      imageUrl: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
      season: 'spring',
      year: 2025,
      episodes: 24,
      status: 'upcoming',
      rating: 8.8,
      genres: ['Action', 'Supernatural', 'Historical'],
      studio: 'Ufotable',
      averageScore: 8.9
    },
    {
      id: 3,
      title: 'Jujutsu Kaisen: Culling Game',
      englishTitle: 'Jujutsu Kaisen',
      synopsis: 'The dangerous Culling Game begins with deadly consequences for all sorcerers.',
      imageUrl: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg',
      season: 'summer',
      year: 2025,
      episodes: 20,
      status: 'upcoming',
      rating: 8.7,
      genres: ['Action', 'School', 'Supernatural'],
      studio: 'Studio MAPPA',
      averageScore: 8.8
    }
  ];

  private mockReviews: Review[] = [
    {
      id: 1,
      animeId: 1,
      username: 'AnimeOtaku2025',
      rating: 10,
      comment: 'Absolutely incredible finale! The animation and story are perfect.',
      date: new Date('2025-05-15'),
      helpful: 24
    },
    {
      id: 2,
      animeId: 1,
      username: 'TitanFan',
      rating: 9,
      comment: 'Great ending to an amazing series. Highly recommended!',
      date: new Date('2025-05-20'),
      helpful: 18
    }
  ];

  constructor() { }

  getSeasonalAnime(season?: string, year?: number): Observable<Anime[]> {
    let filteredAnime = this.mockAnime;
    
    if (season) {
      filteredAnime = filteredAnime.filter(anime => anime.season === season);
    }
    
    if (year) {
      filteredAnime = filteredAnime.filter(anime => anime.year === year);
    }
    
    return of(filteredAnime);
  }

  getAnimeById(id: number): Observable<Anime | undefined> {
    const anime = this.mockAnime.find(a => a.id === id);
    return of(anime);
  }

  getReviewsForAnime(animeId: number): Observable<Review[]> {
    const reviews = this.mockReviews.filter(review => review.animeId === animeId);
    return of(reviews);
  }

  addReview(review: Omit<Review, 'id' | 'date' | 'helpful'>): Observable<Review> {
    const newReview: Review = {
      ...review,
      id: this.mockReviews.length + 1,
      date: new Date(),
      helpful: 0
    };
    
    this.mockReviews.push(newReview);
    return of(newReview);
  }

  getCurrentSeason(): Season {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1; // getMonth() returns 0-11
    const year = currentDate.getFullYear();
    
    let season: 'winter' | 'spring' | 'summer' | 'fall';
    
    if (month >= 12 || month <= 2) {
      season = 'winter';
    } else if (month >= 3 && month <= 5) {
      season = 'spring';
    } else if (month >= 6 && month <= 8) {
      season = 'summer';
    } else {
      season = 'fall';
    }
    
    return { season, year };
  }
}
