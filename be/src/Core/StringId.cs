namespace Core;

internal static class StringId
{
    public static string New() => Guid.NewGuid().ToString()[24..];
}