webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/home-dashboard/home-dashboard.module": [
		"./src/app/home-dashboard/home-dashboard.module.ts"
	],
	"app/interactions/interaction-details/interaction-details.module": [
		"./src/app/interactions/interaction-details/interaction-details.module.ts"
	],
	"app/interactions/interactions-results/interactions-results.module": [
		"./src/app/interactions/interactions-results/interactions-results.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_download_download_component__ = __webpack_require__("./src/app/navigation/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interactomes_interactomes_component__ = __webpack_require__("./src/app/interactomes/interactomes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_about_about_component__ = __webpack_require__("./src/app/navigation/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_redirect_redirect_component__ = __webpack_require__("./src/app/navigation/redirect/redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    {
        path: 'home',
        loadChildren: 'app/home-dashboard/home-dashboard.module#HomeDashboardModule'
    },
    {
        path: 'search',
        loadChildren: 'app/interactions/interactions-results/interactions-results.module#InteractionsResultsModule'
    },
    {
        path: 'details',
        loadChildren: 'app/interactions/interaction-details/interaction-details.module#InteractionDetailsModule'
    },
    {
        path: 'download',
        component: __WEBPACK_IMPORTED_MODULE_2__navigation_download_download_component__["a" /* DownloadComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'interactomes',
        component: __WEBPACK_IMPORTED_MODULE_3__interactomes_interactomes_component__["a" /* InteractomesComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__navigation_about_about_component__["a" /* AboutComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'interaction/:interactionAc',
        redirectTo: 'details/interaction/:interactionAc'
    },
    {
        path: 'query/:advanced_query',
        component: __WEBPACK_IMPORTED_MODULE_6__navigation_redirect_redirect_component__["a" /* RedirectComponent */],
        data: { externalUrl: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].former_intact_url + 'query/:advanced_query' }
    },
    {
        path: 'interactors/:query',
        component: __WEBPACK_IMPORTED_MODULE_6__navigation_redirect_redirect_component__["a" /* RedirectComponent */],
        data: { externalUrl: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].former_intact_url + 'interactors/:query' }
    },
    {
        path: 'pages/list/list.xhtml',
        component: __WEBPACK_IMPORTED_MODULE_6__navigation_redirect_redirect_component__["a" /* RedirectComponent */],
        data: { externalUrl: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].former_intact_url + 'pages/list/list.xhtml' }
    },
    {
        path: 'pages/interactions/interactions.xhtml',
        component: __WEBPACK_IMPORTED_MODULE_6__navigation_redirect_redirect_component__["a" /* RedirectComponent */],
        data: { externalUrl: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].former_intact_url + 'pages/interactions/interactions.xhtml' }
    },
    {
        path: 'pages/details/details.xhtml',
        component: __WEBPACK_IMPORTED_MODULE_6__navigation_redirect_redirect_component__["a" /* RedirectComponent */],
        data: { externalUrl: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].former_intact_url + 'pages/details/details.xhtml' }
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: false })],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ip-compact-header *ngIf=\"showCompactHeader; else elseBlock\"></ip-compact-header>\n<ng-template #elseBlock><ip-expanded-header></ip-expanded-header></ng-template>\n\n<!-- Suggested layout containers -->\n<section id=\"main-content-area\" class=\"row margin-top-large margin-bottom-medium expanded\" role=\"main\">\n  <section>\n    <router-outlet></router-outlet>\n    <!-- Routed views go here -->\n  </section>\n</section>\n\n<ip-local-footer *ngIf=\"showFooter\"></ip-local-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2_ga__ = __webpack_require__("./node_modules/angulartics2/ga/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






let AppComponent = AppComponent_1 = class AppComponent {
    constructor(router, activatedRoute, analytics, baseHref) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.analytics = analytics;
        this.baseHref = baseHref;
        this.version = '0.0.1';
        this.showCompactHeader = false;
        this.showFooter = true;
        this.title = 'IntAct';
    }
    static initFoundation() {
        $(document).foundation();
        $(document).foundationExtendEBI();
    }
    ngOnInit() {
        __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].context_path = /\/$/.test(this.baseHref) ? this.baseHref.substring(0, this.baseHref.length - 1) : this.baseHref;
        AppComponent_1.initFoundation();
        this.router.events.subscribe(event => {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                this.showCompactHeader = this.activatedRoute.firstChild.snapshot.data.showCompactHeader !== false;
                this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
                __WEBPACK_IMPORTED_MODULE_2__layout_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].display();
            }
        });
    }
    ngAfterViewInit() {
        ga('create', __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].analytics_id, 'none');
    }
};
AppComponent = AppComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* APP_BASE_HREF */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_3_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */], String])
], AppComponent);

var AppComponent_1;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_dashboard_home_dashboard_module__ = __webpack_require__("./src/app/home-dashboard/home-dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_dashboard_featured_dataset_service_feature_dataset_service__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/service/feature-dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interactions_interactions_results_interactions_results_module__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-results.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interactions_shared_service_interactions_search_service__ = __webpack_require__("./src/app/interactions/shared/service/interactions-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__interactions_interaction_details_interaction_details_module__ = __webpack_require__("./src/app/interactions/interaction-details/interaction-details.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interactions_shared_service_interactions_details_service__ = __webpack_require__("./src/app/interactions/shared/service/interactions-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__interactions_shared_service_network_search_service__ = __webpack_require__("./src/app/interactions/shared/service/network-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__interactomes_interactomes_component__ = __webpack_require__("./src/app/interactomes/interactomes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_documentation_documentation_module__ = __webpack_require__("./src/app/navigation/documentation/documentation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__navigation_download_download_module__ = __webpack_require__("./src/app/navigation/download/download.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__interactomes_interactome_interactome_component__ = __webpack_require__("./src/app/interactomes/interactome/interactome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__layout_layout_module__ = __webpack_require__("./src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__interactions_shared_service_network_view_service__ = __webpack_require__("./src/app/interactions/shared/service/network-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__navigation_documentation_shared_markdown_markdown_module__ = __webpack_require__("./src/app/navigation/documentation/shared/markdown/markdown.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__interactions_shared_service_filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__navigation_about_about_component__ = __webpack_require__("./src/app/navigation/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angulartics2__ = __webpack_require__("./node_modules/angulartics2/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angulartics2_ga__ = __webpack_require__("./node_modules/angulartics2/ga/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_service_google_analytics_google_analytics_service__ = __webpack_require__("./src/app/shared/service/google-analytics/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__navigation_redirect_redirect_component__ = __webpack_require__("./src/app/navigation/redirect/redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__interactomes_interactomes_component__["a" /* InteractomesComponent */],
            __WEBPACK_IMPORTED_MODULE_18__interactomes_interactome_interactome_component__["a" /* InteractomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__navigation_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_30__navigation_redirect_redirect_component__["a" /* RedirectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot([]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_19__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_7__home_dashboard_home_dashboard_module__["HomeDashboardModule"],
            __WEBPACK_IMPORTED_MODULE_9__interactions_interactions_results_interactions_results_module__["InteractionsResultsModule"],
            __WEBPACK_IMPORTED_MODULE_12__interactions_interaction_details_interaction_details_module__["InteractionDetailsModule"],
            __WEBPACK_IMPORTED_MODULE_16__navigation_documentation_documentation_module__["a" /* DocumentationModule */],
            __WEBPACK_IMPORTED_MODULE_17__navigation_download_download_module__["a" /* DownloadModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_21__navigation_documentation_shared_markdown_markdown_module__["a" /* MarkdownModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_26_angulartics2__["b" /* Angulartics2Module */].forRoot([__WEBPACK_IMPORTED_MODULE_27_angulartics2_ga__["a" /* Angulartics2GoogleAnalytics */]])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__home_dashboard_featured_dataset_service_feature_dataset_service__["a" /* FeatureDatasetService */],
            __WEBPACK_IMPORTED_MODULE_10__home_dashboard_search_service_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_11__interactions_shared_service_interactions_search_service__["a" /* InteractionsSearchService */],
            __WEBPACK_IMPORTED_MODULE_13__interactions_shared_service_interactions_details_service__["a" /* InteractionsDetailsService */],
            __WEBPACK_IMPORTED_MODULE_23__interactions_shared_service_filter_service__["b" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_14__interactions_shared_service_network_search_service__["a" /* NetworkSearchService */],
            __WEBPACK_IMPORTED_MODULE_20__interactions_shared_service_network_view_service__["a" /* NetworkViewService */],
            __WEBPACK_IMPORTED_MODULE_28__shared_service_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */],
            { provide: __WEBPACK_IMPORTED_MODULE_29__angular_common__["a" /* APP_BASE_HREF */], useFactory: (s) => s.getBaseHrefFromDOM(), deps: [__WEBPACK_IMPORTED_MODULE_29__angular_common__["i" /* PlatformLocation */]] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home-dashboard/advanced-search/MIQL.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIQLPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let MIQLPipe = MIQLPipe_1 = class MIQLPipe {
    transform(ruleSet) {
        return MIQLPipe_1.transform(ruleSet);
    }
    static transform(ruleSet) {
        return ruleSet.rules.map(rule => {
            if (this.isRuleSet(rule)) {
                return `(${this.transform(rule)})`;
            }
            else {
                switch (rule.operator) {
                    default:
                    case '=':
                        return `${rule.field}:${rule.value}`;
                    case '≠':
                        return `NOT ${rule.field}:${rule.value}`;
                    case 'in':
                        return `${rule.field}:(${rule.value})`;
                    case 'not in':
                        return `NOT ${rule.field}:(${rule.value})`;
                }
            }
        }).join(` ${ruleSet.condition.toUpperCase()} `);
    }
    static isRuleSet(rule) {
        return rule.rules !== undefined;
    }
};
MIQLPipe = MIQLPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: 'MIQL',
        pure: false
    })
], MIQLPipe);

var MIQLPipe_1;


/***/ }),

/***/ "./src/app/home-dashboard/advanced-search/advanced-search.component.css":
/***/ (function(module, exports) {

module.exports = "/*/deep/ html {\n  font: 14px sans-serif;\n  margin: 30px;\n}*/\n\n.text-input {\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\n.input-group {\n  height: 21px!important;\n  padding: 0;\n}\n\n#editor {\n  width: 100%;\n  height: 21px!important;\n  padding: 8px;\n  border: 1px solid #CCC;\n  font-family: monospace;\n  font-weight: bold;\n  white-space: normal;\n}\n\n.button-group .button.icon {\n  font-size: xxx-large;\n  border: none;\n  padding: 15px;\n}\n\n#arrow-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n#ad-search-button {\n  padding: calc(50% - 0.85em) 15px calc(50% - 0.85em) 15px!important;\n  height: 100%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/home-dashboard/advanced-search/advanced-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-panel margin-bottom-large\">\n  <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Not Supported</h3>\n  Advanced search is not yet supported in this new website, you will therefore be redirected to the former\n  IntAct website upon clicking on the search button\n</div>\n\n<div class=\"input-group\">\n  <div #editor id=\"editor\" class=\"row output input-group-field\" contenteditable=\"true\" (input)=\"onInput()\">\n  </div>\n  <div class=\"input-group-button\">\n    <input id=\"ad-search-button\" type=\"button\" name=\"submit\" value=\"1\"\n           (click)=\"search(editor.innerText)\" class=\"button icon icon-functional\">\n  </div>\n</div>\n\n<ul class=\"accordion\" data-accordion>\n  <li class=\"accordion-item is-active\" data-accordion-item>\n    <a class=\"accordion-title\">MIQL Query Builder</a>\n    <div class=\"accordion-content\" data-tab-content>\n      <div class=\"margin-top-large margin-bottom-large\">\n        <query-builder #builder id=\"builder\" [formControl]='queryCtrl' [config]='currentConfig'\n                       [classNames]=\"classNames\" (ngModelChange)=\"onBuilderUpdate()\">\n\n          <ng-container *querySwitchGroup=\"let ruleSet\">\n            <div class=\"button-group margin-bottom-none\">\n              <div class=\"display-contents ad-q-switch-control\">\n                <input type=\"radio\" value=\"and\" [checked]=\"ruleSet.condition === 'and'\"\n                       class=\"ad-q-switch-radio no-margin checked ng-untouched ng-pristine ng-valid\">\n                <label class=\"button margin-bottom-none\" (click)=\"updateCondition(ruleSet, $event)\">AND</label>\n              </div>\n              <div class=\"display-contents ad-q-switch-control\">\n                <input type=\"radio\" value=\"or\" [checked]=\"ruleSet.condition === 'or'\"\n                       class=\"ad-q-switch-radio no-margin ng-untouched ng-pristine ng-valid\">\n                <label class=\"button margin-bottom-none\" (click)=\"updateCondition(ruleSet, $event)\">OR</label>\n              </div>\n            </div>\n          </ng-container>\n\n        </query-builder>\n      </div>\n    </div>\n  </li>\n</ul>\n\n\n\n"

/***/ }),

/***/ "./src/app/home-dashboard/advanced-search/advanced-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_query_builder__ = __webpack_require__("./node_modules/angular2-query-builder/dist/angular2-query-builder/esm5/angular2-query-builder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MIQL_pipe__ = __webpack_require__("./src/app/home-dashboard/advanced-search/MIQL.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__advanced_search_config__ = __webpack_require__("./src/app/home-dashboard/advanced-search/advanced-search.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__colorMIQL_pipe__ = __webpack_require__("./src/app/home-dashboard/advanced-search/colorMIQL.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AdvancedSearchComponent = class AdvancedSearchComponent {
    constructor() {
        this.query = {
            condition: 'and',
            rules: []
        };
        this.classNames = {
            switchGroup: 'button-group',
            switchControl: 'display-contents ad-q-switch-control',
            switchRadio: 'ad-q-switch-radio no-margin',
            switchLabel: 'button margin-bottom-none',
            inputControl: 'no-margin',
            entityControl: 'no-margin',
            operatorControl: 'no-margin',
            fieldControl: 'no-margin',
            buttonGroup: 'button-group no-margin',
            button: 'button margin-bottom-none',
            addIcon: 'icon icon-common icon-plus centered-icon',
            removeIcon: 'icon icon-common icon-times centered-icon',
            removeButton: 'button',
            transition: 'margin-bottom-none',
            connector: 'ad-q-connector',
            row: 'ad-q-row',
            invalidRuleSet: 'ad-q-row invalid-rule-set'
        };
        this.doUpdate = true;
        this.queryCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.query);
        this.currentConfig = __WEBPACK_IMPORTED_MODULE_4__advanced_search_config__["a" /* ADVANCED_SEARCH_CONFIG */];
    }
    updateCondition(ruleSet, e) {
        const target = $(e.target);
        const parent = target.parents('.button-group');
        parent.find('.ad-q-switch-radio').each(function () {
            $(this).toggleClass('checked');
            if ($(this).hasClass('checked')) {
                $(this).prop('checked', true);
                ruleSet.condition = $(this).val();
            }
            else {
                $(this).prop('checked', false);
            }
        });
        this.onBuilderUpdate();
    }
    ngAfterViewInit() {
    }
    search(miql) {
        window.open('query/' + miql);
    }
    builderToInput(builder, editor) {
        if (this.doUpdate) {
            this.doUpdate = false;
            editor.innerHTML = __WEBPACK_IMPORTED_MODULE_5__colorMIQL_pipe__["a" /* ColorMIQLPipe */].transform(__WEBPACK_IMPORTED_MODULE_3__MIQL_pipe__["a" /* MIQLPipe */].transform(builder.value));
        }
        this.doUpdate = true;
    }
    inputToBuilder(builder, miql) {
        if (this.doUpdate) {
            this.doUpdate = false;
            builder.value = parseMIQL(miql);
        }
        this.doUpdate = true;
    }
    onInput() {
        const sel = window.getSelection();
        const caretPosition = sel.getRangeAt(0).getBoundingClientRect();
        const miql = this.editor.nativeElement.innerText;
        this.editor.nativeElement.innerHTML = __WEBPACK_IMPORTED_MODULE_5__colorMIQL_pipe__["a" /* ColorMIQLPipe */].transform(miql);
        let range;
        if (caretPosition.left === 0 && caretPosition.top === 0) {
            range = document.createRange();
            range.setStart(this.editor.nativeElement, 0);
        }
        else {
            range = document.caretRangeFromPoint(caretPosition.left, caretPosition.top);
        }
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        this.editor.nativeElement.focus();
        this.inputToBuilder(this.builder, miql);
    }
    onBuilderUpdate() {
        this.builderToInput(this.builder, this.editor.nativeElement);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_angular2_query_builder__["a" /* QueryBuilderComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_query_builder__["a" /* QueryBuilderComponent */])
], AdvancedSearchComponent.prototype, "builder", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('editor'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], AdvancedSearchComponent.prototype, "editor", void 0);
AdvancedSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-advanced-search',
        template: __webpack_require__("./src/app/home-dashboard/advanced-search/advanced-search.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/advanced-search/advanced-search.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdvancedSearchComponent);

function parseMIQL(miql) {
    miql = `(${miql})`;
    let out;
    const stack = [];
    let end, stackLevel = 0, value;
    const levelMap = new Map();
    miql.split('').forEach((char, index, array) => {
        switch (char) {
            case '(':
                stack.push({ start: index, ruleSet: { condition: 'and', rules: [] } });
                break;
            case ')':
                const { start, ruleSet } = stack.pop();
                out = ruleSet;
                let rule = ruleSet;
                end = index;
                value = miql.substring(start + 1, end);
                if (array[start - 1] === ':') {
                    rule = extractSetRule(miql, start, value);
                }
                else {
                    stackLevel = stack.length;
                    const range = { start: start, end: end - 1 };
                    setupLevelMap(levelMap, stackLevel, range);
                    const trimmedValue = removeSuperiorRules(value, start, end, stackLevel, levelMap);
                    fillRuleSet(ruleSet, trimmedValue);
                }
                if (stack.length > 0) {
                    stack[stack.length - 1].ruleSet.rules.push(rule);
                }
                break;
        }
    });
    return out;
}
function extractSetRule(miql, start, value) {
    let previousSpaceIndex = miql.lastIndexOf(' ', start - 2);
    if (miql.substring(previousSpaceIndex + 1, previousSpaceIndex + 2) === '(') {
        previousSpaceIndex++; // Avoid hitting the start parenthesis if the field is the first in a rule set
    }
    const potentialNot = miql.substring(previousSpaceIndex - 3, previousSpaceIndex);
    const operator = potentialNot === 'NOT' || potentialNot === 'not' ? 'not in' : 'in';
    const field = miql.substring(previousSpaceIndex + 1, start - 1);
    const entity = __WEBPACK_IMPORTED_MODULE_4__advanced_search_config__["b" /* AdvancedQueryHelper */].toField(field).entity;
    if (value === 'undefined') {
        return { field, operator, entity };
    }
    else {
        return { field, operator, entity, value };
    }
}
function setupLevelMap(levelMap, stackLevel, range) {
    if (levelMap.get(stackLevel) === undefined) {
        levelMap.set(stackLevel, [range]);
    }
    else {
        levelMap.get(stackLevel).push(range);
    }
}
function removeSuperiorRules(value, start, end, stackLevel, levelMap) {
    let deleted = start;
    const superiorRanges = levelMap.get(stackLevel + 1);
    if (superiorRanges !== undefined) {
        for (const superiorRange of superiorRanges) {
            if (superiorRange.start > start && superiorRange.end < end) {
                value = value.substring(0, superiorRange.start - deleted) + value.substring(superiorRange.end - deleted, value.length);
                deleted += superiorRange.end - superiorRange.start;
            }
        }
    }
    return value;
}
function fillRuleSet(ruleSet, value) {
    ruleSet.condition = /[ \u00a0]OR[ \u00a0]/ig.test(value) ? 'or' : 'and';
    const superiorRuleSets = ruleSet.rules;
    let i = 0;
    ruleSet.rules = [];
    value.split(/[ \u00a0]AND[ \u00a0]|[ \u00a0]OR[ \u00a0]/ig)
        .map(ruleStr => ruleStr.trim())
        .filter(ruleStr => ruleStr.length > 0)
        .forEach(ruleStr => {
        if (ruleStr === '()') {
            ruleSet.rules.push(superiorRuleSets[i++]);
        }
        else {
            ruleStr = ruleStr.trim();
            const different = ruleStr.startsWith('NOT ') || ruleStr.startsWith('not ');
            const ruleOperator = different ? '≠' : '=';
            const indexOfColon = ruleStr.indexOf(':') || ruleStr.length;
            const ruleFieldKeyword = ruleStr.substring(different ? 4 : 0, indexOfColon);
            const ruleField = __WEBPACK_IMPORTED_MODULE_4__advanced_search_config__["b" /* AdvancedQueryHelper */].toField(ruleFieldKeyword);
            if (ruleField !== undefined) {
                const ruleValue = ruleStr.substring(indexOfColon + 1, ruleStr.length);
                if (ruleValue.startsWith('(')) {
                    ruleSet.rules.push(superiorRuleSets.pop());
                }
                else if (ruleValue === 'undefined') {
                    ruleSet.rules.push({ field: ruleFieldKeyword, operator: ruleOperator, entity: ruleField.entity });
                }
                else {
                    ruleSet.rules.push({ field: ruleFieldKeyword, operator: ruleOperator, entity: ruleField.entity, value: ruleValue });
                }
            }
        }
    });
}


/***/ }),

/***/ "./src/app/home-dashboard/advanced-search/advanced-search.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fields = {
    idA: {
        name: 'Identifier',
        type: 'string',
        entity: 'participantA',
    },
    idB: {
        name: 'Identifier',
        type: 'string',
        entity: 'participantB'
    },
    altidA: {
        name: 'Alternative Id.',
        type: 'string',
        entity: 'participantA'
    },
    altidB: {
        name: 'Alternative Id.',
        type: 'string',
        entity: 'participantB'
    },
    id: {
        name: 'Identifiers',
        type: 'string',
        entity: 'participant'
    },
    aliasA: {
        name: 'Alias',
        type: 'string',
        entity: 'participantA'
    },
    aliasB: {
        name: 'Alias',
        type: 'string',
        entity: 'participantB'
    },
    alias: {
        name: 'Alias',
        type: 'string',
        entity: 'participant'
    },
    identifier: {
        name: 'Identifiers, Alternatives, Aliases',
        type: 'string',
        entity: 'participant'
    },
    pubauth: {
        name: 'Publication 1st author(s)',
        type: 'string',
        entity: 'publication'
    },
    pubid: {
        name: 'Publication Identifier(s)',
        type: 'string',
        entity: 'publication'
    },
    taxidA: {
        name: 'Tax Id. interactor',
        type: 'string',
        entity: 'participantA'
    },
    taxidB: {
        name: 'Tax Id. interactor',
        type: 'string',
        entity: 'participantB'
    },
    taxidHost: {
        name: 'Tax Id. Host organism',
        type: 'string',
        entity: 'interaction'
    },
    species: {
        name: 'Tax Id. interactors',
        type: 'string',
        entity: 'participant'
    },
    type: {
        name: 'Interaction type(s)',
        type: 'string',
        entity: 'interaction'
    },
    detmethod: {
        name: 'Interaction Detection method(s)',
        type: 'string',
        entity: 'interaction'
    },
    interaction_id: {
        name: 'Interaction identifier(s)',
        type: 'string',
        entity: 'interaction'
    },
    pbioroleA: {
        name: 'Biological role',
        type: 'string',
        entity: 'participantA'
    },
    pbioroleB: {
        name: 'Biological role',
        type: 'string',
        entity: 'participantB'
    },
    pbiorole: {
        name: 'Biological role',
        type: 'string',
        entity: 'participant'
    },
    pexproleA: {
        name: 'Experimental Role',
        type: 'string',
        entity: 'participantA'
    },
    pexproleB: {
        name: 'Experimental Role',
        type: 'string',
        entity: 'participantB'
    },
    ptypeA: {
        name: 'Interactor type',
        type: 'string',
        entity: 'participantA'
    },
    ptypeB: {
        name: 'Interactor type',
        type: 'string',
        entity: 'participantB'
    },
    ptype: {
        name: 'Interactor type',
        type: 'string',
        entity: 'participant'
    },
    pxrefA: {
        name: 'Interactor xrefs.',
        type: 'string',
        entity: 'participantA'
    },
    pxrefB: {
        name: 'Interactor xrefs.',
        type: 'string',
        entity: 'participantB'
    },
    pxref: {
        name: 'Interactor xrefs.',
        type: 'string',
        entity: 'participant',
    },
    'intact-miscore': {
        name: 'IntAct MI Score',
        defaultValue: '[0 TO 1]',
        type: 'string',
        entity: 'interaction',
        operators: ['=', '≠']
    },
    geneName: {
        name: 'Gene name for Interactor A or B',
        type: 'string',
        entity: 'participant'
    },
    xref: {
        name: 'Interaction xrefs.',
        type: 'string',
        entity: 'interaction'
    },
    annotA: {
        name: 'Interactor annotations',
        type: 'string',
        entity: 'participantA'
    },
    annotB: {
        name: 'Interactor annotations',
        type: 'string',
        entity: 'participantB'
    },
    annot: {
        name: 'Interaction annotations',
        type: '',
        entity: 'interaction'
    },
    cdate: {
        name: 'Creation date',
        type: 'date',
        entity: 'curationMetadata'
    },
    udate: {
        name: 'Update date',
        type: 'date',
        entity: 'curationMetadata'
    },
    negative: {
        name: 'Negative interaction',
        type: 'boolean',
        entity: 'interaction'
    },
    complex: {
        name: 'Complex expansion',
        type: 'category',
        entity: 'interaction',
        options: [
            {
                name: 'Bipartite expansion',
                value: 'MI:1062'
            },
            {
                name: 'Matrix expansion',
                value: 'MI:1061'
            },
            {
                name: 'Spoke expansion',
                value: 'MI:1060'
            },
            {
                name: 'Non-expanded',
                value: '-'
            }
        ]
    },
    ftypeA: {
        name: 'Feature type',
        type: 'string',
        entity: 'participantA'
    },
    ftypeB: {
        name: 'Feature type',
        type: 'string',
        entity: 'participantB'
    },
    ftype: {
        name: 'Feature type',
        type: 'string',
        entity: 'participant'
    },
    pmethodA: {
        name: 'Participant identification method',
        type: 'string',
        entity: 'participantA'
    },
    pmethodB: {
        name: 'Participant identification method',
        type: 'string',
        entity: 'participantB'
    },
    pmethod: {
        name: 'Participant identification method',
        type: 'string',
        entity: 'participant'
    },
    stcA: {
        name: 'Stoichiometry',
        type: 'string',
        entity: 'participantA'
    },
    stcB: {
        name: 'Stoichiometry',
        type: 'string',
        entity: 'participantB'
    },
    stc: {
        name: 'Stoichiometry',
        type: 'boolean',
        entity: 'participant'
    },
    param: {
        name: 'Interaction parameters',
        type: 'boolean',
        entity: 'interaction'
    },
    source: {
        name: 'Source database(s)',
        type: 'string',
        entity: 'curationMetadata'
    },
    bioeffectA: {
        name: 'Biological effect',
        type: 'string',
        entity: 'participantA'
    },
    bioeffectB: {
        name: 'Biological effect',
        type: 'string',
        entity: 'participantB'
    },
    bioeffect: {
        name: 'Biological effect',
        type: 'string',
        entity: 'participant'
    },
    causalmechanism: {
        name: 'Causal regulatory mechanism',
        type: 'string',
        entity: 'causalInteraction'
    },
    causalstatement: {
        name: 'Causal statement',
        type: 'string',
        entity: 'causalInteraction'
    }
};
const ADVANCED_SEARCH_CONFIG = {
    getOperators() {
        return ['=', '≠', 'in', 'not in'];
    },
    fields,
    entities: {
        participant: {
            name: 'Participant (A or B)',
            defaultField: fields.id
        },
        participantA: {
            name: 'Participant A',
            defaultField: fields.idA
        },
        participantB: {
            name: 'Participant B',
            defaultField: fields.idB
        },
        interaction: {
            name: 'Interaction',
            defaultField: fields['intact-miscore']
        },
        publication: {
            name: 'Publication',
            defaultField: fields.pubid
        },
        causalInteraction: {
            name: 'Causal Interaction',
            defaultField: fields.causalstatement
        },
        curationMetadata: {
            name: 'Curation Metadata',
            defaultField: fields.source
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ADVANCED_SEARCH_CONFIG;

class AdvancedQueryHelper {
    static toField(keyword) {
        return AdvancedQueryHelper.keywordToFieldMap.get(keyword);
    }
    static toKey(field) {
        return this.fieldToKeyMap.get(field);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = AdvancedQueryHelper;

AdvancedQueryHelper.keywordToFieldMap = new Map();
AdvancedQueryHelper.fieldToKeyMap = new Map();
AdvancedQueryHelper.keywords = [];
for (const key of Object.keys(fields)) {
    const field = ADVANCED_SEARCH_CONFIG.fields[key];
    AdvancedQueryHelper.keywords.push(key);
    AdvancedQueryHelper.keywordToFieldMap.set(key, field);
    AdvancedQueryHelper.fieldToKeyMap.set(field, key);
}


/***/ }),

/***/ "./src/app/home-dashboard/advanced-search/colorMIQL.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorMIQLPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__advanced_search_config__ = __webpack_require__("./src/app/home-dashboard/advanced-search/advanced-search.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ColorMIQLPipe = ColorMIQLPipe_1 = class ColorMIQLPipe {
    transform(miql) {
        return ColorMIQLPipe_1.transform(miql);
    }
    static transform(miql) {
        return ColorMIQLPipe_1.colorCodes.reduce((html, colorCode) => html.replace(colorCode.regex, `<span class="miql ${colorCode.class}">$1</span>`), miql);
    }
    static isMIQL(str) {
        const regex = ColorMIQLPipe_1.colorCodes[1].regex;
        const isMIQL = regex.test(str);
        regex.lastIndex = 0; // Reinitialise search for next call
        return isMIQL;
    }
};
ColorMIQLPipe.colorCodes = [
    { regex: /(".+")/g, class: 'miql-string' },
    { regex: RegExp(`(${__WEBPACK_IMPORTED_MODULE_1__advanced_search_config__["b" /* AdvancedQueryHelper */].keywords.map(keyword => keyword.replace('-', '\-')).join('|')})`, 'g'), class: 'miql-field' },
    { regex: /(AND[ \u00a0]|NOT[ \u00a0]|OR[ \u00a0]|TO[ \u00a0])/ig, class: 'miql-operator' },
    { regex: /([()+-,:\[\]*?])/g, class: 'miql-symbol' },
];
ColorMIQLPipe = ColorMIQLPipe_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: 'colorMIQL',
        pure: true
    })
], ColorMIQLPipe);

var ColorMIQLPipe_1;


/***/ }),

/***/ "./src/app/home-dashboard/batch-search/batch-search.component.css":
/***/ (function(module, exports) {

module.exports = ".well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #fbfbfb;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n/* Default class applied to drop zones on over */\n\n.my-drop-zone {\n  border: dotted 3px lightgray;\n}\n\n.nv-file-over {\n  border: dotted 3px #68297c;\n}\n\n.is-success {\n  color: green;\n}\n\n.is-error {\n  color: red;\n}\n\n.is-cancel {\n  color: orange;\n}\n\n/* Tweaks ebi-global */\n\n.sticky-cell {\n  vertical-align: top;\n  border-right: 1px solid white;\n  background-color: rgb(197, 147, 222);\n  /*border-left: 1px solid rgb(149, 85, 171);*/\n}\n\n.sticky-cell > * {\n  position: sticky;\n  top: 35%;\n}\n\n.sticky-cell div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.select-buttons * {\n  width: 72%;\n  margin-bottom: -1px;\n}\n\n.select-buttons span:first-child {\n  font-weight: bolder;\n  color: #FFFFFF;\n  font-size: large;\n  margin-bottom: 0.5em;\n}\n\ntable tr, th {\n  font-size: 13px;\n  white-space: nowrap;\n}\n\nth {\n  position: sticky;\n  top: 0;\n  background-color: rgb(149, 85, 171) !important;\n  z-index: 1;\n}\n\n.terms-resolution-container {\n  -webkit-box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.19);\n  max-height: 44vh;\n  overflow: auto;\n}\n\ntr.separator td {\n  height: 1px;\n  background-color: rgb(149, 85, 171) !important;\n  padding: 0 0;\n}\n\ntr.other-interactors {\n  background-color: #ffeaff;\n}\n\ntr.other-interactors td:last-child {\n  font-weight: bold;\n  text-align: left;\n}\n\ntbody {\n  border-bottom: 2px solid black !important;\n}\n\ntbody:last-child {\n  border-bottom: 0 !important;\n}\n\n.y-overflowed {\n  height: 5em;\n  overflow-y: auto;\n  -webkit-box-shadow: inset 0px -5px 5px -5px #00000066, inset 0px 5px 5px -5px #00000066;\n          box-shadow: inset 0px -5px 5px -5px #00000066, inset 0px 5px 5px -5px #00000066;\n  margin: 1em 0;\n}\n\nul {\n  margin: 0;\n}\n\n[type='file'], [type='checkbox'], [type='radio'] {\n   margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/batch-search/batch-search.component.html":
/***/ (function(module, exports) {

module.exports = "<aw-wizard [navBarLayout]=\"'large-empty-symbols'\">\n  <aw-wizard-step stepTitle=\"Design query\"\n                  [navigationSymbol]=\"{ symbol: '&#xf093;', fontFamily: 'EBI-Common'}\"\n                  (stepExit)=\"resolveSearch()\">\n\n    <ul class=\"accordion margin-top-large\" data-accordion>\n      <li class=\"accordion-item is-active\" data-accordion-item>\n        <!-- Accordion tab title -->\n        <a href=\"home#identifier-list\" class=\"accordion-title\">Interactor Identifiers List</a>\n\n        <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->\n        <div id=\"identifier-list\" class=\"accordion-content\" data-tab-content>\n          <div class=\"row margin-top-large\">\n            <div id=\"searchBox3\" class=\"columns small-12\">\n              <textarea #query id=\"term-list\" placeholder=\"Search...\" rows=\"5\"></textarea>\n              <button class=\"button float-right\" type=\"button\" (click)=\"validateSearchBox(query.value)\" awNextStep>\n                <i class=\"icon icon-common icon-cogs\"></i> Next Step\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"accordion-item\" data-accordion-item>\n        <!-- Accordion tab title -->\n        <a href=\"home#upload-file\" class=\"accordion-title\">Upload File</a>\n\n        <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->\n        <div id=\"upload-file\" class=\"accordion-content\" data-tab-content>\n          <h5>Select file</h5>\n          <div>\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"fileSelected()\"/>\n          </div>\n          <div ng2FileDrop\n               [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n               (fileOver)=\"fileOverBase($event)\"\n               [uploader]=\"uploader\"\n               class=\"well my-drop-zone\">\n            Drag and drop your interactors file here\n          </div>\n\n          <h5>Upload</h5>\n          <!-- <p>Queue length: {{ uploader?.queue?.length }}</p>-->\n\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th class=\"text-center\" style=\"width: 25%\">Name</th>\n              <th class=\"text-center\">Size</th>\n              <th class=\"text-center\">Progress</th>\n              <th class=\"text-center\">Status</th>\n              <th class=\"text-center\">Actions</th>\n              <th class=\"text-center\">Search</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n              <td class=\"text-center\">\n                <strong>{{ item?.file?.name }}</strong>\n              </td>\n              <td class=\"text-center\" *ngIf=\"uploader.options.isHTML5\" nowrap>\n                {{ item?.file?.size / 1024  | number:'.4' }} KB\n              </td>\n              <td class=\"text-center\" *ngIf=\"uploader.options.isHTML5\">\n                <div class=\"progress\" role=\"progressbar\" tabindex=\"0\" aria-valuemin=\"10\" aria-valuemax=\"100\">\n                  <div class=\"progress-meter\" [ngStyle]=\"{ 'width': item.progress + '%' }\">\n                    <div *ngIf=\"item.progress > 5\" class=\"progress-meter-text\">{{item.progress + '%' }}</div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <span *ngIf=\"item.isSuccess\"><i class=\"icon icon-common icon-check-circle is-success\"></i></span>\n                <span *ngIf=\"item.isCancel\"><i class=\"icon icon-common icon-ban is-cancel\"></i></span>\n                <span *ngIf=\"item.isError\"><i class=\"icon icon-common icon-times-circle is-error\"></i></span>\n              </td>\n              <td class=\"text-center\" nowrap>\n                <button type=\"button\" class=\"button\" (click)=\"item.upload()\"\n                        [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                  <i class=\"icon icon-common icon-upload\"></i> Upload\n                </button>\n                <button type=\"button\" class=\"button\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                  <i class=\"icon icon-common icon-ban\"></i> Cancel\n                </button>\n                <button type=\"button\" class=\"button\" (click)=\"item.remove()\">\n                  <i class=\"icon icon-common icon-trash-alt\"></i> Remove\n                </button>\n              </td>\n              <td class=\"text-center\">\n                <span *ngIf=\"item.isSuccess\">\n                    <button id=\"batch-search-button\" type=\"button\" class=\"button\" name=\"submit\" value=\"1\"\n                            (click)=\"setQuery(response)\" awNextStep>\n                      <i class=\"icon icon-common icon-cogs\"></i> Next Step</button>\n                </span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </li>\n    </ul>\n  </aw-wizard-step>\n\n  <aw-wizard-step [stepTitle]=\"'Resolve terms'\"\n                  [navigationSymbol]=\"{ symbol: '&#xf085;', fontFamily: 'EBI-Common'}\">\n    <div class=\"margin-top-xlarge margin-bottom-xlarge\">\n      <div *ngIf=\"dataReceived; else loadingSpinner\">\n        <h5 class=\"margin-bottom-medium\">Resolved Identifiers</h5>\n        <div class=\"terms-resolution-container\">\n          <table [ngClass]=\"{'margin-bottom-none': !hasNotFoundEntries, 'dataTable': true, 'stripe': true}\">\n            <thead>\n            <tr>\n              <th>Input Term</th>\n              <th>Include</th>\n              <th>Preview</th>\n              <th>ID</th>\n              <th>Description</th>\n              <th>Species</th>\n              <th>Type</th>\n              <th>IntAct Ac</th>\n              <th>Interaction Count</th>\n            </tr>\n            </thead>\n            <tbody *ngFor=\"let entry of foundEntries; let j = index;\">\n            <tr *ngFor=\"let interactor of entry.content; let i = index;\"\n                [ngClass]=\"{'odd': i % 2 !== 0, 'even': i % 2 ===0}\" style=\"position: relative\">\n              <td [rowSpan]=\"entry.totalElements <= 50 ? entry.totalElements : 51\" *ngIf=\"i === 0\" class=\"sticky-cell\">\n                <div>\n                  <div class=\"select-buttons\">\n                    <span>{{entry.term}}</span>\n                    <button class=\"button outlined tight-focus\" (click)=\"selectAll(entry.term)\">Select all</button>\n                    <button class=\"button outlined tight-focus\" (click)=\"unselectAll(entry.term)\">Unselect all</button>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div>\n                  <input type=\"checkbox\" checked name=\"interactor\" [attr.group]=\"entry.term\"\n                         [value]=\"interactor.interactorAc\" (change)=\"onInteractorSelection($event)\">\n                </div>\n              </td>\n              <td>\n                <ip-node-diagram [color]=\"interactor.interactorColor\" [shape]=\"nodeShape[interactor.interactorShape]\"\n                                 [label]=\"interactor.interactorName\" [height]=\"'35pt'\"></ip-node-diagram>\n              </td>\n              <td>{{ interactor.interactorPreferredIdentifier }}</td>\n              <td>{{ interactor.interactorDescription }}</td>\n              <td>{{ interactor.interactorSpecies}}</td>\n              <td>{{ interactor.interactorType }}</td>\n              <td>{{ interactor.interactorAc }}</td>\n              <td>{{ interactor.interactionCount }}</td>\n            </tr>\n            <tr *ngIf=\"!entry.last\" class=\"other-interactors\">\n              <td>\n                <div>\n                  <input type=\"checkbox\" checked name=\"completion\" [attr.group]=\"entry.term\"\n                         [value]=\"entry.term\" (change)=\"onCompletionSelection($event)\">\n                </div>\n              </td>\n              <td colspan=\"7\">\n                {{entry.totalElements - 50}} other interactors\n              </td>\n            </tr>\n            <tr class=\"separator\" *ngIf=\"j < foundEntries.length - 1\">\n              <td colspan=\"9\">\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <mat-expansion-panel *ngIf=\"hasNotFoundEntries\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <h5>Terms not found</h5>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>{{notFoundEntries}}</p>\n          </mat-expansion-panel>\n        </div>\n      </div>\n      <ng-template #loadingSpinner>\n        <mat-spinner class=\"float-center\"></mat-spinner>\n      </ng-template>\n    </div>\n\n    <div class=\"button-bar\">\n      <div class=\"button-group\">\n        <button class=\"button\" type=\"button\" (click)=\"selectAll()\">Select all</button>\n        <button class=\"button\" type=\"button\" (click)=\"unselectAll()\">Unselect all</button>\n      </div>\n\n      <div class=\"button-group float-right\">\n        <button class=\"button\" type=\"button\" awPreviousStep (click)=\"resetSecondStep()\">Previous Step</button>\n        <button class=\"button\" type=\"button\" awNextStep [disabled]=\"!dataReceived\"\n                (click)=\"collectNextPagesInteractors()\">\n          <i class=\"icon icon-common icon-cogs\"></i> Search\n        </button>\n      </div>\n    </div>\n\n  </aw-wizard-step>\n  <aw-wizard-step stepTitle=\"Collect interactors\" [navigationSymbol]=\"{ symbol: '&#xf002;', fontFamily: 'EBI-Common'}\">\n    <div class=\"small-5 small-centered columns\" *ngIf=\"entriesToComplete.size > 0\">\n      <mat-progress-spinner color=\"primary\" mode=\"determinate\" [value]=\"acCollectionProgress\" style=\"margin:0 auto;\">\n      </mat-progress-spinner>\n      <div style=\"text-align: center\">\n        <h5>Gathering missing interactors</h5>\n        <p>{{interactorsQueried}} / {{totalInteractorsToQuery}}</p>\n      </div>\n    </div>\n\n    <div class=\"button-group float-right\">\n      <button class=\"button\" type=\"button\" (click)=\"resetThirdStep()\" awPreviousStep>Previous Step</button>\n    </div>\n  </aw-wizard-step>\n</aw-wizard>\n"

/***/ }),

/***/ "./src/app/home-dashboard/batch-search/batch-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interactions_shared_model_network_shapes_node_shape__ = __webpack_require__("./src/app/interactions/shared/model/network-shapes/node-shape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_ws;
let BatchSearchComponent = class BatchSearchComponent {
    constructor(search) {
        this.search = search;
        this._dataReceived = false;
        this._foundEntries = [];
        this._notFoundEntries = [];
        this._entriesToComplete = new Map();
        this._interactorAcs = new Set();
        this._totalInteractorsToQuery = 0;
        this._interactorsQueried = 0;
        this._acCollectionProgress = 0;
        this.collectionReset = false;
        this.nodeShape = __WEBPACK_IMPORTED_MODULE_4__interactions_shared_model_network_shapes_node_shape__["a" /* NodeShape */];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["b" /* FileUploader */]({
            url: `${baseURL}/interactor/uploadFile/`,
            disableMultipart: false
        });
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
            this.search.title = item.file.name;
        };
        this.hasBaseDropZoneOver = false;
        this.response = '';
        this.uploader.response.subscribe(res => this.response = res);
    }
    resolveSearch() {
        this.search.resolveSearch(this.query)
            .subscribe(data => {
            this.splitData(data);
        });
    }
    splitData(data) {
        for (const key of Object.keys(data)) {
            const entry = data[key];
            if (entry.totalElements !== 0) {
                entry.term = key;
                entry.content.forEach(interactor => this._interactorAcs.add(interactor.interactorAc));
                if (!entry.last) {
                    this._entriesToComplete.set(key, entry);
                }
                // let i = 0;
                // for (i; i < this._foundEntries.length; i++) {
                //   if (this._foundEntries[i].totalElements < entry.totalElements) {
                //     break;
                //   }
                // }
                // this._foundEntries.splice(i, 0, entry)
                this._foundEntries.push(entry);
            }
            else {
                this._notFoundEntries.push(key);
            }
        }
        this.dataReceived = true;
    }
    batchSearch() {
        this.search.batchSearch(Array.from(this.interactorAcs.values()).join('\n'));
    }
    validateSearchBox(query) {
        this.search.title = query;
        this.setQuery(query);
    }
    setQuery(response) {
        this.query = response;
    }
    fileOverBase(e) {
        this.hasBaseDropZoneOver = e;
    }
    fileSelected() {
        console.log('FileSelected');
    }
    selectAll(term) {
        const inputs = term ? $(`input[group='${term}']:checkbox`) : $(`input:checkbox`);
        inputs
            .prop('checked', true)
            .each((i, checkBox) => {
            const checkbox = $(checkBox);
            if (checkbox.attr('name') === 'interactor') {
                this._interactorAcs.add(checkbox.val());
            }
            else {
                const entry = this._foundEntries.find(value => value.term === term);
                this._entriesToComplete.set(term, entry);
            }
        });
    }
    unselectAll(term) {
        const inputs = term ? $(`input[group='${term}']:checkbox`) : $(`input:checkbox`);
        inputs
            .prop('checked', false)
            .each((i, checkBox) => {
            const checkbox = $(checkBox);
            if (checkbox.attr('name') === 'interactor') {
                this._interactorAcs.delete(checkbox.val());
            }
            else {
                this._entriesToComplete.delete(term);
            }
        });
    }
    onInteractorSelection(event) {
        if (event.target.checked) {
            this._interactorAcs.add(event.target.value);
        }
        else {
            this._interactorAcs.delete(event.target.value);
        }
    }
    onCompletionSelection(event) {
        const term = event.target.value;
        if (event.target.checked) {
            const entry = this._foundEntries.find(value => value.term === term);
            this._entriesToComplete.set(term, entry);
        }
        else {
            this._entriesToComplete.delete(term);
        }
    }
    collectNextPagesInteractors(entriesToComplete, page = 1) {
        if (page === 1) {
            entriesToComplete = Array.from(this._entriesToComplete.values());
            if (entriesToComplete.length === 0) {
                return this.batchSearch();
            }
            this._totalInteractorsToQuery = entriesToComplete.reduce((total, entry) => total + entry.totalElements - 50, 0);
        }
        if (this.collectionReset) {
            this.collectionReset = false;
            return;
        }
        const query = entriesToComplete.map(entry => entry.term).join(', ');
        this.search.resolveSearch(query, page, 50).subscribe(data => {
            const nextEntriesToComplete = [];
            for (const key of Object.keys(data)) {
                const entry = data[key];
                entry.term = key;
                entry.content.forEach(interactor => {
                    this._interactorAcs.add(interactor.interactorAc);
                    this._interactorsQueried++;
                    this._acCollectionProgress = (this._interactorsQueried / this._totalInteractorsToQuery) * 100;
                });
                if (!entry.last) {
                    nextEntriesToComplete.push(entry);
                }
            }
            if (nextEntriesToComplete.length !== 0) {
                this.collectNextPagesInteractors(nextEntriesToComplete, page + 1);
            }
            else {
                this.batchSearch();
            }
        });
    }
    resetSteps() {
        this.resetSecondStep();
        this.resetThirdStep();
    }
    resetSecondStep() {
        this._foundEntries = [];
        this._notFoundEntries = [];
        this._dataReceived = false;
        this._entriesToComplete.clear();
        this._totalInteractorsToQuery = 0;
        this._interactorsQueried = 0;
        this._acCollectionProgress = 0;
        this._interactorAcs.clear();
    }
    resetThirdStep() {
        this._totalInteractorsToQuery = 0;
        this._interactorsQueried = 0;
        this._acCollectionProgress = 0;
        this.collectionReset = true;
        this._interactorAcs.clear();
        $('input[name="interactor"]').each((i, input) => {
            if (input.checked) {
                this.interactorAcs.add(input.value);
            }
        });
    }
    get query() {
        return this._query;
    }
    set query(query) {
        this._query = query;
    }
    get uploader() {
        return this._uploader;
    }
    set uploader(value) {
        this._uploader = value;
    }
    get hasBaseDropZoneOver() {
        return this._hasBaseDropZoneOver;
    }
    set hasBaseDropZoneOver(value) {
        this._hasBaseDropZoneOver = value;
    }
    get response() {
        return this._response;
    }
    set response(value) {
        this._response = value;
    }
    get dataReceived() {
        return this._dataReceived;
    }
    set dataReceived(value) {
        this._dataReceived = value;
    }
    get foundEntries() {
        return this._foundEntries;
    }
    get hasNotFoundEntries() {
        return this._notFoundEntries.length !== 0;
    }
    get notFoundEntries() {
        return this._notFoundEntries.join(' ');
    }
    get entriesToComplete() {
        return this._entriesToComplete;
    }
    get totalInteractorsToQuery() {
        return this._totalInteractorsToQuery;
    }
    get interactorsQueried() {
        return this._interactorsQueried;
    }
    get acCollectionProgress() {
        return this._acCollectionProgress;
    }
    get interactorAcs() {
        return this._interactorAcs;
    }
};
BatchSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-batch-search',
        template: __webpack_require__("./src/app/home-dashboard/batch-search/batch-search.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/batch-search/batch-search.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__search_service_search_service__["a" /* SearchService */]])
], BatchSearchComponent);



/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  font-size: 105%;\n  color: #4d4d4d;\n  font-weight: 600;\n}\n\ni {\n  font-size: 15pt;\n  vertical-align: center;\n}\n\n.month {\n  font-size: small;\n  font-weight: bold;\n}\n\n.year {\n  position: sticky;\n  top: 20%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 25px;\n  color: white;\n  background-color: #68297c;\n\n}\n\ntable {\n  margin-bottom: 0;\n  border: none;\n}\n\ntd, th, tbody {\n  border:none;\n}\n\n.accordion-content {\n  padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dataset_archive\" class=\"row\">\n  <div class=\"sticky-container\">\n    <h3 class=\"columns margin-bottom-xlarge margin-top-medium text-justify\">\n      Featured datasets - Archive\n    </h3>\n  </div>\n\n  <div *ngFor=\"let datasetsOfYear of datasetsByYear\" class=\"column\">\n    <ip-dataset-by-year [year]=\"datasetsOfYear.group\" [datasets]=\"datasetsOfYear.elements\"></ip-dataset-by-year>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetArchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_feature_dataset_service__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/service/feature-dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_array_utils__ = __webpack_require__("./src/app/shared/utils/array-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DatasetArchiveComponent = class DatasetArchiveComponent {
    constructor(featureDatasetService) {
        this.featureDatasetService = featureDatasetService;
    }
    ngOnInit() {
        this.requestDatasetArchive();
    }
    requestDatasetArchive() {
        this.featureDatasetService.getFeaturedDataset().subscribe(data => {
            this.featuredDatasets = data.datasets;
            this.datasetsByYear = Object(__WEBPACK_IMPORTED_MODULE_2__shared_utils_array_utils__["a" /* groupBy */])(this.featuredDatasets, element => element.year);
        });
    }
};
DatasetArchiveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-dataset-archive',
        template: __webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_feature_dataset_service__["a" /* FeatureDatasetService */]])
], DatasetArchiveComponent);



/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  font-size: 105%;\n  color: #4d4d4d;\n  font-weight: 600;\n}\n\ni {\n  font-size: 15pt;\n  vertical-align: center;\n}\n\n.month {\n  font-size: small;\n  font-weight: bold;\n}\n\n.year {\n  position: sticky;\n  top: 20%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 25px;\n  color: white;\n  background-color: #68297c;\n  /*background-color: #b46eb4;*/\n}\n\ntable {\n  margin-bottom: 0;\n  border: none;\n}\n\ntd, th, tbody {\n  border:none;\n  padding-left: 1em;\n}\n\ntr {\n  /*background-color: #ffedff;*/\n}\n\ntr:nth-child(even) {\n  /*background-color: #f8e0ff;*/\n}\n\n.accordion-content {\n  padding: 0;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\" style=\"position: relative\">\n\n  <h4 class=\"column small-1 align-right year\">{{year}}</h4>\n  <ul class=\"column small-11 align-left accordion\" data-accordion data-deep-link=\"false\" data-update-history=\"false\"\n      data-allow-all-closed=\"true\" id=\"accordion-{{year}}\" data-deep-link-smudge=\"true\">\n    <li class=\"accordion-item\" data-accordion-item *ngFor=\"let dataset of datasets\">\n\n      <a href=\"featured-dataset/archive#{{dataset.month}}-{{dataset.year}}\" class=\"accordion-title\">\n        <span class=\"month\">{{dataset.month}} - </span>\n        {{dataset.title}}\n      </a>\n\n      <div class=\"accordion-content\" data-tab-content id=\"{{dataset.month}}-{{dataset.year}}\">\n        <table>\n          <tbody>\n          <tr *ngFor=\"let pubmed of dataset.pubmeds\">\n            <td *ngIf=\"hasPubMedId(pubmed); else noID\">\n              <a href=\"https://europepmc.org/article/MED/{{pubmed.id}}?singleResult=true\" target=\"_blank\">\n                <b>{{pubmed.author}} ({{pubmed.year || dataset.year}})</b>\n              </a>\n            </td>\n            <ng-template #noID>\n              <td><b class=\"tool-tip\">{{pubmed.author}} ({{pubmed.year}})<span class=\"tool-tip-text\">Article only available as a preprint</span></b></td>\n            </ng-template>\n            <td style=\"text-align: right\">\n              <button mat-raised-button color=\"accent\" (click)=\"goPSIMI25FTP(pubmed.year || dataset.year, pubmed.id)\">\n                <i class=\"icon icon-common icon-download\"></i> PSI-MI XML 2.5\n              </button>\n              <button mat-raised-button color=\"accent\" (click)=\"goPSIMITABFTP(pubmed.year || dataset.year, pubmed.id)\">\n                <i class=\"icon icon-common icon-download\"></i> PSI-MI TAB 2.7\n              </button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetByYearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


const intactFTP_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_psi25_url;
const intactFTPMiTab_URL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_psimitab_url;
let DatasetByYearComponent = class DatasetByYearComponent {
    constructor() {
    }
    ngAfterViewInit() {
        $(`#accordion-${this.year}`).foundation();
        $('.accordion-title').on('mouseup', function () {
            const $accordionItem = $(this).parent(), 
            // is the section hidden? if the section is not yet visible, the click is to open it
            opening = ($accordionItem.find('.accordion-content:hidden').length === 1);
            //
            if (opening) {
                // the accordion that has just been clicked
                const $currentAccordion = $accordionItem.parent();
                // close all other accodions
                $('.accordion').each(function () {
                    const $acc = $(this);
                    // ignore the accordion that was just clicked
                    if ($acc[0] !== $currentAccordion[0]) {
                        // find any open sections
                        const $openSections = $acc.find('.accordion-item.is-active .accordion-content');
                        $openSections.each(function (i, section) {
                            // close them
                            $acc.foundation('up', $(section));
                        });
                    }
                });
            }
        });
    }
    goPSIMI25FTP(pubmedYear, pubmedId) {
        window.open(intactFTP_URL + `/pmid/${pubmedYear}/${pubmedId}.zip`);
    }
    goPSIMITABFTP(pubmedYear, pubmedId) {
        window.open(intactFTPMiTab_URL + `/${pubmedYear}/${pubmedId}.txt`);
    }
    hasPubMedId(pubMed) {
        return !pubMed.id.toString().includes('unassigned');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DatasetByYearComponent.prototype, "year", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], DatasetByYearComponent.prototype, "datasets", void 0);
DatasetByYearComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-dataset-by-year',
        template: __webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DatasetByYearComponent);



/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/featured-dataset.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#5ca23561;\n}\n\n\n#dataset-group > .button {\n  margin-right: 1px !important;\n  margin-bottom: 1px !important;\n  width: calc(50% - 0.5px);\n}\n\n\n#dataset-group .button:last-of-type {\n  margin-right: 0 !important;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/featured-dataset.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dataset\" class=\"margin-top-large\">\n  <h4 class=\"margin-bottom-large\">\n    <i class=\"icon icon-generic\" data-icon=\"D\"></i> Featured Dataset\n  </h4>\n\n  <div>\n    <div class=\"text-justify margin-bottom-large\">{{dataset.title}} - <b>{{firstPubmed.author}}</b></div>\n\n    <div class=\"expanded no-margin button-group stacked-for-medium\" id=\"dataset-group\">\n\n      <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"access\">\n        <i class=\"icon icon-common icon-search\"></i>\n        Access\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"access\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n          <li><a class=\"button lightest expanded no-margin\" (click)=\"onIntActSearch()\">IntAct</a></li>\n          <li><a class=\"button lightest expanded no-margin\" [href]=\"pubMedUrl()\">Europe PMC</a></li>\n        </ul>\n      </div>\n\n      <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"download\">\n        <i class=\"icon icon-functional icon-download\"></i> Download\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"download\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n          <li>\n            <a class=\"button lightest expanded no-margin\" download target=\"_blank\"\n               [href]=\"miTabUrl()\">miTab<sub>2.7</sub></a>\n          </li>\n          <li>\n            <a class=\"button lightest expanded no-margin\" download target=\"_blank\"\n               [href]=\"miXmlUrl()\">miXML<sub>2.5</sub></a>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n    <div class=\"archive\">\n      <a class=\"button outlined expanded no-margin\" [routerLink]=\"archiveUrl()\">\n        <i class=\"icon icon-generic\" data-icon=\";\"></i>\n        Archive\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/featured-dataset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedDatasetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_feature_dataset_service__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/service/feature-dataset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_foundation_utils__ = __webpack_require__("./src/app/shared/utils/foundation-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const intactFTP_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_psi25_url;
const intactFTPMiTab_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_psimitab_url;
let FeaturedDatasetComponent = class FeaturedDatasetComponent {
    constructor(featureDatasetService, router, search) {
        this.featureDatasetService = featureDatasetService;
        this.router = router;
        this.search = search;
    }
    ngOnInit() {
        this.requestDOTM();
    }
    requestDOTM() {
        this.featureDatasetService.getFeaturedDataset().subscribe(response => {
            this.dataset = response.datasets[0];
        });
    }
    onIntActSearch() {
        this.search.search(this.firstPubmed.id);
    }
    ngAfterViewInit() {
        $('#dataset-group').foundation();
        __WEBPACK_IMPORTED_MODULE_3__shared_utils_foundation_utils__["a" /* FoundationUtils */].adjustWidth();
    }
    get firstPubmed() {
        return this.dataset.pubmeds[0];
    }
    pubMedUrl() {
        return `https://europepmc.org/article/MED/${this.firstPubmed.id}`;
    }
    miXmlUrl() {
        return `${intactFTP_URL}/pmid/${this.firstPubmed.year}/${this.firstPubmed.id}.zip`;
    }
    miTabUrl() {
        return `${intactFTPMiTab_URL}/${this.firstPubmed.year}/${this.firstPubmed.id}.txt`;
    }
    archiveUrl() {
        return '/featured-dataset/archive';
    }
};
FeaturedDatasetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-featured-dataset',
        template: __webpack_require__("./src/app/home-dashboard/featured-dataset/featured-dataset.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/featured-dataset/featured-dataset.component.css"), __webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_feature_dataset_service__["a" /* FeatureDatasetService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__search_service_search_service__["a" /* SearchService */]])
], FeaturedDatasetComponent);



/***/ }),

/***/ "./src/app/home-dashboard/featured-dataset/service/feature-dataset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureDatasetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__ = __webpack_require__("./src/app/shared/service/google-analytics/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let FeatureDatasetService = class FeatureDatasetService {
    constructor(http, reporter) {
        this.http = http;
        this.reporter = reporter;
        this.API_URL = 'https://raw.githubusercontent.com/intact-portal/intact-portal-feature-datasets/main/feature-datasets.json';
    }
    getFeaturedDataset() {
        return this.http.get(this.API_URL, { responseType: 'json' })
            .catch(this.handleError);
    }
    handleError(err) {
        this.reporter.reportError(err);
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
FeatureDatasetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */]])
], FeatureDatasetService);



/***/ }),

/***/ "./src/app/home-dashboard/home-dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_dashboard_component__ = __webpack_require__("./src/app/home-dashboard/home-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__featured_dataset_dataset_archive_dataset_archive_component__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_dashboard_component__["a" /* HomeDashboardComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'featured-dataset/archive',
        component: __WEBPACK_IMPORTED_MODULE_3__featured_dataset_dataset_archive_dataset_archive_component__["a" /* DatasetArchiveComponent */],
        data: { showCompactHeader: false, showFooter: true }
    }
];
let HomeDashboardRoutingModule = class HomeDashboardRoutingModule {
};
HomeDashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)]
    })
], HomeDashboardRoutingModule);



/***/ }),

/***/ "./src/app/home-dashboard/home-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".callout-twitter {\n  background-color: #1bc0ea73; /*#1bc0ea8c;*/\n  border-radius: 8px;\n}\n.callout-latest-news {\n  background-color: #8d3ab336;\n  border-radius: 8px;\n}\n.callout-featured-dataset {\n  background-color: #5ca23561;\n  border-radius: 8px;\n}\n\n"

/***/ }),

/***/ "./src/app/home-dashboard/home-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\">\n\n  <div class=\"columns medium-12\">\n    <div class=\"columns medium-9\">\n      <div class=\"columns small-12 medium-12 margin-top-large\">\n        <ip-home-description></ip-home-description>\n      </div>\n      <div class=\"columns small-12 medium-12 margin-top-xlarge\">\n        <ip-search></ip-search>\n      </div>\n      <div class=\"columns small-12 medium-12 margin-top-xlarge\">\n        <ip-tile-menu></ip-tile-menu>\n      </div>\n    </div>\n\n    <div class=\"columns medium-3\">\n      <div class=\"row margin-top-large\">\n        <ip-newsletter-subscription></ip-newsletter-subscription>\n      </div>\n      <div class=\"row\">\n          <ip-featured-dataset></ip-featured-dataset>\n      </div>\n      <div class=\"row\">\n          <ip-news></ip-news>\n      </div>\n      <div class=\"row\">\n          <ip-twitter-display></ip-twitter-display>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/home-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomeDashboardComponent = class HomeDashboardComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct');
    }
};
HomeDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-home-dashboard',
        template: __webpack_require__("./src/app/home-dashboard/home-dashboard.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/home-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], HomeDashboardComponent);



/***/ }),

/***/ "./src/app/home-dashboard/home-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDashboardModule", function() { return HomeDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_description_home_description_component__ = __webpack_require__("./src/app/home-dashboard/home-description/home-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_menu_tile_menu_component__ = __webpack_require__("./src/app/home-dashboard/tile-menu/tile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("./src/app/home-dashboard/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_dashboard_component__ = __webpack_require__("./src/app/home-dashboard/home-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_dashboard_routing_module__ = __webpack_require__("./src/app/home-dashboard/home-dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newsletter_subscription_newsletter_subscription_component__ = __webpack_require__("./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twitter_display_twitter_display_component__ = __webpack_require__("./src/app/home-dashboard/twitter-display/twitter-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__featured_dataset_featured_dataset_component__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/featured-dataset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_news_component__ = __webpack_require__("./src/app/home-dashboard/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__featured_dataset_dataset_archive_dataset_archive_component__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__advanced_search_advanced_search_component__ = __webpack_require__("./src/app/home-dashboard/advanced-search/advanced-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__ = __webpack_require__("./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_query_builder__ = __webpack_require__("./node_modules/angular2-query-builder/dist/angular2-query-builder/esm5/angular2-query-builder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__batch_search_batch_search_component__ = __webpack_require__("./src/app/home-dashboard/batch-search/batch-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_archwizard__ = __webpack_require__("./node_modules/angular-archwizard/fesm2015/angular-archwizard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_keyvaluemap_pipe__ = __webpack_require__("./src/app/home-dashboard/shared/keyvaluemap.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__featured_dataset_dataset_archive_dataset_by_year_dataset_by_year_component__ = __webpack_require__("./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__layout_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__("./src/app/layout/loading-indicators/progress-spinner/progress-spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_components_components_module__ = __webpack_require__("./src/app/shared/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__advanced_search_MIQL_pipe__ = __webpack_require__("./src/app/home-dashboard/advanced-search/MIQL.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__advanced_search_colorMIQL_pipe__ = __webpack_require__("./src/app/home-dashboard/advanced-search/colorMIQL.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























let HomeDashboardModule = class HomeDashboardModule {
};
HomeDashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_15_angular2_query_builder__["b" /* QueryBuilderModule */],
            __WEBPACK_IMPORTED_MODULE_6__home_dashboard_routing_module__["a" /* HomeDashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_file_upload__["a" /* FileUploadModule */],
            __WEBPACK_IMPORTED_MODULE_17_angular_archwizard__["a" /* ArchwizardModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_material_card__["a" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_25__layout_loading_indicators_progress_spinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_26__shared_components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_18__shared_keyvaluemap_pipe__["a" /* KeyvaluemapPipe */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_dashboard_component__["a" /* HomeDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_2__home_description_home_description_component__["a" /* HomeDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_3__tile_menu_tile_menu_component__["a" /* TileMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__newsletter_subscription_newsletter_subscription_component__["a" /* NewsletterSubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_8__twitter_display_twitter_display_component__["a" /* TwitterDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_9__featured_dataset_featured_dataset_component__["a" /* FeaturedDatasetComponent */],
            __WEBPACK_IMPORTED_MODULE_10__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__featured_dataset_dataset_archive_dataset_archive_component__["a" /* DatasetArchiveComponent */],
            __WEBPACK_IMPORTED_MODULE_12__advanced_search_advanced_search_component__["a" /* AdvancedSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_16__batch_search_batch_search_component__["a" /* BatchSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__shared_keyvaluemap_pipe__["a" /* KeyvaluemapPipe */],
            __WEBPACK_IMPORTED_MODULE_24__featured_dataset_dataset_archive_dataset_by_year_dataset_by_year_component__["a" /* DatasetByYearComponent */],
            __WEBPACK_IMPORTED_MODULE_27__advanced_search_MIQL_pipe__["a" /* MIQLPipe */],
            __WEBPACK_IMPORTED_MODULE_28__advanced_search_colorMIQL_pipe__["a" /* ColorMIQLPipe */]
        ]
    })
], HomeDashboardModule);



/***/ }),

/***/ "./src/app/home-dashboard/home-description/home-description.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-dashboard/home-description/home-description.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>IntAct Molecular Interaction Database</h1>\n<p>\n  IntAct provides a freely available, open source database system and analysis tools for molecular interaction data.\n  All interactions are derived from literature curation or direct user submissions and are freely available.\n  The IntAct Team also produces the <a href=\"https://www.ebi.ac.uk/complexportal\" target=\"_blank\">Complex Portal</a>.\n</p>\n"

/***/ }),

/***/ "./src/app/home-dashboard/home-description/home-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let HomeDescriptionComponent = class HomeDescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeDescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-home-description',
        template: __webpack_require__("./src/app/home-dashboard/home-description/home-description.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/home-description/home-description.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeDescriptionComponent);



/***/ }),

/***/ "./src/app/home-dashboard/news/news.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#8d3ab336;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"news\" class=\"margin-top-large\">\n  <h4 class=\"margin-bottom-large\">\n    <i class=\"icon icon-generic\" data-icon=\"N\"></i> Latest News\n  </h4>\n\n  <div id=\"releaseVersion\" class=\"margin-top-medium padding-top-medium padding-left-medium padding-right-medium\">\n    <h6><i class=\"icon icon-generic\" data-icon=\"r\"></i> New Intact View version: {{version}}</h6>\n    <p style=\"margin-left: 1.6rem\"> Release Date: {{releaseDate}}</p>\n\n    <h6><i class=\"icon icon-generic\" data-icon=\"g\"></i> Data Content</h6>\n    <ul style=\"margin-left: 1.6rem\">\n      <li>Publications: {{publications}}</li>\n      <li>Interactors: {{interactors}}</li>\n      <li>Interactions: {{interactions}}</li>\n    </ul>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NewsComponent = class NewsComponent {
    constructor() {
        this.version = '1.0.0';
        this.environmentName = 'dev';
        this.releaseDate = 'September 2021';
        this.publications = '22496';
        this.interactors = '117664';
        this.interactions = '1144360';
    }
    ngOnInit() {
    }
};
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-news',
        template: __webpack_require__("./src/app/home-dashboard/news/news.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/news/news.component.css"), __webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsComponent);



/***/ }),

/***/ "./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color: #eea8a8;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"mc_embed_signup\">\n  <form ngNoForm action=\"//ebi.us9.list-manage.com/subscribe/post?u=d50725c1556266fd605025eaf&id=91a036cbb0\" method=\"post\"\n        id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <div id=\"mc_embed_signup_scroll\">\n      <h4><i class=\"icon icon-generic\" data-icon=\"m\"></i> Newsletter</h4>\n\n      <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n        <input type=\"text\" name=\"b_d50725c1556266fd605025eaf_91a036cbb0\" tabindex=\"-1\" value=\"\">\n      </div>\n\n      <div class=\"clear\">\n        <input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\">\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsletterSubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NewsletterSubscriptionComponent = class NewsletterSubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsletterSubscriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-newsletter-subscription',
        template: __webpack_require__("./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsletterSubscriptionComponent);



/***/ }),

/***/ "./src/app/home-dashboard/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "/************** SEARCH SECTION *******************************/\n\n#div-quick-search .tabs-panel {\n  background: #cec2d4 !important;\n}\n\n/*#search-tabs{*/\n\n/*  border: 1px solid #cec2d4;*/\n\n/*}*/\n\n/*#search .tabs-title > a {*/\n\n/*  font-size: 0.9rem;*/\n\n/*  color: #3e3e3e;*/\n\n/*}*/\n\n/*#search .tabs-title > a:hover {*/\n\n/*  background: #672e7b85;!*#7d96a75c; !*#57b2b787*!*/\n\n/*  color: #0a0a0a;*/\n\n/*}*/\n\n/*#search .tabs-title > a:focus,*/\n\n/*#search .tabs-title > a[aria-selected='true'] {*/\n\n/*  color: #3e3e3e;*/\n\n/*  background: rgba(90, 46, 110, 0.29);*/\n\n/*}*/\n\n.callout-advanced {\n  background-color: #f6f4f6;\n  border-radius: 5px;\n  border: 1px solid #CCC;\n}\n\n/************** END SEARCH SECTION *******************************/\n"

/***/ }),

/***/ "./src/app/home-dashboard/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search\" class=\"row\">\n\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"search-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"home#quick-search\" aria-selected=\"true\">Quick Search</a></li>\n    <li class=\"tabs-title\"><a href=\"home#batch-search\">Batch Search</a></li>\n    <!-- We disable the advance search for now until we are able to provide it to the users-->\n    <li class=\"tabs-title\"><a href=\"home#advanced-search\">Advanced Search</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"search-tabs\">\n\n    <!--TAB MAIN SEARCH SECTION-->\n    <div id=\"div-quick-search\">\n      <div class=\"tabs-panel is-active\" id=\"quick-search\">\n        <fieldset>\n          <div id=\"searchBox\" class=\"input-group margin-bottom-none\">\n            <input #query class=\"typeahead input-group-field\" type=\"text\" id=\"query\"\n                   (keydown.enter)=\"search(query.value, 'enter')\"\n                   placeholder=\"Search by gene names, UniProt ACs, Pubmed, protein names, Complex ACs\"/>\n            <div class=\"input-group-button\">\n              <input id=\"home-search-button\" type=\"button\" name=\"submit\" value=\"1\"\n                     (click)=\"search(query.value, 'button')\"\n                     class=\"button icon icon-functional\">\n            </div>\n          </div>\n          <div class=\"columns margin-top-large\">\n            <h5><i class=\"icon icon-generic padding-right-medium intact-color\" data-icon=\"?\"></i>Examples:</h5>\n            <div class=\"columns medium-4\">\n              <ul class=\"no-margin no-padding\">\n                <li>Gene names: <a (click)=\"search('Ndc80', 'example')\">Ndc80</a></li>\n                <li>UniProt ACs: <a (click)=\"search('Q05471', 'example')\">Q05471</a></li>\n              </ul>\n            </div>\n            <div class=\"columns medium-4\">\n              <ul class=\"no-margin no-padding\">\n                <li>Taxon IDs: <a (click)=\"search('9606', 'example')\">9606</a></li>\n                <li>Publication IDs: <a (click)=\"search('32353859', 'example')\">32353859</a></li>\n              </ul>\n            </div>\n            <div class=\"columns medium-4\">\n              <ul class=\"no-margin no-padding\">\n                <li>Complex ACs: <a (click)=\"search('CPX-5742', 'example')\">CPX-5742</a></li>\n                <li>GO terms: <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a></li>\n              </ul>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n\n    <!--TAB BATCH SEARCH SECTION-->\n    <div class=\"tabs-panel\" id=\"batch-search\">\n      <ip-batch-search></ip-batch-search>\n    </div>\n\n    <!--TAB ADVANCED SECTION-->\n    <div class=\"tabs-panel\" id=\"advanced-search\">\n      <ip-advanced-search></ip-advanced-search>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_ws;
let SearchComponent = class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('ip-search').foundation();
        this.searchService.searchSuggestions($('#searchBox .typeahead'));
    }
    search(query, typeOfButton) {
        if (query) {
            this.searchService.search(query);
            if (typeOfButton === 'enter' || typeOfButton === 'button') {
                this.searchService.title = query;
            }
        }
    }
};
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-search',
        template: __webpack_require__("./src/app/home-dashboard/search/search.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_search_service__["a" /* SearchService */]])
], SearchComponent);



/***/ }),

/***/ "./src/app/home-dashboard/search/service/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_google_analytics_google_analytics_service__ = __webpack_require__("./src/app/shared/service/google-analytics/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__advanced_search_colorMIQL_pipe__ = __webpack_require__("./src/app/home-dashboard/advanced-search/colorMIQL.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







const baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].intact_portal_ws;
let SearchService = SearchService_1 = class SearchService {
    constructor(router, http, reporter) {
        this.router = router;
        this.http = http;
        this.reporter = reporter;
        this._isBatchSearch = false;
        this.rand = () => Math.random().toString(36).substr(2);
        this.genToken = (length) => (this.rand() + this.rand() + this.rand() + this.rand()).substr(0, length);
    }
    isAdvancedQuery(query) {
        const isMIQL = __WEBPACK_IMPORTED_MODULE_6__advanced_search_colorMIQL_pipe__["a" /* ColorMIQLPipe */].isMIQL(query);
        if (isMIQL) {
            window.open('query/' + query);
        }
        return isMIQL;
    }
    search(query) {
        this._query = query;
        this._isBatchSearch = false;
        const b = !this.isAdvancedQuery(query);
        console.log(b, query);
        if (b) {
            this.router.navigate(['search'], { queryParams: { query } });
        }
    }
    batchSearch(query) {
        this._query = query;
        this._isBatchSearch = true;
        this.manageTokens();
        this.router.navigate(['search'], { queryParams: { token: this._token, batchSearch: true } });
    }
    manageTokens() {
        this._token = this.genToken(5);
        const query = this._query;
        const title = this._title;
        localStorage.setItem(SearchService_1.localTokenId(this._token), JSON.stringify({ query, title }));
        const tokens = JSON.parse(localStorage.getItem('intact-tokens') || '[]');
        tokens.push(this._token);
        if (tokens.length > 10) {
            localStorage.removeItem(SearchService_1.localTokenId(tokens.shift()));
        }
        localStorage.setItem('intact-tokens', JSON.stringify(tokens));
    }
    speciesSearch(interactome) {
        this._query = interactome.taxid.toString();
        this._title = `${interactome.name}`;
        this._isBatchSearch = false;
        this.router.navigate(['search'], { queryParams: { query: this._query, interactorSpeciesFilter: interactome.name } });
    }
    resolveSearch(query, page = 0, pageSize = 50) {
        this._query = query.trim();
        const params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]()
            .append('query', query)
            .append('page', page.toString())
            .append('pageSize', pageSize.toString());
        return this.http.post(`${baseURL}/interactor/list/resolve`, params)
            .catch(this.handleError);
    }
    handleError(err) {
        this.reporter.reportError(err);
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
    get query() {
        return this._query;
    }
    get spacedQuery() {
        return this._query.replace(/\n/g, ' ');
    }
    set query(value) {
        this._query = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get isBatchSearch() {
        return this._isBatchSearch;
    }
    fromParams(params) {
        if (params.has('query')) {
            this._query = params.get('query');
        }
        else if (params.has('token')) {
            this._token = params.get('token');
            const mem = JSON.parse(localStorage.getItem(SearchService_1.localTokenId(this._token)));
            if (mem) {
                this._query = mem.query;
                this._title = mem.title;
            }
            else {
                this.router.navigate(['']);
            }
        }
        if (params.has('batchSearch')) {
            this._isBatchSearch = params.get('batchSearch') === 'true';
        }
    }
    toURLParams(params = {}) {
        if (this.isBatchSearch) {
            params.token = this._token;
            params.batchSearch = this.isBatchSearch;
        }
        else if (this.query) {
            params.query = this.query.trim();
        }
        return params;
    }
    toParams(params = {}) {
        if (this.query) {
            params.query = this.query.trim();
        }
        if (this.isBatchSearch) {
            params.batchSearch = this.isBatchSearch;
        }
        return params;
    }
    searchSuggestions(searchBox) {
        let updatingPages = false;
        let ignoreChange = false;
        let currentPage = 0;
        let data;
        let bloodhound;
        let suggestionQuery;
        bloodhound = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: `${baseURL}/interactor/findInteractor/%QUERY?page=0&pageSize=10`,
                prepare: (query, settings) => {
                    if (!ignoreChange) {
                        suggestionQuery = query;
                        settings.url = settings.url.replace('%QUERY', query);
                        settings.url = settings.url.replace('page=0', `page=${currentPage}`);
                    }
                    return settings;
                },
                transform: (response) => {
                    data = response;
                    return data.content;
                }
            }
        });
        bloodhound.initialize();
        const limit = 20;
        searchBox.typeahead({
            hint: true,
            highlight: true,
            minLength: 3
        }, {
            name: 'interactors',
            limit: limit,
            source: bloodhound,
            display: function (item) {
                return item.interactorAc;
            },
            templates: {
                header: () => `<h4 class="category-name">Interactors (${data.totalElements} found)</h4>`,
                footer: () => {
                    if (data.totalPages > 1) {
                        return `<div class="alignCell">
                        <button class="button" id="prev" ${data.first ? 'disabled' : ''}><i class="icon icon-common icon-previous-page"></i></button>
                        <button class="button" id="next" ${data.last ? 'disabled' : ''}><i class="icon icon-common icon-next-page"></i></button>
                      </div>`;
                    }
                },
                notFound: '<div class="noResultsSuggestions"> No results found for Interactors</div>',
                suggestion: (item) => `<div class="row expanded">
               <div class="columns large-2 show-for-large">${item.interactorAc}</div>
               <div class="columns small-6 medium-3 large-2">
                ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}
               </div>
               <div class="columns large-2 show-for-large"><i>"${item.interactorDescription}"</i> </div>
               <div class="columns small-6 medium-3 large-2">${item.interactorSpecies}</div>
               <div class="columns medium-3 large-2 show-for-medium"><span class="labelWrapper">${item.interactorType}</span></div>
               <div class="columns medium-3 large-2 show-for-medium"><span class="interactionsWrapper nowrap">${item.interactionCount} interactions</span></div>
             </div>`,
            }
        }).on('typeahead:selected', (ev, item) => {
            // Noe: So far I can't find in the documentation a way to know the dataset of the item selected. This code should improve with that information
            let id;
            if (item.interactorAc === undefined) {
                // We assume is an interaction
                id = item.ac;
            }
            else {
                id = item.interactorAc;
            }
            this.title = `${suggestionQuery} · ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}`;
            this.search(id);
        });
        const updateAutosuggestion = () => {
            updatingPages = true;
            const val = searchBox.typeahead('val');
            ignoreChange = true;
            searchBox.typeahead('val', val + ' ');
            ignoreChange = false;
            searchBox.typeahead('val', val);
            updatingPages = false;
        };
        $(document).on('click', '#prev', () => {
            currentPage--;
            updateAutosuggestion();
        });
        $(document).on('click', '#next', () => {
            currentPage++;
            updateAutosuggestion();
        });
        searchBox.on('input', () => {
            currentPage = 0;
        });
    }
};
SearchService.localTokenId = token => `intact-batch-search-${token}`;
SearchService = SearchService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__shared_service_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */]])
], SearchService);

var SearchService_1;


/***/ }),

/***/ "./src/app/home-dashboard/shared/keyvaluemap.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyvaluemapPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let KeyvaluemapPipe = class KeyvaluemapPipe {
    transform(value) {
        const keys = [];
        for (const key of Object.keys(value)) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    }
};
KeyvaluemapPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: 'keyvaluemap'
    })
], KeyvaluemapPipe);



/***/ }),

/***/ "./src/app/home-dashboard/tile-menu/tile-menu.component.css":
/***/ (function(module, exports) {

module.exports = "/*This avoids the purple coming from the main theme*/\n.industry-background.button:focus {\n  background: #0086b4;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/tile-menu/tile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-grid\" data-equalizer data-equalize-on=\"medium\" id=\"large-button-grid\">\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/interactomes\">\n      <h3 class=\"icon icon-species white-color\" data-icon=\"M\"></h3>\n      <h5 class=\"white-color\">Interactomes</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/download/datasets/\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\";\"></h3>\n      <h5 class=\"white-color\">Datasets</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/download/datasets\"\n       fragment=\"mutations\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"d\"></h3>\n      <h5 class=\"white-color\">Mutations</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/download/ftp\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf019;\"></h3>\n      <h5 class=\"white-color\">FTP</h5></a>\n  </div>\n\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch\n       routerLink=\"/documentation/data_submission\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf093;\"></h3>\n      <h5 class=\"white-color\">Data Submission</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch data-open=\"citationModal\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"P\"></h3>\n      <h5 class=\"white-color\">How To Cite Us</h5></a>\n  </div>\n  <div class=\"reveal\" id=\"citationModal\" data-reveal>\n    <h3>Citing IntAct</h3>\n    <span\n      class=\"lead\">The MIntAct project--IntAct as a common curation platform for 11 molecular interaction databases.</span>\n    1035670 <p>Orchard S et al [PMID: 24234451]</p>\n    <p><i>Nucl. Acids Res. (2013) doi: 10.1093/nar/gkt1115</i></p>\n    <a class=\"button readmore\" href=\"//europepmc.org/article/MED/24234451\" target=\"_blank\">Abstract</a>\n    <a class=\"button readmore\" href=\"//academic.oup.com/nar/article/42/D1/D358/1051282\" target=\"_blank\">Full text</a>\n\n    <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch routerLink=\"/documentation\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf283;\"></h3>\n      <h5 class=\"white-color\">Documentation</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns training-background\" data-equalizer-watch href=\"//www.ebi.ac.uk/training/search-results?query=intact&domain=ebiweb_training&page=1&facets=\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"t\"></h3>\n      <h5 class=\"white-color\">Training</h5></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/tile-menu/tile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TileMenuComponent = class TileMenuComponent {
    constructor() { }
    ngOnInit() {
        $('ip-tile-menu').foundation();
    }
};
TileMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-tile-menu',
        template: __webpack_require__("./src/app/home-dashboard/tile-menu/tile-menu.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/tile-menu/tile-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TileMenuComponent);



/***/ }),

/***/ "./src/app/home-dashboard/twitter-display/twitter-display.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#1bc0ea73;\n}\n\n.twitter-timeline-min-width {\n  min-width: 0px;\n}\n"

/***/ }),

/***/ "./src/app/home-dashboard/twitter-display/twitter-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"twitter\" class=\"margin-top-large\">\n  <h4>\n    <a href=\"https://twitter.com/intact_project\" target=\"_blank\" matTooltip=\"Follow us\" matTooltipPosition=\"left\">\n      <i id=\"twitter-logo\" class=\"icon icon-socialmedia\" data-icon=\"T\"></i>\n    </a> Tweets\n  </h4>\n\n  <div class=\"margin-top-large margin-bottom-large\">\n    <a class=\"twitter-timeline\"\n       data-lang=\"en\"\n       data-height=\"300\"\n       data-theme=\"light\"\n       data-chrome=\"nofooter noheader noborders\"\n       data-link-color=\"#007c82\"\n       href=\"https://twitter.com/intact_project\">\n      Tweets by IntAct</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home-dashboard/twitter-display/twitter-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const twitterURL = 'https://platform.twitter.com/widgets.js';
let TwitterDisplayComponent = class TwitterDisplayComponent {
    constructor() { }
    ngOnInit() {
        this.initTwitterWidget();
    }
    initTwitterWidget() {
        /* tslint:disable */
        window.twttr = (function (d, s, id, call) {
            let js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
            if (d.getElementById(id))
                return t;
            js = d.createElement(s);
            js.id = id;
            js.src = twitterURL;
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };
        })(document, "script", "twitter-wjs", this.reloadWidget());
        /* tslint:enable */
    }
    reloadWidget() {
        try {
            window.twttr.widgets.load(document.getElementById('twitter'));
        }
        catch (ignore) {
            // ignore
        }
    }
};
TwitterDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-twitter-display',
        template: __webpack_require__("./src/app/home-dashboard/twitter-display/twitter-display.component.html"),
        styles: [__webpack_require__("./src/app/home-dashboard/twitter-display/twitter-display.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TwitterDisplayComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\" *ngIf=\"interactionAc; else noInteractor;\">\n  <div class=\"button-bar\">\n    <h2 class=\"padding-left-large\">Details of {{interactionAc}}</h2>\n\n    <div class=\"button-group rounded float-right margin-right-medium\" id=\"detail-export\" style=\"margin-left: 17px;\">\n      <div class=\"button no-hover\">\n        <i class=\"icon icon-functional icon-spacer icon-share\"></i> Export\n      </div>\n\n      <button class=\"button lighter adjust-width no-horizontal-padding\" type=\"button\" data-toggle=\"export-viewer\">\n        View\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"export-viewer\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n          <li><a class=\"button lightest expanded\" download=\"{{interactionAc}}.svg\" id=\"SVG-download\"\n                 (click)=\"exportSVG()\">SVG</a></li>\n        </ul>\n      </div>\n\n      <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"export-table\">\n        Interaction\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"export-table\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n\n          <li *ngFor=\"let format of formatTypes; let last = last;\">\n            <a class=\"button lightest expanded\" [ngClass]=\"{'no-margin':last}\"\n            download [href]=\"downloadURL(format)\" [innerHTML]=\"format.html\"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row expanded\" *ngIf=\"!error; else errorBlock;\">\n\n  <div>\n    <ip-details-viewer [interactionAc]=\"interactionAc\"\n                       [featureAc]=\"featureSelected\"\n                       (error)=\"searchError($event)\"></ip-details-viewer>\n  </div>\n\n  <div class=\"columns medium-12\">\n    <ip-details-tabs [interactionAc]=\"interactionAc\"\n                     (featureChanged)=\"onFeatureSelectedChanged($event)\"></ip-details-tabs>\n  </div>\n\n</div>\n\n<ng-template #errorBlock>\n  <div class=\"row expanded margin-top-large margin-bottom-large margin-left-medium margin-right-medium\">\n    <div class=\"columns medium-12\">\n      <div class=\"alert-panel\">\n        <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> <b>{{interactionAc}}</b> not found</h3>\n        No interactions were found for the given accession number: <b>{{interactionAc}}</b><br>\n        This can be due to:\n        <ul>\n          <li>An incomplete accession number (format: EBI-XXXXXXX)</li>\n          <li>A spelling mistake</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #noInteractor>\n  <div class=\"row expanded margin-top-large margin-bottom-large margin-left-medium margin-right-medium\">\n    <div class=\"columns medium-12\">\n      <div class=\"alert-panel\">\n        <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Missing parameter</h3>\n        Could not find any interaction accession number in the url.<br>\n        Please add one to retrieve the details of the related interaction.<br>\n        An accession number follow the following format: <b>EBI-XXXXXXX</b>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_viewer_details_viewer_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-viewer/details-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_foundation_utils__ = __webpack_require__("./src/app/shared/utils/foundation-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_download_format_model__ = __webpack_require__("./src/app/interactions/shared/model/download/format.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








const baseURL = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].intact_portal_ws;
let DetailsDashboardComponent = class DetailsDashboardComponent {
    constructor(titleService, route) {
        this.titleService = titleService;
        this.route = route;
        this.viewer = __WEBPACK_IMPORTED_MODULE_4__details_viewer_details_viewer_component__["b" /* viewer */];
        this.formatTypes = __WEBPACK_IMPORTED_MODULE_6__shared_model_download_format_model__["a" /* Format */].instances;
    }
    downloadURL(format) {
        return `${baseURL}/graph/export/interaction/${this.interactionAc}?format=${format.name}`;
    }
    ngOnInit() {
        this.route.params
            .subscribe(params => {
            this.interactionAc = params['id'];
            this.titleService.setTitle('Interaction - ' + this.interactionAc);
        });
    }
    ngAfterViewInit() {
        $('#detail-export').foundation();
        __WEBPACK_IMPORTED_MODULE_5__shared_utils_foundation_utils__["a" /* FoundationUtils */].adjustWidth();
    }
    searchError(error) {
        this._error = error;
        __WEBPACK_IMPORTED_MODULE_3__layout_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hideWithoutDelay();
    }
    get interactionAc() {
        return this._interactionAc;
    }
    set interactionAc(value) {
        this._interactionAc = value;
    }
    onFeatureSelectedChanged(featureAc) {
        this.featureSelected = featureAc;
    }
    get error() {
        return this._error;
    }
    exportSVG() {
        const svgXML = __WEBPACK_IMPORTED_MODULE_4__details_viewer_details_viewer_component__["b" /* viewer */].getSVG();
        this.download(svgXML, 'application/svg', `${this.interactionAc}.svg`);
    }
    download(content, contentType, fileName) {
        const oldToNewTypes = {
            'application/svg': 'image/svg+xml;charset=utf-8',
            'plain/text': 'plain/text;charset=utf-8',
        };
        const newContentType = oldToNewTypes[contentType] || contentType;
        function dataURItoBlob(binary) {
            let array = [];
            let te;
            try {
                // @ts-ignore
                te = new TextEncoder('utf-8');
            }
            catch (e) {
                te = undefined;
            }
            if (te) {
                array = te.encode(binary); // html5 encoding api way
            }
            else {
                // https://stackoverflow.com/a/18729931/368214
                // fixes unicode bug
                for (let i = 0; i < binary.length; i++) {
                    let charcode = binary.charCodeAt(i);
                    if (charcode < 0x80)
                        array.push(charcode);
                    else if (charcode < 0x800) {
                        array.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
                    }
                    else if (charcode < 0xd800 || charcode >= 0xe000) {
                        array.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
                    }
                    else {
                        i++;
                        // UTF-16 encodes 0x10000-0x10FFFF by
                        // subtracting 0x10000 and splitting the
                        // 20 bits of 0x0-0xFFFFF into two halves
                        charcode = 0x10000 + (((charcode & 0x3ff) << 10) |
                            (binary.charCodeAt(i) & 0x3ff));
                        array.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
                    }
                }
            }
            return new Blob([new Uint8Array(array)], {
                type: newContentType
            });
        }
        let blob = dataURItoBlob(content);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName);
        }
        else {
            const a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            // Give filename you wish to download
            a.download = fileName;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(a.href); // clear up url reference to blob so it can be g.c.'ed
        }
        blob = null;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DetailsDashboardComponent.prototype, "featureSelected", void 0);
DetailsDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-details-dashboard',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-dashboard.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
], DetailsDashboardComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details-tabs.component.css":
/***/ (function(module, exports) {

module.exports = "/*.tabs-panel[_ngcontent-c4] {*/\n/*  background: #e6e6e6 !important;*/\n/*}*/\n/*.tabs-title > a {*/\n/*  font-size: 1em;*/\n/*  color: #3e3e3e;*/\n/*}*/\n/*.tabs-title > a:hover {*/\n/*  background: #8a8a8a91;*/\n/*  color: #0a0a0a;*/\n/*}*/\n/*.tabs-title > a:focus,*/\n/*.tabs-title > a[aria-selected='true'] {*/\n/*  color: #0a0a0a;*/\n/*  background: #e6e6e6;*/\n/*}*/\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details-tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large\">\n\n  <!--  TODO make this bookmarkable like the documentation, it needs to take into account the url params -->\n  <ul class=\"tabs\" data-tabs id=\"details-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"#interactionDetails\" aria-selected=\"true\">Interaction Details</a></li>\n    <li class=\"tabs-title\"><a href=\"#participants\">Participants</a></li>\n    <li class=\"tabs-title\"><a href=\"#features\">Features</a></li>\n\n    <ip-column-toggle *ngIf=\"isTabParticipantActive\"\n                      [columns]=\"participantTable.columns\"\n                      [dataTable]=\"participantTable.dataTable\"\n                      [columnView]=\"participantTable.columnView\"\n                      [isTabActive]=\"isTabParticipantActive\" class=\"float-right\"></ip-column-toggle>\n\n    <ip-column-toggle *ngIf=\"isTabFeatureActive\"\n                      [columns]=\"featureTable.columns\"\n                      [dataTable]=\"featureTable.dataTable\"\n                      [columnView]=\"featureTable.columnView\"\n                      [isTabActive]=\"isTabFeatureActive\" class=\"float-right\"></ip-column-toggle>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"details-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"interactionDetails\">\n      <ip-interaction-details *ngIf=\"interactionDetails\"\n                              [interactionDetails]=\"interactionDetails\"></ip-interaction-details>\n    </div>\n\n    <div class=\"tabs-panel table-tab\" id=\"participants\">\n      <ip-participant-table [participantTab]=\"isTabParticipantActive\"\n                            [interactionAc]=\"interactionAc\"></ip-participant-table>\n\n    </div>\n\n    <div class=\"tabs-panel table-tab\" id=\"features\">\n      <ip-features-table [interactionAc]=\"interactionAc\"\n                         [featureTab]=\"isTabFeatureActive\"\n                         (featureChanged)=\"onFeatureSelectedChanged($event)\"></ip-features-table>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details-tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_interactions_details_service__ = __webpack_require__("./src/app/interactions/shared/service/interactions-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_participant_table_participant_table_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_features_table_features_table_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DetailsTabsComponent = class DetailsTabsComponent {
    constructor(interactionsDetailsService) {
        this.interactionsDetailsService = interactionsDetailsService;
        this.featureChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.moleculeTypesCollected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._isTabParticipantActive = false;
        this._isTabFeatureActive = false;
    }
    ngOnInit() {
        $('ip-details-tabs').foundation();
        this.requestInteractionDetails();
    }
    ngAfterViewInit() {
        $('#details-tabs').on('change.zf.tabs', () => {
            if ($('#participants').hasClass('is-active') === true) {
                this.isTabParticipantActive = true;
                this.isTabFeatureActive = false;
            }
            else if ($('#features').hasClass('is-active') === true) {
                this.isTabParticipantActive = false;
                this.isTabFeatureActive = true;
            }
            else {
                this.isTabParticipantActive = false;
                this.isTabFeatureActive = false;
            }
        });
    }
    requestInteractionDetails() {
        this.interactionsDetailsService.getInteractionDetails(this.interactionAc)
            .subscribe(interactionDetails => {
            this.interactionDetails = interactionDetails;
        });
    }
    get interactionDetails() {
        return this._interactionDetails;
    }
    set interactionDetails(value) {
        this._interactionDetails = value;
    }
    get currentPageIndex() {
        return this._currentPageIndex;
    }
    set currentPageIndex(value) {
        this._currentPageIndex = value;
    }
    get isTabParticipantActive() {
        return this._isTabParticipantActive;
    }
    set isTabParticipantActive(value) {
        this._isTabParticipantActive = value;
    }
    get isTabFeatureActive() {
        return this._isTabFeatureActive;
    }
    set isTabFeatureActive(value) {
        this._isTabFeatureActive = value;
    }
    /** EVENT EMITTERS **/
    onFeatureSelectedChanged(featureAc) {
        this.featureChanged.emit(featureAc);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DetailsTabsComponent.prototype, "interactionAc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], DetailsTabsComponent.prototype, "featureChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], DetailsTabsComponent.prototype, "moleculeTypesCollected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__details_participant_table_participant_table_component__["a" /* ParticipantTableComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__details_participant_table_participant_table_component__["a" /* ParticipantTableComponent */])
], DetailsTabsComponent.prototype, "participantTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__details_features_table_features_table_component__["a" /* FeaturesTableComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__details_features_table_features_table_component__["a" /* FeaturesTableComponent */])
], DetailsTabsComponent.prototype, "featureTable", void 0);
DetailsTabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-details-tabs',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details-tabs.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details-tabs.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_interactions_details_service__["a" /* InteractionsDetailsService */]])
], DetailsTabsComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4>Confidences ({{confidences.length}})</h4>\n  <table id=\"confidences\">\n    <thead>\n      <th>Type</th>\n      <th>Value</th>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let confidence of confidences\">\n      <td>{{confidence.type}}</td>\n      <td>{{confidence.value}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfidencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ConfidencesComponent = class ConfidencesComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ConfidencesComponent.prototype, "confidences", void 0);
ConfidencesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-confidences',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ConfidencesComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.css":
/***/ (function(module, exports) {

module.exports = "table#curAnnotations {\n  overflow-wrap: anywhere;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h5>Annotations ({{annotations.length}})</h5>\n  <table id=\"curAnnotations\">\n    <thead>\n      <th>Topic</th>\n      <th>Description</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let annotation of annotations\">\n        <td><ip-cv-term [cvTerm]=\"annotation.topic\"></ip-cv-term></td>\n        <td>{{annotation.description}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurationAnnotationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CurationAnnotationsComponent = class CurationAnnotationsComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], CurationAnnotationsComponent.prototype, "annotations", void 0);
CurationAnnotationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-curation-annotations',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CurationAnnotationsComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.css":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.html":
/***/ (function(module, exports) {

module.exports = "<span [matTooltip]=\"description\" class=\"has-tip cv-term\" tabindex=\"1\" *ngIf=\"description; else elseBlock\">\n  {{cvTerm.shortName}}\n</span>\n<ng-template #elseBlock>\n  <a [href]=\"cvTerm | cvToUrl: 'access'\" class=\"cv-term\" target=\"_blank\">\n    {{cvTerm.shortName}}\n  </a>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvTermComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_cv_term_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/cv-term.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CvTermComponent = class CvTermComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_cv_term_model__["a" /* CvTerm */])
], CvTermComponent.prototype, "cvTerm", void 0);
CvTermComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-cv-term',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CvTermComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-to-url.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvToUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CvToUrlPipe = class CvToUrlPipe {
    transform(value, type) {
        if (value.identifier === null)
            return '';
        let id = value.identifier.replace(':', '_');
        switch (type) {
            default:
            case "access":
                return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`;
            case "details":
                return `https://www.ebi.ac.uk/ols/api/ontologies/mi/terms?iri=http://purl.obolibrary.org/obo/${id}`;
        }
    }
};
CvToUrlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: 'cvToUrl'
    })
], CvToUrlPipe);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#2e4d6e4f;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns medium-4\">\n\n  <h4><i id=\"toggleExperiment\" class=\"icon icon-common icon-minus padding-right-small\"\n                                   (click)=\"toggleExperimentButton()\"\n                                   (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\"\n                                   [ngStyle]=\"{cursor: hover==true ? 'pointer' : 'default'}\" ></i> Experiment Details</h4>\n\n  <div id=\"experimentPanel\" class=\"margin-top-large margin-bottom-large\">\n\n      <div class=\"margin-top-large margin-bottom-large\">\n        <h5>Experiment Accession</h5>\n        {{experiment.experimentAc}}\n      </div>\n      <div class=\"margin-top-large margin-bottom-large\">\n        <h5>Host Organism Model</h5>\n        {{experiment.interactionHostOrganism}}\n      </div>\n      <div class=\"margin-top-large margin-bottom-xlarge\">\n        <h5>Interaction Detection Method</h5>\n        {{experiment.interactionDetectionMethod}}\n      </div>\n\n      <div id=\"extXrefs\" class=\"margin-top-large\" *ngIf=\"experiment.experimentXrefs.length !== 0\">\n        <ip-external-xrefs *ngIf=\"experiment.experimentXrefs\"\n                           [xrefs]=\"experiment.experimentXrefs\"></ip-external-xrefs>\n      </div>\n      <div id=\"curationAnnotations\" class=\"margin-top-large\" *ngIf=\"experiment.experimentAnnotations.length !== 0\">\n        <ip-curation-annotations *ngIf=\"experiment.experimentAnnotations\"\n                                 [annotations]=\"experiment.experimentAnnotations\"></ip-curation-annotations>\n      </div>\n\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperimentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_experiment_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/experiment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ExperimentComponent = class ExperimentComponent {
    constructor() {
        this.hover = false;
    }
    ngOnInit() {
    }
    toggleExperimentButton() {
        if ($('#experimentPanel').is(':visible')) {
            $('#experimentPanel').hide();
            $('i#toggleExperiment').removeClass('icon-minus').addClass('icon-plus');
        }
        else {
            $('#experimentPanel').show();
            $('i#toggleExperiment').removeClass('icon-plus').addClass('icon-minus');
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_experiment_model__["a" /* Experiment */])
], ExperimentComponent.prototype, "experiment", void 0);
ExperimentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-experiment',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExperimentComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h5>Experimental Conditions (2)</h5>\n  <table id=\"expConditions\">\n    <thead>\n      <th>Description</th>\n      <th>Unit</th>\n      <th>Value</th>\n    </thead>\n    <tbody>\n      <tr>\n        <td>aaa</td>\n        <td>aaaa</td>\n        <td>aaa</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperimentalConditionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ExperimentalConditionsComponent = class ExperimentalConditionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExperimentalConditionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-experimental-conditions',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExperimentalConditionsComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.css":
/***/ (function(module, exports) {

module.exports = ".submit-to-link {\n  cursor: pointer;\n  border-bottom-width: 1px;\n  border-bottom-style: dotted;\n  border-bottom-color: inherit;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  padding: 0;\n  background: none;\n}\n\n.submit-to-link:hover,\n.submit-to-link:focus,\n.submit-to-link:active {\n  border-bottom-style: solid;\n  border-bottom-color: #68297c;\n  color: #68297c;\n  opacity: 0.9;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h5>External Cross References ({{xrefs.length}})</h5>\n  <table id=\"externalXref\">\n    <thead>\n    <th>Database</th>\n    <th>Identifier</th>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let xref of xrefs\">\n      <td>\n        <ip-cv-term [cvTerm]=\"xref.database\"></ip-cv-term>\n      </td>\n\n      <td [ngSwitch]=\"xref.database.shortName\">\n        <form action=\"https://imexcentral.org/icentral/pubsrc.action\" method=\"post\" target=\"_blank\"\n              *ngSwitchCase=\"'imex'\">\n          <input name=\"opp.ns\" value=\"imex\" hidden/>\n          <input name=\"opp.ac\" [value]=\"extractImexPubId(xref.identifier)\" hidden/>\n          <input name=\"op.esrc\" value=\"SEARCH\" hidden/>\n          <input type=\"submit\" class=\"submit-to-link\" [value]=\"xref.identifier\">\n        </form>\n\n        <span *ngSwitchDefault>{{xref.identifier}}</span>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalXrefsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ExternalXrefsComponent = class ExternalXrefsComponent {
    constructor() { }
    ngOnInit() {
    }
    extractImexPubId(imexRef) {
        let parts = imexRef.split('-');
        if (parts.length > 2)
            parts.splice(2, parts.length - 2);
        return parts.join('-');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ExternalXrefsComponent.prototype, "xrefs", void 0);
ExternalXrefsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-external-xrefs',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExternalXrefsComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\">\n    <table id=\"featureTable\" class=\"display tableDisplay\">\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_tables_feature_table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/feature-table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const baseURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_graph_ws;
let FeaturesTableComponent = class FeaturesTableComponent {
    constructor(tableFactory) {
        this.tableFactory = tableFactory;
        this.featureChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.columnView = 'features_columnView';
        this._columns = new __WEBPACK_IMPORTED_MODULE_2__shared_model_tables_feature_table_model__["a" /* FeatureTable */]();
    }
    ngOnInit() {
        this.initDataTable();
        this.tableFactory.initTopSlider('featureTable');
        this.tableFactory.initShadowBorder('featureTable');
        this.tableFactory.makeTableHeaderSticky();
    }
    ngOnChanges(changes) {
        if (changes.featureTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            const table = $('#featureTable');
            this.dataTable = table.DataTable().columns.adjust().draw();
        }
    }
    initDataTable() {
        const table = $('#featureTable');
        this.dataTable = table.DataTable({
            bSort: false,
            searching: false,
            paging: true,
            lengthMenu: [10, 25, 50, 75, 100],
            pageLength: 10,
            pagingType: 'numbers',
            processing: true,
            serverSide: true,
            dom: '<"top"li>rt<"bottom"p><"clear">',
            scrollX: true,
            ajax: {
                url: `${baseURL}/graph/features/datatables/` + this.interactionAc,
                type: 'POST',
                //   error: function(xhr, error, code) { console.log(error); },
                //   success: function(result) {console.log(JSON.stringify(result))},
                data: function (d) {
                    d.page = d.start / d.length;
                    d.pageSize = d.length;
                }
            },
            columns: [
                {
                    data: this._columns.ac.data,
                    title: this._columns.ac.title
                },
                {
                    data: this._columns.name.data,
                    title: this._columns.name.title
                },
                {
                    data: this._columns.type.data,
                    title: this._columns.type.title,
                    render: this.tableFactory.cvRenderStructured
                },
                {
                    data: this._columns.role.data,
                    title: this._columns.role.title
                },
                {
                    data: this._columns.rangePositions.data,
                    title: this._columns.rangePositions.title,
                    render: '[, ]',
                },
                {
                    data: this._columns.linkedFeatures.data,
                    title: this._columns.linkedFeatures.title,
                    render: this.tableFactory.enlistWithButtons((d) => `${d.shortName} (${d.ac})`)
                },
                {
                    data: this._columns.participantName.data,
                    title: this._columns.participantName.title,
                },
                {
                    data: this._columns.participantIdentifier.data,
                    title: this._columns.participantIdentifier.title,
                    render: this.tableFactory.identifierRender
                },
                {
                    data: this._columns.participantAc.data,
                    title: this._columns.participantAc.title,
                },
                {
                    data: this._columns.detectionMethods.data,
                    title: this._columns.detectionMethods.title,
                    render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured)
                },
                {
                    data: this._columns.parameters.data,
                    title: this._columns.parameters.title,
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            return $.map(data, function (d, i) {
                                return '<div class="margin-bottom-medium">' +
                                    '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '(' + d.unit.shortName + ') </span>' +
                                    '</div>';
                            }).join('');
                        }
                    }
                },
                {
                    data: this._columns.identifiers.data,
                    title: this._columns.identifiers.title,
                    render: this.tableFactory.enlistWithButtons(this.tableFactory.identifierRender)
                },
                {
                    data: this._columns.crossReferences.data,
                    title: this._columns.crossReferences.title,
                    render: this.tableFactory.enlistWithButtons(this.tableFactory.identifierRender)
                },
                {
                    data: this._columns.annotations.data,
                    title: this._columns.annotations.title,
                    render: this.tableFactory.enlistWithButtons(this.tableFactory.annotationRender())
                }
            ]
        });
        table.on('change', 'input[type=\'checkbox\']', (e) => {
            const featureSel = e.currentTarget.id;
            if (this.featureSelected !== featureSel) {
                $('#' + this.featureSelected + ':checkbox').prop('checked', false);
                this.featureSelected = featureSel;
                this.featureChanged.emit(this.featureSelected);
            }
            else {
                // None is selected, remove class
                this.featureSelected = undefined;
                this.featureChanged.emit(this.featureSelected);
            }
        });
    }
    get columns() {
        return this._columns;
    }
    get featureSelected() {
        return this._featureSelected;
    }
    set featureSelected(value) {
        this._featureSelected = value;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], FeaturesTableComponent.prototype, "interactionAc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], FeaturesTableComponent.prototype, "featureTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], FeaturesTableComponent.prototype, "featureChanged", void 0);
FeaturesTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-features-table',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_table_factory_service__["a" /* TableFactoryService */]])
], FeaturesTableComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#5a2e6e3d;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\">\n  <div class=\"columns medium-12 large-6\">\n\n    <h4>\n      Interaction Details\n    </h4>\n\n    <div id=\"detailsPanel\" class=\"margin-top-large margin-bottom-large\">\n\n      <div class=\"row expanded margin-top-large margin-bottom-large\">\n        <div class=\"columns medium-6 small-12\">\n          <div class=\"margin-top-large\">\n            <h5>Accession</h5>\n            {{interactionDetails.interactionAc}}\n          </div>\n          <div class=\"margin-top-large\">\n            <h5>Type</h5>\n            <ip-cv-term [cvTerm]=\"interactionDetails.type\"></ip-cv-term>\n          </div>\n\n          <div class=\"margin-top-large\">\n            <h5>Detection Method</h5>\n            <ip-cv-term [cvTerm]=\"interactionDetails.detectionMethod\"></ip-cv-term>\n          </div>\n\n          <div class=\"margin-top-large\">\n            <h5>Host Organism</h5>\n            <span [innerHTML]=\"interactionDetails.hostOrganism | organism\"></span>\n          </div>\n        </div>\n\n        <div class=\"columns medium-6 small-12\">\n          <div id=\"extXrefs\" class=\"margin-top-large\" *ngIf=\"interactionDetails.xrefs.length!=0\">\n            <ip-external-xrefs *ngIf=\"interactionDetails.xrefs\"\n                               [xrefs]=\"interactionDetails.xrefs\"></ip-external-xrefs>\n          </div>\n\n          <div id=\"curationAnnotations\" class=\"margin-top-large\" *ngIf=\"interactionDetails.annotations.length!=0\">\n            <ip-curation-annotations *ngIf=\"interactionDetails.annotations\"\n                                     [annotations]=\"interactionDetails.annotations\"></ip-curation-annotations>\n          </div>\n        </div>\n\n        <div *ngIf=\"interactionDetails.parameters.length!=0\" id=\"parameters\" class=\"columns medium-6 small-12 margin-top-large\">\n          <ip-parameters *ngIf=\"interactionDetails.parameters\"\n                         [parameters]=\"interactionDetails.parameters\"></ip-parameters>\n        </div>\n\n        <div *ngIf=\"interactionDetails.confidences.length!=0\" id=\"confidences\" class=\"columns medium-6 small-12 margin-top-large\">\n          <ip-confidences *ngIf=\"interactionDetails.confidences\"\n                          [confidences]=\"interactionDetails.confidences\"></ip-confidences>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ip-publication [publication]=\"interactionDetails.publication\"></ip-publication>\n\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_interaction_details_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/interaction-details.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let InteractionDetailsComponent = class InteractionDetailsComponent {
    constructor() {
        this.featureToEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hover = false;
    }
    ngOnInit() {
    }
    toggleDetailsButton() {
        if ($('#detailsPanel').is(':visible')) {
            $('#detailsPanel').hide();
            $('i#toggleDetails').removeClass('icon-minus').addClass('icon-plus');
        }
        else {
            $('#detailsPanel').show();
            $('i#toggleDetails').removeClass('icon-plus').addClass('icon-minus');
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_interaction_details_model__["a" /* InteractionDetails */])
], InteractionDetailsComponent.prototype, "interactionDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], InteractionDetailsComponent.prototype, "featureToEmit", void 0);
InteractionDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interaction-details',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InteractionDetailsComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/organism/organism.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganismPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let OrganismPipe = class OrganismPipe {
    transform(organism, args) {
        if (parseInt(organism.taxId) > 0) {
            let url = `https://www.uniprot.org/taxonomy/${organism.taxId}`;
            return `<a href="${url}" class="cv-term" target="_blank">${organism.scientificName}</a>`;
        }
        else {
            return organism.scientificName;
        }
    }
};
OrganismPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
        name: 'organism'
    })
], OrganismPipe);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h5>Parameters ({{parameters.length}})</h5>\n  <table id=\"parameters\">\n    <thead>\n    <tr>\n      <th>Type</th>\n      <th>Unit</th>\n      <th>Value</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let param of parameters\">\n      <td>\n        <ip-cv-term [cvTerm]=\"param.type\"></ip-cv-term>\n      </td>\n      <td>{{param.value}}</td>\n      <td>\n        <!-- Parameter units are optional-->\n        <div *ngIf=\"param.unit\">\n          <ip-cv-term [cvTerm]=\"param.unit\"></ip-cv-term>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ParametersComponent = class ParametersComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ParametersComponent.prototype, "parameters", void 0);
ParametersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-parameters',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ParametersComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.css":
/***/ (function(module, exports) {

module.exports = ".columnToggle {\n  font-size: 1em;\n  background-color: #e6e6e6;\n  width: 1.8em;\n  height: 1.8em;\n  background-position: 50% 50%;\n  margin-top: .5em;\n  margin-bottom: .5em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-shadow: 0 1px 0 #fff;\n  border-radius: .25em;\n  border: 1px solid #44545f;\n  cursor: pointer;\n}\n\n.iconColumn {\n  color: #44545f;\n  font-size: 1.5em;\n}\n\n.column_toggle_popup {\n  display: block;\n  position: absolute;\n  /*top: 2.5em;*/\n  right: 4em;\n  text-align: left !important;\n}\n\n.column_toggle_btnwrap {\n  background-color: #fff;\n  padding: .5em .8em;\n  border: 1px solid #ccc;\n  -webkit-box-shadow: 0 1px 2px #ccc;\n          box-shadow: 0 1px 2px #ccc;\n  border-radius: .2em;\n  z-index: 1;\n}\n\n.hiddenToggle {\n  display: none;\n}\n\nselect {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  border-radius: 0;\n}\n\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded\">\n    <table id=\"participantTable\" class=\"display tableDisplay\">\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_tables_participant_table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/participant-table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__ = __webpack_require__("./src/app/interactions/interaction-details/shared/service/interaction-participants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const baseURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_graph_ws;
let ParticipantTableComponent = class ParticipantTableComponent {
    constructor(tableFactory, participantsService) {
        this.tableFactory = tableFactory;
        this.participantsService = participantsService;
        this.columnView = 'participants_columnView';
        this._columns = new __WEBPACK_IMPORTED_MODULE_2__shared_model_tables_participant_table_model__["a" /* ParticipantTable */]();
        this.fillParticipants = true;
    }
    ngOnInit() {
        this.initDataTable();
        this.tableFactory.initTopSlider('participantTable');
        this.tableFactory.initShadowBorder('participantTable');
    }
    ngAfterViewInit() {
        this.tableFactory.makeTableHeaderSticky();
        this.tableFactory.enableShowButtons();
    }
    ngOnChanges(changes) {
        if (changes.participantTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            const table = $('#participantTable');
            this.fillParticipants = false;
            this.dataTable = table.DataTable().columns.adjust().draw();
        }
    }
    initDataTable() {
        const table = $('#participantTable');
        this.dataTable = table.DataTable({
            bSort: false,
            searching: false,
            paging: true,
            lengthMenu: [10, 25, 50, 75, 100],
            pageLength: 10,
            pagingType: 'numbers',
            processing: true,
            serverSide: true,
            dom: '<"top"li>rt<"bottom"p><"clear">',
            scrollX: true,
            ajax: {
                url: `${baseURL}/graph/participants/datatables/` + this.interactionAc,
                type: 'POST',
                //   error: function(xhr, error, code) { console.log(error); },
                //   success: function(result) {console.log(JSON.stringify(result))},
                data: function (d) {
                    d.page = d.start / d.length;
                    d.pageSize = d.length;
                }
            },
            columns: [
                {
                    data: this._columns.expand.data,
                    defaultContent: ' ',
                    title: this._columns.expand.title,
                    render: (data, type, full) => {
                        if (type === 'display') {
                            let id = full.participantId.identifier;
                            if (full.type.shortName === 'protein') {
                                let expanded = this.participantsService.getParticipantAndStatusById(id).status === __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__["b" /* Status */].EXPANDED;
                                return `<input type="checkbox" id="${id}" name="check" value="${data}" ${expanded ? 'checked' : ''}/>`;
                                // TODO Switch to participants AC for correct interaction
                            }
                        }
                        return '';
                    }
                },
                {
                    data: this._columns.name.data,
                    title: this._columns.name.title,
                    defaultContent: ' ',
                    render: (data, type, row) => {
                        return data;
                    }
                },
                {
                    data: this._columns.ac.data,
                    title: this._columns.ac.title
                },
                {
                    data: this._columns.type.data,
                    title: this._columns.type.title,
                    defaultContent: '',
                    render: this.tableFactory.cvRenderStructured
                },
                {
                    data: this._columns.identifier.data,
                    title: this._columns.identifier.title,
                    defaultContent: '',
                    render: this.tableFactory.identifierRender
                },
                {
                    data: this._columns.aliases.data,
                    title: this._columns.aliases.title,
                    defaultContent: '',
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            return $.map(data, function (d, i) {
                                return `<div><span class="detailsCell">${d.name}</span></div>`;
                            }).join('');
                        }
                    }
                },
                {
                    data: this._columns.description.data,
                    title: this._columns.description.title,
                    defaultContent: ''
                },
                {
                    data: this._columns.species.data,
                    title: this._columns.species.title,
                    defaultContent: '',
                    render: this.tableFactory.speciesRenderStructured
                },
                {
                    data: this._columns.expressionSystem.data,
                    title: this._columns.expressionSystem.title,
                    defaultContent: '',
                    render: this.tableFactory.speciesRenderStructured
                },
                {
                    data: this._columns.detectionMethods.data,
                    title: this._columns.detectionMethods.title,
                    defaultContent: '',
                    render: this.tableFactory.enlistWithButtons(this.tableFactory.cvRenderStructured)
                },
                {
                    data: this._columns.experimentalRole.data,
                    title: this._columns.experimentalRole.title,
                    defaultContent: '',
                    render: this.tableFactory.cvRenderStructured
                },
                {
                    data: this._columns.biologicalRole.data,
                    title: this._columns.biologicalRole.title,
                    defaultContent: '',
                    render: this.tableFactory.cvRenderStructured
                },
                {
                    data: this._columns.experimentalPreparations.data,
                    title: this._columns.experimentalPreparations.title,
                    defaultContent: '',
                    render: this.tableFactory.cvRenderStructured
                },
                {
                    data: this._columns.parameters.data,
                    title: this._columns.parameters.title,
                    defaultContent: '',
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            return $.map(data, function (d, i) {
                                if (d.unit !== null) {
                                    return '<div class="margin-bottom-medium">' +
                                        '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '(' + d.unit.shortName + ') </span>' +
                                        '</div>';
                                }
                                else {
                                    return '<div class="margin-bottom-medium">' +
                                        '<span class="detailsCell">' + d.type.shortName + ':' + d.value + '</span>' +
                                        '</div>';
                                }
                            }).join('');
                        }
                    }
                },
                {
                    data: this._columns.confidences.data,
                    title: this._columns.confidences.title,
                    defaultContent: '',
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            return $.map(data, function (d, i) {
                                return '<div class="margin-bottom-medium">' +
                                    '<span class="detailsCell"> ' + d.type.shortName + ':' + d.value + '</span>' +
                                    '</div>';
                            }).join('');
                        }
                    }
                },
                {
                    data: this._columns.crossReferences.data,
                    title: this._columns.crossReferences.title,
                    defaultContent: '',
                    render: function (data, type, row, meta) {
                        if (type === 'display') {
                            return $.map(data, function (d, i) {
                                return d.qualifier != null ?
                                    '<div class="margin-bottom-medium">' +
                                        '<span class="detailsXrefCell margin-right-medium">' +
                                        '<i class="icon icon-common icon-tag"></i>  ' + d.qualifier.shortName + '</span>' +
                                        '<span class="detailsCell">' + d.database.shortName + ':' + d.identifier + '</span>' +
                                        '</div>' :
                                    '<div class="margin-bottom-medium">' +
                                        '<span class="detailsCell">' + d.database.shortName + ':' + d.identifier + '</span>' +
                                        '</div>';
                            }).join('');
                        }
                    }
                },
                {
                    data: this._columns.annotations.data,
                    title: this._columns.annotations.title,
                    defaultContent: '',
                    render: this.tableFactory.enlistWithButtons(this.tableFactory.annotationRender())
                }
            ],
        });
        this.proteinExpansionSubscription = this.participantsService.proteinSetsUpdated.subscribe(proteins => {
            proteins.expanded.map(protein => protein.identifier.id).forEach(id => $(`#${id}:checkbox`).prop('checked', true));
            proteins.collapsed.map(protein => protein.identifier.id).forEach(id => $(`#${id}:checkbox`).prop('checked', false));
        });
        table.on('change', 'input[name=\'check\']', (e) => {
            const id = e.currentTarget.id;
            let protein = this.participantsService.getParticipantAndStatusById(id).participant;
            if ($(`#${id}:checkbox`).prop('checked')) {
                this.participantsService.setProteinStatus(protein, __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__["b" /* Status */].EXPANDED);
            }
            else {
                this.participantsService.setProteinStatus(protein, __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__["b" /* Status */].COLLAPSED);
            }
        });
    }
    get columns() {
        return this._columns;
    }
    ngOnDestroy() {
        if (this.proteinExpansionSubscription)
            this.proteinExpansionSubscription.unsubscribe();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ParticipantTableComponent.prototype, "interactionAc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ParticipantTableComponent.prototype, "participantTab", void 0);
ParticipantTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-participant-table',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_table_factory_service__["a" /* TableFactoryService */], __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__["a" /* InteractionParticipantsService */]])
], ParticipantTableComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.css":
/***/ (function(module, exports) {

module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color: #2e6e314f;\n}\n\n.button.alert {\n  cursor: default;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns medium-12 large-6\">\n\n  <h4>Publication</h4>\n\n  <div id=\"publicationPanel\" class=\"margin-top-large margin-bottom-large\">\n    <div class=\"row expanded\">\n      <div class=\"columns medium-6\">\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.title\">\n          <h5>Title</h5>\n          {{publication.title}}\n        </div>\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.journal\">\n          <h5>Journal</h5>\n          {{publication.journal}}\n        </div>\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.authors\">\n          <h5>Authors</h5>\n          {{publication.authors}}\n        </div>\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.publicationDate\">\n          <h5>Publication date</h5>\n          {{publication.publicationDate}}\n        </div>\n\n        <div class=\"margin-top-large margin-bottom-xlarge\" *ngIf=\"publication.pubmedId\">\n          <h5>Publication reference</h5>\n          <a href=\"https://europepmc.org/article/MED/{{publication.pubmedId}}?singleResult=true\"\n             target=\"_blank\" *ngIf=\"!publication.pubmedId.startsWith('unassigned'); else unassigned\">\n            PubMed: {{publication.pubmedId}}\n          </a>\n          <ng-template #unassigned>\n            <div class=\"button alert\">This publication is not present on PubMed yet.<br> Thus, this interaction is likely to come from a pre-publication </div>\n          </ng-template>\n        </div>\n\n      </div>\n\n      <div class=\"columns medium-6\">\n        <div id=\"extXrefs\" class=\"margin-top-large\" *ngIf=\"publication.publicationXrefs.length !== 0\">\n          <ip-external-xrefs *ngIf=\"publication.publicationXrefs\"\n                             [xrefs]=\"publication.publicationXrefs\"></ip-external-xrefs>\n        </div>\n\n        <div id=\"curationAnnotations\" class=\"margin-top-large\" *ngIf=\"publication.publicationAnnotations.length !== 0\">\n          <ip-curation-annotations *ngIf=\"publication.publicationAnnotations\"\n                                   [annotations]=\"publication.publicationAnnotations\"></ip-curation-annotations>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_publication_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/publication.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PublicationComponent = class PublicationComponent {
    constructor() {
        this.hover = false;
    }
    ngOnInit() {
        if (this.publication.publicationDate)
            this.publication.publicationDate = this.publication.publicationDate
                .split('-')
                .reverse()
                .join('/');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_details_publication_model__["a" /* Publication */])
], PublicationComponent.prototype, "publication", void 0);
PublicationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-publication',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PublicationComponent);



/***/ }),

/***/ "./src/app/interactions/interaction-details/details-viewer/details-viewer.component.css":
/***/ (function(module, exports) {

module.exports = "#details-viewer h4 {\n  border-bottom-style: solid;\n  border-color: #5a2e6e3d;\n}\n\n#interaction-viewer-container {\n  height: 600px;\n  background: #fbfbfb;\n}\n\n.complexViewerSVG {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n\n.image-center {\n  text-align: center;\n}\n\n#annotations-select {\n  width: auto;\n}\n\n#legend {\n  overflow: auto;\n  max-height: 699px;\n  margin-bottom: 0;\n}\n\n@media print, screen and (min-width: 64em) {\n  #legend {\n    max-height: 657px;\n  }\n}\n\ntr.legend-group {\n  background-color: white !important;\n}\n\ntable.color-key tr {\n  background: #fbfbfb;\n}\n\ntable.color-key tbody {\n  border: none;\n}\n\ntd.color-square {\n  width: 1.7rem;\n  height: 1.7rem;\n}\n\n/* Styling of right click menu in the viewer */\n\n.protein {\n  cursor: crosshair;\n}\n\n/*you need this to stop horrible looking flickering of text as you drag*/\n\nsvg {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.xlv_text {\n  text-shadow: -1px -1px 0 white,\n  1px -1px 0 white,\n  -1px 1px 0 white,\n  1px 1px 0 white;\n}\n\n.custom-menu-margin {\n  padding: 20px;\n  display: none;\n  z-index: 10000;\n  position: absolute;\n}\n\n.custom-menu {\n  overflow: hidden;\n  border: 1px solid #CCC;\n  white-space: nowrap;\n  background: #FFF;\n  color: #333;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: all;\n}\n\n.custom-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.custom-menu li {\n  padding: 8px 12px;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n}\n\n.custom-menu input {\n  cursor: pointer;\n}\n\n.custom-menu li:hover {\n  background-color: #DEF;\n}\n\n.custom-menu li:nth-child(1) {\n  cursor: pointer;\n}\n\n.custom-menu li:nth-child(2) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.barScale {\n  padding-left: 10px;\n}\n\n.barScale label {\n  display: unset;\n}\n\n.barScale label > [type='checkbox'], label > [type='radio'] {\n  margin-right: 0.5rem;\n  margin-left: 0.25rem;\n  margin-bottom: 0;\n}\n\ntd.legend-label {\n  padding: 2px 2px 2px 0.5rem;\n}\n\n.tooltip[display=\"none\"] {\n  display: none;\n}\n\n#rect-to-circle {\n  stroke-width: 2;\n  stroke: black;\n  paint-order: markers fill stroke;\n  fill: none;\n}\n\n#rect-to-circle[can-animate='true'] {\n  -webkit-animation: rect-to-circle-morph 5s ease infinite;\n          animation: rect-to-circle-morph 5s ease infinite;\n}\n\n#rect-tick {\n  stroke-width: 0;\n  fill: black;\n}\n\n#rect-tick[can-animate='true'] {\n  -webkit-animation: rect-tick-morph 5s ease infinite;\n          animation: rect-tick-morph 5s ease infinite;\n}\n\n#protein-svg {\n  height: 15pt;\n  vertical-align: middle;\n}\n\n.centered {\n  text-align: center;\n}\n\n.node-diagram {\n  height: 17pt;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-viewer/details-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"details-viewer\" class=\"row expanded\">\n    <div id=\"interaction-viewer\" class=\"columns medium-9\">\n      <h4>Interaction Viewer</h4>\n      <div class=\"row expanded button-bar no-padding\">\n        <div class=\"button-group expanded columns large-8 medium-12 no-pad-left no-pad-right no-margin\">\n          <button class=\"button\" (click)=\"onChangeAnnotation('MI Features')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['MI Features'],\n                              'outlined': !annotations['MI Features']}\">\n            MI <span class=\"show-for-large\">Features</span>\n          </button>\n          <button class=\"button\" (click)=\"onChangeAnnotation('UniprotKB')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['UniprotKB'],\n                              'outlined': !annotations['UniprotKB']}\">\n            Uniprot <span class=\"show-for-large\">Features</span>\n          </button>\n          <button class=\"button\" (click)=\"onChangeAnnotation('Superfamily')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['Superfamily'],\n                              'outlined': !annotations['Superfamily']}\">\n            <span class=\"show-for-large\">Super</span>Family\n          </button>\n          <button class=\"button\" (click)=\"onChangeAnnotation('Interactor')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['Interactor'],\n                              'outlined': !annotations['Interactor']}\">\n            Interactor\n          </button>\n        </div>\n\n\n        <div class=\"button-group expanded columns large-4 medium-12 no-pad-left no-pad-right no-margin\">\n          <button class=\"button lighter\" (click)=\"expandAll()\">Expand <span class=\"show-for-large\">all</span></button>\n          <button class=\"button lighter\" (click)=\"collapseAll()\">Collapse <span class=\"show-for-large\">all</span>\n          </button>\n        </div>\n      </div>\n      <div id=\"interaction-viewer-container\"></div>\n\n    </div>\n\n    <div id=\"viewer-legend\" class=\"columns medium-3\">\n      <h4>Legend</h4>\n      <div id=\"legend\" class=\"scrollbar margin-bottom-small\">\n        <table *ngIf=\"colorLegendGroups\" class=\"color-key no-margin\">\n          <tbody>\n          <tr class=\"legend-group\">\n            <td colspan=\"2\" class=\"no-padding-left\">\n              <h5 class=\"no-margin\">Node Shape</h5>\n            </td>\n          </tr>\n          <tr *ngIf=\"hasNodeShapeOf('bioactive entity')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.TRIANGLE\" height=\"13pt\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">Bioactive Entity</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('complex')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.HEXAGON\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">Complex</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('gene')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.ROUNDED_RECTANGLE\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">Gene</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('dna')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.VEE\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">DNA</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('rna')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.DIAMOND\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">RNA</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('protein')\">\n            <td class=\"centered\">\n              <svg viewBox=\"0 0 100 30\" xmlns=\"http://www.w3.org/2000/svg\" id=\"protein-svg\">\n                <rect [attr.can-animate]=\"canAnimate()\" id=\"rect-to-circle\" x=\"1\" y=\"6\" width=\"98\" height=\"18\"/>\n                <rect [attr.can-animate]=\"canAnimate()\" id=\"rect-tick\" x=\"48\" y=\"17\" width=\"2\" height=\"8\"/>\n              </svg>\n            </td>\n            <td class=\"legend-label\">Protein: click to switch</td>\n          </tr>\n\n          </tbody>\n\n          <tbody *ngFor=\"let group of colorLegendGroups\" id=\"{{group.name}}-colors\">\n          <tr class=\"legend-group\">\n            <td colspan=\"2\" class=\"no-padding-left\">\n              <h5 class=\"no-margin\">{{group.name}}</h5>\n            </td>\n          </tr>\n          <tr *ngFor=\"let legend of group.legends\">\n            <td *ngIf=\"legend.certain && !legend.uncertain\" [ngStyle]=\"{'background-color':legend.certain.color}\"\n                class=\"color-square\"></td>\n            <td *ngIf=\"!legend.certain && legend.uncertain\"\n                [ngStyle]=\"{'background':'repeating-linear-gradient(45deg, white, white 3px,'+legend.uncertain.color+' 0px,'+legend.uncertain.color+' 12px)'}\"\n                class=\"color-square\"></td>\n            <td *ngIf=\"legend.certain && legend.uncertain\" class=\"color-square no-padding\">\n              <div [ngStyle]=\"{width: '50%', height:'100%', float: 'left',\n              'background-color':legend.certain.color}\">\n              </div>\n              <div [ngStyle]=\"{width: '50%', height:'100%', float: 'right',\n              'background':'repeating-linear-gradient(45deg, white, white 3px,'+legend.uncertain.color+' 0px,'+legend.uncertain.color+' 12px)'}\">\n              </div>\n            </td>\n            <td class=\"legend-label\">{{legend.name}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interaction-details/details-viewer/details-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return viewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_interactions_details_service__ = __webpack_require__("./src/app/interactions/shared/service/interactions-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_complexviewer__ = __webpack_require__("./node_modules/complexviewer/src/js/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__ = __webpack_require__("./src/app/interactions/interaction-details/shared/service/interaction-participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_network_shapes_node_shape__ = __webpack_require__("./src/app/interactions/shared/model/network-shapes/node-shape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let viewer;
let DetailsViewerComponent = DetailsViewerComponent_1 = class DetailsViewerComponent {
    constructor(interactionsDetailsService, participantsService) {
        this.interactionsDetailsService = interactionsDetailsService;
        this.participantsService = participantsService;
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.annotations = {
            'MI Features': true,
            'UniprotKB': false,
            'Superfamily': false,
            'Interactor': false,
        };
        this._colorLegendGroups = [];
        this.notifyViewerOfUpdates = true;
        this.NodeShape = __WEBPACK_IMPORTED_MODULE_5__shared_model_network_shapes_node_shape__["a" /* NodeShape */];
        this.nodeTypes = new Set();
    }
    ngAfterViewInit() {
        this.requestInteractionViewerDetails();
        $('ip-interactions-viewer').foundation();
        $('.button-group.expanded').foundation();
    }
    ngOnDestroy() {
        if (this.proteinUpdateSubscription) {
            this.proteinUpdateSubscription.unsubscribe();
        }
    }
    canAnimate() {
        // @ts-ignore
        return !!window.chrome;
    }
    hasNodeShapeOf(type) {
        return this.nodeTypes ? this.nodeTypes.has(type) : false;
    }
    requestInteractionViewerDetails() {
        this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
            .subscribe(data => {
            this.interactionData = data;
            __WEBPACK_IMPORTED_MODULE_2__layout_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hide();
            if (this.interactionData !== undefined) {
                viewer = new __WEBPACK_IMPORTED_MODULE_3_complexviewer__["a" /* App */](document.getElementById('interaction-viewer-container'));
                viewer.readMIJSON(this.interactionData, true);
                viewer.autoLayout();
                this.expandAll();
                this.participantsService.initParticipants(viewer.getExpandedParticipants());
                this.updateColorLegend(viewer.getColorKeyJson());
                this.collectTypes();
                viewer.addExpandListener((expandedParticipants) => {
                    this.notifyViewerOfUpdates = false;
                    this.participantsService.updateProteinsStatus(expandedParticipants);
                    this.notifyViewerOfUpdates = true;
                });
                this.proteinUpdateSubscription = this.participantsService.proteinSetsUpdated.subscribe(update => {
                    if (this.notifyViewerOfUpdates) {
                        viewer.expandAndCollapseSelection(update.expanded.map(protein => protein.identifier.id));
                    }
                });
            }
        }, (err) => {
            this.error.emit(err);
        });
    }
    expandAll() {
        viewer.expandAll();
        this.participantsService.expandAllProteins();
    }
    collapseAll() {
        viewer.collapseAll();
        this.participantsService.collapseAllProteins();
    }
    onChangeAnnotation(value) {
        const display = !this.annotations[value];
        this.annotations[value] = display;
        this.updateColorLegend(viewer.showAnnotations(value, display));
    }
    updateColorLegend(legendData) {
        this._colorLegendGroups = [];
        for (const group of Object.keys(legendData)) {
            if (group === 'Complex') {
                this._colorLegendGroups.push({
                    name: 'Interaction', legends: legendData[group].map(legend => {
                        legend.name = legend.name.replace('intact_', '');
                        return legend;
                    })
                });
            }
            else {
                if (legendData[group].length > 0) {
                    this._colorLegendGroups.push({
                        name: group, legends: legendData[group]
                    });
                }
            }
        }
    }
    collectTypes() {
        for (const datum of this.interactionData.data) {
            if (datum.object !== 'interaction') {
                break;
            }
            for (const jsonParticipant of datum.participants) {
                const intRef = jsonParticipant.interactorRef;
                const interactor = viewer.interactors.get(intRef);
                for (const type of DetailsViewerComponent_1.types) {
                    if (type.set.has(interactor.type.id)) {
                        this.nodeTypes.add(type.name);
                        break;
                    }
                }
            }
        }
    }
    get colorLegendGroups() {
        return this._colorLegendGroups;
    }
    resetLayout() {
        viewer.autoLayout();
    }
};
DetailsViewerComponent.types = [
    {
        set: new Set(['MI:0326', 'MI:0327']),
        name: 'protein'
    },
    {
        set: new Set(['MI:1100', 'MI:0904', 'MI:0328']),
        name: 'bioactive entity'
    },
    {
        set: new Set(['MI:0319', 'MI:0681', 'MI:0680']),
        name: 'dna'
    },
    {
        set: new Set(['MI:0320', 'MI:0321', 'MI:0322', 'MI:0323', 'MI:2190', 'MI:0324', 'MI:0679', 'MI:0608', 'MI:0611', 'MI:0610', 'MI:0607', 'MI:0609', 'MI:0325', 'IA:2966', 'MI:0318']),
        name: 'rna'
    },
    {
        set: new Set(['MI:0250']),
        name: 'gene'
    },
    {
        set: new Set(['MI:1299', 'MI:0233', 'MI:0315', 'MI:0316', 'MI:1298', 'MI:1301', 'MI:1302', 'MI:1300', 'MI:1303']),
        name: 'complex'
    }
];
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DetailsViewerComponent.prototype, "interactionAc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], DetailsViewerComponent.prototype, "featureAc", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], DetailsViewerComponent.prototype, "error", void 0);
DetailsViewerComponent = DetailsViewerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-details-viewer',
        template: __webpack_require__("./src/app/interactions/interaction-details/details-viewer/details-viewer.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interaction-details/details-viewer/details-viewer.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_interactions_details_service__["a" /* InteractionsDetailsService */], __WEBPACK_IMPORTED_MODULE_4__shared_service_interaction_participants_service__["a" /* InteractionParticipantsService */]])
], DetailsViewerComponent);

class ColorLegend {
    constructor(name, certain, uncertain) {
        this.name = name;
        this.certain = certain;
        this.uncertain = uncertain;
    }
}
class Color {
    constructor(color) {
        this.color = color;
    }
}
var DetailsViewerComponent_1;


/***/ }),

/***/ "./src/app/interactions/interaction-details/interaction-details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionDetailsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_dashboard_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: 'details/interaction/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__details_dashboard_component__["a" /* DetailsDashboardComponent */],
        data: { showCompactHeader: true, showFooter: true }
    }
];
let InteractionDetailsRoutingModule = class InteractionDetailsRoutingModule {
};
InteractionDetailsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)]
    })
], InteractionDetailsRoutingModule);



/***/ }),

/***/ "./src/app/interactions/interaction-details/interaction-details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionDetailsModule", function() { return InteractionDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_dashboard_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_tabs_details_tabs_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details-tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_tabs_details_interaction_details_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_tabs_details_external_xrefs_external_xrefs_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_tabs_details_curation_annotations_curation_annotations_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_viewer_details_viewer_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-viewer/details-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_tabs_details_experimental_conditions_experimental_conditions_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__details_tabs_details_parameters_parameters_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__details_tabs_details_confidences_confidences_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interaction_details_routing_module__ = __webpack_require__("./src/app/interactions/interaction-details/interaction-details-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__details_tabs_details_experiment_experiment_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__details_tabs_details_publication_publication_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__details_tabs_details_participant_table_participant_table_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__details_tabs_details_features_table_features_table_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__details_tabs_details_cv_term_cv_term_component__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__details_tabs_details_cv_term_cv_to_url_pipe__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-to-url.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__details_tabs_details_organism_organism_pipe__ = __webpack_require__("./src/app/interactions/interaction-details/details-tabs/details/organism/organism.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_service_interaction_participants_service__ = __webpack_require__("./src/app/interactions/interaction-details/shared/service/interaction-participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_components_components_module__ = __webpack_require__("./src/app/shared/components/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























let InteractionDetailsModule = class InteractionDetailsModule {
};
InteractionDetailsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_11__interaction_details_routing_module__["a" /* InteractionDetailsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_22__shared_components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__details_dashboard_component__["a" /* DetailsDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__details_viewer_details_viewer_component__["a" /* DetailsViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__details_tabs_details_tabs_component__["a" /* DetailsTabsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__details_tabs_details_interaction_details_component__["a" /* InteractionDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__details_tabs_details_external_xrefs_external_xrefs_component__["a" /* ExternalXrefsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__details_tabs_details_parameters_parameters_component__["a" /* ParametersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__details_tabs_details_experimental_conditions_experimental_conditions_component__["a" /* ExperimentalConditionsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__details_tabs_details_curation_annotations_curation_annotations_component__["a" /* CurationAnnotationsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__details_tabs_details_confidences_confidences_component__["a" /* ConfidencesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__details_tabs_details_experiment_experiment_component__["a" /* ExperimentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__details_tabs_details_publication_publication_component__["a" /* PublicationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__details_tabs_details_participant_table_participant_table_component__["a" /* ParticipantTableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__details_tabs_details_features_table_features_table_component__["a" /* FeaturesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_16__details_tabs_details_cv_term_cv_term_component__["a" /* CvTermComponent */],
            __WEBPACK_IMPORTED_MODULE_18__details_tabs_details_cv_term_cv_to_url_pipe__["a" /* CvToUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_19__details_tabs_details_organism_organism_pipe__["a" /* OrganismPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__shared_service_table_factory_service__["a" /* TableFactoryService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_service_interaction_participants_service__["a" /* InteractionParticipantsService */]
        ]
    })
], InteractionDetailsModule);



/***/ }),

/***/ "./src/app/interactions/interaction-details/shared/service/interaction-participants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionParticipantsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Status; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let InteractionParticipantsService = class InteractionParticipantsService {
    constructor() {
        this.participantStatus = new Map();
        this.idToParticipant = new Map();
        this.proteinSetsUpdateSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.proteinSetsUpdated = this.proteinSetsUpdateSubject.asObservable();
    }
    initParticipants(participants, statusByDefaultForProteins = Status.EXPANDED) {
        this.participantStatus.clear();
        for (const participant of participants) {
            if (participant.object === 'interactor') {
                this.participantStatus.set(participant, participant.type.name === 'protein' ? statusByDefaultForProteins : Status.NON_PROTEIN);
                this.idToParticipant.set(participant.identifier.id, participant);
            }
        }
        this.notifySetsListener();
    }
    setProteinStatus(participant, status) {
        if (!this.participantStatus.has(participant))
            throw new Error(`${participant.label} (id:${participant.identifier.id}) was not defined as a participant`);
        this.participantStatus.set(participant, status);
        this.notifySetsListener();
    }
    updateProteinsStatus(expandedProteins) {
        const collapsedProteins = new Set(this.proteinParticipants);
        expandedProteins.forEach(participant => {
            collapsedProteins.delete(participant);
            this.participantStatus.set(participant, Status.EXPANDED);
        });
        collapsedProteins.forEach(value => this.participantStatus.set(value, Status.COLLAPSED));
        this.notifySetsListener();
    }
    expandAllProteins() {
        this.participantStatus.forEach((participantStatus, participant) => {
            if (participantStatus === Status.COLLAPSED)
                this.participantStatus.set(participant, Status.EXPANDED);
        });
        this.notifySetsListener();
    }
    collapseAllProteins() {
        this.participantStatus.forEach((participantStatus, participant) => {
            if (participantStatus === Status.EXPANDED)
                this.participantStatus.set(participant, Status.COLLAPSED);
        });
        this.notifySetsListener();
    }
    notifySetsListener() {
        let expanded = [], collapsed = [];
        this.participantStatus.forEach((status, participant) => {
            if (status === Status.EXPANDED)
                expanded.push(participant);
            else if (status === Status.COLLAPSED)
                collapsed.push(participant);
        });
        this.proteinSetsUpdateSubject.next({ expanded: expanded, collapsed: collapsed });
    }
    getParticipantStatus(participant) {
        return this.participantStatus.get(participant);
    }
    getParticipantsByStatus(status) {
        let selectedParticipants = [];
        this.participantStatus.forEach((participantStatus, participant) => {
            if (participantStatus === status)
                selectedParticipants.push(participant);
        });
        return selectedParticipants;
    }
    get participants() {
        let participants = [];
        this.participantStatus.forEach((status, participant) => participants.push(participant));
        return participants;
    }
    get expandedParticipants() {
        return this.getParticipantsByStatus(Status.EXPANDED);
    }
    get collapsedParticipants() {
        return this.getParticipantsByStatus(Status.COLLAPSED);
    }
    get nonProteinParticipants() {
        return this.getParticipantsByStatus(Status.NON_PROTEIN);
    }
    get proteinParticipants() {
        let proteins = [];
        this.participantStatus.forEach((status, participant) => {
            if (status !== Status.NON_PROTEIN)
                proteins.push(participant);
        });
        return proteins;
    }
    getParticipantAndStatusById(id) {
        let participant = this.idToParticipant.get(id);
        return { participant: participant, status: this.participantStatus.get(participant) };
    }
};
InteractionParticipantsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], InteractionParticipantsService);

var Status;
(function (Status) {
    Status[Status["EXPANDED"] = 0] = "EXPANDED";
    Status[Status["COLLAPSED"] = 1] = "COLLAPSED";
    Status[Status["NON_PROTEIN"] = 2] = "NON_PROTEIN";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/custom_switchOnOff.css":
/***/ (function(module, exports) {

module.exports = ".switch{\n  --uiSwitchSize: var(--switchSize, 64px);\n  --uiSwitchBgColor: var(--switchBgColor, #f1f1f1);\n  --uiSwitchBgColorActive: var(--switchBgColorActive, rgb(104,41,124));\n  --uiSwitchBorderColorActive: var(--switchBorderColorActive, #fff);\n  --uiSwitchBorderColorFocus: var(--switchBgColorFocus, rgb(104,41,124));\n  --uiSwitchButtonBgColor: var(--switchButtonBgColor, #fff);\n\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.switch__label{\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.switch__toggle{\n  width: 0;\n  height: 0;\n  opacity: 0;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.switch__toggle:focus ~ .switch__label{\n  -webkit-box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorFocus);\n          box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorFocus);\n}\n\n.switch__toggle:checked:focus ~ .switch__label{\n  -webkit-box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorActive);\n          box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorActive);\n}\n\n.switch__label:before, .switch__label:after{\n  content: \"\";\n  cursor: pointer;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.switch__label:before{\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: var(--uiSwitchBgColor);\n}\n\n.switch__label:after{\n  top: 50%;\n  z-index: 3;\n  -webkit-transition: -webkit-transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n  transition: -webkit-transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n  transition: transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n  transition: transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15), -webkit-transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n}\n\n/* type 1 */\n\n.switch_type1{\n  --uiSwitchBorderRadius: var(--switchBorderRadius, 60px);\n\n  width: var(--uiSwitchSize);\n  height: calc((var(--uiSwitchSize) / 2));\n  border-radius: var(--uiSwitchBorderRadius);\n  background-color: var(--uiSwitchBgColorActive);\n}\n\n.switch_type1 .switch__label{\n  border-radius: var(--uiSwitchBorderRadius);\n}\n\n.switch_type1 .switch__label:before{\n  border-radius: var(--uiSwitchBorderRadius);\n  -webkit-transition: opacity .2s ease-out .1s, -webkit-transform .2s ease-out .1s;\n  transition: opacity .2s ease-out .1s, -webkit-transform .2s ease-out .1s;\n  transition: opacity .2s ease-out .1s, transform .2s ease-out .1s;\n  transition: opacity .2s ease-out .1s, transform .2s ease-out .1s, -webkit-transform .2s ease-out .1s;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n\n.switch_type1 .switch__toggle:checked ~ .switch__label:before{\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: .7;\n}\n\n.switch_type1 .switch__label:after{\n  width: calc(var(--uiSwitchSize) / 2);\n  height: calc(var(--uiSwitchSize) / 2);\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n\n  background-color: var(--uiSwitchButtonBgColor);\n  border-radius: 100%;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .3);\n          box-shadow: 0 2px 5px rgba(0, 0, 0, .3);\n}\n\n.switch_type1 .switch__toggle:checked ~ .switch__label:after{\n  -webkit-transform: translate3d(100%, -50%, 0);\n          transform: translate3d(100%, -50%, 0);\n}\n\n/* demo styles for switch */\n\n.switch{\n  --switchSize: 35px;\n  /*margin-top: 40px;*/\n  margin-bottom: 0px;\n}\n\n@media screen and (min-width: 768px){\n\n  html{\n    font-size: 62.5%;\n  }\n}\n\n@media screen and (max-width: 767px){\n\n  html{\n    font-size: 50%;\n  }\n}\n\nbody{\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;\n  font-size: 1.6rem;\n  color: #222;\n  background-color: #dfdfdf;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\na{\n  text-decoration: none;\n  color: #222;\n}\n\n@media screen and (min-width: 641px){\n\n  .footer__container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n\n  .melnik909{\n    margin-left: 2rem;\n  }\n}\n\n@media screen and (max-width: 640px){\n\n  .melnik909{\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNoForm [action]=\"URL\" method=\"post\">\n  <label>\n    <input class=\"hidden\" type=\"text\" name=\"format\" [value]=\"format.name\">\n    <input class=\"hidden\" type=\"text\" name=\"query\" [value]=\"search.spacedQuery\">\n\n    <input class=\"hidden\" type=\"checkbox\" name=\"batchSearch\" [checked]=\"search.isBatchSearch\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"negativeFilter\" [checked]=\"filters.negative\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"mutationFilter\" [checked]=\"filters.mutation\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"expansionFilter\" [checked]=\"filters.expansion\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"intraSpecies\" [checked]=\"filters.intraSpecies\">\n\n    <input class=\"hidden\" type=\"text\" name=\"interactorAcs\"\n           *ngFor=\"let value of selection.interactorAcs\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"binaryInteractionIds\"\n           *ngFor=\"let value of selection.binaryInteractionIds\" [value]=\"value\">\n\n    <input class=\"hidden\" type=\"text\" name=\"minMIScore\" [value]=\"filters.currentMinMIScore\">\n    <input class=\"hidden\" type=\"text\" name=\"maxMIScore\" [value]=\"filters.currentMaxMIScore\">\n\n    <input class=\"hidden\" type=\"text\" name=\"interactorSpeciesFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.SPECIES)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactorTypesFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.INTERACTOR_TYPE)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactionTypesFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.INTERACTION_TYPE)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactionDetectionMethodsFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.DETECTION_METHOD)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactionHostOrganismsFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.HOST_ORGANISM)\" [value]=\"value\">\n  </label>\n  <button class=\"button lightest expanded\" [ngClass]=\"{'no-margin':last}\" [innerHTML]=\"format.html\"></button>\n</form>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_download_format_model__ = __webpack_require__("./src/app/interactions/shared/model/download/format.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_network_selection_service__ = __webpack_require__("./src/app/interactions/shared/service/network-selection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






const baseURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_graph_ws;
let DownloadFormComponent = class DownloadFormComponent {
    constructor(filters, search, selection) {
        this.filters = filters;
        this.search = search;
        this.selection = selection;
        this.format = __WEBPACK_IMPORTED_MODULE_2__shared_model_download_format_model__["a" /* Format */].json;
        this.last = false;
        this.filterTypes = __WEBPACK_IMPORTED_MODULE_3__shared_service_filter_service__["a" /* Filter */];
        this.URL = `${baseURL}/graph/export/interaction/list`;
    }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__shared_model_download_format_model__["a" /* Format */])
], DownloadFormComponent.prototype, "format", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], DownloadFormComponent.prototype, "last", void 0);
DownloadFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-download-form',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_filter_service__["b" /* FilterService */], __WEBPACK_IMPORTED_MODULE_4__home_dashboard_search_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_5__shared_service_network_selection_service__["a" /* NetworkSelectionService */]])
], DownloadFormComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.css":
/***/ (function(module, exports) {

module.exports = "/* Facets customization */\n.dropdown-pane {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 1rem;\n}\n/* Filters bar styling */\n#filters-bar {\n  background: white\n}\n.scrollbar.filter {\n  background: white;\n  width: 100%;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n.no-overflow {\n  overflow-y: unset;\n}\n::ng-deep .custom-slider .ng5-slider .ng5-slider-bar {\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 version%3D%221.1%22 width%3D%22401px%22 height%3D%2221px%22 viewBox%3D%22-0.5 -0.5 401 21%22%3E%3Cdefs%2F%3E%3Cg%3E%3Crect x%3D%220%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23ffffe5%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%2240%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23fff7bc%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%2280%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23fee391%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22120%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23fec44f%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22160%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23fe9929%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22200%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23ec7014%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22240%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23cc4c02%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22280%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23993404%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22320%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23662506%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3Crect x%3D%22360%22 y%3D%220%22 width%3D%2240%22 height%3D%2220%22 fill%3D%22%23361303%22 stroke%3D%22%23d9d9d9%22 pointer-events%3D%22all%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\") !important;\n  background-position: center !important; /* Center the image */\n  background-repeat: no-repeat !important; /* Do not repeat the image */\n  background-size: cover !important; /* display the whole image */\n  z-index: 1;\n  padding: 2px;\n  border-radius: 2px !important;\n  border: 1px solid #D9D9D9 !important;\n}\n::ng-deep .custom-slider .ng5-slider .ng5-slider-selection {\n  z-index: 2 !important;\n  background: rgba(255, 255, 255, 0) !important;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 2px !important;\n  height: 12px;\n  top: 13px;\n}\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer {\n  width: 32px;\n  height: 32px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 2px;\n  -webkit-box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);\n}\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:active,\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:focus {\n  -webkit-box-shadow: 0 0 0 3px #216fd1;\n          box-shadow: 0 0 0 3px #216fd1;\n  outline: none;\n}\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:after {\n  background-color: white !important;\n  top: 10px;\n  left: 10px;\n}\n::ng-deep .custom-slider .ng5-slider .ng5-slider-bubble {\n  bottom: 14px;\n}\n/* Disable color for text in toogles */\n.disabled-color {\n  color: #847f7f;\n}\ndiv.reset-button {\n  text-align: center;\n}\nbutton.delete-button {\n  background-color: #68297C;\n  color: white;\n  padding: 5px;\n}\nbutton.delete-button > i {\n  line-height: 18px;\n}\n.species-cell {\n  color: white;\n  border-radius: 100px;\n  line-height: 16px;\n  /*padding: 2px 6px 0;*/\n}\n.discreet {\n  border-width: 1px;\n  border-style: solid;\n  color: #cdaae0;\n  border-color: #cdaae0;\n  background-color: white;\n  padding: 2px 5px;\n}\n.emphasized {\n  font-weight: bolder;\n  color: white;\n  background-color: #cdaae0;\n  padding: 3px 6px;\n}\n.dashed {\n  border-style: dashed;\n  border-width: 1px;\n  border-color: #68297C;\n  color: #68297C;\n  padding: 2px 5px;\n}\n.dashed.emphasized {\n  color: white;\n}\n@supports ( -moz-appearance:none ) {\n  /* Add non-firefox CSS code here */\n  .discreet,\n  .dashed {\n    padding: 2px 5px 0;\n  }\n\n  .emphasized {\n    padding: 3px 6px 1px;\n  }\n}\n.table-scroll {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  margin: auto;\n  overflow: auto;\n  border-collapse: separate;\n  border: none;\n  border-spacing: 0;\n}\n.table-scroll thead th {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  z-index: 4;\n}\n.term-id {\n  font-weight: bolder;\n  display: inline-block;\n  margin-right: 0.2rem;\n}\nem {\n  font-size: 11pt;\n  font-weight: normal;\n}\n.centered-switch-wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-right: 13px;\n  font-weight: bold;\n}\n.vertically-centered {\n  margin: auto;\n  display: inline-block;\n  /*vertical-align: middle;*/\n}\ninput.vertically-centered {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"filters-bar\" class=\"button-bar\">\n\n  <div class=\"button-group rounded stack-for-small\">\n    <div class=\"button no-hover\">\n      <i class=\"icon icon-functional icon-spacer icon-filter\"></i> Filters\n    </div>\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interactor-species-dropdown\">\n      Interactor Species\n    </button>\n    <div class=\"dropdown-pane\" id=\"interactor-species-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.SPECIES as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <thead>\n          <tr class=\"no-background\">\n            <th colspan=\"3\" class=\"no-horizontal-padding padding-vertical-small\">\n              <span class=\"float-right margin-right-medium\"><em>Filter out cross-species interactions</em></span>\n            </th>\n            <th colspan=\"2\" class=\"no-padding\">\n              <div class=\"centered-switch-wrap\">\n                <span class=\"label margin-right-medium\">Cross</span>\n                <mat-slide-toggle color=\"primary\"\n                                  (change)=\"onChangeInteractionIntraSpeciesFilter($event)\"\n                                  [disabled]=\"!filters.canFilterIntraSpecies()\"\n                                  [checked]=\"filters.intraSpecies\">\n                </mat-slide-toggle>\n                <span class=\"label margin-left-medium\">Intra</span>\n              </div>\n            </th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let species of filters.facets.combined_species\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\"\n              [ngClass]=\"{'disabled-row':filters.intraSpecies && species.valueCount.intra === 0}\">\n            <td class=\"no-padding\">\n              <input name=\"species\" type=\"checkbox\" class=\"vertically-centered\"\n                     #checkbox [value]=\"species.value\"\n                     (change)=\"onChangeInteractorSpeciesFilter($event)\"\n                     [disabled]=\"filters.intraSpecies && species.valueCount.intra === 0\"\n                     [checked]=\"filters.isFilteringValue(filter,species.value)\"/>\n            </td>\n            <td class=\"no-padding\">\n              <span class=\"term-id no-padding no-underline float-right\">{{species.termId}}</span>\n            </td>\n            <td class=\"no-padding\">\n              <span class=\"vertically-centered\">{{species.value}}</span>\n            </td>\n            <ng-template [ngIf]=\"!filters.intraSpecies\">\n              <td style=\"text-align: right\" class=\"no-padding\">\n                  <span class=\"tag-cell species-cell emphasized\"\n                        [ngStyle]=\"{'background-color':species.visualProperty}\"\n                  >{{species.valueCount.all}}</span>\n              </td>\n\n              <td class=\"no-padding\">\n                  <span class=\"tag-cell species-cell discreet\"\n                        [ngStyle]=\"{'border-color':species.visualProperty, 'color':species.visualProperty}\"\n                  >{{species.valueCount.intra}}</span>\n              </td>\n\n            </ng-template>\n\n\n            <ng-template [ngIf]=\"filters.intraSpecies\">\n              <td style=\"text-align: right\" class=\"no-padding\">\n                  <span class=\"tag-cell species-cell discreet\"\n                        [ngStyle]=\"{'border-color':species.visualProperty, 'color':species.visualProperty}\"\n                  >{{species.valueCount.all}}</span>\n              </td>\n\n              <td class=\"no-padding\">\n                  <span class=\"tag-cell species-cell emphasized\"\n                        [ngStyle]=\"{'background-color':species.visualProperty}\"\n                  >{{species.valueCount.intra}}</span>\n              </td>\n            </ng-template>\n          </tr>\n\n          </tbody>\n        </table>\n      </div>\n      <div class=\"reset-button no-margin\" *ngIf=\"filters.isFiltering(filter)\">\n        <button class=\"centered delete-button margin-top-medium\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interactor-type-dropdown\">\n      Interactor Type\n    </button>\n    <div class=\"dropdown-pane\" id=\"interactor-type-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.INTERACTOR_TYPE as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.type_MI_A_B_styled\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractorTypeFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized\">{{molecule.valueCount}}</span>\n            </td>\n            <td class=\"no-padding\">\n              <ip-node-diagram [shape]=\"shapes[molecule.visualProperty]\" color=\"#cdaae0\" class=\"margin-left-small\"\n                               height=\"16pt\" style=\"padding-right: 3px\"></ip-node-diagram>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\"\n                matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-type-dropdown\">\n      Interaction Type\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-type-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.INTERACTION_TYPE as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.type_mi_identifier_styled\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractionTypeFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized light-background\"\n                    [ngStyle]=\"{'background-color':molecule.visualProperty , 'color': fontColor(molecule.visualProperty)}\">\n                {{molecule.valueCount}}\n              </span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-detection-method-dropdown\">\n      Interaction Detection Method\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-detection-method-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.DETECTION_METHOD as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.detection_method_s\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractionDetectionMethodFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized\"\n              >{{molecule.valueCount}}</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\"\n                matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-host-organism-dropdown\">\n      Interaction Host Organism\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-host-organism-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.HOST_ORGANISM as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.host_organism_taxId_styled\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractionHostOrganismFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized\"\n                    [ngStyle]=\"{'background-color':molecule.visualProperty }\"\n              >{{molecule.valueCount}}</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-mutation-dropdown\">\n      Mutation\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-mutation-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.MUTATION as filter\">\n      <em>Interactions affected by mutation only</em>\n      <div class=\"centered-switch-wrap\">\n        <span class=\"tag-cell species-cell margin-right-small\"\n              [ngClass]=\"{'discreet':filters.mutation, 'emphasized':!filters.mutation}\">{{filters.nbNonMutation}}</span>\n        <mat-slide-toggle color=\"primary\"\n                          (change)=\"filters.updateFilter(filter, $event.checked)\"\n                          [disabled]=\"!filters.hasMutation\"\n                          [checked]=\"filters.mutation\">\n        </mat-slide-toggle>\n        <span class=\"tag-cell species-cell emphasized\" style=\"margin-left: 4px;\"\n              [ngStyle]=\"{\n              'background-color': filters.mutation ? filters.mutationColor : 'white',\n              'color': filters.mutation ? 'white' : filters.mutationColor,\n              'border-color': filters.mutationColor\n              }\"\n              [ngClass]=\"{'discreet':!filters.mutation, 'emphasized':filters.mutation}\">{{filters.nbMutation}}</span>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-expansion-dropdown\">\n      Expansion\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-expansion-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.EXPANSION as filter\">\n\n      <em>Non-expanded interactions only</em>\n      <div class=\"centered-switch-wrap\">\n        <span class=\"tag-cell species-cell dashed margin-right-small\"\n              [ngClass]=\"{'discreet':filters.expansion, 'emphasized':!filters.expansion}\">{{filters.nbNonExpansion}}</span>\n        <mat-slide-toggle color=\"primary\"\n                          (change)=\"filters.updateFilter(filter, $event.checked)\"\n                          [disabled]=\"!filters.hasExpansion\"\n                          [checked]=\"filters.expansion\">\n        </mat-slide-toggle>\n        <span class=\"tag-cell species-cell emphasized\" style=\"margin-left: 4px;\"\n              [ngClass]=\"{'discreet':!filters.expansion, 'emphasized':filters.expansion}\">{{filters.nbExpansion}}</span>\n      </div>\n    </div>\n\n    <button class=\"button lighter on-top\" type=\"button\" data-toggle=\"score-dropdown\"\n            [@bendTip]=\"filters.anyFiltersSelected() ? 'tipStraight' : 'tipBended'\">\n      MI Score\n    </button>\n    <div class=\"dropdown-pane\" id=\"score-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.MI_SCORE as filter\">\n      <div style=\"width: 300px\" class=\"custom-slider margin-bottom-large\">\n        <ng5-slider class=\"columns medium-3\" [(value)]=\"filters.currentMinMIScore\"\n                    [(highValue)]=\"filters.currentMaxMIScore\"\n                    [options]=\"options\"\n                    (userChangeEnd)=\"onUserChangeEnd($event)\"></ng5-slider>\n      </div>\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n\n    <button @slideIn *ngIf=\"filters.anyFiltersSelected()\" class=\"button lighter\" type=\"button\"\n            (click)=\"filters.resetAllFilters()\"\n            style=\"z-index: 0\">\n      <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n    </button>\n\n  </div>\n\n  <div class=\"button-group rounded stack-for-small\">\n    <div class=\"button no-hover\">\n      <i class=\"icon icon-functional icon-spacer icon-share\"></i> Export\n    </div>\n\n    <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"export-network\" *ngIf=\"view.visible\">\n      Network\n    </button>\n    <div class=\"dropdown-pane no-padding no-border\" id=\"export-network\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\">\n      <ul class=\"no-bullet no-margin\">\n        <li><a class=\"button lightest expanded\" (click)=\"view.viewer.exportAs('png')\">PNG</a></li>\n        <li><a class=\"button lightest expanded no-margin\" (click)=\"view.viewer.exportAs('graphml')\">GraphML</a>\n        </li>\n      </ul>\n    </div>\n\n    <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"export-table\">\n      Table\n    </button>\n    <div class=\"dropdown-pane no-padding no-border\" id=\"export-table\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\">\n      <ul class=\"no-bullet no-margin\">\n        <li *ngFor=\"let format of formats; let last = last;\">\n          <ip-download-form [format]=\"format\" [last]=\"last\"></ip-download-form>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsFiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng5_slider__ = __webpack_require__("./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_network_view_service__ = __webpack_require__("./src/app/interactions/shared/service/network-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_foundation_utils__ = __webpack_require__("./src/app/shared/utils/foundation-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_download_format_model__ = __webpack_require__("./src/app/interactions/shared/model/download/format.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_model_network_shapes_node_shape__ = __webpack_require__("./src/app/interactions/shared/model/network-shapes/node-shape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let InteractionsFiltersComponent = class InteractionsFiltersComponent {
    constructor(tableFactory, view, filters) {
        this.tableFactory = tableFactory;
        this.view = view;
        this.filters = filters;
        this.formats = __WEBPACK_IMPORTED_MODULE_6__shared_model_download_format_model__["a" /* Format */].instances;
        this.filterTypes = __WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */];
        this.shapes = __WEBPACK_IMPORTED_MODULE_8__shared_model_network_shapes_node_shape__["a" /* NodeShape */];
    }
    ngOnInit() {
        this.initSliderRange();
    }
    ngAfterViewInit() {
        $('ip-interactions-filters').foundation();
        $(window).trigger('load.zf.sticky');
        this.tableFactory.makeTableHeaderSticky(); // Enables sticky header for all tables on the page
        __WEBPACK_IMPORTED_MODULE_5__shared_utils_foundation_utils__["a" /* FoundationUtils */].adjustWidth();
    }
    initSliderRange() {
        this.options = {
            floor: 0,
            ceil: 1,
            minLimit: 0,
            maxLimit: 1,
            step: 0.01,
            animate: false,
            showSelectionBar: true,
            translate: (value, label) => {
                switch (label) {
                    case __WEBPACK_IMPORTED_MODULE_1_ng5_slider__["a" /* LabelType */].Low:
                        return '<b>Min:</b> ' + value;
                    case __WEBPACK_IMPORTED_MODULE_1_ng5_slider__["a" /* LabelType */].High:
                        return '<b>Max:</b> ' + value;
                    default:
                        return String(value);
                }
            },
            getPointerColor: (value) => {
                if (value <= 0.1) {
                    return '#FFFFE5';
                }
                else if (value <= 0.2) {
                    return '#FFF7BC';
                }
                else if (value <= 0.3) {
                    return '#FEE391';
                }
                else if (value <= 0.4) {
                    return '#FEC44F';
                }
                else if (value <= 0.5) {
                    return '#FE9929';
                }
                else if (value <= 0.6) {
                    return '#EC7014';
                }
                else if (value <= 0.7) {
                    return '#CC4C02';
                }
                else if (value <= 0.8) {
                    return '#993404';
                }
                else if (value <= 0.9) {
                    return '#662506';
                }
                else {
                    return '#361303';
                }
            }
        };
    }
    fontColor(backgroundColor) {
        const rgb = this.hexToRgb(backgroundColor.substring(1));
        const lum = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
        return lum < 100 ? '#ffffff' : '#000000b0';
    }
    hexToRgb(hex) {
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }
    /**
     * Use this function to avoid horizontal scrollbar in firefox
     */
    scrollStyle(filter) {
        return this.filters.getFacets(filter).length > 20 ?
            { 'overflow-y': 'scroll', 'height': '39vh' } :
            { 'overflow-y': 'hidden', 'height': 'auto' };
    }
    onChangeInteractorSpeciesFilter(event) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].SPECIES, event.target.value);
    }
    onChangeInteractorTypeFilter(event) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].INTERACTOR_TYPE, event.target.value);
    }
    onChangeInteractionTypeFilter(event) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].INTERACTION_TYPE, event.target.value);
    }
    onChangeInteractionDetectionMethodFilter(event) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].DETECTION_METHOD, event.target.value);
    }
    onChangeInteractionHostOrganismFilter(event) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].HOST_ORGANISM, event.target.value);
    }
    onChangeInteractionIntraSpeciesFilter(event) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].INTRA_SPECIES, event.checked);
    }
    onUserChangeEnd(changeContext) {
        this.filters.updateFilter(__WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["a" /* Filter */].MI_SCORE, { min: changeContext.value, max: changeContext.highValue });
    }
};
InteractionsFiltersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactions-filters',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.css"), __webpack_require__("./src/app/interactions/interactions-results/interactions-filters/custom_switchOnOff.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* trigger */])('bendTip', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('tipBended', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({
                    borderRadius: '0 1.4em 1.4em 0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('tipStraight', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({
                    borderRadius: '0 0 0 0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])('tipBended => tipStraight', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])('tipStraight => tipBended', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('250ms 250ms')
                ]),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* trigger */])('slideIn', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])(':enter', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ transform: 'translateX(-100%)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('350ms 150ms')
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])(':leave', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('350ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ transform: 'translateX(-100%)' }))
                ])
            ]),
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_table_factory_service__["a" /* TableFactoryService */], __WEBPACK_IMPORTED_MODULE_4__shared_service_network_view_service__["a" /* NetworkViewService */], __WEBPACK_IMPORTED_MODULE_7__shared_service_filter_service__["b" /* FilterService */]])
], InteractionsFiltersComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactions-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row expanded margin-top-large margin-bottom-large\">\n\n  <!--  TODO make this bookmarkable like the documentation, it needs to take into account the url params -->\n  <ul class=\"tabs\" data-tabs id=\"search-results-tabs\">\n    <li class=\"tabs-title is-active\">\n      <a href=\"#interactions\" aria-selected=\"true\" (click)=\"interactionsTabSelected()\">Interactions</a>\n    </li>\n    <li class=\"tabs-title\"><a href=\"#interactor\" (click)=\"interactorsTabSelected()\">Interactors</a></li>\n\n    <ip-column-toggle *ngIf=\"isInteractionTableShown\"\n                      [columns]=\"interactionsTable.columns\"\n                      [dataTable]=\"interactionsTable.dataTable\"\n                      [columnView]=\"interactionsTable.columnView\"\n                      [isTabActive]=\"isTabInteractionActive\" class=\"float-right\"></ip-column-toggle>\n\n    <ip-column-toggle *ngIf=\"!isInteractionTableShown\"\n                      [columns]=\"interactorsTable.columns\"\n                      [dataTable]=\"interactorsTable.dataTable\"\n                      [columnView]=\"interactorsTable.columnView\"\n                      [isTabActive]=\"isTabInteractorActive\" class=\"float-right\"></ip-column-toggle>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"search-results-tabs\" data-deep-link=\"true\" data-update-history=\"false\">\n    <div class=\"tabs-panel table-tab is-active\" id=\"interactions\">\n      <ip-interactions-table [interactionTab]=\"isTabInteractionActive\"></ip-interactions-table>\n    </div>\n\n    <div class=\"tabs-panel table-tab\" id=\"interactor\">\n      <ip-interactors-table [interactorTab]=\"isTabInteractorActive\"></ip-interactors-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactions_table_interactions_table_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interactors_table_interactors_table_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let InteractionsListComponent = class InteractionsListComponent {
    constructor() {
        this._isTabInteractionActive = false;
        this._isTabInteractorActive = false;
    }
    ngOnInit() {
        $('ip-interactions-list').foundation();
    }
    ngAfterViewInit() {
        $('#search-results-tabs').on('change.zf.tabs', () => {
            if ($('#interactions').hasClass('is-active') === true) {
                this.isTabInteractionActive = true;
                this.isTabInteractorActive = false;
                $('[aria-describedby="interactorsTable_info"]').css('visibility', 'hidden');
                $('[aria-describedby="interactionsTable_info"]').css('visibility', 'visible');
            }
            else if ($('#interactor').hasClass('is-active') === true) {
                this.isTabInteractionActive = false;
                this.isTabInteractorActive = true;
                $('[aria-describedby="interactorsTable_info"]').css('visibility', 'visible');
                $('[aria-describedby="interactionsTable_info"]').css('visibility', 'hidden');
            }
        });
    }
    /** EVENT EMITTERS **/
    interactorsTabSelected() {
        if (!this.isTabInteractorActive) {
            this.isTabInteractorActive = true;
            this.isTabInteractionActive = false;
        }
    }
    interactionsTabSelected() {
        if (!this.isTabInteractionActive) {
            this.isTabInteractionActive = true;
            this.isTabInteractorActive = false;
        }
    }
    /** GETTERS AND SETTERS **/
    get isTabInteractionActive() {
        return this._isTabInteractionActive;
    }
    set isTabInteractionActive(value) {
        this._isTabInteractionActive = value;
    }
    get isTabInteractorActive() {
        return this._isTabInteractorActive;
    }
    set isTabInteractorActive(value) {
        this._isTabInteractorActive = value;
    }
    get isInteractionTableShown() {
        return this.isTabInteractionActive || !(this.isTabInteractionActive || this.isTabInteractorActive);
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__interactions_table_interactions_table_component__["a" /* InteractionsTableComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interactions_table_interactions_table_component__["a" /* InteractionsTableComponent */])
], InteractionsListComponent.prototype, "interactionsTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__interactors_table_interactors_table_component__["a" /* InteractorsTableComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__interactors_table_interactors_table_component__["a" /* InteractorsTableComponent */])
], InteractionsListComponent.prototype, "interactorsTable", void 0);
InteractionsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactions-list',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-list.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InteractionsListComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.css":
/***/ (function(module, exports) {

module.exports = ".iconColumn {\n  color: #44545f;\n  font-size: 1.5em;\n}\n\nselect {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  border-radius: 0;\n}\n\n.top {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-pack: distribute!important;\n      justify-content: space-around!important;\n}\n\n.top > .dataTables_info {\n  -webkit-box-ordinal-group: 1!important;\n      -ms-flex-order: 0!important;\n          order: 0!important;\n}\n\n.top > .dataTables_paginate {\n  -webkit-box-ordinal-group: 2!important;\n      -ms-flex-order: 1!important;\n          order: 1!important;\n  padding-top: 0;\n}\n\n.top > .dataTables_length {\n  -webkit-box-ordinal-group: 3!important;\n      -ms-flex-order: 2!important;\n          order: 2!important;\n  padding-top: 3px;\n}\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div id=\"innerTable\">\n    <table id=\"interactionsTable\" class=\"display tableDisplay\">\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__ = __webpack_require__("./src/app/shared/utils/string-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_tables_interaction_table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/interaction-table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_network_selection_service__ = __webpack_require__("./src/app/interactions/shared/service/network-selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









const baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_ws;
const ebiURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ebi_url;
let InteractionsTableComponent = class InteractionsTableComponent {
    constructor(route, tableFactory, networkSelection, search, filters) {
        this.route = route;
        this.tableFactory = tableFactory;
        this.networkSelection = networkSelection;
        this.search = search;
        this.filters = filters;
        this.columnView = 'interactions_columnView';
        this._columns = new __WEBPACK_IMPORTED_MODULE_5__shared_model_tables_interaction_table_model__["a" /* InteractionTable */]();
        this.tableUnselectedEvent = new CustomEvent('tableUnselected', { bubbles: true });
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            if (this.dataTable !== undefined) {
                const table = $('#interactionsTable');
                this.dataTable = table.DataTable().ajax.reload();
            }
        });
        this.initDataTable();
        this.networkSelection.registerSelectionListener(this.dataTable, this);
        this.tableFactory.enableShowButtons();
        this.tableFactory.initTopSlider('interactionsTable');
        this.tableFactory.initShadowBorder('interactionsTable');
    }
    ngOnChanges(changes) {
        if (changes.interactionTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            const table = $('#interactionsTable');
            this.dataTable = table.DataTable().columns.adjust().draw();
        }
    }
    ngAfterViewInit() {
        const interactionsTable = $('#interactionsTable');
        interactionsTable.on('change', 'input[type=\'checkbox\']', (e) => {
            const interactionSel = e.currentTarget.id;
            if (this.interactionSelected !== interactionSel) {
                const previousCheckbox = $(`#${this.interactionSelected}:checkbox`);
                previousCheckbox.prop('checked', false);
                this.interactionSelected = interactionSel;
                const newCheckbox = $(`#${interactionSel}:checkbox`);
                newCheckbox.prop('checked', true);
                const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
                    bubbles: true,
                    detail: {
                        interactionId: this.interactionSelected
                    }
                });
                document.dispatchEvent(interactionSelectedEvent);
            }
            else {
                // Unselected
                this.interactionSelected = undefined;
                document.dispatchEvent(this.tableUnselectedEvent);
            }
        });
        // When table redrawn keep row selection synchronization between tables
        interactionsTable.on('draw.dt', () => {
            if (this.interactionSelected !== undefined) {
                const previousCheckbox = $(`#${this.interactionSelected}:checkbox`);
                previousCheckbox.prop('checked', true);
                const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
                    bubbles: true,
                    detail: {
                        interactionId: this.interactionSelected
                    }
                });
                document.dispatchEvent(interactionSelectedEvent);
            }
        });
    }
    clearTableSelection() {
        if (!this.interactionSelected) {
            return;
        }
        const selectedInteraction = $(`#${this.interactionSelected}:checkbox`);
        if (selectedInteraction.length > 0) {
            selectedInteraction.prop('checked', false);
            this.interactionSelected = undefined;
        }
    }
    updateTable() {
        const table = $('#interactionsTable');
        this.dataTable = table.DataTable().columns.adjust().draw();
    }
    initDataTable() {
        const table = $('#interactionsTable');
        this.dataTable = table.DataTable({
            ordering: false,
            searching: false,
            paging: true,
            lengthMenu: [25, 50, 75, 100, 150, 200, 500],
            pageLength: 25,
            pagingType: 'numbers',
            processing: true,
            serverSide: true,
            dom: '<"top"filp>rt<"bottom"ifp>',
            scrollX: true,
            fixedHeader: false,
            ajax: {
                url: `${baseURL}/interaction/list/`,
                type: 'POST',
                data: (d) => {
                    d.page = d.start / d.length;
                    d.pageSize = d.length;
                    this.search.toParams(d);
                    this.networkSelection.toParams(d);
                    this.filters.toParams(d);
                }
            },
            columns: [
                {
                    data: this._columns.id.data,
                    title: this._columns.id.title,
                    render: function (data, type, full) {
                        if (type === 'display') {
                            return `<div>
                        <input type="checkbox" id="${full.binaryInteractionId}" name="check" value="${data}"/>
                        <span class="margin-left-medium">
                          <a href="${__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].context_path}/details/interaction/${full.ac}" class="icon-link tool-tip" target="_blank">
                            <i class="icon icon-common icon-search-document"></i>
                            <span class="tool-tip-text">Show details of <span class="nowrap">${full.ac}</span></span>
                          </a>
                        </span>
                      </div>`;
                        }
                        return data;
                    }
                },
                {
                    data: this._columns.moleculeA.data,
                    title: this._columns.moleculeA.title
                },
                {
                    data: this._columns.moleculeB.data,
                    title: this._columns.moleculeB.title
                },
                {
                    data: this._columns.identifierA.data,
                    defaultContent: '',
                    title: this._columns.identifierA.title,
                    render: (data, type) => {
                        if (type === 'display' && data !== null) {
                            return this.tableFactory.identifierRender(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["c" /* extractId */])(data));
                        }
                        return data;
                    }
                },
                {
                    data: this._columns.identifierB.data,
                    defaultContent: '',
                    title: this._columns.identifierB.title,
                    render: (data, type) => {
                        if (type === 'display' && data !== null) {
                            return this.tableFactory.identifierRender(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["c" /* extractId */])(data));
                        }
                        return data;
                    }
                },
                {
                    data: this._columns.typeA.data,
                    title: this._columns.typeA.title,
                    render: this.tableFactory.cvRender('typeMIA')
                },
                {
                    data: this._columns.typeB.data,
                    title: this._columns.typeB.title,
                    render: this.tableFactory.cvRender('typeMIB')
                },
                {
                    data: this._columns.speciesA.data,
                    title: this._columns.speciesA.title,
                    render: this.tableFactory.speciesRender('taxIdA')
                },
                {
                    data: this._columns.speciesB.data,
                    title: this._columns.speciesB.title,
                    render: this.tableFactory.speciesRender('taxIdB')
                },
                {
                    data: this._columns.hostOrganism.data,
                    title: this._columns.hostOrganism.title,
                    render: this.tableFactory.speciesRender('hostOrganismTaxId')
                },
                {
                    data: this._columns.detectionMethod.data,
                    title: this._columns.detectionMethod.title,
                    render: this.tableFactory.cvRender('detectionMethodMIIdentifier')
                },
                {
                    data: this._columns.publicationIdentifiers.data,
                    title: this._columns.publicationIdentifiers.title,
                    render: this.tableFactory.enlistWithButtons((d) => {
                        const data_s = d.split('(');
                        const publicationId = data_s[0].trim();
                        const publicationSource = data_s[1].slice(0, -1);
                        let url = '';
                        if (publicationSource === 'pubmed' && !publicationId.includes('unassigned')) {
                            url = 'https://europepmc.org/article/MED/' + publicationId;
                        }
                        else if (publicationSource === 'imex') {
                            url = ebiURL + '/intact/imex/main.xhtml?query=' + publicationId;
                        }
                        else if (publicationSource === 'doi') {
                            url = 'https://www.doi.org/' + publicationId;
                        }
                        else {
                            return;
                        }
                        return `<div><span class="detailsCell">
                          ${url !== '' ? `<a href="${url}" target="_blank">${publicationId}</a>` : publicationId}
                      </span></div>`;
                    }, 'alignCell', false)
                },
                {
                    data: this._columns.type.data,
                    title: this._columns.type.title,
                    render: this.tableFactory.cvRender('typeMIIdentifier')
                },
                {
                    data: this._columns.ac.data,
                    title: this._columns.ac.title,
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return `<div>
                          <span>
                            <a href="${__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].context_path}/details/interaction/${data}" style="white-space: nowrap">${data}</a>
                          </span>
                        </div>`;
                        }
                    }
                },
                {
                    data: this._columns.database.data,
                    title: this._columns.database.title
                },
                {
                    data: this._columns.confidenceValue.data,
                    title: this._columns.confidenceValue.title,
                    render: this.tableFactory.enlistWithButtons((d) => {
                        if (!d.includes('intact-miscore')) {
                            const [name, value] = d.split(/[()]/);
                            const fixed = parseFloat(value).toFixed(2);
                            return `<div class="tag-cell-container vertical-flex"><span class="detailsExpansionsCell tag-cell centered">${name}:${fixed}</span></div>`;
                        }
                        const YELLOW_ORANGE_BROWN_PALETTE = [
                            'rgb(255,255,229)',
                            'rgb(255,247,188)',
                            'rgb(254,227,145)',
                            'rgb(254,196,79)',
                            'rgb(254,153,41)',
                            'rgb(236,112,20)',
                            'rgb(204,76,2)',
                            'rgb(153,52,4)',
                            'rgb(102,19,5)',
                            'rgb(54, 19, 3)'
                        ];
                        const YELLOW_ORANGE_BROWN_PALETTE_TEXT = [
                            'rgb(254,153,41)',
                            'rgb(254,153,41)',
                            'rgb(254,153,41)',
                            'rgb(254,153,41)',
                            'rgb(254,153,41)',
                            'rgb(236,112,20)',
                            'rgb(204,76,2)',
                            'rgb(153,52,4)',
                            'rgb(102,19,5)',
                            'rgb(54, 19, 3)'
                        ];
                        const YELLOW_ORANGE_BROWN_PALETTE_BG = [
                            'rgba(255,255,229,0.1)',
                            'rgba(255,247,188,0.1)',
                            'rgba(254,227,145,0.1)',
                            'rgba(254,196,79,0.1)',
                            'rgba(254,153,41,0.1)',
                            'rgba(236,112,20,0.1)',
                            'rgba(204,76,2,0.1)',
                            'rgba(153,52,4,0.1)',
                            'rgba(102,19,5,0.1)',
                            'rgba(54, 19,3,0.1)'
                        ];
                        const score = d.split(':');
                        const paletteIndex = Math.floor(parseFloat(score[1]) * 10);
                        // noinspection CssInvalidPropertyValue
                        return `<div class="tag-cell-container vertical-flex">
                          <a class="detailsConfidencesCell tag-cell centered" target="_blank"
                          href="${__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].context_path}/documentation/docs#interaction_scoring"
                          style="background-color:${YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex]};
                                 border:1px solid ${YELLOW_ORANGE_BROWN_PALETTE[paletteIndex]};
                                 color: ${YELLOW_ORANGE_BROWN_PALETTE_TEXT[paletteIndex]}">
                            ${d.replace('intact-miscore', 'MI Score')}
                          </a>
                        </div>`;
                    }, '', false)
                },
                {
                    data: this._columns.expansionMethod.data,
                    title: this._columns.expansionMethod.title,
                    defaultContent: ' ',
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return `<div style="display: flex">
                        <a target="_blank" class="tag-cell detailsExpansionsCell"
                           href="${__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].context_path}/documentation/docs#expansion_method" >
                            ${data}
                        </a>
                      </div>`;
                        }
                    }
                },
                {
                    data: this._columns.experimentalRoleA.data,
                    title: this._columns.experimentalRoleA.title,
                    defaultContent: ' ',
                    render: this.tableFactory.cvRender('experimentalRoleMIIdentifierA')
                },
                {
                    data: this._columns.experimentalRoleB.data,
                    title: this._columns.experimentalRoleB.title,
                    defaultContent: ' ',
                    render: this.tableFactory.cvRender('experimentalRoleMIIdentifierB')
                },
                {
                    data: this._columns.biologicalRoleA.data,
                    title: this._columns.biologicalRoleA.title,
                    defaultContent: ' ',
                    render: this.tableFactory.cvRender('biologicalRoleMIIdentifierA')
                },
                {
                    data: this._columns.biologicalRoleB.data,
                    title: this._columns.biologicalRoleB.title,
                    defaultContent: ' ',
                    render: this.tableFactory.cvRender('biologicalRoleMIIdentifierB')
                },
                {
                    data: this._columns.aliasesA.data,
                    title: this._columns.aliasesA.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["a" /* extractAlias */])(d)))
                },
                {
                    data: this._columns.aliasesB.data,
                    title: this._columns.aliasesB.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["a" /* extractAlias */])(d)))
                },
                {
                    data: this._columns.featureCount.data,
                    title: this._columns.featureCount.title,
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return `<div class="alignCell"><span>${data}</span></div>`;
                        }
                    }
                },
                {
                    data: this._columns.parameters.data,
                    title: this._columns.parameters.title,
                    defaultContent: ' ',
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return `<div class="parametersCell"><span>${data}</span></div>`;
                        }
                    }
                },
                {
                    data: this._columns.annotationsA.data,
                    title: this._columns.annotationsA.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
                        ['comment', { class: 'detailsCommentsCell', symbol: 'icon-comment' }],
                        ['default', { class: 'detailsAllCell', symbol: 'icon-tag' }]
                    ]))(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["b" /* extractAnnotation */])(d)), 'annotationsList')
                },
                {
                    data: this._columns.annotationsB.data,
                    title: this._columns.annotationsB.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
                        ['comment', { class: 'detailsCommentsCell', symbol: 'icon-comment' }],
                        ['default', { class: 'detailsAllCell', symbol: 'icon-tag' }]
                    ]))(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["b" /* extractAnnotation */])(d)), 'annotationsList')
                },
                {
                    data: this._columns.annotations.data,
                    title: this._columns.annotations.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
                        ['figure legend', { class: 'detailsFigureLegendCell', symbol: 'icon-image' }],
                        ['comment', { class: 'detailsCommentsCell', symbol: 'icon-comment' }],
                        ['caution', { class: 'detailsCautionsCell', symbol: 'icon-exclamation-triangle' }],
                        ['default', { class: 'detailsAllCell', symbol: 'icon-tag' }]
                    ]))(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["b" /* extractAnnotation */])(d)), 'annotationsList')
                }
            ],
            drawCallback: function () {
                $('#interactionsTableWidthMimic').width($('#interactionsTable').width());
                $('.table-list').parent('td').css('vertical-align', 'top');
                $('.collapse-panel').css('display', 'none');
            }
        });
    }
    /************************* /
     /** GETTERS AND SETTERS ** /
     /*************************/
    get columns() {
        return this._columns;
    }
    get interactionSelected() {
        return this._interactionSelected;
    }
    set interactionSelected(value) {
        this._interactionSelected = value;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InteractionsTableComponent.prototype, "interactionTab", void 0);
InteractionsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactions-table',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_4__shared_service_table_factory_service__["a" /* TableFactoryService */],
        __WEBPACK_IMPORTED_MODULE_6__shared_service_network_selection_service__["a" /* NetworkSelectionService */],
        __WEBPACK_IMPORTED_MODULE_7__home_dashboard_search_service_search_service__["a" /* SearchService */],
        __WEBPACK_IMPORTED_MODULE_8__shared_service_filter_service__["b" /* FilterService */]])
], InteractionsTableComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <table id=\"interactorsTable\" class=\"display tableDisplay\">\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractorsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__ = __webpack_require__("./src/app/shared/utils/string-utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_tables_interactor_table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/interactor-table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_network_selection_service__ = __webpack_require__("./src/app/interactions/shared/service/network-selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









const baseURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_ws;
let InteractorsTableComponent = class InteractorsTableComponent {
    constructor(route, tableFactory, networkSelection, search, filters) {
        this.route = route;
        this.tableFactory = tableFactory;
        this.networkSelection = networkSelection;
        this.search = search;
        this.filters = filters;
        this.columnView = 'interactors_columnView';
        this._columns = new __WEBPACK_IMPORTED_MODULE_5__shared_model_tables_interactor_table_model__["a" /* InteractorTable */]();
        this.tableUnselected = new CustomEvent('tableUnselected', { bubbles: true });
    }
    ngOnInit() {
        this.table = $('#interactorsTable');
        this.route.queryParams
            .subscribe(() => {
            if (this.dataTable !== undefined) {
                this.dataTable = this.table.DataTable().ajax.reload();
            }
        });
        this.initDataTable();
        this.networkSelection.registerSelectionListener(this.dataTable, this);
        this.tableFactory.initTopSlider('interactorsTable');
        this.tableFactory.initShadowBorder('interactorsTable');
    }
    ngOnChanges(changes) {
        if (changes.interactorTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            this.table = $('#interactorsTable');
            this.dataTable = this.table.DataTable().columns.adjust().draw();
        }
    }
    ngAfterViewInit() {
        const interactorsTable = $('#interactorsTable');
        interactorsTable.on('change', 'input[type=\'checkbox\']', (e) => {
            const interactorSel = e.currentTarget.id;
            if (this.interactorSelected !== interactorSel) {
                const previousInput = $(`#${this.interactorSelected}:checkbox`);
                previousInput.prop('checked', false);
                this.interactorSelected = interactorSel;
                const currentInput = $(`#${interactorSel}:checkbox`);
                currentInput.prop('checked', true);
                const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
                    bubbles: true,
                    detail: {
                        interactorId: this.interactorSelected
                    }
                });
                document.dispatchEvent(interactorSelectedEvent);
            }
            else {
                // Unselected
                this.interactorSelected = undefined;
                document.dispatchEvent(this.tableUnselected);
            }
        });
        // When table redrawn keep row selection synchronization between tables
        interactorsTable.on('draw.dt', () => {
            if (this.interactorSelected !== undefined) {
                const selector = $(`#${this.interactorSelected}:checkbox`);
                selector.prop('checked', true);
                const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
                    bubbles: true,
                    detail: {
                        interactorId: this.interactorSelected
                    }
                });
                document.dispatchEvent(interactorSelectedEvent);
            }
        });
        interactorsTable.on('resize', () => $('#interactorsTableWidthMimic').width(interactorsTable.width()));
    }
    clearTableSelection() {
        if (!this.interactorSelected) {
            return;
        }
        const selectedInteractorCheckbox = $(`#${this.interactorSelected}:checkbox`);
        if (selectedInteractorCheckbox.length > 0) {
            selectedInteractorCheckbox.prop('checked', false);
            this.interactorSelected = undefined;
        }
    }
    initDataTable() {
        const table = $('#interactorsTable');
        this.dataTable = table.DataTable({
            ordering: false,
            searching: false,
            paging: true,
            lengthMenu: [25, 50, 75, 100, 150, 200, 500],
            pageLength: 25,
            pagingType: 'numbers',
            processing: true,
            serverSide: true,
            dom: '<"top"flip>rt<"bottom"ifp>',
            scrollX: true,
            fixedHeader: false,
            ajax: {
                url: `${baseURL}/interaction/interactors/list/`,
                type: 'POST',
                data: (d) => {
                    d.page = d.start / d.length;
                    d.pageSize = d.length;
                    this.search.toParams(d);
                    this.networkSelection.toParams(d);
                    this.filters.toParams(d);
                }
            },
            columns: [
                {
                    data: this._columns.select.data,
                    title: this._columns.select.title,
                    render: function (data, type, full) {
                        if (type === 'display') {
                            return `<div class="margin-left-large">
                        <input type="checkbox" id="${full.interactorAc}" name="check" value="${data}"/>
                      </div>`;
                        }
                        return data;
                    }
                },
                {
                    data: this._columns.accession.data,
                    title: this._columns.accession.title
                },
                {
                    data: this._columns.name.data,
                    title: this._columns.name.title
                },
                {
                    data: this._columns.preferredId.data,
                    title: this._columns.preferredId.title,
                    render: (data, type) => {
                        if (type === 'display' && data !== null) {
                            return this.tableFactory.identifierRender(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["c" /* extractId */])(data));
                        }
                        return data;
                    }
                },
                {
                    data: this._columns.type.data,
                    title: this._columns.type.title,
                    render: this.tableFactory.cvRender('interactorTypeMIIdentifier')
                },
                {
                    data: this._columns.species.data,
                    title: this._columns.species.title,
                    render: this.tableFactory.speciesRender('interactorTaxId')
                },
                {
                    data: this._columns.description.data,
                    title: this._columns.description.title
                },
                {
                    data: this._columns.alias.data,
                    title: this._columns.alias.title,
                    render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["a" /* extractAlias */])(d)))
                },
                {
                    data: this._columns.alternativeIds.data,
                    title: this._columns.alternativeIds.title,
                    render: this.tableFactory.groupBy((d) => Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["c" /* extractId */])(d).database, this.tableFactory.enlist((d) => this.tableFactory.identifierLink(Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_string_utils__["c" /* extractId */])(d))), this.tableFactory.databaseTag)
                },
                {
                    data: this._columns.interactionSearchCount.data,
                    title: this._columns.interactionSearchCount.title,
                },
                {
                    data: this._columns.interactionCount.data,
                    title: this._columns.interactionCount.title
                }
            ],
            drawCallback: function () {
                $('#interactorsTableWidthMimic').width($('#interactorsTable').width());
                $('.table-list').parent('td').css('vertical-align', 'top');
                $('.collapse-panel').hide();
            }
        });
        this.tableFactory.enableCollapsedPanels();
    }
    /************************* /
     /** GETTERS AND SETTERS ** /
     /*************************/
    get columns() {
        return this._columns;
    }
    get interactorSelected() {
        return this._interactorSelected;
    }
    set interactorSelected(value) {
        this._interactorSelected = value;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InteractorsTableComponent.prototype, "interactorTab", void 0);
InteractorsTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactors-table',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_4__shared_service_table_factory_service__["a" /* TableFactoryService */],
        __WEBPACK_IMPORTED_MODULE_6__shared_service_network_selection_service__["a" /* NetworkSelectionService */],
        __WEBPACK_IMPORTED_MODULE_7__home_dashboard_search_service_search_service__["a" /* SearchService */],
        __WEBPACK_IMPORTED_MODULE_8__shared_service_filter_service__["b" /* FilterService */]])
], InteractorsTableComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-results.component.css":
/***/ (function(module, exports) {

module.exports = "@media print, screen and (min-width: 64em) {\n  /* Large size screen */\n  .sticky-bar {\n    position: sticky;\n    top: 0;\n    z-index: 15;\n    background-color: white;\n    -webkit-box-shadow: 0 1rem 14px -1rem rgba(33, 33, 33, 0.2);\n            box-shadow: 0 1rem 14px -1rem rgba(33, 33, 33, 0.2);\n  }\n}\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"results\" class=\"row expanded\">\n  <div class=\"columns medium-12\">\n    <mat-expansion-panel *ngIf=\"isLongTitle; else standardTitle\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h2>Search for {{shortTerms}}</h2>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <p>{{title}}</p>\n    </mat-expansion-panel>\n    <ng-template #standardTitle>\n      <h2>Search for {{title}}</h2>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"hasResults; else noResults\" style=\"display: contents\">\n    <div class=\"columns medium-12 sticky-bar\">\n      <ip-interactions-filters *ngIf=\"interactionsSearch; else loadingSpinner\">\n\n      </ip-interactions-filters>\n      <ng-template #loadingSpinner>\n        <ip-progress-spinner class=\"margin-top-large margin-bottom-large\"></ip-progress-spinner>\n      </ng-template>\n    </div>\n\n    <div class=\"columns medium-12\">\n      <ip-interactions-viewer></ip-interactions-viewer>\n\n      <ip-interactions-list></ip-interactions-list>\n    </div>\n  </div>\n\n  <ng-template #noResults>\n    <div class=\"row expanded margin-top-large margin-bottom-large margin-left-medium margin-right-medium\">\n      <div class=\"columns medium-12\">\n        <div class=\"alert-panel\">\n          <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> No results found</h3>\n          No interactions were found for your query: <b>{{search.query}}</b><br>\n          To solve this problem, you can:\n          <ul>\n            <li>Check the spelling</li>\n            <li>Use the auto suggestion</li>\n            <li>Use <a href=\"http://www.ebi.ac.uk/Tools/webservices/psicquic/view/main.xhtml?query={{search.query}}\"\n                       target=\"_blank\">PSICQUIC</a> to search among our IMEx partner databases\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_interactions_search_service__ = __webpack_require__("./src/app/interactions/shared/service/interactions-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_network_view_service__ = __webpack_require__("./src/app/interactions/shared/service/network-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let InteractionsResultsComponent = class InteractionsResultsComponent {
    constructor(titleService, search, route, router, interactionsSearchService, view, filters) {
        this.titleService = titleService;
        this.search = search;
        this.route = route;
        this.router = router;
        this.interactionsSearchService = interactionsSearchService;
        this.view = view;
        this.filters = filters;
        this._hasResults = true;
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Search Results');
        this.route.queryParamMap.subscribe(paramMap => {
            this.search.fromParams(paramMap);
            this.filters.fromParams(paramMap);
            this.requestInteractionsResults();
        });
        this.filters.updates.subscribe(() => this.updateURLParams());
        this.view.updates.subscribe(() => this.updateURLParams());
    }
    requestInteractionsResults() {
        this.interactionsSearchService.queryFacets()
            .subscribe(interactionsSearch => {
            this.interactionsSearch = interactionsSearch;
            if (this.interactionsSearch.totalElements !== 0) {
                this._hasResults = true;
                this.filters.initFacets(this.interactionsSearch.facetResultPage);
            }
            else {
                this._hasResults = false;
            }
            __WEBPACK_IMPORTED_MODULE_4__layout_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hideWithoutDelay();
        });
    }
    /** END OF EVENT EMITTERS **/
    updateURLParams() {
        this.router.navigate([], {
            queryParams: Object.assign({}, this.search.toURLParams(), this.filters.toParams(), this.view.toParams())
        });
    }
    /** GETTERS AND SETTERS **/
    get title() {
        return this.search.title ? this.search.title : this.search.query;
    }
    get isLongTitle() {
        return this.title.length > 50;
    }
    get shortTerms() {
        if (!this.isLongTitle) {
            return this.title;
        }
        else {
            const terms = this.title.split(/\s/);
            let last = terms.pop();
            while (last.length === 0 || !last.trim()) {
                last = terms.pop();
            }
            return `${terms.shift()} ... ${last}`;
        }
    }
    get hasResults() {
        return this._hasResults;
    }
    get interactionsSearch() {
        return this._interactionsSearch;
    }
    set interactionsSearch(value) {
        this._interactionsSearch = value;
    }
};
InteractionsResultsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactions-results',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-results.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-results.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */],
        __WEBPACK_IMPORTED_MODULE_5__home_dashboard_search_service_search_service__["a" /* SearchService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
        __WEBPACK_IMPORTED_MODULE_3__shared_service_interactions_search_service__["a" /* InteractionsSearchService */],
        __WEBPACK_IMPORTED_MODULE_7__shared_service_network_view_service__["a" /* NetworkViewService */],
        __WEBPACK_IMPORTED_MODULE_6__shared_service_filter_service__["b" /* FilterService */]])
], InteractionsResultsComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-results.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionsResultsModule", function() { return InteractionsResultsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interactions_results_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interactions_routing_module__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interactions_filters_interactions_filters_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interactions_list_interactions_list_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interactions_viewer_interactions_viewer_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__interactions_list_interactors_table_interactors_table_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interactions_list_interactions_table_interactions_table_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interaction_details_interaction_details_module__ = __webpack_require__("./src/app/interactions/interaction-details/interaction-details.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng5_slider__ = __webpack_require__("./node_modules/ng5-slider/esm2015/ng5-slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__layout_loading_indicators_progress_spinner_progress_spinner_module__ = __webpack_require__("./src/app/layout/loading-indicators/progress-spinner/progress-spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_service_table_factory_service__ = __webpack_require__("./src/app/interactions/shared/service/table-factory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_service_network_selection_service__ = __webpack_require__("./src/app/interactions/shared/service/network-selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__interactions_viewer_interactions_legend_interactions_legend_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_components_components_module__ = __webpack_require__("./src/app/shared/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__interactions_filters_download_form_download_form_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























let InteractionsResultsModule = class InteractionsResultsModule {
};
InteractionsResultsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__interactions_routing_module__["a" /* InteractionsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__interaction_details_interaction_details_module__["InteractionDetailsModule"],
            __WEBPACK_IMPORTED_MODULE_10_ng5_slider__["b" /* Ng5SliderModule */],
            __WEBPACK_IMPORTED_MODULE_11__layout_loading_indicators_progress_spinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material_dialog__["b" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material_tooltip__["a" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material_expansion__["a" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_21__shared_components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_forms__["d" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__interactions_filters_interactions_filters_component__["a" /* InteractionsFiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_5__interactions_list_interactions_list_component__["a" /* InteractionsListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__interactions_viewer_interactions_viewer_component__["a" /* InteractionsViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_2__interactions_results_component__["a" /* InteractionsResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__interactions_list_interactors_table_interactors_table_component__["a" /* InteractorsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_8__interactions_list_interactions_table_interactions_table_component__["a" /* InteractionsTableComponent */],
            __WEBPACK_IMPORTED_MODULE_20__interactions_viewer_interactions_legend_interactions_legend_component__["a" /* InteractionsLegendComponent */],
            __WEBPACK_IMPORTED_MODULE_22__interactions_filters_download_form_download_form_component__["a" /* DownloadFormComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_18__shared_service_table_factory_service__["a" /* TableFactoryService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_service_network_selection_service__["a" /* NetworkSelectionService */]
        ]
    })
], InteractionsResultsModule);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interactions_results_component__ = __webpack_require__("./src/app/interactions/interactions-results/interactions-results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_2__interactions_results_component__["a" /* InteractionsResultsComponent */],
        data: { showCompactHeader: true, showFooter: true }
    },
];
let InteractionsRoutingModule = class InteractionsRoutingModule {
};
InteractionsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)]
    })
], InteractionsRoutingModule);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.css":
/***/ (function(module, exports) {

module.exports = ".node-line,\n.edge-line {\n  padding-left: 5pt;\n  background: #fbfbfb;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.node-line {\n  height: 22pt;\n}\n.edge-line {\n  height: 17pt;\n}\n.node-line span,\n.edge-line span{\n  vertical-align: middle;\n  padding-left: 4pt;\n}\n.edge-line:last-child {\n  padding-bottom: 21pt;\n}\nh5 {\n  margin-bottom: 0;\n  margin-top: 0.5rem;\n}\n.network-legend-label {\n}\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"underline margin-bottom-large\">Legend</h4>\n\n<div id=\"node-legends\">\n  <h5>Nodes</h5>\n  <div>\n    <span>Color ~ <i>Species</i></span>\n    <div id=\"species-colors\" *ngIf=\"legend.node_legend.species_color\">\n      <div *ngFor=\"let key of objectKeys(legend.node_legend.species_color)\" class=\"node-line\">\n        <ip-node-diagram [color]=\"legend.node_legend.species_color[key]\"></ip-node-diagram>\n        <span><i class=\"network-legend-label\">{{key}}</i></span>\n      </div>\n    </div>\n\n    <div id=\"kingdom-colors\" *ngIf=\"legend.node_legend.kingdom_color\">\n      <div *ngFor=\"let key of objectKeys(legend.node_legend.kingdom_color)\" class=\"node-line\">\n        <ip-node-diagram [color]=\"legend.node_legend.kingdom_color[key]\"></ip-node-diagram>\n        <span class=\"network-legend-label\">{{key}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"node-shapes\" *ngIf=\"legend.node_legend.shape\">\n    <span>Shape ~ <i>Type</i></span>\n    <div *ngFor=\"let key of objectKeys(legend.node_legend.shape)\" class=\"node-line\">\n      <ip-node-diagram [shape]=\"legend.node_legend.shape[key]\"></ip-node-diagram>\n      <span>{{key}}</span>\n    </div>\n  </div>\n\n  <div *ngIf=\"mutation && legend.node_legend.border_color.true\" id=\"node-mutation\">\n    <span>Border ~ <i>Affected by mutation</i></span>\n    <div *ngFor=\"let status of ['true']\" class=\"node-line\">\n      <ip-node-diagram [borderColor]=\"legend.node_legend.border_color[status].value\"></ip-node-diagram>\n      <span class=\"network-legend-label\">{{legend.node_legend.border_color[status].label}}</span>\n    </div>\n  </div>\n</div>\n\n<div id=\"edge-legends\">\n  <h5>Edges</h5>\n\n  <div *ngIf=\"expanded; else collapsedLegend\">\n    <div *ngIf=\"!mutation; else mutationLegend\">\n      <span>Color ~ <i>Type</i></span>\n      <div *ngFor=\"let key of objectKeys(legend.edge_legend.evidence_color)\" class=\"edge-line\">\n        <ip-edge-diagram [color]=\"legend.edge_legend.evidence_color[key]\"></ip-edge-diagram>\n        <span class=\"network-legend-label\">{{key}}</span>\n      </div>\n    </div>\n\n    <ng-template #mutationLegend>\n      <div>\n        <span>Color ~ <i>Affected by mutation</i></span>\n        <div *ngFor=\"let status of ['true']\" class=\"edge-line\">\n          <ip-edge-diagram [color]=\"legend.edge_legend.mutation_color[status].value\"></ip-edge-diagram>\n          <span class=\"network-legend-label\">{{legend.edge_legend.mutation_color[status].label}}</span>\n        </div>\n      </div>\n    </ng-template>\n    <div *ngIf=\"legend.edge_legend.expansion.true\">\n      <span>Shape ~ <i>Expansion method</i></span>\n      <div *ngFor=\"let status of ['true']\" class=\"edge-line\">\n        <ip-edge-diagram [shape]=\"legend.edge_legend.expansion[status].value\"></ip-edge-diagram>\n        <span class=\"network-legend-label\">{{legend.edge_legend.expansion[status].label}}</span>\n      </div>\n    </div>\n\n  </div>\n  <ng-template #collapsedLegend>\n    <div *ngIf=\"legend.edge_legend.summary_color\">\n      <span>Color ~ <i>MI Score</i></span>\n      <ip-color-range-diagram [rangeMap]=\"legend.edge_legend.summary_color\"></ip-color-range-diagram>\n    </div>\n\n    <div>\n      <span>Width ~ <i>#Evidence</i></span>\n      <ip-edge-thickness-diagram [minValue]=\"legend.edge_legend.summary_width.minValue\"\n                                 [maxValue]=\"legend.edge_legend.summary_width.maxValue\"\n                                 [minThickness]=\"legend.edge_legend.summary_width.minWidth\"\n                                 [maxThickness]=\"legend.edge_legend.summary_width.maxWidth\"\n                                 [color]=\"'#e75a00'\"></ip-edge-thickness-diagram>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsLegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_legend_network_legend__ = __webpack_require__("./src/app/interactions/shared/model/interaction-legend/network-legend.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let InteractionsLegendComponent = class InteractionsLegendComponent {
    constructor() {
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_model_interaction_legend_network_legend__["a" /* NetworkLegend */])
], InteractionsLegendComponent.prototype, "legend", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InteractionsLegendComponent.prototype, "expanded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], InteractionsLegendComponent.prototype, "mutation", void 0);
InteractionsLegendComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactions-legend',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InteractionsLegendComponent);



/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.css":
/***/ (function(module, exports) {

module.exports = ".underline {\n  border-bottom-style: solid;\n  border-color: #5a2e6e3d;\n}\n\n#for-canvas-graph {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background: #fbfbfb;\n  min-height: 40vh;\n}\n\n/* Legend adjustments */\n\n#node-color-legend,\n#node-shape-legend,\n#node-border-legend,\n#compound-node-color-legend,\n#edge-color-legend,\n#edge-thickness-legend,\n#edge-shapes-legend {\n  /* margin-bottom-large */\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n#node-color-legend img,\n#node-border-legend img,\n#compound-node-color-legend img {\n  height: 1.5rem;\n  padding-right: 0.3rem;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n#node-shape-legend img {\n  height: 1.5rem;\n  width: 2rem;\n  padding-right: 0.3rem;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n#edge-color-legend img {\n  padding-right: 0.3rem;\n  font-size: 14px;\n}\n\n#edge-thickness-legend img,\n#edge-shapes-legend img {\n  width: 3rem;\n  padding-right: 0.3rem;\n  font-size: 14px;\n}\n\n.download-graph-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n#download-png,\n#download-graphml {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  margin: 5px;\n}\n\n#network-viewer-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n#toolbar-column {\n  /*flex: 1;*/\n  padding-left: 0;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n}\n\n#viewer-column {\n  /*flex: 1;*/\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n}\n\n#legend-column {\n  /*flex: 1;*/\n  padding-right: 0;\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n}\n\n@media print, screen and (max-width: 40em) {\n  /* Small size screen */\n  #viewer-column {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n\n  body:after {\n    content: 'small';\n    display: none;\n  }\n}\n\n@media print, screen and (min-width: 40em) {\n  /* Medium size screen */\n  #viewer-column {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n\n  body:after {\n    content: 'medium';\n    display: none;\n  }\n}\n\n@media print, screen and (min-width: 64em) {\n  /* Large size screen */\n  #viewer-column {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n\n  body:after {\n    content: 'large';\n    display: none;\n  }\n}\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large\" id=\"network-viewer-container\" *ngIf=\"view.visible; else tooMany\">\n  <div class=\"columns small-12 medium-6 large-2\" id=\"toolbar-column\">\n    <h4 class=\"underline margin-bottom-large\">\n      <i class=\"icon icon-common icon-spacer icon-tool\"></i>Network Tools\n    </h4>\n    <div class=\"row\">\n      <button id=\"reset\" class=\"button expanded\" type=\"button\" (click)=\"onClickReset()\">\n        <i class=\"icon icon-common icon-spacer icon-redo-alt\"></i>Redraw Network\n      </button>\n    </div>\n\n    <ul class=\"vertical menu facets\">\n      <h5>Layout</h5>\n      <div class=\"margin-bottom-large\" style=\"background-color: #fbfbfb\">\n        <li>\n          <span class=\"margin-left-small\">\n          <input #forcedirected type=\"radio\" name=\"layout\" (change)=\"onChangeLayout($event, forcedirected.value)\"\n                 value=\"fcose\" [checked]=\"view.layoutName === forcedirected.value\" id=\"force-directed\"/>\n              <label for=\"force-directed\">Force directed</label>\n          </span>\n        </li>\n        <li>\n          <span class=\"margin-left-small\">\n          <input #avsdf type=\"radio\" name=\"layout\" (change)=\"onChangeLayout($event, avsdf.value)\" value=\"avsdf\"\n                 id=\"avsdf\" [checked]=\"view.layoutName === avsdf.value\"/>\n                <label for=\"avsdf\">Circular</label>\n          </span>\n        </li>\n        <li>\n          <span class=\"margin-left-small\">\n          <input #cise type=\"radio\" name=\"layout\" (change)=\"onChangeLayout($event, cise.value)\" value=\"cise\"\n                 id=\"cise\" [checked]=\"view.layoutName === cise.value\" [disabled]=\"groupby.checked\"/>\n                <label for=\"cise\">Bubbles</label>\n          </span>\n        </li>\n      </div>\n\n      <h5>Edges</h5>\n      <div class=\"margin-bottom-large\" style=\"background-color: #fbfbfb\">\n        <li>\n          <span class=\"margin-left-small\">\n          <input #expand type=\"checkbox\" (change)=\"onChangeExpand(expand.checked, affectedByMutationCb)\"\n                 [checked]=\"view.expanded\" id=\"expand\"/>\n            <label for=\"expand\">Expand</label>\n          </span>\n        </li>\n        <li>\n          <span class=\"margin-left-small tool-tip\">\n            <input #affectedByMutationCb type=\"checkbox\" id=\"affectedByMutationCb\"\n                   (change)=\"onChangeAffectedByMutation(affectedByMutationCb.checked, expand)\"\n                   [checked]=\"view.affectedByMutation\" [disabled]=\"!hasMutation\"/>\n            <label for=\"affectedByMutationCb\" [ngClass]=\"{'disabled':!hasMutation}\">Affected By Mutation</label>\n            <span class=\"tool-tip-text\" *ngIf=\"!hasMutation\">There is no mutation in this network</span>\n          </span>\n        </li>\n      </div>\n\n      <h5>Group By</h5>\n      <div class=\"margin-bottom-large\" style=\"background-color: #fbfbfb\">\n        <li>\n          <span class=\"margin-left-small\">\n          <input #groupby type=\"checkbox\" (change)=\"onChangeGroupBy(groupby.checked)\"\n                 [checked]=\"view.groupBySpecies\" id=\"group-by\" [disabled]=\"cise.checked\"/>\n            <label for=\"group-by\">Species</label>\n          </span>\n        </li>\n      </div>\n    </ul>\n  </div>\n\n  <div class=\"columns medium-12 large-8\" id=\"viewer-column\">\n    <h4 class=\"underline margin-bottom-large\">Interaction Network</h4>\n    <div id=\"graph-top-panel\">\n      <div id=\"suggestions_div\">\n        <div class=\"input-group margin-bottom-none\">\n          <input id=\"nodeL\" #nodeL class=\"input-group-field\" type=\"text\" (keydown.enter)=\"onClickSearch(nodeL.value)\"\n                 placeholder=\"Interactor Name\"/>\n          <div class=\"input-group-button\">\n            <input id=\"network-search-button\" type=\"button\" name=\"submit\" value=\"1\" (click)=\"onClickSearch(nodeL.value)\"\n                   class=\"button icon icon-functional\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"for-canvas-graph\"></div>\n  </div>\n\n  <div class=\"columns small-12 medium-6 large-2\" id=\"legend-column\" *ngIf=\"legend\">\n    <ip-interactions-legend [legend]=\"legend\" [expanded]=\"view.expanded\"\n                            [mutation]=\"view.affectedByMutation\"></ip-interactions-legend>\n  </div>\n</div>\n\n<ng-template #tooMany>\n  <div class=\"row expanded margin-top-large margin-bottom-large\" id=\"no-network-viewer\">\n    <div class=\"alert-panel\">\n      <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Too many results</h3>\n      There are more than <b>1500 interactions</b> in your results, too many for our network\n      viewer display, sorry.<br>\n      To solve this problem, you can:\n      <ul>\n        <li>Use the filters above</li>\n        <li>Make your search more specific</li>\n        <li>Use <a href=\"https://apps.cytoscape.org/apps/intactapp\">IntAct App</a> on <a href=\"https://cytoscape.org/\">Cytoscape</a>\n          to visualise without size restrictions\n        </li>\n      </ul>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_network_search_service__ = __webpack_require__("./src/app/interactions/shared/service/network-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_network_view_service__ = __webpack_require__("./src/app/interactions/shared/service/network-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_intact_network_viewer__ = __webpack_require__("./node_modules/intact-network-viewer/build/intact_network.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_intact_network_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_intact_network_viewer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let InteractionsViewerComponent = class InteractionsViewerComponent {
    constructor(route, router, networkSearchService, view) {
        this.route = route;
        this.router = router;
        this.networkSearchService = networkSearchService;
        this.view = view;
        this._hasMutation = false;
        this._interactionsJSON = {};
        this.legend = undefined;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            $('ip-interactions-viewer').foundation();
            this.view.viewer = new __WEBPACK_IMPORTED_MODULE_5_intact_network_viewer__["GraphPort"]('for-canvas-graph', 'nodeL');
            this.route.queryParamMap.subscribe((paramMap) => {
                this.view.fromParams(paramMap);
                if (this.view.mustQuery) {
                    this.requestIntactNetworkDetails();
                }
                this.view.mustQuery = true;
            });
        });
    }
    requestIntactNetworkDetails() {
        this.networkSearchService.getInteractionNetwork(this.view.groupBySpecies).subscribe(json => {
            this.interactionsJSON = json;
            if (json.legend) {
                this.legend = json.legend;
                this._hasMutation = json.legend.edge_legend.mutation_color.true !== undefined;
                if (!this._hasMutation) {
                    this.view.setAffectedByMutation(false, false);
                }
            }
            if (json.data.length > 0) {
                this.view.viewer.initializeWithData(this.interactionsJSON, this.view.expanded, this.view.affectedByMutation, this.view.layoutName);
                this.view.visible = true;
            }
            else {
                this.view.visible = false;
                __WEBPACK_IMPORTED_MODULE_3__layout_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hideWithoutDelay();
            }
        }, () => {
            this.view.visible = false;
            __WEBPACK_IMPORTED_MODULE_3__layout_loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */].hideWithoutDelay();
        });
    }
    onChangeLayout(event, value) {
        if (event.target.checked) {
            this.view.setLayoutName(value);
        }
    }
    onChangeExpand(expandCheckBoxValue, affectedByMutationCheckBox) {
        if (!expandCheckBoxValue) {
            affectedByMutationCheckBox.checked = false;
            this.view.setAffectedByMutation(false, false);
        }
        this.view.setExpanded(expandCheckBoxValue);
    }
    onChangeAffectedByMutation(affectedByMutationCheckBoxValue, expandCheckBox) {
        if (affectedByMutationCheckBoxValue) {
            expandCheckBox.checked = true;
            this.view.setExpanded(true, false);
        }
        this.view.setAffectedByMutation(affectedByMutationCheckBoxValue);
    }
    onChangeGroupBy(groupByValue) {
        this.view.setGroupBySpecies(groupByValue);
    }
    onClickDownloadGraph(downloadFileType) {
        this.view.viewer.exportAs(downloadFileType);
    }
    onClickReset() {
        this.view.viewer.reset();
    }
    onClickSearch(interactorName) {
        this.view.viewer.search(interactorName);
    }
    get interactionsJSON() {
        return this._interactionsJSON;
    }
    set interactionsJSON(value) {
        this._interactionsJSON = value;
    }
    get hasMutation() {
        return this._hasMutation;
    }
    set hasMutation(value) {
        this._hasMutation = value;
    }
};
InteractionsViewerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactions-viewer',
        template: __webpack_require__("./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.html"),
        styles: [__webpack_require__("./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
        __WEBPACK_IMPORTED_MODULE_1__shared_service_network_search_service__["a" /* NetworkSearchService */],
        __WEBPACK_IMPORTED_MODULE_4__shared_service_network_view_service__["a" /* NetworkViewService */]])
], InteractionsViewerComponent);



/***/ }),

/***/ "./src/app/interactions/shared/model/download/format.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Format {
    constructor(extension, name, html) {
        this.extension = extension;
        this.name = name;
        this.html = html;
        Format._instances.push(this);
    }
    static get instances() {
        return [...this._instances];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Format;

Format._instances = [];
Format.tab2_5 = new Format('txt', 'miTab25', 'miTab<sub>2.5</sub>');
Format.tab2_6 = new Format('txt', 'miTab26', 'miTab<sub>2.6</sub>');
Format.tab2_7 = new Format('txt', 'miTab27', 'miTab<sub>2.7</sub>');
Format.xml2_5 = new Format('xml', 'miXML25', 'miXML<sub>2.5</sub>');
Format.xml3_0 = new Format('xml', 'miXML30', 'miXML<sub>3.0</sub>');
Format.json = new Format('json', 'miJSON', 'miJSON<sub>1.0</sub>');


/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-details/alias.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Alias {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Alias;



/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-details/annotation.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Annotation {
    constructor(topic, description) {
        this.topic = topic;
        this.description = description;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Annotation;



/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-details/cv-term.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CvTerm {
    constructor(shortName, identifier) {
        this.shortName = shortName;
        this.identifier = identifier;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CvTerm;



/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-details/experiment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Experiment {
    constructor(experimentAc, interactionHostOrganism, interactionDetectionMethod, experimentXrefs, experimentAnnotations) {
        this.experimentAc = experimentAc;
        this.interactionHostOrganism = interactionHostOrganism;
        this.interactionDetectionMethod = interactionDetectionMethod;
        this.experimentXrefs = experimentXrefs;
        this.experimentAnnotations = experimentAnnotations;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Experiment;



/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-details/interaction-details.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class InteractionDetails {
    constructor(interactionAc, shortLabel, hostOrganism, type, detectionMethod, confidences, parameters, annotations, xrefs, publication) {
        this.interactionAc = interactionAc;
        this.shortLabel = shortLabel;
        this.hostOrganism = hostOrganism;
        this.type = type;
        this.detectionMethod = detectionMethod;
        this.confidences = confidences;
        this.parameters = parameters;
        this.annotations = annotations;
        this.xrefs = xrefs;
        this.publication = publication;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InteractionDetails;



/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-details/publication.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Publication {
    constructor(pubmedId, title, journal, publicationDate, authors, publicationXrefs, publicationAnnotations) {
        this.pubmedId = pubmedId;
        this.title = title;
        this.journal = journal;
        this.publicationDate = publicationDate;
        this.authors = authors;
        this.publicationXrefs = publicationXrefs;
        this.publicationAnnotations = publicationAnnotations;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Publication;



/***/ }),

/***/ "./src/app/interactions/shared/model/interaction-legend/network-legend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class NetworkLegend {
    constructor(node_legend, edge_legend) {
        this.node_legend = node_legend;
        this.edge_legend = edge_legend;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NetworkLegend;



/***/ }),

/***/ "./src/app/interactions/shared/model/network-shapes/edge-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdgeShape; });
var EdgeShape;
(function (EdgeShape) {
    EdgeShape["DASHED_LINE"] = "dashed";
    EdgeShape["SOLID_LINE"] = "solid";
})(EdgeShape || (EdgeShape = {}));


/***/ }),

/***/ "./src/app/interactions/shared/model/network-shapes/node-shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeShape; });
var NodeShape;
(function (NodeShape) {
    NodeShape["TRIANGLE"] = "triangle";
    NodeShape["DIAMOND"] = "diamond";
    NodeShape["ROUNDED_RECTANGLE"] = "round-rectangle";
    NodeShape["TAG"] = "tag";
    NodeShape["VEE"] = "vee";
    NodeShape["ELLIPSE"] = "ellipse";
    NodeShape["PARALLELOGRAM"] = "rhomboid";
    NodeShape["OCTAGON"] = "octagon";
    NodeShape["HEXAGON"] = "hexagon";
})(NodeShape || (NodeShape = {}));


/***/ }),

/***/ "./src/app/interactions/shared/model/tables/column.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Column {
    constructor(title, data, hiddenByDefault = false, table) {
        this.title = title;
        this.data = data;
        this.hiddenByDefault = hiddenByDefault;
        table.push(this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Column;



/***/ }),

/***/ "./src/app/interactions/shared/model/tables/feature-table.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/column.model.ts");


class FeatureTable extends __WEBPACK_IMPORTED_MODULE_0__table_model__["a" /* Table */] {
    constructor() {
        super(...arguments);
        this.ac = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('AC', 'featureAc', true, this);
        this.name = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Name', 'name', false, this);
        this.type = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Type', 'type', false, this);
        this.role = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Role', 'role', false, this);
        this.rangePositions = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Range Positions', 'ranges', false, this);
        this.linkedFeatures = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Linked Features', 'linkedFeatures', false, this);
        this.participantName = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Participant Name', 'participantName', false, this);
        this.participantIdentifier = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Participant Identifier', 'participant', false, this);
        this.participantAc = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Participant AC', 'participantAc', true, this);
        this.detectionMethods = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Detection Methods', 'detectionMethods', false, this);
        this.parameters = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Parameters', 'parameters', false, this);
        this.identifiers = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Identifiers', 'identifiers', false, this);
        this.crossReferences = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Cross References', 'xrefs', false, this);
        this.annotations = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Annotations', 'annotations', false, this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FeatureTable;



/***/ }),

/***/ "./src/app/interactions/shared/model/tables/interaction-table.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/column.model.ts");


class InteractionTable extends __WEBPACK_IMPORTED_MODULE_0__table_model__["a" /* Table */] {
    constructor() {
        super(...arguments);
        this.id = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Select', 'binaryInteractionId', false, this);
        this.moleculeA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Molecule A', 'moleculeA', false, this);
        this.moleculeB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Molecule B', 'moleculeB', false, this);
        this.identifierA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Identifier A', 'idA', false, this);
        this.identifierB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Identifier B', 'idB', false, this);
        this.typeA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Type A', 'typeA', false, this);
        this.typeB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Type B', 'typeB', false, this);
        this.speciesA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Species A', 'speciesA', false, this);
        this.speciesB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Species B', 'speciesB', false, this);
        this.hostOrganism = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Host Organism', 'hostOrganism', false, this);
        this.detectionMethod = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Detection Method', 'detectionMethod', false, this);
        this.publicationIdentifiers = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Publication IDs', 'publicationIdentifiers', false, this);
        this.type = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Interaction Type', 'type', false, this);
        this.ac = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Interaction AC', 'ac', false, this);
        this.database = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Database', 'sourceDatabase', true, this);
        this.confidenceValue = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Confidence Value', 'confidenceValues', false, this);
        this.expansionMethod = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Expansion Method', 'expansionMethod', false, this);
        this.experimentalRoleA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Experimental Role A', 'experimentalRoleA', true, this);
        this.experimentalRoleB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Experimental Role B', 'experimentalRoleB', true, this);
        this.biologicalRoleA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Biological Role A', 'biologicalRoleA', true, this);
        this.biologicalRoleB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Biological Role B', 'biologicalRoleB', true, this);
        this.aliasesA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Aliases A', 'aliasesA', false, this);
        this.aliasesB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Aliases B', 'aliasesB', false, this);
        this.featureCount = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Feature count', 'featureCount', false, this);
        this.parameters = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Parameters', 'parameters', true, this);
        this.annotationsA = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Annotations A', 'annotationsA', true, this);
        this.annotationsB = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Annotations B', 'annotationsB', true, this);
        this.annotations = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Interaction Annotations', 'annotations', false, this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InteractionTable;



/***/ }),

/***/ "./src/app/interactions/shared/model/tables/interactor-table.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/column.model.ts");


class InteractorTable extends __WEBPACK_IMPORTED_MODULE_0__table_model__["a" /* Table */] {
    constructor() {
        super(...arguments);
        this.select = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Select', 'interactorAc', false, this);
        this.accession = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Accession', 'interactorAc', false, this);
        this.name = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Name', 'interactorName', false, this);
        this.preferredId = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Preferred ID', 'interactorPreferredIdentifier', false, this);
        this.type = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Type', 'interactorType', false, this);
        this.species = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Species', 'interactorSpecies', false, this);
        this.description = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Description', 'interactorDescription', false, this);
        this.alias = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Alias', 'interactorAlias', false, this);
        this.alternativeIds = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Alternative IDs', 'interactorAltIds', false, this);
        this.interactionSearchCount = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Interactions found in current search', 'interactionSearchCount', false, this);
        this.interactionCount = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Total interactions in all IntAct', 'interactionCount', false, this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InteractorTable;



/***/ }),

/***/ "./src/app/interactions/shared/model/tables/participant-table.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__table_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/table.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_model__ = __webpack_require__("./src/app/interactions/shared/model/tables/column.model.ts");


class ParticipantTable extends __WEBPACK_IMPORTED_MODULE_0__table_model__["a" /* Table */] {
    constructor() {
        super(...arguments);
        this.expand = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Expand', 'participantName', false, this);
        this.name = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Name', 'shortLabel', false, this);
        this.ac = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('AC', 'participantAc', false, this);
        this.type = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Type', 'type', false, this);
        this.identifier = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Identifier', 'participantId', false, this);
        this.aliases = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Aliases', 'aliases', false, this);
        this.description = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Description', 'description', false, this);
        this.species = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Species', 'species', false, this);
        this.expressionSystem = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Expression System', 'expressionSystem', false, this);
        this.detectionMethods = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Detection Methods', 'detectionMethod', false, this);
        this.experimentalRole = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Experimental Role', 'experimentalRole', false, this);
        this.biologicalRole = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Biological Role', 'biologicalRole', false, this);
        this.experimentalPreparations = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Experimental Preparations', 'experimentalPreparations', false, this);
        this.parameters = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Parameters', 'parameters', false, this);
        this.confidences = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Confidences', 'confidences', false, this);
        this.crossReferences = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Cross References', 'xrefs', false, this);
        this.annotations = new __WEBPACK_IMPORTED_MODULE_1__column_model__["a" /* Column */]('Annotations', 'annotations', false, this);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ParticipantTable;



/***/ }),

/***/ "./src/app/interactions/shared/model/tables/table.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Table extends Array {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Table;



/***/ }),

/***/ "./src/app/interactions/shared/service/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__network_selection_service__ = __webpack_require__("./src/app/interactions/shared/service/network-selection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FilterService = FilterService_1 = class FilterService {
    constructor(selection) {
        this.selection = selection;
        this._negative = false;
        this._mutation = false;
        this._expansion = false;
        this._intraSpecies = false;
        this.interactorSpecies = [];
        this.interactorTypes = [];
        this.interactionTypes = [];
        this.interactionDetectionMethods = [];
        this.interactionHostOrganisms = [];
        this.minMIScore = 0;
        this._currentMinMIScore = 0;
        this.maxMIScore = 1;
        this._currentMaxMIScore = 1;
        this._hasExpansion = false;
        this._hasMutation = false;
        this._mutationColor = '#FF00A1';
        this._nbMutation = 0;
        this._nbNonMutation = 0;
        this._nbExpansion = 0;
        this._nbNonExpansion = 0;
        this.updatesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.updates = this.updatesSubject.asObservable();
    }
    static updateDiscreteFilter(container, updatedValue) {
        if (!container.includes(updatedValue)) {
            container.push(updatedValue);
        }
        else {
            container.splice(container.indexOf(updatedValue), 1);
        }
    }
    initFacets(facets) {
        this._facets = facets;
        this.initSpeciesFilter();
        this.initMIScoreFilter(facets.intact_miscore);
        this.initMutationFilter(facets.affected_by_mutation_styled);
        this.initExpansionFilter(facets.expansion_method_s);
    }
    initSpeciesFilter() {
        this.intraSpeciesCounts = new Map(this.facets.combined_species.map(facet => [facet.value, facet.valueCount.intra]));
    }
    initMIScoreFilter(scoreFacets) {
        const scores = scoreFacets.map(facet => parseFloat(facet.value));
        this.minMIScore = scores.length !== 0 ? Math.min(...scores) : 0;
        this.maxMIScore = scores.length !== 0 ? Math.max(...scores) : 1;
        if (this._currentMinMIScore < this.minMIScore) {
            this._currentMinMIScore = this.minMIScore;
        }
        if (this._currentMaxMIScore > this.maxMIScore) {
            this._currentMaxMIScore = this.maxMIScore;
        }
    }
    initMutationFilter(mutationFacets) {
        this._nbNonMutation = 0;
        this._nbMutation = 0;
        for (const mutationFacet of mutationFacets) {
            this._nbNonMutation += mutationFacet.valueCount;
            if (mutationFacet.value === 'true' && mutationFacet.valueCount > 0) {
                if (mutationFacet.visualProperty) {
                    this._mutationColor = mutationFacet.visualProperty;
                }
                this._nbMutation = mutationFacet.valueCount;
            }
        }
        this._hasMutation = this._nbMutation > 0;
    }
    initExpansionFilter(expansionFacets) {
        this._nbNonExpansion = 0;
        this._nbExpansion = 0;
        for (const expansionFacet of expansionFacets) {
            this._nbNonExpansion += expansionFacet.valueCount;
            if (expansionFacet.value === 'true' && expansionFacet.valueCount > 0) {
                this._nbExpansion = expansionFacet.valueCount;
            }
        }
        this._hasExpansion = this._nbExpansion > 0;
    }
    updateFilter(filter, value, update = true) {
        switch (filter) {
            case Filter.NEGATIVE:
                this._negative = value;
                break;
            case Filter.MUTATION:
                this._mutation = value;
                break;
            case Filter.EXPANSION:
                this._expansion = value;
                break;
            case Filter.INTRA_SPECIES:
                this._intraSpecies = value;
                break;
            case Filter.MI_SCORE:
                this._currentMinMIScore = value.min;
                this._currentMaxMIScore = value.max;
                break;
            default:
                FilterService_1.updateDiscreteFilter(this.getFilter(filter), value);
                break;
        }
        if (update) {
            this.selection.resetSelection();
            this.updatesSubject.next(filter);
        }
    }
    fromParams(params) {
        this.interactorSpecies = params.has('interactorSpeciesFilter') ? params.get('interactorSpeciesFilter').split(',') : [];
        this.interactorTypes = params.has('interactorTypesFilter') ? params.get('interactorTypesFilter').split(',') : [];
        this.interactionTypes = params.has('interactionTypesFilter') ? params.get('interactionTypesFilter').split(',') : [];
        this.interactionDetectionMethods = params.has('interactionDetectionMethodsFilter') ? params.get('interactionDetectionMethodsFilter').split(',') : [];
        this.interactionHostOrganisms = params.has('interactionHostOrganismsFilter') ? params.get('interactionHostOrganismsFilter').split(',') : [];
        this._currentMinMIScore = params.has('minMIScore') ? parseFloat(params.get('minMIScore')) : 0;
        this._currentMaxMIScore = params.has('maxMIScore') ? parseFloat(params.get('maxMIScore')) : 1;
        this._negative = params.get('negativeFilter') === 'true';
        this._mutation = params.get('mutationFilter') === 'true';
        this._expansion = params.get('expansionFilter') === 'true';
        this._intraSpecies = params.get('intraSpeciesFilter') === 'true';
    }
    toParams(params = {}, arrayTransformer = (a) => a.join(',')) {
        if (this.interactorSpecies !== undefined && this.interactorSpecies.length !== 0) {
            params.interactorSpeciesFilter = arrayTransformer(this.interactorSpecies);
        }
        if (this.interactorTypes !== undefined && this.interactorTypes.length !== 0) {
            params.interactorTypesFilter = arrayTransformer(this.interactorTypes);
        }
        if (this.interactionTypes !== undefined && this.interactionTypes.length !== 0) {
            params.interactionTypesFilter = arrayTransformer(this.interactionTypes);
        }
        if (this.interactionDetectionMethods !== undefined && this.interactionDetectionMethods.length !== 0) {
            params.interactionDetectionMethodsFilter = arrayTransformer(this.interactionDetectionMethods);
        }
        if (this.interactionHostOrganisms !== undefined && this.interactionHostOrganisms.length !== 0) {
            params.interactionHostOrganismsFilter = arrayTransformer(this.interactionHostOrganisms);
        }
        if (this._negative !== undefined && this._negative !== false) {
            params.negativeFilter = this._negative;
        }
        if (this._currentMinMIScore !== undefined && this._currentMinMIScore > this.minMIScore) {
            params.minMIScore = this._currentMinMIScore;
        }
        if (this._currentMaxMIScore !== undefined && this._currentMaxMIScore < this.maxMIScore) {
            params.maxMIScore = this._currentMaxMIScore;
        }
        if (this.intraSpecies === true) {
            params.intraSpeciesFilter = this.intraSpecies;
        }
        if (this.mutation === true) {
            params.mutationFilter = this.mutation;
        }
        if (this.expansion === true) {
            params.expansionFilter = this.expansion;
        }
        return params;
    }
    canFilterIntraSpecies() {
        if (this.interactorSpecies.length === 0) {
            // @ts-ignore
            for (const value of this.intraSpeciesCounts.values()) {
                if (value > 0) {
                    return true;
                }
            }
            return false;
        }
        for (const interactorSpecies of this.interactorSpecies) {
            if (this.intraSpeciesCounts.get(interactorSpecies) > 0) {
                return true;
            }
        }
        return false;
    }
    isFilteringScore() {
        return this._currentMinMIScore > this.minMIScore || this._currentMaxMIScore < this.maxMIScore;
    }
    anyFiltersSelected() {
        return this.interactorSpecies.length !== 0 ||
            this.interactorTypes.length !== 0 ||
            this.interactionTypes.length !== 0 ||
            this.interactionDetectionMethods.length !== 0 ||
            this.interactionHostOrganisms.length !== 0 ||
            this.mutation ||
            this.negative ||
            this.expansion ||
            this.isFilteringScore();
    }
    isFiltering(filter) {
        switch (filter) {
            case Filter.MI_SCORE:
                return this.isFilteringScore();
            case Filter.NEGATIVE:
                return this._negative;
            case Filter.MUTATION:
                return this._mutation;
            case Filter.EXPANSION:
                return this._expansion;
            case Filter.INTRA_SPECIES:
                return this.intraSpecies;
            default:
                return this.getFilter(filter).length !== 0;
        }
    }
    isFilteringValue(filter, value) {
        switch (filter) {
            case Filter.MI_SCORE:
                return value <= this.currentMinMIScore || value >= this.currentMaxMIScore;
            case Filter.NEGATIVE:
                return this._negative;
            case Filter.MUTATION:
                return this._mutation;
            case Filter.EXPANSION:
                return this._expansion;
            case Filter.INTRA_SPECIES:
                return this.intraSpecies;
            default:
                return this.getFilter(filter).includes(value);
        }
    }
    resetAllFilters() {
        for (const filter of Object.keys(Filter)) {
            this.resetFilter(Filter[filter], false);
        }
        this.updatesSubject.next();
    }
    resetFilter(filter, update = true) {
        switch (filter) {
            case Filter.MI_SCORE:
                this.resetMISCoreFilter();
                break;
            case Filter.INTRA_SPECIES:
                this._intraSpecies = false;
                break;
            case Filter.SPECIES:
                this._intraSpecies = false;
                this.interactorSpecies = [];
                break;
            case Filter.NEGATIVE:
                this._negative = false;
                break;
            case Filter.MUTATION:
                this._mutation = false;
                break;
            case Filter.EXPANSION:
                this._expansion = false;
                break;
            default:
                const values = this.getFilter(filter);
                values.splice(0, values.length);
                break;
        }
        if (update) {
            this.updatesSubject.next(filter);
        }
    }
    resetMISCoreFilter() {
        this._currentMinMIScore = this.minMIScore;
        this._currentMaxMIScore = this.maxMIScore;
    }
    getFilter(filter) {
        switch (filter) {
            case Filter.SPECIES:
                return this.interactorSpecies;
            case Filter.INTERACTOR_TYPE:
                return this.interactorTypes;
            case Filter.INTERACTION_TYPE:
                return this.interactionTypes;
            case Filter.DETECTION_METHOD:
                return this.interactionDetectionMethods;
            case Filter.HOST_ORGANISM:
                return this.interactionHostOrganisms;
        }
    }
    getFacets(filter) {
        switch (filter) {
            case Filter.SPECIES:
                return this.facets.combined_species;
            case Filter.EXPANSION:
                return this.facets.expansion_method_s;
            case Filter.INTERACTOR_TYPE:
                return this.facets.type_MI_A_B_styled;
            case Filter.INTERACTION_TYPE:
                return this.facets.type_mi_identifier_styled;
            case Filter.DETECTION_METHOD:
                return this.facets.detection_method_s;
            case Filter.HOST_ORGANISM:
                return this.facets.host_organism_taxId_styled;
            case Filter.MUTATION:
                return this.facets.affected_by_mutation_styled;
        }
    }
    get facets() {
        return this._facets;
    }
    get mutation() {
        return this._mutation;
    }
    get expansion() {
        return this._expansion;
    }
    get negative() {
        return this._negative;
    }
    get intraSpecies() {
        return this._intraSpecies;
    }
    get currentMinMIScore() {
        return this._currentMinMIScore;
    }
    set currentMinMIScore(value) {
        this._currentMinMIScore = value;
    }
    get currentMaxMIScore() {
        return this._currentMaxMIScore;
    }
    set currentMaxMIScore(value) {
        this._currentMaxMIScore = value;
    }
    get mutationColor() {
        return this._mutationColor;
    }
    get hasMutation() {
        return this._hasMutation;
    }
    get hasExpansion() {
        return this._hasExpansion;
    }
    get nbMutation() {
        return this._nbMutation;
    }
    get nbExpansion() {
        return this._nbExpansion;
    }
    get nbNonMutation() {
        return this._nbNonMutation;
    }
    get nbNonExpansion() {
        return this._nbNonExpansion;
    }
};
FilterService = FilterService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__network_selection_service__["a" /* NetworkSelectionService */]])
], FilterService);

var Filter;
(function (Filter) {
    Filter["SPECIES"] = "interactorSpeciesFilter";
    Filter["INTRA_SPECIES"] = "intraSpeciesFilter";
    Filter["INTERACTOR_TYPE"] = "interactorTypesFilter";
    Filter["INTERACTION_TYPE"] = "interactionTypesFilter";
    Filter["DETECTION_METHOD"] = "interactionDetectionMethodsFilter";
    Filter["HOST_ORGANISM"] = "interactionHostOrganismsFilter";
    Filter["MI_SCORE"] = "miScore";
    Filter["NEGATIVE"] = "isNegativeFilter";
    Filter["MUTATION"] = "mutationFilter";
    Filter["EXPANSION"] = "expansionFilter";
})(Filter || (Filter = {}));
var FilterService_1;


/***/ }),

/***/ "./src/app/interactions/shared/service/interactions-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__ = __webpack_require__("./src/app/shared/service/google-analytics/google-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





const baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].intact_portal_graph_ws;
let InteractionsDetailsService = class InteractionsDetailsService {
    constructor(http, reporter) {
        this.http = http;
        this.reporter = reporter;
        this.interactionDetailsURL = `${baseURL}/graph/interaction/details/`;
        this.interactionViewerURL = `${baseURL}/graph/export/interaction/`;
    }
    getInteractionDetails(interactionAc) {
        return this.http.get(`${this.interactionDetailsURL}${interactionAc}`)
            .catch(this.handleError);
    }
    getInteractionViewer(interactionAc) {
        return this.http.get(`${this.interactionViewerURL}${interactionAc}`, { params: { format: 'miJSON' } })
            .catch(this.handleError);
    }
    handleError(err) {
        this.reporter.reportError(err);
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
InteractionsDetailsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */]])
], InteractionsDetailsService);



/***/ }),

/***/ "./src/app/interactions/shared/service/interactions-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionsSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__ = __webpack_require__("./src/app/shared/service/google-analytics/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







const baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].intact_portal_ws;
let InteractionsSearchService = class InteractionsSearchService {
    constructor(http, reporter, search, filters) {
        this.http = http;
        this.reporter = reporter;
        this.search = search;
        this.filters = filters;
    }
    queryFacets() {
        const params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]({ fromObject: Object.assign({}, this.search.toParams(), this.filters.toParams()) });
        return this.http.post(`${baseURL}/interaction/findInteractionFacets`, params)
            .catch(this.handleError);
    }
    handleError(err) {
        this.reporter.reportError(err);
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
InteractionsSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */], __WEBPACK_IMPORTED_MODULE_6__home_dashboard_search_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_5__filter_service__["b" /* FilterService */]])
], InteractionsSearchService);



/***/ }),

/***/ "./src/app/interactions/shared/service/network-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__ = __webpack_require__("./src/app/shared/service/google-analytics/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_service__ = __webpack_require__("./src/app/interactions/shared/service/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







const baseURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].intact_portal_ws;
let NetworkSearchService = class NetworkSearchService {
    constructor(http, reporter, search, filters) {
        this.http = http;
        this.reporter = reporter;
        this.search = search;
        this.filters = filters;
    }
    getInteractionNetwork(compoundGraph) {
        const params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]({ fromObject: Object.assign({}, this.filters.toParams(), this.search.toParams()) })
            .set('isCompound', compoundGraph.toString());
        return this.http.post(`${baseURL}/network/getInteractions`, params)
            .catch(this.handleError);
    }
    handleError(err) {
        this.reporter.reportError(err);
        if (err.error instanceof Error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    }
};
NetworkSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_service_google_analytics_google_analytics_service__["a" /* GoogleAnalyticsService */], __WEBPACK_IMPORTED_MODULE_6__home_dashboard_search_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_5__filter_service__["b" /* FilterService */]])
], NetworkSearchService);



/***/ }),

/***/ "./src/app/interactions/shared/service/network-selection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkSelectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let NetworkSelectionService = class NetworkSelectionService {
    constructor() {
        this.dataTables = new Set();
        this.resultTables = [];
        this._binaryInteractionIds = [];
        this._interactorAcs = [];
        document.addEventListener('graph-interaction-selected', (e) => {
            this._binaryInteractionIds = e.detail.interactionIds();
            this._interactorAcs = [];
            this.triggerDataTables();
        });
        document.addEventListener('graph-interactor-selected', (e) => {
            this._binaryInteractionIds = [];
            this._interactorAcs = [e.detail.interactorId()];
            this.triggerDataTables();
        });
        document.addEventListener('graph-unselected', () => {
            this._binaryInteractionIds = [];
            this._interactorAcs = [];
            this.triggerDataTables();
        });
    }
    registerSelectionListener(dataTable, resultTable) {
        this.dataTables.add(dataTable);
        this.resultTables.push(resultTable);
    }
    resetSelection(updateTables = true) {
        this._binaryInteractionIds = [];
        this._interactorAcs = [];
        if (updateTables)
            this.triggerDataTables();
    }
    triggerDataTables() {
        this.dataTables.forEach(dataTable => dataTable.ajax.reload());
        this.resultTables.forEach(resultTable => resultTable.clearTableSelection());
    }
    get interactorAcs() {
        return this._interactorAcs;
    }
    get binaryInteractionIds() {
        return this._binaryInteractionIds;
    }
    fromParams(paramMap) {
        this._interactorAcs = paramMap.has('interactorAcs') ? paramMap.get('interactorAcs').split(',') : [];
        this._binaryInteractionIds = paramMap.has('binaryInteractionIds') ? paramMap.get('binaryInteractionIds').split(',').map(Number.parseInt) : [];
    }
    toParams(params = {}, arrayHandler = array => array.join(',')) {
        if (this.interactorAcs.length > 0) {
            params.interactorAcs = arrayHandler(this.interactorAcs);
        }
        if (this.binaryInteractionIds.length > 0) {
            params.binaryInteractionIds = arrayHandler(this.binaryInteractionIds);
        }
        return params;
    }
};
NetworkSelectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NetworkSelectionService);



/***/ }),

/***/ "./src/app/interactions/shared/service/network-view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NetworkViewService = class NetworkViewService {
    constructor() {
        this._visible = true;
        this._expanded = true;
        this._affectedByMutation = false;
        this._groupBySpecies = false;
        this._layoutName = 'fcose';
        this._mustQuery = true;
        this.updatesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.updates = this.updatesSubject.asObservable();
    }
    fromParams(paramMap) {
        this._expanded = paramMap.get('collapsed') !== 'true';
        this._affectedByMutation = paramMap.get('mutationStyle') === 'true';
        this._groupBySpecies = paramMap.get('groupBySpecies') === 'true';
        this._layoutName = paramMap.has('layout') ? paramMap.get('layout') : 'fcose';
    }
    toParams(params = {}, arrayHandler = a => a.join(',')) {
        if (!this._expanded) {
            params.collapsed = true;
        }
        if (this._affectedByMutation) {
            params.mutationStyle = this._affectedByMutation;
        }
        if (this._groupBySpecies) {
            params.groupBySpecies = this._groupBySpecies;
        }
        if (this._layoutName !== 'fcose') {
            params.layout = this._layoutName;
        }
        return params;
    }
    get viewer() {
        return this._viewer;
    }
    set viewer(value) {
        this._viewer = value;
    }
    get expanded() {
        return this._expanded;
    }
    setExpanded(value, update = true) {
        this._expanded = value;
        if (update) {
            this._mustQuery = false;
            this.updatesSubject.next();
            this.viewer.expandEdges(this.expanded, this.affectedByMutation);
        }
    }
    get affectedByMutation() {
        return this._affectedByMutation;
    }
    setAffectedByMutation(value, update = true) {
        this._affectedByMutation = value;
        if (update) {
            this._mustQuery = false;
            this.updatesSubject.next();
            this.viewer.expandEdges(this.expanded, this.affectedByMutation);
        }
    }
    get groupBySpecies() {
        return this._groupBySpecies;
    }
    setGroupBySpecies(value, update = true) {
        this._groupBySpecies = value;
        this._mustQuery = true;
        if (update) {
            this.updatesSubject.next();
        }
    }
    get layoutName() {
        return this._layoutName;
    }
    setLayoutName(value, update = true) {
        this._layoutName = value;
        if (update) {
            this._mustQuery = false;
            this.updatesSubject.next();
            this.viewer.applyLayout(value);
        }
    }
    get visible() {
        return this._visible;
    }
    set visible(value) {
        this._visible = value;
    }
    get mustQuery() {
        return this._mustQuery;
    }
    set mustQuery(value) {
        this._mustQuery = value;
    }
};
NetworkViewService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], NetworkViewService);



/***/ }),

/***/ "./src/app/interactions/shared/service/table-factory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFactoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_array_utils__ = __webpack_require__("./src/app/shared/utils/array-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




const ebiURL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].ebi_url;
let TableFactoryService = TableFactoryService_1 = class TableFactoryService {
    constructor() {
        this.enlistWithButtons = (renderer, containerClass = 'aliasesList', alignTop = true) => (data, type, row, meta) => {
            if (data == null || type !== 'display') {
                return data;
            }
            let html = '<div class="show-more-content">';
            let displayed = 0;
            for (let i = 0; i < data.length; i++) {
                if (i === 2) {
                    html += '<div class="to-hide" style="display: none">';
                }
                const render = renderer(data[i], i);
                if (render) {
                    html += render;
                    displayed++;
                }
            }
            if (displayed > 2) {
                html += `</div></div><button type="button" data-col="${meta.col}" class="showMore">Show more (${data.length - 2})</button>`;
            }
            else {
                html += '</div>';
            }
            return `<div class="${containerClass} ${alignTop ? 'table-list' : ''}">${html}</div>`;
        };
        this.speciesRender = (identifierColumn) => (data, type, row, meta) => {
            const id = row[identifierColumn];
            if (parseInt(id, 10) > 0) {
                const url = `https://www.uniprot.org/taxonomy/${id}`;
                return `<a href="${url}" class="cv-term species" target="_blank">${data}</a>`;
            }
            else {
                return data;
            }
        };
        this.speciesRenderStructured = (species) => {
            if (species == null) {
                return;
            }
            if (species.taxId != null && species.taxId > 0) {
                const url = `https://www.uniprot.org/taxonomy/${species.taxId}`;
                return `<a href="${url}" class="cv-term species" target="_blank">${species.scientificName}</a>`;
            }
            else {
                return species.scientificName;
            }
        };
        this.cvRender = (identifierColumn) => (data, type, row) => {
            const miId = row[identifierColumn];
            if (miId) {
                return `<a href="${TableFactoryService_1.getCvURL(miId)}" class="cv-term" target="_blank">${data}</a>`;
            }
            else {
                return data;
            }
        };
        this.cvRenderStructured = (data, type) => {
            if (type !== undefined && type !== 'display') {
                return;
            }
            if (data.identifier) {
                return `<a href="${TableFactoryService_1.getCvURL(data.identifier)}" class="cv-term" target="_blank">${data.shortName}</a>`;
            }
            else {
                return data.shortName;
            }
        };
        this.annotationRender = (tagStyleMap) => (annotation) => {
            let tagStyle = { class: 'detailsAnnotationCell', symbol: '' };
            if (tagStyleMap != null) {
                if (tagStyleMap.has(annotation.topic.shortName)) {
                    tagStyle = tagStyleMap.get(annotation.topic.shortName);
                }
                else if (tagStyleMap.has('default')) {
                    tagStyle = tagStyleMap.get('default');
                }
            }
            const symbol = tagStyle.symbol !== '' ? `<i class="icon icon-common ${tagStyle.symbol}"></i>` : '';
            const tag = annotation.topic.identifier != null ?
                `<a class="${tagStyle.class} tag-cell" target="_blank" href="${TableFactoryService_1.getCvURL(annotation.topic.identifier)}"
         >${symbol} ${annotation.topic.shortName}</a>` :
                `<span class="${tagStyle.class} tag-cell">${symbol} ${annotation.topic.shortName}</span>`;
            return `<div class="annotationInteractionCell tag-cell-container">
              ${tag}
              <span class="detailsCell annotationInteractionCellWidth">${annotation.description}</span>
            </div>`;
        };
        this.aliasRender = (alias, type) => {
            if (type !== undefined && type !== 'display') {
                return;
            }
            return `<div class="aliasesCell tag-cell-container">
              <a class="detailsAliasesCell tag-cell" target="_blank"
                 href="${ebiURL}/ols/ontologies/mi/terms?obo_id=${alias.type.identifier}">
                ${alias.type.shortName}</a>
              <span class="detailsCell">${alias.name}</span>
            </div>`;
        };
    }
    static getCvURL(miId) {
        if (miId === undefined) {
            return null;
        }
        const id = miId.replace(':', '_');
        return `https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F${id}&viewMode=All&siblings=false`;
    }
    static processDatabase(database) {
        const shortDbName = database.shortName !== undefined ? database.shortName : database;
        const access = TableFactoryService_1.databaseToAccess.get(shortDbName);
        let style = '';
        if (access) {
            if (access.color) {
                style = `color:${access.color};
                 background-color:${access.backColor ? access.backColor : access.color.replace('1.0', '0.05')};`;
            }
        }
        let databaseTag;
        if (database.shortName !== undefined) {
            databaseTag = `<a class="identifier-cell tag-cell" style="${style}" target="_blank" href="${TableFactoryService_1.getCvURL(database.identifier)}"
                       >${access ? access.fancyName : shortDbName}</a>`;
        }
        else {
            databaseTag = `<span class="identifier-cell tag-cell" style="${style}">${access ? access.fancyName : shortDbName}</span>`;
        }
        return { tag: databaseTag, access: access };
    }
    enlist(elementRenderer) {
        return (data, type, row, meta) => {
            if (data == null || type !== 'display') {
                return null;
            }
            return `<ul class="elementList table-list">${data.map(elementRenderer).map((render) => `<li>${render}</li>`).join('')}</ul>`;
        };
    }
    groupBy(grouper, groupRenderer, headerRenderer = group => ' ' + group) {
        return (data, type, row, meta) => {
            if (data == null) {
                return;
            }
            let html = '<div class="table-list">';
            const groups = Object(__WEBPACK_IMPORTED_MODULE_3__shared_utils_array_utils__["a" /* groupBy */])(data, grouper);
            groups.forEach(group => {
                html += `<span class="collapse-header collapsed">${headerRenderer(group.group)}<span class="collapsable-counter">${group.elements.length}</span></span>`;
                html += '<div class="collapse-panel">';
                html += groupRenderer(group.elements, type, row, meta);
                html += '</div>';
            });
            return html + '</div>';
        };
    }
    identifierRender(id) {
        if (id === null) {
            return;
        }
        const db = TableFactoryService_1.processDatabase(id.database);
        const url = db.access ? db.access.getURL(id.identifier) : null;
        return `<div class="tag-cell-container identifier-cell-container">
              ${db.tag}
              <div class="detailsCell identifierCellWidth">
                ${id.qualifier ? '<b> ' : ''}
                  ${url !== null ? `<a href="${url}" target="_blank" >${id.identifier}</a>` : id.identifier}
                ${id.qualifier ? '</b>' : ''}
              </div>
            </div>`;
    }
    databaseTag(database) {
        return TableFactoryService_1.processDatabase(database).tag;
    }
    identifierLink(id) {
        if (id === null) {
            return;
        }
        const db = TableFactoryService_1.processDatabase(id.database);
        const url = db.access ? db.access.getURL(id.identifier) : null;
        return `<div class="detailsCell identifierCellWidth">
              ${id.qualifier ? '<b> ' : ''}
                ${url !== null ? `<a href="${url}" target="_blank" >${id.identifier}</a>` : id.identifier}
              ${id.qualifier ? '</b>' : ''}
            </div>`;
    }
    initTopSlider(tableId) {
        const bodyScroll = __WEBPACK_IMPORTED_MODULE_1_jquery__(`#${tableId}`).parent();
        const headScroll = bodyScroll.siblings('.dataTables_scrollHead');
        bodyScroll.addClass('scrollbar');
        headScroll.addClass('scrollbar');
        let scrolling = false;
        headScroll.on('scroll', () => {
            if (!scrolling) {
                scrolling = true;
                bodyScroll.scrollLeft(headScroll.scrollLeft());
            }
            else {
                scrolling = false;
            }
        });
        bodyScroll.off('scroll');
        bodyScroll.on('scroll', () => {
            if (!scrolling) {
                scrolling = true;
                headScroll.scrollLeft(bodyScroll.scrollLeft());
            }
            else {
                scrolling = false;
            }
        });
    }
    makeTableHeaderSticky() {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('div.dataTables_scrollBody').css('position', 'static');
        const filterBar = __WEBPACK_IMPORTED_MODULE_1_jquery__('#filters-bar');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('div.dataTables_scrollHead')
            .css('position', 'sticky')
            .css('top', this.isScreenSize('large') && filterBar.length === 1 ? filterBar.outerHeight(true) - 1 + 'px' : '0')
            .css('box-shadow', '0 6px 7px -2px #0000005c')
            .css('z-index', '2');
    }
    isScreenSize(size) {
        return window.getComputedStyle(document.body, ':after').getPropertyValue('content').slice(1, -1) === size;
    }
    initShadowBorder(tableId) {
        const table = __WEBPACK_IMPORTED_MODULE_1_jquery__('#' + tableId);
        const scrollArea = table.parents('div.dataTables_scroll');
        scrollArea.append(__WEBPACK_IMPORTED_MODULE_1_jquery__('<div class="shadow-left" style="display: none"></div>'));
        scrollArea.append(__WEBPACK_IMPORTED_MODULE_1_jquery__('<div class="shadow-right"></div>'));
        table.parent('.dataTables_scrollBody').scroll((e) => {
            if (e.target.scrollLeft <= 10) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.shadow-left').hide();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.shadow-left').show();
            }
            if (e.target.scrollWidth - (e.target.clientWidth + e.target.scrollLeft) <= 10) {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.shadow-right').hide();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_jquery__('.shadow-right').show();
            }
        });
    }
    enableShowButtons() {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).off('click', 'button.showMore', TableFactoryService_1.toggleShowMoreLess);
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).on('click', 'button.showMore', TableFactoryService_1.toggleShowMoreLess);
    }
    enableCollapsedPanels() {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).off('click', '.collapse-header', TableFactoryService_1.toggleCollapsedPanels);
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).on('click', '.collapse-header', TableFactoryService_1.toggleCollapsedPanels);
    }
};
TableFactoryService.databaseToAccess = new Map([
    ['uniprotkb', {
            fancyName: 'UniProt',
            getURL: id => `https://www.uniprot.org/uniprot/${id}`,
            color: 'rgba(0,111,155,1.0)',
            backColor: 'rgba(143,195,195,0.1)'
        }],
    ['intact', {
            fancyName: 'IntAct',
            getURL: id => null,
            color: 'rgba(104,41,124,1.0)'
        }],
    ['chebi', {
            fancyName: 'ChEBI',
            getURL: id => `https://www.ebi.ac.uk/chebi/searchId.do?chebiId=${id}`,
            color: 'rgba(8,80,131,1.0)',
            backColor: 'rgba(212,207,50, 0.5)'
        }],
    ['chembl', {
            fancyName: 'ChEMBL',
            getURL: id => `https://www.ebi.ac.uk/chembl/compound_report_card/${id}`,
            color: 'rgba(204,58,93,1.0)',
            backColor: 'rgba(37,159,163,0.5)'
        }],
    ['dip', {
            fancyName: 'DIP',
            getURL: id => `https://dip.doe-mbi.ucla.edu/dip/DIPview.cgi?PK=${id.replace('DIP-', '').slice(0, -1)}`,
            color: 'rgba(58,138,171,1.0)',
            backColor: 'rgba(246,242,49,0.5)'
        }],
    ['refseq', {
            fancyName: 'RefSeq',
            getURL: id => `https://www.ncbi.nlm.nih.gov/refseq/?term=${id}+AND+srcdb_refseq%5Bprop%5D`,
            color: 'rgba(51,102,153,1.0)'
        }],
    ['genbank_protein_gi', {
            fancyName: 'GenBank Protein',
            getURL: id => `https://www.ncbi.nlm.nih.gov/protein/${id}`,
            color: 'rgba(51,102,153,1.0)'
        }],
    ['ensembl', {
            fancyName: 'Ensembl',
            getURL: id => `http://www.ensembl.org/id/${id}`,
            color: 'rgba(164,0,0,1.0)',
            backColor: 'rgba(85,136,221,0.5)'
        }],
    ['matrixdb', {
            fancyName: 'MatrixDB',
            getURL: id => `http://matrixdb.univ-lyon1.fr/cgi-bin/current/newPort?type=biomolecule&value=${id}`,
            color: 'rgb(58,84,128)',
            backColor: 'rgba(154,181,228,0.5)'
        }],
    ['rnacentral', {
            fancyName: 'RNA central',
            getURL: id => `https://rnacentral.org/rna/${id}`,
            color: 'rgba(0,144,188,1.0)',
            backColor: 'rgba(188,216,224,0.5)'
        }],
    ['hgnc', {
            fancyName: 'HGNC',
            getURL: id => `https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/${id}`,
            color: 'rgba(0,50,102,1.0)'
        }],
    ['complex portal', {
            fancyName: 'Complex Portal',
            getURL: id => `https://www.ebi.ac.uk/complexportal/complex/${id}`,
            color: 'rgba(0,157,68,1.0)'
        }],
    ['mint', {
            fancyName: 'MINT',
            getURL: id => `https://mint.bio.uniroma2.it/index.php/results-interactions/?id=${id}`,
            color: 'rgba(9,118,0,1.0)'
        }],
    ['interpro', {
            fancyName: 'InterPro',
            getURL: id => `https://www.ebi.ac.uk/interpro/entry/InterPro/${id}`,
            color: 'rgba(46,124,149,1.0)',
            backColor: 'rgba(171,214,186,0.5)'
        }],
    ['uniparc', {
            fancyName: 'UniParc',
            getURL: id => `https://www.uniprot.org/uniparc/${id}?sort=score`,
            color: 'rgba(219,184,186,1.0)'
        }],
    ['intenz', {
            fancyName: 'IntEnz',
            getURL: (id) => `https://www.ebi.ac.uk/intenz/query?cmd=Search&q=${id}`,
            color: 'rgba(83,136,136,1.0)'
        }]
]);
TableFactoryService.toggleShowMoreLess = (event) => {
    const button = __WEBPACK_IMPORTED_MODULE_1_jquery__(event.target);
    const buttonText = button.text();
    if (buttonText.includes('more')) {
        button.text(buttonText.replace('more', 'less'));
    }
    else {
        button.text(buttonText.replace('less', 'more'));
    }
    const toToggle = button.prev('.show-more-content').children('.to-hide');
    toToggle.slideToggle(toToggle.height());
};
TableFactoryService.toggleCollapsedPanels = (event) => {
    let panel = __WEBPACK_IMPORTED_MODULE_1_jquery__(event.target).next('.collapse-panel');
    if (panel.length === 0) {
        panel = __WEBPACK_IMPORTED_MODULE_1_jquery__(event.target).parent().next('.collapse-panel');
    }
    panel.slideToggle({ duration: panel.height(), easing: 'linear' });
    panel.prev('.collapse-header').toggleClass('collapsed');
};
TableFactoryService = TableFactoryService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TableFactoryService);

var TableFactoryService_1;


/***/ }),

/***/ "./src/app/interactomes/interactome.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Interactome {
    constructor(name, symbol, psi25, psi30, taxid) {
        this.name = name;
        this.symbol = symbol;
        this.psi25 = psi25;
        this.psi30 = psi30;
        this.taxid = taxid;
        const split = this.name.split(/[()]/);
        this.scientificName = split[0];
        this.nameDetails = split[1];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Interactome;



/***/ }),

/***/ "./src/app/interactomes/interactome/interactome.component.css":
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 100px;\n  color: #80727f;\n  line-height: 100px;\n}\n\na {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n}\n\n.card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  padding: 1.5em 1em;\n  border-radius: 12px;\n  height: 100%;\n}\n\n.flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\ndiv.actions {\n  text-align: center;\n}\n\n.species-button {\n  padding: 1em;\n  color: #68297c;\n  border-radius: 200em;\n  margin: 1em;\n  border: none;\n  cursor: pointer;\n}\n\n.species-button:hover {\n  opacity: 0.9;\n  -webkit-box-shadow: 0 0 20px #68297c;\n          box-shadow: 0 0 20px #68297c;\n}\n\nbutton.download-button {\n  border: 2px solid #68297c;\n  border-radius: 25px;\n  color: #68297c;\n}\n"

/***/ }),

/***/ "./src/app/interactomes/interactome/interactome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"interactome.symbol\">\n  <div class=\"medium-12\">\n    <b>{{interactome.scientificName}}</b><br>\n    {{interactome.nameDetails}}\n  </div>\n  <a href=\"https://www.uniprot.org/taxonomy/{{interactome.taxid}}\" target=\"_blank\">{{interactome.taxid}}</a>\n\n  <div class=\"flex-spacer\"></div>\n  <div class=\"medium-12\" style=\"text-align: center\">\n      <button (click)=\"search.speciesSearch(interactome)\" class=\"species-button\">\n        <span [attr.data-icon]=\"interactome.symbol\" style=\"color: #68297c\"\n              [ngClass]=\"{'icon ': true,'icon-species': interactome.symbol !== '?', 'icon-functional': interactome.symbol === '?'}\">\n        </span>\n      </button>\n  </div>\n  <div class=\"actions\">\n      <button mat-raised-button color=\"primary\" (click)=\"goToInteractomePSI25()\">miXML 2.5</button>\n      <button mat-raised-button color=\"primary\" (click)=\"goToInteractomePSI30()\">miXML 3.0</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/interactomes/interactome/interactome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactome_model__ = __webpack_require__("./src/app/interactomes/interactome.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let InteractomeComponent = class InteractomeComponent {
    constructor(search) {
        this.search = search;
    }
    ngOnInit() {
    }
    goToInteractomePSI25() {
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_psi25_url + '/species/' + this.interactome.psi25 + '.zip', '_blank');
    }
    goToInteractomePSI30() {
        window.open(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_psi30_url + '/species/' + this.interactome.psi30 + '.zip', '_blank');
    }
    get interactome() {
        return this._interactome;
    }
    set interactome(value) {
        this._interactome = value;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interactome_model__["a" /* Interactome */]),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__interactome_model__["a" /* Interactome */]])
], InteractomeComponent.prototype, "interactome", null);
InteractomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactome',
        template: __webpack_require__("./src/app/interactomes/interactome/interactome.component.html"),
        styles: [__webpack_require__("./src/app/interactomes/interactome/interactome.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__home_dashboard_search_service_search_service__["a" /* SearchService */]])
], InteractomeComponent);



/***/ }),

/***/ "./src/app/interactomes/interactomes-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interactome_model__ = __webpack_require__("./src/app/interactomes/interactome.model.ts");

// ##  1: taxid:9606(human)|taxid:9606(Homo sapiens)
// ##  2: taxid:559292(yeast)|taxid:559292(Saccharomyces cerevisiae)
// ##  3: taxid:7227(drome)|taxid:7227("Drosophila melanogaster (Fruit fly)")
// ##  4: taxid:6239(caeel)|taxid:6239(Caenorhabditis elegans)
// ##  5: taxid:3702(arath)|taxid:3702("Arabidopsis thaliana (Mouse-ear cress)")
// ##  6: taxid:10090(mouse)|taxid:10090(Mus musculus)
// ##  7: taxid:83333(ecoli)|taxid:83333("Escherichia coli (strain K12)")
// ##  8: taxid:192222(camje)|taxid:192222("Campylobacter jejuni subsp. jejuni serotype O:2 (strain NCTC 11168)")
// ##  9: taxid:10116(rat)|taxid:10116("Rattus norvegicus (Rat)")
// ## 10: taxid:243276(trepa)|taxid:243276("Treponema pallidum (strain Nichols)")
// ## 11: taxid:1111708(syny3)|taxid:1111708("Synechocystis sp. (strain PCC 6803 / Kazusa)")
// ## 12: taxid:36329(plaf7)|taxid:36329("Plasmodium falciparum (isolate 3D7)")
// ## 13: taxid:85962(helpy)|taxid:85962(Helicobacter pylori)
// ## 14: taxid:284812(schpo)|taxid:284812("Schizosaccharomyces pombe (strain ATCC 38366 / 972)")
// ## 15: taxid:224308(bacsu)|taxid:224308(Bacillus subtilis)
// ## 16: taxid:882(desvh)|taxid:882("Desulfovibrio vulgaris (strain Hildenborough / ATCC 29579 / NCIMB 8303)")
class InteractomesConstants {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InteractomesConstants;

InteractomesConstants.interactomes = [
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Homo sapiens', 'H', 'human', 'human', 9606),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Saccharomyces cerevisiae', 'Y', 'yeast', 'yeast', 559292),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Drosophila melanogaster (Fruit fly)', 'F', 'drome', 'drome', 7227),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Caenorhabditis elegans', 'W', 'caeel', 'caeel', 6239),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Arabidopsis thaliana (Mouse-ear cress)', 'B', 'arath', 'arath', 3702),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Mus musculus', 'M', 'mouse', 'mouse', 10090),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Escherichia coli (strain K12)', 'L', 'ecoli', 'ecoli', 83333),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Campylobacter jejuni subsp. jejuni serotype O:2 (strain NCTC 11168)', 'L', 'camje', 'camje', 192222),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Rattus norvegicus (Rat)', 'R', 'rat', 'rat', 10116),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Treponema pallidum (strain Nichols)', 'L', 'trepa', 'trepa', 243276),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Synechocystis sp. (strain PCC 6803 / Kazusa)', 'Y', 'syny3', 'syny3', 1111708),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Plasmodium falciparum (isolate 3D7)', '@', 'plaf7', 'plaf7', 36329),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Helicobacter pylori', 'L', 'helpy', 'helpy', 85962),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Schizosaccharomyces pombe (strain ATCC 38366 / 972)', 'Y', 'schpo', 'schpo', 284812),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('Bacillus subtilis', 'L', 'bacsu', 'bacsu', 224308),
    new __WEBPACK_IMPORTED_MODULE_0__interactome_model__["a" /* Interactome */]('SARS-CoV-2', 'v', 'SARS-CoV-2', 'SARS-CoV-2', 2697049),
];


/***/ }),

/***/ "./src/app/interactomes/interactomes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interactomes/interactomes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"columns medium-12\" style=\"display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  grid-gap: 1rem;\">\n    <div class=\"medium-12\" *ngFor=\"let interactome of interactomes\" style=\"break-inside: avoid-column\">\n      <ip-interactome [interactome]=\"interactome\"></ip-interactome>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interactomes/interactomes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractomesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interactomes_constants__ = __webpack_require__("./src/app/interactomes/interactomes-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let InteractomesComponent = class InteractomesComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this._interactomes = [];
        this.interactomes = __WEBPACK_IMPORTED_MODULE_2__interactomes_constants__["a" /* InteractomesConstants */].interactomes;
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Interactomes');
    }
    get interactomes() {
        return this._interactomes;
    }
    set interactomes(value) {
        this._interactomes = value;
    }
};
InteractomesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-interactomes',
        template: __webpack_require__("./src/app/interactomes/interactomes.component.html"),
        styles: [__webpack_require__("./src/app/interactomes/interactomes.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], InteractomesComponent);



/***/ }),

/***/ "./src/app/layout/contributors/contributors.component.css":
/***/ (function(module, exports) {

module.exports = "a, a:visited {\n  border: none;\n}\n"

/***/ }),

/***/ "./src/app/layout/contributors/contributors.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contributors\" class=\"margin-top-large\" style=\"text-align: center\">\n  <h4><p class=\"icon icon-generic\" data-icon=\"}\"> Our Contributors</p></h4>\n</div>\n\n<div style=\"text-align: center\">\n  <a href=\"//mint.bio.uniroma2.it\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_mint_s.png\" alt=\"Mint\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.uniprot.org\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_uniprot_s.png\" alt=\"UniProt\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.sib.swiss\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_sib_s.png\" alt=\"SIB\" style=\"height:50px\">\n  </a>\n  <a href=\"//dip.doe-mbi.ucla.edu/dip/Main.cgi\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_dip_s.png\" alt=\"DIP\" style=\"height:50px\">\n  </a>\n  <a href=\"//iid.ophid.utoronto.ca/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_id2_s.png\" alt=\"ID2\" style=\"\n    height: 75px;\n    background-image: radial-gradient(farthest-side at 0 100%, #39bbc7, #3A332D);\n    padding: 5px;\n    border-radius: 5px;\">\n  </a>\n  <a href=\"//www.innatedb.com\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_innatedb_s.png\" alt=\"InnateDB\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.molecularconnections.com\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_mconnections_s.png\" alt=\"Molecular Connections\" style=\"height:50px\">\n  </a>\n  <a href=\"//matrixdb.univ-lyon1.fr\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_matrixdb_s.png\" alt=\"matrixDB\" style=\"height:75px\">\n  </a>\n  <a href=\"//www.mechanobio.info\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_mbinfo_s.png\" alt=\"mbInfo\" style=\"height: 50px;\n    background-color: rgba(18,58,83,0.7);\n    border-radius: 10px;\n    padding: 5px;\">\n  </a>\n  <a href=\"//agbase.arizona.edu/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_agbase_s.png\" alt=\"AGBase\" style=\"height:75px; \">\n  </a>\n  <a href=\"//hpidb.igbb.msstate.edu/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_hpidb.png\" alt=\"HPIDB\" style=\"height:50px; border-radius: 10px;\">\n  </a>\n  <a href=\"//www.ucl.ac.uk/cardiovascular/research/pre-clinical-and-fundamental-science/functional-gene-annotation\"\n     target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_acg_s.png\" alt=\"ACG\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.imexconsortium.org\" target=\"_blank\">\n    <img style=\"height: 100px\" src=\"assets/images/contributors/IMEx_logo_webmedium.jpg\" alt=\"IMEx\">\n  </a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/contributors/contributors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ContributorsComponent = class ContributorsComponent {
    constructor() { }
    ngOnInit() {
        $('ip-contributors').foundation();
    }
};
ContributorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-contributors',
        template: __webpack_require__("./src/app/layout/contributors/contributors.component.html"),
        styles: [__webpack_require__("./src/app/layout/contributors/contributors.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContributorsComponent);



/***/ }),

/***/ "./src/app/layout/header/compact-header/compact-header.component.css":
/***/ (function(module, exports) {

module.exports = "/* NAVIGATION SUBMENU OVERRIDE EBI-GLOBAL TO REMOVE A WHITE RIGHT LINE */\n\n.no-border-submenu {\n  border-right: 0 !important;\n}\n\n/* COMPACT HEADER */\n\n.masthead.compact-for-data .masthead-inner {\n  padding-top: .5rem;\n}\n\n.masthead.compact-for-data .masthead-inner div#local-title {\n  margin-bottom: 0;\n}\n\n.masthead.compact-for-data .masthead-inner h1 {\n  font-size: 2.5rem;\n  margin-bottom: 0;\n  margin-top: -.5rem;\n}\n\n.masthead.compact-for-data .masthead-inner form {\n  margin-top: -1rem;\n}\n\n.masthead.compact-for-data .masthead-inner nav {\n  margin-top: .75rem;\n  clear: none;\n}\n\n.masthead.compact-for-data.compact-disabled .masthead-inner > nav.column {\n  width: 100%;\n  left: 0;\n}\n\n.masthead-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n"

/***/ }),

/***/ "./src/app/layout/header/compact-header/compact-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"masthead\" class=\"masthead compact-for-data\">\n  <div class=\"masthead-inner row expanded collapse\">\n    <!-- local-title -->\n    <div>\n      <a routerLink=\"/home\" title=\"Back to IntAct homepage\">\n        <div class=\"media-object\" id=\"local-title\">\n          <div class=\"media-object-section\">\n            <img class=\"padding-bottom-small\" src=\"assets/images/logo/intact_logo.svg\" alt=\"IntAct logo\"\n                 style=\"height: 3rem;\">\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- /local-title -->\n\n    <ip-local-search style=\"flex: 1\"></ip-local-search>\n\n    <!-- local-nav -->\n    <nav>\n      <ul id=\"local-nav\" class=\"dropdown menu float-left\" data-dropdown-menu=\"true\" data-description=\"navigational\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/download\" routerLinkActive=\"active\">Download</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/documentation\" routerLinkActive=\"active\">Documentation</a></li>\n        <!--  TODO replace back with Support and remove hard code styling after the beta finish-->\n        <li routerLinkActive=\"active\"><a style=\"background: crimson\" href=\"//www.ebi.ac.uk/support/intact\">Feedback <i class=\"icon icon-generic\"\n                                                                                          data-icon=\"x\"></i></a></li>\n      </ul>\n    </nav>\n    <!-- /local-nav -->\n  </div>\n  <ip-progress-bar></ip-progress-bar>\n</header>\n"

/***/ }),

/***/ "./src/app/layout/header/compact-header/compact-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompactHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CompactHeaderComponent = class CompactHeaderComponent {
    constructor() { }
    ngOnInit() {
        $('ip-compact-header').foundation();
    }
};
CompactHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-compact-header',
        template: __webpack_require__("./src/app/layout/header/compact-header/compact-header.component.html"),
        styles: [__webpack_require__("./src/app/layout/header/compact-header/compact-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CompactHeaderComponent);



/***/ }),

/***/ "./src/app/layout/header/expanded-header/expanded-header.component.css":
/***/ (function(module, exports) {

module.exports = "/* NAVIGATION SUBMENU OVERRIDE EBI-GLOBAL TO REMOVE A WHITE RIGHT LINE */\n\n.no-border-submenu {\n  border-right: 0 !important ;\n}\n\n.bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n\n.masthead nav ul li.active a {\n  background-color: white;\n}\n"

/***/ }),

/***/ "./src/app/layout/header/expanded-header/expanded-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"masthead\" class=\"masthead\">\n  <div class=\"masthead-inner row expanded\"> <!-- expanded -->\n    <!-- local-title -->\n    <div class=\"columns\">\n      <a routerLink=\"/home\" title=\"Back to Intact homepage\">\n        <div class=\"media-object\" id=\"local-title\">\n          <div class=\"media-object-section\" >\n            <img src=\"assets/images/logo/intact_logo.svg\" alt=\"IntAct logo\" class=\"padding-left-large\" style=\"height:5em; width:21em;\">\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- /local-title -->\n\n    <!-- local-nav -->\n    <div class=\"row expanded no-padding\">\n      <nav class=\"bar column medium-6 small-12 no-padding\">\n        <ul id=\"local-nav\" class=\"dropdown menu\" data-dropdown-menu=\"true\" data-description=\"navigational\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/download\" routerLinkActive=\"active\">Download</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/documentation\" routerLinkActive=\"active\">Documentation</a></li>\n          <li routerLinkActive=\"active\"><a style=\"background: crimson\" href=\"//www.ebi.ac.uk/support/intact\">Feedback <i class=\"icon icon-generic\" data-icon=\"x\"></i></a></li>\n        </ul>\n      </nav>\n\n      <ip-local-search class=\"column medium-5 small-12 no-padding\"></ip-local-search>\n    </div>\n\n    <!-- /local-nav -->\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/layout/header/expanded-header/expanded-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ExpandedHeaderComponent = class ExpandedHeaderComponent {
    constructor() { }
    ngOnInit() {
        $('ip-expanded-header').foundation();
    }
};
ExpandedHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-expanded-header',
        template: __webpack_require__("./src/app/layout/header/expanded-header/expanded-header.component.html"),
        styles: [__webpack_require__("./src/app/layout/header/expanded-header/expanded-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ExpandedHeaderComponent);



/***/ }),

/***/ "./src/app/layout/header/local-search/local-search.component.css":
/***/ (function(module, exports) {

module.exports = ".frosty-glass {\n  background: rgba(255, 255, 255, 0.3);\n  color: #FFFFFF;\n}\n\n.white-border {\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  border-bottom: 0;\n}\n\n#localSearchBox {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  justify-items: flex-end;\n}\n\n#local-search-button {\n  background: rgba(255, 255, 255, 0.3);\n  padding: 0.9em 1.2em;\n  margin: 0;\n  font-size: 0.8em;\n  border-left: 1px solid white;\n}\n\n#local-searchbox {\n  font-size: medium;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 2.4em;\n  border-bottom: 0;\n}\n\n#local-searchbox::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1; /* Firefox */\n}\n\n#local-searchbox::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1; /* Firefox */\n}\n\n#local-searchbox::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1; /* Firefox */\n}\n\n#local-searchbox::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1; /* Firefox */\n}\n\n#local-searchbox::-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: #FFFFFF;\n}\n\n#local-searchbox::-ms-input-placeholder { /* Microsoft Edge */\n  color: #FFFFFF;\n}\n"

/***/ }),

/***/ "./src/app/layout/header/local-search/local-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'visibility':!hasRoute('home') ? 'visible': 'hidden'}\" id=\"intact-local-search\">\n  <div id=\"localSearchBox\" class=\"no-margin white-border\">\n    <input #query class=\"typeahead frosty-glass\" type=\"text\" name=\"first\" id=\"local-searchbox\"\n           (keydown.enter)=\"search(query.value, 'enter')\"\n           placeholder=\"Search by gene names, UniProt ACs, Pubmed, protein names, Complex ACs\"/>\n    <button id=\"local-search-button\" class=\"button\"\n            (click)=\"search(query.value, 'button')\">\n      <i class=\"icon icon-common icon-search\"></i>\n    </button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/header/local-search/local-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_dashboard_search_service_search_service__ = __webpack_require__("./src/app/home-dashboard/search/service/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LocalSearchComponent = class LocalSearchComponent {
    constructor(location, router, activatedRoute, searchService) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
    }
    ngOnInit() {
        $('ip-local-search').foundation();
    }
    ngAfterViewInit() {
        this.searchService.searchSuggestions($('#localSearchBox .typeahead'));
    }
    search(query, typeOfButton) {
        if (query) {
            this.searchService.search(query);
            if (typeOfButton === 'enter' || typeOfButton === 'button') {
                this.searchService.title = query;
            }
        }
    }
    hasRoute(route) {
        return this.router.url.includes(route);
    }
};
LocalSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-local-search',
        template: __webpack_require__("./src/app/layout/header/local-search/local-search.component.html"),
        styles: [__webpack_require__("./src/app/layout/header/local-search/local-search.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_3__home_dashboard_search_service_search_service__["a" /* SearchService */]])
], LocalSearchComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_compact_header_compact_header_component__ = __webpack_require__("./src/app/layout/header/compact-header/compact-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_expanded_header_expanded_header_component__ = __webpack_require__("./src/app/layout/header/expanded-header/expanded-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_footer_local_footer_component__ = __webpack_require__("./src/app/layout/local-footer/local-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contributors_contributors_component__ = __webpack_require__("./src/app/layout/contributors/contributors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_indicators_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_local_search_local_search_component__ = __webpack_require__("./src/app/layout/header/local-search/local-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__["a" /* MatProgressBarModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__header_local_search_local_search_component__["a" /* LocalSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7__loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_2__header_compact_header_compact_header_component__["a" /* CompactHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_expanded_header_expanded_header_component__["a" /* ExpandedHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__local_footer_local_footer_component__["a" /* LocalFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contributors_contributors_component__["a" /* ContributorsComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__loading_indicators_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_2__header_compact_header_compact_header_component__["a" /* CompactHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_expanded_header_expanded_header_component__["a" /* ExpandedHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__local_footer_local_footer_component__["a" /* LocalFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contributors_contributors_component__["a" /* ContributorsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_local_search_local_search_component__["a" /* LocalSearchComponent */]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-bar/progress-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"isDisplayed\"\n                 [color]=\"color\"\n                 [mode]=\"mode\">\n</mat-progress-bar>\n\n"

/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProgressBarComponent = ProgressBarComponent_1 = class ProgressBarComponent {
    constructor() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressBarComponent_1.show = true;
    }
    static display() {
        ProgressBarComponent_1.show = true;
    }
    static hide() {
        setTimeout(() => {
            ProgressBarComponent_1.show = false;
        }, 1000);
    }
    static hideWithoutDelay() {
        ProgressBarComponent_1.show = false;
    }
    ngOnInit() {
    }
    get isDisplayed() {
        return ProgressBarComponent_1.show;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
    }
};
ProgressBarComponent = ProgressBarComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-progress-bar',
        template: __webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.html"),
        styles: [__webpack_require__("./src/app/layout/loading-indicators/progress-bar/progress-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

var ProgressBarComponent_1;


/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-5 small-centered columns\">\n  <mat-progress-spinner style=\"margin:0 auto;\"\n                       [attr.color]=\"color\"\n                       [mode]=\"mode\"\n                       [value]=\"0\">\n  </mat-progress-spinner>\n  <div style=\"text-align: center\">\n    <h4>Loading {{query}}</h4>\n    <p *ngIf=\"takesLonger\">This takes longer than usual. Bear with us!</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProgressSpinnerComponent = ProgressSpinnerComponent_1 = class ProgressSpinnerComponent {
    constructor() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressSpinnerComponent_1.show = false;
    }
    static display() {
        ProgressSpinnerComponent_1.show = true;
    }
    static hide() {
        setTimeout(function () {
            ProgressSpinnerComponent_1.show = false;
        }, 1000);
    }
    ngOnInit() {
        const context = this;
        setTimeout(function () {
            context._takesLonger = true;
        }, 5000);
    }
    get isDisplayed() {
        return ProgressSpinnerComponent_1.show;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        this._mode = value;
    }
    get query() {
        return this._query;
    }
    set query(value) {
        this._query = value;
    }
    get takesLonger() {
        return this._takesLonger;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ProgressSpinnerComponent.prototype, "query", null);
ProgressSpinnerComponent = ProgressSpinnerComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-progress-spinner',
        template: __webpack_require__("./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.html"),
        styles: [__webpack_require__("./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressSpinnerComponent);

var ProgressSpinnerComponent_1;


/***/ }),

/***/ "./src/app/layout/loading-indicators/progress-spinner/progress-spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__ = __webpack_require__("./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ProgressSpinnerModule = class ProgressSpinnerModule {
};
ProgressSpinnerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatProgressSpinnerModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
        ]
    })
], ProgressSpinnerModule);



/***/ }),

/***/ "./src/app/layout/local-footer/local-footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/local-footer/local-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Optional local footer (insert citation / project-specific copyright / etc here -->\n<footer id=\"local-footer\" class=\"local-footer\" role=\"local-footer\">\n  <div class=\"row expanded margin-top-medium\">\n    <ip-contributors></ip-contributors>\n  </div>\n</footer>\n<!-- End optional local footer -->\n"

/***/ }),

/***/ "./src/app/layout/local-footer/local-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LocalFooterComponent = class LocalFooterComponent {
    constructor() { }
    ngOnInit() {
        $('ip-local-footer').foundation();
    }
};
LocalFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-local-footer',
        template: __webpack_require__("./src/app/layout/local-footer/local-footer.component.html"),
        styles: [__webpack_require__("./src/app/layout/local-footer/local-footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocalFooterComponent);



/***/ }),

/***/ "./src/app/navigation/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\nip-markdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n"

/***/ }),

/***/ "./src/app/navigation/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>About</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"about-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"about#overview\" aria-selected=\"true\">Overview</a></li>\n    <li class=\"tabs-title\"><a href=\"about#collaborators\">Collaborators</a></li>\n    <li class=\"tabs-title\"><a href=\"about#funding\">Funding</a></li>\n    <li class=\"tabs-title\"><a href=\"about#statistics\">Statistics</a></li>\n    <li class=\"tabs-title\"><a href=\"about#publications\">Publications</a></li>\n    <li class=\"tabs-title\"><a href=\"about#license_privacy\">License and Privacy</a></li>\n    <li class=\"tabs-title\"><a href=\"about#conceptual_design\">Logo and Design Portfolio</a></li>\n    <li class=\"tabs-title\"><a href=\"about#sab\">SAB</a></li>\n    <li class=\"tabs-title\"><a href=\"about#cite_us\">Cite Us</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"about-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"overview\">\n      <ip-markdown [src]=overview></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"collaborators\">\n      <ip-markdown [src]=collaborators></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"funding\">\n      <ip-markdown [src]=funding></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"statistics\">\n      <ip-markdown [data]=statistics></ip-markdown>\n      <p>Work in progress</p>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"publications\">\n      <ip-markdown [src]=publications></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"license_privacy\">\n      <ip-markdown [src]=license_privacy></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"conceptual_design\">\n      <ip-markdown [src]=conceptual_design></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"sab\">\n      <ip-markdown [src]=sab></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"cite_us\">\n      <ip-markdown [src]=cite_us></ip-markdown>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AboutComponent = class AboutComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.overview = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/overview.md';
        this.collaborators = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/collaborators.md';
        this.funding = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/funding.md';
        this.statistics = `# Statistics`; // Temporary until we have the statistics page
        this.publications = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/publications.md';
        this.license_privacy = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/license-privacy.md';
        this.conceptual_design = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/conceptual-design.md';
        this.sab = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/scientific-advisory-board.md';
        this.cite_us = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'about/cite-us.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - About');
        $('ip-about').foundation();
    }
};
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-about',
        template: __webpack_require__("./src/app/navigation/about/about.component.html"),
        styles: [__webpack_require__("./src/app/navigation/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], AboutComponent);



/***/ }),

/***/ "./src/app/navigation/documentation/data-submission/data-submission.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\n"

/***/ }),

/***/ "./src/app/navigation/documentation/data-submission/data-submission.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Data Submission</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"data-submission-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/datasets#how-to-submit\" aria-selected=\"true\">How to submit?</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"data-submission-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"how-to-submit\">\n      <ip-markdown [src]=how_to_submit></ip-markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/data-submission/data-submission.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSubmissionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DataSubmissionComponent = class DataSubmissionComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.how_to_submit = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/how-to-submit.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Data Submission');
        $('ip-datasets').foundation();
    }
};
DataSubmissionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-data-submission',
        template: __webpack_require__("./src/app/navigation/documentation/data-submission/data-submission.component.html"),
        styles: [__webpack_require__("./src/app/navigation/documentation/data-submission/data-submission.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */]])
], DataSubmissionComponent);



/***/ }),

/***/ "./src/app/navigation/documentation/datasets/datasets.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\nip-markdown ::ng-deep table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  font-size: small;\n}\n"

/***/ }),

/***/ "./src/app/navigation/documentation/datasets/datasets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Datasets</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"datasets-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/datasets#dataset\" aria-selected=\"true\">Datasets</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"datasets-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"dataset\">\n      <ip-markdown [src]=dataset></ip-markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/datasets/datasets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DatasetsComponent = class DatasetsComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.dataset = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/datasets.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Datasets');
        $('ip-datasets').foundation();
    }
};
DatasetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-datasets',
        template: __webpack_require__("./src/app/navigation/documentation/datasets/datasets.component.html"),
        styles: [__webpack_require__("./src/app/navigation/documentation/datasets/datasets.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */]])
], DatasetsComponent);



/***/ }),

/***/ "./src/app/navigation/documentation/documentation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentation_component__ = __webpack_require__("./src/app/navigation/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__technical_corner_technical_corner_component__ = __webpack_require__("./src/app/navigation/documentation/technical-corner/technical-corner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_submission_data_submission_component__ = __webpack_require__("./src/app/navigation/documentation/data-submission/data-submission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datasets_datasets_component__ = __webpack_require__("./src/app/navigation/documentation/datasets/datasets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_guide_user_guide_component__ = __webpack_require__("./src/app/navigation/documentation/user-guide/user-guide.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const documentationRoutes = [
    {
        path: 'documentation',
        component: __WEBPACK_IMPORTED_MODULE_2__documentation_component__["a" /* DocumentationComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/data_submission',
        component: __WEBPACK_IMPORTED_MODULE_4__data_submission_data_submission_component__["a" /* DataSubmissionComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/user-guide',
        component: __WEBPACK_IMPORTED_MODULE_6__user_guide_user_guide_component__["a" /* UserGuideComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/technical_corner',
        component: __WEBPACK_IMPORTED_MODULE_3__technical_corner_technical_corner_component__["a" /* TechnicalCornerComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/datasets',
        component: __WEBPACK_IMPORTED_MODULE_5__datasets_datasets_component__["a" /* DatasetsComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
];
let DocumentationRoutingModule = class DocumentationRoutingModule {
};
DocumentationRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(documentationRoutes)],
    })
], DocumentationRoutingModule);



/***/ }),

/***/ "./src/app/navigation/documentation/documentation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/documentation/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-grid\" data-equalizer data-equalize-on=\"large\" id=\"doc-button-grid\">\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./user-guide\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf129;\"></h3>\n      <h5 class=\"white-color\">User Guide</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./technical_corner\">\n      <h3 class=\"icon icon-common white-color \"data-icon=\"&#xf11c;\"></h3>\n      <h5 class=\"white-color\">Technical Corner</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./datasets\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf187;\"></h3>\n      <h5 class=\"white-color\">Datasets</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./data_submission\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf093;\"></h3>\n      <h5 class=\"white-color\">Data Submission</h5></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DocumentationComponent = class DocumentationComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Documentation');
        $('ip-documentation').foundation();
    }
};
DocumentationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-documentation',
        template: __webpack_require__("./src/app/navigation/documentation/documentation.component.html"),
        styles: [__webpack_require__("./src/app/navigation/documentation/documentation.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], DocumentationComponent);



/***/ }),

/***/ "./src/app/navigation/documentation/documentation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentation_component__ = __webpack_require__("./src/app/navigation/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentation_routing_module__ = __webpack_require__("./src/app/navigation/documentation/documentation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__technical_corner_technical_corner_component__ = __webpack_require__("./src/app/navigation/documentation/technical-corner/technical-corner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_submission_data_submission_component__ = __webpack_require__("./src/app/navigation/documentation/data-submission/data-submission.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datasets_datasets_component__ = __webpack_require__("./src/app/navigation/documentation/datasets/datasets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_markdown_markdown_module__ = __webpack_require__("./src/app/navigation/documentation/shared/markdown/markdown.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_guide_user_guide_component__ = __webpack_require__("./src/app/navigation/documentation/user-guide/user-guide.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let DocumentationModule = class DocumentationModule {
};
DocumentationModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__documentation_routing_module__["a" /* DocumentationRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__shared_markdown_markdown_module__["a" /* MarkdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__documentation_component__["a" /* DocumentationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_guide_user_guide_component__["a" /* UserGuideComponent */],
            __WEBPACK_IMPORTED_MODULE_5__data_submission_data_submission_component__["a" /* DataSubmissionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__technical_corner_technical_corner_component__["a" /* TechnicalCornerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__datasets_datasets_component__["a" /* DatasetsComponent */]
        ]
    })
], DocumentationModule);



/***/ }),

/***/ "./src/app/navigation/documentation/shared/markdown/markdown.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/documentation/shared/markdown/markdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"output\"></div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/shared/markdown/markdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_markdown_renderer_service__ = __webpack_require__("./src/app/navigation/documentation/shared/markdown/service/markdown-renderer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MarkdownComponent = class MarkdownComponent {
    constructor(md, sanitizer) {
        this.md = md;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        if (this.data) {
            this.output = this.sanitizer.bypassSecurityTrustHtml(this.md.render(this.data));
        }
        else if (this.src) {
            fetch(this.src)
                .then(src => src.text())
                .then(content => this.md.render(content.replace(/(..\/)?\.gitbook\/assets\//g, `assets/images/gitbook/`)))
                .then(value => this.output = this.sanitizer.bypassSecurityTrustHtml(value));
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MarkdownComponent.prototype, "src", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MarkdownComponent.prototype, "data", void 0);
MarkdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-markdown',
        template: __webpack_require__("./src/app/navigation/documentation/shared/markdown/markdown.component.html"),
        styles: [__webpack_require__("./src/app/navigation/documentation/shared/markdown/markdown.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_markdown_renderer_service__["a" /* MarkdownRendererService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], MarkdownComponent);



/***/ }),

/***/ "./src/app/navigation/documentation/shared/markdown/markdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markdown_component__ = __webpack_require__("./src/app/navigation/documentation/shared/markdown/markdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_markdown_renderer_service__ = __webpack_require__("./src/app/navigation/documentation/shared/markdown/service/markdown-renderer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MarkdownModule = class MarkdownModule {
};
MarkdownModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__markdown_component__["a" /* MarkdownComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__markdown_component__["a" /* MarkdownComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__service_markdown_renderer_service__["a" /* MarkdownRendererService */]
        ]
    })
], MarkdownModule);



/***/ }),

/***/ "./src/app/navigation/documentation/shared/markdown/service/markdown-renderer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownRendererService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it__ = __webpack_require__("./node_modules/markdown-it/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_markdown_it__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex__ = __webpack_require__("./node_modules/@iktakahiro/markdown-it-katex/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MarkdownRendererService = class MarkdownRendererService {
    constructor() {
        this.md = new __WEBPACK_IMPORTED_MODULE_1_markdown_it__();
        this.md.use(__WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex__);
    }
    render(markdown) {
        return this.md.render(markdown);
    }
};
MarkdownRendererService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MarkdownRendererService);



/***/ }),

/***/ "./src/app/navigation/documentation/technical-corner/technical-corner.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\n"

/***/ }),

/***/ "./src/app/navigation/documentation/technical-corner/technical-corner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Technical Corner</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"technical-corner-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/technical_corner#apis\" aria-selected=\"true\">APIs</a></li>\n    <!--li class=\"tabs-title\"><a href=\"documentation/technical_corner#source_code\">Source Code</a></li-->\n    <li class=\"tabs-title\"><a href=\"documentation/technical_corner#tools\">Tools</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"technical-corner-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"apis\">\n      <ip-markdown [src]=apis></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"source_code\">\n      <ip-markdown [src]=source_code></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"tools\">\n      <ip-markdown [src]=tools></ip-markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/technical-corner/technical-corner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalCornerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TechnicalCornerComponent = class TechnicalCornerComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.apis = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/technical-corner/apis.md';
        this.source_code = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/technical-corner/source-code.md';
        this.tools = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/technical-corner/tools.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Technical Corner');
        $('ip-technical-corner').foundation();
    }
};
TechnicalCornerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-technical-corner',
        template: __webpack_require__("./src/app/navigation/documentation/technical-corner/technical-corner.component.html"),
        styles: [__webpack_require__("./src/app/navigation/documentation/technical-corner/technical-corner.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */]])
], TechnicalCornerComponent);



/***/ }),

/***/ "./src/app/navigation/documentation/user-guide/user-guide.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\n#user-guide-tabs>li>a {\n  padding-right:12px;\n  padding-left:12px;\n}\n"

/***/ }),

/***/ "./src/app/navigation/documentation/user-guide/user-guide.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>User Guide</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"user-guide-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/user-guide#data_sources\" aria-selected=\"true\">Data Sources & Annotation Practices</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#usage\">Searching IntAct</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#expansion_method\">Expansion Method</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#interaction_scoring\">Interaction Scoring</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#definitions_formats\">Definitions and Formats</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#data_export\">Data Export</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#access_intact\">Access IntAct</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#curation_manual\">Curation Manual</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"user-guide-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"data_sources\">\n      <ip-markdown [src]=data_sources></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"usage\">\n      <ip-markdown [src]=usage></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"expansion_method\">\n      <ip-markdown [src]=expansion_method></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"interaction_scoring\">\n      <ip-markdown [src]=interaction_scoring></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"definitions_formats\">\n      <ip-markdown [src]=definitions_formats></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"data_export\">\n      <ip-markdown [src]=data_export></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"access_intact\">\n      <ip-markdown [src]=access_intact></ip-markdown>\n    </div>\n    <div class=\"tabs-panel is-active\" id=\"curation_manual\">\n      <ip-markdown [src]=curation_manual></ip-markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/documentation/user-guide/user-guide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGuideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UserGuideComponent = class UserGuideComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.data_sources = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/data-sources-and-annotation-practices.md';
        this.usage = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/searching-intact.md';
        this.expansion_method = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/expansion-method.md';
        this.interaction_scoring = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/interaction-scoring.md';
        this.definitions_formats = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/definitions-and-formats.md';
        this.data_export = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/data-export.md';
        this.access_intact = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/access-intact.md';
        this.curation_manual = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'documentation/user-guide/curation-manual.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - User Guide');
        $('ip-user-guide').foundation();
    }
};
UserGuideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-user-guide',
        template: __webpack_require__("./src/app/navigation/documentation/user-guide/user-guide.component.html"),
        styles: [__webpack_require__("./src/app/navigation/documentation/user-guide/user-guide.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], UserGuideComponent);



/***/ }),

/***/ "./src/app/navigation/download/datasets/datasets.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\nip-markdown ::ng-deep table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  font-size: small;\n}\n"

/***/ }),

/***/ "./src/app/navigation/download/datasets/datasets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Datasets</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"datasets-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"download/datasets#curated\" aria-selected=\"true\">Curated datasets</a></li>\n    <li class=\"tabs-title\"><a href=\"download/datasets#computationally\">Computational datasets</a></li>\n    <li class=\"tabs-title\"><a href=\"download/datasets#species\">Species-specific datasets</a></li>\n    <li class=\"tabs-title\"><a href=\"download/datasets#mutations\">Mutations dataset</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"datasets-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"curated\">\n      <ip-markdown [src]=curated></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"computationally\">\n      <ip-markdown [src]=computationally></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"species\">\n      <ip-markdown [src]=species></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"mutations\">\n      <ip-markdown [src]=mutations></ip-markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/download/datasets/datasets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DatasetsComponent = class DatasetsComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.curated = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'download/curated-datasets.md';
        this.computationally = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'download/computational-datasets.md';
        this.species = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'download/species-based-datasets.md';
        this.mutations = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'download/mutations.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Datasets');
        $('ip-datasets').foundation();
    }
};
DatasetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-datasets',
        template: __webpack_require__("./src/app/navigation/download/datasets/datasets.component.html"),
        styles: [__webpack_require__("./src/app/navigation/download/datasets/datasets.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["g" /* Title */]])
], DatasetsComponent);



/***/ }),

/***/ "./src/app/navigation/download/download-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_component__ = __webpack_require__("./src/app/navigation/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ftp_ftp_component__ = __webpack_require__("./src/app/navigation/download/ftp/ftp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datasets_datasets_component__ = __webpack_require__("./src/app/navigation/download/datasets/datasets.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const downloadRoutes = [
    {
        path: 'download',
        component: __WEBPACK_IMPORTED_MODULE_2__download_component__["a" /* DownloadComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'download/ftp',
        component: __WEBPACK_IMPORTED_MODULE_3__ftp_ftp_component__["a" /* FTPComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'download/datasets',
        component: __WEBPACK_IMPORTED_MODULE_4__datasets_datasets_component__["a" /* DatasetsComponent */],
        data: { showCompactHeader: false, showFooter: true }
    },
];
let DownloadRoutingModule = class DownloadRoutingModule {
};
DownloadRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(downloadRoutes)],
    })
], DownloadRoutingModule);



/***/ }),

/***/ "./src/app/navigation/download/download.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/download/download.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row button-grid\" data-equalizer data-equalize-on=\"large\" id=\"doc-button-grid\">\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./ftp\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf019;\"></h3>\n      <h5 class=\"white-color\">FTP</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./datasets\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf187;\"></h3>\n      <h5 class=\"white-color\">Datasets</h5></a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/download/download.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DownloadComponent = class DownloadComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Download');
        $('ip-download').foundation();
    }
};
DownloadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-download',
        template: __webpack_require__("./src/app/navigation/download/download.component.html"),
        styles: [__webpack_require__("./src/app/navigation/download/download.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], DownloadComponent);



/***/ }),

/***/ "./src/app/navigation/download/download.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__download_component__ = __webpack_require__("./src/app/navigation/download/download.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__download_routing_module__ = __webpack_require__("./src/app/navigation/download/download-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ftp_ftp_component__ = __webpack_require__("./src/app/navigation/download/ftp/ftp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datasets_datasets_component__ = __webpack_require__("./src/app/navigation/download/datasets/datasets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_markdown_markdown_module__ = __webpack_require__("./src/app/navigation/download/shared/markdown/markdown.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let DownloadModule = class DownloadModule {
};
DownloadModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__download_routing_module__["a" /* DownloadRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_markdown_markdown_module__["a" /* MarkdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__download_component__["a" /* DownloadComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ftp_ftp_component__["a" /* FTPComponent */],
            __WEBPACK_IMPORTED_MODULE_5__datasets_datasets_component__["a" /* DatasetsComponent */]
        ]
    })
], DownloadModule);



/***/ }),

/***/ "./src/app/navigation/download/ftp/ftp.component.css":
/***/ (function(module, exports) {

module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\n"

/***/ }),

/***/ "./src/app/navigation/download/ftp/ftp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>FTP</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"download-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"download#ftp\" aria-selected=\"true\">FTP</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"download-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"ftp\">\n      <ip-markdown [src]=ftp></ip-markdown>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/download/ftp/ftp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FTPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FTPComponent = class FTPComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.ftp = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].intact_portal_documentation_url + 'download/ftp.md';
    }
    ngOnInit() {
        this.titleService.setTitle('IntAct - Download');
        $('ip-download').foundation();
    }
};
FTPComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-download',
        template: __webpack_require__("./src/app/navigation/download/ftp/ftp.component.html"),
        styles: [__webpack_require__("./src/app/navigation/download/ftp/ftp.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]])
], FTPComponent);



/***/ }),

/***/ "./src/app/navigation/download/shared/markdown/markdown.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/download/shared/markdown/markdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div [innerHTML]=\"output\"></div>\n"

/***/ }),

/***/ "./src/app/navigation/download/shared/markdown/markdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_markdown_renderer_service__ = __webpack_require__("./src/app/navigation/download/shared/markdown/service/markdown-renderer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MarkdownComponent = class MarkdownComponent {
    constructor(md, sanitizer) {
        this.md = md;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        if (this.data) {
            this.output = this.sanitizer.bypassSecurityTrustHtml(this.md.render(this.data));
        }
        else if (this.src) {
            fetch(this.src)
                .then(src => src.text())
                .then(content => this.md.render(content.replace(/(..\/)?\.gitbook\/assets\//g, `assets/images/gitbook/`)))
                .then(value => this.output = this.sanitizer.bypassSecurityTrustHtml(value));
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MarkdownComponent.prototype, "src", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], MarkdownComponent.prototype, "data", void 0);
MarkdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-markdown',
        template: __webpack_require__("./src/app/navigation/download/shared/markdown/markdown.component.html"),
        styles: [__webpack_require__("./src/app/navigation/download/shared/markdown/markdown.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_markdown_renderer_service__["a" /* MarkdownRendererService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], MarkdownComponent);



/***/ }),

/***/ "./src/app/navigation/download/shared/markdown/markdown.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__markdown_component__ = __webpack_require__("./src/app/navigation/download/shared/markdown/markdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_markdown_renderer_service__ = __webpack_require__("./src/app/navigation/download/shared/markdown/service/markdown-renderer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MarkdownModule = class MarkdownModule {
};
MarkdownModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__markdown_component__["a" /* MarkdownComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__markdown_component__["a" /* MarkdownComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__service_markdown_renderer_service__["a" /* MarkdownRendererService */]
        ]
    })
], MarkdownModule);



/***/ }),

/***/ "./src/app/navigation/download/shared/markdown/service/markdown-renderer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownRendererService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it__ = __webpack_require__("./node_modules/markdown-it/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_markdown_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_markdown_it__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex__ = __webpack_require__("./node_modules/@iktakahiro/markdown-it-katex/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let MarkdownRendererService = class MarkdownRendererService {
    constructor() {
        this.md = new __WEBPACK_IMPORTED_MODULE_1_markdown_it__();
        this.md.use(__WEBPACK_IMPORTED_MODULE_2__iktakahiro_markdown_it_katex__);
    }
    render(markdown) {
        return this.md.render(markdown);
    }
};
MarkdownRendererService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MarkdownRendererService);



/***/ }),

/***/ "./src/app/navigation/redirect/redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Redirection</h1>\n\nYou are being redirected to <a [href]=\"href\">{{href}}</a><br>\nPlease wait till <a [href]=\"href\">{{href}}</a>  is ready.\n"

/***/ }),

/***/ "./src/app/navigation/redirect/redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let RedirectComponent = class RedirectComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.href = data.externalUrl;
            this.route.params.subscribe((params) => {
                for (const param of Object.keys(params)) {
                    this.href = this.href.replace(':' + param, params[param]);
                }
                this.route.queryParams.subscribe(queryParams => {
                    const paramList = Object.keys(queryParams);
                    if (paramList.length > 0) {
                        this.href += `?${paramList.map(param => `${param}=${queryParams[param]}`).join('&')}`;
                    }
                    window.location.href = this.href;
                });
            });
        });
    }
};
RedirectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-redirect',
        template: __webpack_require__("./src/app/navigation/redirect/redirect.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
], RedirectComponent);



/***/ }),

/***/ "./src/app/shared/components/column-toggle/column-toggle.component.css":
/***/ (function(module, exports) {

module.exports = ".stick-and-fill-right {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n}\n\nul.tight li {\n  height: 1.3em;\n}\n\n.column-toggle-container .dropdown-pane {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 0.3em 1em;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/column-toggle/column-toggle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"column-toggle-container\">\n  <button class=\"dropdown button stick-and-fill-right adjust-width\" type=\"button\" [attr.data-toggle]=\"columnView\">\n    Column toggle\n  </button>\n\n  <div id=\"{{columnView}}\" class=\"dropdown-pane\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\">\n    <ul class=\"no-bullet tight\">\n      <li *ngFor=\"let column of columns; let i = index\">\n        <label>\n          <input #col class=\"list-view\" type=\"checkbox\" name=\"list\" [attr.data-column]=\"i\" value=\"{{column.title}}\"\n                 (change)=\"onChangeColumnSelected(col.value)\"\n                 [checked]=\"isColumnSelected(col.value)\">{{column.title}}\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/shared/components/column-toggle/column-toggle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnToggleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_foundation_utils__ = __webpack_require__("./src/app/shared/utils/foundation-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ColumnToggleComponent = class ColumnToggleComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.columnSelectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ngOnInit() {
        this.initColumnVisibility();
    }
    ngOnChanges(changes) {
        if (changes.isTabActive && changes.isTabActive.firstChange && changes.isTabActive.currentValue) {
            this.initColumnVisibility();
        }
    }
    initColumnVisibility() {
        const columnView = this.columnView + '_columns';
        // Initialize columns that are already selected to view
        if (localStorage.getItem(columnView) != null) {
            this.columnsSelected = JSON.parse(localStorage.getItem(this.columnView + '_columns'));
        }
        else {
            this.columnsSelected = [...this.columns].filter(column => column.hiddenByDefault).map(column => column.title);
        }
        // Hide the columns from the table that are already selected to hide
        const columnsToHide = this.columnsSelected;
        this.dataTable.columns().every(function () {
            const title = $(this.header()).text();
            this.visible(columnsToHide.indexOf(title) < 0);
        });
    }
    ngAfterViewInit() {
        this.cdRef.detectChanges();
        this.showHideColumns();
        __WEBPACK_IMPORTED_MODULE_1__utils_foundation_utils__["a" /* FoundationUtils */].adjustWidth();
        const container = $('.column-toggle-container');
        container.foundation();
        container.foundationExtendEBI();
    }
    onChangeColumnSelected(column) {
        if (!this.columnsSelected.includes(column)) {
            this.columnsSelected.push(column);
        }
        else {
            this.columnsSelected.splice(this.columnsSelected.indexOf(column), 1);
        }
        localStorage.setItem(this.columnView + '_columns', JSON.stringify(this.columnsSelected));
        this.columnSelectionChanged.emit(this.columnsSelected);
    }
    isColumnSelected(column) {
        return this.columnsSelected !== undefined ? this.columnsSelected.indexOf(column) < 0 : false;
    }
    showHideColumns() {
        const table = this.dataTable;
        $('#' + this.columnView + ' input[type="checkbox"]').on('click', function (e) {
            // Get the column API object
            const column = table.column($(this).attr('data-column'));
            // Toggle the visibility
            column.visible(!column.visible());
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ColumnToggleComponent.prototype, "columns", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ColumnToggleComponent.prototype, "dataTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], ColumnToggleComponent.prototype, "columnView", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ColumnToggleComponent.prototype, "isTabActive", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], ColumnToggleComponent.prototype, "columnSelectionChanged", void 0);
ColumnToggleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-column-toggle',
        template: __webpack_require__("./src/app/shared/components/column-toggle/column-toggle.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/column-toggle/column-toggle.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
], ColumnToggleComponent);



/***/ }),

/***/ "./src/app/shared/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diagrams_node_diagram_node_diagram_component__ = __webpack_require__("./src/app/shared/components/diagrams/node-diagram/node-diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__diagrams_edge_diagram_edge_diagram_component__ = __webpack_require__("./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__diagrams_color_range_diagram_color_range_diagram_component__ = __webpack_require__("./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__diagrams_edge_thickness_diagram_edge_thickness_diagram_component__ = __webpack_require__("./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__column_toggle_column_toggle_component__ = __webpack_require__("./src/app/shared/components/column-toggle/column-toggle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__column_toggle_column_toggle_component__["a" /* ColumnToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_2__diagrams_node_diagram_node_diagram_component__["a" /* NodeDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_3__diagrams_edge_diagram_edge_diagram_component__["a" /* EdgeDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_4__diagrams_color_range_diagram_color_range_diagram_component__["a" /* ColorRangeDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_5__diagrams_edge_thickness_diagram_edge_thickness_diagram_component__["a" /* EdgeThicknessDiagramComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__column_toggle_column_toggle_component__["a" /* ColumnToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_2__diagrams_node_diagram_node_diagram_component__["a" /* NodeDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_3__diagrams_edge_diagram_edge_diagram_component__["a" /* EdgeDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_4__diagrams_color_range_diagram_color_range_diagram_component__["a" /* ColorRangeDiagramComponent */],
            __WEBPACK_IMPORTED_MODULE_5__diagrams_edge_thickness_diagram_edge_thickness_diagram_component__["a" /* EdgeThicknessDiagramComponent */]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.css":
/***/ (function(module, exports) {

module.exports = ".upper-filled {\n  paint-order: markers stroke fill;\n}\n\nrect {\n  stroke: #ababab;\n}\n\ntext {\n  fill: #3c3c3c;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.html":
/***/ (function(module, exports) {

module.exports = "<svg [attr.viewBox]=\"viewBox\" class=\"complete-legend-line\">\n  <defs>\n    <linearGradient id=\"lg\" [attr.x1]=\"min\" [attr.x2]=\"max\" y1=\"0\" y2=\"0\" gradientUnits=\"userSpaceOnUse\">\n      <stop *ngFor=\"let point of points\" [attr.stop-color]=\"point.color\" [attr.offset]=\"point.x\"></stop>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" [attr.width]=\"max - min\" [attr.height]=\"height / 2\" [attr.ry]=\"height / 4\" fill=\"url(#lg)\"\n        [attr.stroke-width]=\"height / 14\" class=\"upper-filled\"/>\n\n  <text *ngFor=\"let pointLabel of pointLabels;\" [attr.x]=\"pointLabel\" [attr.y]=\"3 * height / 4\" [attr.font-size]=\"height/3\"\n        dominant-baseline=\"middle\" text-anchor=\"middle\">{{pointLabel}}</text>\n</svg>\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorRangeDiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ColorRangeDiagramComponent = class ColorRangeDiagramComponent {
    constructor() {
        this._points = [];
        this.min = null;
        this.max = null;
    }
    ngOnInit() {
        Object.keys(this.rangeMap)
            .forEach(key => {
            let [start, stop] = key.split(' - ').map(Number.parseFloat);
            if (this.min == null || start < this.min)
                this.min = start;
            if (this.max == null || stop > this.max)
                this.max = stop;
            let color = this.rangeMap[key];
            this.points.push(new ColoredPoint(color, start));
            this.points.push(new ColoredPoint(color, stop));
        }, this);
    }
    get points() {
        return this._points;
    }
    get pointLabels() {
        return this._points.map(p => p.x).filter((v, i) => i % 4 == 1);
    }
    get height() {
        return (this.max - this.min) / 8;
    }
    get strokeWidth() {
        return this.height / 14;
    }
    get viewBox() {
        return `${this.min - this.strokeWidth / 2} ${-this.strokeWidth / 2} ${this.max + this.strokeWidth} ${this.height + this.strokeWidth}`;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ColorRangeDiagramComponent.prototype, "rangeMap", void 0);
ColorRangeDiagramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-color-range-diagram',
        template: __webpack_require__("./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ColorRangeDiagramComponent);

class ColoredPoint {
    constructor(color, x) {
        this.color = color;
        this.x = x;
    }
}


/***/ }),

/***/ "./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.css":
/***/ (function(module, exports) {

module.exports = ".edge-diagram {\n  vertical-align: middle;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.html":
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\" class=\"edge-diagram\">\n  <line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\"\n        [attr.stroke-width]=\"thickness\"\n        [attr.stroke]=\"color\"\n        [attr.stroke-dasharray]=\"strokeShape\"></line>\n</svg>\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdgeDiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_edge_shape__ = __webpack_require__("./src/app/interactions/shared/model/network-shapes/edge-shape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let EdgeDiagramComponent = class EdgeDiagramComponent {
    constructor() {
        this.shape = __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_edge_shape__["a" /* EdgeShape */].SOLID_LINE;
        this.color = "#d6d6d6";
        this.thickness = 15;
    }
    ngOnInit() {
    }
    get strokeShape() {
        return this.shape == __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_edge_shape__["a" /* EdgeShape */].SOLID_LINE ? "100" : "25 10";
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], EdgeDiagramComponent.prototype, "shape", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], EdgeDiagramComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], EdgeDiagramComponent.prototype, "thickness", void 0);
EdgeDiagramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-edge-diagram',
        template: __webpack_require__("./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EdgeDiagramComponent);



/***/ }),

/***/ "./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.html":
/***/ (function(module, exports) {

module.exports = "<svg [attr.viewBox]=\"viewBox\" class=\"complete-legend-line\">\n  <polygon [attr.points]=\"connectionPoints\" [attr.fill]=\"color\" opacity=\"0.5\"></polygon>\n  <rect [attr.height]=\"minThickness\" [attr.y]=\"(height - minThickness)/2\"\n        [attr.width]=\"edgeWidth\" [attr.x]=\"0\"\n        [attr.fill]=\"color\"></rect>\n  <rect [attr.height]=\"maxThickness\" [attr.y]=\"0\"\n        [attr.width]=\"edgeWidth\" [attr.x]=\"width - edgeWidth\"\n        [attr.fill]=\"color\"></rect>\n  <text [attr.x]=\"edgeWidth\" [attr.y]=\"(height + minThickness) / 2 + fontSize\"\n        [attr.fill]=\"color\" [attr.font-size]=\"fontSize\" text-anchor=\"middle\">{{minValue}}</text>\n  <text [attr.x]=\"width - edgeWidth\" [attr.y]=\"totalHeight\"\n        [attr.fill]=\"color\" [attr.font-size]=\"fontSize\" text-anchor=\"middle\">{{maxValue}}</text>\n</svg>\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdgeThicknessDiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let EdgeThicknessDiagramComponent = class EdgeThicknessDiagramComponent {
    constructor() {
        this.color = '#ababab';
    }
    ngOnInit() {
    }
    get width() {
        return this.totalHeight * 8;
    }
    get height() {
        return this.maxThickness;
    }
    get totalHeight() {
        return this.height + this.spacing + this.fontSize;
    }
    get edgeWidth() {
        return this.maxThickness * 2;
    }
    get fontSize() {
        return this.height / 2;
    }
    get spacing() {
        return this.height / 12;
    }
    get viewBox() {
        return `0 0 ${this.width} ${this.totalHeight}`;
    }
    get connectionPoints() {
        return `
    ${this.edgeWidth} ${(this.height - this.minThickness) / 2},
    ${this.width - this.edgeWidth} 0,
    ${this.width - this.edgeWidth} ${this.maxThickness},
    ${this.edgeWidth} ${(this.height + this.minThickness) / 2}
    `;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], EdgeThicknessDiagramComponent.prototype, "minThickness", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], EdgeThicknessDiagramComponent.prototype, "maxThickness", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], EdgeThicknessDiagramComponent.prototype, "minValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], EdgeThicknessDiagramComponent.prototype, "maxValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], EdgeThicknessDiagramComponent.prototype, "color", void 0);
EdgeThicknessDiagramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-edge-thickness-diagram',
        template: __webpack_require__("./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EdgeThicknessDiagramComponent);



/***/ }),

/***/ "./src/app/shared/components/diagrams/node-diagram/node-diagram.component.css":
/***/ (function(module, exports) {

module.exports = ".node-diagram {\n  vertical-align: middle;\n  height: 20pt;\n}\n\n.node-diagram text {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/node-diagram/node-diagram.component.html":
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 100 100\" class=\"node-diagram\" [ngStyle]=\"{'height': height}\" #svg>\n  <g [ngSwitch]=\"shape\" #shapeGroup>\n    <circle *ngSwitchCase=\"NodeShape.ELLIPSE\"\n            r=\"47.57\" cx=\"50%\" cy=\"50%\"/>\n    <path *ngSwitchCase=\"NodeShape.TRIANGLE\"\n          d=\"m 50.714288,5.8194648 44.880439,91.4407922 -91.3680247,0 z\"/>\n    <path *ngSwitchCase=\"NodeShape.DIAMOND\"\n          d=\"M 2.6785714,50 49.821429,2.8007365 97.301851,49.604865 49.821429,97.123279 Z\"/>\n    <path *ngSwitchCase=\"NodeShape.HEXAGON\"\n          d=\"M 2.321,50 26.071429,9.7650222 H 73.398681 L 97.577186,50 73.398681,90.516137 H 26.071429 Z\"/>\n    <path *ngSwitchCase=\"NodeShape.OCTAGON\"\n          d=\"M 97.443707,69.535644 69.733981,97.361553 30.464356,97.443707 2.6384466,69.733981 2.5562928,30.464356 30.266019,2.6384466 69.535644,2.5562928 97.361553,30.266019 Z\"/>\n    <rect *ngSwitchCase=\"NodeShape.ROUNDED_RECTANGLE\"\n          width=\"95.125\" height=\"95.125\" ry=\"25\" x=\"2.5\" y=\"2.5\"/>\n    <path *ngSwitchCase=\"NodeShape.PARALLELOGRAM\"\n          d=\"m4.1071 2.7838h44.523l47.084 94.477-47.023 0.17857z\"/>\n    <path *ngSwitchCase=\"NodeShape.VEE\"\n          d=\"m2.5 2.4266 47.5 38.214 47.679-38.559-47.679 92.143z\"/>\n    <path *ngSwitchCase=\"NodeShape.TAG\"\n          d=\"m1.9643 98.214-0.056406-96.306h48.092l47.302 47.697-47.302 48.59z\"/>\n  </g>\n\n  <text *ngIf=\"label !== null\" fill=\"white\" x=\"50%\" y=\"52.5%\" dominant-baseline=\"middle\" text-anchor=\"middle\" #labelElt>\n    {{label}}\n  </text>\n</svg>\n"

/***/ }),

/***/ "./src/app/shared/components/diagrams/node-diagram/node-diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeDiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_node_shape__ = __webpack_require__("./src/app/interactions/shared/model/network-shapes/node-shape.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let NodeDiagramComponent = class NodeDiagramComponent {
    constructor() {
        this.NodeShape = __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_node_shape__["a" /* NodeShape */];
    }
    ngOnInit() {
        if (!this.shape)
            this.shape = __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_node_shape__["a" /* NodeShape */].ELLIPSE;
        if (!this.color)
            this.color = '#d6d6d6';
        if (!this.height)
            this.height = '18pt';
    }
    ngAfterViewInit() {
        this.init();
    }
    ngOnChanges(changes) {
        this.init();
    }
    init() {
        const shapeElt = this.shapeGroupElt.nativeElement.firstElementChild;
        if (shapeElt) {
            shapeElt.setAttribute('fill', this.color);
            shapeElt.setAttribute('stroke-width', '6');
            shapeElt.setAttribute('stroke', this.borderColor ? this.borderColor : this.color);
            if (this.label) {
                const labelElt = this.labelElt.nativeElement;
                const box = labelElt.getBBox();
                if (box.width >= 100) {
                    $(this.svgElt.nativeElement).attr('viewBox', `0 0 ${box.width + 5} 100`);
                    if (this.shape !== __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_network_shapes_node_shape__["a" /* NodeShape */].ELLIPSE)
                        shapeElt.setAttribute('transform', `translate(${box.width / 2 - 49})`);
                }
            }
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NodeDiagramComponent.prototype, "shape", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NodeDiagramComponent.prototype, "color", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NodeDiagramComponent.prototype, "borderColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NodeDiagramComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], NodeDiagramComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('labelElt'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], NodeDiagramComponent.prototype, "labelElt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('svg'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], NodeDiagramComponent.prototype, "svgElt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('shapeGroup'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], NodeDiagramComponent.prototype, "shapeGroupElt", void 0);
NodeDiagramComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ip-node-diagram',
        template: __webpack_require__("./src/app/shared/components/diagrams/node-diagram/node-diagram.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/diagrams/node-diagram/node-diagram.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NodeDiagramComponent);



/***/ }),

/***/ "./src/app/shared/service/google-analytics/google-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angulartics2__ = __webpack_require__("./node_modules/angulartics2/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_action_enum__ = __webpack_require__("./src/app/shared/service/google-analytics/types/action-enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types_category_enum__ = __webpack_require__("./src/app/shared/service/google-analytics/types/category-enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types_label_enum__ = __webpack_require__("./src/app/shared/service/google-analytics/types/label-enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let GoogleAnalyticsService = class GoogleAnalyticsService {
    constructor(angulartics2) {
        this.angulartics2 = angulartics2;
    }
    report(category, action, label) {
        this.angulartics2.eventTrack.next({
            action: __WEBPACK_IMPORTED_MODULE_2__types_action_enum__["a" /* Action */][action] || action,
            properties: { category: __WEBPACK_IMPORTED_MODULE_3__types_category_enum__["a" /* Category */][category], label: __WEBPACK_IMPORTED_MODULE_4__types_label_enum__["a" /* Label */][label] || label }
        });
    }
    reportError(error) {
        if (error instanceof Error) {
            this.report(__WEBPACK_IMPORTED_MODULE_3__types_category_enum__["a" /* Category */].error, error.name, error.message);
        }
        else {
            this.report(__WEBPACK_IMPORTED_MODULE_3__types_category_enum__["a" /* Category */].error, __WEBPACK_IMPORTED_MODULE_2__types_action_enum__["a" /* Action */].error, error.toString());
        }
        this.angulartics2.exceptionTrack.next({});
    }
};
GoogleAnalyticsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angulartics2__["a" /* Angulartics2 */]])
], GoogleAnalyticsService);



/***/ }),

/***/ "./src/app/shared/service/google-analytics/types/action-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["download"] = 0] = "download";
    Action[Action["search"] = 1] = "search";
    Action[Action["batchSearch"] = 2] = "batchSearch";
    Action[Action["toggle"] = 3] = "toggle";
    Action[Action["select"] = 4] = "select";
    Action[Action["expand"] = 5] = "expand";
    Action[Action["collapse"] = 6] = "collapse";
    Action[Action["include"] = 7] = "include";
    Action[Action["go"] = 8] = "go";
    Action[Action["filter"] = 9] = "filter";
    Action[Action["error"] = 10] = "error";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/shared/service/google-analytics/types/category-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category;
(function (Category) {
    Category[Category["details"] = 0] = "details";
    Category[Category["results"] = 1] = "results";
    Category[Category["home"] = 2] = "home";
    Category[Category["datasets"] = 3] = "datasets";
    Category[Category["organisms"] = 4] = "organisms";
    Category[Category["documentation"] = 5] = "documentation";
    Category[Category["error"] = 6] = "error";
})(Category || (Category = {}));


/***/ }),

/***/ "./src/app/shared/service/google-analytics/types/label-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
var Label;
(function (Label) {
    Label[Label["miTab_2_7"] = 0] = "miTab_2_7";
    Label[Label["miXML_2_5"] = 1] = "miXML_2_5";
    Label[Label["miXML_3_0"] = 2] = "miXML_3_0";
    Label[Label["miJSON_1_0"] = 3] = "miJSON_1_0";
    Label[Label["svg"] = 4] = "svg";
    Label[Label["usingFile"] = 5] = "usingFile";
    Label[Label["usingSuggestion"] = 6] = "usingSuggestion";
})(Label || (Label = {}));


/***/ }),

/***/ "./src/app/shared/utils/array-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = groupBy;
function groupBy(array, groupBy) {
    return Array.from(array.reduce((groups, value) => {
        let group = groupBy(value);
        let key = JSON.stringify(group);
        if (groups.has(key)) {
            groups.get(key).elements.push(value);
        }
        else {
            groups.set(key, { group: group, elements: [value] });
        }
        return groups;
    }, new Map()).values());
}


/***/ }),

/***/ "./src/app/shared/utils/foundation-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class FoundationUtils {
    static adjustWidth() {
        let buttons = $('button[data-toggle].adjust-width');
        buttons.each((i, button) => {
            let $button = $(button);
            let pane = $('#' + $button.attr('data-toggle'));
            if (pane.outerWidth() > $button.outerWidth()) {
                $button.width(pane.outerWidth(true) - ($button.outerWidth() - $button.width()));
            }
            else {
                pane.width($button.outerWidth() - 1);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FoundationUtils;



/***/ }),

/***/ "./src/app/shared/utils/string-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export titleCase */
/* harmony export (immutable) */ __webpack_exports__["a"] = extractAlias;
/* harmony export (immutable) */ __webpack_exports__["c"] = extractId;
/* harmony export (immutable) */ __webpack_exports__["b"] = extractAnnotation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interactions_shared_model_interaction_details_cv_term_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/cv-term.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_interaction_details_annotation_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/annotation.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interactions_shared_model_interaction_details_alias_model__ = __webpack_require__("./src/app/interactions/shared/model/interaction-details/alias.model.ts");



function titleCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Extract alias from rawData string
 * @param rawData: "value value ... (type short label(type MI Identifier)) "
 */
function extractAlias(rawData) {
    const split = rawData.split('(');
    return new __WEBPACK_IMPORTED_MODULE_2__interactions_shared_model_interaction_details_alias_model__["a" /* Alias */](split.slice(0, -2).join('(').trim(), new __WEBPACK_IMPORTED_MODULE_0__interactions_shared_model_interaction_details_cv_term_model__["a" /* CvTerm */](split[split.length - 1].slice(0, -2), split[split.length - 2]));
}
/**
 * Extract ids
 * @param rawData: "id (database) "
 */
function extractId(rawData) {
    if (rawData === null)
        return null;
    const split = rawData.split('(');
    return {
        identifier: split.slice(0, -1).join('(').trim(),
        database: split[split.length - 1].slice(0, -1).trim(),
    };
}
/**
 * Extract annotation
 * @param rawData: "type (value) "
 */
function extractAnnotation(rawData) {
    if (rawData === null)
        return null;
    const split = rawData.split('(');
    return new __WEBPACK_IMPORTED_MODULE_1__interactions_shared_model_interaction_details_annotation_model__["a" /* Annotation */](new __WEBPACK_IMPORTED_MODULE_0__interactions_shared_model_interaction_details_cv_term_model__["a" /* CvTerm */](split[0].trim(), undefined), split.slice(1).join('(').slice(0, -1).trim());
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// Environment for development
const EBI_BASE_URL = 'https://wwwdev.ebi.ac.uk';
const EBI_URL = 'https://www.ebi.ac.uk';
const FORMER_INTACT_URL = 'https://www.ebi.ac.uk/legacy-intact/';
const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
const INTACT_FTP_BASE_URL = 'https://ftp.ebi.ac.uk/pub/databases/intact';
const INTACT_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/master/';
const environment = {
    production: false,
    evn: 'dev',
    analytics_id: 'UA-672146-15',
    ebi_url: EBI_URL,
    former_intact_url: FORMER_INTACT_URL,
    context_path: '',
    license_url: LICENSE_URL,
    intact_psi25_url: INTACT_FTP_BASE_URL + '/current/psi25',
    intact_psi30_url: INTACT_FTP_BASE_URL + '/current/psi30',
    intact_psimitab_url: INTACT_FTP_BASE_URL + '/current/psimitab/pmid',
    intact_dotm_url: EBI_BASE_URL + '/~intact/site/dotm/dotm-1.1.xml',
    intact_portal_url: EBI_BASE_URL + '/intact',
    intact_portal_support_url: EBI_BASE_URL + 'support/intact',
    intact_training_url: EBI_BASE_URL + 'intact/resources/training',
    // todo remove it when all the ws are mapped to wwwdev.ebi.ac.uk/intact/ws
    intact_portal_ws: EBI_BASE_URL + '/intact/ws',
    intact_portal_graph_ws: EBI_BASE_URL + '/intact/ws',
    intact_portal_documentation_url: INTACT_PORTAL_DOCUMENTATION_URL
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map