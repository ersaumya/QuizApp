import { MaterialModule } from "./../material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuestionComponent } from "./Components/question/question.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FormsModule } from "@angular/forms";
import { QuestionListComponent } from "./Components/question-list/question-list.component";

@NgModule({
  declarations: [QuestionComponent, HeaderComponent, QuestionListComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [QuestionComponent, HeaderComponent, QuestionListComponent]
})
export class QuizzModule {}
