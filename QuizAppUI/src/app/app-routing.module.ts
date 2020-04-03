import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuestionComponent } from "./question/question.component";
import { HomeComponent } from "./home/home.component";
import { QuestionListComponent } from "./question-list/question-list.component";
import { QuizComponent } from "./quiz/quiz.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "question", component: QuestionComponent },
  { path: "questionlist", component: QuestionListComponent },
  { path: "quiz", component: QuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
