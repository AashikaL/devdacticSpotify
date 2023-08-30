import { Component, ElementRef, ViewChild } from '@angular/core';


import recentlyPlayed from '../../assets/mockdata/recenlyPlayed.json'
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ];  

  constructor(private router: Router) {
    
  }

  openAlbum(album:any) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(string:any) {
    return string.replace(/[A-Z]/g, function(char:any, index:any) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

}
