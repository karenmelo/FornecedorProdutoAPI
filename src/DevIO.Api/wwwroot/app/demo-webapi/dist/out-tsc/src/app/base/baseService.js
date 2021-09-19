import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.UrlServiceV1 = "https://localhost:5001/api/";
    }
    //protected UrlServiceV1: string = "https://devioapi.azurewebsites.net/api/v1/";
    BaseService.prototype.ObterHeaderFormData = function () {
        return {
            headers: new HttpHeaders({
                'Content-Disposition': 'form-data; name="produto"',
                'Authorization': "Bearer " + this.obterTokenUsuario()
            })
        };
    };
    BaseService.prototype.ObterHeaderJson = function () {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    };
    BaseService.prototype.ObterAuthHeaderJson = function () {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.obterTokenUsuario()
            })
        };
    };
    BaseService.prototype.extractData = function (response) {
        return response.data || {};
    };
    BaseService.prototype.obterUsuario = function () {
        return JSON.parse(localStorage.getItem('app.user'));
    };
    BaseService.prototype.obterTokenUsuario = function () {
        return localStorage.getItem('app.token');
    };
    BaseService.prototype.serviceError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            errMsg = error.status + " - " + (error.statusText || '');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return throwError(errMsg);
    };
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=baseService.js.map