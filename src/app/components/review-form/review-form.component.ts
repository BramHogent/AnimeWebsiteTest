import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

import { AnimeService } from '../../services/anime.service';
import { Anime, Review } from '../../interfaces/anime.interface';

@Component({
  selector: 'app-review-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule
  ],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {
  @Input() anime!: Anime;
  @Output() reviewSubmitted = new EventEmitter<Review>();

  reviewForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private animeService: AnimeService
  ) {
    this.reviewForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      rating: [5, [Validators.required, Validators.min(1), Validators.max(10)]],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.reviewForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      
      const reviewData = {
        animeId: this.anime.id,
        username: this.reviewForm.value.username,
        rating: this.reviewForm.value.rating,
        comment: this.reviewForm.value.comment
      };

      this.animeService.addReview(reviewData).subscribe({
        next: (review) => {
          this.reviewSubmitted.emit(review);
          this.reviewForm.reset();
          this.reviewForm.patchValue({ rating: 5 });
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Error submitting review:', error);
          this.isSubmitting = false;
        }
      });
    }
  }
  getRatingColor(rating: number): 'primary' | 'accent' | 'warn' {
    if (rating >= 8) return 'primary';
    if (rating >= 6) return 'accent';
    return 'warn';
  }

  formatLabel(value: number): string {
    return `${value}`;
  }
}
