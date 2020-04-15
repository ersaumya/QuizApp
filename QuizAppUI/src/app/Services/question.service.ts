import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Question } from "../Models/question.interface";
import { Quiz } from '../Models/quiz.interface';

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions(quizId): Observable<Question[]> {
    return this.http.get<Question[]>(`https://localhost:44398/api/questions/${quizId}`);
  }

  postQuestion(question) {
    this.http
      .post("https://localhost:44398/api/questions", question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  editQuestion(question) {
    this.http
      .put(`https://localhost:44398/api/questions/${question.id}`, question)
      .subscribe((res) => {
        console.log(res);
      });
  }

  postQuiz(quiz) {
    this.http
      .post("https://localhost:44398/api/quizes", quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }

  editQuiz(quiz) {
    this.http
      .put(`https://localhost:44398/api/quizes/${quiz.id}`, quiz)
      .subscribe((res) => {
        console.log(res);
      });
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

  getQuizes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>("https://localhost:44398/api/quizes");
  }
}
