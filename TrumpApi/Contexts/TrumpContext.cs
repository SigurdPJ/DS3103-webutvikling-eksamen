using Microsoft.EntityFrameworkCore;
using TrumpApi.Models;

namespace TrumpApi.Contexts;

public class TrumpContext : DbContext
{
    public TrumpContext(DbContextOptions<TrumpContext> options):base(options){}

    public required DbSet<TrumpMerch> Merch {get; set;}
    public required DbSet<TrumpStaff> Staff {get; set;}
    public required DbSet<TrumpThought> Thoughts {get; set;}

}