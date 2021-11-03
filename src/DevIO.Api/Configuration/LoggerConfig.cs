using System;
using DevIO.Api.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DevIO.Api.Configuration
{
    public static class LoggerConfig
    {
        public static IServiceCollection AddLoggingConfig(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddElmahIo(o =>
            {
                o.ApiKey = "38de361a27ad438a8c0842421f1e0e70";
                o.LogId = new Guid("b2aa60d9-5da4-452e-9932-d8333244ba57");
            });

            services.AddHealthChecks()
                .AddElmahIoPublisher(options =>
            {

                options.ApiKey = "38de361a27ad438a8c0842421f1e0e70";
                options.LogId = new Guid("b2aa60d9-5da4-452e-9932-d8333244ba57");
                options.HeartbeatId = "API Fornecedores";
            })
                .AddCheck("Produtos", new SqlServerHealthCheck(configuration.GetConnectionString("DefaultConnection")))
                .AddSqlServer(configuration.GetConnectionString("DefaultConnection"), name: "BancoSQL");

            services.AddHealthChecksUI().AddSqlServerStorage(configuration.GetConnectionString("DefaultConnection"));


            return services;
        }

        public static IApplicationBuilder UseLoggingConfig(this IApplicationBuilder app)
        {
            app.UseElmahIo();

            return app;
        }
    }
}
