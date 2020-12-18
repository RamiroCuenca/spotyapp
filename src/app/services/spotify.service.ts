import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Do not fotget to import it a app.module.ts

@Injectable({
  providedIn: 'root'
  // This allow as to use or call the service with out having the need of declarate it at app.module.ts
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { 
    console.log("Spotify's service is working!");
  }

  getNewReleases()
  {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAd4v9SX_uRJmXfJRcrz_6ErrNYQjTg4L5mY4GJfyRAbaXChpbLrbRtVHvDY7ojACRLkUaKWL5zBhUIWfQ'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe( response => {
      console.log(response);
    } );
  }
}
