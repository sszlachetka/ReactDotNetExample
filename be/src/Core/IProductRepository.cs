namespace Core;

public interface IProductRepository
{
    Task<Product[]> All(CancellationToken cancellationToken);
}