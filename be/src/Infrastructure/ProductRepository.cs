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

    public Task<Product?> Find(string id, CancellationToken cancellationToken)
    {
        return _dbContext.Set<Product>().FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    }

    public Task SaveChanges(CancellationToken cancellationToken)
    {
        return _dbContext.SaveChangesAsync(cancellationToken);
    }
}