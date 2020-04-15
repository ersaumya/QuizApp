import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { QuestionService } from "../Services/question.service";
import { Question } from "../Models/question.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  question: Question = {};
  quizId;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get("quizId");
    this.questionService.questionSelected.subscribe(
      (question) => (this.question = question)
    );
  }

  post(question:Question) {
    question.quizId = JSON.parse(this.quizId);
    this.questionService.postQuestion(question);
  }

  put(question) {
    this.questionService.editQuestion(question);
  }
}
