using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class InventoryDbContext : DbContext
{
    public InventoryDbContext(DbContextOptions options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ApplyConfiguration(new ProductTypeConfiguration());
    }
}