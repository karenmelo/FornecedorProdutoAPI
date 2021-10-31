using DevIO.Api.Controllers;
using DevIO.Business.Intefaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevIO.Api.v2.Controllers
{
    [ApiVersion("2.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class TesteController : MainController
    {
        public TesteController(INotificador notificador,
                                      IUser user) : base(notificador, user)
        {
        }

        [HttpGet]
        public string Valor()
        {
            return "Sou a v2.";
        }
    }
}
