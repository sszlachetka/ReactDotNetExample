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

        dbContext.Set<Product>().Add(Product.New("Cup holder", 123.98m, DateTime.UtcNow.AddMinutes(-91234)));
        dbContext.Set<Product>().Add(Product.New("Headphones", 43.78m, DateTime.UtcNow.AddMinutes(-99865)));
        dbContext.Set<Product>().Add(Product.New("USB cable", 14.45m, DateTime.UtcNow.AddMinutes(-94326)));

        await dbContext.SaveChangesAsync(stoppingToken);
    }
}