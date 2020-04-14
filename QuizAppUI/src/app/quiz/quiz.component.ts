import { QuestionService } from './../Services/question.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Models/quiz.interface';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz:Quiz={};

  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
  }

  post(quiz) {
    this.questionService.postQuiz(quiz);
  }


}
