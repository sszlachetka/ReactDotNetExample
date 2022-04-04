namespace Core;

public class Product
{
    public Product(string id)
    {
        Id = id;
    }

    public static Product New()
    {
        return new Product(StringId.New());
    }

    public string Id { get; }
}