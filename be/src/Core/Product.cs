namespace Core;

public class Product
{
    public Product(string id, string name, decimal price, DateTime availableFrom)
    {
        Id = id;
        Name = name;
        Price = price;
        AvailableFrom = availableFrom;
    }

    public static Product New(string name, decimal price, DateTime availableFrom)
    {
        return new Product(StringId.New(), name, price, availableFrom);
    }

    public string Id { get; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public DateTime AvailableFrom { get; set; }
}