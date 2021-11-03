using DevIO.Api.Controllers;
using DevIO.Business.Intefaces;
using Elmah.Io.AspNetCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace DevIO.Api.v2.Controllers
{
    [ApiVersion("2.0")]
    [Route("api/v{version:apiVersion}/[controller]")]    
    public class TesteController : MainController
    {
        private readonly ILogger _logger;

        public TesteController(INotificador notificador, IUser user, ILogger<TesteController> logger) : base(notificador, user)
        {
            _logger = logger;
        }

        [HttpGet]
        public string Valor()
        {

            throw new Exception("Erro teste");


            //try
            //{
            //    var i = 0;
            //    var result = 42/ i;
            //}
            //catch (DivideByZeroException e)
            //{

            //    e.Ship(HttpContext);
            //}


            _logger.LogTrace("Log de Trace");//pra desenvolvimento, inicio e fim de um processo//desabilitado por padrão no .Net Core
            _logger.LogDebug("Log de Debug");//pra desenvolvimento
            _logger.LogInformation("Log de Informação");//daqui para baixo já pode ser usado para aplicação
            _logger.LogWarning("Log de aviso");
            _logger.LogError("Log de erro");
            _logger.LogCritical("Log de problema critico");


            return "Sou a v2.";
        }
    }
}
