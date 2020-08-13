import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "select-city",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./auth/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./auth/forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "select-city",
    loadChildren: () =>
      import("./selection/select-city/select-city.module").then(
        (m) => m.SelectCityPageModule
      ),
  },
  {
    path: "select-club",
    loadChildren: () =>
      import("./selection/select-club/select-club.module").then(
        (m) => m.SelectClubPageModule
      ),
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
