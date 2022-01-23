import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '4ceefab8c634479c8eac6a202bccdd51';
const locale = localStorage.getItem('locale') ?? 'tr';

class Api {
  private static _instance: Api = new Api();

  public static getInstance(): Api
  {
    return Api._instance;
  }

  async get (path: string) {
    if (!path) { return; }

    let url = '';
    const language = locale == 'tr' ? 'tr-TR' : 'en-EN';

    if (!path.includes('?')) {
      url = `${baseUrl}/${path}?api_key=${apiKey}&language=${language}`;
    } else {
      url = `${baseUrl}/${path}&api_key=${apiKey}&language=${language}`;
    }

    return axios.get(url)
    .then(res => {
      return res ? res.data : null;
    })
  }

  constructor () {}
}

const instance =  Api.getInstance()

export default instance