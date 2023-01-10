import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'edb48880cbf044ff9b89046de1d08b4f', // get your key https://newsapi.org/
    });
  }
}

export default AppLoader;
