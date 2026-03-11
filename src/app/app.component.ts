import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  isHomePage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        const nav = e as NavigationEnd;
        this.isHomePage =
          nav.urlAfterRedirects === "/" || nav.urlAfterRedirects === "";
        this.isMenuOpen = false;
        // Remove is-preload after navigation
        document.body.classList.add("is-preload");
        setTimeout(() => document.body.classList.remove("is-preload"), 300);
      });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
