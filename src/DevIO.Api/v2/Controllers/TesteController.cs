using DevIO.Api.Controllers;
using DevIO.Business.Intefaces;
using Microsoft.AspNetCore.Mvc;

namespace DevIO.Api.v2.Controllers
{
    [ApiVersion("2.0")]
    [Route("api/v{version:apiVersion}/[controller]")]    
    public class TesteController : MainController
    {
        //private readonly ILogger _logger;

        public TesteController(INotificador notificador, IUser user) : base(notificador, user)
        {
        }

        [HttpGet]
        public string Valor()
        {
            return "Sou a v2.";
        }
    }
}
