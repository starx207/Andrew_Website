var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../services/scroll.service';
var AppComponent = (function () {
    function AppComponent(router, scroller) {
        var _this = this;
        this.router = router;
        this.scroller = scroller;
        this.changeClass = "change";
        this.showClass = "show";
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                _this.scroller.scrollToTop();
            }
        });
    }
    AppComponent.prototype.toggleMenu = function () {
        document.getElementById("nav-toggle").classList.toggle(this.changeClass);
        document.getElementById("nav-main").classList.toggle(this.showClass);
    };
    AppComponent.prototype.hideMenu = function () {
        document.getElementById("nav-toggle").classList.remove(this.changeClass);
        document.getElementById("nav-main").classList.remove(this.showClass);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: './../templates/app.component.html',
        styleUrls: ['./../styles/app.component.css'],
    }),
    __metadata("design:paramtypes", [Router,
        ScrollService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map