//// <reference path="../../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/async-test';
import {HomeComponent} from './home.component';
import {describe, it, expect, inject, async, setBaseTestProviders} from '@angular/core/testing';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
// import {TEST_BROWSER_PLATFORM_PROVIDERS, ADDITIONAL_TEST_BROWSER_PLATFORM_PROVIDERS} from '@angular/platform-browser/testing';
// import {BROWSER_APP_DYNAMIC_PROVIDERS} from '@angular/platform-browser-dynamic';

// setBaseTestProviders(
//   TEST_BROWSER_PLATFORM_PROVIDERS,
//   [
//     BROWSER_APP_DYNAMIC_PROVIDERS,
//     ADDITIONAL_TEST_BROWSER_PROVIDERS
//   ]
// );
describe('home component', () => {
  it('should render AngularCars', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    tcb.createAsync(HomeComponent)
      .then((fixture: ComponentFixture<any>) => {
        fixture.detectChanges();
        const home = fixture.nativeElement;
        console.log(home);
        console.log(home.querySelector('h1').textContent);
        expect(home.querySelector('h1').textContent).toBe('AngularCars');
      });
  })));
});
