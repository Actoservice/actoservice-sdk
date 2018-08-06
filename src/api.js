import { API, isProd } from './constants';

class ActoserviceApi {
  constructor() {
    this.apiKey = null;
  }
  key(apikey) {
    this.apiKey = apikey;
    return this;
  }

  uploadThemeResource(name, resource) {
    console.log(isProd);
    if (!isProd) {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        
        setTimeout(() => reader.readAsDataURL(resource), 1000);
      });
    }
    const body = new FormData();
    body.append(name, resource);
    return fetch(`${API}/themes/resource`, {
      method: 'POST',
      headers: {
        'X-API-Key': this.apiKey,
      },
      body
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then((result) => result[0].url)
  }
}

export default new ActoserviceApi();