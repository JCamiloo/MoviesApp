import { Pelicula } from './../../app.interfaces';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes:Pelicula[] = [];
  slidesOpts = {
    slidesPerView: 1.1,
    freeMode: true
  };

  constructor(private movies:MoviesService) {}

  ngOnInit(){
    this.movies.getFeatures().subscribe(resp => {
      console.log(resp)
      this.peliculasRecientes = resp.results;
    })
  }

}