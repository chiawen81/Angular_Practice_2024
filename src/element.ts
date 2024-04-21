import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { environment } from './environments/environment';
import { TestAngularElementComponent } from './app/components/test-angular-element/test-angular-element.component';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(TestAngularElementComponent).then(ref => {
  const injector = ref.injector;
  const customElement = createCustomElement(TestAngularElementComponent, { injector });
  customElements.define('my-custom-element', customElement);
});
