import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './Services/question.service';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
