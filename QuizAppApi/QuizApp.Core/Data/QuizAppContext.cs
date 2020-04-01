using Microsoft.EntityFrameworkCore;
using QuizApp.DomainModels.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuizApp.Core.Data
{
    public class QuizAppContext:DbContext
    {
        public QuizAppContext(DbContextOptions<QuizAppContext> options):base(options)
        {

        }
        public DbSet<Question> Questions { get; set; }
    }
}
