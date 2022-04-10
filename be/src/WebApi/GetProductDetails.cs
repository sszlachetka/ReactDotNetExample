using System.Net;
using Core;
using Microsoft.AspNetCore.Mvc;

namespace WebApi;

public record ProductDetailsDto(string Id, string Name, decimal Price, DateTime AvailableFrom);

internal static class GetProductDetails
{
    public static void MapGetProductDetails(this WebApplication app)
    {
        app.MapGet("/products/{id}",
            [ProducesResponseType(typeof(ProductDetailsDto), (int)HttpStatusCode.OK)]
            [ProducesResponseType((int)HttpStatusCode.NotFound)]
            async (string id, IProductRepository productRepository, CancellationToken cancellationToken) =>
            {
                var product = await productRepository.Find(new ProductId(id), cancellationToken);

                return product == null ? Results.NotFound() : Results.Ok(MapToDto(product));
            }
        );
    }
    private static ProductDetailsDto MapToDto(Product product)
    {
        return new ProductDetailsDto(product.Id.Value, product.Name, product.Price, product.AvailableFrom);
    }
}