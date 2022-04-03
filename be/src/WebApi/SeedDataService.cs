using Core;
using Infrastructure;

namespace MinimalWebApi;

public class SeedDataService : BackgroundService
{
    private readonly IServiceProvider _services;

    public SeedDataService(IServiceProvider services)
    {
        _services = services;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        using var scope = _services.CreateScope();
        await using var dbContext = scope.ServiceProvider.GetRequiredService<InventoryDbContext>();

        dbContext.Set<Product>().Add(new Product() { Id = Guid.NewGuid().ToString() });
        dbContext.Set<Product>().Add(new Product() { Id = Guid.NewGuid().ToString() });
        dbContext.Set<Product>().Add(new Product() { Id = Guid.NewGuid().ToString() });

        await dbContext.SaveChangesAsync(stoppingToken);
    }
}