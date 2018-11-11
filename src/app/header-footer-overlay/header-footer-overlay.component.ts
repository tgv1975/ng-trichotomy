import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-footer-overlay',
    templateUrl: './header-footer-overlay.component.html',
    styleUrls: ['./header-footer-overlay.component.css']
})
export class HeaderFooterOverlayComponent implements OnInit {

    overlay = true;
    headerOverlay = 'horizontal';
    footerOverlay = 'horizontal';

    overlaysVisible = true;

    constructor() { }

    ngOnInit() {
    }

    toggleOverlays() {
        this.overlay = !this.overlay;

        if (!this.overlay) {
            this.overlaysVisible = true;
        }

        this.headerOverlay ? this.headerOverlay = null : this.headerOverlay = 'horizontal';
        this.footerOverlay ? this.footerOverlay = null : this.footerOverlay = 'horizontal';
    }

    toggleOverlaysVisible() {
        this.overlaysVisible = !this.overlaysVisible;
    }
}
