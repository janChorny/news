import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: Function): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  getNews(e: Event, callback: Function): void | undefined {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    if (target && newsContainer) {
      while (target !== newsContainer) {
        if (target?.classList.contains('source__item')) {
          const sourceId = target.getAttribute('data-source-id');
          if (newsContainer.getAttribute('data-source') !== sourceId && sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback,
            );
          }
          return;
        }
        target = target.parentNode as HTMLElement;
      }
    }
  }
}

export default AppController;
