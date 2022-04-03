using Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure;

public static class DependencyInjection
{
    public static void AddInfrastructure(this IServiceCollection services)
    {
        services.AddDbContext<InventoryDbContext>(opt => opt.UseInMemoryDatabase("inventory"));
        services.AddTransient<IProductRepository, ProductRepository>();
    }
}