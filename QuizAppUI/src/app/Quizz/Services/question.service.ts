import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Question } from "../Models/question.interface";

@Injectable({
  providedIn: "root"
})
export class QuestionService {
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
}
