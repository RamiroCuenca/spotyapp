import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Do not fotget to import it a app.module.ts

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
  // This allow as to use or call the service with out having the need of declarate it at app.module.ts
})
export class SpotifyService {

  // token: string = '';

  constructor(
    private http: HttpClient,
  ) { 
    console.log("Spotify's service is working!");
  }

  // getValidToken()
  // {
  //   const headers = new HttpHeaders({
  //     'grant_type' : 'client_credentials',
  //     'client_id' : 'e476742f9fb542d3bd6352326974c17a',
  //     'client_secret' : 'e649e08c684b4db7b24bfcd44d4fb653'
  //   });

  //   token = this.http.get('https://accounts.spotify.com/api/token?=client_credentials', { headers }).access_token;    
  // }

  getQuery( query: string )
  {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBi-PYTxuxQ0IC3JANneIzp1u055XqqqDmNrZUBu4ccgHtDBtQsH5iuCb_BIuEe3fqZpNUJWxw-kVZNAHQ'
    });

    const url = `https://api.spotify.com/v1/${ query }`;

    return this.http.get( url , { headers });
  }

  getNewReleases()
  {
    return this.getQuery( 'browse/new-releases' )              
              .pipe( map( data => data['albums'].items ));
  }

  getArtists( record: string)
  {
    return this.getQuery( `search?q=${ record }&type=artist&market=ES&limit=15` )
              .pipe( map( data => data['artists'].items ) );
  }
}
