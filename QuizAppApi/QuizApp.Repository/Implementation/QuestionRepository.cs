using QuizApp.Core.Data;
using QuizApp.DomainModels.Entities;
using QuizApp.Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QuizApp.Repository.Implementation
{
    public class QuestionRepository:Repository<Question>,IQuestionRepository
    {
        private QuizAppContext context
        {
            get
            {
                return db as QuizAppContext;
            }
        }

        public QuestionRepository(QuizAppContext db)
        {
            this.db = db;
        }

       
    }
}
