export interface Info {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Source {
  id: string;
  name: string;
}

export interface NewsCard {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ShowSources {
    status: string;
    sources?: Info[];
}

export interface ShowNews {
    status: string;
    total?: number;
    articles?: NewsCard[];
}

export interface Options {
  sources?: string;
}

export interface ResponseObj {
  endpoint: string;
  options?: Options;
}
