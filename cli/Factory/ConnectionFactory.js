"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const TConnection_1 = require("../Type/TConnection");
const GmailConnection_1 = require("../Connection/GmailConnection");
const ContainerInjectionFactory_1 = require("./ContainerInjectionFactory");
const typedi_1 = require("typedi");
let ConnectionFactory = class ConnectionFactory {
    constructor(injectionFactory) {
        this.injectionFactory = injectionFactory;
    }
    create(type = TConnection_1.TConnection.GMAIL, auth) {
        switch (type) {
            case TConnection_1.TConnection.GMAIL:
                return this.injectionFactory.create(GmailConnection_1.default, auth);
            default:
                throw new Error(`Undefined connection '${type}'.`);
        }
    }
};
ConnectionFactory = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [ContainerInjectionFactory_1.default])
], ConnectionFactory);
exports.default = ConnectionFactory;
//# sourceMappingURL=ConnectionFactory.js.map