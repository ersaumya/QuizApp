import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { QuestionService } from '../Services/question.service';
import { Question } from '../Models/question.interface';

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  
  question:Question={};

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.questionSelected.subscribe(question=>this.question=question);
  }

  post(question) {
    this.questionService.postQuestion(question);
  }

  put(question){
    this.questionService.editQuestion(question);
  }
}
