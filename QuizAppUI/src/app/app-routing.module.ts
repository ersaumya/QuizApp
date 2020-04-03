import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { QuestionListComponent } from './question-list/question-list.component';




const routes: Routes = [
  { path: "question", component: QuestionComponent },
  { path: "questionlist", component: QuestionListComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
