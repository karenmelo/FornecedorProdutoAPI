import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './produtos/cadastro/cadastro.component';
import { ProdutoService } from './produtos/services/produtoService';
import { ListaComponent } from './produtos/lista/lista.component';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './user/userService';
import { MenuUserComponent } from './user/menu/menu.user.component';
import { MenuComponent } from './base/menu/menu.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                CadastroComponent,
                ListaComponent,
                LoginComponent,
                MenuUserComponent,
                MenuComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [
                ProdutoService,
                UserService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map