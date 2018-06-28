import { Injectable } from '@angular/core';
import {NewsFeedDetail} from '../classes/news-feed-detail';
import {newsFeed} from '../test/testData';
import {Observable} from 'rxjs/index';

@Injectable()
export class NewsService {

  constructor() { }

  getNewsFeed(): Observable<NewsFeedDetail> {
    const details: NewsFeedDetail[] = [];
    newsFeed.map(item => {
      const tempDetail = new NewsFeedDetail().deserialize(item);
      details.push(tempDetail);
    });
    return Observable.create(details);
  }

}
