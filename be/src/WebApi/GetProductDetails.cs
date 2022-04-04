using Core;

namespace WebApi;

internal static class GetProductDetails
{
    public static void MapGetProductDetails(this WebApplication app)
    {
        app.MapGet("/products/{id}",
            async (string id, IProductRepository productRepository, CancellationToken cancellationToken) =>
            {
                var product = await productRepository.Find(id, cancellationToken);

                return product == null ? Results.NotFound() : Results.Ok(product);
            }
        );
    }
}