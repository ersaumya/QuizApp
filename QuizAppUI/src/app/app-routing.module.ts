import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionComponent } from "./question/question.component";
import { HomeComponent } from "./home/home.component";
import { QuizComponent } from "./quiz/quiz.component";
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "question/:quizId", component: QuestionComponent },
  { path: "register", component: RegisterComponent },
  { path: "quiz", component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
