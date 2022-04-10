using Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Logging;
using WebApi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddLogging(logging => logging.AddSimpleConsole(options => options.SingleLine = true));
builder.Services.AddInfrastructure();
builder.Services.AddHostedService<SeedDataService>();
builder.Services.AddCors();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(options =>
        {
            builder.Configuration.Bind("AzureAdB2C", options);

            options.TokenValidationParameters.NameClaimType = "name";
        },
        options => { builder.Configuration.Bind("AzureAdB2C", options); });

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    IdentityModelEventSource.ShowPII = true;
}

app.UseHttpsRedirection();
app.UseCors(policy =>
{
    policy
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});
app.UseAuthentication();
app.UseAuthorization();

app.MapGetProducts();
app.MapGetProductDetails();
app.MapPutProductDetails();

app.Run();