import { DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NationalNewsService } from '../../../modules/services/national-news.service';

@Component({
  selector: 'app-national-news',
  imports: [
    RouterLink,
    NgFor,
    DatePipe
  ],
  standalone: true,
  templateUrl: './national-news.component.html',
  styleUrl: './national-news.component.css'
})
export class NationalNewsComponent implements OnInit {

  nationalNews: any[] = [];

  constructor(private nationalNewsService: NationalNewsService) { }

  ngOnInit(): void {
    this.nationalNewsService.getNationalNews().subscribe(news => {
      this.nationalNews = news.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });
  }
}
