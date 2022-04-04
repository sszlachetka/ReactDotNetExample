using Core;

namespace WebApi;

internal static class GetProducts
{
    public static void MapGetProducts(this WebApplication app)
    {
        app.MapGet("/products",
            (IProductRepository productRepository, CancellationToken cancellationToken) =>
                productRepository.All(cancellationToken));
    }
}