import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzModule } from './Quizz/quizz.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './Quizz/Services/question.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    QuizzModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
