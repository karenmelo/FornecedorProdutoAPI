import { __decorate, __extends, __metadata } from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { BaseService } from '../base/baseService';
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    UserService.prototype.login = function (user) {
        return this.http
            .post(this.UrlServiceV1 + 'entrar', user, _super.prototype.ObterHeaderJson.call(this))
            .pipe(map(_super.prototype.extractData), catchError(_super.prototype.serviceError));
    };
    UserService.prototype.persistirUserApp = function (response) {
        localStorage.setItem('app.token', response.accessToken);
        localStorage.setItem('app.user', JSON.stringify(response.userToken));
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}(BaseService));
export { UserService };
//# sourceMappingURL=userService.js.map