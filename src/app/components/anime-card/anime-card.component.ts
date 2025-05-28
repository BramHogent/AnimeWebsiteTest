import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { Anime } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-anime-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.scss'
})
export class AnimeCardComponent {
  @Input() anime!: Anime;

  getStatusColor(status: string): string {
    switch (status) {
      case 'airing': return 'primary';
      case 'finished': return 'accent';
      case 'upcoming': return 'warn';
      default: return '';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'airing': return 'play_circle';
      case 'finished': return 'check_circle';
      case 'upcoming': return 'schedule';
      default: return 'help';
    }
  }
}
