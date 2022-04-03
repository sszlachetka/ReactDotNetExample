using Core;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class ProductRepository : IProductRepository
{
    private readonly InventoryDbContext _dbContext;

    public ProductRepository(InventoryDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<Product[]> All(CancellationToken cancellationToken)
    {
        return _dbContext.Set<Product>().ToArrayAsync(cancellationToken);
    }
}