using Core;
using Infrastructure;

namespace WebApi;

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

        dbContext.Set<Product>().Add(Product.New());
        dbContext.Set<Product>().Add(Product.New());
        dbContext.Set<Product>().Add(Product.New());

        await dbContext.SaveChangesAsync(stoppingToken);
    }
}