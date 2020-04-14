import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Models/quiz.interface';
import { QuestionService } from '../Services/question.service';

@Component({
  selector: "app-quiz-list",
  templateUrl: "./quiz-list.component.html",
  styleUrls: ["./quiz-list.component.css"],
})
export class QuizListComponent implements OnInit {
  quizList: Quiz[];

  constructor(public questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getQuizes().subscribe((data) => {
      this.quizList = data;
    });
  }
}
