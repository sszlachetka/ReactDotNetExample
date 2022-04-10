using System.Net;
using Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace WebApi;

public record ProductListItemDto(string Id, string Name, decimal Price);

internal static class GetProducts
{
    public static void MapGetProducts(this WebApplication app)
    {
        app.MapGet("/products",
            [Authorize]
            [RequiredScope("api://ssz-webapi1/products.read")]
            [ProducesResponseType(typeof(ProductListItemDto[]), (int)HttpStatusCode.OK)]
            async (IProductRepository productRepository, CancellationToken cancellationToken) =>
            {
                var products = await productRepository.All(cancellationToken);

                return products.Select(MapToDto);
            });
    }

    private static ProductListItemDto MapToDto(Product product)
    {
        return new ProductListItemDto(product.Id.Value, product.Name, product.Price);
    }
}