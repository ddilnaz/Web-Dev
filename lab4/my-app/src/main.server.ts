// main.server.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ApplicationRef } from '@angular/core';

export const bootstrap = (): Promise<ApplicationRef> => {
  return platformBrowserDynamic().bootstrapModule(AppModule)
    .then(moduleRef => moduleRef.injector.get(ApplicationRef));
};

