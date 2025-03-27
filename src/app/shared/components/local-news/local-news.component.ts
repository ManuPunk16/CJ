import { Component, OnInit } from '@angular/core';
import { LocalNewsService } from '../../../modules/services/local-news.service';
import { NgFor, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-news',
  imports: [
    NgFor,
    DatePipe,
    RouterLink
  ],
  standalone: true,
  templateUrl: './local-news.component.html',
  styleUrls: ['./local-news.component.css']
})
export class LocalNewsComponent implements OnInit {

  localNews: any[] = [];

  constructor(private localNewsService: LocalNewsService) { }

  ngOnInit(): void {
    this.localNewsService.getLocalNews().subscribe(news => {
      this.localNews = news.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    });
  }
}
