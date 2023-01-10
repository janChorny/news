import { NewsCard, ShowNews, ShowSources } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
  private news: News;

  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: ShowNews) {
    const values:NewsCard[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: ShowSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
