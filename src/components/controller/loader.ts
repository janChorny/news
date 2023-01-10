import { ResponseObj, Options, ShowNews } from '../../types';

type API = {
  apiKey: string;
}

abstract class Loader {
  private baseLink: string;

  private options: API;

  constructor(baseLink: string, options: API) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    respObj: ResponseObj,
    callback: Function = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', respObj.endpoint, callback, respObj.options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Options, endpoint: string): string {
    const urlOptions: { [key: string]: string } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string): void => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Function, options: Options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: ShowNews) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
