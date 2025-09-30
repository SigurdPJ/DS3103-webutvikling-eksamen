namespace TrumpApi.Interfaces;

public interface ITrumpStaff
{
    int? Id {get; set;}
    string? FirstName {get; set;}
    string? LastName {get; set;}
    string Position {get; set;}
    string? JobDescription {get; set;}
    string Email {get; set;}
    string? Image {get; set;}
} 