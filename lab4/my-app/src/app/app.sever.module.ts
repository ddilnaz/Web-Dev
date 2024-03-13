// app.server.module.ts

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module'; // Adjust the path based on your project structure
import { AppComponent } from './app.component'; // Adjust the path based on your project structure

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
