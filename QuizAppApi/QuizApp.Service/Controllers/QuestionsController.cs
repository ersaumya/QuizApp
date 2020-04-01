using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizApp.Core.Data;
using QuizApp.DomainModels.Entities;
using QuizApp.Repository;

namespace QuizApp.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IUnitOfWork _uow;
        private QuizAppContext _context;
        public QuestionsController(IUnitOfWork uow, QuizAppContext context)
        {
            this._uow = uow;
            this._context = context;
        }
        [HttpGet]
        public async Task<IEnumerable<Question>> Get()
        {
            return await _uow.QuestionRepo.GetAll();
        }

        // GET: api/Questions1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {
                return NotFound();
            }

            return question;
        }

        [HttpPost]
        public async Task<ActionResult<Question>> Post([FromBody]Question question)
        {
            _context.Questions.Add(question);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestion", new { id = question.Id }, question);

        }
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
        //{
        //    return await _context.Questions.ToListAsync();
        //}

        [HttpPut("{id}")]
        public async Task< IActionResult> Put(int id,[FromBody]Question question)
        {
            if (id != question.Id)
            {
                return BadRequest();
            }
            _context.Entry(question).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();

        }

        // DELETE: api/Questions1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Question>> DeleteQuestion(int id)
        {
            var question = await _context.Questions.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(question);
            await _context.SaveChangesAsync();

            return question;
        }
        private bool QuestionExists(int id)
        {
            return _context.Questions.Any(e => e.Id == id);
        }
    }
}