import { ShowNews } from '../../types';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller;

  public view;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    document
      .querySelector('.sources')
      ?.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: ShowNews) => this.view.drawNews(data)));
    this.controller.getSources((data: ShowNews) => this.view.drawSources(data));
  }
}

export default App;
