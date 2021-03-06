using AutoMapper;
using DevIO.Api.DTO;
using DevIO.Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevIO.Api.Configuration
{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<Fornecedor, FornecedorDTO>().ReverseMap();
            CreateMap<Endereco, EnderecoDTO>().ReverseMap();
            CreateMap<ProdutoDTO, Produto>();

            CreateMap<Produto, ProdutoDTO>()
                .ForMember(dest => dest.NomeFornecedor, opt => opt.MapFrom(src => src.Nome));
        }
    }
}
