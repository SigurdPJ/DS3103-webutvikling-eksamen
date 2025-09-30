using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrumpApi.Contexts;
using TrumpApi.Models;

namespace TrumpApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MerchController : ControllerBase
{
    
    private readonly TrumpContext _trumpContext;

    public MerchController(TrumpContext trumpContext)
    {
        _trumpContext = trumpContext;
    }

    [HttpGet]
    public async Task<ActionResult<List<TrumpMerch>>> Get()
    {
        try
        {
            List<TrumpMerch> merch = await _trumpContext.Merch.ToListAsync();

            if (merch.Count != 0)
            {
                return Ok(merch);
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
    public async Task<ActionResult<TrumpMerch?>> Get(int id)
    {
        try
        {
            TrumpMerch? searchedMerch = await _trumpContext.Merch.FindAsync(id);

            if(searchedMerch != null)
            {
                return Ok(searchedMerch);
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
    [Route("[action]/{name}")]
    public async Task<ActionResult<List<TrumpMerch>>> GetByName(string name)
    {
        try
        {
            List<TrumpMerch> merchResults = await _trumpContext
            .Merch
            .Where( 
                merch => merch.Name != null && merch.Name.ToLower().Contains(name.ToLower()) 
            )
            .ToListAsync();

            if(merchResults.Count != 0)
            {
                return Ok(merchResults);
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

    [HttpGet]
    [Route("[action]/{type}")]
    public async Task<ActionResult<List<TrumpMerch>>> GetByType(string type)
    {
        try
        {
            List<TrumpMerch> merchResults = await _trumpContext
            .Merch
            .Where( 
                merch => merch.Type != null && merch.Type.ToLower().Contains(type.ToLower()) 
            )
            .ToListAsync();
    
            if (merchResults.Count != 0)
            {
                return Ok(merchResults);
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
    public async Task<ActionResult<TrumpMerch>> Post(TrumpMerch newMerch)
    {   
        try
        {
            _trumpContext.Merch.Add(newMerch);
            await _trumpContext.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newMerch.Id }, newMerch);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError); 
        }
    }

    [HttpPut]
    public async Task<ActionResult> Put(TrumpMerch updatedMerch)
    {
        try
        {
            _trumpContext.Entry(updatedMerch).State = EntityState.Modified;
            await _trumpContext.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<TrumpMerch?>> Delete(int id)
    {
        try
        {
            TrumpMerch? merchToDelete = await _trumpContext.Merch.FindAsync(id);
            
            if( merchToDelete != null)
            {
                _trumpContext.Merch.Remove(merchToDelete);
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