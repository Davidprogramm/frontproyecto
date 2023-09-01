import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component'; 
import { VendedorComponent } from "./vendedor/vendedor.component";

const appRoutes: Routes=[

    {path:'home',component:HomeComponent},
    {path:'cliente',component:ClientComponent},
    {path:'**',component:HomeComponent},
    {path:'vendedor',component:VendedorComponent}

    
]

export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
