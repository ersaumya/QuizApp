using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Data;
using QuizApp.Repository.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuizApp.Repository.Implementation
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected QuizAppContext db { get; set; }

        public async Task<TEntity> Add(TEntity model)
        {
            db.Set<TEntity>().Add(model);
            await db.SaveChangesAsync();
            return model;
        }

        public async Task<TEntity> Delete(TEntity model)
        {
            db.Set<TEntity>().Remove(model);
            await db.SaveChangesAsync();

            return model;
        }

        public async Task<TEntity> DeleteById(object Id)
        {
            TEntity entity = await db.Set<TEntity>().FindAsync(Id);
            if (entity == null)
            {
                return entity;
            }

            db.Set<TEntity>().Remove(entity);
            await db.SaveChangesAsync();

            return entity;
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await db.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity> GetById(object Id)
        {
            return await db.Set<TEntity>().FindAsync(Id);
        }

        public async Task<TEntity> Modify(TEntity model)
        {
            db.Entry<TEntity>(model).State = EntityState.Modified;
            await db.SaveChangesAsync();
            return model;
        }
    }
}
