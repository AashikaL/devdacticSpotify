import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage{
  data = albums;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const title:any = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = albums;    
  }

    // Helper function for image names
    dasherize(string:any) {
      return string.replace(/[A-Z]/g, function(char:any, index:any) {
        return (index !== 0 ? '-' : '') + char.toLowerCase();
      });
    };
}
