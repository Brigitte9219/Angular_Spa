import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const app_routes: Routes= [
  {path: 'routePath', component: Component},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes);
