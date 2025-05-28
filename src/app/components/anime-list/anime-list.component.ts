import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AnimeService } from '../../services/anime.service';
import { Anime, Season } from '../../interfaces/anime.interface';
import { AnimeCardComponent } from '../anime-card/anime-card.component';

@Component({
  selector: 'app-anime-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    AnimeCardComponent
  ],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.scss'
})
export class AnimeListComponent implements OnInit {
  animeList: Anime[] = [];
  filteredAnimeList: Anime[] = [];
  currentSeason: Season;
  selectedSeason: string = '';
  selectedYear: number = new Date().getFullYear();
  
  seasons = [
    { value: '', label: 'All Seasons' },
    { value: 'winter', label: 'Winter' },
    { value: 'spring', label: 'Spring' },
    { value: 'summer', label: 'Summer' },
    { value: 'fall', label: 'Fall' }
  ];

  years = [2023, 2024, 2025, 2026];

  constructor(private animeService: AnimeService) {
    this.currentSeason = this.animeService.getCurrentSeason();
  }

  ngOnInit(): void {
    this.loadAnime();
  }

  loadAnime(): void {
    this.animeService.getSeasonalAnime(this.selectedSeason || undefined, this.selectedYear)
      .subscribe(anime => {
        this.animeList = anime;
        this.filteredAnimeList = anime;
      });
  }

  onFilterChange(): void {
    this.loadAnime();
  }

  filterBySeason(season: string): void {
    this.selectedSeason = season;
    this.onFilterChange();
  }

  getCurrentSeasonAnime(): void {
    this.selectedSeason = this.currentSeason.season;
    this.selectedYear = this.currentSeason.year;
    this.onFilterChange();
  }
}
