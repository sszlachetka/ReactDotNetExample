namespace Core;

internal static class StringIdGenerator
{
    public static string New() => Guid.NewGuid().ToString()[24..];
}