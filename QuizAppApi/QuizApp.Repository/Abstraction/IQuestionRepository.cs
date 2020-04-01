using QuizApp.DomainModels.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QuizApp.Repository.Abstraction
{
    public interface IQuestionRepository : IRepository<Question>
    {
       // Task GetById();
    }
}
