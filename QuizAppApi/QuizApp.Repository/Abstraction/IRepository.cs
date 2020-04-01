using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace QuizApp.Repository.Abstraction
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<TEntity> Add(TEntity model);
        Task<IEnumerable<TEntity>> GetAll();
        Task<TEntity> GetById(object Id);
        Task<TEntity> Modify(TEntity model);
        Task<TEntity> Delete(TEntity model);
        Task<TEntity> DeleteById(object Id);
    }
}
