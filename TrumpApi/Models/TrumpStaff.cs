using TrumpApi.Interfaces;

namespace TrumpApi.Models;

public class TrumpStaff : ITrumpStaff 
{
    public int? Id {get; set;}
    public string? FirstName {get; set;}
    public string? LastName {get; set;}
    public required string Position {get; set;}
    public string? JobDescription {get; set;}
    public required string Email { get; set; }
    public string? Image { get; set;}
}