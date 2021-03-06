import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Services
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];

  // interface Song {
    
  // }

  constructor(
    private spotify: SpotifyService,
  ) {
    this.spotify.getNewReleases()
    .subscribe( (data): any => {
      // console.log(data);
      
      this.newSongs = data;
      console.log(this.newSongs);
    });
  }

}
