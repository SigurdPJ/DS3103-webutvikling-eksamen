using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrumpApi.Contexts;
using TrumpApi.Models;

namespace TrumpApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StaffController : ControllerBase
{
    
    private readonly TrumpContext _trumpContext;

    public StaffController(TrumpContext trumpContext)
    {
        _trumpContext = trumpContext;
    }

    [HttpGet]
    public async Task<ActionResult<List<TrumpStaff>>> Get()
    {
        try
        {
            List<TrumpStaff> staff = await _trumpContext.Staff.ToListAsync();
            
            if (staff.Count != 0)
            {
                return Ok(staff);
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
    public async Task<ActionResult<TrumpStaff?>> Get(int id)
    {
        try
        {
            TrumpStaff? searchedStaffMember = await _trumpContext.Staff.FindAsync(id);

            if(searchedStaffMember != null)
            {
                return Ok(searchedStaffMember);
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
    public async Task<ActionResult<List<TrumpStaff>>> GetByName(string name)
    {
        try
        {
            List<TrumpStaff> staffResults = await _trumpContext.Staff
            .Where( 
                staffMember => 
                staffMember.FirstName != null 
                && 
                staffMember.FirstName.ToLower().Contains(name.ToLower())
                ||
                staffMember.LastName != null 
                && 
                staffMember.LastName.ToLower().Contains(name.ToLower()) 
            )
            .ToListAsync();

            if (staffResults.Count != 0)
            {
                return Ok(staffResults); 
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
    public async Task<ActionResult<TrumpStaff>> Post(TrumpStaff newStaffMember)
    {   
        try
        {
            _trumpContext.Staff.Add(newStaffMember);
            await _trumpContext.SaveChangesAsync();
            return CreatedAtAction("Get", new { id = newStaffMember.Id }, newStaffMember);
        }
        catch
        {
           return StatusCode(StatusCodes.Status500InternalServerError); 
        }
    }

    [HttpPut]
    public async Task<ActionResult<TrumpStaff>> Put(TrumpStaff updatedStaff)
    {
        try
        {
            _trumpContext.Entry(updatedStaff).State = EntityState.Modified;
            await _trumpContext.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<TrumpStaff?>> Delete(int id)
    {
        try
        {
            TrumpStaff? staffMemberToDelete = await _trumpContext.Staff.FindAsync(id);

            if(staffMemberToDelete != null)
            {
                _trumpContext.Staff.Remove(staffMemberToDelete);
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