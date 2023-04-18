import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

let routes:Routes=[
  {path:"",component:RegisterComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"**",component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
