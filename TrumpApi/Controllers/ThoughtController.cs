using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrumpApi.Contexts;
using TrumpApi.Models;

namespace TrumpApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ThoughtController : ControllerBase
{
    
    private readonly TrumpContext _trumpContext;

    public ThoughtController(TrumpContext trumpContext)
    {
        _trumpContext = trumpContext;
    }

    [HttpGet]
    public async Task<ActionResult<List<TrumpThought>>> Get()
    {
        try
        {
            List<TrumpThought> thoughts = await _trumpContext.Thoughts.ToListAsync();

            if (thoughts.Count != 0)
            {
                return Ok(thoughts);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TrumpThought?>> Get(int id)
    {
        try
        {
            TrumpThought? searchedThought = await _trumpContext.Thoughts.FindAsync(id);

            if(searchedThought != null)
            {
                return Ok(searchedThought);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet]
    [Route("[action]/{category}")]
    public async Task<ActionResult<List<TrumpThought>>> GetByCategory(string category)
    {
        try
        {
            List<TrumpThought> thoughtsResults = await _trumpContext
            .Thoughts
            .Where( 
                thought => thought.Category != null && thought.Category.ToLower().Contains(category.ToLower()) 
            )
            .ToListAsync();
    
            if (thoughtsResults.Count != 0)
            {
                return Ok(thoughtsResults);
            }
            else
            {
                return NoContent();
            }
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost]
    public async Task<ActionResult<TrumpThought>> Post(TrumpThought newThought)
    {   
        try
        {
            _trumpContext.Thoughts.Add(newThought);
            await _trumpContext.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newThought.Id }, newThought);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError); 
        }
    }

    [HttpPut]
    public async Task<ActionResult<TrumpThought>> Put(TrumpThought updatedThought)
    {
        try
        {
            _trumpContext.Entry(updatedThought).State = EntityState.Modified;
            await _trumpContext.SaveChangesAsync();
            return NoContent();    
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
    
    [HttpDelete("{id}")]
    public async Task<ActionResult<TrumpThought?>> Delete(int id)
    {
        TrumpThought? thoughtToDelete = await _trumpContext.Thoughts.FindAsync(id);
        
        try
        {
            if( thoughtToDelete != null)
            {
                _trumpContext.Thoughts.Remove(thoughtToDelete);
                await _trumpContext.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

}