namespace Core;

public class Product
{
    public Product(string id, string name, decimal unitPrice, DateTime availableFrom)
    {
        Id = id;
        Name = name;
        UnitPrice = unitPrice;
        AvailableFrom = availableFrom;
    }

    public static Product New(string name, decimal unitPrice, DateTime availableFrom)
    {
        return new Product(StringId.New(), name, unitPrice, availableFrom);
    }

    public string Id { get; }
    public string Name { get; }
    public decimal UnitPrice { get; }
    public DateTime AvailableFrom { get; }
}