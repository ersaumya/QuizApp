import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../Services/question.service';
import { Question } from '../../Models/question.interface';
import { Observable } from 'rxjs';

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  
  question: Question={};

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {}

  post(question) {
    this.questionService.postQuestion(question);
  }
}
