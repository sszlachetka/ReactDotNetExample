using CSharpFunctionalExtensions;

namespace Core;

public class ProductId : SimpleValueObject<string>
{
    public ProductId(string value) : base(value)
    {
    }

    public static ProductId New() => new ProductId(StringIdGenerator.New());
}