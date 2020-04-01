using QuizApp.Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QuizApp.Repository
{
    public interface IUnitOfWork
    {
        IQuestionRepository QuestionRepo { get; }

        Task<int> SaveChangesAsync();
    }
}
