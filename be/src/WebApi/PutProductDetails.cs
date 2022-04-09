using Core;

namespace WebApi;

public record PutProductDetailsDto(string Name, decimal Price, DateTime AvailableFrom);

internal static class PutProductDetails
{
    public static void MapPutProductDetails(this WebApplication app)
    {
        app.MapPut("/products/{id}",
            async (string id, PutProductDetailsDto dto, IProductRepository productRepository,
                CancellationToken cancellationToken) =>
            {
                var product = await productRepository.Find(id, cancellationToken);
                if (product == null) return Results.NotFound();
                
                product.Name = dto.Name;
                product.Price = dto.Price;
                product.AvailableFrom = dto.AvailableFrom;

                await productRepository.SaveChanges(cancellationToken);

                return Results.Ok(product);
            }
        );
    }
}