import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: "tabs",
    component: HomePage,
    children: [
      {
        path: "guestlist",
        loadChildren: () =>
          import("./guestlist/guestlist.module").then(
            (m) => m.GuestlistPageModule
          ),
      },
      {
        path: "table",
        loadChildren: () =>
          import("./table/table.module").then((m) => m.TablePageModule),
      },
      {
        path: "order",
        loadChildren: () =>
          import("./order/order.module").then((m) => m.OrderPageModule),
      },
      {
        path: "chat",
        loadChildren: () =>
          import("./chat/chat.module").then((m) => m.ChatPageModule),
      },
      {
        path: "account",
        loadChildren: () =>
          import("./account/account.module").then((m) => m.AccountPageModule),
      },
    ],
  },
  { path: "", redirectTo: "/home/tabs/guestlist" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
