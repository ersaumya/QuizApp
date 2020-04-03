import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Question } from '../Models/question.interface';
import { QuestionService } from '../Services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
 
  questionList:Question[];

  constructor(public questionService: QuestionService) { }

  ngOnInit(){
    this.questionService.getQuestions().subscribe(data=>{
      this.questionList=data
    });
  }

}
