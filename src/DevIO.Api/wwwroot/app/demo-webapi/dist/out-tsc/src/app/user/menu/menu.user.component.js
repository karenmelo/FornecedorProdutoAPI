import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../userService';
var MenuUserComponent = /** @class */ (function () {
    function MenuUserComponent(userService) {
        this.userService = userService;
    }
    MenuUserComponent.prototype.userLogado = function () {
        var user = this.userService.obterUsuario();
        if (user) {
            this.saudacao = "Olá " + user.email;
            return true;
        }
        return false;
    };
    MenuUserComponent = __decorate([
        Component({
            selector: 'app-menu-user',
            templateUrl: './menu.user.component.html'
        }),
        __metadata("design:paramtypes", [UserService])
    ], MenuUserComponent);
    return MenuUserComponent;
}());
export { MenuUserComponent };
//# sourceMappingURL=menu.user.component.js.map