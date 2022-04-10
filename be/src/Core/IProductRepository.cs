namespace Core;

public interface IProductRepository
{
    Task<Product[]> All(CancellationToken cancellationToken);
    Task<Product?> Find(ProductId id, CancellationToken cancellationToken);
    Task SaveChanges(CancellationToken cancellationToken);
}