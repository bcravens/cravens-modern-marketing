import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  web: boolean = false;
  moible: boolean = true;
  masterCols: number = 4;
  talkingPoints = [
    { title: 'Development', cols: 1, rows: 2, logo: "language", summary: "Plan, strategize, and implement a complete marketing campaign that best suits you and your company. " },
    { title: 'Digital Marketing', cols: 1, rows: 2, logo: "scatter_plot", summary: "Develop a logical and balanced approach to digital, using the proper tools, to measure and maximize return on your marketing investment. " },
    { title: 'Transformation', cols: 1, logo: "linear_scale", rows: 2, summary: "Re-shape your team and re-design the way you work for digital-era growth, functionality, and success.  " },
    { title: 'Services', cols: 1, rows: 2, logo: "whatshot", summary: "Branding, messaging and content. Web, search and social business. Lead generation, pipeline & reporting​. Email marketing, nurturing, automation" }
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
    this.web = true;
    this.moible = false;
  }

  setMoible() {
    this.moible = true;
    this.web = false;
  }

}
