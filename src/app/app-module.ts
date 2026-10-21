import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hooks.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from '../components/bindings/forms.binding.component';
import { SumarNumerosComponent } from '../components/numeros/sumar.numeros.component';
@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
