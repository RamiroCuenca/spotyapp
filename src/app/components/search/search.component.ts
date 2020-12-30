import { Component, OnInit } from '@angular/core';

// Services
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(
    private spotify: SpotifyService,
  ) { }

  ngOnInit(): void {
  }

  search(record: string)
  {
    console.log(record);
    this.artists = [];
    this.spotify.getArtists( record )
      // .subscribe( data => {console.log(data)});
      .subscribe( data =>
        {
          this.artists = data.artists.items ;
        });

  }
}
