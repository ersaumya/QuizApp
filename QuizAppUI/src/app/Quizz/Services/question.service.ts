import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Question } from "../Models/question.interface";

@Injectable({
  providedIn: "root"
})
export class QuestionService {

  private selectedQuestion = new Subject<any>();
  questionSelected=this.selectedQuestion.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>("https://localhost:44398/api/questions");
  }

  postQuestion(question) {
    this.http
      .post("https://localhost:44398/api/questions", question)
      .subscribe(res => {
        console.log(res);
      });
  }

  editQuestion(question) {
    this.http
      .put(`https://localhost:44398/api/questions/${question.id}`, question)
      .subscribe(res => {
        console.log(res);
      });
  }

  selectQuestion(question){
    this.selectedQuestion.next(question);
  }
}
