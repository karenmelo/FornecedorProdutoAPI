import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userService';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userForm = this.fb.group({
            email: '',
            password: ''
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.userForm.valid && this.userForm.dirty) {
            var _user = Object.assign({}, this.user, this.userForm.value);
            this.userService.login(_user)
                .subscribe(function (result) { _this.onSaveComplete(result); }, function (fail) { _this.onError(fail); });
        }
    };
    LoginComponent.prototype.onSaveComplete = function (response) {
        this.userService.persistirUserApp(response);
        this.router.navigateByUrl('/lista-produtos');
    };
    LoginComponent.prototype.onError = function (fail) {
        this.errors = fail.error.errors;
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [FormBuilder,
            Router,
            UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map