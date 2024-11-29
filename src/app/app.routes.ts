import { Routes } from '@angular/router';
import { ComponenteFormularioComponent } from './componente-formulario/componente-formulario.component';
import { ComponenteListaComponent } from './componente-lista/componente-lista.component';

export const routes: Routes = [
    {path: 'formulario', component: ComponenteFormularioComponent },
    {path: 'listadoTarea', component: ComponenteListaComponent},
];
