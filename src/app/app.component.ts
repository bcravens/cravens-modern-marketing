import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterCols: number = 4;
  tiles = [
    { title: 'Tile 1', cols: 1, rows: 2 },
    { title: 'Tile 2', cols: 1, rows: 2 },
    { title: 'Tile 3', cols: 1, rows: 2 },
    { title: 'Tile 4', cols: 1, rows: 2 },
    { title: 'Tile 5', cols: 1, rows: 2 },
    { title: 'Tile 6', cols: 1, rows: 2 },
    { title: 'Tile 7', cols: 1, rows: 2 }
  ];

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.setMoible();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.WebPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.setDefault();
      }
    });
  }

  setDefault() {
    // console.log("default");
    // this.tiles[1].cols = 1;
    // this.tiles[2].cols = 1;
    this.masterCols = 4;
  }

  setMoible() {
    // console.log("mobile");
    // this.tiles[1].cols = 2;
    // this.tiles[2].cols = 2;
    this.masterCols = 2;
  }

}
