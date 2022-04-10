using Core;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Identity.Web.Resource;

namespace WebApi;

internal static class GetProducts
{
    public static void MapGetProducts(this WebApplication app)
    {
        app.MapGet("/products",
            [Authorize] [RequiredScope("api://ssz-webapi1/products.read")]
            (IProductRepository productRepository, CancellationToken cancellationToken) =>
                productRepository.All(cancellationToken));
    }
}