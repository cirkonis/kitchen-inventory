(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_interfaces_1 = __webpack_require__(/*! @inventory/api-interfaces */ "./libs/api-interfaces/src/index.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    login() {
        console.log('login hit');
        return;
    }
};
tslib_1.__decorate([
    common_1.Get('hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof api_interfaces_1.Message !== "undefined" && api_interfaces_1.Message) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
tslib_1.__decorate([
    common_1.Get('login'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const items_module_1 = __webpack_require__(/*! ./items/items.module */ "./apps/api/src/app/items/items.module.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/api/src/app/prisma/prisma.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/api/src/app/prisma/prisma.module.ts");
const serve_static_1 = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
const path_1 = __webpack_require__(/*! path */ "path");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '../inventory'),
                exclude: ['/api*'],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'apps/api/src/schema.gql',
            }),
            items_module_1.ItemsModule,
            prisma_module_1.PrismaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/app/items/dto/args/item-by-id.args.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/items/dto/args/item-by-id.args.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemByIdArgs = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
let ItemByIdArgs = class ItemByIdArgs {
};
tslib_1.__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], ItemByIdArgs.prototype, "id", void 0);
ItemByIdArgs = tslib_1.__decorate([
    graphql_1.ArgsType()
], ItemByIdArgs);
exports.ItemByIdArgs = ItemByIdArgs;


/***/ }),

/***/ "./apps/api/src/app/items/dto/inputs/full-item-model.input.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/app/items/dto/inputs/full-item-model.input.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullItemModelInput = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const Item_model_1 = __webpack_require__(/*! ../../models/Item.model */ "./apps/api/src/app/items/models/Item.model.ts");
let FullItemModelInput = class FullItemModelInput {
};
tslib_1.__decorate([
    graphql_1.Field(() => Item_model_1.ItemModel),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Item_model_1.ItemModel !== "undefined" && Item_model_1.ItemModel) === "function" ? _a : Object)
], FullItemModelInput.prototype, "item", void 0);
FullItemModelInput = tslib_1.__decorate([
    graphql_1.InputType('ItemInput')
], FullItemModelInput);
exports.FullItemModelInput = FullItemModelInput;


/***/ }),

/***/ "./apps/api/src/app/items/items.module.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/items/items.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const items_service_1 = __webpack_require__(/*! ./items.service */ "./apps/api/src/app/items/items.service.ts");
const items_resolver_1 = __webpack_require__(/*! ./items.resolver */ "./apps/api/src/app/items/items.resolver.ts");
let ItemsModule = class ItemsModule {
};
ItemsModule = tslib_1.__decorate([
    common_1.Module({
        providers: [items_service_1.ItemsService, items_resolver_1.ItemsResolver],
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;


/***/ }),

/***/ "./apps/api/src/app/items/items.resolver.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/items/items.resolver.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsResolver = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
const item_by_id_args_1 = __webpack_require__(/*! ./dto/args/item-by-id.args */ "./apps/api/src/app/items/dto/args/item-by-id.args.ts");
const items_service_1 = __webpack_require__(/*! ./items.service */ "./apps/api/src/app/items/items.service.ts");
const full_item_model_input_1 = __webpack_require__(/*! ./dto/inputs/full-item-model.input */ "./apps/api/src/app/items/dto/inputs/full-item-model.input.ts");
const Item_model_1 = __webpack_require__(/*! ./models/Item.model */ "./apps/api/src/app/items/models/Item.model.ts");
let ItemsResolver = class ItemsResolver {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    helloWorld() {
        return 'Hello World!';
    }
    getItem(getItemArgs) {
        return this.itemsService.getItem(getItemArgs.id);
    }
    listItems() {
        return this.itemsService.listItems();
    }
    createItem(createItemData) {
        return this.itemsService.createItem(createItemData.item);
    }
    updateItem(updateItemData) {
        return this.itemsService.updateItem(updateItemData.item);
    }
    deleteItem(deleteItemArgs) {
        return this.itemsService.deleteItem(deleteItemArgs.id);
    }
};
tslib_1.__decorate([
    graphql_1.Query(() => String),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], ItemsResolver.prototype, "helloWorld", null);
tslib_1.__decorate([
    graphql_1.Query(() => Item_model_1.ItemModel),
    tslib_1.__param(0, graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof item_by_id_args_1.ItemByIdArgs !== "undefined" && item_by_id_args_1.ItemByIdArgs) === "function" ? _a : Object]),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ItemsResolver.prototype, "getItem", null);
tslib_1.__decorate([
    graphql_1.Query(() => [Item_model_1.ItemModel]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ItemsResolver.prototype, "listItems", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => Item_model_1.ItemModel),
    tslib_1.__param(0, graphql_1.Args('createItemArgs')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof full_item_model_input_1.FullItemModelInput !== "undefined" && full_item_model_input_1.FullItemModelInput) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ItemsResolver.prototype, "createItem", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => Item_model_1.ItemModel),
    tslib_1.__param(0, graphql_1.Args('updateItemArgs')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof full_item_model_input_1.FullItemModelInput !== "undefined" && full_item_model_input_1.FullItemModelInput) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ItemsResolver.prototype, "updateItem", null);
tslib_1.__decorate([
    graphql_1.Mutation(() => Item_model_1.ItemModel),
    tslib_1.__param(0, graphql_1.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof item_by_id_args_1.ItemByIdArgs !== "undefined" && item_by_id_args_1.ItemByIdArgs) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ItemsResolver.prototype, "deleteItem", null);
ItemsResolver = tslib_1.__decorate([
    graphql_1.Resolver(),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof items_service_1.ItemsService !== "undefined" && items_service_1.ItemsService) === "function" ? _k : Object])
], ItemsResolver);
exports.ItemsResolver = ItemsResolver;


