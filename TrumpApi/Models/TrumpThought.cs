using TrumpApi.Interfaces;

namespace TrumpApi.Models;

public class TrumpThought : ITrumpThought 
{
    public int? Id {get; set;}
    public required string Phrase {get; set;}
    public string? Category {get; set;}
}