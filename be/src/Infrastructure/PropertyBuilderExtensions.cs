using System.Linq.Expressions;
using CSharpFunctionalExtensions;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure;

public static class PropertyBuilderExtensions
{
    public static void IsStringId<TId>(this PropertyBuilder<TId> idProperty, Expression<Func<string, TId>> convert)
    where TId : SimpleValueObject<string>
    {
        idProperty
            .HasConversion(id => id.Value, convert)
            .HasMaxLength(12);
    }
}