/***/ }),

/***/ "./apps/api/src/app/items/items.service.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/items/items.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const prisma = new client_1.PrismaClient();
let ItemsService = class ItemsService {
    getItem(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield prisma.item.findUnique({ where: { id: id } });
        });
    }
    listItems() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return prisma.item.findMany();
        });
    }
    createItem(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield prisma.item.create({ data: item });
        });
    }
    updateItem(item) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield prisma.item.update({
                where: { id: item.id },
                data: Object.assign({}, item),
            });
        });
    }
    deleteItem(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield prisma.item.delete({ where: { id: id } });
        });
    }
};
ItemsService = tslib_1.__decorate([
    common_1.Injectable()
], ItemsService);
exports.ItemsService = ItemsService;


/***/ }),

/***/ "./apps/api/src/app/items/models/Item.model.ts":
/*!*****************************************************!*\
  !*** ./apps/api/src/app/items/models/Item.model.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModel = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
let ItemModel = class ItemModel {
};
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ItemModel.prototype, "id", void 0);
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ItemModel.prototype, "name", void 0);
tslib_1.__decorate([
    graphql_1.Field(() => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ItemModel.prototype, "stock", void 0);
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ItemModel.prototype, "unit", void 0);
tslib_1.__decorate([
    graphql_1.Field(() => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ItemModel.prototype, "threshold", void 0);
tslib_1.__decorate([
    graphql_1.Field(() => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], ItemModel.prototype, "orderAmount", void 0);
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ItemModel.prototype, "status", void 0);
tslib_1.__decorate([
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], ItemModel.prototype, "category", void 0);
ItemModel = tslib_1.__decorate([
    graphql_1.ObjectType(),
    graphql_1.InputType('InputItem')
], ItemModel);
exports.ItemModel = ItemModel;


/***/ }),

/***/ "./apps/api/src/app/prisma/prisma.module.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/prisma/prisma.module.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/api/src/app/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
PrismaModule = tslib_1.__decorate([
    common_1.Module({
        providers: [prisma_service_1.PrismaService],
    })
], PrismaModule);
exports.PrismaModule = PrismaModule;


/***/ }),

/***/ "./apps/api/src/app/prisma/prisma.service.ts":
/*!***************************************************!*\
  !*** ./apps/api/src/app/prisma/prisma.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    onModuleInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.$connect();
        });
    }
    enableShutdownHooks(app) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.$on('beforeExit', () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield app.close();
            }));
        });
    }
};
PrismaService = tslib_1.__decorate([
    common_1.Injectable()
], PrismaService);
exports.PrismaService = PrismaService;


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal api to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
const prisma_service_1 = __webpack_require__(/*! ./app/prisma/prisma.service */ "./apps/api/src/app/prisma/prisma.service.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        app.enableCors();
        const apiPrefix = 'api';
        const graphPrefix = 'graphql';
        app.setGlobalPrefix(apiPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('API Listening at http://localhost:' + port + '/' + apiPrefix);
            common_1.Logger.log('GraphQl Listening at http://localhost:' + port + '/' + graphPrefix);
        });
        const prismaService = app.get(prisma_service_1.PrismaService);
        yield prismaService.enableShutdownHooks(app);
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts"), exports);


/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStockStatuses = exports.Statuses = exports.Categories = void 0;
var Categories;
(function (Categories) {
    Categories["SNACK"] = "SNACK-BOI";
    Categories["DRINK"] = "Drinky Drink :)";
    Categories["UTILITIY"] = "Other Usefull Kinda Thing";
    Categories["UNDETERMINED"] = "UNDETERMINED";
})(Categories = exports.Categories || (exports.Categories = {}));
var Statuses;
(function (Statuses) {
    Statuses["UNDER"] = "NEEDS-ORDERING";
    Statuses["ENOUGH"] = "ALL-GOOD";
    Statuses["ON_ORDER"] = "ON-ORDER-LIST";
    Statuses["ON_THE_WAY"] = "ORDERED-AND-COMING";
    Statuses["UNDETERMINED"] = "UNDETERMINED";
})(Statuses = exports.Statuses || (exports.Statuses = {}));
var UpdateStockStatuses;
(function (UpdateStockStatuses) {
    UpdateStockStatuses["REDUCED"] = "REDUCED";
    UpdateStockStatuses["INCREASED"] = "INCREASED";
    UpdateStockStatuses["UNCHANGED"] = "UNCHANGED";
})(UpdateStockStatuses = exports.UpdateStockStatuses || (exports.UpdateStockStatuses = {}));


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mima/WebstormProjects/inventory/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map