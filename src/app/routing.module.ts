import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/lite/admincomponent/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './admin/lite/homecomponent/homepage.component';
import { CathalogComponent } from './admin/lite/cathalogcomponent/cathalog.component';
import { AddComponent } from './admin/lite/addcomponent/add.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ChartComponent } from './chart/chart.component';
import { DetailsComponent } from './details/details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestComponent } from './test/test.component';
const componentRoutes: Routes = [
	{ path: '', pathMatch: 'full', component: MainComponent},
	{ 
		path: 'bezoiladmin', 
		component: LoginComponent,
	},
	{
		path: 'dashboard',
		component: AdminComponent,
		children: [
			{ 
				path: '', 
				component: HomepageComponent
			},
			{ 
				path: 'cathalog', 
				component: CathalogComponent
			},
			{ 
				path: 'addGood', 
				component: AddComponent
			},
		]
	},
	{
		path:'catalog', component: CatalogComponent
	},
	{
		path:'aboutus', component: AboutusComponent
	},
	{
		path:'privacy', component: PrivacyComponent
	},
	{
		path:'delivary', component: DeliveryComponent
	},
	{
		path:'userchart', component: ChartComponent
	},
	{
		path:'contact', component: ContactsComponent
	},
	{
		path:'details/:id', component: DetailsComponent
	},
	{
		path:'test', component: TestComponent
	}	
]


@NgModule({
	imports: [RouterModule.forRoot(componentRoutes)],
	exports: [RouterModule]
}) 

export class AppRoutingModule{}