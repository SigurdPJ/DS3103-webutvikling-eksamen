using TrumpApi.Interfaces;

namespace TrumpApi.Models;

public class TrumpMerch : ITrumpMerch 
{
    public int? Id {get; set;}
    public string? Name {get; set;}
    public string? Type {get; set;}
    public int Price {get; set;}
    public int InStock {get; set;}
    public required string Image {get; set;}
}