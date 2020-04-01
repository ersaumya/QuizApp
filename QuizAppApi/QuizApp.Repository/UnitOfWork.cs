using QuizApp.Core.Data;
using QuizApp.Repository.Abstraction;
using QuizApp.Repository.Implementation;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QuizApp.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private QuizAppContext db;
        public UnitOfWork(QuizAppContext _db)
        {
            db = _db;
        }
        
        public IQuestionRepository _QuestionRepo;
        public IQuestionRepository QuestionRepo
        {
            get
            {
                if (_QuestionRepo == null)
                    _QuestionRepo = new QuestionRepository(db);

                return _QuestionRepo;
            }
        }

        

        public async Task<int> SaveChangesAsync()
        {
            return await db.SaveChangesAsync();
        }
    }
}
