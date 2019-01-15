import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserInComponent } from './components/user-in/user-in.component';
import { UserOutComponent } from './components/user-out/user-out.component';
import { UserSearchPipe } from './pipes/user-search.pipe';
import { TestPipe } from './pipes/test.pipe';
import { MainComponent } from './components/main/main.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
	declarations: [
		AppComponent,
		UserInComponent,
		UserOutComponent,
		TestPipe,
		UserSearchPipe,
		MainComponent,
		HeaderComponent
		
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		
	],
	providers: [UserSearchPipe],
	bootstrap: [AppComponent]
	
})
export class AppModule { }
