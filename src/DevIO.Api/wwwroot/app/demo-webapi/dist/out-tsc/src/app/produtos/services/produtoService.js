import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/base/baseService';
var ProdutoService = /** @class */ (function (_super) {
    __extends(ProdutoService, _super);
    function ProdutoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ProdutoService.prototype.obterTodos = function () {
        return this.http
            .get(this.UrlServiceV1 + "produtos", _super.prototype.ObterAuthHeaderJson.call(this))
            .pipe(catchError(this.serviceError));
    };
    ProdutoService.prototype.registrarProdutoAlternativo = function (produto) {
        return this.http
            .post(this.UrlServiceV1 + 'produtos/adicionar', produto, _super.prototype.ObterHeaderFormData.call(this))
            .pipe(map(_super.prototype.extractData), catchError(_super.prototype.serviceError));
    };
    ProdutoService.prototype.registrarProduto = function (produto) {
        return this.http
            .post(this.UrlServiceV1 + 'produtos', produto, _super.prototype.ObterAuthHeaderJson.call(this))
            .pipe(map(_super.prototype.extractData), catchError(_super.prototype.serviceError));
    };
    ProdutoService.prototype.obterFornecedores = function () {
        return this.http
            .get(this.UrlServiceV1 + 'fornecedores', _super.prototype.ObterAuthHeaderJson.call(this))
            .pipe(catchError(_super.prototype.serviceError));
    };
    ProdutoService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProdutoService);
    return ProdutoService;
}(BaseService));
export { ProdutoService };
//# sourceMappingURL=produtoService.js.map