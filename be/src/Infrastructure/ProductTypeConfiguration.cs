using Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure;

public class ProductTypeConfiguration : IEntityTypeConfiguration<Product>
{
    public void Configure(EntityTypeBuilder<Product> builder)
    {
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).IsStringId(id => new ProductId(id));
        builder.Property(x => x.Name);
        builder.Property(x => x.Price);
        builder.Property(x => x.AvailableFrom);
    }
}