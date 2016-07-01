/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import './styles/index.less';

import {enableProdMode, provide} from '@angular/core';
import {LocationStrategy, PathLocationStrategy, PlatformLocation} from '@angular/common';
import {BrowserPlatformLocation} from '@angular/platform-browser';
import { APP_ROUTER_PROVIDERS } from './routes';
import { AppComponent } from './app/app.component';
import { HTTP_PROVIDERS } from '@angular/http';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  ...APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(LocationStrategy, {useClass: PathLocationStrategy}),
  provide(PlatformLocation, {useClass: BrowserPlatformLocation}),
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));
