import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  
  albums !: Album[];
  newAlbum:Album= {} as Album;
  loaded:boolean;

  constructor(private albumService : AlbumsService){
    this.loaded = true;
  }

  ngOnInit(){
    this.loadAlbums();
    this.albumService.getAlbums().subscribe(albums => this.albums = albums)
  }
  loadAlbums() {
    this.albumService.getAlbums().subscribe(albums => this.albums = albums);
  }
  removeAlbum(id : number){
    this.albums = this.albums.filter(album => album.id !== id);
  }
  addAlbum() {
    this.albumService.addAlbum(this.newAlbum).subscribe((Album) => {
        this.albums.push(Album);
    });
}

  
}