import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css'],
})
export class MenuComponent {
    web: boolean = true;
    mobile: boolean = false;
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
            Breakpoints.Web
        ]).subscribe(result => {
            if (result.matches) {
                this.setDefault();
            }
        });
        breakpointObserver.observe([
            Breakpoints.Tablet
        ]).subscribe(result => {
            if (result.matches) {
                this.setDefault();
            }
        });

    }

    setDefault() {
        this.web = true;
        this.mobile = false;
        console.log("default");
    }

    setMoible() {
        this.mobile = true;
        this.web = false;
        console.log("mobile");
    }

    setTablet() {
        console.log("tablet");
    }


}