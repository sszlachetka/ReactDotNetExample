using CSharpFunctionalExtensions;

namespace Core;

public class Product : Entity<ProductId>
{
    public Product(ProductId id, string name, decimal price, DateTime availableFrom) : base(id)
    {
        Name = name;
        Price = price;
        AvailableFrom = availableFrom;
    }

    public static Product New(string name, decimal price, DateTime availableFrom)
    {
        return new Product(ProductId.New(), name, price, availableFrom);
    }

    public string Name { get; set; }
    public decimal Price { get; set; }
    public DateTime AvailableFrom { get; set; }
}