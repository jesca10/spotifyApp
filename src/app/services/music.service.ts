import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  urlServer: string = 'https://music.fly.dev';

  constructor() { }

  async getTracks() {
    const response = await fetch(`${this.urlServer}/tracks`);
    return await response.json();
  }

  async getAlbums() {
    return fetch(`${this.urlServer}/albums`).then(
      response => response.json()
    );
  }
}
