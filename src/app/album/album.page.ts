import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums/index';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage {
  data: any = albums; constructor(private activatedRoute: ActivatedRoute) { } 
  ngOnInit() { console.log(this.data) ;   
    const title = this.activatedRoute.snapshot.paramMap.get('title'); 
    if (title) { const decodedTitle = decodeURIComponent(title); 
      this.data = this.data[title]; } 
    }

  dasherize(string: any) {
    return string.replace(/[A-Z]/g, function (char: any, index: any) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}
