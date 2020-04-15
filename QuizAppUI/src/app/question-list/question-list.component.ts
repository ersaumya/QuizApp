import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Question } from '../Models/question.interface';
import { QuestionService } from '../Services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-question-list",
  templateUrl: "./question-list.component.html",
  styleUrls: ["./question-list.component.css"],
})
export class QuestionListComponent implements OnInit {
  questionList: Question[];

  constructor(
    public questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    var quizId = this.route.snapshot.paramMap.get("quizId");
    this.questionService.getQuestions(quizId).subscribe((data) => {
      this.questionList = data;
    });
  }
}
