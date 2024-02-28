// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'on_shop';
// // }
// import { Component } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { RouterLink } from '@angular/router';

// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrl: './app.component.css'

//   })
// export class AppComponent {
//   title = 'on_shop';
//   categories = ["accessory", "watch", "phone", "computer"];
//   showCategories = false;

//   constructor(private router: Router) {
//     this.router.events.pipe(
//         filter((event): event is NavigationEnd => event instanceof NavigationEnd)
//     ).subscribe((event) => {
//       // Теперь TypeScript точно знает, что event имеет тип NavigationEnd, благодаря Type Guard
//       this.showCategories = event.url === '/' || event.url === '/home';
//     });
//   }
// // }import { Component } from '@angular/core';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'on_shop';
  categories = ["accessory", "watch", "phone", "computer"];
  showCategories = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.showCategories = event.url === '/' || event.url === '/home';
    });
  }
}
