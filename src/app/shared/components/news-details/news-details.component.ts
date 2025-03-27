import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalNewsService } from '../../../modules/services/local-news.service';
import { NationalNewsService } from '../../../modules/services/national-news.service';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [
    DatePipe,
    NgIf
  ],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.css'
})
export class NewsDetailComponent implements OnInit {

  newsItem: any;

  constructor(
    private route: ActivatedRoute,
    private localNewsService: LocalNewsService,
    private nationalNewsService: NationalNewsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const url = this.route.snapshot.url.join('/');

    if (url.includes('noticias-locales')) {
      this.localNewsService.getLocalNews().subscribe(news => {
        this.newsItem = news.find(item => item.id === id);
      });
    } else if (url.includes('noticias-nacionales')) {
      this.nationalNewsService.getNationalNews().subscribe(news => {
        this.newsItem = news.find(item => item.id === id);
      });
    }
  }
}
