import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../Services/question.service';
import { Question } from '../../Models/question.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
 
  questionList:Question[];

  constructor(private questionService: QuestionService) { }

  ngOnInit(){
    this.questionService.getQuestions().subscribe(data=>{
      this.questionList=data
    });
  }

}
