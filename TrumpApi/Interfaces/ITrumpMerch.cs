namespace TrumpApi.Interfaces;

public interface ITrumpMerch
{
    int? Id {get; set;}
    string? Name {get; set;}
    string? Type {get; set;}
    int Price {get; set;}
    int InStock {get; set;}
    string Image {get; set;} 
}  