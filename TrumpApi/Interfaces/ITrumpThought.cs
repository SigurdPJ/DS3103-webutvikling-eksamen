namespace TrumpApi.Interfaces;

public interface ITrumpThought
{
    int? Id {get; set;}
    string Phrase {get; set;}
    string? Category {get; set;}
}  