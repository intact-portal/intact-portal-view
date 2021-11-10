(self["webpackChunkintact_portal"] = self["webpackChunkintact_portal"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyUrlSerializer": function() { return /* binding */ MyUrlSerializer; },
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _navigation_download_download_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/download/download.component */ 39853);
/* harmony import */ var _interactomes_interactomes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactomes/interactomes.component */ 18691);
/* harmony import */ var _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/about/about.component */ 7249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/redirect/redirect.component */ 22619);








// Enable parenthesis in url parameters
var MyUrlSerializer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(MyUrlSerializer, _super);
    function MyUrlSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyUrlSerializer.prototype.parse = function (url) {
        return _super.prototype.parse.call(this, url.replace(/[!'()*]/g, function (c) {
            // Also encode !, ', (, ), and *
            return '%' + c.charCodeAt(0).toString(16);
        }));
    };
    MyUrlSerializer = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
    ], MyUrlSerializer);
    return MyUrlSerializer;
}(_angular_router__WEBPACK_IMPORTED_MODULE_7__.DefaultUrlSerializer));

var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! app/home-dashboard/home-dashboard.module */ 40664)).then(function (m) { return m.HomeDashboardModule; }); }
    },
    {
        path: 'search',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! app/interactions/interactions-results/interactions-results.module */ 51045)).then(function (m) { return m.InteractionsResultsModule; }); }
    },
    {
        path: 'details',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! app/interactions/interaction-details/interaction-details.module */ 60789)).then(function (m) { return m.InteractionDetailsModule; }); }
    },
    {
        path: 'download',
        component: _navigation_download_download_component__WEBPACK_IMPORTED_MODULE_0__.DownloadComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'interactomes',
        component: _interactomes_interactomes_component__WEBPACK_IMPORTED_MODULE_1__.InteractomesComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'about',
        component: _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'interaction/:interactionAc',
        redirectTo: 'details/interaction/:interactionAc'
    },
    {
        path: 'query/:advanced_query',
        component: _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_4__.RedirectComponent,
        data: { externalUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.former_intact_url + 'query/:advanced_query' }
    },
    {
        path: 'interactors/:query',
        component: _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_4__.RedirectComponent,
        data: { externalUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.former_intact_url + 'interactors/:query' }
    },
    {
        path: 'pages/list/list.xhtml',
        component: _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_4__.RedirectComponent,
        data: { externalUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.former_intact_url + 'pages/list/list.xhtml' }
    },
    {
        path: 'pages/interactions/interactions.xhtml',
        component: _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_4__.RedirectComponent,
        data: { externalUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.former_intact_url + 'pages/interactions/interactions.xhtml' }
    },
    {
        path: 'pages/details/details.xhtml',
        component: _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_4__.RedirectComponent,
        data: { externalUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.former_intact_url + 'pages/details/details.xhtml' }
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { useHash: false })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/loading-indicators/progress-bar/progress-bar.component */ 31599);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);









var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, baseHref) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.baseHref = baseHref;
        this.version = '0.0.1';
        this.showCompactHeader = false;
        this.showFooter = true;
        this.title = 'IntAct';
    }
    AppComponent_1 = AppComponent;
    AppComponent.initFoundation = function () {
        $(document).foundation();
        $(document).foundationExtendEBI();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.context_path = /\/$/.test(this.baseHref) ? this.baseHref.substring(0, this.baseHref.length - 1) : this.baseHref;
        AppComponent_1.initFoundation();
        this.router.events
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this))
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                _this.showCompactHeader = _this.activatedRoute.firstChild.snapshot.data.showCompactHeader !== false;
                _this.showFooter = _this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
                _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.display();
            }
        });
    };
    AppComponent.prototype.scrollTo = function (topScrollAnchor) {
        topScrollAnchor.scrollIntoView(true);
    };
    var AppComponent_1;
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.APP_BASE_HREF,] }] }
    ]; };
    AppComponent = AppComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: 'ip-root',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _home_dashboard_home_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-dashboard/home-dashboard.module */ 40664);
/* harmony import */ var _home_dashboard_featured_dataset_service_feature_dataset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-dashboard/featured-dataset/service/feature-dataset.service */ 33890);
/* harmony import */ var _interactions_interactions_results_interactions_results_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactions/interactions-results/interactions-results.module */ 51045);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var _interactions_shared_service_interactions_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactions/shared/service/interactions-search.service */ 44111);
/* harmony import */ var _interactions_interaction_details_interaction_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactions/interaction-details/interaction-details.module */ 60789);
/* harmony import */ var _interactions_shared_service_interactions_details_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interactions/shared/service/interactions-details.service */ 12498);
/* harmony import */ var _interactions_shared_service_network_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interactions/shared/service/network-search.service */ 93717);
/* harmony import */ var _interactomes_interactomes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interactomes/interactomes.component */ 18691);
/* harmony import */ var _navigation_documentation_documentation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/documentation/documentation.module */ 62013);
/* harmony import */ var _navigation_download_download_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/download/download.module */ 3340);
/* harmony import */ var _interactomes_interactome_interactome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interactomes/interactome/interactome.component */ 92764);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _interactions_shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interactions/shared/service/network-view.service */ 11728);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _interactions_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interactions/shared/service/filter.service */ 88482);
/* harmony import */ var _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/about/about.component */ 7249);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/redirect/redirect.component */ 22619);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-google-analytics */ 14462);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _navigation_documentation_shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./navigation/documentation/shared/markdown/markdown.module */ 8821);































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_21__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.NgModule)({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
                _interactomes_interactomes_component__WEBPACK_IMPORTED_MODULE_10__.InteractomesComponent,
                _interactomes_interactome_interactome_component__WEBPACK_IMPORTED_MODULE_13__.InteractomeComponent,
                _navigation_about_about_component__WEBPACK_IMPORTED_MODULE_17__.AboutComponent,
                _navigation_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_18__.RedirectComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forRoot([]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_14__.LayoutModule,
                _home_dashboard_home_dashboard_module__WEBPACK_IMPORTED_MODULE_2__.HomeDashboardModule,
                _interactions_interactions_results_interactions_results_module__WEBPACK_IMPORTED_MODULE_4__.InteractionsResultsModule,
                _interactions_interaction_details_interaction_details_module__WEBPACK_IMPORTED_MODULE_7__.InteractionDetailsModule,
                _navigation_documentation_documentation_module__WEBPACK_IMPORTED_MODULE_11__.DocumentationModule,
                _navigation_download_download_module__WEBPACK_IMPORTED_MODULE_12__.DownloadModule,
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule,
                ngx_google_analytics__WEBPACK_IMPORTED_MODULE_29__.NgxGoogleAnalyticsModule.forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_19__.environment.analytics_id),
                ngx_google_analytics__WEBPACK_IMPORTED_MODULE_29__.NgxGoogleAnalyticsRouterModule,
                _navigation_documentation_shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_20__.MarkdownModule
            ],
            providers: [
                _home_dashboard_featured_dataset_service_feature_dataset_service__WEBPACK_IMPORTED_MODULE_3__.FeatureDatasetService,
                _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService,
                _interactions_shared_service_interactions_search_service__WEBPACK_IMPORTED_MODULE_6__.InteractionsSearchService,
                _interactions_shared_service_interactions_details_service__WEBPACK_IMPORTED_MODULE_8__.InteractionsDetailsService,
                _interactions_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_16__.FilterService,
                _interactions_shared_service_network_search_service__WEBPACK_IMPORTED_MODULE_9__.NetworkSearchService,
                _interactions_shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_15__.NetworkViewService,
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_30__.APP_BASE_HREF, useFactory: function (s) { return s.getBaseHrefFromDOM(); }, deps: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.PlatformLocation] },
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_25__.UrlSerializer, useClass: _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyUrlSerializer }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 112:
/*!*************************************************************!*\
  !*** ./src/app/home-dashboard/advanced-search/MIQL.pipe.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIQLPipe": function() { return /* binding */ MIQLPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var MIQLPipe = /** @class */ (function () {
    function MIQLPipe() {
    }
    MIQLPipe_1 = MIQLPipe;
    MIQLPipe.prototype.transform = function (ruleSet) {
        return MIQLPipe_1.transform(ruleSet);
    };
    MIQLPipe.transform = function (ruleSet) {
        var _this = this;
        return ruleSet.rules.map(function (rule) {
            if (_this.isRuleSet(rule)) {
                return "(" + _this.transform(rule) + ")";
            }
            else {
                switch (rule.operator) {
                    default:
                    case '=':
                        return rule.field + ":" + rule.value;
                    case '≠':
                        return "NOT " + rule.field + ":" + rule.value;
                    case 'in':
                        return rule.field + ":(" + rule.value + ")";
                    case 'not in':
                        return "NOT " + rule.field + ":(" + rule.value + ")";
                }
            }
        }).join(" " + ruleSet.condition.toUpperCase() + " ");
    };
    MIQLPipe.isRuleSet = function (rule) {
        return rule.rules !== undefined;
    };
    var MIQLPipe_1;
    MIQLPipe = MIQLPipe_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
            name: 'MIQL',
            pure: false
        })
    ], MIQLPipe);
    return MIQLPipe;
}());



/***/ }),

/***/ 70648:
/*!*****************************************************************************!*\
  !*** ./src/app/home-dashboard/advanced-search/advanced-search.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedSearchComponent": function() { return /* binding */ AdvancedSearchComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_advanced_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./advanced-search.component.html */ 77717);
/* harmony import */ var _advanced_search_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-search.component.css */ 9915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _MIQL_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MIQL.pipe */ 112);
/* harmony import */ var _advanced_search_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advanced-search.config */ 96832);
/* harmony import */ var _colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colorMIQL.pipe */ 34736);








var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent() {
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
        this.queryCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.query);
        this.currentConfig = _advanced_search_config__WEBPACK_IMPORTED_MODULE_3__.ADVANCED_SEARCH_CONFIG;
    }
    AdvancedSearchComponent.prototype.updateCondition = function (ruleSet, e, builder, editor) {
        var target = $(e.target);
        var parent = target.parents('.button-group');
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
        this.builderToEditor(builder, editor);
    };
    AdvancedSearchComponent.prototype.ngAfterViewInit = function () {
    };
    AdvancedSearchComponent.prototype.search = function (miql) {
        window.open('query/' + miql);
    };
    AdvancedSearchComponent.prototype.builderToEditor = function (builder, editor) {
        if (this.doUpdate) {
            this.doUpdate = false;
            var miql = _MIQL_pipe__WEBPACK_IMPORTED_MODULE_2__.MIQLPipe.transform(builder.value);
            editor.innerText = miql;
            this.coloredMIQL = _colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_4__.ColorMIQLPipe.transform(miql);
        }
        this.doUpdate = true;
    };
    AdvancedSearchComponent.prototype.editorToBuilder = function (builder, miql) {
        if (this.doUpdate) {
            this.doUpdate = false;
            builder.value = parseMIQL(miql);
        }
        this.doUpdate = true;
    };
    AdvancedSearchComponent.prototype.onInput = function (editor, builder) {
        var miql = editor.value;
        if (miql.endsWith('\n')) {
            miql += ' ';
        }
        this.coloredMIQL = _colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_4__.ColorMIQLPipe.transform(miql);
        this.editorToBuilder(builder, miql);
    };
    AdvancedSearchComponent.prototype.onBuilderUpdate = function (editor, builder) {
        this.builderToEditor(builder, editor);
    };
    AdvancedSearchComponent.prototype.syncScroll = function (editor, pre) {
        setTimeout(function () {
            pre.scrollTop = editor.scrollTop;
            pre.scrollLeft = editor.scrollLeft;
        });
    };
    AdvancedSearchComponent.ctorParameters = function () { return []; };
    AdvancedSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
            selector: 'ip-advanced-search',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_advanced_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_advanced_search_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
}());

function parseMIQL(miql) {
    miql = "(" + miql + ")";
    var out;
    var stack = [];
    var end, stackLevel = 0, value;
    var levelMap = new Map();
    miql.split('').forEach(function (char, index, array) {
        switch (char) {
            case '(':
                stack.push({ start: index, ruleSet: { condition: 'and', rules: [] } });
                break;
            case ')':
                var _a = stack.pop(), start = _a.start, ruleSet = _a.ruleSet;
                out = ruleSet;
                var rule = ruleSet;
                end = index;
                value = miql.substring(start + 1, end);
                if (array[start - 1] === ':') { // Is a rule with a set operator
                    rule = extractSetRule(miql, start, value);
                }
                else { // Is a rule set
                    stackLevel = stack.length;
                    var range = { start: start, end: end - 1 };
                    setupLevelMap(levelMap, stackLevel, range);
                    var trimmedValue = removeSuperiorRules(value, start, end, stackLevel, levelMap);
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
    var previousSpaceIndex = miql.lastIndexOf(' ', start - 2);
    if (miql.substring(previousSpaceIndex + 1, previousSpaceIndex + 2) === '(') {
        previousSpaceIndex++; // Avoid hitting the start parenthesis if the field is the first in a rule set
    }
    var potentialNot = miql.substring(previousSpaceIndex - 3, previousSpaceIndex);
    var operator = potentialNot === 'NOT' || potentialNot === 'not' ? 'not in' : 'in';
    var field = miql.substring(previousSpaceIndex + 1, start - 1);
    var entity = _advanced_search_config__WEBPACK_IMPORTED_MODULE_3__.AdvancedQueryHelper.toField(field).entity;
    if (value === 'undefined') {
        return { field: field, operator: operator, entity: entity };
    }
    else {
        return { field: field, operator: operator, entity: entity, value: value };
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
    var e_1, _a;
    var deleted = start;
    var superiorRanges = levelMap.get(stackLevel + 1);
    if (superiorRanges !== undefined) {
        try {
            for (var superiorRanges_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__values)(superiorRanges), superiorRanges_1_1 = superiorRanges_1.next(); !superiorRanges_1_1.done; superiorRanges_1_1 = superiorRanges_1.next()) {
                var superiorRange = superiorRanges_1_1.value;
                if (superiorRange.start > start && superiorRange.end < end) {
                    value = value.substring(0, superiorRange.start - deleted) + value.substring(superiorRange.end - deleted, value.length);
                    deleted += superiorRange.end - superiorRange.start;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (superiorRanges_1_1 && !superiorRanges_1_1.done && (_a = superiorRanges_1.return)) _a.call(superiorRanges_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return value;
}
function fillRuleSet(ruleSet, value) {
    ruleSet.condition = /\sOR\s/ig.test(value) ? 'or' : 'and';
    var superiorRuleSets = ruleSet.rules;
    var i = 0;
    ruleSet.rules = [];
    value.split(/\sAND\s|\sOR\s/ig)
        .map(function (ruleStr) { return ruleStr.trim(); })
        .filter(function (ruleStr) { return ruleStr.length > 0; })
        .forEach(function (ruleStr) {
        if (ruleStr === '()') {
            ruleSet.rules.push(superiorRuleSets[i++]);
        }
        else {
            ruleStr = ruleStr.trim();
            var different = ruleStr.startsWith('NOT ') || ruleStr.startsWith('not ');
            var ruleOperator = different ? '≠' : '=';
            var indexOfColon = ruleStr.indexOf(':') || ruleStr.length;
            var ruleFieldKeyword = ruleStr.substring(different ? 4 : 0, indexOfColon);
            var ruleField = _advanced_search_config__WEBPACK_IMPORTED_MODULE_3__.AdvancedQueryHelper.toField(ruleFieldKeyword);
            if (ruleField !== undefined) {
                var ruleValue = ruleStr.substring(indexOfColon + 1, ruleStr.length);
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

/***/ 96832:
/*!**************************************************************************!*\
  !*** ./src/app/home-dashboard/advanced-search/advanced-search.config.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADVANCED_SEARCH_CONFIG": function() { return /* binding */ ADVANCED_SEARCH_CONFIG; },
/* harmony export */   "AdvancedQueryHelper": function() { return /* binding */ AdvancedQueryHelper; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
var e_1, _a;

var fields = {
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
var ADVANCED_SEARCH_CONFIG = {
    getOperators: function () {
        return ['=', '≠', 'in', 'not in'];
    },
    fields: fields,
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
var AdvancedQueryHelper = /** @class */ (function () {
    function AdvancedQueryHelper() {
    }
    AdvancedQueryHelper.toField = function (keyword) {
        return AdvancedQueryHelper.keywordToFieldMap.get(keyword);
    };
    AdvancedQueryHelper.toKey = function (field) {
        return this.fieldToKeyMap.get(field);
    };
    AdvancedQueryHelper.keywordToFieldMap = new Map();
    AdvancedQueryHelper.fieldToKeyMap = new Map();
    AdvancedQueryHelper.keywords = [];
    return AdvancedQueryHelper;
}());

try {
    for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(Object.keys(fields)), _c = _b.next(); !_c.done; _c = _b.next()) {
        var key = _c.value;
        var field = ADVANCED_SEARCH_CONFIG.fields[key];
        AdvancedQueryHelper.keywords.push(key);
        AdvancedQueryHelper.keywordToFieldMap.set(key, field);
        AdvancedQueryHelper.fieldToKeyMap.set(field, key);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_1) throw e_1.error; }
}


/***/ }),

/***/ 34736:
/*!******************************************************************!*\
  !*** ./src/app/home-dashboard/advanced-search/colorMIQL.pipe.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorMIQLPipe": function() { return /* binding */ ColorMIQLPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _advanced_search_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advanced-search.config */ 96832);



var ColorMIQLPipe = /** @class */ (function () {
    function ColorMIQLPipe() {
    }
    ColorMIQLPipe_1 = ColorMIQLPipe;
    ColorMIQLPipe.prototype.transform = function (miql) {
        return ColorMIQLPipe_1.transform(miql);
    };
    ColorMIQLPipe.transform = function (miql) {
        return ColorMIQLPipe_1.colorCodes.reduce(function (html, colorCode) {
            return html.replace(colorCode.regex, "<span class=\"miql " + colorCode.class + "\">$1</span>");
        }, miql
            .replace(/&/g, '&amp')
            .replace(/</g, '&lt')
            .replace(/\n/mg, '<br>'));
    };
    ColorMIQLPipe.isMIQL = function (str) {
        var regex = ColorMIQLPipe_1.colorCodes[1].regex;
        var isMIQL = regex.test(str);
        regex.lastIndex = 0; // Reinitialise search for next call
        return isMIQL;
    };
    var ColorMIQLPipe_1;
    ColorMIQLPipe.colorCodes = [
        { regex: /(".+")/g, class: 'miql-string' },
        { regex: RegExp("(" + _advanced_search_config__WEBPACK_IMPORTED_MODULE_0__.AdvancedQueryHelper.keywords.map(function (keyword) { return keyword.replace('-', '\-') + '(?=:|$)'; }).join('|') + ")", 'gm'), class: 'miql-field' },
        { regex: /(AND(?=\s|<br>)|NOT(?=\s|<br>)|OR(?=\s|<br>)|TO(?=\s|<br>))/img, class: 'miql-operator' },
        { regex: /([()+-,:\[\]*?])/g, class: 'miql-symbol' },
    ];
    ColorMIQLPipe = ColorMIQLPipe_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
            name: 'colorMIQL',
            pure: true
        })
    ], ColorMIQLPipe);
    return ColorMIQLPipe;
}());



/***/ }),

/***/ 78133:
/*!***********************************************************************!*\
  !*** ./src/app/home-dashboard/batch-search/batch-search.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BatchSearchComponent": function() { return /* binding */ BatchSearchComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_batch_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./batch-search.component.html */ 81857);
/* harmony import */ var _batch_search_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batch-search.component.css */ 67751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ 79236);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/service/search.service */ 47395);
/* harmony import */ var _interactions_shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../interactions/shared/model/network-shapes/node-shape */ 45382);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);









var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_ws;
var BatchSearchComponent = /** @class */ (function () {
    function BatchSearchComponent(search) {
        var _this = this;
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
        this.nodeShape = _interactions_shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_4__.NodeShape;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__.FileUploader({
            url: baseURL + "/interactor/uploadFile/",
            disableMultipart: false
        });
        this.uploader.onBeforeUploadItem = function (item) {
            item.withCredentials = false;
            _this.search.title = item.file.name;
        };
        this.hasBaseDropZoneOver = false;
        this.response = '';
        this.uploader.response.subscribe(function (res) { return _this.response = res; });
    }
    BatchSearchComponent.prototype.resolveSearch = function () {
        var _this = this;
        this.search.resolveSearch(this.query)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this))
            .subscribe(function (data) {
            var e_1, _a;
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__values)(Object.keys(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var entry = data[key];
                    if (entry.totalElements !== 0) {
                        entry.term = key;
                        entry.content.forEach(function (interactor) { return _this._interactorAcs.add(interactor.interactorAc); });
                        if (!entry.last) {
                            _this._entriesToComplete.set(key, entry);
                        }
                        _this._foundEntries.push(entry);
                    }
                    else {
                        _this._notFoundEntries.push(key);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.dataReceived = true;
        });
    };
    BatchSearchComponent.prototype.batchSearch = function () {
        this.search.batchSearch(Array.from(this.interactorAcs.values()).join('\n'));
    };
    BatchSearchComponent.prototype.validateSearchBox = function (query) {
        this.search.title = query;
        this.setQuery(query);
    };
    BatchSearchComponent.prototype.setQuery = function (response) {
        this.query = response;
    };
    BatchSearchComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    BatchSearchComponent.prototype.fileSelected = function () {
        console.log('FileSelected');
    };
    BatchSearchComponent.prototype.selectAll = function (term) {
        var _this = this;
        var inputs = term ? $("input[group='" + term + "']:checkbox") : $("input:checkbox");
        inputs
            .prop('checked', true)
            .each(function (i, checkBox) {
            var checkbox = $(checkBox);
            if (checkbox.attr('name') === 'interactor') {
                _this._interactorAcs.add(checkbox.val());
            }
            else {
                var entry = _this._foundEntries.find(function (value) { return value.term === term; });
                _this._entriesToComplete.set(term, entry);
            }
        });
    };
    BatchSearchComponent.prototype.unselectAll = function (term) {
        var _this = this;
        var inputs = term ? $("input[group='" + term + "']:checkbox") : $("input:checkbox");
        inputs
            .prop('checked', false)
            .each(function (i, checkBox) {
            var checkbox = $(checkBox);
            if (checkbox.attr('name') === 'interactor') {
                _this._interactorAcs.delete(checkbox.val());
            }
            else {
                _this._entriesToComplete.delete(term);
            }
        });
    };
    BatchSearchComponent.prototype.onInteractorSelection = function (event) {
        if (event.target.checked) {
            this._interactorAcs.add(event.target.value);
        }
        else {
            this._interactorAcs.delete(event.target.value);
        }
    };
    BatchSearchComponent.prototype.onCompletionSelection = function (event) {
        var term = event.target.value;
        if (event.target.checked) {
            var entry = this._foundEntries.find(function (value) { return value.term === term; });
            this._entriesToComplete.set(term, entry);
        }
        else {
            this._entriesToComplete.delete(term);
        }
    };
    BatchSearchComponent.prototype.collectNextPagesInteractors = function (entriesToComplete, page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (page === 1) {
            entriesToComplete = Array.from(this._entriesToComplete.values());
            if (entriesToComplete.length === 0) {
                return this.batchSearch();
            }
            this._totalInteractorsToQuery = entriesToComplete.reduce(function (total, entry) { return total + entry.totalElements - 50; }, 0);
        }
        if (this.collectionReset) {
            this.collectionReset = false;
            return;
        }
        var query = entriesToComplete.map(function (entry) { return entry.term; }).join(', ');
        this.search.resolveSearch(query, page, 50)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this))
            .subscribe(function (data) {
            var e_2, _a;
            var nextEntriesToComplete = [];
            try {
                for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__values)(Object.keys(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var entry = data[key];
                    entry.term = key;
                    entry.content.forEach(function (interactor) {
                        _this._interactorAcs.add(interactor.interactorAc);
                        _this._interactorsQueried++;
                        _this._acCollectionProgress = (_this._interactorsQueried / _this._totalInteractorsToQuery) * 100;
                    });
                    if (!entry.last) {
                        nextEntriesToComplete.push(entry);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (nextEntriesToComplete.length !== 0) {
                _this.collectNextPagesInteractors(nextEntriesToComplete, page + 1);
            }
            else {
                _this.batchSearch();
            }
        });
    };
    BatchSearchComponent.prototype.resetSteps = function () {
        this.resetSecondStep();
        this.resetThirdStep();
    };
    BatchSearchComponent.prototype.resetSecondStep = function () {
        this._foundEntries = [];
        this._notFoundEntries = [];
        this._dataReceived = false;
        this._entriesToComplete.clear();
        this._totalInteractorsToQuery = 0;
        this._interactorsQueried = 0;
        this._acCollectionProgress = 0;
        this._interactorAcs.clear();
    };
    BatchSearchComponent.prototype.resetThirdStep = function () {
        var _this = this;
        this._totalInteractorsToQuery = 0;
        this._interactorsQueried = 0;
        this._acCollectionProgress = 0;
        this.collectionReset = true;
        this._interactorAcs.clear();
        $('input[name="interactor"]').each(function (i, input) {
            if (input.checked) {
                _this.interactorAcs.add(input.value);
            }
        });
    };
    Object.defineProperty(BatchSearchComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (query) {
            this._query = query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "uploader", {
        get: function () {
            return this._uploader;
        },
        set: function (value) {
            this._uploader = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "hasBaseDropZoneOver", {
        get: function () {
            return this._hasBaseDropZoneOver;
        },
        set: function (value) {
            this._hasBaseDropZoneOver = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "response", {
        get: function () {
            return this._response;
        },
        set: function (value) {
            this._response = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "dataReceived", {
        get: function () {
            return this._dataReceived;
        },
        set: function (value) {
            this._dataReceived = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "foundEntries", {
        get: function () {
            return this._foundEntries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "hasNotFoundEntries", {
        get: function () {
            return this._notFoundEntries.length !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "notFoundEntries", {
        get: function () {
            return this._notFoundEntries.join(' ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "entriesToComplete", {
        get: function () {
            return this._entriesToComplete;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "totalInteractorsToQuery", {
        get: function () {
            return this._totalInteractorsToQuery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "interactorsQueried", {
        get: function () {
            return this._interactorsQueried;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "acCollectionProgress", {
        get: function () {
            return this._acCollectionProgress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BatchSearchComponent.prototype, "interactorAcs", {
        get: function () {
            return this._interactorAcs;
        },
        enumerable: false,
        configurable: true
    });
    BatchSearchComponent.ctorParameters = function () { return [
        { type: _search_service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService }
    ]; };
    BatchSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
            selector: 'ip-batch-search',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_batch_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_batch_search_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], BatchSearchComponent);
    return BatchSearchComponent;
}());



/***/ }),

/***/ 78841:
/*!**********************************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetArchiveComponent": function() { return /* binding */ DatasetArchiveComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dataset_archive_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dataset-archive.component.html */ 86619);
/* harmony import */ var _dataset_archive_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset-archive.component.css */ 43999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_feature_dataset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/feature-dataset.service */ 33890);
/* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utils/array-utils */ 25379);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);







var DatasetArchiveComponent = /** @class */ (function () {
    function DatasetArchiveComponent(featureDatasetService) {
        this.featureDatasetService = featureDatasetService;
    }
    DatasetArchiveComponent.prototype.ngOnInit = function () {
        this.requestDatasetArchive();
    };
    DatasetArchiveComponent.prototype.requestDatasetArchive = function () {
        var _this = this;
        this.featureDatasetService.getFeaturedDataset()
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this))
            .subscribe(function (data) {
            _this.featuredDatasets = data.datasets;
            _this.datasetsByYear = (0,_shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_3__.groupBy)(_this.featuredDatasets, function (element) { return element.year; });
        });
    };
    DatasetArchiveComponent.ctorParameters = function () { return [
        { type: _service_feature_dataset_service__WEBPACK_IMPORTED_MODULE_2__.FeatureDatasetService }
    ]; };
    DatasetArchiveComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
            selector: 'ip-dataset-archive',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dataset_archive_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_dataset_archive_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DatasetArchiveComponent);
    return DatasetArchiveComponent;
}());



/***/ }),

/***/ 21650:
/*!**************************************************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetByYearComponent": function() { return /* binding */ DatasetByYearComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dataset_by_year_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dataset-by-year.component.html */ 31517);
/* harmony import */ var _dataset_by_year_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataset-by-year.component.css */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);





var intactFTP_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_psi25_url;
var intactFTPMiTab_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_psimitab_url;
var DatasetByYearComponent = /** @class */ (function () {
    function DatasetByYearComponent() {
    }
    DatasetByYearComponent.prototype.ngAfterViewInit = function () {
        $("#accordion-" + this.year).foundation();
        $('.accordion-title').on('mouseup', function () {
            var $accordionItem = $(this).parent(), 
            // is the section hidden? if the section is not yet visible, the click is to open it
            opening = ($accordionItem.find('.accordion-content:hidden').length === 1);
            //
            if (opening) {
                // the accordion that has just been clicked
                var $currentAccordion_1 = $accordionItem.parent();
                // close all other accodions
                $('.accordion').each(function () {
                    var $acc = $(this);
                    // ignore the accordion that was just clicked
                    if ($acc[0] !== $currentAccordion_1[0]) {
                        // find any open sections
                        var $openSections = $acc.find('.accordion-item.is-active .accordion-content');
                        $openSections.each(function (i, section) {
                            // close them
                            $acc.foundation('up', $(section));
                        });
                    }
                });
            }
        });
    };
    DatasetByYearComponent.prototype.goPSIMI25FTP = function (pubmedYear, pubmedId) {
        window.open(intactFTP_URL + ("/pmid/" + pubmedYear + "/" + pubmedId + ".zip"));
    };
    DatasetByYearComponent.prototype.goPSIMITABFTP = function (pubmedYear, pubmedId) {
        window.open(intactFTPMiTab_URL + ("/" + pubmedYear + "/" + pubmedId + ".txt"));
    };
    DatasetByYearComponent.prototype.hasPubMedId = function (pubMed) {
        return !pubMed.id.toString().includes('unassigned');
    };
    DatasetByYearComponent.ctorParameters = function () { return []; };
    DatasetByYearComponent.propDecorators = {
        year: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        datasets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
    };
    DatasetByYearComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-dataset-by-year',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dataset_by_year_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_dataset_by_year_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DatasetByYearComponent);
    return DatasetByYearComponent;
}());



/***/ }),

/***/ 19027:
/*!*******************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/featured-dataset.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedDatasetComponent": function() { return /* binding */ FeaturedDatasetComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_featured_dataset_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./featured-dataset.component.html */ 14080);
/* harmony import */ var _featured_dataset_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-dataset.component.css */ 5741);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_feature_dataset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/feature-dataset.service */ 33890);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _shared_utils_foundation_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utils/foundation-utils */ 89935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/service/search.service */ 47395);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);











var intactFTP_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.intact_psi25_url;
var intactFTPMiTab_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.intact_psimitab_url;
var FeaturedDatasetComponent = /** @class */ (function () {
    function FeaturedDatasetComponent(featureDatasetService, router, search) {
        this.featureDatasetService = featureDatasetService;
        this.router = router;
        this.search = search;
    }
    FeaturedDatasetComponent.prototype.ngOnInit = function () {
        this.requestDOTM();
    };
    FeaturedDatasetComponent.prototype.requestDOTM = function () {
        var _this = this;
        this.featureDatasetService.getFeaturedDataset()
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this))
            .subscribe(function (response) {
            _this.dataset = response.datasets[0];
            setTimeout(function () {
                $('#dataset-group').foundation();
                _shared_utils_foundation_utils__WEBPACK_IMPORTED_MODULE_5__.FoundationUtils.adjustWidth();
            });
        });
    };
    FeaturedDatasetComponent.prototype.onIntActSearch = function () {
        this.search.search(this.firstPubmed.id, "publication: " + this.firstPubmed.author + " (" + this.firstPubmed.id + ")");
    };
    FeaturedDatasetComponent.prototype.ngAfterViewInit = function () {
    };
    Object.defineProperty(FeaturedDatasetComponent.prototype, "firstPubmed", {
        get: function () {
            return this.dataset.pubmeds[0];
        },
        enumerable: false,
        configurable: true
    });
    FeaturedDatasetComponent.prototype.pubMedUrl = function () {
        return "https://europepmc.org/article/MED/" + this.firstPubmed.id;
    };
    FeaturedDatasetComponent.prototype.miXmlUrl = function () {
        return intactFTP_URL + "/pmid/" + this.firstPubmed.year + "/" + this.firstPubmed.id + ".zip";
    };
    FeaturedDatasetComponent.prototype.miTabUrl = function () {
        return intactFTPMiTab_URL + "/" + this.firstPubmed.year + "/" + this.firstPubmed.id + ".txt";
    };
    FeaturedDatasetComponent.prototype.archiveUrl = function () {
        return '/featured-dataset/archive';
    };
    FeaturedDatasetComponent.ctorParameters = function () { return [
        { type: _service_feature_dataset_service__WEBPACK_IMPORTED_MODULE_3__.FeatureDatasetService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
        { type: _search_service_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService }
    ]; };
    FeaturedDatasetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
            selector: 'ip-featured-dataset',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_featured_dataset_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_featured_dataset_component_css__WEBPACK_IMPORTED_MODULE_1__, _app_component_css__WEBPACK_IMPORTED_MODULE_2__]
        })
    ], FeaturedDatasetComponent);
    return FeaturedDatasetComponent;
}());



/***/ }),

/***/ 33890:
/*!************************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/service/feature-dataset.service.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureDatasetService": function() { return /* binding */ FeatureDatasetService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-analytics */ 14462);






var FeatureDatasetService = /** @class */ (function () {
    function FeatureDatasetService(http, reporter) {
        this.http = http;
        this.reporter = reporter;
        this.API_URL = 'https://raw.githubusercontent.com/intact-portal/intact-portal-feature-datasets/main/feature-datasets.json';
    }
    FeatureDatasetService.prototype.getFeaturedDataset = function () {
        return this.http.get(this.API_URL, { responseType: 'json' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
    };
    FeatureDatasetService.prototype.handleError = function (err) {
        this.reporter.exception();
        if (err.error instanceof Error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    FeatureDatasetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
        { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__.GoogleAnalyticsService }
    ]; };
    FeatureDatasetService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
    ], FeatureDatasetService);
    return FeatureDatasetService;
}());



/***/ }),

/***/ 22903:
/*!*****************************************************************!*\
  !*** ./src/app/home-dashboard/home-dashboard-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDashboardRoutingModule": function() { return /* binding */ HomeDashboardRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _home_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-dashboard.component */ 53286);
/* harmony import */ var _featured_dataset_dataset_archive_dataset_archive_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-dataset/dataset-archive/dataset-archive.component */ 78841);





var routes = [
    {
        path: 'home',
        component: _home_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.HomeDashboardComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'featured-dataset/archive',
        component: _featured_dataset_dataset_archive_dataset_archive_component__WEBPACK_IMPORTED_MODULE_1__.DatasetArchiveComponent,
        data: { showCompactHeader: false, showFooter: true }
    }
];
var HomeDashboardRoutingModule = /** @class */ (function () {
    function HomeDashboardRoutingModule() {
    }
    HomeDashboardRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
        })
    ], HomeDashboardRoutingModule);
    return HomeDashboardRoutingModule;
}());



/***/ }),

/***/ 53286:
/*!************************************************************!*\
  !*** ./src/app/home-dashboard/home-dashboard.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDashboardComponent": function() { return /* binding */ HomeDashboardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-dashboard.component.html */ 4173);
/* harmony import */ var _home_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-dashboard.component.css */ 76613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);





var HomeDashboardComponent = /** @class */ (function () {
    function HomeDashboardComponent(titleService) {
        this.titleService = titleService;
    }
    HomeDashboardComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct');
    };
    HomeDashboardComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title }
    ]; };
    HomeDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-home-dashboard',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_home_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], HomeDashboardComponent);
    return HomeDashboardComponent;
}());



/***/ }),

/***/ 40664:
/*!*********************************************************!*\
  !*** ./src/app/home-dashboard/home-dashboard.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDashboardModule": function() { return /* binding */ HomeDashboardModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _home_description_home_description_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-description/home-description.component */ 60844);
/* harmony import */ var _tile_menu_tile_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-menu/tile-menu.component */ 32957);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ 94927);
/* harmony import */ var _home_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-dashboard.component */ 53286);
/* harmony import */ var _home_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-dashboard-routing.module */ 22903);
/* harmony import */ var _newsletter_subscription_newsletter_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsletter-subscription/newsletter-subscription.component */ 39927);
/* harmony import */ var _twitter_display_twitter_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twitter-display/twitter-display.component */ 48133);
/* harmony import */ var _featured_dataset_featured_dataset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./featured-dataset/featured-dataset.component */ 19027);
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ 85438);
/* harmony import */ var _featured_dataset_dataset_archive_dataset_archive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featured-dataset/dataset-archive/dataset-archive.component */ 78841);
/* harmony import */ var _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advanced-search/advanced-search.component */ 70648);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-file-upload */ 79236);
/* harmony import */ var angular2_query_builder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-query-builder */ 35624);
/* harmony import */ var _batch_search_batch_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./batch-search/batch-search.component */ 78133);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-archwizard */ 65861);
/* harmony import */ var _shared_keyvaluemap_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/keyvaluemap.pipe */ 62785);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _featured_dataset_dataset_archive_dataset_by_year_dataset_by_year_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component */ 21650);
/* harmony import */ var _layout_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layout/loading-indicators/progress-spinner/progress-spinner.module */ 65236);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/components/components.module */ 15626);
/* harmony import */ var _advanced_search_MIQL_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./advanced-search/MIQL.pipe */ 112);
/* harmony import */ var _advanced_search_colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./advanced-search/colorMIQL.pipe */ 34736);
/* harmony import */ var _navigation_documentation_shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../navigation/documentation/shared/markdown/markdown.module */ 8821);































var HomeDashboardModule = /** @class */ (function () {
    function HomeDashboardModule() {
    }
    HomeDashboardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
                angular2_query_builder__WEBPACK_IMPORTED_MODULE_11__.QueryBuilderModule,
                _home_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__.HomeDashboardRoutingModule,
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_24__.FileUploadModule,
                angular_archwizard__WEBPACK_IMPORTED_MODULE_25__.ArchwizardModule,
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule,
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__.MatExpansionModule,
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltipModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule,
                _angular_material_card__WEBPACK_IMPORTED_MODULE_30__.MatCardModule,
                _layout_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_15__.ProgressSpinnerModule,
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_16__.ComponentsModule,
                _navigation_documentation_shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_19__.MarkdownModule
            ],
            exports: [
                _shared_keyvaluemap_pipe__WEBPACK_IMPORTED_MODULE_13__.KeyvaluemapPipe
            ],
            declarations: [
                _home_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.HomeDashboardComponent,
                _home_description_home_description_component__WEBPACK_IMPORTED_MODULE_0__.HomeDescriptionComponent,
                _search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent,
                _tile_menu_tile_menu_component__WEBPACK_IMPORTED_MODULE_1__.TileMenuComponent,
                _newsletter_subscription_newsletter_subscription_component__WEBPACK_IMPORTED_MODULE_5__.NewsletterSubscriptionComponent,
                _twitter_display_twitter_display_component__WEBPACK_IMPORTED_MODULE_6__.TwitterDisplayComponent,
                _featured_dataset_featured_dataset_component__WEBPACK_IMPORTED_MODULE_7__.FeaturedDatasetComponent,
                _news_news_component__WEBPACK_IMPORTED_MODULE_8__.NewsComponent,
                _featured_dataset_dataset_archive_dataset_archive_component__WEBPACK_IMPORTED_MODULE_9__.DatasetArchiveComponent,
                _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_10__.AdvancedSearchComponent,
                _batch_search_batch_search_component__WEBPACK_IMPORTED_MODULE_12__.BatchSearchComponent,
                _shared_keyvaluemap_pipe__WEBPACK_IMPORTED_MODULE_13__.KeyvaluemapPipe,
                _featured_dataset_dataset_archive_dataset_by_year_dataset_by_year_component__WEBPACK_IMPORTED_MODULE_14__.DatasetByYearComponent,
                _advanced_search_MIQL_pipe__WEBPACK_IMPORTED_MODULE_17__.MIQLPipe,
                _advanced_search_colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_18__.ColorMIQLPipe
            ]
        })
    ], HomeDashboardModule);
    return HomeDashboardModule;
}());



/***/ }),

/***/ 60844:
/*!*******************************************************************************!*\
  !*** ./src/app/home-dashboard/home-description/home-description.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDescriptionComponent": function() { return /* binding */ HomeDescriptionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_description_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-description.component.html */ 52615);
/* harmony import */ var _home_description_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-description.component.css */ 38215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _search_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/service/search.service */ 47395);






var HomeDescriptionComponent = /** @class */ (function () {
    function HomeDescriptionComponent(search) {
        this.search = search;
        this.formerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.former_intact_url;
    }
    HomeDescriptionComponent.prototype.ngOnInit = function () {
    };
    HomeDescriptionComponent.prototype.onSearch = function () {
        this.search.search('"Coronavirus -"', 'coronavirus dataset');
    };
    HomeDescriptionComponent.prototype.miXml25Url = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_psi25_url + "/datasets/Coronavirus.zip";
    };
    HomeDescriptionComponent.prototype.miXml30Url = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_psi30_url + "/datasets/Coronavirus.zip";
    };
    HomeDescriptionComponent.ctorParameters = function () { return [
        { type: _search_service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService }
    ]; };
    HomeDescriptionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-home-description',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_description_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_home_description_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], HomeDescriptionComponent);
    return HomeDescriptionComponent;
}());



/***/ }),

/***/ 85438:
/*!*******************************************************!*\
  !*** ./src/app/home-dashboard/news/news.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": function() { return /* binding */ NewsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_news_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./news.component.html */ 88334);
/* harmony import */ var _news_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.component.css */ 21059);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.component.css */ 6849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);






var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.version = '1.0.2';
        this.environmentName = 'dev';
        this.releaseDate = 'September 2021';
        this.statistics = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.intact_portal_documentation_url + 'statistics.md';
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent.ctorParameters = function () { return []; };
    NewsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-news',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_news_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_news_component_css__WEBPACK_IMPORTED_MODULE_1__, _app_component_css__WEBPACK_IMPORTED_MODULE_2__]
        })
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ 39927:
/*!*********************************************************************************************!*\
  !*** ./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsletterSubscriptionComponent": function() { return /* binding */ NewsletterSubscriptionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsletter_subscription_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./newsletter-subscription.component.html */ 90008);
/* harmony import */ var _newsletter_subscription_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newsletter-subscription.component.css */ 58565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var NewsletterSubscriptionComponent = /** @class */ (function () {
    function NewsletterSubscriptionComponent() {
    }
    NewsletterSubscriptionComponent.prototype.ngOnInit = function () {
    };
    NewsletterSubscriptionComponent.ctorParameters = function () { return []; };
    NewsletterSubscriptionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-newsletter-subscription',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_newsletter_subscription_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_newsletter_subscription_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], NewsletterSubscriptionComponent);
    return NewsletterSubscriptionComponent;
}());



/***/ }),

/***/ 94927:
/*!***********************************************************!*\
  !*** ./src/app/home-dashboard/search/search.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": function() { return /* binding */ SearchComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./search.component.html */ 7510);
/* harmony import */ var _search_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.css */ 57825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/search.service */ 47395);





var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        $('ip-search').foundation();
        this.searchService.searchSuggestions($('#searchBox .typeahead'));
    };
    SearchComponent.prototype.search = function (query, typeOfButton) {
        if (query) {
            if (typeOfButton === 'enter' || typeOfButton === 'button' || typeOfButton === 'example') {
                this.searchService.title = query;
            }
            this.searchService.search(query);
        }
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService }
    ]; };
    SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-search',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_search_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ 47395:
/*!*****************************************************************!*\
  !*** ./src/app/home-dashboard/search/service/search.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _advanced_search_colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../advanced-search/colorMIQL.pipe */ 34736);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-analytics */ 14462);









var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.intact_portal_ws;
var SearchService = /** @class */ (function () {
    function SearchService(router, http, reporter) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.reporter = reporter;
        this._isBatchSearch = false;
        this.rand = function () { return Math.random().toString(36).substr(2); };
        this.genToken = function (length) { return (_this.rand() + _this.rand() + _this.rand() + _this.rand()).substr(0, length); };
    }
    SearchService_1 = SearchService;
    SearchService.prototype.isAdvancedQuery = function (query) {
        var isMIQL = _advanced_search_colorMIQL_pipe__WEBPACK_IMPORTED_MODULE_1__.ColorMIQLPipe.isMIQL(query);
        if (isMIQL) {
            window.open('query/' + query);
        }
        return isMIQL;
    };
    SearchService.prototype.search = function (query, title) {
        this._query = query;
        this._isBatchSearch = false;
        if (title) {
            this._title = title;
        }
        if (!this.isAdvancedQuery(query)) {
            this.router.navigate(['search'], { queryParams: { query: query } });
        }
    };
    SearchService.prototype.batchSearch = function (query) {
        this._query = query;
        this._isBatchSearch = true;
        this.manageTokens();
        this.router.navigate(['search'], { queryParams: { token: this._token, batchSearch: true } });
    };
    SearchService.prototype.manageTokens = function () {
        this._token = this.genToken(5);
        var query = this._query;
        var title = this._title;
        localStorage.setItem(SearchService_1.localTokenId(this._token), JSON.stringify({ query: query, title: title }));
        var tokens = JSON.parse(localStorage.getItem('intact-tokens') || '[]');
        tokens.push(this._token);
        if (tokens.length > 10) {
            localStorage.removeItem(SearchService_1.localTokenId(tokens.shift()));
        }
        localStorage.setItem('intact-tokens', JSON.stringify(tokens));
    };
    SearchService.prototype.speciesSearch = function (interactome) {
        this._query = interactome.taxid.toString();
        this._title = "" + interactome.name;
        this._isBatchSearch = false;
        this.router.navigate(['search'], { queryParams: { query: this._query, interactorSpeciesFilter: interactome.name } });
    };
    SearchService.prototype.resolveSearch = function (query, page, pageSize) {
        if (page === void 0) { page = 0; }
        if (pageSize === void 0) { pageSize = 50; }
        this._query = query.trim();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .append('query', query)
            .append('page', page.toString())
            .append('pageSize', pageSize.toString());
        return this.http.post(baseURL + "/interactor/list/resolve", params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    };
    SearchService.prototype.handleError = function (err) {
        this.reporter.exception(err);
        if (err.error instanceof Error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    Object.defineProperty(SearchService.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "spacedQuery", {
        get: function () {
            return this._query.replace(/\n/g, ' ');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "isBatchSearch", {
        get: function () {
            return this._isBatchSearch;
        },
        enumerable: false,
        configurable: true
    });
    SearchService.prototype.fromParams = function (params) {
        if (params.has('query')) {
            this._query = params.get('query');
        }
        else if (params.has('token')) {
            this._token = params.get('token');
            var mem = JSON.parse(localStorage.getItem(SearchService_1.localTokenId(this._token)));
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
    };
    SearchService.prototype.toURLParams = function (params) {
        if (params === void 0) { params = {}; }
        if (this.isBatchSearch) {
            params.token = this._token;
            params.batchSearch = this.isBatchSearch;
        }
        else if (this.query) {
            params.query = this.query.trim();
        }
        return params;
    };
    SearchService.prototype.toParams = function (params) {
        if (params === void 0) { params = {}; }
        if (this.query) {
            params.query = this.query.trim();
        }
        if (this.isBatchSearch) {
            params.batchSearch = this.isBatchSearch;
        }
        return params;
    };
    SearchService.prototype.searchSuggestions = function (searchBox) {
        var _this = this;
        var updatingPages = false;
        var ignoreChange = false;
        var currentPage = 0;
        var data;
        var bloodhound;
        var suggestionQuery;
        bloodhound = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: {
                url: baseURL + "/interactor/findInteractor/%QUERY?page=0&pageSize=10",
                prepare: function (query, settings) {
                    if (!ignoreChange) {
                        suggestionQuery = query;
                        settings.url = settings.url.replace('%QUERY', query);
                        settings.url = settings.url.replace('page=0', "page=" + currentPage);
                    }
                    return settings;
                },
                transform: function (response) {
                    data = response;
                    return data.content;
                }
            }
        });
        bloodhound.initialize();
        var limit = 20;
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
                header: function () { return "<h4 class=\"category-name\">Interactors (" + data.totalElements + " found)</h4>"; },
                footer: function () {
                    if (data.totalPages > 1) {
                        return "<div class=\"alignCell\">\n                        <button class=\"button\" id=\"prev\" " + (data.first ? 'disabled' : '') + "><i class=\"icon icon-common icon-previous-page\"></i></button>\n                        <button class=\"button\" id=\"next\" " + (data.last ? 'disabled' : '') + "><i class=\"icon icon-common icon-next-page\"></i></button>\n                      </div>";
                    }
                },
                notFound: '<div class="noResultsSuggestions"> No results found for Interactors</div>',
                suggestion: function (item) {
                    return "<div class=\"flex-row\" role=\"rowgroup\">\n               <div class=\"flex-cell first\" role=\"cell\">" + item.interactorAc + "</div>\n               <div class=\"flex-cell\" role=\"cell\">\n                " + (item.interactorName === null ? item.interactorPreferredIdentifier : item.interactorName + " (" + item.interactorPreferredIdentifier + ")") + "\n               </div>\n               <div class=\"flex-cell\" role=\"cell\"><i>\"" + item.interactorDescription + "\"</i> </div>\n               <div class=\"flex-cell\" role=\"cell\">" + item.interactorSpecies + "</div>\n               <div class=\"flex-cell\" role=\"cell\"><span class=\"labelWrapper\">" + item.interactorType + "</span></div>\n               <div class=\"flex-cell\" role=\"cell\"><span class=\"interactionsWrapper nowrap\">" + item.interactionCount + " interactions</span></div>\n             </div>";
                },
            }
        }).on('typeahead:selected', function (ev, item) {
            // Noe: So far I can't find in the documentation a way to know the dataset of the item selected. This code should improve with that information
            var id;
            if (item.interactorAc === undefined) {
                // We assume is an interaction
                id = item.ac;
            }
            else {
                id = item.interactorAc;
            }
            _this.title = suggestionQuery + " \u00B7 " + (item.interactorName === null ? item.interactorPreferredIdentifier : item.interactorName + " (" + item.interactorPreferredIdentifier + ")");
            _this.search(id);
        });
        var updateAutosuggestion = function () {
            updatingPages = true;
            var val = searchBox.typeahead('val');
            ignoreChange = true;
            searchBox.typeahead('val', val + ' ');
            ignoreChange = false;
            searchBox.typeahead('val', val);
            updatingPages = false;
        };
        $(document).on('click', '#prev', function () {
            currentPage--;
            updateAutosuggestion();
        });
        $(document).on('click', '#next', function () {
            currentPage++;
            updateAutosuggestion();
        });
        searchBox.on('input', function () {
            currentPage = 0;
        });
    };
    var SearchService_1;
    SearchService.localTokenId = function (token) { return "intact-batch-search-" + token; };
    SearchService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
        { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__.GoogleAnalyticsService }
    ]; };
    SearchService = SearchService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ 62785:
/*!***********************************************************!*\
  !*** ./src/app/home-dashboard/shared/keyvaluemap.pipe.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyvaluemapPipe": function() { return /* binding */ KeyvaluemapPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var KeyvaluemapPipe = /** @class */ (function () {
    function KeyvaluemapPipe() {
    }
    KeyvaluemapPipe.prototype.transform = function (value) {
        var e_1, _a;
        var keys = [];
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(Object.keys(value)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                keys.push({ key: key, value: value[key] });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return keys;
    };
    KeyvaluemapPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
            name: 'keyvaluemap'
        })
    ], KeyvaluemapPipe);
    return KeyvaluemapPipe;
}());



/***/ }),

/***/ 32957:
/*!*****************************************************************!*\
  !*** ./src/app/home-dashboard/tile-menu/tile-menu.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileMenuComponent": function() { return /* binding */ TileMenuComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tile_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tile-menu.component.html */ 49142);
/* harmony import */ var _tile_menu_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-menu.component.css */ 92837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var TileMenuComponent = /** @class */ (function () {
    function TileMenuComponent() {
    }
    TileMenuComponent.prototype.ngOnInit = function () {
        $('ip-tile-menu').foundation();
    };
    TileMenuComponent.ctorParameters = function () { return []; };
    TileMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-tile-menu',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tile_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_tile_menu_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], TileMenuComponent);
    return TileMenuComponent;
}());



/***/ }),

/***/ 48133:
/*!*****************************************************************************!*\
  !*** ./src/app/home-dashboard/twitter-display/twitter-display.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TwitterDisplayComponent": function() { return /* binding */ TwitterDisplayComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_twitter_display_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./twitter-display.component.html */ 51211);
/* harmony import */ var _twitter_display_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./twitter-display.component.css */ 44);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var twitterURL = 'https://platform.twitter.com/widgets.js';
var TwitterDisplayComponent = /** @class */ (function () {
    function TwitterDisplayComponent() {
    }
    TwitterDisplayComponent.prototype.ngOnInit = function () {
        this.initTwitterWidget();
    };
    TwitterDisplayComponent.prototype.initTwitterWidget = function () {
        /* tslint:disable */
        window.twttr = (function (d, s, id, call) {
            var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
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
    };
    TwitterDisplayComponent.prototype.reloadWidget = function () {
        try {
            window.twttr.widgets.load(document.getElementById('twitter'));
        }
        catch (ignore) {
            // ignore
        }
    };
    TwitterDisplayComponent.ctorParameters = function () { return []; };
    TwitterDisplayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-twitter-display',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_twitter_display_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_twitter_display_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], TwitterDisplayComponent);
    return TwitterDisplayComponent;
}());



/***/ }),

/***/ 6875:
/*!*********************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-dashboard.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsDashboardComponent": function() { return /* binding */ DetailsDashboardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./details-dashboard.component.html */ 9879);
/* harmony import */ var _details_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-dashboard.component.css */ 50093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/loading-indicators/progress-bar/progress-bar.component */ 31599);
/* harmony import */ var _details_viewer_details_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-viewer/details-viewer.component */ 63220);
/* harmony import */ var _shared_utils_foundation_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utils/foundation-utils */ 89935);
/* harmony import */ var _shared_model_download_format_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model/download/format.model */ 57896);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);












var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.intact_portal_ws;
var DetailsDashboardComponent = /** @class */ (function () {
    function DetailsDashboardComponent(titleService, route) {
        this.titleService = titleService;
        this.route = route;
        this.viewer = _details_viewer_details_viewer_component__WEBPACK_IMPORTED_MODULE_3__.viewer;
        this.formatTypes = _shared_model_download_format_model__WEBPACK_IMPORTED_MODULE_5__.Format.instances;
    }
    DetailsDashboardComponent.prototype.downloadURL = function (format) {
        return baseURL + "/graph/export/interaction/" + this.interactionAc + "?format=" + format.name;
    };
    DetailsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this))
            .subscribe(function (params) {
            _this.interactionAc = params['id'];
            _this.titleService.setTitle('Interaction - ' + _this.interactionAc);
        });
    };
    DetailsDashboardComponent.prototype.ngAfterViewInit = function () {
        $('#detail-export').foundation();
        _shared_utils_foundation_utils__WEBPACK_IMPORTED_MODULE_4__.FoundationUtils.adjustWidth();
    };
    DetailsDashboardComponent.prototype.searchError = function (error) {
        this._error = error;
        _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__.ProgressBarComponent.hideWithoutDelay();
    };
    Object.defineProperty(DetailsDashboardComponent.prototype, "interactionAc", {
        get: function () {
            return this._interactionAc;
        },
        set: function (value) {
            this._interactionAc = value;
        },
        enumerable: false,
        configurable: true
    });
    DetailsDashboardComponent.prototype.onFeatureSelectedChanged = function (featureAc) {
        this.featureSelected = featureAc;
    };
    Object.defineProperty(DetailsDashboardComponent.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: false,
        configurable: true
    });
    DetailsDashboardComponent.prototype.exportSVG = function () {
        var svgXML = _details_viewer_details_viewer_component__WEBPACK_IMPORTED_MODULE_3__.viewer.getSVG();
        this.download(svgXML, 'application/svg', this.interactionAc + ".svg");
    };
    DetailsDashboardComponent.prototype.download = function (content, contentType, fileName) {
        var oldToNewTypes = {
            'application/svg': 'image/svg+xml;charset=utf-8',
            'plain/text': 'plain/text;charset=utf-8',
        };
        var newContentType = oldToNewTypes[contentType] || contentType;
        function dataURItoBlob(binary) {
            var array = [];
            var te;
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
                for (var i = 0; i < binary.length; i++) {
                    var charcode = binary.charCodeAt(i);
                    if (charcode < 0x80) {
                        array.push(charcode);
                    }
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
        var blob = dataURItoBlob(content);
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, fileName);
        }
        else {
            var a = document.createElement('a');
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
    };
    DetailsDashboardComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.Title },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
    ]; };
    DetailsDashboardComponent.propDecorators = {
        featureSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
    };
    DetailsDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
            selector: 'ip-details-dashboard',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_details_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DetailsDashboardComponent);
    return DetailsDashboardComponent;
}());



/***/ }),

/***/ 79992:
/*!*****************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details-tabs.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsTabsComponent": function() { return /* binding */ DetailsTabsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./details-tabs.component.html */ 14011);
/* harmony import */ var _details_tabs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-tabs.component.css */ 36221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_interactions_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/interactions-details.service */ 12498);
/* harmony import */ var _details_participant_table_participant_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/participant-table/participant-table.component */ 90323);
/* harmony import */ var _details_features_table_features_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/features-table/features-table.component */ 61724);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);









var DetailsTabsComponent = /** @class */ (function () {
    function DetailsTabsComponent(interactionsDetailsService) {
        this.interactionsDetailsService = interactionsDetailsService;
        this.featureChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.moleculeTypesCollected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this._isTabParticipantActive = false;
        this._isTabFeatureActive = false;
    }
    DetailsTabsComponent.prototype.ngOnInit = function () {
        $('ip-details-tabs').foundation();
        this.requestInteractionDetails();
    };
    DetailsTabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#details-tabs').on('change.zf.tabs', function () {
            if ($('#participants').hasClass('is-active') === true) {
                _this.isTabParticipantActive = true;
                _this.isTabFeatureActive = false;
            }
            else if ($('#features').hasClass('is-active') === true) {
                _this.isTabParticipantActive = false;
                _this.isTabFeatureActive = true;
            }
            else {
                _this.isTabParticipantActive = false;
                _this.isTabFeatureActive = false;
            }
        });
    };
    DetailsTabsComponent.prototype.requestInteractionDetails = function () {
        var _this = this;
        this.interactionsDetailsService.getInteractionDetails(this.interactionAc)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this))
            .subscribe(function (interactionDetails) {
            if (!(interactionDetails instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse))
                _this.interactionDetails = interactionDetails;
        });
    };
    Object.defineProperty(DetailsTabsComponent.prototype, "interactionDetails", {
        get: function () {
            return this._interactionDetails;
        },
        set: function (value) {
            this._interactionDetails = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DetailsTabsComponent.prototype, "currentPageIndex", {
        get: function () {
            return this._currentPageIndex;
        },
        set: function (value) {
            this._currentPageIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DetailsTabsComponent.prototype, "isTabParticipantActive", {
        get: function () {
            return this._isTabParticipantActive;
        },
        set: function (value) {
            this._isTabParticipantActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DetailsTabsComponent.prototype, "isTabFeatureActive", {
        get: function () {
            return this._isTabFeatureActive;
        },
        set: function (value) {
            this._isTabFeatureActive = value;
        },
        enumerable: false,
        configurable: true
    });
    /** EVENT EMITTERS **/
    DetailsTabsComponent.prototype.onFeatureSelectedChanged = function (featureAc) {
        this.featureChanged.emit(featureAc);
    };
    DetailsTabsComponent.ctorParameters = function () { return [
        { type: _shared_service_interactions_details_service__WEBPACK_IMPORTED_MODULE_2__.InteractionsDetailsService }
    ]; };
    DetailsTabsComponent.propDecorators = {
        interactionAc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
        featureChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
        moleculeTypesCollected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
        participantTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_details_participant_table_participant_table_component__WEBPACK_IMPORTED_MODULE_3__.ParticipantTableComponent, { static: true },] }],
        featureTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_details_features_table_features_table_component__WEBPACK_IMPORTED_MODULE_4__.FeaturesTableComponent, { static: true },] }]
    };
    DetailsTabsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-details-tabs',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_tabs_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_details_tabs_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DetailsTabsComponent);
    return DetailsTabsComponent;
}());



/***/ }),

/***/ 45540:
/*!************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfidencesComponent": function() { return /* binding */ ConfidencesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confidences_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./confidences.component.html */ 38829);
/* harmony import */ var _confidences_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confidences.component.css */ 90843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var ConfidencesComponent = /** @class */ (function () {
    function ConfidencesComponent() {
    }
    ConfidencesComponent.prototype.ngOnInit = function () {
    };
    ConfidencesComponent.ctorParameters = function () { return []; };
    ConfidencesComponent.propDecorators = {
        confidences: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    ConfidencesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-confidences',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_confidences_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_confidences_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ConfidencesComponent);
    return ConfidencesComponent;
}());



/***/ }),

/***/ 36028:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.ts ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurationAnnotationsComponent": function() { return /* binding */ CurationAnnotationsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_curation_annotations_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./curation-annotations.component.html */ 37664);
/* harmony import */ var _curation_annotations_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curation-annotations.component.css */ 41319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var CurationAnnotationsComponent = /** @class */ (function () {
    function CurationAnnotationsComponent() {
    }
    CurationAnnotationsComponent.prototype.ngOnInit = function () {
    };
    CurationAnnotationsComponent.ctorParameters = function () { return []; };
    CurationAnnotationsComponent.propDecorators = {
        annotations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    CurationAnnotationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-curation-annotations',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_curation_annotations_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_curation_annotations_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], CurationAnnotationsComponent);
    return CurationAnnotationsComponent;
}());



/***/ }),

/***/ 85977:
/*!****************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvTermComponent": function() { return /* binding */ CvTermComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cv_term_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cv-term.component.html */ 78880);
/* harmony import */ var _cv_term_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cv-term.component.css */ 71817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var CvTermComponent = /** @class */ (function () {
    function CvTermComponent() {
    }
    CvTermComponent.prototype.ngOnInit = function () {
    };
    CvTermComponent.ctorParameters = function () { return []; };
    CvTermComponent.propDecorators = {
        cvTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    CvTermComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-cv-term',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cv_term_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_cv_term_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], CvTermComponent);
    return CvTermComponent;
}());



/***/ }),

/***/ 32880:
/*!*************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-to-url.pipe.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvToUrlPipe": function() { return /* binding */ CvToUrlPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var CvToUrlPipe = /** @class */ (function () {
    function CvToUrlPipe() {
    }
    CvToUrlPipe.prototype.transform = function (value, type) {
        if (value.identifier === null)
            return '';
        var id = value.identifier.replace(':', '_');
        switch (type) {
            default:
            case "access":
                return "https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F" + id + "&viewMode=All&siblings=false";
            case "details":
                return "https://www.ebi.ac.uk/ols/api/ontologies/mi/terms?iri=http://purl.obolibrary.org/obo/" + id;
        }
    };
    CvToUrlPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
            name: 'cvToUrl'
        })
    ], CvToUrlPipe);
    return CvToUrlPipe;
}());



/***/ }),

/***/ 11674:
/*!**********************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentComponent": function() { return /* binding */ ExperimentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_experiment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./experiment.component.html */ 7288);
/* harmony import */ var _experiment_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment.component.css */ 40962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var ExperimentComponent = /** @class */ (function () {
    function ExperimentComponent() {
        this.hover = false;
    }
    ExperimentComponent.prototype.ngOnInit = function () {
    };
    ExperimentComponent.prototype.toggleExperimentButton = function () {
        if ($('#experimentPanel').is(':visible')) {
            $('#experimentPanel').hide();
            $('i#toggleExperiment').removeClass('icon-minus').addClass('icon-plus');
        }
        else {
            $('#experimentPanel').show();
            $('i#toggleExperiment').removeClass('icon-plus').addClass('icon-minus');
        }
    };
    ExperimentComponent.ctorParameters = function () { return []; };
    ExperimentComponent.propDecorators = {
        experiment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    ExperimentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-experiment',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_experiment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_experiment_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ExperimentComponent);
    return ExperimentComponent;
}());



/***/ }),

/***/ 48795:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.ts ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentalConditionsComponent": function() { return /* binding */ ExperimentalConditionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_experimental_conditions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./experimental-conditions.component.html */ 47748);
/* harmony import */ var _experimental_conditions_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experimental-conditions.component.css */ 47848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var ExperimentalConditionsComponent = /** @class */ (function () {
    function ExperimentalConditionsComponent() {
    }
    ExperimentalConditionsComponent.prototype.ngOnInit = function () {
    };
    ExperimentalConditionsComponent.ctorParameters = function () { return []; };
    ExperimentalConditionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-experimental-conditions',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_experimental_conditions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_experimental_conditions_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ExperimentalConditionsComponent);
    return ExperimentalConditionsComponent;
}());



/***/ }),

/***/ 76687:
/*!******************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalXrefsComponent": function() { return /* binding */ ExternalXrefsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_external_xrefs_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./external-xrefs.component.html */ 49380);
/* harmony import */ var _external_xrefs_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-xrefs.component.css */ 91245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var ExternalXrefsComponent = /** @class */ (function () {
    function ExternalXrefsComponent() {
    }
    ExternalXrefsComponent.prototype.ngOnInit = function () {
    };
    ExternalXrefsComponent.prototype.extractImexPubId = function (imexRef) {
        var parts = imexRef.split('-');
        if (parts.length > 2)
            parts.splice(2, parts.length - 2);
        return parts.join('-');
    };
    ExternalXrefsComponent.ctorParameters = function () { return []; };
    ExternalXrefsComponent.propDecorators = {
        xrefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    ExternalXrefsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-external-xrefs',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_external_xrefs_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_external_xrefs_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ExternalXrefsComponent);
    return ExternalXrefsComponent;
}());



/***/ }),

/***/ 61724:
/*!******************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.ts ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesTableComponent": function() { return /* binding */ FeaturesTableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_features_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./features-table.component.html */ 24474);
/* harmony import */ var _features_table_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features-table.component.css */ 79653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment */ 92340);
/* harmony import */ var _shared_model_tables_feature_table_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/model/tables/feature-table.model */ 65105);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/table-factory.service */ 86401);







var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_graph_ws;
var FeaturesTableComponent = /** @class */ (function () {
    function FeaturesTableComponent(tableFactory) {
        this.tableFactory = tableFactory;
        this.featureChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.columnView = 'features_columnView';
        this._columns = new _shared_model_tables_feature_table_model__WEBPACK_IMPORTED_MODULE_3__.FeatureTable();
    }
    FeaturesTableComponent.prototype.ngOnInit = function () {
        this.initDataTable();
        this.tableFactory.initTopSlider('featureTable');
        this.tableFactory.initShadowBorder('featureTable');
        this.tableFactory.makeTableHeaderSticky();
    };
    FeaturesTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.featureTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            var table = $('#featureTable');
            this.dataTable = table.DataTable().columns.adjust().draw();
        }
    };
    FeaturesTableComponent.prototype.initDataTable = function () {
        var _this = this;
        var table = $('#featureTable');
        this.dataTable = table.DataTable({
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
                url: baseURL + "/graph/features/datatables/" + this.interactionAc,
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
                    render: this.tableFactory.enlistWithButtons(function (d) { return d.shortName + " (" + d.ac + ")"; })
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
        table.on('change', 'input[type=\'checkbox\']', function (e) {
            var featureSel = e.currentTarget.id;
            if (_this.featureSelected !== featureSel) {
                $('#' + _this.featureSelected + ':checkbox').prop('checked', false);
                _this.featureSelected = featureSel;
                _this.featureChanged.emit(_this.featureSelected);
            }
            else {
                // None is selected, remove class
                _this.featureSelected = undefined;
                _this.featureChanged.emit(_this.featureSelected);
            }
        });
    };
    Object.defineProperty(FeaturesTableComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeaturesTableComponent.prototype, "featureSelected", {
        get: function () {
            return this._featureSelected;
        },
        set: function (value) {
            this._featureSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    FeaturesTableComponent.ctorParameters = function () { return [
        { type: _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__.TableFactoryService }
    ]; };
    FeaturesTableComponent.propDecorators = {
        interactionAc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
        featureTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
        featureChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
    };
    FeaturesTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-features-table',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_features_table_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_features_table_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], FeaturesTableComponent);
    return FeaturesTableComponent;
}());



/***/ }),

/***/ 46840:
/*!********************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionDetailsComponent": function() { return /* binding */ InteractionDetailsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interaction_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interaction-details.component.html */ 4983);
/* harmony import */ var _interaction_details_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-details.component.css */ 14407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var InteractionDetailsComponent = /** @class */ (function () {
    function InteractionDetailsComponent() {
        this.featureToEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.hover = false;
    }
    InteractionDetailsComponent.prototype.ngOnInit = function () {
    };
    InteractionDetailsComponent.prototype.toggleDetailsButton = function () {
        if ($('#detailsPanel').is(':visible')) {
            $('#detailsPanel').hide();
            $('i#toggleDetails').removeClass('icon-minus').addClass('icon-plus');
        }
        else {
            $('#detailsPanel').show();
            $('i#toggleDetails').removeClass('icon-plus').addClass('icon-minus');
        }
    };
    InteractionDetailsComponent.ctorParameters = function () { return []; };
    InteractionDetailsComponent.propDecorators = {
        interactionDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        featureToEmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
    };
    InteractionDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-interaction-details',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interaction_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interaction_details_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractionDetailsComponent);
    return InteractionDetailsComponent;
}());



/***/ }),

/***/ 92300:
/*!*************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/organism/organism.pipe.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrganismPipe": function() { return /* binding */ OrganismPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var OrganismPipe = /** @class */ (function () {
    function OrganismPipe() {
    }
    OrganismPipe.prototype.transform = function (organism, args) {
        if (parseInt(organism.taxId) > 0) {
            var url = "https://www.uniprot.org/taxonomy/" + organism.taxId;
            return "<a href=\"" + url + "\" class=\"cv-term\" target=\"_blank\">" + organism.scientificName + "</a>";
        }
        else {
            return organism.scientificName;
        }
    };
    OrganismPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
            name: 'organism'
        })
    ], OrganismPipe);
    return OrganismPipe;
}());



/***/ }),

/***/ 71138:
/*!**********************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametersComponent": function() { return /* binding */ ParametersComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_parameters_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./parameters.component.html */ 46416);
/* harmony import */ var _parameters_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters.component.css */ 53933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var ParametersComponent = /** @class */ (function () {
    function ParametersComponent() {
    }
    ParametersComponent.prototype.ngOnInit = function () {
    };
    ParametersComponent.ctorParameters = function () { return []; };
    ParametersComponent.propDecorators = {
        parameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    ParametersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-parameters',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_parameters_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_parameters_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ParametersComponent);
    return ParametersComponent;
}());



/***/ }),

/***/ 90323:
/*!************************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipantTableComponent": function() { return /* binding */ ParticipantTableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_participant_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./participant-table.component.html */ 89655);
/* harmony import */ var _participant_table_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./participant-table.component.css */ 76570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../environments/environment */ 92340);
/* harmony import */ var _shared_model_tables_participant_table_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/model/tables/participant-table.model */ 60705);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/service/table-factory.service */ 86401);
/* harmony import */ var _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/interaction-participants.service */ 28849);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);









var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_graph_ws;
var ParticipantTableComponent = /** @class */ (function () {
    function ParticipantTableComponent(tableFactory, participantsService) {
        this.tableFactory = tableFactory;
        this.participantsService = participantsService;
        this.columnView = 'participants_columnView';
        this._columns = new _shared_model_tables_participant_table_model__WEBPACK_IMPORTED_MODULE_3__.ParticipantTable();
        this.fillParticipants = true;
    }
    ParticipantTableComponent.prototype.ngOnInit = function () {
        this.initDataTable();
        this.tableFactory.initTopSlider('participantTable');
        this.tableFactory.initShadowBorder('participantTable');
    };
    ParticipantTableComponent.prototype.ngAfterViewInit = function () {
        this.tableFactory.makeTableHeaderSticky();
        this.tableFactory.enableShowButtons();
    };
    ParticipantTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.participantTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            var table = $('#participantTable');
            this.fillParticipants = false;
            this.dataTable = table.DataTable().columns.adjust().draw();
        }
    };
    ParticipantTableComponent.prototype.initDataTable = function () {
        var _this = this;
        var table = $('#participantTable');
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
                url: baseURL + "/graph/participants/datatables/" + this.interactionAc,
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
                    render: function (data, type, full) {
                        if (type === 'display') {
                            var id = full.participantId.identifier;
                            if (full.type.shortName === 'protein') {
                                var expanded = _this.participantsService.getParticipantAndStatusById(id).status === _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_5__.Status.EXPANDED;
                                return "<input type=\"checkbox\" id=\"" + id + "\" name=\"check\" value=\"" + data + "\" " + (expanded ? 'checked' : '') + "/>";
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
                    render: function (data, type, row) {
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
                                return "<div><span class=\"detailsCell\">" + d.name + "</span></div>";
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
        this.participantsService.proteinSetsUpdated
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this))
            .subscribe(function (proteins) {
            proteins.expanded.map(function (protein) { return protein.identifier.id; }).forEach(function (id) { return $("#" + id + ":checkbox").prop('checked', true); });
            proteins.collapsed.map(function (protein) { return protein.identifier.id; }).forEach(function (id) { return $("#" + id + ":checkbox").prop('checked', false); });
        });
        table.on('change', 'input[name=\'check\']', function (e) {
            var id = e.currentTarget.id;
            var protein = _this.participantsService.getParticipantAndStatusById(id).participant;
            if ($("#" + id + ":checkbox").prop('checked')) {
                _this.participantsService.setProteinStatus(protein, _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_5__.Status.EXPANDED);
            }
            else {
                _this.participantsService.setProteinStatus(protein, _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_5__.Status.COLLAPSED);
            }
        });
    };
    Object.defineProperty(ParticipantTableComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    ParticipantTableComponent.ctorParameters = function () { return [
        { type: _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__.TableFactoryService },
        { type: _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_5__.InteractionParticipantsService }
    ]; };
    ParticipantTableComponent.propDecorators = {
        interactionAc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
        participantTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
    };
    ParticipantTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
            selector: 'ip-participant-table',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_participant_table_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_participant_table_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ParticipantTableComponent);
    return ParticipantTableComponent;
}());



/***/ }),

/***/ 56834:
/*!************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationComponent": function() { return /* binding */ PublicationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_publication_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./publication.component.html */ 12997);
/* harmony import */ var _publication_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publication.component.css */ 92740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var PublicationComponent = /** @class */ (function () {
    function PublicationComponent() {
        this.hover = false;
    }
    PublicationComponent.prototype.ngOnInit = function () {
        if (this.publication.publicationDate)
            this.publication.publicationDate = this.publication.publicationDate
                .split('-')
                .reverse()
                .join('/');
    };
    PublicationComponent.ctorParameters = function () { return []; };
    PublicationComponent.propDecorators = {
        publication: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    PublicationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-publication',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_publication_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_publication_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], PublicationComponent);
    return PublicationComponent;
}());



/***/ }),

/***/ 63220:
/*!*********************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-viewer/details-viewer.component.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "viewer": function() { return /* binding */ viewer; },
/* harmony export */   "DetailsViewerComponent": function() { return /* binding */ DetailsViewerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./details-viewer.component.html */ 95118);
/* harmony import */ var _details_viewer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-viewer.component.css */ 4934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_interactions_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/interactions-details.service */ 12498);
/* harmony import */ var _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/loading-indicators/progress-bar/progress-bar.component */ 31599);
/* harmony import */ var _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/service/interaction-participants.service */ 28849);
/* harmony import */ var complexviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! complexviewer */ 13518);
/* harmony import */ var _shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model/network-shapes/node-shape */ 45382);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);










var viewer;
var DetailsViewerComponent = /** @class */ (function () {
    function DetailsViewerComponent(interactionsDetailsService, participantsService) {
        this.interactionsDetailsService = interactionsDetailsService;
        this.participantsService = participantsService;
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.annotations = {
            'MI Features': true,
            'UniprotKB': false,
            'Superfamily': false,
            'Interactor': false,
        };
        this._colorLegendGroups = [];
        this.notifyViewerOfUpdates = true;
        this.NodeShape = _shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_6__.NodeShape;
        this.nodeTypes = new Set();
    }
    DetailsViewerComponent_1 = DetailsViewerComponent;
    DetailsViewerComponent.prototype.ngAfterViewInit = function () {
        this.requestInteractionViewerDetails();
        $('ip-interactions-viewer').foundation();
        $('.button-group.expanded').foundation();
    };
    DetailsViewerComponent.prototype.canAnimate = function () {
        // @ts-ignore
        return !!window.chrome;
    };
    DetailsViewerComponent.prototype.hasNodeShapeOf = function (type) {
        return this.nodeTypes ? this.nodeTypes.has(type) : false;
    };
    DetailsViewerComponent.prototype.requestInteractionViewerDetails = function () {
        var _this = this;
        this.participantsService.proteinSetsUpdated
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this))
            .subscribe(function (update) {
            if (_this.notifyViewerOfUpdates) {
                viewer.expandAndCollapseSelection(update.expanded.map(function (protein) { return protein.identifier.id; }));
            }
        });
        this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.untilDestroyed)(this))
            .subscribe({
            next: function (data) {
                _this.interactionData = data;
                _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hide();
                if (_this.interactionData !== undefined) {
                    viewer = new complexviewer__WEBPACK_IMPORTED_MODULE_5__.App(document.getElementById('interaction-viewer-container'));
                    viewer.readMIJSON(_this.interactionData, true);
                    viewer.autoLayout();
                    _this.expandAll();
                    _this.participantsService.initParticipants(viewer.getExpandedParticipants());
                    _this.updateColorLegend(viewer.getColorKeyJson());
                    _this.collectTypes();
                    viewer.addExpandListener(function (expandedParticipants) {
                        _this.notifyViewerOfUpdates = false;
                        _this.participantsService.updateProteinsStatus(expandedParticipants);
                        _this.notifyViewerOfUpdates = true;
                    });
                }
            },
            error: function (err) {
                _this.error.emit(err);
            }
        });
    };
    DetailsViewerComponent.prototype.expandAll = function () {
        viewer.expandAll();
        this.participantsService.expandAllProteins();
    };
    DetailsViewerComponent.prototype.collapseAll = function () {
        viewer.collapseAll();
    };
    DetailsViewerComponent.prototype.onChangeAnnotation = function (value) {
        var display = !this.annotations[value];
        this.annotations[value] = display;
        this.updateColorLegend(viewer.showAnnotations(value, display));
    };
    DetailsViewerComponent.prototype.updateColorLegend = function (legendData) {
        var e_1, _a;
        this._colorLegendGroups = [];
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__values)(Object.keys(legendData)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var group = _c.value;
                if (group === 'Complex') {
                    this._colorLegendGroups.push({
                        name: 'Interaction', legends: legendData[group].map(function (legend) {
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    DetailsViewerComponent.prototype.collectTypes = function () {
        var e_2, _a, e_3, _b, e_4, _c;
        try {
            for (var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__values)(this.interactionData.data), _e = _d.next(); !_e.done; _e = _d.next()) {
                var datum = _e.value;
                if (datum.object !== 'interaction') {
                    break;
                }
                try {
                    for (var _f = (e_3 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__values)(datum.participants)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var jsonParticipant = _g.value;
                        var intRef = jsonParticipant.interactorRef;
                        var interactor = viewer.interactors.get(intRef);
                        try {
                            for (var _h = (e_4 = void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__values)(DetailsViewerComponent_1.types)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var type = _j.value;
                                if (type.set.has(interactor.type.id)) {
                                    this.nodeTypes.add(type.name);
                                    break;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(DetailsViewerComponent.prototype, "colorLegendGroups", {
        get: function () {
            return this._colorLegendGroups;
        },
        enumerable: false,
        configurable: true
    });
    DetailsViewerComponent.prototype.resetLayout = function () {
        viewer.autoLayout();
    };
    var DetailsViewerComponent_1;
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
    DetailsViewerComponent.ctorParameters = function () { return [
        { type: _shared_service_interactions_details_service__WEBPACK_IMPORTED_MODULE_2__.InteractionsDetailsService },
        { type: _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_4__.InteractionParticipantsService }
    ]; };
    DetailsViewerComponent.propDecorators = {
        interactionAc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
        featureAc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
        error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
    };
    DetailsViewerComponent = DetailsViewerComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_8__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
            selector: 'ip-details-viewer',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_details_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewEncapsulation.None,
            styles: [_details_viewer_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DetailsViewerComponent);
    return DetailsViewerComponent;
}());

var ColorLegend = /** @class */ (function () {
    function ColorLegend(name, certain, uncertain) {
        this.name = name;
        this.certain = certain;
        this.uncertain = uncertain;
    }
    return ColorLegend;
}());
var Color = /** @class */ (function () {
    function Color(color) {
        this.color = color;
    }
    return Color;
}());


/***/ }),

/***/ 44314:
/*!****************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/interaction-details-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionDetailsRoutingModule": function() { return /* binding */ InteractionDetailsRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _details_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-dashboard.component */ 6875);




var routes = [
    {
        path: 'details/interaction/:id',
        component: _details_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DetailsDashboardComponent,
        data: { showCompactHeader: true, showFooter: true }
    }
];
var InteractionDetailsRoutingModule = /** @class */ (function () {
    function InteractionDetailsRoutingModule() {
    }
    InteractionDetailsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
        })
    ], InteractionDetailsRoutingModule);
    return InteractionDetailsRoutingModule;
}());



/***/ }),

/***/ 60789:
/*!********************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/interaction-details.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionDetailsModule": function() { return /* binding */ InteractionDetailsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _details_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-dashboard.component */ 6875);
/* harmony import */ var _details_tabs_details_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-tabs/details-tabs.component */ 79992);
/* harmony import */ var _details_tabs_details_interaction_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details-tabs/details/interaction-details.component */ 46840);
/* harmony import */ var _details_tabs_details_external_xrefs_external_xrefs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-tabs/details/external-xrefs/external-xrefs.component */ 76687);
/* harmony import */ var _details_tabs_details_curation_annotations_curation_annotations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-tabs/details/curation-annotations/curation-annotations.component */ 36028);
/* harmony import */ var _details_viewer_details_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-viewer/details-viewer.component */ 63220);
/* harmony import */ var _details_tabs_details_experimental_conditions_experimental_conditions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details-tabs/details/experimental-conditions/experimental-conditions.component */ 48795);
/* harmony import */ var _details_tabs_details_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details-tabs/details/parameters/parameters.component */ 71138);
/* harmony import */ var _details_tabs_details_confidences_confidences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details-tabs/details/confidences/confidences.component */ 45540);
/* harmony import */ var _interaction_details_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interaction-details-routing.module */ 44314);
/* harmony import */ var _details_tabs_details_experiment_experiment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./details-tabs/details/experiment/experiment.component */ 11674);
/* harmony import */ var _details_tabs_details_publication_publication_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details-tabs/details/publication/publication.component */ 56834);
/* harmony import */ var _details_tabs_details_participant_table_participant_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details-tabs/details/participant-table/participant-table.component */ 90323);
/* harmony import */ var _details_tabs_details_features_table_features_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details-tabs/details/features-table/features-table.component */ 61724);
/* harmony import */ var _details_tabs_details_cv_term_cv_term_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details-tabs/details/cv-term/cv-term.component */ 85977);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _details_tabs_details_cv_term_cv_to_url_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./details-tabs/details/cv-term/cv-to-url.pipe */ 32880);
/* harmony import */ var _details_tabs_details_organism_organism_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./details-tabs/details/organism/organism.pipe */ 92300);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/service/table-factory.service */ 86401);
/* harmony import */ var _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/service/interaction-participants.service */ 28849);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/components/components.module */ 15626);
























var InteractionDetailsModule = /** @class */ (function () {
    function InteractionDetailsModule() {
    }
    InteractionDetailsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_20__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule,
                _interaction_details_routing_module__WEBPACK_IMPORTED_MODULE_9__.InteractionDetailsRoutingModule,
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule,
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_19__.ComponentsModule
            ],
            exports: [],
            declarations: [
                _details_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DetailsDashboardComponent,
                _details_viewer_details_viewer_component__WEBPACK_IMPORTED_MODULE_5__.DetailsViewerComponent,
                _details_tabs_details_tabs_component__WEBPACK_IMPORTED_MODULE_1__.DetailsTabsComponent,
                _details_tabs_details_interaction_details_component__WEBPACK_IMPORTED_MODULE_2__.InteractionDetailsComponent,
                _details_tabs_details_external_xrefs_external_xrefs_component__WEBPACK_IMPORTED_MODULE_3__.ExternalXrefsComponent,
                _details_tabs_details_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_7__.ParametersComponent,
                _details_tabs_details_experimental_conditions_experimental_conditions_component__WEBPACK_IMPORTED_MODULE_6__.ExperimentalConditionsComponent,
                _details_tabs_details_curation_annotations_curation_annotations_component__WEBPACK_IMPORTED_MODULE_4__.CurationAnnotationsComponent,
                _details_tabs_details_confidences_confidences_component__WEBPACK_IMPORTED_MODULE_8__.ConfidencesComponent,
                _details_tabs_details_experiment_experiment_component__WEBPACK_IMPORTED_MODULE_10__.ExperimentComponent,
                _details_tabs_details_publication_publication_component__WEBPACK_IMPORTED_MODULE_11__.PublicationComponent,
                _details_tabs_details_participant_table_participant_table_component__WEBPACK_IMPORTED_MODULE_12__.ParticipantTableComponent,
                _details_tabs_details_features_table_features_table_component__WEBPACK_IMPORTED_MODULE_13__.FeaturesTableComponent,
                _details_tabs_details_cv_term_cv_term_component__WEBPACK_IMPORTED_MODULE_14__.CvTermComponent,
                _details_tabs_details_cv_term_cv_to_url_pipe__WEBPACK_IMPORTED_MODULE_15__.CvToUrlPipe,
                _details_tabs_details_organism_organism_pipe__WEBPACK_IMPORTED_MODULE_16__.OrganismPipe
            ],
            providers: [
                _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_17__.TableFactoryService,
                _shared_service_interaction_participants_service__WEBPACK_IMPORTED_MODULE_18__.InteractionParticipantsService
            ]
        })
    ], InteractionDetailsModule);
    return InteractionDetailsModule;
}());



/***/ }),

/***/ 28849:
/*!*****************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/shared/service/interaction-participants.service.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionParticipantsService": function() { return /* binding */ InteractionParticipantsService; },
/* harmony export */   "Status": function() { return /* binding */ Status; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);



var InteractionParticipantsService = /** @class */ (function () {
    function InteractionParticipantsService() {
        this.participantStatus = new Map();
        this.idToParticipant = new Map();
        this.proteinSetsUpdateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.proteinSetsUpdated = this.proteinSetsUpdateSubject.asObservable();
    }
    InteractionParticipantsService.prototype.initParticipants = function (participants, statusByDefaultForProteins) {
        var e_1, _a;
        if (statusByDefaultForProteins === void 0) { statusByDefaultForProteins = Status.EXPANDED; }
        this.participantStatus.clear();
        try {
            for (var participants_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(participants), participants_1_1 = participants_1.next(); !participants_1_1.done; participants_1_1 = participants_1.next()) {
                var participant = participants_1_1.value;
                if (participant.object === 'interactor') {
                    this.participantStatus.set(participant, participant.type.name === 'protein' ? statusByDefaultForProteins : Status.NON_PROTEIN);
                    this.idToParticipant.set(participant.identifier.id, participant);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (participants_1_1 && !participants_1_1.done && (_a = participants_1.return)) _a.call(participants_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.notifySetsListener();
    };
    InteractionParticipantsService.prototype.setProteinStatus = function (participant, status) {
        if (!this.participantStatus.has(participant)) {
            throw new Error(participant.label + " (id:" + participant.identifier.id + ") was not defined as a participant");
        }
        this.participantStatus.set(participant, status);
        this.notifySetsListener();
    };
    InteractionParticipantsService.prototype.updateProteinsStatus = function (expandedProteins) {
        var _this = this;
        var collapsedProteins = new Set(this.proteinParticipants);
        expandedProteins.forEach(function (participant) {
            collapsedProteins.delete(participant);
            _this.participantStatus.set(participant, Status.EXPANDED);
        });
        collapsedProteins.forEach(function (value) { return _this.participantStatus.set(value, Status.COLLAPSED); });
        this.notifySetsListener();
    };
    InteractionParticipantsService.prototype.expandAllProteins = function () {
        var _this = this;
        this.participantStatus.forEach(function (participantStatus, participant) {
            if (participantStatus === Status.COLLAPSED) {
                _this.participantStatus.set(participant, Status.EXPANDED);
            }
        });
        this.notifySetsListener();
    };
    InteractionParticipantsService.prototype.collapseAllProteins = function () {
        var _this = this;
        this.participantStatus.forEach(function (participantStatus, participant) {
            if (participantStatus === Status.EXPANDED) {
                _this.participantStatus.set(participant, Status.COLLAPSED);
            }
        });
        this.notifySetsListener();
    };
    InteractionParticipantsService.prototype.notifySetsListener = function () {
        var expanded = [], collapsed = [];
        this.participantStatus.forEach(function (status, participant) {
            if (status === Status.EXPANDED) {
                expanded.push(participant);
            }
            else if (status === Status.COLLAPSED) {
                collapsed.push(participant);
            }
        });
        this.proteinSetsUpdateSubject.next({ expanded: expanded, collapsed: collapsed });
    };
    InteractionParticipantsService.prototype.getParticipantStatus = function (participant) {
        return this.participantStatus.get(participant);
    };
    InteractionParticipantsService.prototype.getParticipantsByStatus = function (status) {
        var selectedParticipants = [];
        this.participantStatus.forEach(function (participantStatus, participant) {
            if (participantStatus === status) {
                selectedParticipants.push(participant);
            }
        });
        return selectedParticipants;
    };
    Object.defineProperty(InteractionParticipantsService.prototype, "participants", {
        get: function () {
            var participants = [];
            this.participantStatus.forEach(function (status, participant) { return participants.push(participant); });
            return participants;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionParticipantsService.prototype, "expandedParticipants", {
        get: function () {
            return this.getParticipantsByStatus(Status.EXPANDED);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionParticipantsService.prototype, "collapsedParticipants", {
        get: function () {
            return this.getParticipantsByStatus(Status.COLLAPSED);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionParticipantsService.prototype, "nonProteinParticipants", {
        get: function () {
            return this.getParticipantsByStatus(Status.NON_PROTEIN);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionParticipantsService.prototype, "proteinParticipants", {
        get: function () {
            var proteins = [];
            this.participantStatus.forEach(function (status, participant) {
                if (status !== Status.NON_PROTEIN) {
                    proteins.push(participant);
                }
            });
            return proteins;
        },
        enumerable: false,
        configurable: true
    });
    InteractionParticipantsService.prototype.getParticipantAndStatusById = function (id) {
        var participant = this.idToParticipant.get(id);
        return { participant: participant, status: this.participantStatus.get(participant) };
    };
    InteractionParticipantsService.ctorParameters = function () { return []; };
    InteractionParticipantsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
    ], InteractionParticipantsService);
    return InteractionParticipantsService;
}());

var Status;
(function (Status) {
    Status[Status["EXPANDED"] = 0] = "EXPANDED";
    Status[Status["COLLAPSED"] = 1] = "COLLAPSED";
    Status[Status["NON_PROTEIN"] = 2] = "NON_PROTEIN";
})(Status || (Status = {}));


/***/ }),

/***/ 1653:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadFormComponent": function() { return /* binding */ DownloadFormComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./download-form.component.html */ 63144);
/* harmony import */ var _download_form_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-form.component.css */ 52238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _shared_model_download_format_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/model/download/format.model */ 57896);
/* harmony import */ var _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/filter.service */ 88482);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/network-selection.service */ 3766);









var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_graph_ws;
var DownloadFormComponent = /** @class */ (function () {
    function DownloadFormComponent(filters, search, selection) {
        this.filters = filters;
        this.search = search;
        this.selection = selection;
        this.format = _shared_model_download_format_model__WEBPACK_IMPORTED_MODULE_3__.Format.json;
        this.last = false;
        this.filterTypes = _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_4__.Filter;
        this.URL = baseURL + "/graph/export/interaction/list";
    }
    DownloadFormComponent.prototype.ngOnInit = function () {
    };
    DownloadFormComponent.ctorParameters = function () { return [
        { type: _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_4__.FilterService },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService },
        { type: _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_6__.NetworkSelectionService }
    ]; };
    DownloadFormComponent.propDecorators = {
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
        last: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
    };
    DownloadFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
            selector: 'ip-download-form',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_download_form_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DownloadFormComponent);
    return DownloadFormComponent;
}());



/***/ }),

/***/ 32848:
/*!**********************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsFiltersComponent": function() { return /* binding */ InteractionsFiltersComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_filters_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactions-filters.component.html */ 48334);
/* harmony import */ var _interactions_filters_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-filters.component.css */ 85750);
/* harmony import */ var _custom_switchOnOff_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom_switchOnOff.css */ 76023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 72102);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/table-factory.service */ 86401);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/network-view.service */ 11728);
/* harmony import */ var _shared_utils_foundation_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utils/foundation-utils */ 89935);
/* harmony import */ var _shared_model_download_format_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model/download/format.model */ 57896);
/* harmony import */ var _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/filter.service */ 88482);
/* harmony import */ var _shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/model/network-shapes/node-shape */ 45382);













var InteractionsFiltersComponent = /** @class */ (function () {
    function InteractionsFiltersComponent(tableFactory, view, filters) {
        this.tableFactory = tableFactory;
        this.view = view;
        this.filters = filters;
        this.formats = _shared_model_download_format_model__WEBPACK_IMPORTED_MODULE_6__.Format.instances;
        this.filterTypes = _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter;
        this.shapes = _shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_8__.NodeShape;
    }
    InteractionsFiltersComponent.prototype.ngOnInit = function () {
        this.initSliderRange();
    };
    InteractionsFiltersComponent.prototype.ngAfterViewInit = function () {
        $('ip-interactions-filters').foundation();
        $(window).trigger('load.zf.sticky');
        this.tableFactory.makeTableHeaderSticky(); // Enables sticky header for all tables on the page
        _shared_utils_foundation_utils__WEBPACK_IMPORTED_MODULE_5__.FoundationUtils.adjustWidth();
    };
    InteractionsFiltersComponent.prototype.initSliderRange = function () {
        this.options = {
            floor: 0,
            ceil: 1,
            minLimit: 0,
            maxLimit: 1,
            step: 0.01,
            animate: false,
            showSelectionBar: true,
            translate: function (value, label) {
                switch (label) {
                    case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__.LabelType.Low:
                        return '<b>Min:</b> ' + value;
                    case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__.LabelType.High:
                        return '<b>Max:</b> ' + value;
                    default:
                        return String(value);
                }
            },
            getPointerColor: function (value) {
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
    };
    InteractionsFiltersComponent.prototype.fontColor = function (backgroundColor) {
        var rgb = this.hexToRgb(backgroundColor.substring(1));
        var lum = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
        return lum < 100 ? '#ffffff' : '#000000b0';
    };
    InteractionsFiltersComponent.prototype.hexToRgb = function (hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return { r: r, g: g, b: b };
    };
    /**
     * Use this function to avoid horizontal scrollbar in firefox
     */
    InteractionsFiltersComponent.prototype.scrollStyle = function (filter) {
        return this.filters.getFacets(filter).length > 20 ?
            { 'overflow-y': 'scroll', 'height': '39vh' } :
            { 'overflow-y': 'hidden', 'height': 'auto' };
    };
    InteractionsFiltersComponent.prototype.onChangeInteractorSpeciesFilter = function (event) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.SPECIES, event.target.value);
    };
    InteractionsFiltersComponent.prototype.onChangeInteractorTypeFilter = function (event) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.INTERACTOR_TYPE, event.target.value);
    };
    InteractionsFiltersComponent.prototype.onChangeInteractionTypeFilter = function (event) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.INTERACTION_TYPE, event.target.value);
    };
    InteractionsFiltersComponent.prototype.onChangeInteractionDetectionMethodFilter = function (event) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.DETECTION_METHOD, event.target.value);
    };
    InteractionsFiltersComponent.prototype.onChangeInteractionHostOrganismFilter = function (event) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.HOST_ORGANISM, event.target.value);
    };
    InteractionsFiltersComponent.prototype.onChangeInteractionIntraSpeciesFilter = function (event) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.INTRA_SPECIES, event.checked);
    };
    InteractionsFiltersComponent.prototype.onUserChangeEnd = function (changeContext) {
        this.filters.updateFilter(_shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.Filter.MI_SCORE, { min: changeContext.value, max: changeContext.highValue });
    };
    InteractionsFiltersComponent.ctorParameters = function () { return [
        { type: _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_3__.TableFactoryService },
        { type: _shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_4__.NetworkViewService },
        { type: _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_7__.FilterService }
    ]; };
    InteractionsFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
            selector: 'ip-interactions-filters',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_filters_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            animations: [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('bendTip', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('tipBended', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                        borderRadius: '0 1.4em 1.4em 0'
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('tipStraight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                        borderRadius: '0 0 0 0'
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('tipBended => tipStraight', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('250ms')
                    ]),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('tipStraight => tipBended', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('250ms 250ms')
                    ]),
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('slideIn', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
                        transform: 'translateX(0)'
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ transform: 'translateX(-100%)' }),
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('350ms 150ms')
                    ]),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':leave', [
                        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('350ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({ transform: 'translateX(-100%)' }))
                    ])
                ]),
            ],
            styles: [_interactions_filters_component_css__WEBPACK_IMPORTED_MODULE_1__, _custom_switchOnOff_css__WEBPACK_IMPORTED_MODULE_2__]
        })
    ], InteractionsFiltersComponent);
    return InteractionsFiltersComponent;
}());



/***/ }),

/***/ 76413:
/*!************************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/negative-filter/negative-filter-status.model.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NegativeFilterStatus": function() { return /* binding */ NegativeFilterStatus; }
/* harmony export */ });
var NegativeFilterStatus;
(function (NegativeFilterStatus) {
    NegativeFilterStatus["POSITIVE_ONLY"] = "POSITIVE_ONLY";
    NegativeFilterStatus["POSITIVE_AND_NEGATIVE"] = "POSITIVE_AND_NEGATIVE";
    NegativeFilterStatus["NEGATIVE_ONLY"] = "NEGATIVE_ONLY";
})(NegativeFilterStatus || (NegativeFilterStatus = {}));


/***/ }),

/***/ 99505:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/negative-filter/negative-filter.component.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NegativeFilterComponent": function() { return /* binding */ NegativeFilterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_negative_filter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./negative-filter.component.html */ 17683);
/* harmony import */ var _negative_filter_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negative-filter.component.css */ 55818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/service/filter.service */ 88482);
/* harmony import */ var _negative_filter_status_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./negative-filter-status.model */ 76413);






var NegativeFilterComponent = /** @class */ (function () {
    function NegativeFilterComponent(filters) {
        this.filters = filters;
        this.STATUS = _negative_filter_status_model__WEBPACK_IMPORTED_MODULE_3__.NegativeFilterStatus;
        this.FILTER = _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_2__.Filter;
    }
    NegativeFilterComponent.prototype.ngOnInit = function () {
    };
    NegativeFilterComponent.ctorParameters = function () { return [
        { type: _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_2__.FilterService }
    ]; };
    NegativeFilterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-negative-filter',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_negative_filter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_negative_filter_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], NegativeFilterComponent);
    return NegativeFilterComponent;
}());



/***/ }),

/***/ 4748:
/*!****************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-list/interactions-list.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsListComponent": function() { return /* binding */ InteractionsListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactions-list.component.html */ 9948);
/* harmony import */ var _interactions_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-list.component.css */ 18017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _interactions_table_interactions_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactions-table/interactions-table.component */ 79237);
/* harmony import */ var _interactors_table_interactors_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactors-table/interactors-table.component */ 84461);






var InteractionsListComponent = /** @class */ (function () {
    function InteractionsListComponent() {
        this._isTabInteractionActive = false;
        this._isTabInteractorActive = false;
    }
    InteractionsListComponent.prototype.ngOnInit = function () {
        $('ip-interactions-list').foundation();
    };
    InteractionsListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#search-results-tabs').on('change.zf.tabs', function () {
            if ($('#interactions').hasClass('is-active') === true) {
                _this.isTabInteractionActive = true;
                _this.isTabInteractorActive = false;
                $('[aria-describedby="interactorsTable_info"]').css('visibility', 'hidden');
                $('[aria-describedby="interactionsTable_info"]').css('visibility', 'visible');
            }
            else if ($('#interactor').hasClass('is-active') === true) {
                _this.isTabInteractionActive = false;
                _this.isTabInteractorActive = true;
                $('[aria-describedby="interactorsTable_info"]').css('visibility', 'visible');
                $('[aria-describedby="interactionsTable_info"]').css('visibility', 'hidden');
            }
        });
    };
    /** EVENT EMITTERS **/
    InteractionsListComponent.prototype.interactorsTabSelected = function () {
        if (!this.isTabInteractorActive) {
            this.isTabInteractorActive = true;
            this.isTabInteractionActive = false;
        }
    };
    InteractionsListComponent.prototype.interactionsTabSelected = function () {
        if (!this.isTabInteractionActive) {
            this.isTabInteractionActive = true;
            this.isTabInteractorActive = false;
        }
    };
    Object.defineProperty(InteractionsListComponent.prototype, "isTabInteractionActive", {
        /** GETTERS AND SETTERS **/
        get: function () {
            return this._isTabInteractionActive;
        },
        set: function (value) {
            this._isTabInteractionActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsListComponent.prototype, "isTabInteractorActive", {
        get: function () {
            return this._isTabInteractorActive;
        },
        set: function (value) {
            this._isTabInteractorActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsListComponent.prototype, "isInteractionTableShown", {
        get: function () {
            return this.isTabInteractionActive || !(this.isTabInteractionActive || this.isTabInteractorActive);
        },
        enumerable: false,
        configurable: true
    });
    InteractionsListComponent.ctorParameters = function () { return []; };
    InteractionsListComponent.propDecorators = {
        interactionsTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_interactions_table_interactions_table_component__WEBPACK_IMPORTED_MODULE_2__.InteractionsTableComponent, { static: true },] }],
        interactorsTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_interactors_table_interactors_table_component__WEBPACK_IMPORTED_MODULE_3__.InteractorsTableComponent, { static: true },] }]
    };
    InteractionsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-interactions-list',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactions_list_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractionsListComponent);
    return InteractionsListComponent;
}());



/***/ }),

/***/ 79237:
/*!************************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsTableComponent": function() { return /* binding */ InteractionsTableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactions-table.component.html */ 7498);
/* harmony import */ var _interactions_table_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-table.component.css */ 44351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ 16584);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/table-factory.service */ 86401);
/* harmony import */ var _shared_model_tables_interaction_table_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/tables/interaction-table.model */ 23739);
/* harmony import */ var _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/network-selection.service */ 3766);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/filter.service */ 88482);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);













var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_ws;
var ebiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ebi_url;
var InteractionsTableComponent = /** @class */ (function () {
    function InteractionsTableComponent(route, tableFactory, networkSelection, search, filters) {
        this.route = route;
        this.tableFactory = tableFactory;
        this.networkSelection = networkSelection;
        this.search = search;
        this.filters = filters;
        this.columnView = 'interactions_columnView';
        this._columns = new _shared_model_tables_interaction_table_model__WEBPACK_IMPORTED_MODULE_5__.InteractionTable();
        this.tableUnselectedEvent = new CustomEvent('tableUnselected', { bubbles: true });
    }
    InteractionsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this))
            .subscribe(function () {
            if (_this.dataTable !== undefined) {
                _this.dataTable = $('#interactionsTable').DataTable().ajax.reload();
            }
        });
        this.initDataTable();
        this.networkSelection.registerSelectionListener(this.dataTable, this);
        this.tableFactory.enableShowButtons();
        this.tableFactory.initTopSlider('interactionsTable');
        this.tableFactory.initShadowBorder('interactionsTable');
    };
    InteractionsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.interactionTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            var table = $('#interactionsTable');
            this.dataTable = table.DataTable().columns.adjust().draw();
        }
    };
    InteractionsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var interactionsTable = $('#interactionsTable');
        interactionsTable.on('change', 'input[type=\'checkbox\']', function (e) {
            var interactionSel = e.currentTarget.id;
            if (_this.interactionSelected !== interactionSel) {
                var previousCheckbox = $("#" + _this.interactionSelected + ":checkbox");
                previousCheckbox.prop('checked', false);
                _this.interactionSelected = interactionSel;
                var newCheckbox = $("#" + interactionSel + ":checkbox");
                newCheckbox.prop('checked', true);
                var interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
                    bubbles: true,
                    detail: {
                        interactionId: _this.interactionSelected
                    }
                });
                document.dispatchEvent(interactionSelectedEvent);
            }
            else {
                // Unselected
                _this.interactionSelected = undefined;
                document.dispatchEvent(_this.tableUnselectedEvent);
            }
        });
        // When table redrawn keep row selection synchronization between tables
        interactionsTable.on('draw.dt', function () {
            if (_this.interactionSelected !== undefined) {
                var previousCheckbox = $("#" + _this.interactionSelected + ":checkbox");
                previousCheckbox.prop('checked', true);
                var interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
                    bubbles: true,
                    detail: {
                        interactionId: _this.interactionSelected
                    }
                });
                document.dispatchEvent(interactionSelectedEvent);
            }
        });
    };
    InteractionsTableComponent.prototype.clearTableSelection = function () {
        if (!this.interactionSelected) {
            return;
        }
        var selectedInteraction = $("#" + this.interactionSelected + ":checkbox");
        if (selectedInteraction.length > 0) {
            selectedInteraction.prop('checked', false);
            this.interactionSelected = undefined;
        }
    };
    InteractionsTableComponent.prototype.updateTable = function () {
        var table = $('#interactionsTable');
        this.dataTable = table.DataTable().columns.adjust().draw();
    };
    InteractionsTableComponent.prototype.initDataTable = function () {
        var _this = this;
        var table = $('#interactionsTable');
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
                url: baseURL + "/interaction/list/",
                type: 'POST',
                data: function (d) {
                    d.page = d.start / d.length;
                    d.pageSize = d.length;
                    _this.search.toParams(d);
                    _this.networkSelection.toParams(d);
                    _this.filters.toParams(d);
                }
            },
            columns: [
                {
                    data: this._columns.id.data,
                    title: this._columns.id.title,
                    render: function (data, type, full) {
                        if (type === 'display') {
                            return "<div>\n                        <input type=\"checkbox\" id=\"" + full.binaryInteractionId + "\" name=\"check\" value=\"" + data + "\"/>\n                        <span class=\"margin-left-medium\">\n                          <a href=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.context_path + "/details/interaction/" + full.ac + "\" class=\"icon-link tool-tip\" target=\"_blank\">\n                            <i class=\"icon icon-common icon-search-document\"></i>\n                            <span class=\"tool-tip-text\">Show details of <span class=\"nowrap\">" + full.ac + "</span></span>\n                          </a>\n                        </span>\n                      </div>";
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
                    render: function (data, type) {
                        if (type === 'display' && data !== null) {
                            return _this.tableFactory.identifierRender((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractId)(data));
                        }
                        return data;
                    }
                },
                {
                    data: this._columns.identifierB.data,
                    defaultContent: '',
                    title: this._columns.identifierB.title,
                    render: function (data, type) {
                        if (type === 'display' && data !== null) {
                            return _this.tableFactory.identifierRender((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractId)(data));
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
                (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_10__.__assign)({}, this._columns.negative), { render: function (data) { return data ? '❌' : '✔️'; } }),
                {
                    data: this._columns.detectionMethod.data,
                    title: this._columns.detectionMethod.title,
                    render: this.tableFactory.cvRender('detectionMethodMIIdentifier')
                },
                {
                    data: this._columns.publicationIdentifiers.data,
                    title: this._columns.publicationIdentifiers.title,
                    render: this.tableFactory.enlistWithButtons(function (d) {
                        var data_s = d.split('(');
                        var publicationId = data_s[0].trim();
                        var publicationSource = data_s[1].slice(0, -1);
                        var url = '';
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
                        return "<div><span class=\"detailsCell\">\n                          " + (url !== '' ? "<a href=\"" + url + "\" target=\"_blank\">" + publicationId + "</a>" : publicationId) + "\n                      </span></div>";
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
                            return "<div>\n                          <span>\n                            <a href=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.context_path + "/details/interaction/" + data + "\" style=\"white-space: nowrap\">" + data + "</a>\n                          </span>\n                        </div>";
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
                    render: this.tableFactory.enlistWithButtons(function (d) {
                        if (!d.includes('intact-miscore')) {
                            var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__read)(d.split(/[()]/), 2), name_1 = _a[0], value = _a[1];
                            var scoreValue = parseFloat(value);
                            var fixed = isNaN(scoreValue) ? value : scoreValue.toFixed(2);
                            return "<div class=\"tag-cell-container vertical-flex\"><span class=\"detailsExpansionsCell tag-cell centered\">" + name_1 + ":" + fixed + "</span></div>";
                        }
                        var YELLOW_ORANGE_BROWN_PALETTE = [
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
                        var YELLOW_ORANGE_BROWN_PALETTE_TEXT = [
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
                        var YELLOW_ORANGE_BROWN_PALETTE_BG = [
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
                        var score = d.split(':');
                        var paletteIndex = Math.floor(parseFloat(score[1]) * 10);
                        // noinspection CssInvalidPropertyValue
                        return "<div class=\"tag-cell-container vertical-flex\">\n                          <a class=\"detailsConfidencesCell tag-cell centered\" target=\"_blank\"\n                          href=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.context_path + "/documentation/docs#interaction_scoring\"\n                          style=\"background-color:" + YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex] + ";\n                                 border:1px solid " + YELLOW_ORANGE_BROWN_PALETTE[paletteIndex] + ";\n                                 color: " + YELLOW_ORANGE_BROWN_PALETTE_TEXT[paletteIndex] + "\">\n                            " + d.replace('intact-miscore', 'MI Score') + "\n                          </a>\n                        </div>";
                    }, '', false)
                },
                {
                    data: this._columns.expansionMethod.data,
                    title: this._columns.expansionMethod.title,
                    defaultContent: ' ',
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return "<div style=\"display: flex\">\n                        <a target=\"_blank\" class=\"tag-cell detailsExpansionsCell\"\n                           href=\"" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.context_path + "/documentation/docs#expansion_method\" >\n                            " + data + "\n                        </a>\n                      </div>";
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
                    render: this.tableFactory.enlistWithButtons(function (d) { return _this.tableFactory.aliasRender((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractAlias)(d)); })
                },
                {
                    data: this._columns.aliasesB.data,
                    title: this._columns.aliasesB.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons(function (d) { return _this.tableFactory.aliasRender((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractAlias)(d)); })
                },
                {
                    data: this._columns.featureCount.data,
                    title: this._columns.featureCount.title,
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return "<div class=\"alignCell\"><span>" + data + "</span></div>";
                        }
                    }
                },
                {
                    data: this._columns.parameters.data,
                    title: this._columns.parameters.title,
                    defaultContent: ' ',
                    render: function (data, type) {
                        if (type === 'display' && data != null) {
                            return "<div class=\"parametersCell\"><span>" + data + "</span></div>";
                        }
                    }
                },
                {
                    data: this._columns.annotationsA.data,
                    title: this._columns.annotationsA.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons(function (d) { return _this.tableFactory.annotationRender(new Map([
                        ['comment', { class: 'detailsCommentsCell', symbol: 'icon-comment' }],
                        ['default', { class: 'detailsAllCell', symbol: 'icon-tag' }]
                    ]))((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractAnnotation)(d)); }, 'annotationsList')
                },
                {
                    data: this._columns.annotationsB.data,
                    title: this._columns.annotationsB.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons(function (d) { return _this.tableFactory.annotationRender(new Map([
                        ['comment', { class: 'detailsCommentsCell', symbol: 'icon-comment' }],
                        ['default', { class: 'detailsAllCell', symbol: 'icon-tag' }]
                    ]))((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractAnnotation)(d)); }, 'annotationsList')
                },
                {
                    data: this._columns.annotations.data,
                    title: this._columns.annotations.title,
                    defaultContent: ' ',
                    render: this.tableFactory.enlistWithButtons(function (d) { return _this.tableFactory.annotationRender(new Map([
                        ['figure legend', { class: 'detailsFigureLegendCell', symbol: 'icon-image' }],
                        ['comment', { class: 'detailsCommentsCell', symbol: 'icon-comment' }],
                        ['caution', { class: 'detailsCautionsCell', symbol: 'icon-exclamation-triangle' }],
                        ['default', { class: 'detailsAllCell', symbol: 'icon-tag' }]
                    ]))((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractAnnotation)(d)); }, 'annotationsList')
                }
            ],
            drawCallback: function () {
                $('#interactionsTableWidthMimic').width($('#interactionsTable').width());
                $('.table-list').parent('td').css('vertical-align', 'top');
                $('.collapse-panel').css('display', 'none');
            }
        });
    };
    Object.defineProperty(InteractionsTableComponent.prototype, "columns", {
        /************************* /
         /** GETTERS AND SETTERS ** /
         /*************************/
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsTableComponent.prototype, "interactionSelected", {
        get: function () {
            return this._interactionSelected;
        },
        set: function (value) {
            this._interactionSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    InteractionsTableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
        { type: _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__.TableFactoryService },
        { type: _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_6__.NetworkSelectionService },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchService },
        { type: _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_8__.FilterService }
    ]; };
    InteractionsTableComponent.propDecorators = {
        interactionTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
    };
    InteractionsTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
            selector: 'ip-interactions-table',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_table_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactions_table_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractionsTableComponent);
    return InteractionsTableComponent;
}());



/***/ }),

/***/ 84461:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractorsTableComponent": function() { return /* binding */ InteractorsTableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactors_table_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactors-table.component.html */ 74241);
/* harmony import */ var _interactors_table_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactors-table.component.css */ 56858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ 92340);
/* harmony import */ var _shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utils/string-utils */ 16584);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/table-factory.service */ 86401);
/* harmony import */ var _shared_model_tables_interactor_table_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/tables/interactor-table.model */ 40569);
/* harmony import */ var _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/service/network-selection.service */ 3766);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/service/filter.service */ 88482);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);













var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_ws;
var InteractorsTableComponent = /** @class */ (function () {
    function InteractorsTableComponent(route, tableFactory, networkSelection, search, filters) {
        this.route = route;
        this.tableFactory = tableFactory;
        this.networkSelection = networkSelection;
        this.search = search;
        this.filters = filters;
        this.columnView = 'interactors_columnView';
        this._columns = new _shared_model_tables_interactor_table_model__WEBPACK_IMPORTED_MODULE_5__.InteractorTable();
        this.tableUnselected = new CustomEvent('tableUnselected', { bubbles: true });
    }
    InteractorsTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table = $('#interactorsTable');
        this.route.queryParams
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this))
            .subscribe(function () {
            if (_this.dataTable !== undefined) {
                _this.dataTable = _this.table.DataTable().ajax.reload();
            }
        });
        this.initDataTable();
        this.networkSelection.registerSelectionListener(this.dataTable, this);
        this.tableFactory.initTopSlider('interactorsTable');
        this.tableFactory.initShadowBorder('interactorsTable');
    };
    InteractorsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.interactorTab.currentValue) {
            // This fixes the alignment between the th and td when we have activated scrollX:true
            this.table = $('#interactorsTable');
            this.dataTable = this.table.DataTable().columns.adjust().draw();
        }
    };
    InteractorsTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var interactorsTable = $('#interactorsTable');
        interactorsTable.on('change', 'input[type=\'checkbox\']', function (e) {
            var interactorSel = e.currentTarget.id;
            if (_this.interactorSelected !== interactorSel) {
                var previousInput = $("#" + _this.interactorSelected + ":checkbox");
                previousInput.prop('checked', false);
                _this.interactorSelected = interactorSel;
                var currentInput = $("#" + interactorSel + ":checkbox");
                currentInput.prop('checked', true);
                var interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
                    bubbles: true,
                    detail: {
                        interactorId: _this.interactorSelected
                    }
                });
                document.dispatchEvent(interactorSelectedEvent);
            }
            else {
                // Unselected
                _this.interactorSelected = undefined;
                document.dispatchEvent(_this.tableUnselected);
            }
        });
        // When table redrawn keep row selection synchronization between tables
        interactorsTable.on('draw.dt', function () {
            if (_this.interactorSelected !== undefined) {
                var selector = $("#" + _this.interactorSelected + ":checkbox");
                selector.prop('checked', true);
                var interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
                    bubbles: true,
                    detail: {
                        interactorId: _this.interactorSelected
                    }
                });
                document.dispatchEvent(interactorSelectedEvent);
            }
        });
        interactorsTable.on('resize', function () { return $('#interactorsTableWidthMimic').width(interactorsTable.width()); });
    };
    InteractorsTableComponent.prototype.clearTableSelection = function () {
        if (!this.interactorSelected) {
            return;
        }
        var selectedInteractorCheckbox = $("#" + this.interactorSelected + ":checkbox");
        if (selectedInteractorCheckbox.length > 0) {
            selectedInteractorCheckbox.prop('checked', false);
            this.interactorSelected = undefined;
        }
    };
    InteractorsTableComponent.prototype.initDataTable = function () {
        var _this = this;
        var table = $('#interactorsTable');
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
                url: baseURL + "/interaction/interactors/list/",
                type: 'POST',
                data: function (d) {
                    d.page = d.start / d.length;
                    d.pageSize = d.length;
                    _this.search.toParams(d);
                    _this.networkSelection.toParams(d);
                    _this.filters.toParams(d);
                }
            },
            columns: [
                {
                    data: this._columns.select.data,
                    title: this._columns.select.title,
                    render: function (data, type, full) {
                        if (type === 'display') {
                            return "<div class=\"margin-left-large\">\n                        <input type=\"checkbox\" id=\"" + full.interactorAc + "\" name=\"check\" value=\"" + data + "\"/>\n                      </div>";
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
                    render: function (data, type) {
                        if (type === 'display' && data !== null) {
                            return _this.tableFactory.identifierRender((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractId)(data));
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
                    render: this.tableFactory.enlistWithButtons(function (d) { return _this.tableFactory.aliasRender((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractAlias)(d)); })
                },
                {
                    data: this._columns.alternativeIds.data,
                    title: this._columns.alternativeIds.title,
                    render: this.tableFactory.groupBy(function (d) { return (0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractId)(d).database; }, this.tableFactory.enlist(function (d) { return _this.tableFactory.identifierLink((0,_shared_utils_string_utils__WEBPACK_IMPORTED_MODULE_3__.extractId)(d)); }), this.tableFactory.databaseTag)
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
    };
    Object.defineProperty(InteractorsTableComponent.prototype, "columns", {
        /************************* /
         /** GETTERS AND SETTERS ** /
         /*************************/
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractorsTableComponent.prototype, "interactorSelected", {
        get: function () {
            return this._interactorSelected;
        },
        set: function (value) {
            this._interactorSelected = value;
        },
        enumerable: false,
        configurable: true
    });
    InteractorsTableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
        { type: _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_4__.TableFactoryService },
        { type: _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_6__.NetworkSelectionService },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchService },
        { type: _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_8__.FilterService }
    ]; };
    InteractorsTableComponent.propDecorators = {
        interactorTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
    };
    InteractorsTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
            selector: 'ip-interactors-table',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactors_table_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactors_table_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractorsTableComponent);
    return InteractorsTableComponent;
}());



/***/ }),

/***/ 25320:
/*!*************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-results.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsResultsComponent": function() { return /* binding */ InteractionsResultsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_results_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactions-results.component.html */ 97065);
/* harmony import */ var _interactions_results_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-results.component.css */ 88478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_service_interactions_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/interactions-search.service */ 44111);
/* harmony import */ var _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/loading-indicators/progress-bar/progress-bar.component */ 31599);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/filter.service */ 88482);
/* harmony import */ var _shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/service/network-view.service */ 11728);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);












var InteractionsResultsComponent = /** @class */ (function () {
    function InteractionsResultsComponent(titleService, search, route, router, interactionsSearchService, view, filters) {
        this.titleService = titleService;
        this.search = search;
        this.route = route;
        this.router = router;
        this.interactionsSearchService = interactionsSearchService;
        this.view = view;
        this.filters = filters;
        this._hasResults = true;
    }
    InteractionsResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('IntAct - Search Results');
        this.route.queryParamMap
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this))
            .subscribe(function (paramMap) {
            _this.search.fromParams(paramMap);
            _this.filters.fromParams(paramMap);
            _this.requestInteractionsResults();
        });
        this.filters.updates.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(function () { return _this.updateURLParams(); });
        this.view.updates.pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this)).subscribe(function () { return _this.updateURLParams(); });
    };
    InteractionsResultsComponent.prototype.requestInteractionsResults = function () {
        var _this = this;
        this._hasResults = true;
        this.interactionsSearchService.queryFacets()
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.untilDestroyed)(this))
            .subscribe(function (interactionsSearch) {
            _this.interactionsSearch = interactionsSearch;
            if (_this.interactionsSearch.totalElements !== 0) {
                _this.filters.initFacets(_this.interactionsSearch.facetResultPage);
            }
            else {
                _this._hasResults = false;
            }
            _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hideWithoutDelay();
        });
    };
    /** END OF EVENT EMITTERS **/
    InteractionsResultsComponent.prototype.updateURLParams = function () {
        this.router.navigate([], {
            queryParams: (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, this.search.toURLParams()), this.filters.toParams()), this.view.toParams())
        });
    };
    Object.defineProperty(InteractionsResultsComponent.prototype, "title", {
        /** GETTERS AND SETTERS **/
        get: function () {
            return this.search.title ? this.search.title : this.search.query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsResultsComponent.prototype, "isLongTitle", {
        get: function () {
            return this.title.length > 50;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsResultsComponent.prototype, "shortTerms", {
        get: function () {
            if (!this.isLongTitle) {
                return this.title;
            }
            else {
                var terms = this.title.split(/\s/);
                var last = terms.pop();
                while (last.length === 0 || !last.trim()) {
                    last = terms.pop();
                }
                return terms.shift() + " ... " + last;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsResultsComponent.prototype, "hasResults", {
        get: function () {
            return this._hasResults;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsResultsComponent.prototype, "interactionsSearch", {
        get: function () {
            return this._interactionsSearch;
        },
        set: function (value) {
            this._interactionsSearch = value;
        },
        enumerable: false,
        configurable: true
    });
    InteractionsResultsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_4__.SearchService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
        { type: _shared_service_interactions_search_service__WEBPACK_IMPORTED_MODULE_2__.InteractionsSearchService },
        { type: _shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_6__.NetworkViewService },
        { type: _shared_service_filter_service__WEBPACK_IMPORTED_MODULE_5__.FilterService }
    ]; };
    InteractionsResultsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_7__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
            selector: 'ip-interactions-results',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_results_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactions_results_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractionsResultsComponent);
    return InteractionsResultsComponent;
}());



/***/ }),

/***/ 51045:
/*!**********************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-results.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsResultsModule": function() { return /* binding */ InteractionsResultsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _interactions_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactions-results.component */ 25320);
/* harmony import */ var _interactions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-routing.module */ 86765);
/* harmony import */ var _interactions_filters_interactions_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactions-filters/interactions-filters.component */ 32848);
/* harmony import */ var _interactions_list_interactions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactions-list/interactions-list.component */ 4748);
/* harmony import */ var _interactions_viewer_interactions_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactions-viewer/interactions-viewer.component */ 1890);
/* harmony import */ var _interactions_list_interactors_table_interactors_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactions-list/interactors-table/interactors-table.component */ 84461);
/* harmony import */ var _interactions_list_interactions_table_interactions_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactions-list/interactions-table/interactions-table.component */ 79237);
/* harmony import */ var _interaction_details_interaction_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interaction-details/interaction-details.module */ 60789);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 72102);
/* harmony import */ var _layout_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layout/loading-indicators/progress-spinner/progress-spinner.module */ 65236);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/service/table-factory.service */ 86401);
/* harmony import */ var _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/service/network-selection.service */ 3766);
/* harmony import */ var _interactions_viewer_interactions_legend_interactions_legend_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interactions-viewer/interactions-legend/interactions-legend.component */ 51438);
/* harmony import */ var _shared_components_components_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/components.module */ 15626);
/* harmony import */ var _interactions_filters_download_form_download_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interactions-filters/download-form/download-form.component */ 1653);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _interactions_filters_negative_filter_negative_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interactions-filters/negative-filter/negative-filter.component */ 99505);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ 53894);



























var InteractionsResultsModule = /** @class */ (function () {
    function InteractionsResultsModule() {
    }
    InteractionsResultsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule,
                _interactions_routing_module__WEBPACK_IMPORTED_MODULE_1__.InteractionsRoutingModule,
                _interaction_details_interaction_details_module__WEBPACK_IMPORTED_MODULE_7__.InteractionDetailsModule,
                _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_18__.NgxSliderModule,
                _layout_loading_indicators_progress_spinner_progress_spinner_module__WEBPACK_IMPORTED_MODULE_8__.ProgressSpinnerModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_24__.MatExpansionModule,
                _shared_components_components_module__WEBPACK_IMPORTED_MODULE_12__.ComponentsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__.MatButtonToggleModule
            ],
            declarations: [
                _interactions_filters_interactions_filters_component__WEBPACK_IMPORTED_MODULE_2__.InteractionsFiltersComponent,
                _interactions_list_interactions_list_component__WEBPACK_IMPORTED_MODULE_3__.InteractionsListComponent,
                _interactions_viewer_interactions_viewer_component__WEBPACK_IMPORTED_MODULE_4__.InteractionsViewerComponent,
                _interactions_results_component__WEBPACK_IMPORTED_MODULE_0__.InteractionsResultsComponent,
                _interactions_list_interactors_table_interactors_table_component__WEBPACK_IMPORTED_MODULE_5__.InteractorsTableComponent,
                _interactions_list_interactions_table_interactions_table_component__WEBPACK_IMPORTED_MODULE_6__.InteractionsTableComponent,
                _interactions_viewer_interactions_legend_interactions_legend_component__WEBPACK_IMPORTED_MODULE_11__.InteractionsLegendComponent,
                _interactions_filters_download_form_download_form_component__WEBPACK_IMPORTED_MODULE_13__.DownloadFormComponent,
                _interactions_filters_negative_filter_negative_filter_component__WEBPACK_IMPORTED_MODULE_14__.NegativeFilterComponent,
            ],
            providers: [
                _shared_service_table_factory_service__WEBPACK_IMPORTED_MODULE_9__.TableFactoryService,
                _shared_service_network_selection_service__WEBPACK_IMPORTED_MODULE_10__.NetworkSelectionService
            ]
        })
    ], InteractionsResultsModule);
    return InteractionsResultsModule;
}());



/***/ }),

/***/ 86765:
/*!**********************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsRoutingModule": function() { return /* binding */ InteractionsRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _interactions_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactions-results.component */ 25320);




var routes = [
    {
        path: 'search',
        component: _interactions_results_component__WEBPACK_IMPORTED_MODULE_0__.InteractionsResultsComponent,
        data: { showCompactHeader: true, showFooter: true }
    },
];
var InteractionsRoutingModule = /** @class */ (function () {
    function InteractionsRoutingModule() {
    }
    InteractionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]
        })
    ], InteractionsRoutingModule);
    return InteractionsRoutingModule;
}());



/***/ }),

/***/ 51438:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.ts ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsLegendComponent": function() { return /* binding */ InteractionsLegendComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_legend_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactions-legend.component.html */ 78340);
/* harmony import */ var _interactions_legend_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-legend.component.css */ 57092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var InteractionsLegendComponent = /** @class */ (function () {
    function InteractionsLegendComponent() {
        this.objectKeys = Object.keys;
    }
    InteractionsLegendComponent.prototype.ngOnInit = function () {
    };
    InteractionsLegendComponent.ctorParameters = function () { return []; };
    InteractionsLegendComponent.propDecorators = {
        legend: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        mutation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    InteractionsLegendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-interactions-legend',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_legend_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactions_legend_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractionsLegendComponent);
    return InteractionsLegendComponent;
}());



/***/ }),

/***/ 1890:
/*!********************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsViewerComponent": function() { return /* binding */ InteractionsViewerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactions-viewer.component.html */ 4447);
/* harmony import */ var _interactions_viewer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactions-viewer.component.css */ 57822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_service_network_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/network-search.service */ 93717);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layout/loading-indicators/progress-bar/progress-bar.component */ 31599);
/* harmony import */ var _shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/service/network-view.service */ 11728);
/* harmony import */ var intact_network_viewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! intact-network-viewer */ 77309);
/* harmony import */ var intact_network_viewer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intact_network_viewer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);










var InteractionsViewerComponent = /** @class */ (function () {
    function InteractionsViewerComponent(route, router, networkSearchService, view) {
        this.route = route;
        this.router = router;
        this.networkSearchService = networkSearchService;
        this.view = view;
        this._hasMutation = false;
        this._interactionsJSON = {};
        this.legend = undefined;
    }
    InteractionsViewerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            $('ip-interactions-viewer').foundation();
            _this.view.viewer = new intact_network_viewer__WEBPACK_IMPORTED_MODULE_5__.GraphPort('for-canvas-graph', 'nodeL');
            _this.route.queryParamMap
                .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(_this))
                .subscribe(function (paramMap) {
                _this.view.fromParams(paramMap);
                if (_this.view.mustQuery) {
                    _this.requestIntactNetworkDetails();
                }
                _this.view.mustQuery = true;
            });
        });
    };
    InteractionsViewerComponent.prototype.requestIntactNetworkDetails = function () {
        var _this = this;
        this.view.visible = true;
        this.networkSearchService.getInteractionNetwork(this.view.groupBySpecies)
            .pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this))
            .subscribe({
            next: function (json) {
                _this.interactionsJSON = json;
                if (json.legend) {
                    _this.legend = json.legend;
                    _this._hasMutation = json.legend.edge_legend.mutation_color.true !== undefined;
                    if (!_this._hasMutation) {
                        _this.view.setAffectedByMutation(false, false);
                    }
                }
                _this.view.error = null;
                if (json.data.length > 0) {
                    _this.view.viewer.initializeWithData(_this.interactionsJSON, _this.view.expanded, _this.view.affectedByMutation, _this.view.layoutName);
                }
                else {
                    _this.view.visible = false;
                    _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hideWithoutDelay();
                }
            },
            error: function (e) {
                _this.view.visible = false;
                _this.view.error = e;
                _layout_loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent.hideWithoutDelay();
            }
        });
    };
    InteractionsViewerComponent.prototype.onChangeLayout = function (event, value) {
        if (event.target.checked) {
            this.view.setLayoutName(value);
        }
    };
    InteractionsViewerComponent.prototype.onChangeExpand = function (expandCheckBoxValue, affectedByMutationCheckBox) {
        if (!expandCheckBoxValue) {
            affectedByMutationCheckBox.checked = false;
            this.view.setAffectedByMutation(false, false);
        }
        this.view.setExpanded(expandCheckBoxValue);
    };
    InteractionsViewerComponent.prototype.onChangeAffectedByMutation = function (affectedByMutationCheckBoxValue, expandCheckBox) {
        if (affectedByMutationCheckBoxValue) {
            expandCheckBox.checked = true;
            this.view.setExpanded(true, false);
        }
        this.view.setAffectedByMutation(affectedByMutationCheckBoxValue);
    };
    InteractionsViewerComponent.prototype.onChangeGroupBy = function (groupByValue) {
        this.view.setGroupBySpecies(groupByValue);
    };
    InteractionsViewerComponent.prototype.onClickDownloadGraph = function (downloadFileType) {
        this.view.viewer.exportAs(downloadFileType);
    };
    InteractionsViewerComponent.prototype.onClickReset = function () {
        this.view.viewer.reset();
    };
    InteractionsViewerComponent.prototype.onClickSearch = function (interactorName) {
        this.view.viewer.search(interactorName);
    };
    Object.defineProperty(InteractionsViewerComponent.prototype, "interactionsJSON", {
        get: function () {
            return this._interactionsJSON;
        },
        set: function (value) {
            this._interactionsJSON = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InteractionsViewerComponent.prototype, "hasMutation", {
        get: function () {
            return this._hasMutation;
        },
        set: function (value) {
            this._hasMutation = value;
        },
        enumerable: false,
        configurable: true
    });
    InteractionsViewerComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
        { type: _shared_service_network_search_service__WEBPACK_IMPORTED_MODULE_2__.NetworkSearchService },
        { type: _shared_service_network_view_service__WEBPACK_IMPORTED_MODULE_4__.NetworkViewService }
    ]; };
    InteractionsViewerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
            selector: 'ip-interactions-viewer',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactions_viewer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
            styles: [_interactions_viewer_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractionsViewerComponent);
    return InteractionsViewerComponent;
}());



/***/ }),

/***/ 57896:
/*!********************************************************************!*\
  !*** ./src/app/interactions/shared/model/download/format.model.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Format": function() { return /* binding */ Format; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);

var Format = /** @class */ (function () {
    function Format(extension, name, html) {
        this.extension = extension;
        this.name = name;
        this.html = html;
        Format._instances.push(this);
    }
    Object.defineProperty(Format, "instances", {
        get: function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(this._instances));
        },
        enumerable: false,
        configurable: true
    });
    Format._instances = [];
    Format.tab2_5 = new Format('txt', 'miTab25', 'miTab<sub>2.5</sub>');
    Format.tab2_6 = new Format('txt', 'miTab26', 'miTab<sub>2.6</sub>');
    Format.tab2_7 = new Format('txt', 'miTab27', 'miTab<sub>2.7</sub>');
    Format.xml2_5 = new Format('xml', 'miXML25', 'miXML<sub>2.5</sub>');
    Format.xml3_0 = new Format('xml', 'miXML30', 'miXML<sub>3.0</sub>');
    Format.json = new Format('json', 'miJSON', 'miJSON<sub>1.0</sub>');
    return Format;
}());



/***/ }),

/***/ 39131:
/*!************************************************************************!*\
  !*** ./src/app/interactions/shared/model/network-shapes/edge-shape.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdgeShape": function() { return /* binding */ EdgeShape; }
/* harmony export */ });
var EdgeShape;
(function (EdgeShape) {
    EdgeShape["DASHED_LINE"] = "dashed";
    EdgeShape["SOLID_LINE"] = "solid";
})(EdgeShape || (EdgeShape = {}));


/***/ }),

/***/ 45382:
/*!************************************************************************!*\
  !*** ./src/app/interactions/shared/model/network-shapes/node-shape.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeShape": function() { return /* binding */ NodeShape; }
/* harmony export */ });
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

/***/ 10001:
/*!******************************************************************!*\
  !*** ./src/app/interactions/shared/model/tables/column.model.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": function() { return /* binding */ Column; }
/* harmony export */ });
var Column = /** @class */ (function () {
    function Column(title, data, hiddenByDefault, table) {
        if (hiddenByDefault === void 0) { hiddenByDefault = false; }
        this.title = title;
        this.data = data;
        this.hiddenByDefault = hiddenByDefault;
        table.push(this);
    }
    return Column;
}());



/***/ }),

/***/ 65105:
/*!*************************************************************************!*\
  !*** ./src/app/interactions/shared/model/tables/feature-table.model.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureTable": function() { return /* binding */ FeatureTable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.model */ 14350);
/* harmony import */ var _column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column.model */ 10001);



var FeatureTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(FeatureTable, _super);
    function FeatureTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ac = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('AC', 'featureAc', true, _this);
        _this.name = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Name', 'name', false, _this);
        _this.type = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Type', 'type', false, _this);
        _this.role = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Role', 'role', false, _this);
        _this.rangePositions = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Range Positions', 'ranges', false, _this);
        _this.linkedFeatures = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Linked Features', 'linkedFeatures', false, _this);
        _this.participantName = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Participant Name', 'participantName', false, _this);
        _this.participantIdentifier = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Participant Identifier', 'participant', false, _this);
        _this.participantAc = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Participant AC', 'participantAc', true, _this);
        _this.detectionMethods = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Detection Methods', 'detectionMethods', false, _this);
        _this.parameters = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Parameters', 'parameters', false, _this);
        _this.identifiers = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Identifiers', 'identifiers', false, _this);
        _this.crossReferences = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Cross References', 'xrefs', false, _this);
        _this.annotations = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Annotations', 'annotations', false, _this);
        return _this;
    }
    return FeatureTable;
}(_table_model__WEBPACK_IMPORTED_MODULE_0__.Table));



/***/ }),

/***/ 23739:
/*!*****************************************************************************!*\
  !*** ./src/app/interactions/shared/model/tables/interaction-table.model.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionTable": function() { return /* binding */ InteractionTable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.model */ 14350);
/* harmony import */ var _column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column.model */ 10001);



var InteractionTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InteractionTable, _super);
    function InteractionTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Select', 'binaryInteractionId', false, _this);
        _this.moleculeA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Molecule A', 'moleculeA', false, _this);
        _this.moleculeB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Molecule B', 'moleculeB', false, _this);
        _this.identifierA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Identifier A', 'idA', false, _this);
        _this.identifierB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Identifier B', 'idB', false, _this);
        _this.typeA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Type A', 'typeA', false, _this);
        _this.typeB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Type B', 'typeB', false, _this);
        _this.speciesA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Species A', 'speciesA', false, _this);
        _this.speciesB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Species B', 'speciesB', false, _this);
        _this.hostOrganism = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Host Organism', 'hostOrganism', false, _this);
        _this.negative = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Positive interaction', 'negative', false, _this);
        _this.detectionMethod = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Detection Method', 'detectionMethod', false, _this);
        _this.publicationIdentifiers = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Publication IDs', 'publicationIdentifiers', false, _this);
        _this.type = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Interaction Type', 'type', false, _this);
        _this.ac = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Interaction AC', 'ac', false, _this);
        _this.database = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Database', 'sourceDatabase', true, _this);
        _this.confidenceValue = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Confidence Value', 'confidenceValues', false, _this);
        _this.expansionMethod = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Expansion Method', 'expansionMethod', false, _this);
        _this.experimentalRoleA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Experimental Role A', 'experimentalRoleA', true, _this);
        _this.experimentalRoleB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Experimental Role B', 'experimentalRoleB', true, _this);
        _this.biologicalRoleA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Biological Role A', 'biologicalRoleA', true, _this);
        _this.biologicalRoleB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Biological Role B', 'biologicalRoleB', true, _this);
        _this.aliasesA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Aliases A', 'aliasesA', false, _this);
        _this.aliasesB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Aliases B', 'aliasesB', false, _this);
        _this.featureCount = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Feature count', 'featureCount', false, _this);
        _this.parameters = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Parameters', 'parameters', true, _this);
        _this.annotationsA = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Annotations A', 'annotationsA', true, _this);
        _this.annotationsB = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Annotations B', 'annotationsB', true, _this);
        _this.annotations = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Interaction Annotations', 'annotations', false, _this);
        return _this;
    }
    return InteractionTable;
}(_table_model__WEBPACK_IMPORTED_MODULE_0__.Table));



/***/ }),

/***/ 40569:
/*!****************************************************************************!*\
  !*** ./src/app/interactions/shared/model/tables/interactor-table.model.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractorTable": function() { return /* binding */ InteractorTable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.model */ 14350);
/* harmony import */ var _column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column.model */ 10001);



var InteractorTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(InteractorTable, _super);
    function InteractorTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.select = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Select', 'interactorAc', false, _this);
        _this.accession = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Accession', 'interactorAc', false, _this);
        _this.name = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Name', 'interactorName', false, _this);
        _this.preferredId = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Preferred ID', 'interactorPreferredIdentifier', false, _this);
        _this.type = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Type', 'interactorType', false, _this);
        _this.species = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Species', 'interactorSpecies', false, _this);
        _this.description = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Description', 'interactorDescription', false, _this);
        _this.alias = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Alias', 'interactorAlias', false, _this);
        _this.alternativeIds = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Alternative IDs', 'interactorAltIds', false, _this);
        _this.interactionSearchCount = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Interactions found in current search', 'interactionSearchCount', false, _this);
        _this.interactionCount = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Total interactions in all IntAct', 'interactionCount', false, _this);
        return _this;
    }
    return InteractorTable;
}(_table_model__WEBPACK_IMPORTED_MODULE_0__.Table));



/***/ }),

/***/ 60705:
/*!*****************************************************************************!*\
  !*** ./src/app/interactions/shared/model/tables/participant-table.model.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipantTable": function() { return /* binding */ ParticipantTable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.model */ 14350);
/* harmony import */ var _column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column.model */ 10001);



var ParticipantTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ParticipantTable, _super);
    function ParticipantTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expand = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Expand', 'participantName', false, _this);
        _this.name = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Name', 'shortLabel', false, _this);
        _this.ac = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('AC', 'participantAc', false, _this);
        _this.type = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Type', 'type', false, _this);
        _this.identifier = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Identifier', 'participantId', false, _this);
        _this.aliases = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Aliases', 'aliases', false, _this);
        _this.description = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Description', 'description', false, _this);
        _this.species = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Species', 'species', false, _this);
        _this.expressionSystem = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Expression System', 'expressionSystem', false, _this);
        _this.detectionMethods = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Detection Methods', 'detectionMethod', false, _this);
        _this.experimentalRole = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Experimental Role', 'experimentalRole', false, _this);
        _this.biologicalRole = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Biological Role', 'biologicalRole', false, _this);
        _this.experimentalPreparations = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Experimental Preparations', 'experimentalPreparations', false, _this);
        _this.parameters = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Parameters', 'parameters', false, _this);
        _this.confidences = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Confidences', 'confidences', false, _this);
        _this.crossReferences = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Cross References', 'xrefs', false, _this);
        _this.annotations = new _column_model__WEBPACK_IMPORTED_MODULE_1__.Column('Annotations', 'annotations', false, _this);
        return _this;
    }
    return ParticipantTable;
}(_table_model__WEBPACK_IMPORTED_MODULE_0__.Table));



/***/ }),

/***/ 14350:
/*!*****************************************************************!*\
  !*** ./src/app/interactions/shared/model/tables/table.model.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": function() { return /* binding */ Table; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);

var Table = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Table;
}(Array));



/***/ }),

/***/ 88482:
/*!***************************************************************!*\
  !*** ./src/app/interactions/shared/service/filter.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterService": function() { return /* binding */ FilterService; },
/* harmony export */   "Filter": function() { return /* binding */ Filter; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _network_selection_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-selection.service */ 3766);
/* harmony import */ var _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interactions-results/interactions-filters/negative-filter/negative-filter-status.model */ 76413);





var FilterService = /** @class */ (function () {
    function FilterService(selection) {
        this.selection = selection;
        this._negative = _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__.NegativeFilterStatus.POSITIVE_ONLY;
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
        this._hasNegative = false;
        this._mutationColor = '#FF00A1';
        this._nbMutation = 0;
        this._nbNonMutation = 0;
        this._nbExpansion = 0;
        this._nbNonExpansion = 0;
        this._nbNegative = 0;
        this._nbPositive = 0;
        this.updatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.updates = this.updatesSubject.asObservable();
    }
    FilterService_1 = FilterService;
    FilterService.updateDiscreteFilter = function (container, updatedValue) {
        if (!container.includes(updatedValue)) {
            container.push(updatedValue);
        }
        else {
            container.splice(container.indexOf(updatedValue), 1);
        }
    };
    FilterService.prototype.initFacets = function (facets) {
        this._facets = FilterService_1.filterFacets(facets);
        this.initSpeciesFilter();
        this.initMIScoreFilter(facets.intact_miscore);
        this.initMutationFilter(facets.affected_by_mutation_styled);
        this.initExpansionFilter(facets.expansion_method_s);
        this.initNegativeFilter(facets.negative);
    };
    FilterService.filterFacets = function (facets) {
        var e_1, _a;
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(Object.keys(facets)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var facetName = _c.value;
                facets[facetName] = facets[facetName].filter(function (facet) { return facet.value !== 'null'; });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return facets;
    };
    FilterService.prototype.initSpeciesFilter = function () {
        this.intraSpeciesCounts = new Map(this.facets.combined_species.map(function (facet) { return [facet.value, facet.valueCount.intra]; }));
    };
    FilterService.prototype.initMIScoreFilter = function (scoreFacets) {
        var scores = scoreFacets.map(function (facet) { return parseFloat(facet.value); });
        this.minMIScore = scores.length !== 0 ? Math.min.apply(Math, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(scores))) : 0;
        this.maxMIScore = scores.length !== 0 ? Math.max.apply(Math, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(scores))) : 1;
        if (this._currentMinMIScore < this.minMIScore) {
            this._currentMinMIScore = this.minMIScore;
        }
        if (this._currentMaxMIScore > this.maxMIScore) {
            this._currentMaxMIScore = this.maxMIScore;
        }
    };
    FilterService.prototype.initMutationFilter = function (mutationFacets) {
        var e_2, _a;
        this._nbNonMutation = 0;
        this._nbMutation = 0;
        try {
            for (var mutationFacets_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(mutationFacets), mutationFacets_1_1 = mutationFacets_1.next(); !mutationFacets_1_1.done; mutationFacets_1_1 = mutationFacets_1.next()) {
                var mutationFacet = mutationFacets_1_1.value;
                this._nbNonMutation += mutationFacet.valueCount;
                if (mutationFacet.value === 'true' && mutationFacet.valueCount > 0) {
                    if (mutationFacet.visualProperty) {
                        this._mutationColor = mutationFacet.visualProperty;
                    }
                    this._nbMutation = mutationFacet.valueCount;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (mutationFacets_1_1 && !mutationFacets_1_1.done && (_a = mutationFacets_1.return)) _a.call(mutationFacets_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this._hasMutation = this._nbMutation > 0;
    };
    FilterService.prototype.initExpansionFilter = function (expansionFacets) {
        var e_3, _a;
        this._nbNonExpansion = 0;
        this._nbExpansion = 0;
        try {
            for (var expansionFacets_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(expansionFacets), expansionFacets_1_1 = expansionFacets_1.next(); !expansionFacets_1_1.done; expansionFacets_1_1 = expansionFacets_1.next()) {
                var expansionFacet = expansionFacets_1_1.value;
                this._nbNonExpansion += expansionFacet.valueCount;
                if (expansionFacet.value === 'true' && expansionFacet.valueCount > 0) {
                    this._nbExpansion = expansionFacet.valueCount;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (expansionFacets_1_1 && !expansionFacets_1_1.done && (_a = expansionFacets_1.return)) _a.call(expansionFacets_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this._hasExpansion = this._nbExpansion > 0;
    };
    FilterService.prototype.initNegativeFilter = function (negativeFacets) {
        var e_4, _a;
        this._nbNegative = 0;
        this._nbPositive = 0;
        try {
            for (var negativeFacets_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(negativeFacets), negativeFacets_1_1 = negativeFacets_1.next(); !negativeFacets_1_1.done; negativeFacets_1_1 = negativeFacets_1.next()) {
                var negativeFacet = negativeFacets_1_1.value;
                if (negativeFacet.value === 'false' && negativeFacet.valueCount > 0) {
                    this._nbPositive = negativeFacet.valueCount;
                }
                else if (negativeFacet.value === 'true' && negativeFacet.valueCount > 0) {
                    this._nbNegative += negativeFacet.valueCount;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (negativeFacets_1_1 && !negativeFacets_1_1.done && (_a = negativeFacets_1.return)) _a.call(negativeFacets_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this._hasNegative = this._nbNegative > 0;
    };
    FilterService.prototype.updateFilter = function (filter, value, update) {
        if (update === void 0) { update = true; }
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
    };
    FilterService.prototype.fromParams = function (params) {
        this.interactorSpecies = params.has('interactorSpeciesFilter') ? params.get('interactorSpeciesFilter').split(',') : [];
        this.interactorTypes = params.has('interactorTypesFilter') ? params.get('interactorTypesFilter').split(',') : [];
        this.interactionTypes = params.has('interactionTypesFilter') ? params.get('interactionTypesFilter').split(',') : [];
        this.interactionDetectionMethods = params.has('interactionDetectionMethodsFilter') ? params.get('interactionDetectionMethodsFilter').split(',') : [];
        this.interactionHostOrganisms = params.has('interactionHostOrganismsFilter') ? params.get('interactionHostOrganismsFilter').split(',') : [];
        this._currentMinMIScore = params.has('minMIScore') ? parseFloat(params.get('minMIScore')) : 0;
        this._currentMaxMIScore = params.has('maxMIScore') ? parseFloat(params.get('maxMIScore')) : 1;
        this._negative = params.has('negativeFilter') ? params.get('negativeFilter') : _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__.NegativeFilterStatus.POSITIVE_ONLY;
        this._mutation = params.get('mutationFilter') === 'true';
        this._expansion = params.get('expansionFilter') === 'true';
        this._intraSpecies = params.get('intraSpeciesFilter') === 'true';
    };
    FilterService.prototype.toParams = function (params, arrayTransformer) {
        if (params === void 0) { params = {}; }
        if (arrayTransformer === void 0) { arrayTransformer = function (a) { return a.join(','); }; }
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
        if (this._negative !== _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__.NegativeFilterStatus.POSITIVE_ONLY) {
            // TODO revert to params.negativeFilter = this.negative when backend is ready
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
    };
    FilterService.prototype.canFilterIntraSpecies = function () {
        var e_5, _a, e_6, _b;
        if (this.interactorSpecies.length === 0) {
            try {
                // @ts-ignore
                for (var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(this.intraSpeciesCounts.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var value = _d.value;
                    if (value > 0) {
                        return true;
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return false;
        }
        try {
            for (var _e = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(this.interactorSpecies), _f = _e.next(); !_f.done; _f = _e.next()) {
                var interactorSpecies = _f.value;
                if (this.intraSpeciesCounts.get(interactorSpecies) > 0) {
                    return true;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return false;
    };
    FilterService.prototype.isFilteringScore = function () {
        return this._currentMinMIScore > this.minMIScore || this._currentMaxMIScore < this.maxMIScore;
    };
    FilterService.prototype.anyFiltersSelected = function () {
        return this.interactorSpecies.length !== 0 ||
            this.interactorTypes.length !== 0 ||
            this.interactionTypes.length !== 0 ||
            this.interactionDetectionMethods.length !== 0 ||
            this.interactionHostOrganisms.length !== 0 ||
            this.mutation ||
            this.negative !== _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__.NegativeFilterStatus.POSITIVE_ONLY ||
            this.expansion ||
            this.isFilteringScore();
    };
    FilterService.prototype.isFiltering = function (filter) {
        switch (filter) {
            case Filter.MI_SCORE:
                return this.isFilteringScore();
            case Filter.NEGATIVE:
                return this._negative !== _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__.NegativeFilterStatus.POSITIVE_ONLY;
            case Filter.MUTATION:
                return this._mutation;
            case Filter.EXPANSION:
                return this._expansion;
            case Filter.INTRA_SPECIES:
                return this.intraSpecies;
            default:
                return this.getFilter(filter).length !== 0;
        }
    };
    FilterService.prototype.isFilteringValue = function (filter, value) {
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
    };
    FilterService.prototype.resetAllFilters = function () {
        var e_7, _a;
        try {
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__values)(Object.keys(Filter)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var filter = _c.value;
                this.resetFilter(Filter[filter], false);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.updatesSubject.next();
    };
    FilterService.prototype.resetFilter = function (filter, update) {
        if (update === void 0) { update = true; }
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
                this._negative = _interactions_results_interactions_filters_negative_filter_negative_filter_status_model__WEBPACK_IMPORTED_MODULE_1__.NegativeFilterStatus.POSITIVE_ONLY;
                break;
            case Filter.MUTATION:
                this._mutation = false;
                break;
            case Filter.EXPANSION:
                this._expansion = false;
                break;
            default:
                var values = this.getFilter(filter);
                values.splice(0, values.length);
                break;
        }
        if (update) {
            this.updatesSubject.next(filter);
        }
    };
    FilterService.prototype.resetMISCoreFilter = function () {
        this._currentMinMIScore = this.minMIScore;
        this._currentMaxMIScore = this.maxMIScore;
    };
    FilterService.prototype.getFilter = function (filter) {
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
    };
    FilterService.prototype.getFacets = function (filter) {
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
    };
    Object.defineProperty(FilterService.prototype, "facets", {
        get: function () {
            return this._facets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "mutation", {
        get: function () {
            return this._mutation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "expansion", {
        get: function () {
            return this._expansion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "negative", {
        get: function () {
            return this._negative;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "intraSpecies", {
        get: function () {
            return this._intraSpecies;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "currentMinMIScore", {
        get: function () {
            return this._currentMinMIScore;
        },
        set: function (value) {
            this._currentMinMIScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "currentMaxMIScore", {
        get: function () {
            return this._currentMaxMIScore;
        },
        set: function (value) {
            this._currentMaxMIScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "mutationColor", {
        get: function () {
            return this._mutationColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "hasMutation", {
        get: function () {
            return this._hasMutation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "hasExpansion", {
        get: function () {
            return this._hasExpansion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "nbMutation", {
        get: function () {
            return this._nbMutation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "nbExpansion", {
        get: function () {
            return this._nbExpansion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "nbNonMutation", {
        get: function () {
            return this._nbNonMutation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "nbNonExpansion", {
        get: function () {
            return this._nbNonExpansion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "hasNegative", {
        get: function () {
            return this._hasNegative;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "nbNegative", {
        get: function () {
            return this._nbNegative;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "nbPositive", {
        get: function () {
            return this._nbPositive;
        },
        enumerable: false,
        configurable: true
    });
    var FilterService_1;
    FilterService.ctorParameters = function () { return [
        { type: _network_selection_service__WEBPACK_IMPORTED_MODULE_0__.NetworkSelectionService }
    ]; };
    FilterService = FilterService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
    ], FilterService);
    return FilterService;
}());

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


/***/ }),

/***/ 12498:
/*!*****************************************************************************!*\
  !*** ./src/app/interactions/shared/service/interactions-details.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsDetailsService": function() { return /* binding */ InteractionsDetailsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-analytics */ 14462);







var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.intact_portal_graph_ws;
var InteractionsDetailsService = /** @class */ (function () {
    function InteractionsDetailsService(http, reporter) {
        this.http = http;
        this.reporter = reporter;
        this.interactionDetailsURL = baseURL + "/graph/interaction/details/";
        this.interactionViewerURL = baseURL + "/graph/export/interaction/";
    }
    InteractionsDetailsService.prototype.getInteractionDetails = function (interactionAc) {
        return this.http.get("" + this.interactionDetailsURL + interactionAc)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    };
    InteractionsDetailsService.prototype.getInteractionViewer = function (interactionAc) {
        return this.http.get("" + this.interactionViewerURL + interactionAc, { params: { format: 'miJSON' } })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    };
    InteractionsDetailsService.prototype.handleError = function (err) {
        this.reporter.exception(err);
        if (err.error instanceof Error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    InteractionsDetailsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
        { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__.GoogleAnalyticsService }
    ]; };
    InteractionsDetailsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
    ], InteractionsDetailsService);
    return InteractionsDetailsService;
}());



/***/ }),

/***/ 44111:
/*!****************************************************************************!*\
  !*** ./src/app/interactions/shared/service/interactions-search.service.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractionsSearchService": function() { return /* binding */ InteractionsSearchService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.service */ 88482);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-analytics */ 14462);









var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.intact_portal_ws;
var InteractionsSearchService = /** @class */ (function () {
    function InteractionsSearchService(http, reporter, search, filters) {
        this.http = http;
        this.reporter = reporter;
        this.search = search;
        this.filters = filters;
    }
    InteractionsSearchService.prototype.queryFacets = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({ fromObject: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, this.search.toParams()), this.filters.toParams()) });
        return this.http.post(baseURL + "/interaction/findInteractionFacets", params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    };
    InteractionsSearchService.prototype.handleError = function (err) {
        this.reporter.exception(err);
        if (err.error instanceof Error) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
        }
        else {
            console.error(err.message ? err.message : err.toString());
        }
    };
    InteractionsSearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
        { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__.GoogleAnalyticsService },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService },
        { type: _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService }
    ]; };
    InteractionsSearchService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
    ], InteractionsSearchService);
    return InteractionsSearchService;
}());



/***/ }),

/***/ 93717:
/*!***********************************************************************!*\
  !*** ./src/app/interactions/shared/service/network-search.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSearchService": function() { return /* binding */ NetworkSearchService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.service */ 88482);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home-dashboard/search/service/search.service */ 47395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-google-analytics */ 14462);









var baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.intact_portal_ws;
var NetworkSearchService = /** @class */ (function () {
    function NetworkSearchService(http, reporter, search, filters) {
        this.http = http;
        this.reporter = reporter;
        this.search = search;
        this.filters = filters;
    }
    NetworkSearchService.prototype.getInteractionNetwork = function (compoundGraph) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({ fromObject: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, this.filters.toParams()), this.search.toParams()) })
            .set('isCompound', compoundGraph.toString());
        return this.http.post(baseURL + "/network/getInteractions", params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(this.handleError));
    };
    NetworkSearchService.prototype.handleError = function (err) {
        if (this.reporter) {
            this.reporter.exception(err);
        }
        if (!(err.error instanceof Error)) {
            console.error(err.message ? err.message : err.toString());
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
    };
    NetworkSearchService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
        { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__.GoogleAnalyticsService },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService },
        { type: _filter_service__WEBPACK_IMPORTED_MODULE_1__.FilterService }
    ]; };
    NetworkSearchService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
    ], NetworkSearchService);
    return NetworkSearchService;
}());



/***/ }),

/***/ 3766:
/*!**************************************************************************!*\
  !*** ./src/app/interactions/shared/service/network-selection.service.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkSelectionService": function() { return /* binding */ NetworkSelectionService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


var NetworkSelectionService = /** @class */ (function () {
    function NetworkSelectionService() {
        var _this = this;
        this.dataTables = new Set();
        this.resultTables = [];
        this._binaryInteractionIds = [];
        this._interactorAcs = [];
        document.addEventListener('graph-interaction-selected', function (e) {
            _this._binaryInteractionIds = e.detail.interactionIds();
            _this._interactorAcs = [];
            _this.triggerDataTables();
        });
        document.addEventListener('graph-interactor-selected', function (e) {
            _this._binaryInteractionIds = [];
            _this._interactorAcs = [e.detail.interactorId()];
            _this.triggerDataTables();
        });
        document.addEventListener('graph-unselected', function () {
            _this._binaryInteractionIds = [];
            _this._interactorAcs = [];
            _this.triggerDataTables();
        });
    }
    NetworkSelectionService.prototype.registerSelectionListener = function (dataTable, resultTable) {
        this.dataTables.add(dataTable);
        this.resultTables.push(resultTable);
    };
    NetworkSelectionService.prototype.resetSelection = function (updateTables) {
        if (updateTables === void 0) { updateTables = true; }
        this._binaryInteractionIds = [];
        this._interactorAcs = [];
        if (updateTables)
            this.triggerDataTables();
    };
    NetworkSelectionService.prototype.triggerDataTables = function () {
        this.dataTables.forEach(function (dataTable) { return dataTable.ajax.reload(); });
        this.resultTables.forEach(function (resultTable) { return resultTable.clearTableSelection(); });
    };
    Object.defineProperty(NetworkSelectionService.prototype, "interactorAcs", {
        get: function () {
            return this._interactorAcs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkSelectionService.prototype, "binaryInteractionIds", {
        get: function () {
            return this._binaryInteractionIds;
        },
        enumerable: false,
        configurable: true
    });
    NetworkSelectionService.prototype.fromParams = function (paramMap) {
        this._interactorAcs = paramMap.has('interactorAcs') ? paramMap.get('interactorAcs').split(',') : [];
        this._binaryInteractionIds = paramMap.has('binaryInteractionIds') ? paramMap.get('binaryInteractionIds').split(',').map(Number.parseInt) : [];
    };
    NetworkSelectionService.prototype.toParams = function (params, arrayHandler) {
        if (params === void 0) { params = {}; }
        if (arrayHandler === void 0) { arrayHandler = function (array) { return array.join(','); }; }
        if (this.interactorAcs.length > 0) {
            params.interactorAcs = arrayHandler(this.interactorAcs);
        }
        if (this.binaryInteractionIds.length > 0) {
            params.binaryInteractionIds = arrayHandler(this.binaryInteractionIds);
        }
        return params;
    };
    NetworkSelectionService.ctorParameters = function () { return []; };
    NetworkSelectionService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
    ], NetworkSelectionService);
    return NetworkSelectionService;
}());



/***/ }),

/***/ 11728:
/*!*********************************************************************!*\
  !*** ./src/app/interactions/shared/service/network-view.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkViewService": function() { return /* binding */ NetworkViewService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);



var NetworkViewService = /** @class */ (function () {
    function NetworkViewService() {
        this._visible = true;
        this._expanded = true;
        this._affectedByMutation = false;
        this._groupBySpecies = false;
        this._layoutName = 'fcose';
        this._mustQuery = true;
        this._error = null;
        this.updatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.updates = this.updatesSubject.asObservable();
    }
    NetworkViewService.prototype.fromParams = function (paramMap) {
        this._expanded = paramMap.get('collapsed') !== 'true';
        this._affectedByMutation = paramMap.get('mutationStyle') === 'true';
        this._groupBySpecies = paramMap.get('groupBySpecies') === 'true';
        this._layoutName = paramMap.has('layout') ? paramMap.get('layout') : 'fcose';
    };
    NetworkViewService.prototype.toParams = function (params, arrayHandler) {
        if (params === void 0) { params = {}; }
        if (arrayHandler === void 0) { arrayHandler = function (a) { return a.join(','); }; }
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
    };
    Object.defineProperty(NetworkViewService.prototype, "viewer", {
        get: function () {
            return this._viewer;
        },
        set: function (value) {
            this._viewer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkViewService.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        enumerable: false,
        configurable: true
    });
    NetworkViewService.prototype.setExpanded = function (value, update) {
        if (update === void 0) { update = true; }
        this._expanded = value;
        if (update) {
            this._mustQuery = false;
            this.updatesSubject.next();
            this.viewer.expandEdges(this.expanded, this.affectedByMutation);
        }
    };
    Object.defineProperty(NetworkViewService.prototype, "affectedByMutation", {
        get: function () {
            return this._affectedByMutation;
        },
        enumerable: false,
        configurable: true
    });
    NetworkViewService.prototype.setAffectedByMutation = function (value, update) {
        if (update === void 0) { update = true; }
        this._affectedByMutation = value;
        if (update) {
            this._mustQuery = false;
            this.updatesSubject.next();
            this.viewer.expandEdges(this.expanded, this.affectedByMutation);
        }
    };
    Object.defineProperty(NetworkViewService.prototype, "groupBySpecies", {
        get: function () {
            return this._groupBySpecies;
        },
        enumerable: false,
        configurable: true
    });
    NetworkViewService.prototype.setGroupBySpecies = function (value, update) {
        if (update === void 0) { update = true; }
        this._groupBySpecies = value;
        this._mustQuery = true;
        if (update) {
            this.updatesSubject.next();
        }
    };
    Object.defineProperty(NetworkViewService.prototype, "layoutName", {
        get: function () {
            return this._layoutName;
        },
        enumerable: false,
        configurable: true
    });
    NetworkViewService.prototype.setLayoutName = function (value, update) {
        if (update === void 0) { update = true; }
        this._layoutName = value;
        if (update) {
            this._mustQuery = false;
            this.updatesSubject.next();
            this.viewer.applyLayout(value);
        }
    };
    Object.defineProperty(NetworkViewService.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this._visible = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkViewService.prototype, "mustQuery", {
        get: function () {
            return this._mustQuery;
        },
        set: function (value) {
            this._mustQuery = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkViewService.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (value) {
            this._error = value;
        },
        enumerable: false,
        configurable: true
    });
    NetworkViewService.ctorParameters = function () { return []; };
    NetworkViewService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
    ], NetworkViewService);
    return NetworkViewService;
}());



/***/ }),

/***/ 86401:
/*!**********************************************************************!*\
  !*** ./src/app/interactions/shared/service/table-factory.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableFactoryService": function() { return /* binding */ TableFactoryService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utils/array-utils */ 25379);




var ebiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ebi_url;
var TableFactoryService = /** @class */ (function () {
    function TableFactoryService() {
        this.enlistWithButtons = function (renderer, containerClass, alignTop) {
            if (containerClass === void 0) { containerClass = 'aliasesList'; }
            if (alignTop === void 0) { alignTop = true; }
            return function (data, type, row, meta) {
                if (data == null || type !== 'display') {
                    return data;
                }
                var html = '<div class="show-more-content">';
                var displayed = 0;
                for (var i = 0; i < data.length; i++) {
                    if (displayed === 2) {
                        html += '<div class="to-hide" style="display: none">';
                    }
                    var render = renderer(data[i], i);
                    if (render) {
                        html += render;
                        displayed++;
                    }
                }
                if (displayed > 2) {
                    html += "</div></div><button type=\"button\" data-col=\"" + meta.col + "\" class=\"showMore\">Show more (" + (displayed - 2) + ")</button>";
                }
                else if (displayed === 2) {
                    html += '</div></div>';
                }
                else {
                    html += '</div>';
                }
                return "<div class=\"" + containerClass + " " + (alignTop ? 'table-list' : '') + "\">" + html + "</div>";
            };
        };
        this.speciesRender = function (identifierColumn) { return function (data, type, row, meta) {
            var id = row[identifierColumn];
            if (parseInt(id, 10) > 0) {
                var url = "https://www.uniprot.org/taxonomy/" + id;
                return "<a href=\"" + url + "\" class=\"cv-term species\" target=\"_blank\">" + data + "</a>";
            }
            else {
                return data;
            }
        }; };
        this.speciesRenderStructured = function (species) {
            if (species == null) {
                return;
            }
            if (species.taxId != null && species.taxId > 0) {
                var url = "https://www.uniprot.org/taxonomy/" + species.taxId;
                return "<a href=\"" + url + "\" class=\"cv-term species\" target=\"_blank\">" + species.scientificName + "</a>";
            }
            else {
                return species.scientificName;
            }
        };
        this.cvRender = function (identifierColumn) { return function (data, type, row) {
            var miId = row[identifierColumn];
            if (miId) {
                return "<a href=\"" + TableFactoryService_1.getCvURL(miId) + "\" class=\"cv-term\" target=\"_blank\">" + data + "</a>";
            }
            else {
                return data;
            }
        }; };
        this.cvRenderStructured = function (data, type) {
            if (type !== undefined && type !== 'display') {
                return;
            }
            if (data.identifier) {
                return "<a href=\"" + TableFactoryService_1.getCvURL(data.identifier) + "\" class=\"cv-term\" target=\"_blank\">" + data.shortName + "</a>";
            }
            else {
                return data.shortName;
            }
        };
        this.annotationRender = function (tagStyleMap) { return function (annotation) {
            var tagStyle = { class: 'detailsAnnotationCell', symbol: '' };
            if (tagStyleMap != null) {
                if (tagStyleMap.has(annotation.topic.shortName)) {
                    tagStyle = tagStyleMap.get(annotation.topic.shortName);
                }
                else if (tagStyleMap.has('default')) {
                    tagStyle = tagStyleMap.get('default');
                }
            }
            var symbol = tagStyle.symbol !== '' ? "<i class=\"icon icon-common " + tagStyle.symbol + "\"></i>" : '';
            var tag = annotation.topic.identifier != null ?
                "<a class=\"" + tagStyle.class + " tag-cell\" target=\"_blank\" href=\"" + TableFactoryService_1.getCvURL(annotation.topic.identifier) + "\"\n         >" + symbol + " " + annotation.topic.shortName + "</a>" :
                "<span class=\"" + tagStyle.class + " tag-cell\">" + symbol + " " + annotation.topic.shortName + "</span>";
            return "<div class=\"annotationInteractionCell tag-cell-container\">\n              " + tag + "\n              <span class=\"detailsCell annotationInteractionCellWidth\">" + annotation.description + "</span>\n            </div>";
        }; };
        this.aliasRender = function (alias, type) {
            if (type !== undefined && type !== 'display') {
                return;
            }
            return "<div class=\"aliasesCell tag-cell-container\">\n              <a class=\"detailsAliasesCell tag-cell\" target=\"_blank\"\n                 href=\"" + ebiURL + "/ols/ontologies/mi/terms?obo_id=" + alias.type.identifier + "\">\n                " + alias.type.shortName + "</a>\n              <span class=\"detailsCell\">" + alias.name + "</span>\n            </div>";
        };
    }
    TableFactoryService_1 = TableFactoryService;
    TableFactoryService.getCvURL = function (miId) {
        if (miId === undefined) {
            return null;
        }
        var id = miId.replace(':', '_');
        return "https://www.ebi.ac.uk/ols/ontologies/mi/terms?iri=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2F" + id + "&viewMode=All&siblings=false";
    };
    TableFactoryService.processDatabase = function (database) {
        var shortDbName = database.shortName !== undefined ? database.shortName : database;
        var access = TableFactoryService_1.databaseToAccess.get(shortDbName);
        var style = '';
        if (access) {
            if (access.color) {
                style = "color:" + access.color + ";\n                 background-color:" + (access.backColor ? access.backColor : access.color.replace('1.0', '0.05')) + ";";
            }
        }
        var databaseTag;
        if (database.shortName !== undefined) {
            databaseTag = "<a class=\"identifier-cell tag-cell\" style=\"" + style + "\" target=\"_blank\" href=\"" + TableFactoryService_1.getCvURL(database.identifier) + "\"\n                       >" + (access ? access.fancyName : shortDbName) + "</a>";
        }
        else {
            databaseTag = "<span class=\"identifier-cell tag-cell\" style=\"" + style + "\">" + (access ? access.fancyName : shortDbName) + "</span>";
        }
        return { tag: databaseTag, access: access };
    };
    TableFactoryService.prototype.enlist = function (elementRenderer) {
        return function (data, type, row, meta) {
            if (data == null || type !== 'display') {
                return null;
            }
            return "<ul class=\"elementList table-list\">" + data.map(elementRenderer).map(function (render) { return "<li>" + render + "</li>"; }).join('') + "</ul>";
        };
    };
    TableFactoryService.prototype.groupBy = function (grouper, groupRenderer, headerRenderer) {
        if (headerRenderer === void 0) { headerRenderer = function (group) { return ' ' + group; }; }
        return function (data, type, row, meta) {
            if (data == null) {
                return;
            }
            var html = '<div class="table-list">';
            var groups = (0,_shared_utils_array_utils__WEBPACK_IMPORTED_MODULE_1__.groupBy)(data, grouper);
            groups.forEach(function (group) {
                html += "<span class=\"collapse-header collapsed\">" + headerRenderer(group.group) + "<span class=\"collapsable-counter\">" + group.elements.length + "</span></span>";
                html += '<div class="collapse-panel">';
                html += groupRenderer(group.elements, type, row, meta);
                html += '</div>';
            });
            return html + '</div>';
        };
    };
    TableFactoryService.prototype.identifierRender = function (id) {
        if (id === null) {
            return;
        }
        var db = TableFactoryService_1.processDatabase(id.database);
        var url = db.access ? db.access.getURL(id.identifier) : null;
        return "<div class=\"tag-cell-container identifier-cell-container\">\n              " + db.tag + "\n              <div class=\"detailsCell identifierCellWidth\">\n                " + (id.qualifier ? '<b> ' : '') + "\n                  " + (url !== null ? "<a href=\"" + url + "\" target=\"_blank\" >" + id.identifier + "</a>" : id.identifier) + "\n                " + (id.qualifier ? '</b>' : '') + "\n              </div>\n            </div>";
    };
    TableFactoryService.prototype.databaseTag = function (database) {
        return TableFactoryService_1.processDatabase(database).tag;
    };
    TableFactoryService.prototype.identifierLink = function (id) {
        if (id === null) {
            return;
        }
        var db = TableFactoryService_1.processDatabase(id.database);
        var url = db.access ? db.access.getURL(id.identifier) : null;
        return "<div class=\"detailsCell identifierCellWidth\">\n              " + (id.qualifier ? '<b> ' : '') + "\n                " + (url !== null ? "<a href=\"" + url + "\" target=\"_blank\" >" + id.identifier + "</a>" : id.identifier) + "\n              " + (id.qualifier ? '</b>' : '') + "\n            </div>";
    };
    TableFactoryService.prototype.initTopSlider = function (tableId) {
        var bodyScroll = $("#" + tableId).parent();
        var headScroll = bodyScroll.siblings('.dataTables_scrollHead');
        bodyScroll.addClass('scrollbar');
        headScroll.addClass('scrollbar');
        var scrolling = false;
        headScroll.on('scroll', function () {
            if (!scrolling) {
                scrolling = true;
                bodyScroll.scrollLeft(headScroll.scrollLeft());
            }
            else {
                scrolling = false;
            }
        });
        bodyScroll.off('scroll');
        bodyScroll.on('scroll', function () {
            if (!scrolling) {
                scrolling = true;
                headScroll.scrollLeft(bodyScroll.scrollLeft());
            }
            else {
                scrolling = false;
            }
        });
    };
    TableFactoryService.prototype.makeTableHeaderSticky = function () {
        $('div.dataTables_scrollBody').css('position', 'static');
        var filterBar = $('#filters-bar');
        $('div.dataTables_scrollHead')
            .css('position', 'sticky')
            .css('top', this.isScreenSize('large') && filterBar.length === 1 ? filterBar.outerHeight(true) + 1 + 'px' : '0')
            .css('box-shadow', '0 6px 7px -2px #0000005c')
            .css('z-index', '2');
    };
    TableFactoryService.prototype.isScreenSize = function (size) {
        return window.getComputedStyle(document.body, ':after').getPropertyValue('content').slice(1, -1) === size;
    };
    TableFactoryService.prototype.initShadowBorder = function (tableId) {
        var table = $('#' + tableId);
        var scrollArea = table.parents('div.dataTables_scroll');
        scrollArea.append($('<div class="shadow-left" style="display: none"></div>'));
        scrollArea.append($('<div class="shadow-right"></div>'));
        table.parent('.dataTables_scrollBody').scroll(function (e) {
            if (e.target.scrollLeft <= 10) {
                $('.shadow-left').hide();
            }
            else {
                $('.shadow-left').show();
            }
            if (e.target.scrollWidth - (e.target.clientWidth + e.target.scrollLeft) <= 10) {
                $('.shadow-right').hide();
            }
            else {
                $('.shadow-right').show();
            }
        });
    };
    TableFactoryService.prototype.enableShowButtons = function () {
        $(document).off('click', 'button.showMore', TableFactoryService_1.toggleShowMoreLess);
        $(document).on('click', 'button.showMore', TableFactoryService_1.toggleShowMoreLess);
    };
    TableFactoryService.prototype.enableCollapsedPanels = function () {
        $(document).off('click', '.collapse-header', TableFactoryService_1.toggleCollapsedPanels);
        $(document).on('click', '.collapse-header', TableFactoryService_1.toggleCollapsedPanels);
    };
    var TableFactoryService_1;
    TableFactoryService.databaseToAccess = new Map([
        ['uniprotkb', {
                fancyName: 'UniProt',
                getURL: function (id) { return "https://www.uniprot.org/uniprot/" + id; },
                color: 'rgba(0,111,155,1.0)',
                backColor: 'rgba(143,195,195,0.1)'
            }],
        ['intact', {
                fancyName: 'IntAct',
                getURL: function (id) { return null; },
                color: 'rgba(104,41,124,1.0)'
            }],
        ['chebi', {
                fancyName: 'ChEBI',
                getURL: function (id) { return "https://www.ebi.ac.uk/chebi/searchId.do?chebiId=" + id; },
                color: 'rgba(8,80,131,1.0)',
                backColor: 'rgba(212,207,50, 0.5)'
            }],
        ['chembl', {
                fancyName: 'ChEMBL',
                getURL: function (id) { return "https://www.ebi.ac.uk/chembl/compound_report_card/" + id; },
                color: 'rgba(204,58,93,1.0)',
                backColor: 'rgba(37,159,163,0.5)'
            }],
        ['dip', {
                fancyName: 'DIP',
                getURL: function (id) { return "https://dip.doe-mbi.ucla.edu/dip/DIPview.cgi?PK=" + id.replace('DIP-', '').slice(0, -1); },
                color: 'rgba(58,138,171,1.0)',
                backColor: 'rgba(246,242,49,0.5)'
            }],
        ['refseq', {
                fancyName: 'RefSeq',
                getURL: function (id) { return "https://www.ncbi.nlm.nih.gov/refseq/?term=" + id + "+AND+srcdb_refseq%5Bprop%5D"; },
                color: 'rgba(51,102,153,1.0)'
            }],
        ['genbank_protein_gi', {
                fancyName: 'GenBank Protein',
                getURL: function (id) { return "https://www.ncbi.nlm.nih.gov/protein/" + id; },
                color: 'rgba(51,102,153,1.0)'
            }],
        ['ensembl', {
                fancyName: 'Ensembl',
                getURL: function (id) { return "http://www.ensembl.org/id/" + id; },
                color: 'rgba(164,0,0,1.0)',
                backColor: 'rgba(85,136,221,0.5)'
            }],
        ['matrixdb', {
                fancyName: 'MatrixDB',
                getURL: function (id) { return "http://matrixdb.univ-lyon1.fr/cgi-bin/current/newPort?type=biomolecule&value=" + id; },
                color: 'rgb(58,84,128)',
                backColor: 'rgba(154,181,228,0.5)'
            }],
        ['rnacentral', {
                fancyName: 'RNA central',
                getURL: function (id) { return "https://rnacentral.org/rna/" + id; },
                color: 'rgba(0,144,188,1.0)',
                backColor: 'rgba(188,216,224,0.5)'
            }],
        ['hgnc', {
                fancyName: 'HGNC',
                getURL: function (id) { return "https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/" + id; },
                color: 'rgba(0,50,102,1.0)'
            }],
        ['complex portal', {
                fancyName: 'Complex Portal',
                getURL: function (id) { return "https://www.ebi.ac.uk/complexportal/complex/" + id; },
                color: 'rgba(0,157,68,1.0)'
            }],
        ['mint', {
                fancyName: 'MINT',
                getURL: function (id) { return "https://mint.bio.uniroma2.it/index.php/results-interactions/?id=" + id; },
                color: 'rgba(9,118,0,1.0)'
            }],
        ['interpro', {
                fancyName: 'InterPro',
                getURL: function (id) { return "https://www.ebi.ac.uk/interpro/entry/InterPro/" + id; },
                color: 'rgba(46,124,149,1.0)',
                backColor: 'rgba(171,214,186,0.5)'
            }],
        ['uniparc', {
                fancyName: 'UniParc',
                getURL: function (id) { return "https://www.uniprot.org/uniparc/" + id + "?sort=score"; },
                color: 'rgba(219,184,186,1.0)'
            }],
        ['intenz', {
                fancyName: 'IntEnz',
                getURL: function (id) { return "https://www.ebi.ac.uk/intenz/query?cmd=Search&q=" + id; },
                color: 'rgba(83,136,136,1.0)'
            }]
    ]);
    TableFactoryService.toggleShowMoreLess = function (event) {
        var button = $(event.target);
        var buttonText = button.text();
        if (buttonText.includes('more')) {
            button.text(buttonText.replace('more', 'less'));
        }
        else {
            button.text(buttonText.replace('less', 'more'));
        }
        var toToggle = button.prev('.show-more-content').children('.to-hide');
        toToggle.slideToggle(toToggle.height());
    };
    TableFactoryService.toggleCollapsedPanels = function (event) {
        var panel = $(event.target).next('.collapse-panel');
        if (panel.length === 0) {
            panel = $(event.target).parent().next('.collapse-panel');
        }
        panel.slideToggle({ duration: panel.height(), easing: 'linear' });
        panel.prev('.collapse-header').toggleClass('collapsed');
    };
    TableFactoryService.ctorParameters = function () { return []; };
    TableFactoryService = TableFactoryService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
    ], TableFactoryService);
    return TableFactoryService;
}());



/***/ }),

/***/ 68849:
/*!***************************************************!*\
  !*** ./src/app/interactomes/interactome.model.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interactome": function() { return /* binding */ Interactome; }
/* harmony export */ });
var Interactome = /** @class */ (function () {
    function Interactome(name, symbol, psi25, psi30, taxid) {
        this.name = name;
        this.symbol = symbol;
        this.psi25 = psi25;
        this.psi30 = psi30;
        this.taxid = taxid;
        var split = this.name.split(/[()]/);
        this.scientificName = split[0];
        this.nameDetails = split[1];
    }
    return Interactome;
}());



/***/ }),

/***/ 92764:
/*!*******************************************************************!*\
  !*** ./src/app/interactomes/interactome/interactome.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractomeComponent": function() { return /* binding */ InteractomeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactome_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactome.component.html */ 27008);
/* harmony import */ var _interactome_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactome.component.css */ 16507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home-dashboard/search/service/search.service */ 47395);






var InteractomeComponent = /** @class */ (function () {
    function InteractomeComponent(search) {
        this.search = search;
    }
    InteractomeComponent.prototype.ngOnInit = function () {
    };
    InteractomeComponent.prototype.goToInteractomePSI25 = function () {
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_psi25_url + '/species/' + this.interactome.psi25 + '.zip', '_blank');
    };
    InteractomeComponent.prototype.goToInteractomePSI30 = function () {
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_psi30_url + '/species/' + this.interactome.psi30 + '.zip', '_blank');
    };
    Object.defineProperty(InteractomeComponent.prototype, "interactome", {
        get: function () {
            return this._interactome;
        },
        set: function (value) {
            this._interactome = value;
        },
        enumerable: false,
        configurable: true
    });
    InteractomeComponent.ctorParameters = function () { return [
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__.SearchService }
    ]; };
    InteractomeComponent.propDecorators = {
        interactome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
    };
    InteractomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-interactome',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactome_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactome_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractomeComponent);
    return InteractomeComponent;
}());



/***/ }),

/***/ 43896:
/*!********************************************************!*\
  !*** ./src/app/interactomes/interactomes-constants.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractomesConstants": function() { return /* binding */ InteractomesConstants; }
/* harmony export */ });
/* harmony import */ var _interactome_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactome.model */ 68849);

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
var InteractomesConstants = /** @class */ (function () {
    function InteractomesConstants() {
    }
    InteractomesConstants.interactomes = [
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Homo sapiens', 'H', 'human', 'human', 9606),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Saccharomyces cerevisiae', 'Y', 'yeast', 'yeast', 559292),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Drosophila melanogaster (Fruit fly)', 'F', 'drome', 'drome', 7227),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Caenorhabditis elegans', 'W', 'caeel', 'caeel', 6239),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Arabidopsis thaliana (Mouse-ear cress)', 'B', 'arath', 'arath', 3702),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Mus musculus', 'M', 'mouse', 'mouse', 10090),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Escherichia coli (strain K12)', 'L', 'ecoli', 'ecoli', 83333),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Campylobacter jejuni subsp. jejuni serotype O:2 (strain NCTC 11168)', 'L', 'camje', 'camje', 192222),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Rattus norvegicus (Rat)', 'R', 'rat', 'rat', 10116),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Treponema pallidum (strain Nichols)', 'L', 'trepa', 'trepa', 243276),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Synechocystis sp. (strain PCC 6803 / Kazusa)', 'Y', 'syny3', 'syny3', 1111708),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Plasmodium falciparum (isolate 3D7)', '@', 'plaf7', 'plaf7', 36329),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Helicobacter pylori', 'L', 'helpy', 'helpy', 85962),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Schizosaccharomyces pombe (strain ATCC 38366 / 972)', 'Y', 'schpo', 'schpo', 284812),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('Bacillus subtilis', 'L', 'bacsu', 'bacsu', 224308),
        new _interactome_model__WEBPACK_IMPORTED_MODULE_0__.Interactome('SARS-CoV-2', 'v', 'SARS-CoV-2', 'SARS-CoV-2', 2697049),
        // new Interactome('Desulfovibrio vulgaris (strain Hildenborough / ATCC 29579 / NCIMB 8303)', 'L', 'desvh', 'desvh', 882),
    ];
    return InteractomesConstants;
}());



/***/ }),

/***/ 18691:
/*!********************************************************!*\
  !*** ./src/app/interactomes/interactomes.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InteractomesComponent": function() { return /* binding */ InteractomesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactomes_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./interactomes.component.html */ 9595);
/* harmony import */ var _interactomes_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactomes.component.css */ 59427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _interactomes_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactomes-constants */ 43896);






var InteractomesComponent = /** @class */ (function () {
    function InteractomesComponent(titleService) {
        this.titleService = titleService;
        this._interactomes = [];
        this.interactomes = _interactomes_constants__WEBPACK_IMPORTED_MODULE_2__.InteractomesConstants.interactomes;
    }
    InteractomesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Interactomes');
    };
    Object.defineProperty(InteractomesComponent.prototype, "interactomes", {
        get: function () {
            return this._interactomes;
        },
        set: function (value) {
            this._interactomes = value;
        },
        enumerable: false,
        configurable: true
    });
    InteractomesComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    InteractomesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-interactomes',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_interactomes_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_interactomes_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], InteractomesComponent);
    return InteractomesComponent;
}());



/***/ }),

/***/ 12079:
/*!***************************************************************!*\
  !*** ./src/app/layout/contributors/contributors.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContributorsComponent": function() { return /* binding */ ContributorsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contributors_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contributors.component.html */ 31728);
/* harmony import */ var _contributors_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contributors.component.css */ 68872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var ContributorsComponent = /** @class */ (function () {
    function ContributorsComponent() {
    }
    ContributorsComponent.prototype.ngOnInit = function () {
        $('ip-contributors').foundation();
    };
    ContributorsComponent.ctorParameters = function () { return []; };
    ContributorsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-contributors',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contributors_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_contributors_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ContributorsComponent);
    return ContributorsComponent;
}());



/***/ }),

/***/ 18381:
/*!**************************************************************************!*\
  !*** ./src/app/layout/header/compact-header/compact-header.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompactHeaderComponent": function() { return /* binding */ CompactHeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_compact_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./compact-header.component.html */ 4430);
/* harmony import */ var _compact_header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compact-header.component.css */ 22428);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var CompactHeaderComponent = /** @class */ (function () {
    function CompactHeaderComponent() {
    }
    CompactHeaderComponent.prototype.ngOnInit = function () {
        $('ip-compact-header').foundation();
    };
    CompactHeaderComponent.ctorParameters = function () { return []; };
    CompactHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-compact-header',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_compact_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_compact_header_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], CompactHeaderComponent);
    return CompactHeaderComponent;
}());



/***/ }),

/***/ 11718:
/*!****************************************************************************!*\
  !*** ./src/app/layout/header/expanded-header/expanded-header.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandedHeaderComponent": function() { return /* binding */ ExpandedHeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_expanded_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./expanded-header.component.html */ 65554);
/* harmony import */ var _expanded_header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expanded-header.component.css */ 27518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var ExpandedHeaderComponent = /** @class */ (function () {
    function ExpandedHeaderComponent() {
    }
    ExpandedHeaderComponent.prototype.ngOnInit = function () {
        $('ip-expanded-header').foundation();
    };
    ExpandedHeaderComponent.ctorParameters = function () { return []; };
    ExpandedHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-expanded-header',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_expanded_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_expanded_header_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ExpandedHeaderComponent);
    return ExpandedHeaderComponent;
}());



/***/ }),

/***/ 61071:
/*!**********************************************************************!*\
  !*** ./src/app/layout/header/local-search/local-search.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalSearchComponent": function() { return /* binding */ LocalSearchComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_local_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./local-search.component.html */ 95674);
/* harmony import */ var _local_search_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-search.component.css */ 33736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home-dashboard/search/service/search.service */ 47395);







var LocalSearchComponent = /** @class */ (function () {
    function LocalSearchComponent(location, router, activatedRoute, searchService) {
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.searchService = searchService;
    }
    LocalSearchComponent.prototype.ngOnInit = function () {
        $('ip-local-search').foundation();
    };
    LocalSearchComponent.prototype.ngAfterViewInit = function () {
        this.searchService.searchSuggestions($('#localSearchBox .typeahead'));
    };
    LocalSearchComponent.prototype.search = function (query, typeOfButton) {
        if (query) {
            this.searchService.search(query);
            this.query.nativeElement.blur();
            if (typeOfButton === 'enter' || typeOfButton === 'button') {
                this.searchService.title = query;
            }
        }
    };
    LocalSearchComponent.prototype.hasRoute = function (route) {
        return this.router.url.includes(route);
    };
    LocalSearchComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
        { type: _home_dashboard_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__.SearchService }
    ]; };
    LocalSearchComponent.propDecorators = {
        query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['query', { static: true },] }]
    };
    LocalSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-local-search',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_local_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_local_search_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], LocalSearchComponent);
    return LocalSearchComponent;
}());



/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": function() { return /* binding */ LayoutModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _header_compact_header_compact_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/compact-header/compact-header.component */ 18381);
/* harmony import */ var _header_expanded_header_expanded_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/expanded-header/expanded-header.component */ 11718);
/* harmony import */ var _local_footer_local_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-footer/local-footer.component */ 51986);
/* harmony import */ var _contributors_contributors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contributors/contributors.component */ 12079);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-indicators/progress-bar/progress-bar.component */ 31599);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _header_local_search_local_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/local-search/local-search.component */ 61071);











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__.MatProgressBarModule
            ],
            declarations: [
                _header_local_search_local_search_component__WEBPACK_IMPORTED_MODULE_5__.LocalSearchComponent,
                _loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarComponent,
                _header_compact_header_compact_header_component__WEBPACK_IMPORTED_MODULE_0__.CompactHeaderComponent,
                _header_expanded_header_expanded_header_component__WEBPACK_IMPORTED_MODULE_1__.ExpandedHeaderComponent,
                _local_footer_local_footer_component__WEBPACK_IMPORTED_MODULE_2__.LocalFooterComponent,
                _contributors_contributors_component__WEBPACK_IMPORTED_MODULE_3__.ContributorsComponent
            ],
            exports: [
                _loading_indicators_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__.ProgressBarComponent,
                _header_compact_header_compact_header_component__WEBPACK_IMPORTED_MODULE_0__.CompactHeaderComponent,
                _header_expanded_header_expanded_header_component__WEBPACK_IMPORTED_MODULE_1__.ExpandedHeaderComponent,
                _local_footer_local_footer_component__WEBPACK_IMPORTED_MODULE_2__.LocalFooterComponent,
                _contributors_contributors_component__WEBPACK_IMPORTED_MODULE_3__.ContributorsComponent,
                _header_local_search_local_search_component__WEBPACK_IMPORTED_MODULE_5__.LocalSearchComponent
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ 31599:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/loading-indicators/progress-bar/progress-bar.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": function() { return /* binding */ ProgressBarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./progress-bar.component.html */ 35774);
/* harmony import */ var _progress_bar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-bar.component.css */ 70792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressBarComponent_1.show = true;
    }
    ProgressBarComponent_1 = ProgressBarComponent;
    ProgressBarComponent.display = function () {
        ProgressBarComponent_1.show = true;
    };
    ProgressBarComponent.hide = function () {
        setTimeout(function () {
            ProgressBarComponent_1.show = false;
        }, 1000);
    };
    ProgressBarComponent.hideWithoutDelay = function () {
        ProgressBarComponent_1.show = false;
    };
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProgressBarComponent.prototype, "isDisplayed", {
        get: function () {
            return ProgressBarComponent_1.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    var ProgressBarComponent_1;
    ProgressBarComponent.ctorParameters = function () { return []; };
    ProgressBarComponent = ProgressBarComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-progress-bar',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_progress_bar_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ 16028:
/*!******************************************************************************************!*\
  !*** ./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressSpinnerComponent": function() { return /* binding */ ProgressSpinnerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./progress-spinner.component.html */ 13999);
/* harmony import */ var _progress_spinner_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-spinner.component.css */ 76550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var ProgressSpinnerComponent = /** @class */ (function () {
    function ProgressSpinnerComponent() {
        this._color = 'primary';
        this._mode = 'indeterminate';
        ProgressSpinnerComponent_1.show = false;
    }
    ProgressSpinnerComponent_1 = ProgressSpinnerComponent;
    ProgressSpinnerComponent.display = function () {
        ProgressSpinnerComponent_1.show = true;
    };
    ProgressSpinnerComponent.hide = function () {
        setTimeout(function () {
            ProgressSpinnerComponent_1.show = false;
        }, 1000);
    };
    ProgressSpinnerComponent.prototype.ngOnInit = function () {
        var context = this;
        setTimeout(function () {
            context._takesLonger = true;
        }, 5000);
    };
    Object.defineProperty(ProgressSpinnerComponent.prototype, "isDisplayed", {
        get: function () {
            return ProgressSpinnerComponent_1.show;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (value) {
            this._query = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProgressSpinnerComponent.prototype, "takesLonger", {
        get: function () {
            return this._takesLonger;
        },
        enumerable: false,
        configurable: true
    });
    var ProgressSpinnerComponent_1;
    ProgressSpinnerComponent.ctorParameters = function () { return []; };
    ProgressSpinnerComponent.propDecorators = {
        query: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    ProgressSpinnerComponent = ProgressSpinnerComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-progress-spinner',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_progress_spinner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_progress_spinner_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ProgressSpinnerComponent);
    return ProgressSpinnerComponent;
}());



/***/ }),

/***/ 65236:
/*!***************************************************************************************!*\
  !*** ./src/app/layout/loading-indicators/progress-spinner/progress-spinner.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressSpinnerModule": function() { return /* binding */ ProgressSpinnerModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-spinner.component */ 16028);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);





var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__.MatProgressSpinnerModule
            ],
            declarations: [
                _progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent
            ],
            exports: [
                _progress_spinner_component__WEBPACK_IMPORTED_MODULE_0__.ProgressSpinnerComponent
            ]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());



/***/ }),

/***/ 51986:
/*!***************************************************************!*\
  !*** ./src/app/layout/local-footer/local-footer.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalFooterComponent": function() { return /* binding */ LocalFooterComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_local_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./local-footer.component.html */ 3488);
/* harmony import */ var _local_footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-footer.component.css */ 95498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var LocalFooterComponent = /** @class */ (function () {
    function LocalFooterComponent() {
    }
    LocalFooterComponent.prototype.ngOnInit = function () {
        $('ip-local-footer').foundation();
    };
    LocalFooterComponent.ctorParameters = function () { return []; };
    LocalFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-local-footer',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_local_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_local_footer_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], LocalFooterComponent);
    return LocalFooterComponent;
}());



/***/ }),

/***/ 7249:
/*!*****************************************************!*\
  !*** ./src/app/navigation/about/about.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./about.component.html */ 68809);
/* harmony import */ var _about_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css */ 70332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 92340);






var AboutComponent = /** @class */ (function () {
    function AboutComponent(titleService) {
        this.titleService = titleService;
        this.overview = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/overview.md';
        this.collaborators = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/collaborators.md';
        this.funding = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/funding.md';
        this.statistics = "# Statistics"; // Temporary until we have the statistics page
        this.publications = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/publications.md';
        this.license_privacy = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/license-privacy.md';
        this.conceptual_design = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/conceptual-design.md';
        this.sab = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/scientific-advisory-board.md';
        this.cite_us = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'about/cite-us.md';
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - About');
        $('ip-about').foundation();
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-about',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_about_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_about_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ 82109:
/*!***************************************************************************************!*\
  !*** ./src/app/navigation/documentation/data-submission/data-submission.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSubmissionComponent": function() { return /* binding */ DataSubmissionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_data_submission_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./data-submission.component.html */ 43633);
/* harmony import */ var _data_submission_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-submission.component.css */ 67465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);






var DataSubmissionComponent = /** @class */ (function () {
    function DataSubmissionComponent(titleService) {
        this.titleService = titleService;
        this.how_to_submit = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/how-to-submit.md';
    }
    DataSubmissionComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Data Submission');
        $('ip-datasets').foundation();
    };
    DataSubmissionComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    DataSubmissionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-data-submission',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_data_submission_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_data_submission_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DataSubmissionComponent);
    return DataSubmissionComponent;
}());



/***/ }),

/***/ 91609:
/*!*************************************************************************!*\
  !*** ./src/app/navigation/documentation/datasets/datasets.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetsComponent": function() { return /* binding */ DatasetsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_datasets_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./datasets.component.html */ 90467);
/* harmony import */ var _datasets_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasets.component.css */ 7230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);






var DatasetsComponent = /** @class */ (function () {
    function DatasetsComponent(titleService) {
        this.titleService = titleService;
        this.dataset = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/datasets.md';
    }
    DatasetsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Datasets');
        $('ip-datasets').foundation();
    };
    DatasetsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    DatasetsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-datasets',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_datasets_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_datasets_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DatasetsComponent);
    return DatasetsComponent;
}());



/***/ }),

/***/ 61683:
/*!**************************************************************************!*\
  !*** ./src/app/navigation/documentation/documentation-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationRoutingModule": function() { return /* binding */ DocumentationRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation.component */ 75421);
/* harmony import */ var _technical_corner_technical_corner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technical-corner/technical-corner.component */ 27218);
/* harmony import */ var _data_submission_data_submission_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-submission/data-submission.component */ 82109);
/* harmony import */ var _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasets/datasets.component */ 91609);
/* harmony import */ var _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-guide/user-guide.component */ 75368);








var documentationRoutes = [
    {
        path: 'documentation',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/data_submission',
        component: _data_submission_data_submission_component__WEBPACK_IMPORTED_MODULE_2__.DataSubmissionComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/user-guide',
        component: _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_4__.UserGuideComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/technical_corner',
        component: _technical_corner_technical_corner_component__WEBPACK_IMPORTED_MODULE_1__.TechnicalCornerComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'documentation/datasets',
        component: _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_3__.DatasetsComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
];
var DocumentationRoutingModule = /** @class */ (function () {
    function DocumentationRoutingModule() {
    }
    DocumentationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(documentationRoutes)],
        })
    ], DocumentationRoutingModule);
    return DocumentationRoutingModule;
}());



/***/ }),

/***/ 75421:
/*!*********************************************************************!*\
  !*** ./src/app/navigation/documentation/documentation.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationComponent": function() { return /* binding */ DocumentationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_documentation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./documentation.component.html */ 5090);
/* harmony import */ var _documentation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation.component.css */ 83791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);





var DocumentationComponent = /** @class */ (function () {
    function DocumentationComponent(titleService) {
        this.titleService = titleService;
    }
    DocumentationComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Documentation');
        $('ip-documentation').foundation();
    };
    DocumentationComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title }
    ]; };
    DocumentationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-documentation',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_documentation_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_documentation_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ 62013:
/*!******************************************************************!*\
  !*** ./src/app/navigation/documentation/documentation.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationModule": function() { return /* binding */ DocumentationModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation.component */ 75421);
/* harmony import */ var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation-routing.module */ 61683);
/* harmony import */ var _technical_corner_technical_corner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technical-corner/technical-corner.component */ 27218);
/* harmony import */ var _data_submission_data_submission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-submission/data-submission.component */ 82109);
/* harmony import */ var _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datasets/datasets.component */ 91609);
/* harmony import */ var _shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/markdown/markdown.module */ 8821);
/* harmony import */ var _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-guide/user-guide.component */ 75368);










var DocumentationModule = /** @class */ (function () {
    function DocumentationModule() {
    }
    DocumentationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
                _documentation_routing_module__WEBPACK_IMPORTED_MODULE_1__.DocumentationRoutingModule,
                _shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_5__.MarkdownModule,
            ],
            declarations: [
                _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent,
                _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_6__.UserGuideComponent,
                _data_submission_data_submission_component__WEBPACK_IMPORTED_MODULE_3__.DataSubmissionComponent,
                _technical_corner_technical_corner_component__WEBPACK_IMPORTED_MODULE_2__.TechnicalCornerComponent,
                _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_4__.DatasetsComponent
            ]
        })
    ], DocumentationModule);
    return DocumentationModule;
}());



/***/ }),

/***/ 36480:
/*!********************************************************************************!*\
  !*** ./src/app/navigation/documentation/shared/markdown/markdown.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownComponent": function() { return /* binding */ MarkdownComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_markdown_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./markdown.component.html */ 25103);
/* harmony import */ var _markdown_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown.component.css */ 94518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _service_markdown_renderer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/markdown-renderer.service */ 17301);






var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(md, sanitizer) {
        this.md = md;
        this.sanitizer = sanitizer;
    }
    MarkdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data) {
            this.output = this.sanitizer.bypassSecurityTrustHtml(this.md.render(this.data));
        }
        else if (this.src) {
            fetch(this.src)
                .then(function (src) { return src.text(); })
                .then(function (content) { return _this.md.render(content.replace(/(..\/)?\.gitbook\/assets\//g, "assets/images/gitbook/")); })
                .then(function (value) { return _this.output = _this.sanitizer.bypassSecurityTrustHtml(value); });
        }
    };
    MarkdownComponent.ctorParameters = function () { return [
        { type: _service_markdown_renderer_service__WEBPACK_IMPORTED_MODULE_2__.MarkdownRendererService },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer }
    ]; };
    MarkdownComponent.propDecorators = {
        src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
    };
    MarkdownComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-markdown',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_markdown_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_markdown_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], MarkdownComponent);
    return MarkdownComponent;
}());



/***/ }),

/***/ 8821:
/*!*****************************************************************************!*\
  !*** ./src/app/navigation/documentation/shared/markdown/markdown.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownModule": function() { return /* binding */ MarkdownModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _markdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markdown.component */ 36480);
/* harmony import */ var _service_markdown_renderer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/markdown-renderer.service */ 17301);





var MarkdownModule = /** @class */ (function () {
    function MarkdownModule() {
    }
    MarkdownModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
            ],
            declarations: [
                _markdown_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownComponent
            ],
            exports: [
                _markdown_component__WEBPACK_IMPORTED_MODULE_0__.MarkdownComponent
            ],
            providers: [
                _service_markdown_renderer_service__WEBPACK_IMPORTED_MODULE_1__.MarkdownRendererService
            ]
        })
    ], MarkdownModule);
    return MarkdownModule;
}());



/***/ }),

/***/ 17301:
/*!***********************************************************************************************!*\
  !*** ./src/app/navigation/documentation/shared/markdown/service/markdown-renderer.service.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkdownRendererService": function() { return /* binding */ MarkdownRendererService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ 13506);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iktakahiro_markdown_it_katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iktakahiro/markdown-it-katex */ 51596);
/* harmony import */ var _iktakahiro_markdown_it_katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iktakahiro_markdown_it_katex__WEBPACK_IMPORTED_MODULE_1__);




var MarkdownRendererService = /** @class */ (function () {
    function MarkdownRendererService() {
        this.md = new markdown_it__WEBPACK_IMPORTED_MODULE_0__();
        this.md.use(_iktakahiro_markdown_it_katex__WEBPACK_IMPORTED_MODULE_1__);
    }
    MarkdownRendererService.prototype.render = function (markdown) {
        return this.md.render(markdown);
    };
    MarkdownRendererService.ctorParameters = function () { return []; };
    MarkdownRendererService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
    ], MarkdownRendererService);
    return MarkdownRendererService;
}());



/***/ }),

/***/ 27218:
/*!*****************************************************************************************!*\
  !*** ./src/app/navigation/documentation/technical-corner/technical-corner.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechnicalCornerComponent": function() { return /* binding */ TechnicalCornerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_technical_corner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./technical-corner.component.html */ 60504);
/* harmony import */ var _technical_corner_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./technical-corner.component.css */ 22751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);






var TechnicalCornerComponent = /** @class */ (function () {
    function TechnicalCornerComponent(titleService) {
        this.titleService = titleService;
        this.apis = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/technical-corner/apis.md';
        this.source_code = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/technical-corner/source-code.md';
        this.tools = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/technical-corner/tools.md';
    }
    TechnicalCornerComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Technical Corner');
        $('ip-technical-corner').foundation();
    };
    TechnicalCornerComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    TechnicalCornerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-technical-corner',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_technical_corner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_technical_corner_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], TechnicalCornerComponent);
    return TechnicalCornerComponent;
}());



/***/ }),

/***/ 75368:
/*!*****************************************************************************!*\
  !*** ./src/app/navigation/documentation/user-guide/user-guide.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuideComponent": function() { return /* binding */ UserGuideComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_guide_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./user-guide.component.html */ 94503);
/* harmony import */ var _user_guide_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-guide.component.css */ 85007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);






var UserGuideComponent = /** @class */ (function () {
    function UserGuideComponent(titleService) {
        this.titleService = titleService;
        this.data_sources = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/data-sources-and-annotation-practices.md';
        this.usage = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/searching-intact.md';
        this.expansion_method = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/expansion-method.md';
        this.interaction_scoring = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/interaction-scoring.md';
        this.definitions_formats = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/definitions-and-formats.md';
        this.data_export = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/data-export.md';
        this.access_intact = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/access-intact.md';
        this.curation_manual = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'documentation/user-guide/curation-manual.md';
    }
    UserGuideComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - User Guide');
        $('ip-user-guide').foundation();
    };
    UserGuideComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    UserGuideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-user-guide',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_user_guide_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_user_guide_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], UserGuideComponent);
    return UserGuideComponent;
}());



/***/ }),

/***/ 36155:
/*!********************************************************************!*\
  !*** ./src/app/navigation/download/datasets/datasets.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatasetsComponent": function() { return /* binding */ DatasetsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_datasets_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./datasets.component.html */ 43536);
/* harmony import */ var _datasets_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasets.component.css */ 71276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);






var DatasetsComponent = /** @class */ (function () {
    function DatasetsComponent(titleService) {
        this.titleService = titleService;
        this.curated = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'download/curated-datasets.md';
        this.computationally = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'download/computational-datasets.md';
        this.species = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'download/species-based-datasets.md';
        this.mutations = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'download/mutations.md';
    }
    DatasetsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Datasets');
        $('ip-datasets').foundation();
    };
    DatasetsComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    DatasetsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-datasets',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_datasets_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_datasets_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DatasetsComponent);
    return DatasetsComponent;
}());



/***/ }),

/***/ 2772:
/*!****************************************************************!*\
  !*** ./src/app/navigation/download/download-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadRoutingModule": function() { return /* binding */ DownloadRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.component */ 39853);
/* harmony import */ var _ftp_ftp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ftp/ftp.component */ 62998);
/* harmony import */ var _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datasets/datasets.component */ 36155);






var downloadRoutes = [
    {
        path: 'download',
        component: _download_component__WEBPACK_IMPORTED_MODULE_0__.DownloadComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'download/ftp',
        component: _ftp_ftp_component__WEBPACK_IMPORTED_MODULE_1__.FTPComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
    {
        path: 'download/datasets',
        component: _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_2__.DatasetsComponent,
        data: { showCompactHeader: false, showFooter: true }
    },
];
var DownloadRoutingModule = /** @class */ (function () {
    function DownloadRoutingModule() {
    }
    DownloadRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(downloadRoutes)],
        })
    ], DownloadRoutingModule);
    return DownloadRoutingModule;
}());



/***/ }),

/***/ 39853:
/*!***********************************************************!*\
  !*** ./src/app/navigation/download/download.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadComponent": function() { return /* binding */ DownloadComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./download.component.html */ 70974);
/* harmony import */ var _download_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.component.css */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 71570);





var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(titleService) {
        this.titleService = titleService;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Download');
        $('ip-download').foundation();
    };
    DownloadComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title }
    ]; };
    DownloadComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
            selector: 'ip-download',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_download_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_download_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ 3340:
/*!********************************************************!*\
  !*** ./src/app/navigation/download/download.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadModule": function() { return /* binding */ DownloadModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.component */ 39853);
/* harmony import */ var _download_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download-routing.module */ 2772);
/* harmony import */ var _ftp_ftp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ftp/ftp.component */ 62998);
/* harmony import */ var _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datasets/datasets.component */ 36155);
/* harmony import */ var _documentation_shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../documentation/shared/markdown/markdown.module */ 8821);








var DownloadModule = /** @class */ (function () {
    function DownloadModule() {
    }
    DownloadModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _download_routing_module__WEBPACK_IMPORTED_MODULE_1__.DownloadRoutingModule,
                _documentation_shared_markdown_markdown_module__WEBPACK_IMPORTED_MODULE_4__.MarkdownModule,
            ],
            declarations: [
                _download_component__WEBPACK_IMPORTED_MODULE_0__.DownloadComponent,
                _ftp_ftp_component__WEBPACK_IMPORTED_MODULE_2__.FTPComponent,
                _datasets_datasets_component__WEBPACK_IMPORTED_MODULE_3__.DatasetsComponent
            ]
        })
    ], DownloadModule);
    return DownloadModule;
}());



/***/ }),

/***/ 62998:
/*!**********************************************************!*\
  !*** ./src/app/navigation/download/ftp/ftp.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FTPComponent": function() { return /* binding */ FTPComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ftp_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ftp.component.html */ 71880);
/* harmony import */ var _ftp_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ftp.component.css */ 32713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);






var FTPComponent = /** @class */ (function () {
    function FTPComponent(titleService) {
        this.titleService = titleService;
        this.ftp = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.intact_portal_documentation_url + 'download/ftp.md';
    }
    FTPComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IntAct - Download');
        $('ip-download').foundation();
    };
    FTPComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
    ]; };
    FTPComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-download',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ftp_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_ftp_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], FTPComponent);
    return FTPComponent;
}());



/***/ }),

/***/ 22619:
/*!***********************************************************!*\
  !*** ./src/app/navigation/redirect/redirect.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectComponent": function() { return /* binding */ RedirectComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_redirect_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./redirect.component.html */ 98660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 99758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 90490);






var RedirectComponent = /** @class */ (function () {
    function RedirectComponent(route) {
        this.route = route;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.zip)(this.route.data, this.route.params, this.route.queryParams).subscribe(function (_a) {
            var e_1, _b;
            var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(_a, 3), href = _c[0], params = _c[1], queryParams = _c[2];
            _this.href = href.externalUrl;
            try {
                for (var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(Object.keys(params)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var param = _e.value;
                    _this.href = _this.href.replace(':' + param, params[param]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var paramList = Object.keys(queryParams);
            if (paramList.length > 0) {
                _this.href += "?" + paramList.map(function (param) { return param + "=" + queryParams[param]; }).join('&');
            }
            window.location.href = _this.href;
        });
    };
    RedirectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
    ]; };
    RedirectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)(),
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
            selector: 'ip-redirect',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_redirect_component_html__WEBPACK_IMPORTED_MODULE_0__.default
        })
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ 58333:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/column-toggle/column-toggle.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnToggleComponent": function() { return /* binding */ ColumnToggleComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_column_toggle_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./column-toggle.component.html */ 17991);
/* harmony import */ var _column_toggle_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-toggle.component.css */ 16591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _utils_foundation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/foundation-utils */ 89935);





var ColumnToggleComponent = /** @class */ (function () {
    function ColumnToggleComponent(cdRef) {
        this.cdRef = cdRef;
        this.columnSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ColumnToggleComponent.prototype.ngOnInit = function () {
        this.initColumnVisibility();
    };
    ColumnToggleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.isTabActive && changes.isTabActive.firstChange && changes.isTabActive.currentValue) {
            this.initColumnVisibility();
        }
    };
    ColumnToggleComponent.prototype.initColumnVisibility = function () {
        var columnView = this.columnView + '_columns';
        // Initialize columns that are already selected to view
        if (localStorage.getItem(columnView) != null) {
            this.columnsSelected = JSON.parse(localStorage.getItem(this.columnView + '_columns'));
        }
        else {
            this.columnsSelected = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)(this.columns)).filter(function (column) { return column.hiddenByDefault; }).map(function (column) { return column.title; });
        }
        // Hide the columns from the table that are already selected to hide
        var columnsToHide = this.columnsSelected;
        this.dataTable.columns().every(function () {
            var title = $(this.header()).text();
            this.visible(columnsToHide.indexOf(title) < 0);
        });
    };
    ColumnToggleComponent.prototype.ngAfterViewInit = function () {
        this.cdRef.detectChanges();
        this.showHideColumns();
        _utils_foundation_utils__WEBPACK_IMPORTED_MODULE_2__.FoundationUtils.adjustWidth();
        var container = $('.column-toggle-container');
        container.foundation();
        container.foundationExtendEBI();
    };
    ColumnToggleComponent.prototype.onChangeColumnSelected = function (column) {
        if (!this.columnsSelected.includes(column)) {
            this.columnsSelected.push(column);
        }
        else {
            this.columnsSelected.splice(this.columnsSelected.indexOf(column), 1);
        }
        localStorage.setItem(this.columnView + '_columns', JSON.stringify(this.columnsSelected));
        this.columnSelectionChanged.emit(this.columnsSelected);
    };
    ColumnToggleComponent.prototype.isColumnSelected = function (column) {
        return this.columnsSelected !== undefined ? this.columnsSelected.indexOf(column) < 0 : false;
    };
    ColumnToggleComponent.prototype.showHideColumns = function () {
        var table = this.dataTable;
        $('#' + this.columnView + ' input[type="checkbox"]').on('click', function (e) {
            // Get the column API object
            var column = table.column($(this).attr('data-column'));
            // Toggle the visibility
            column.visible(!column.visible());
        });
    };
    ColumnToggleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef }
    ]; };
    ColumnToggleComponent.propDecorators = {
        columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        dataTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        columnView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        isTabActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        columnSelectionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
    };
    ColumnToggleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-column-toggle',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_column_toggle_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
            styles: [_column_toggle_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ColumnToggleComponent);
    return ColumnToggleComponent;
}());



/***/ }),

/***/ 15626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": function() { return /* binding */ ComponentsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _diagrams_node_diagram_node_diagram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diagrams/node-diagram/node-diagram.component */ 18013);
/* harmony import */ var _diagrams_edge_diagram_edge_diagram_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diagrams/edge-diagram/edge-diagram.component */ 57324);
/* harmony import */ var _diagrams_color_range_diagram_color_range_diagram_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diagrams/color-range-diagram/color-range-diagram.component */ 63098);
/* harmony import */ var _diagrams_edge_thickness_diagram_edge_thickness_diagram_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diagrams/edge-thickness-diagram/edge-thickness-diagram.component */ 26114);
/* harmony import */ var _column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column-toggle/column-toggle.component */ 58333);








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule
            ],
            declarations: [
                _column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ColumnToggleComponent,
                _diagrams_node_diagram_node_diagram_component__WEBPACK_IMPORTED_MODULE_0__.NodeDiagramComponent,
                _diagrams_edge_diagram_edge_diagram_component__WEBPACK_IMPORTED_MODULE_1__.EdgeDiagramComponent,
                _diagrams_color_range_diagram_color_range_diagram_component__WEBPACK_IMPORTED_MODULE_2__.ColorRangeDiagramComponent,
                _diagrams_edge_thickness_diagram_edge_thickness_diagram_component__WEBPACK_IMPORTED_MODULE_3__.EdgeThicknessDiagramComponent
            ],
            exports: [
                _column_toggle_column_toggle_component__WEBPACK_IMPORTED_MODULE_4__.ColumnToggleComponent,
                _diagrams_node_diagram_node_diagram_component__WEBPACK_IMPORTED_MODULE_0__.NodeDiagramComponent,
                _diagrams_edge_diagram_edge_diagram_component__WEBPACK_IMPORTED_MODULE_1__.EdgeDiagramComponent,
                _diagrams_color_range_diagram_color_range_diagram_component__WEBPACK_IMPORTED_MODULE_2__.ColorRangeDiagramComponent,
                _diagrams_edge_thickness_diagram_edge_thickness_diagram_component__WEBPACK_IMPORTED_MODULE_3__.EdgeThicknessDiagramComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ 63098:
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorRangeDiagramComponent": function() { return /* binding */ ColorRangeDiagramComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_color_range_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./color-range-diagram.component.html */ 49732);
/* harmony import */ var _color_range_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-range-diagram.component.css */ 29375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




var ColorRangeDiagramComponent = /** @class */ (function () {
    function ColorRangeDiagramComponent() {
        this._points = [];
        this.min = null;
        this.max = null;
    }
    ColorRangeDiagramComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(this.rangeMap)
            .forEach(function (key) {
            var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(key.split(' - ').map(Number.parseFloat), 2), start = _a[0], stop = _a[1];
            if (_this.min == null || start < _this.min)
                _this.min = start;
            if (_this.max == null || stop > _this.max)
                _this.max = stop;
            var color = _this.rangeMap[key];
            _this.points.push(new ColoredPoint(color, start));
            _this.points.push(new ColoredPoint(color, stop));
        }, this);
    };
    Object.defineProperty(ColorRangeDiagramComponent.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorRangeDiagramComponent.prototype, "pointLabels", {
        get: function () {
            return this._points.map(function (p) { return p.x; }).filter(function (v, i) { return i % 4 === 1; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorRangeDiagramComponent.prototype, "height", {
        get: function () {
            return (this.max - this.min) / 8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorRangeDiagramComponent.prototype, "strokeWidth", {
        get: function () {
            return this.height / 14;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColorRangeDiagramComponent.prototype, "viewBox", {
        get: function () {
            return this.min - this.strokeWidth / 2 + " " + -this.strokeWidth / 2 + " " + (this.max + this.strokeWidth) + " " + (this.height + this.strokeWidth);
        },
        enumerable: false,
        configurable: true
    });
    ColorRangeDiagramComponent.ctorParameters = function () { return []; };
    ColorRangeDiagramComponent.propDecorators = {
        rangeMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
    };
    ColorRangeDiagramComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-color-range-diagram',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_color_range_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_color_range_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], ColorRangeDiagramComponent);
    return ColorRangeDiagramComponent;
}());

var ColoredPoint = /** @class */ (function () {
    function ColoredPoint(color, x) {
        this.color = color;
        this.x = x;
    }
    return ColoredPoint;
}());


/***/ }),

/***/ 57324:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdgeDiagramComponent": function() { return /* binding */ EdgeDiagramComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edge_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edge-diagram.component.html */ 85510);
/* harmony import */ var _edge_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edge-diagram.component.css */ 74734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _interactions_shared_model_network_shapes_edge_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../interactions/shared/model/network-shapes/edge-shape */ 39131);





var EdgeDiagramComponent = /** @class */ (function () {
    function EdgeDiagramComponent() {
        this.shape = _interactions_shared_model_network_shapes_edge_shape__WEBPACK_IMPORTED_MODULE_2__.EdgeShape.SOLID_LINE;
        this.color = '#d6d6d6';
        this.thickness = 15;
        this.midCrossColor = '';
    }
    EdgeDiagramComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EdgeDiagramComponent.prototype, "strokeShape", {
        get: function () {
            return this.shape === _interactions_shared_model_network_shapes_edge_shape__WEBPACK_IMPORTED_MODULE_2__.EdgeShape.SOLID_LINE ? '100' : '25 10';
        },
        enumerable: false,
        configurable: true
    });
    EdgeDiagramComponent.ctorParameters = function () { return []; };
    EdgeDiagramComponent.propDecorators = {
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        thickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        midCrossColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
    };
    EdgeDiagramComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-edge-diagram',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edge_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_edge_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], EdgeDiagramComponent);
    return EdgeDiagramComponent;
}());



/***/ }),

/***/ 26114:
/*!*******************************************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdgeThicknessDiagramComponent": function() { return /* binding */ EdgeThicknessDiagramComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edge_thickness_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edge-thickness-diagram.component.html */ 81292);
/* harmony import */ var _edge_thickness_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edge-thickness-diagram.component.css */ 50169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




var EdgeThicknessDiagramComponent = /** @class */ (function () {
    function EdgeThicknessDiagramComponent() {
        this.color = '#ababab';
    }
    EdgeThicknessDiagramComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "width", {
        get: function () {
            return this.totalHeight * 8;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "height", {
        get: function () {
            return this.maxThickness;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "totalHeight", {
        get: function () {
            return this.height + this.spacing + this.fontSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "edgeWidth", {
        get: function () {
            return this.maxThickness * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "fontSize", {
        get: function () {
            return this.height / 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "spacing", {
        get: function () {
            return this.height / 12;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "viewBox", {
        get: function () {
            return "0 0 " + this.width + " " + this.totalHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EdgeThicknessDiagramComponent.prototype, "connectionPoints", {
        get: function () {
            return "\n    " + this.edgeWidth + " " + (this.height - this.minThickness) / 2 + ",\n    " + (this.width - this.edgeWidth) + " 0,\n    " + (this.width - this.edgeWidth) + " " + this.maxThickness + ",\n    " + this.edgeWidth + " " + (this.height + this.minThickness) / 2 + "\n    ";
        },
        enumerable: false,
        configurable: true
    });
    EdgeThicknessDiagramComponent.ctorParameters = function () { return []; };
    EdgeThicknessDiagramComponent.propDecorators = {
        minThickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        maxThickness: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        minValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        maxValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
    };
    EdgeThicknessDiagramComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
            selector: 'ip-edge-thickness-diagram',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edge_thickness_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_edge_thickness_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], EdgeThicknessDiagramComponent);
    return EdgeThicknessDiagramComponent;
}());



/***/ }),

/***/ 18013:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/node-diagram/node-diagram.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeDiagramComponent": function() { return /* binding */ NodeDiagramComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_node_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./node-diagram.component.html */ 1022);
/* harmony import */ var _node_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-diagram.component.css */ 83834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _interactions_shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../interactions/shared/model/network-shapes/node-shape */ 45382);





var NodeDiagramComponent = /** @class */ (function () {
    function NodeDiagramComponent() {
        this.NodeShape = _interactions_shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_2__.NodeShape;
    }
    NodeDiagramComponent.prototype.ngOnInit = function () {
        if (!this.shape)
            this.shape = _interactions_shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_2__.NodeShape.ELLIPSE;
        if (!this.color)
            this.color = '#d6d6d6';
        if (!this.height)
            this.height = '18pt';
    };
    NodeDiagramComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    NodeDiagramComponent.prototype.ngOnChanges = function (changes) {
        this.init();
    };
    NodeDiagramComponent.prototype.init = function () {
        var shapeElt = this.shapeGroupElt.nativeElement.firstElementChild;
        if (shapeElt) {
            shapeElt.setAttribute('fill', this.color);
            shapeElt.setAttribute('stroke-width', '6');
            shapeElt.setAttribute('stroke', this.borderColor ? this.borderColor : this.color);
            if (this.label) {
                var labelElt = this.labelElt.nativeElement;
                var box = labelElt.getBBox();
                if (box.width >= 100) {
                    $(this.svgElt.nativeElement).attr('viewBox', "0 0 " + (box.width + 5) + " 100");
                    if (this.shape !== _interactions_shared_model_network_shapes_node_shape__WEBPACK_IMPORTED_MODULE_2__.NodeShape.ELLIPSE)
                        shapeElt.setAttribute('transform', "translate(" + (box.width / 2 - 49) + ")");
                }
            }
        }
    };
    NodeDiagramComponent.ctorParameters = function () { return []; };
    NodeDiagramComponent.propDecorators = {
        shape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        borderColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
        labelElt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['labelElt', { static: false },] }],
        svgElt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['svg', { static: true },] }],
        shapeGroupElt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['shapeGroup', { static: true },] }]
    };
    NodeDiagramComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
            selector: 'ip-node-diagram',
            template: _Users_anjali_IdeaProjects_intact_portal_view_node_modules_ngtools_webpack_src_loaders_direct_resource_js_node_diagram_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
            styles: [_node_diagram_component_css__WEBPACK_IMPORTED_MODULE_1__]
        })
    ], NodeDiagramComponent);
    return NodeDiagramComponent;
}());



/***/ }),

/***/ 25379:
/*!*********************************************!*\
  !*** ./src/app/shared/utils/array-utils.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "groupBy": function() { return /* binding */ groupBy; }
/* harmony export */ });
function groupBy(array, classifier) {
    return Array.from(array.reduce(function (groups, value) {
        var group = classifier(value);
        var key = JSON.stringify(group);
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

/***/ 89935:
/*!**************************************************!*\
  !*** ./src/app/shared/utils/foundation-utils.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FoundationUtils": function() { return /* binding */ FoundationUtils; }
/* harmony export */ });
var FoundationUtils = /** @class */ (function () {
    function FoundationUtils() {
    }
    FoundationUtils.adjustWidth = function () {
        var buttons = $('button[data-toggle].adjust-width');
        buttons.each(function (i, button) {
            var $button = $(button);
            var pane = $('#' + $button.attr('data-toggle'));
            if (pane.outerWidth() > $button.outerWidth()) {
                $button.width(pane.outerWidth(true) - ($button.outerWidth() - $button.width()));
            }
            else {
                pane.width($button.outerWidth(true));
            }
        });
    };
    return FoundationUtils;
}());



/***/ }),

/***/ 16584:
/*!**********************************************!*\
  !*** ./src/app/shared/utils/string-utils.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "titleCase": function() { return /* binding */ titleCase; },
/* harmony export */   "extractAlias": function() { return /* binding */ extractAlias; },
/* harmony export */   "extractId": function() { return /* binding */ extractId; },
/* harmony export */   "extractAnnotation": function() { return /* binding */ extractAnnotation; }
/* harmony export */ });
function titleCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
/**
 * Extract alias from rawData string
 * @param rawData: "value value ... (type short label(type MI Identifier)) "
 */
function extractAlias(rawData) {
    var split = rawData.split('(');
    return {
        name: split.slice(0, -2).join('(').trim(),
        type: {
            shortName: split[split.length - 1].slice(0, -2),
            identifier: split[split.length - 2]
        }
    };
}
/**
 * Extract ids
 * @param rawData: "id (database) "
 */
function extractId(rawData) {
    if (rawData === null)
        return null;
    var split = rawData.split('(');
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
    var split = rawData.split('(');
    return {
        description: split.slice(1).join('(').slice(0, -1).trim(),
        topic: { shortName: split[0].trim(), identifier: undefined }
    };
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// Environment for development
var EBI_BASE_URL = 'https://wwwdev.ebi.ac.uk';
var EBI_URL = 'https://www.ebi.ac.uk';
var FORMER_INTACT_URL = 'https://www.ebi.ac.uk/legacy-intact/';
var LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/';
var INTACT_FTP_BASE_URL = 'https://ftp.ebi.ac.uk/pub/databases/intact';
var INTACT_PORTAL_DOCUMENTATION_URL = 'https://raw.githubusercontent.com/Intact-Portal/intact-portal-documentation/master/';
var environment = {
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


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #topScrollAnchor></div>\n<ip-compact-header *ngIf=\"showCompactHeader; else elseBlock\"></ip-compact-header>\n<ng-template #elseBlock><ip-expanded-header></ip-expanded-header></ng-template>\n\n<!-- Suggested layout containers -->\n<section id=\"main-content-area\" class=\"row margin-top-large margin-bottom-medium expanded\" role=\"main\">\n  <section>\n    <router-outlet (activate)=\"scrollTo(topScrollAnchor)\"></router-outlet>\n    <!-- Routed views go here -->\n  </section>\n</section>\n\n<ip-local-footer *ngIf=\"showFooter\"></ip-local-footer>\n");

/***/ }),

/***/ 77717:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/advanced-search/advanced-search.component.html ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert-panel margin-bottom-large\">\n  <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Not Supported</h3>\n  Advanced search is not yet supported in this new website, you will therefore be redirected to the former\n  IntAct website upon clicking on the search button\n</div>\n\n<div class=\"input-group\">\n  <div style=\"position: relative\">\n    <textarea id=\"editor\" #editor (input)=\"onInput(editor, builder)\" (scroll)=\"syncScroll(editor, pre)\"\n              spellcheck=\"false\"></textarea>\n    <pre id=\"highlighting\" aria-hidden=\"true\" #pre><code class=\"highlighting-content\" [innerHTML]=\"coloredMIQL\"></code></pre>\n  </div>\n\n  <div class=\"input-group-button\">\n    <input id=\"ad-search-button\" type=\"button\" name=\"submit\" value=\"1\"\n           (click)=\"search(editor.value)\" class=\"button icon icon-functional\">\n  </div>\n</div>\n\n<ul class=\"accordion\" data-accordion>\n  <li class=\"accordion-item is-active\" data-accordion-item>\n    <a class=\"accordion-title\">MIQL Query Builder</a>\n    <div class=\"accordion-content\" data-tab-content>\n      <div class=\"margin-top-large margin-bottom-large\">\n        <query-builder #builder id=\"builder\" [formControl]='queryCtrl' [config]='currentConfig'\n                       [classNames]=\"classNames\" (ngModelChange)=\"builderToEditor(builder, editor)\">\n\n          <ng-container *querySwitchGroup=\"let ruleSet\">\n            <div class=\"button-group margin-bottom-none\">\n              <div class=\"display-contents ad-q-switch-control\">\n                <input type=\"radio\" value=\"and\" [checked]=\"ruleSet.condition === 'and'\"\n                       class=\"ad-q-switch-radio no-margin checked ng-untouched ng-pristine ng-valid\">\n                <label class=\"button margin-bottom-none\"\n                       (click)=\"updateCondition(ruleSet,$event,builder,editor)\">AND</label>\n              </div>\n              <div class=\"display-contents ad-q-switch-control\">\n                <input type=\"radio\" value=\"or\" [checked]=\"ruleSet.condition === 'or'\"\n                       class=\"ad-q-switch-radio no-margin ng-untouched ng-pristine ng-valid\">\n                <label class=\"button margin-bottom-none\"\n                       (click)=\"updateCondition(ruleSet,$event,builder,editor)\">OR</label>\n              </div>\n            </div>\n          </ng-container>\n\n        </query-builder>\n      </div>\n    </div>\n  </li>\n</ul>\n\n\n\n");

/***/ }),

/***/ 81857:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/batch-search/batch-search.component.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aw-wizard [navBarLayout]=\"'large-empty-symbols'\">\n  <aw-wizard-step stepTitle=\"Design query\"\n                  [navigationSymbol]=\"{ symbol: '&#xf093;', fontFamily: 'EBI-Common'}\"\n                  (stepExit)=\"resolveSearch()\">\n\n    <ul class=\"accordion margin-top-large\" data-accordion>\n      <li class=\"accordion-item is-active\" data-accordion-item>\n        <!-- Accordion tab title -->\n        <a href=\"home#identifier-list\" class=\"accordion-title\">Interactor Identifiers List</a>\n\n        <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->\n        <div id=\"identifier-list\" class=\"accordion-content\" data-tab-content>\n          <div class=\"row margin-top-large\">\n            <div id=\"searchBox3\" class=\"columns small-12\">\n              <textarea #query id=\"term-list\" placeholder=\"Search...\" rows=\"5\"></textarea>\n              <button class=\"button float-right\" type=\"button\" (click)=\"validateSearchBox(query.value)\" awNextStep>\n                <i class=\"icon icon-common icon-cogs\"></i> Next Step\n              </button>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"accordion-item\" data-accordion-item>\n        <!-- Accordion tab title -->\n        <a href=\"home#upload-file\" class=\"accordion-title\">Upload File</a>\n\n        <!-- Accordion tab content: it would start in the open state due to using the `is-active` state class. -->\n        <div id=\"upload-file\" class=\"accordion-content\" data-tab-content>\n          <h5>Select file</h5>\n          <div>\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" (onFileSelected)=\"fileSelected()\"/>\n          </div>\n          <div ng2FileDrop\n               [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n               (fileOver)=\"fileOverBase($event)\"\n               [uploader]=\"uploader\"\n               class=\"well my-drop-zone\">\n            Drag and drop your interactors file here\n          </div>\n\n          <h5>Upload</h5>\n          <!-- <p>Queue length: {{ uploader?.queue?.length }}</p>-->\n\n          <table class=\"table\">\n            <thead>\n            <tr>\n              <th class=\"text-center\" style=\"width: 25%\">Name</th>\n              <th class=\"text-center\">Size</th>\n              <th class=\"text-center\">Progress</th>\n              <th class=\"text-center\">Status</th>\n              <th class=\"text-center\">Actions</th>\n              <th class=\"text-center\">Search</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of uploader.queue\">\n              <td class=\"text-center\">\n                <strong>{{ item?.file?.name }}</strong>\n              </td>\n              <td class=\"text-center\" *ngIf=\"uploader.options.isHTML5\" nowrap>\n                {{ item?.file?.size / 1024  | number:'.4' }} KB\n              </td>\n              <td class=\"text-center\" *ngIf=\"uploader.options.isHTML5\">\n                <div class=\"progress\" role=\"progressbar\" tabindex=\"0\" aria-valuemin=\"10\" aria-valuemax=\"100\">\n                  <div class=\"progress-meter\" [ngStyle]=\"{ 'width': item.progress + '%' }\">\n                    <div *ngIf=\"item.progress > 5\" class=\"progress-meter-text\">{{item.progress + '%' }}</div>\n                  </div>\n                </div>\n              </td>\n              <td class=\"text-center\">\n                <span *ngIf=\"item.isSuccess\"><i class=\"icon icon-common icon-check-circle is-success\"></i></span>\n                <span *ngIf=\"item.isCancel\"><i class=\"icon icon-common icon-ban is-cancel\"></i></span>\n                <span *ngIf=\"item.isError\"><i class=\"icon icon-common icon-times-circle is-error\"></i></span>\n              </td>\n              <td class=\"text-center\" nowrap>\n                <button type=\"button\" class=\"button\" (click)=\"item.upload()\"\n                        [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                  <i class=\"icon icon-common icon-upload\"></i> Upload\n                </button>\n                <button type=\"button\" class=\"button\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                  <i class=\"icon icon-common icon-ban\"></i> Cancel\n                </button>\n                <button type=\"button\" class=\"button\" (click)=\"item.remove()\">\n                  <i class=\"icon icon-common icon-trash-alt\"></i> Remove\n                </button>\n              </td>\n              <td class=\"text-center\">\n                <span *ngIf=\"item.isSuccess\">\n                    <button id=\"batch-search-button\" type=\"button\" class=\"button\" name=\"submit\" value=\"1\"\n                            (click)=\"setQuery(response)\" awNextStep>\n                      <i class=\"icon icon-common icon-cogs\"></i> Next Step</button>\n                </span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </li>\n    </ul>\n  </aw-wizard-step>\n\n  <aw-wizard-step [stepTitle]=\"'Resolve terms'\"\n                  [navigationSymbol]=\"{ symbol: '&#xf085;', fontFamily: 'EBI-Common'}\">\n    <div class=\"margin-top-xlarge margin-bottom-xlarge\">\n      <div *ngIf=\"dataReceived; else loadingSpinner\">\n        <h5 class=\"margin-bottom-medium\">Resolved Identifiers</h5>\n        <div class=\"terms-resolution-container\">\n          <table [ngClass]=\"{'margin-bottom-none': !hasNotFoundEntries, 'dataTable': true, 'stripe': true}\">\n            <thead>\n            <tr>\n              <th>Input Term</th>\n              <th>Include</th>\n              <!--<th>Preview</th>-->\n              <th>Name</th>\n              <th>ID</th>\n              <th>Description</th>\n              <th>Species</th>\n              <th>Type</th>\n              <th>IntAct Ac</th>\n              <th>Interaction Count</th>\n            </tr>\n            </thead>\n            <tbody *ngFor=\"let entry of foundEntries; let j = index;\">\n            <tr *ngFor=\"let interactor of entry.content; let i = index;\"\n                [ngClass]=\"{'odd': i % 2 !== 0, 'even': i % 2 ===0}\" style=\"position: relative\">\n              <td [rowSpan]=\"entry.totalElements <= 50 ? entry.totalElements : 51\" *ngIf=\"i === 0\" class=\"sticky-cell\">\n                <div>\n                  <div class=\"select-buttons\">\n                    <span>{{entry.term}}</span>\n                    <button class=\"button outlined tight-focus\" (click)=\"selectAll(entry.term)\">Select all</button>\n                    <button class=\"button outlined tight-focus\" (click)=\"unselectAll(entry.term)\">Unselect all</button>\n                  </div>\n                </div>\n              </td>\n              <td>\n                <div>\n                  <input type=\"checkbox\" checked name=\"interactor\" [attr.group]=\"entry.term\"\n                         [value]=\"interactor.interactorAc\" (change)=\"onInteractorSelection($event)\">\n                </div>\n              </td>\n             <!-- <td>\n                <ip-node-diagram [color]=\"interactor.interactorColor\" [shape]=\"nodeShape[interactor.interactorShape]\"\n                                 [label]=\"interactor.interactorName\" [height]=\"'35pt'\"></ip-node-diagram>\n              </td>-->\n              <td>{{ interactor.interactorName }}</td>\n              <td>{{ interactor.interactorPreferredIdentifier }}</td>\n              <td>{{ interactor.interactorDescription }}</td>\n              <td>{{ interactor.interactorSpecies}}</td>\n              <td>{{ interactor.interactorType }}</td>\n              <td>{{ interactor.interactorAc }}</td>\n              <td>{{ interactor.interactionCount }}</td>\n            </tr>\n            <tr *ngIf=\"!entry.last\" class=\"other-interactors\">\n              <td>\n                <div>\n                  <input type=\"checkbox\" checked name=\"completion\" [attr.group]=\"entry.term\"\n                         [value]=\"entry.term\" (change)=\"onCompletionSelection($event)\">\n                </div>\n              </td>\n              <td colspan=\"7\">\n                {{entry.totalElements - 50}} other interactors\n              </td>\n            </tr>\n            <tr class=\"separator\" *ngIf=\"j < foundEntries.length - 1\">\n              <td colspan=\"9\">\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <mat-expansion-panel *ngIf=\"hasNotFoundEntries\">\n            <mat-expansion-panel-header>\n              <mat-panel-title>\n                <h5>Terms not found</h5>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>{{notFoundEntries}}</p>\n          </mat-expansion-panel>\n        </div>\n      </div>\n      <ng-template #loadingSpinner>\n        <mat-spinner class=\"float-center\"></mat-spinner>\n      </ng-template>\n    </div>\n\n    <div class=\"button-bar\">\n      <div class=\"button-group\">\n        <button class=\"button\" type=\"button\" (click)=\"selectAll()\">Select all</button>\n        <button class=\"button\" type=\"button\" (click)=\"unselectAll()\">Unselect all</button>\n      </div>\n\n      <div class=\"button-group float-right\">\n        <button class=\"button\" type=\"button\" awPreviousStep (click)=\"resetSecondStep()\">Previous Step</button>\n        <button class=\"button\" type=\"button\" awNextStep [disabled]=\"!dataReceived\"\n                (click)=\"collectNextPagesInteractors()\">\n          <i class=\"icon icon-common icon-cogs\"></i> Search\n        </button>\n      </div>\n    </div>\n\n  </aw-wizard-step>\n  <aw-wizard-step stepTitle=\"Collect interactors\" [navigationSymbol]=\"{ symbol: '&#xf002;', fontFamily: 'EBI-Common'}\">\n    <div class=\"small-5 small-centered columns\" *ngIf=\"entriesToComplete.size > 0\">\n      <mat-progress-spinner color=\"primary\" mode=\"determinate\" [value]=\"acCollectionProgress\" style=\"margin:0 auto;\">\n      </mat-progress-spinner>\n      <div style=\"text-align: center\">\n        <h5>Gathering missing interactors</h5>\n        <p>{{interactorsQueried}} / {{totalInteractorsToQuery}}</p>\n      </div>\n    </div>\n\n    <div class=\"button-group float-right\">\n      <button class=\"button\" type=\"button\" (click)=\"resetThirdStep()\" awPreviousStep>Previous Step</button>\n    </div>\n  </aw-wizard-step>\n</aw-wizard>\n");

/***/ }),

/***/ 86619:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.html ***!
  \***************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dataset_archive\" class=\"row\">\n  <div class=\"sticky-container\">\n    <h3 class=\"columns margin-bottom-xlarge margin-top-medium text-justify\">\n      Featured datasets - Archive\n    </h3>\n  </div>\n\n  <div *ngFor=\"let datasetsOfYear of datasetsByYear\" class=\"column\">\n    <ip-dataset-by-year [year]=\"datasetsOfYear.group\" [datasets]=\"datasetsOfYear.elements\"></ip-dataset-by-year>\n  </div>\n</div>\n");

/***/ }),

/***/ 31517:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.html ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded\" style=\"position: relative\">\n\n  <h4 class=\"column small-1 align-right year\">{{year}}</h4>\n  <ul class=\"column small-11 align-left accordion\" data-accordion data-deep-link=\"false\" data-update-history=\"false\"\n      data-allow-all-closed=\"true\" id=\"accordion-{{year}}\" data-deep-link-smudge=\"true\">\n    <li class=\"accordion-item\" data-accordion-item *ngFor=\"let dataset of datasets\">\n\n      <a href=\"featured-dataset/archive#{{dataset.month}}-{{dataset.year}}\" class=\"accordion-title\">\n        <span class=\"month\">{{dataset.month}} - </span>\n        {{dataset.title}}\n      </a>\n\n      <div class=\"accordion-content\" data-tab-content id=\"{{dataset.month}}-{{dataset.year}}\">\n        <table>\n          <tbody>\n          <tr *ngFor=\"let pubmed of dataset.pubmeds\">\n            <td *ngIf=\"hasPubMedId(pubmed); else noID\">\n              <a href=\"https://europepmc.org/article/MED/{{pubmed.id}}?singleResult=true\" target=\"_blank\">\n                <b>{{pubmed.author}} ({{pubmed.year || dataset.year}})</b>\n              </a>\n            </td>\n            <ng-template #noID>\n              <td><b class=\"tool-tip\">{{pubmed.author}} ({{pubmed.year}})<span class=\"tool-tip-text\">Article only available as a preprint</span></b></td>\n            </ng-template>\n            <td style=\"text-align: right\">\n              <div>\n                <button mat-raised-button color=\"accent\" (click)=\"goPSIMI25FTP(pubmed.year || dataset.year, pubmed.id)\">\n                  <i class=\"icon icon-common icon-download\"></i> PSI-MI XML 2.5\n                </button>\n                <button mat-raised-button color=\"accent\" (click)=\"goPSIMITABFTP(pubmed.year || dataset.year, pubmed.id)\">\n                  <i class=\"icon icon-common icon-download\"></i> PSI-MI TAB 2.7\n                </button>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ 14080:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/featured-dataset/featured-dataset.component.html ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dataset\" class=\"margin-top-large\">\n  <h4 class=\"margin-bottom-large\">\n    <i class=\"icon icon-generic\" data-icon=\"D\"></i> Featured Dataset\n  </h4>\n\n  <div *ngIf=\"dataset !== undefined\">\n    <div class=\"text-justify margin-bottom-large\">\n      {{dataset.title}} - <b>{{firstPubmed.author}}</b>\n    </div>\n\n    <div class=\"expanded no-margin button-group stacked-for-medium\" id=\"dataset-group\">\n\n      <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"access\">\n        <i class=\"icon icon-common icon-search\"></i>\n        Access\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"access\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n          <li><a class=\"button lightest expanded no-margin\" (click)=\"onIntActSearch()\">IntAct</a></li>\n          <!--<li><a class=\"button lightest expanded no-margin\" [href]=\"pubMedUrl()\">Europe PMC</a></li>-->\n        </ul>\n      </div>\n\n      <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"download\">\n        <i class=\"icon icon-functional icon-download\"></i> Download\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"download\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n          <li>\n            <a class=\"button lightest expanded no-margin\" download target=\"_blank\"\n               [href]=\"miTabUrl()\">miTab<sub>2.7</sub></a>\n          </li>\n          <li>\n            <a class=\"button lightest expanded no-margin\" download target=\"_blank\"\n               [href]=\"miXmlUrl()\">miXML<sub>2.5</sub></a>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n    <div class=\"archive\">\n      <a class=\"button outlined expanded no-margin\" [routerLink]=\"archiveUrl()\">\n        <i class=\"icon icon-generic\" data-icon=\";\"></i>\n        Archive\n      </a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 4173:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/home-dashboard.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded\">\n\n  <div class=\"columns medium-12\">\n    <div class=\"columns medium-9\">\n      <div class=\"columns small-12 medium-12 margin-top-large\">\n        <ip-home-description></ip-home-description>\n      </div>\n      <div class=\"columns small-12 medium-12 margin-top-xlarge\">\n        <ip-search></ip-search>\n      </div>\n      <div class=\"columns small-12 medium-12 margin-top-xlarge\">\n        <ip-tile-menu></ip-tile-menu>\n      </div>\n    </div>\n\n    <div class=\"columns medium-3\">\n      <div class=\"row margin-top-large\">\n        <ip-newsletter-subscription></ip-newsletter-subscription>\n      </div>\n      <div class=\"row\">\n          <ip-featured-dataset></ip-featured-dataset>\n      </div>\n      <div class=\"row\">\n          <ip-news></ip-news>\n      </div>\n      <div class=\"row\">\n          <ip-twitter-display></ip-twitter-display>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 52615:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/home-description/home-description.component.html ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>IntAct Molecular Interaction Database</h1>\n<p class=\"text-justify\">\n  IntAct provides a free, open source database system and analysis tools for molecular interaction data.\n  All interactions are derived from literature curation or direct user submissions.\n  The IntAct Team also produces the <a href=\"https://www.ebi.ac.uk/complexportal\" target=\"_blank\">Complex Portal</a>.\n  You are currently visiting the new website of IntAct. The former version can be found <a href=\"{{formerURL}}\">here</a>\n  and will be supported until the end of 2021.\n</p>\n\n<div class=\"row expanded alert-panel\" style=\"max-width: 100em\">\n  <div class=\"alert-header\">\n    <h3>\n      <i class=\"icon icon-species padding-medium\" data-icon=\"&#x76;\"></i>\n      IntAct's COVID-19 dataset\n    </h3>\n    <div class=\"alert-button-group no-margin\">\n      <a class=\"button lighter margin-bottom-none\" download target=\"_blank\"\n         [href]=\"miXml25Url()\">miXML<sub>2.5</sub></a>\n      <a class=\"button lighter margin-bottom-none\" download target=\"_blank\"\n         [href]=\"miXml30Url()\">miXML<sub>3.0</sub></a>\n      <a class=\"button lighter margin-bottom-none\" (click)=\"onSearch()\">Browse in IntAct</a>\n\n    </div>\n  </div>\n\n  <div class=\"row expanded text-justify\">\n    The data primarily covers protein-protein and several RNA-protein interactions involving SARS-CoV2 and SARS-CoV. All\n    interactions from the relevant publications are covered in this dataset, including interactions with other organism.\n  </div>\n</div>\n");

/***/ }),

/***/ 88334:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/news/news.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"news\" class=\"margin-top-large\">\n  <h4 class=\"margin-bottom-large\">\n    <i class=\"icon icon-generic\" data-icon=\"N\"></i> Latest News\n  </h4>\n\n  <div id=\"releaseVersion\" class=\"margin-top-medium padding-top-medium padding-left-medium padding-right-medium\">\n    <h6><i class=\"icon icon-generic\" data-icon=\"r\"></i> New Intact View version: {{version}}</h6>\n    <p style=\"margin-left: 1.6rem\"> Release Date: {{releaseDate}}</p>\n\n    <h6><i class=\"icon icon-generic\" data-icon=\"g\"></i> Data Content</h6>\n    <ip-markdown [src]=\"statistics\"></ip-markdown>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ 90008:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.html ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mc_embed_signup\">\n  <form ngNoForm action=\"//ebi.us9.list-manage.com/subscribe/post?u=d50725c1556266fd605025eaf&id=91a036cbb0\"\n        method=\"post\"\n        id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n    <div id=\"mc_embed_signup_scroll\">\n      <h4><i class=\"icon icon-generic\" data-icon=\"m\"></i> Newsletter</h4>\n      <div class=\"input-group\">\n        <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email no-margin\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\n        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n        <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n          <input type=\"text\" name=\"b_d50725c1556266fd605025eaf_91a036cbb0\" tabindex=\"-1\" value=\"\">\n        </div>\n        <div class=\"input-group-button\">\n          <input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\">\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ 7510:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/search/search.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"search\" class=\"row\">\n\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"search-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"home#quick-search\" aria-selected=\"true\">Quick Search</a></li>\n    <li class=\"tabs-title\"><a href=\"home#batch-search\">Batch Search</a></li>\n    <!-- We disable the advance search for now until we are able to provide it to the users-->\n    <li class=\"tabs-title\"><a href=\"home#advanced-search\">Advanced Search</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"search-tabs\">\n\n    <!--TAB MAIN SEARCH SECTION-->\n    <div id=\"div-quick-search\">\n      <div class=\"tabs-panel is-active\" id=\"quick-search\">\n        <fieldset>\n          <div id=\"searchBox\" class=\"input-group margin-bottom-none\">\n            <input #query class=\"typeahead input-group-field\" type=\"text\" id=\"query\"\n                   (keydown.enter)=\"search(query.value, 'enter')\"\n                   placeholder=\"Search by gene names, UniProt ACs, Pubmed, protein names, Complex ACs\"/>\n            <div class=\"input-group-button\">\n              <input id=\"home-search-button\" type=\"button\" name=\"submit\" value=\"1\"\n                     (click)=\"search(query.value, 'button')\"\n                     class=\"button icon icon-functional\">\n            </div>\n          </div>\n          <div class=\"columns margin-top-large\">\n            <h5><i class=\"icon icon-generic padding-right-medium intact-color\" data-icon=\"?\"></i>Examples:</h5>\n            <div class=\"columns medium-4\">\n              <ul class=\"no-margin no-padding\">\n                <li>Gene names: <a (click)=\"search('Ndc80', 'example')\">Ndc80</a></li>\n                <li>UniProt ACs: <a (click)=\"search('Q05471', 'example')\">Q05471</a></li>\n              </ul>\n            </div>\n            <div class=\"columns medium-4\">\n              <ul class=\"no-margin no-padding\">\n                <li>Taxon IDs: <a (click)=\"search('9606', 'example')\">9606</a></li>\n                <li>Publication IDs: <a (click)=\"search('32353859', 'example')\">32353859</a></li>\n              </ul>\n            </div>\n            <div class=\"columns medium-4\">\n              <ul class=\"no-margin no-padding\">\n                <li>Complex ACs: <a (click)=\"search('CPX-5742', 'example')\">CPX-5742</a></li>\n                <li>GO terms: <a (click)=\"search('GO:0016491', 'example')\">GO:0016491</a></li>\n              </ul>\n            </div>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n\n    <!--TAB BATCH SEARCH SECTION-->\n    <div class=\"tabs-panel\" id=\"batch-search\">\n      <ip-batch-search></ip-batch-search>\n    </div>\n\n    <!--TAB ADVANCED SECTION-->\n    <div class=\"tabs-panel\" id=\"advanced-search\">\n      <ip-advanced-search></ip-advanced-search>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ 49142:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/tile-menu/tile-menu.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row button-grid\" data-equalizer data-equalize-on=\"medium\" id=\"large-button-grid\">\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/interactomes\">\n      <h3 class=\"icon icon-species white-color\" data-icon=\"M\"></h3>\n      <h5 class=\"white-color\">Interactomes</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/download/datasets/\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\";\"></h3>\n      <h5 class=\"white-color\">Datasets</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/download/datasets\"\n       fragment=\"mutations\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"d\"></h3>\n      <h5 class=\"white-color\">Mutations</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"/download/ftp\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf019;\"></h3>\n      <h5 class=\"white-color\">FTP</h5></a>\n  </div>\n\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch\n       routerLink=\"/documentation/data_submission\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf093;\"></h3>\n      <h5 class=\"white-color\">Data Submission</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch data-open=\"citationModal\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"P\"></h3>\n      <h5 class=\"white-color\">How To Cite Us</h5></a>\n  </div>\n  <div class=\"reveal\" id=\"citationModal\" data-reveal>\n    <h3>Citing IntAct</h3>\n    <span\n      class=\"lead\">The MIntAct project--IntAct as a common curation platform for 11 molecular interaction databases.</span>\n    1035670 <p>Orchard S et al [PMID: 24234451]</p>\n    <p><i>Nucl. Acids Res. (2013) doi: 10.1093/nar/gkt1115</i></p>\n    <a class=\"button readmore\" href=\"//europepmc.org/article/MED/24234451\" target=\"_blank\">Abstract</a>\n    <a class=\"button readmore\" href=\"//academic.oup.com/nar/article/42/D1/D358/1051282\" target=\"_blank\">Full text</a>\n\n    <button class=\"close-button\" data-close aria-label=\"Close modal\" type=\"button\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns industry-background\" data-equalizer-watch routerLink=\"/documentation\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf283;\"></h3>\n      <h5 class=\"white-color\">Documentation</h5></a>\n  </div>\n  <div class=\"columns large-3 medium-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns training-background\" data-equalizer-watch href=\"//www.ebi.ac.uk/training/search-results?query=intact&domain=ebiweb_training&page=1&facets=\">\n      <h3 class=\"icon icon-generic white-color\" data-icon=\"t\"></h3>\n      <h5 class=\"white-color\">Training</h5></a>\n  </div>\n</div>\n");

/***/ }),

/***/ 51211:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home-dashboard/twitter-display/twitter-display.component.html ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"twitter\" class=\"margin-top-large\">\n  <h4>\n    <a href=\"https://twitter.com/intact_project\" target=\"_blank\" matTooltip=\"Follow us\" matTooltipPosition=\"left\">\n      <i id=\"twitter-logo\" class=\"icon icon-socialmedia\" data-icon=\"T\"></i>\n    </a> Tweets\n  </h4>\n\n  <div class=\"margin-top-large margin-bottom-large\">\n    <a class=\"twitter-timeline\"\n       data-lang=\"en\"\n       data-height=\"300\"\n       data-theme=\"light\"\n       data-chrome=\"nofooter noheader noborders\"\n       data-link-color=\"#007c82\"\n       href=\"https://twitter.com/intact_project\">\n      Tweets by IntAct</a>\n  </div>\n</div>\n");

/***/ }),

/***/ 9879:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-dashboard.component.html ***!
  \**************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded\" *ngIf=\"interactionAc; else noInteractor;\">\n  <div class=\"button-bar\">\n    <h2 class=\"padding-left-large\">Details of {{interactionAc}}</h2>\n\n    <div class=\"button-group rounded float-right margin-right-medium\" id=\"detail-export\" style=\"margin-left: 17px;\">\n      <div class=\"button no-hover\">\n        <i class=\"icon icon-functional icon-spacer icon-share\"></i> Export\n      </div>\n\n      <button class=\"button lighter adjust-width no-horizontal-padding\" type=\"button\" data-toggle=\"export-viewer\">\n        View\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"export-viewer\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n          <li><a class=\"button lightest expanded\" download=\"{{interactionAc}}.svg\" id=\"SVG-download\"\n                 (click)=\"exportSVG()\">SVG</a></li>\n        </ul>\n      </div>\n\n      <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"export-table\">\n        Interaction\n      </button>\n      <div class=\"dropdown-pane no-padding no-border\" id=\"export-table\" data-dropdown data-hover=\"true\"\n           data-hover-pane=\"true\">\n        <ul class=\"no-bullet no-margin\">\n\n          <li *ngFor=\"let format of formatTypes; let last = last;\">\n            <a class=\"button lightest expanded\" [ngClass]=\"{'no-margin':last}\"\n            download [href]=\"downloadURL(format)\" [innerHTML]=\"format.html\"></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row expanded\" *ngIf=\"!error; else errorBlock;\">\n\n  <div>\n    <ip-details-viewer [interactionAc]=\"interactionAc\"\n                       [featureAc]=\"featureSelected\"\n                       (error)=\"searchError($event)\"></ip-details-viewer>\n  </div>\n\n  <div class=\"columns medium-12\">\n    <ip-details-tabs [interactionAc]=\"interactionAc\"\n                     (featureChanged)=\"onFeatureSelectedChanged($event)\"></ip-details-tabs>\n  </div>\n\n</div>\n\n<ng-template #errorBlock>\n  <div class=\"row expanded margin-top-large margin-bottom-large margin-left-medium margin-right-medium\">\n    <div class=\"columns medium-12\">\n      <div class=\"alert-panel\">\n        <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> <b>{{interactionAc}}</b> not found</h3>\n        No interactions were found for the given accession number: <b>{{interactionAc}}</b><br>\n        This can be due to:\n        <ul>\n          <li>An incomplete accession number (format: EBI-XXXXXXX)</li>\n          <li>A spelling mistake</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #noInteractor>\n  <div class=\"row expanded margin-top-large margin-bottom-large margin-left-medium margin-right-medium\">\n    <div class=\"columns medium-12\">\n      <div class=\"alert-panel\">\n        <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Missing parameter</h3>\n        Could not find any interaction accession number in the url.<br>\n        Please add one to retrieve the details of the related interaction.<br>\n        An accession number follow the following format: <b>EBI-XXXXXXX</b>\n      </div>\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ 14011:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details-tabs.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large\">\n\n  <!--  TODO make this bookmarkable like the documentation, it needs to take into account the url params -->\n  <ul class=\"tabs\" data-tabs id=\"details-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"#interactionDetails\" aria-selected=\"true\">Interaction Details</a></li>\n    <li class=\"tabs-title\"><a href=\"#participants\">Participants</a></li>\n    <li class=\"tabs-title\"><a href=\"#features\">Features</a></li>\n\n    <ip-column-toggle *ngIf=\"isTabParticipantActive\"\n                      [columns]=\"participantTable.columns\"\n                      [dataTable]=\"participantTable.dataTable\"\n                      [columnView]=\"participantTable.columnView\"\n                      [isTabActive]=\"isTabParticipantActive\" class=\"float-right\"></ip-column-toggle>\n\n    <ip-column-toggle *ngIf=\"isTabFeatureActive\"\n                      [columns]=\"featureTable.columns\"\n                      [dataTable]=\"featureTable.dataTable\"\n                      [columnView]=\"featureTable.columnView\"\n                      [isTabActive]=\"isTabFeatureActive\" class=\"float-right\"></ip-column-toggle>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"details-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"interactionDetails\">\n      <ip-interaction-details *ngIf=\"interactionDetails\"\n                              [interactionDetails]=\"interactionDetails\"></ip-interaction-details>\n    </div>\n\n    <div class=\"tabs-panel table-tab\" id=\"participants\">\n      <ip-participant-table [participantTab]=\"isTabParticipantActive\"\n                            [interactionAc]=\"interactionAc\"></ip-participant-table>\n\n    </div>\n\n    <div class=\"tabs-panel table-tab\" id=\"features\">\n      <ip-features-table [interactionAc]=\"interactionAc\"\n                         [featureTab]=\"isTabFeatureActive\"\n                         (featureChanged)=\"onFeatureSelectedChanged($event)\"></ip-features-table>\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ 38829:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h4>Confidences ({{confidences.length}})</h4>\n  <table id=\"confidences\">\n    <thead>\n      <th>Type</th>\n      <th>Value</th>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let confidence of confidences\">\n      <td>{{confidence.type}}</td>\n      <td>{{confidence.value}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ 37664:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h5>Annotations ({{annotations.length}})</h5>\n  <table id=\"curAnnotations\">\n    <thead>\n      <th>Topic</th>\n      <th>Description</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let annotation of annotations\">\n        <td><ip-cv-term [cvTerm]=\"annotation.topic\"></ip-cv-term></td>\n        <td>{{annotation.description}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ 78880:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.html ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span [matTooltip]=\"description\" class=\"has-tip cv-term\" tabindex=\"1\" *ngIf=\"description; else elseBlock\">\n  {{cvTerm.shortName}}\n</span>\n<ng-template #elseBlock>\n  <a [href]=\"cvTerm | cvToUrl: 'access'\" class=\"cv-term\" target=\"_blank\">\n    {{cvTerm.shortName}}\n  </a>\n</ng-template>\n");

/***/ }),

/***/ 7288:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"columns medium-4\">\n\n  <h4><i id=\"toggleExperiment\" class=\"icon icon-common icon-minus padding-right-small\"\n                                   (click)=\"toggleExperimentButton()\"\n                                   (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\"\n                                   [ngStyle]=\"{cursor: hover==true ? 'pointer' : 'default'}\" ></i> Experiment Details</h4>\n\n  <div id=\"experimentPanel\" class=\"margin-top-large margin-bottom-large\">\n\n      <div class=\"margin-top-large margin-bottom-large\">\n        <h5>Experiment Accession</h5>\n        {{experiment.experimentAc}}\n      </div>\n      <div class=\"margin-top-large margin-bottom-large\">\n        <h5>Host Organism Model</h5>\n        {{experiment.interactionHostOrganism}}\n      </div>\n      <div class=\"margin-top-large margin-bottom-xlarge\">\n        <h5>Interaction Detection Method</h5>\n        {{experiment.interactionDetectionMethod}}\n      </div>\n\n      <div id=\"extXrefs\" class=\"margin-top-large\" *ngIf=\"experiment.experimentXrefs.length !== 0\">\n        <ip-external-xrefs *ngIf=\"experiment.experimentXrefs\"\n                           [xrefs]=\"experiment.experimentXrefs\"></ip-external-xrefs>\n      </div>\n      <div id=\"curationAnnotations\" class=\"margin-top-large\" *ngIf=\"experiment.experimentAnnotations.length !== 0\">\n        <ip-curation-annotations *ngIf=\"experiment.experimentAnnotations\"\n                                 [annotations]=\"experiment.experimentAnnotations\"></ip-curation-annotations>\n      </div>\n\n  </div>\n</div>\n\n\n\n");

/***/ }),

/***/ 47748:
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.html ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h5>Experimental Conditions (2)</h5>\n  <table id=\"expConditions\">\n    <thead>\n      <th>Description</th>\n      <th>Unit</th>\n      <th>Value</th>\n    </thead>\n    <tbody>\n      <tr>\n        <td>aaa</td>\n        <td>aaaa</td>\n        <td>aaa</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ 49380:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h5>External Cross References ({{xrefs.length}})</h5>\n  <table id=\"externalXref\">\n    <thead>\n    <th>Database</th>\n    <th>Identifier</th>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let xref of xrefs\">\n      <td>\n        <ip-cv-term [cvTerm]=\"xref.database\"></ip-cv-term>\n      </td>\n\n      <td [ngSwitch]=\"xref.database.shortName\">\n        <form action=\"https://imexcentral.org/icentral/pubsrc.action\" method=\"post\" target=\"_blank\"\n              *ngSwitchCase=\"'imex'\">\n          <input name=\"opp.ns\" value=\"imex\" hidden/>\n          <input name=\"opp.ac\" [value]=\"extractImexPubId(xref.identifier)\" hidden/>\n          <input name=\"op.esrc\" value=\"SEARCH\" hidden/>\n          <input type=\"submit\" class=\"submit-to-link\" [value]=\"xref.identifier\">\n        </form>\n\n        <span *ngSwitchDefault>{{xref.identifier}}</span>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ 24474:
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.html ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded\">\n    <table id=\"featureTable\" class=\"display tableDisplay\">\n  </table>\n</div>\n");

/***/ }),

/***/ 4983:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded\">\n  <div class=\"columns medium-12 large-6\">\n\n    <h4>\n      Interaction Details\n    </h4>\n\n    <div id=\"detailsPanel\" class=\"margin-top-large margin-bottom-large\">\n\n      <div class=\"row expanded margin-top-large margin-bottom-large\">\n        <div class=\"columns medium-6 small-12\">\n          <div class=\"margin-top-large\">\n            <h5>Accession</h5>\n            {{interactionDetails.interactionAc}}\n          </div>\n          <div class=\"margin-top-large\">\n            <h5>Type</h5>\n            <ip-cv-term [cvTerm]=\"interactionDetails.type\"></ip-cv-term>\n          </div>\n\n          <div class=\"margin-top-large\">\n            <h5>Detection Method</h5>\n            <ip-cv-term [cvTerm]=\"interactionDetails.detectionMethod\"></ip-cv-term>\n          </div>\n\n          <div class=\"margin-top-large\">\n            <h5>Host Organism</h5>\n            <span [innerHTML]=\"interactionDetails.hostOrganism | organism\"></span>\n          </div>\n\n          <div class=\"margin-top-large\">\n            <h5>Positive Interaction</h5>\n            <span>{{interactionDetails.negative ? '❌' : '✔️'}}</span>\n          </div>\n        </div>\n\n        <div class=\"columns medium-6 small-12\">\n          <div id=\"extXrefs\" class=\"margin-top-large\" *ngIf=\"interactionDetails.xrefs.length!=0\">\n            <ip-external-xrefs *ngIf=\"interactionDetails.xrefs\"\n                               [xrefs]=\"interactionDetails.xrefs\"></ip-external-xrefs>\n          </div>\n\n          <div id=\"curationAnnotations\" class=\"margin-top-large\" *ngIf=\"interactionDetails.annotations.length!=0\">\n            <ip-curation-annotations *ngIf=\"interactionDetails.annotations\"\n                                     [annotations]=\"interactionDetails.annotations\"></ip-curation-annotations>\n          </div>\n        </div>\n\n        <div *ngIf=\"interactionDetails.parameters.length!=0\" id=\"parameters\" class=\"columns medium-6 small-12 margin-top-large\">\n          <ip-parameters *ngIf=\"interactionDetails.parameters\"\n                         [parameters]=\"interactionDetails.parameters\"></ip-parameters>\n        </div>\n\n        <div *ngIf=\"interactionDetails.confidences.length!=0\" id=\"confidences\" class=\"columns medium-6 small-12 margin-top-large\">\n          <ip-confidences *ngIf=\"interactionDetails.confidences\"\n                          [confidences]=\"interactionDetails.confidences\"></ip-confidences>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ip-publication [publication]=\"interactionDetails.publication\"></ip-publication>\n\n</div>\n");

/***/ }),

/***/ 46416:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <h5>Parameters ({{parameters.length}})</h5>\n  <table id=\"parameters\">\n    <thead>\n    <tr>\n      <th>Type</th>\n      <th>Unit</th>\n      <th>Value</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let param of parameters\">\n      <td>\n        <ip-cv-term [cvTerm]=\"param.type\"></ip-cv-term>\n      </td>\n      <td>{{param.value}}</td>\n      <td>\n        <!-- Parameter units are optional-->\n        <div *ngIf=\"param.unit\">\n          <ip-cv-term [cvTerm]=\"param.unit\"></ip-cv-term>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ 89655:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded\">\n    <table id=\"participantTable\" class=\"display tableDisplay\">\n  </table>\n</div>\n");

/***/ }),

/***/ 12997:
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.html ***!
  \*****************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"columns medium-12 large-6\">\n\n  <h4>Publication</h4>\n\n  <div id=\"publicationPanel\" class=\"margin-top-large margin-bottom-large\">\n    <div class=\"row expanded\">\n      <div class=\"columns medium-6\">\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.title\">\n          <h5>Title</h5>\n          {{publication.title}}\n        </div>\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.journal\">\n          <h5>Journal</h5>\n          {{publication.journal}}\n        </div>\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.authors\">\n          <h5>Authors</h5>\n          {{publication.authors}}\n        </div>\n        <div class=\"margin-top-large margin-bottom-large\" *ngIf=\"publication.publicationDate\">\n          <h5>Publication date</h5>\n          {{publication.publicationDate}}\n        </div>\n\n        <div class=\"margin-top-large margin-bottom-xlarge\" *ngIf=\"publication.pubmedId\">\n          <h5>Publication reference</h5>\n          <a href=\"https://europepmc.org/article/MED/{{publication.pubmedId}}?singleResult=true\"\n             target=\"_blank\" *ngIf=\"!publication.pubmedId.startsWith('unassigned'); else unassigned\">\n            PubMed: {{publication.pubmedId}}\n          </a>\n          <ng-template #unassigned>\n            <div class=\"button alert\">This publication is not present on PubMed yet.<br> Thus, this interaction is likely to come from a pre-publication </div>\n          </ng-template>\n        </div>\n\n      </div>\n\n      <div class=\"columns medium-6\">\n        <div id=\"extXrefs\" class=\"margin-top-large\" *ngIf=\"publication.publicationXrefs.length !== 0\">\n          <ip-external-xrefs *ngIf=\"publication.publicationXrefs\"\n                             [xrefs]=\"publication.publicationXrefs\"></ip-external-xrefs>\n        </div>\n\n        <div id=\"curationAnnotations\" class=\"margin-top-large\" *ngIf=\"publication.publicationAnnotations.length !== 0\">\n          <ip-curation-annotations *ngIf=\"publication.publicationAnnotations\"\n                                   [annotations]=\"publication.publicationAnnotations\"></ip-curation-annotations>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 95118:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interaction-details/details-viewer/details-viewer.component.html ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div id=\"details-viewer\" class=\"row expanded\">\n    <div id=\"interaction-viewer\" class=\"columns medium-9\">\n      <h4>Interaction Viewer</h4>\n      <div class=\"row expanded button-bar no-padding\">\n        <div class=\"button-group expanded columns large-8 medium-12 no-pad-left no-pad-right no-margin\">\n          <button class=\"button\" (click)=\"onChangeAnnotation('MI Features')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['MI Features'],\n                              'outlined': !annotations['MI Features']}\">\n            MI <span class=\"show-for-large\">Features</span>\n          </button>\n          <button class=\"button\" (click)=\"onChangeAnnotation('UniprotKB')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['UniprotKB'],\n                              'outlined': !annotations['UniprotKB']}\">\n            Uniprot <span class=\"show-for-large\">Features</span>\n          </button>\n          <button class=\"button\" (click)=\"onChangeAnnotation('Superfamily')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['Superfamily'],\n                              'outlined': !annotations['Superfamily']}\">\n            <span class=\"show-for-large\">Super</span>Family\n          </button>\n          <button class=\"button\" (click)=\"onChangeAnnotation('Interactor')\"\n                  [ngClass]=\"{'icon icon-common icon-spacer icon-check': annotations['Interactor'],\n                              'outlined': !annotations['Interactor']}\">\n            Interactor\n          </button>\n        </div>\n\n\n        <div class=\"button-group expanded columns large-4 medium-12 no-pad-left no-pad-right no-margin\">\n          <button class=\"button lighter\" (click)=\"expandAll()\">Expand <span class=\"show-for-large\">all</span></button>\n          <button class=\"button lighter\" (click)=\"collapseAll()\">Collapse <span class=\"show-for-large\">all</span>\n          </button>\n        </div>\n      </div>\n      <div id=\"interaction-viewer-container\"></div>\n\n    </div>\n\n    <div id=\"viewer-legend\" class=\"columns medium-3\">\n      <h4>Legend</h4>\n      <div id=\"legend\" class=\"scrollbar margin-bottom-small\">\n        <table *ngIf=\"colorLegendGroups\" class=\"color-key no-margin\">\n          <tbody>\n          <tr class=\"legend-group\">\n            <td colspan=\"2\" class=\"no-padding-left\">\n              <h5 class=\"no-margin\">Node Shape</h5>\n            </td>\n          </tr>\n          <tr *ngIf=\"hasNodeShapeOf('bioactive entity')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.TRIANGLE\" height=\"13pt\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">Bioactive Entity</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('complex')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.HEXAGON\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">Complex</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('gene')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.ROUNDED_RECTANGLE\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">Gene</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('dna')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.VEE\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">DNA</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('rna')\">\n            <td class=\"centered\">\n              <ip-node-diagram [color]=\"'#00000000'\" [borderColor]=\"'#000000'\"\n                               [shape]=\"NodeShape.DIAMOND\">\n              </ip-node-diagram>\n            </td>\n            <td class=\"legend-label\">RNA</td>\n          </tr>\n\n          <tr *ngIf=\"hasNodeShapeOf('protein')\">\n            <td class=\"centered\">\n              <svg viewBox=\"0 0 100 30\" xmlns=\"http://www.w3.org/2000/svg\" id=\"protein-svg\">\n                <rect [attr.can-animate]=\"canAnimate()\" id=\"rect-to-circle\" x=\"1\" y=\"6\" width=\"98\" height=\"18\"/>\n                <rect [attr.can-animate]=\"canAnimate()\" id=\"rect-tick\" x=\"48\" y=\"17\" width=\"2\" height=\"8\"/>\n              </svg>\n            </td>\n            <td class=\"legend-label\">Protein: click to switch</td>\n          </tr>\n\n          </tbody>\n\n          <tbody *ngFor=\"let group of colorLegendGroups\" id=\"{{group.name}}-colors\">\n          <tr class=\"legend-group\">\n            <td colspan=\"2\" class=\"no-padding-left\">\n              <h5 class=\"no-margin\">{{group.name}}</h5>\n            </td>\n          </tr>\n          <tr *ngFor=\"let legend of group.legends\">\n            <td *ngIf=\"legend.certain && !legend.uncertain\" [ngStyle]=\"{'background-color':legend.certain.color}\"\n                class=\"color-square\"></td>\n            <td *ngIf=\"!legend.certain && legend.uncertain\"\n                [ngStyle]=\"{'background':'repeating-linear-gradient(45deg, white, white 3px,'+legend.uncertain.color+' 0px,'+legend.uncertain.color+' 12px)'}\"\n                class=\"color-square\"></td>\n            <td *ngIf=\"legend.certain && legend.uncertain\" class=\"color-square no-padding\">\n              <div [ngStyle]=\"{width: '50%', height:'100%', float: 'left',\n              'background-color':legend.certain.color}\">\n              </div>\n              <div [ngStyle]=\"{width: '50%', height:'100%', float: 'right',\n              'background':'repeating-linear-gradient(45deg, white, white 3px,'+legend.uncertain.color+' 0px,'+legend.uncertain.color+' 12px)'}\">\n              </div>\n            </td>\n            <td class=\"legend-label\">{{legend.name}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 63144:
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.html ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form ngNoForm [action]=\"URL\" method=\"post\">\n  <label>\n    <input class=\"hidden\" type=\"text\" name=\"format\" [value]=\"format.name\">\n    <input class=\"hidden\" type=\"text\" name=\"query\" [value]=\"search.spacedQuery\">\n\n    <input class=\"hidden\" type=\"checkbox\" name=\"batchSearch\" [checked]=\"search.isBatchSearch\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"mutationFilter\" [checked]=\"filters.mutation\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"expansionFilter\" [checked]=\"filters.expansion\">\n    <input class=\"hidden\" type=\"checkbox\" name=\"intraSpecies\" [checked]=\"filters.intraSpecies\">\n\n    <input class=\"hidden\" type=\"text\" name=\"negativeFilter\" [value]=\"filters.negative\">\n    <input class=\"hidden\" type=\"text\" name=\"interactorAcs\"\n           *ngFor=\"let value of selection.interactorAcs\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"binaryInteractionIds\"\n           *ngFor=\"let value of selection.binaryInteractionIds\" [value]=\"value\">\n\n    <input class=\"hidden\" type=\"text\" name=\"minMIScore\" [value]=\"filters.currentMinMIScore\">\n    <input class=\"hidden\" type=\"text\" name=\"maxMIScore\" [value]=\"filters.currentMaxMIScore\">\n\n    <input class=\"hidden\" type=\"text\" name=\"interactorSpeciesFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.SPECIES)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactorTypesFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.INTERACTOR_TYPE)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactionTypesFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.INTERACTION_TYPE)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactionDetectionMethodsFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.DETECTION_METHOD)\" [value]=\"value\">\n    <input class=\"hidden\" type=\"text\" name=\"interactionHostOrganismsFilter\"\n           *ngFor=\"let value of filters.getFilter(filterTypes.HOST_ORGANISM)\" [value]=\"value\">\n  </label>\n  <button class=\"button lightest expanded\" [ngClass]=\"{'no-margin':last}\" [innerHTML]=\"format.html\"></button>\n</form>\n");

/***/ }),

/***/ 48334:
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.html ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"filters-bar\" class=\"button-bar\">\n  <div class=\"button-group rounded stack-for-small\">\n    <div class=\"button no-hover\">\n      <i class=\"icon icon-functional icon-spacer icon-filter\"></i> Filters\n    </div>\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interactor-species-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.SPECIES)}\">\n      Interactor Species\n    </button>\n    <div class=\"dropdown-pane\" id=\"interactor-species-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.SPECIES as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <thead>\n          <tr class=\"no-background\">\n            <th colspan=\"3\" class=\"no-horizontal-padding padding-vertical-small\">\n              <span class=\"float-right margin-right-medium\"><em>Filter out cross-species interactions</em></span>\n            </th>\n            <th colspan=\"2\" class=\"no-padding\">\n              <div class=\"centered-switch-wrap\">\n                <span class=\"label margin-right-medium\">Cross</span>\n                <mat-slide-toggle color=\"primary\"\n                                  (change)=\"onChangeInteractionIntraSpeciesFilter($event)\"\n                                  [disabled]=\"!filters.canFilterIntraSpecies()\"\n                                  [checked]=\"filters.intraSpecies\">\n                </mat-slide-toggle>\n                <span class=\"label margin-left-medium\">Intra</span>\n              </div>\n            </th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let species of filters.facets.combined_species\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\"\n              [ngClass]=\"{'disabled-row':filters.intraSpecies && species.valueCount.intra === 0}\">\n            <td class=\"no-padding\">\n              <input name=\"species\" type=\"checkbox\" class=\"vertically-centered\"\n                     #checkbox [value]=\"species.value\"\n                     (change)=\"onChangeInteractorSpeciesFilter($event)\"\n                     [disabled]=\"filters.intraSpecies && species.valueCount.intra === 0\"\n                     [checked]=\"filters.isFilteringValue(filter,species.value)\"/>\n            </td>\n            <td class=\"no-padding\">\n              <span class=\"term-id no-padding no-underline float-right\">{{species.termId}}</span>\n            </td>\n            <td class=\"no-padding\">\n              <span class=\"vertically-centered\">{{species.value}}</span>\n            </td>\n            <ng-template [ngIf]=\"!filters.intraSpecies\">\n              <td style=\"text-align: right\" class=\"no-padding\">\n                  <span class=\"tag-cell species-cell emphasized\"\n                        [ngStyle]=\"{'background-color':species.visualProperty}\"\n                  >{{species.valueCount.all}}</span>\n              </td>\n\n              <td class=\"no-padding\">\n                  <span class=\"tag-cell species-cell discreet\"\n                        [ngStyle]=\"{'border-color':species.visualProperty, 'color':species.visualProperty}\"\n                  >{{species.valueCount.intra}}</span>\n              </td>\n\n            </ng-template>\n\n\n            <ng-template [ngIf]=\"filters.intraSpecies\">\n              <td style=\"text-align: right\" class=\"no-padding\">\n                  <span class=\"tag-cell species-cell discreet\"\n                        [ngStyle]=\"{'border-color':species.visualProperty, 'color':species.visualProperty}\"\n                  >{{species.valueCount.all}}</span>\n              </td>\n\n              <td class=\"no-padding\">\n                  <span class=\"tag-cell species-cell emphasized\"\n                        [ngStyle]=\"{'background-color':species.visualProperty}\"\n                  >{{species.valueCount.intra}}</span>\n              </td>\n            </ng-template>\n          </tr>\n\n          </tbody>\n        </table>\n      </div>\n      <div class=\"reset-button no-margin\" *ngIf=\"filters.isFiltering(filter)\">\n        <button class=\"centered delete-button margin-top-medium\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interactor-type-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.INTERACTOR_TYPE)}\">\n      Interactor Type\n    </button>\n    <div class=\"dropdown-pane\" id=\"interactor-type-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.INTERACTOR_TYPE as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.type_MI_A_B_styled\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractorTypeFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized\">{{molecule.valueCount}}</span>\n            </td>\n            <td class=\"no-padding\">\n              <ip-node-diagram [shape]=\"shapes[molecule.visualProperty]\" color=\"#cdaae0\" class=\"margin-left-small\"\n                               height=\"16pt\" style=\"padding-right: 3px\"></ip-node-diagram>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\"\n                matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-type-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.INTERACTION_TYPE)}\">\n      Interaction Type\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-type-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.INTERACTION_TYPE as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.type_mi_identifier_styled\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractionTypeFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized light-background\"\n                    [ngStyle]=\"{'background-color':molecule.visualProperty , 'color': fontColor(molecule.visualProperty)}\">\n                {{molecule.valueCount}}\n              </span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-detection-method-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.DETECTION_METHOD)}\">\n      Interaction Detection Method\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-detection-method-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.DETECTION_METHOD as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.detection_method_s\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractionDetectionMethodFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized\"\n              >{{molecule.valueCount}}</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\"\n                matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-host-organism-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.HOST_ORGANISM)}\">\n      Interaction Host Organism\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-host-organism-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.HOST_ORGANISM as filter\">\n      <div class=\"scrollbar filter\" [ngStyle]=\"scrollStyle(filter)\">\n        <table class=\"no-margin table-scroll\">\n          <tbody>\n          <tr *ngFor=\"let molecule of filters.facets.host_organism_taxId_styled\"\n              (click)=\"$event.target !== checkbox ? checkbox.click() : null\">\n            <td class=\"no-padding\">\n              <input #checkbox type=\"checkbox\" value=\"{{molecule.value}}\" class=\"vertically-centered\"\n                     (change)=\"onChangeInteractionHostOrganismFilter($event)\"\n                     [checked]=\"filters.isFilteringValue(filter, molecule.value)\"/>\n              <span>{{molecule.value}}</span>\n            </td>\n            <td style=\"padding: 0 0 0 0.4rem;\" class=\"float-right\">\n              <span class=\"tag-cell species-cell emphasized\"\n                    [ngStyle]=\"{'background-color':molecule.visualProperty }\"\n              >{{molecule.valueCount}}</span>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-mutation-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.MUTATION)}\">\n      Mutation\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-mutation-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.MUTATION as filter\">\n      <em>Interactions affected by mutation only</em>\n      <div class=\"centered-switch-wrap\">\n        <span class=\"tag-cell species-cell margin-right-small\"\n              [ngClass]=\"{'discreet':filters.mutation, 'emphasized':!filters.mutation}\">{{filters.nbNonMutation}}</span>\n        <mat-slide-toggle color=\"primary\"\n                          (change)=\"filters.updateFilter(filter, $event.checked)\"\n                          [disabled]=\"!filters.hasMutation\"\n                          [checked]=\"filters.mutation\">\n        </mat-slide-toggle>\n        <span class=\"tag-cell species-cell emphasized\" style=\"margin-left: 4px;\"\n              [ngStyle]=\"{\n              'background-color': filters.mutation ? filters.mutationColor : 'white',\n              'color': filters.mutation ? 'white' : filters.mutationColor,\n              'border-color': filters.mutationColor\n              }\"\n              [ngClass]=\"{'discreet':!filters.mutation, 'emphasized':filters.mutation}\">{{filters.nbMutation}}</span>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-expansion-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.EXPANSION)}\">\n      Expansion\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-expansion-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\" *ngIf=\"filterTypes.EXPANSION as filter\">\n\n      <em>Non-expanded interactions only</em>\n      <div class=\"centered-switch-wrap\">\n        <span class=\"tag-cell species-cell dashed margin-right-small\"\n              [ngClass]=\"{'discreet':filters.expansion, 'emphasized':!filters.expansion}\">{{filters.nbNonExpansion}}</span>\n        <mat-slide-toggle color=\"primary\"\n                          (change)=\"filters.updateFilter(filter, $event.checked)\"\n                          [disabled]=\"!filters.hasExpansion\"\n                          [checked]=\"filters.expansion\">\n        </mat-slide-toggle>\n        <span class=\"tag-cell species-cell emphasized\" style=\"margin-left: 4px;\"\n              [ngClass]=\"{'discreet':!filters.expansion, 'emphasized':filters.expansion}\">{{filters.nbExpansion}}</span>\n      </div>\n    </div>\n\n    <button class=\"button lighter\" type=\"button\" data-toggle=\"interaction-negative-dropdown\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.NEGATIVE)}\">\n      Negative\n    </button>\n    <div class=\"dropdown-pane\" id=\"interaction-negative-dropdown\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\">\n      <ip-negative-filter></ip-negative-filter>\n    </div>\n\n    <button class=\"button lighter on-top\" type=\"button\" data-toggle=\"score-dropdown\"\n            [@bendTip]=\"filters.anyFiltersSelected() ? 'tipStraight' : 'tipBended'\"\n            [ngClass]=\"{'underline': filters.isFiltering(filterTypes.MI_SCORE)}\">\n      MI Score\n    </button>\n    <div class=\"dropdown-pane\" id=\"score-dropdown\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\"\n         *ngIf=\"filterTypes.MI_SCORE as filter\">\n      <div style=\"width: 300px\" class=\"custom-slider margin-bottom-large\">\n        <ngx-slider class=\"columns medium-3\" [(value)]=\"filters.currentMinMIScore\"\n                    [(highValue)]=\"filters.currentMaxMIScore\"\n                    [options]=\"options\"\n                    (userChangeEnd)=\"onUserChangeEnd($event)\"></ngx-slider>\n      </div>\n      <div *ngIf=\"filters.isFiltering(filter)\" class=\"margin-top-medium reset-button\">\n        <button class=\"delete-button\" (click)=\"filters.resetFilter(filter)\"\n                matTooltip=\"Remove filter\" matTooltipPosition=\"below\">\n          <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n        </button>\n      </div>\n    </div>\n\n\n    <button @slideIn *ngIf=\"filters.anyFiltersSelected()\" class=\"button lighter\" type=\"button\"\n            (click)=\"filters.resetAllFilters()\"\n            style=\"z-index: 0\">\n      <i class=\"icon icon-functional\" data-icon=\"d\"></i>\n    </button>\n\n  </div>\n\n  <div class=\"button-group rounded stack-for-small\">\n    <div class=\"button no-hover\">\n      <i class=\"icon icon-functional icon-spacer icon-share\"></i> Export\n    </div>\n\n    <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"export-network\" *ngIf=\"view.visible\">\n      Network\n    </button>\n    <div class=\"dropdown-pane no-padding no-border\" id=\"export-network\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\">\n      <ul class=\"no-bullet no-margin\">\n        <li><a class=\"button lightest expanded\" (click)=\"view.viewer.exportAs('png')\">PNG</a></li>\n        <li><a class=\"button lightest expanded no-margin\" (click)=\"view.viewer.exportAs('graphml')\">GraphML</a>\n        </li>\n      </ul>\n    </div>\n\n    <button class=\"button lighter adjust-width\" type=\"button\" data-toggle=\"export-table\">\n      Table\n    </button>\n    <div class=\"dropdown-pane no-padding no-border\" id=\"export-table\" data-dropdown data-hover=\"true\"\n         data-hover-pane=\"true\">\n      <ul class=\"no-bullet no-margin\">\n        <li *ngFor=\"let format of formats; let last = last;\">\n          <ip-download-form [format]=\"format\" [last]=\"last\"></ip-download-form>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 17683:
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-filters/negative-filter/negative-filter.component.html ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <em>Negative and/or positive</em>\n  <em class=\"margin-bottom-xsmall\">interactions only</em>\n  <mat-button-toggle-group [ngModel]=\"filters.negative\" (change)=\"filters.updateFilter(FILTER.NEGATIVE, $event.value)\"\n                           aria-label=\"Negative interaction filter\">\n    <mat-button-toggle [value]=\"STATUS.POSITIVE_ONLY\" [disabled]=\"filters.nbPositive === 0\">\n      <div class=\"bi-layered\">\n        <span class=\"top-level\">✔️</span>\n        <span class=\"bottom-level\">{{filters.nbPositive}}</span>\n      </div>\n    </mat-button-toggle>\n    <mat-button-toggle [value]=\"STATUS.POSITIVE_AND_NEGATIVE\">\n      <div class=\"bi-layered\">\n        <span class=\"top-level\">✔️ | ❌</span>\n        <span class=\"bottom-level\">{{filters.nbPositive + filters.nbNegative}}</span>\n      </div>\n    </mat-button-toggle>\n    <mat-button-toggle [value]=\"STATUS.NEGATIVE_ONLY\" [disabled]=\"filters.nbNegative === 0\">\n      <div class=\"bi-layered\">\n        <span class=\"top-level\">❌</span>\n        <span class=\"bottom-level\">{{filters.nbNegative}}</span>\n      </div>\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n\n\n");

/***/ }),

/***/ 9948:
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-list/interactions-list.component.html ***!
  \*********************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row expanded margin-top-large margin-bottom-large\">\n\n  <!--  TODO make this bookmarkable like the documentation, it needs to take into account the url params -->\n  <ul class=\"tabs\" data-tabs id=\"search-results-tabs\">\n    <li class=\"tabs-title is-active\">\n      <a href=\"#interactions\" aria-selected=\"true\" (click)=\"interactionsTabSelected()\">Interactions</a>\n    </li>\n    <li class=\"tabs-title\"><a href=\"#interactor\" (click)=\"interactorsTabSelected()\">Interactors</a></li>\n\n    <ip-column-toggle *ngIf=\"isInteractionTableShown\"\n                      [columns]=\"interactionsTable.columns\"\n                      [dataTable]=\"interactionsTable.dataTable\"\n                      [columnView]=\"interactionsTable.columnView\"\n                      [isTabActive]=\"isTabInteractionActive\" class=\"float-right\"></ip-column-toggle>\n\n    <ip-column-toggle *ngIf=\"!isInteractionTableShown\"\n                      [columns]=\"interactorsTable.columns\"\n                      [dataTable]=\"interactorsTable.dataTable\"\n                      [columnView]=\"interactorsTable.columnView\"\n                      [isTabActive]=\"isTabInteractorActive\" class=\"float-right\"></ip-column-toggle>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"search-results-tabs\" data-deep-link=\"true\" data-update-history=\"false\">\n    <div class=\"tabs-panel table-tab is-active\" id=\"interactions\">\n      <ip-interactions-table [interactionTab]=\"isTabInteractionActive\"></ip-interactions-table>\n    </div>\n\n    <div class=\"tabs-panel table-tab\" id=\"interactor\">\n      <ip-interactors-table [interactorTab]=\"isTabInteractorActive\"></ip-interactors-table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 7498:
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div id=\"innerTable\">\n    <table id=\"interactionsTable\" class=\"display tableDisplay\">\n    </table>\n  </div>\n</div>\n");

/***/ }),

/***/ 74241:
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.html ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <table id=\"interactorsTable\" class=\"display tableDisplay\">\n  </table>\n</div>\n\n");

/***/ }),

/***/ 97065:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-results.component.html ***!
  \******************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"results\" class=\"row expanded\">\n  <div class=\"columns medium-12\">\n    <mat-expansion-panel *ngIf=\"isLongTitle; else standardTitle\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h2>Search for {{shortTerms}}</h2>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <p>{{title}}</p>\n    </mat-expansion-panel>\n    <ng-template #standardTitle>\n      <h2>Search for {{title}}</h2>\n    </ng-template>\n  </div>\n\n  <div *ngIf=\"hasResults; else noResults\" style=\"display: contents\">\n    <div class=\"columns medium-12 sticky-bar\">\n      <ip-interactions-filters *ngIf=\"interactionsSearch; else loadingSpinner\">\n\n      </ip-interactions-filters>\n      <ng-template #loadingSpinner>\n        <ip-progress-spinner class=\"margin-top-large margin-bottom-large\"></ip-progress-spinner>\n      </ng-template>\n    </div>\n\n    <div class=\"columns medium-12\">\n      <ip-interactions-viewer></ip-interactions-viewer>\n\n      <ip-interactions-list></ip-interactions-list>\n    </div>\n  </div>\n\n  <ng-template #noResults>\n    <div class=\"row expanded margin-top-large margin-bottom-large margin-left-medium margin-right-medium\">\n      <div class=\"columns medium-12\">\n        <div class=\"alert-panel\">\n          <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> No results found</h3>\n          No interactions were found for your query: <b>{{search.query}}</b><br>\n          To solve this problem, you can:\n          <ul>\n            <li>Check the spelling</li>\n            <li>Use the auto suggestion</li>\n            <li>Use <a href=\"http://www.ebi.ac.uk/Tools/webservices/psicquic/view/main.xhtml?query={{search.query}}\"\n                       target=\"_blank\">PSICQUIC</a> to search among our IMEx partner databases\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ 78340:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.html ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"underline margin-bottom-large\">Legend</h4>\n\n<div id=\"node-legends\">\n  <h5>Nodes</h5>\n  <div>\n    <span>Color ~ <i>Species</i></span>\n    <div id=\"species-colors\" *ngIf=\"legend.node_legend.species_color\">\n      <div *ngFor=\"let key of objectKeys(legend.node_legend.species_color)\" class=\"node-line\">\n        <ip-node-diagram [color]=\"legend.node_legend.species_color[key]\"></ip-node-diagram>\n        <span><i class=\"network-legend-label\">{{key}}</i></span>\n      </div>\n    </div>\n\n    <div id=\"kingdom-colors\" *ngIf=\"legend.node_legend.kingdom_color\">\n      <div *ngFor=\"let key of objectKeys(legend.node_legend.kingdom_color)\" class=\"node-line\">\n        <ip-node-diagram [color]=\"legend.node_legend.kingdom_color[key]\"></ip-node-diagram>\n        <span class=\"network-legend-label\">{{key}}</span>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"node-shapes\" *ngIf=\"legend.node_legend.shape\">\n    <span>Shape ~ <i>Type</i></span>\n    <div *ngFor=\"let key of objectKeys(legend.node_legend.shape)\" class=\"node-line\">\n      <ip-node-diagram [shape]=\"legend.node_legend.shape[key]\"></ip-node-diagram>\n      <span>{{key}}</span>\n    </div>\n  </div>\n\n  <div *ngIf=\"mutation && legend.node_legend.border_color.true\" id=\"node-mutation\">\n    <span>Border ~ <i>Affected by mutation</i></span>\n    <div *ngFor=\"let status of ['true']\" class=\"node-line\">\n      <ip-node-diagram [borderColor]=\"legend.node_legend.border_color[status].value\"></ip-node-diagram>\n      <span class=\"network-legend-label\">{{legend.node_legend.border_color[status].label}}</span>\n    </div>\n  </div>\n</div>\n\n<div id=\"edge-legends\">\n  <h5>Edges</h5>\n\n  <div *ngIf=\"expanded; else collapsedLegend\">\n    <div *ngIf=\"!mutation; else mutationLegend\">\n      <span>Color ~ <i>Type</i></span>\n      <div *ngFor=\"let key of objectKeys(legend.edge_legend.evidence_color)\" class=\"edge-line\">\n        <ip-edge-diagram [color]=\"legend.edge_legend.evidence_color[key]\"></ip-edge-diagram>\n        <span class=\"network-legend-label\">{{key}}</span>\n      </div>\n    </div>\n\n    <ng-template #mutationLegend>\n      <div>\n        <span>Color ~ <i>Affected by mutation</i></span>\n        <div *ngFor=\"let status of ['true']\" class=\"edge-line\">\n          <ip-edge-diagram [color]=\"legend.edge_legend.mutation_color[status].value\"></ip-edge-diagram>\n          <span class=\"network-legend-label\">{{legend.edge_legend.mutation_color[status].label}}</span>\n        </div>\n      </div>\n    </ng-template>\n    <div *ngIf=\"legend.edge_legend.expansion.true\">\n      <span>Shape ~ <i>Expansion method</i></span>\n      <div *ngFor=\"let status of ['true']\" class=\"edge-line\">\n        <ip-edge-diagram [shape]=\"legend.edge_legend.expansion[status].value\"></ip-edge-diagram>\n        <span class=\"network-legend-label\">{{legend.edge_legend.expansion[status].label}}</span>\n      </div>\n    </div>\n    <div *ngIf=\"legend.edge_legend.negative?.true\">\n      <span>Cross ~ <i>Positive interaction</i></span>\n      <div *ngFor=\"let status of ['true']\" class=\"edge-line\">\n        <ip-edge-diagram [midCrossColor]=\"legend.edge_legend.negative[status]?.value\" ></ip-edge-diagram>\n        <span class=\"network-legend-label\">{{legend.edge_legend.negative[status]?.label}}</span>\n      </div>\n    </div>\n\n  </div>\n  <ng-template #collapsedLegend>\n    <div *ngIf=\"legend.edge_legend.summary_color\">\n      <span>Color ~ <i>MI Score</i></span>\n      <ip-color-range-diagram [rangeMap]=\"legend.edge_legend.summary_color\"></ip-color-range-diagram>\n    </div>\n\n    <div>\n      <span>Width ~ <i>#Evidence</i></span>\n      <ip-edge-thickness-diagram [minValue]=\"legend.edge_legend.summary_width.minValue\"\n                                 [maxValue]=\"legend.edge_legend.summary_width.maxValue\"\n                                 [minThickness]=\"legend.edge_legend.summary_width.minWidth\"\n                                 [maxThickness]=\"legend.edge_legend.summary_width.maxWidth\"\n                                 [color]=\"'#e75a00'\"></ip-edge-thickness-diagram>\n    </div>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ 4447:
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.html ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large\" id=\"network-viewer-container\"\n     *ngIf=\"view.visible || !view.error; else error\">\n  <div class=\"columns small-12 medium-6 large-2\" id=\"toolbar-column\">\n    <h4 class=\"underline margin-bottom-large\">\n      <i class=\"icon icon-common icon-spacer icon-tool\"></i>Network Tools\n    </h4>\n    <div class=\"row\">\n      <button id=\"reset\" class=\"button expanded\" type=\"button\" (click)=\"onClickReset()\">\n        <i class=\"icon icon-common icon-spacer icon-redo-alt\"></i>Redraw Network\n      </button>\n    </div>\n\n    <ul class=\"vertical menu facets\">\n      <h5>Layout</h5>\n      <div class=\"margin-bottom-large\" style=\"background-color: #fbfbfb\">\n        <li>\n          <span class=\"margin-left-small\">\n          <input #forcedirected type=\"radio\" name=\"layout\" (change)=\"onChangeLayout($event, forcedirected.value)\"\n                 value=\"fcose\" [checked]=\"view.layoutName === forcedirected.value\" id=\"force-directed\"/>\n              <label for=\"force-directed\">Force directed</label>\n          </span>\n        </li>\n        <li>\n          <span class=\"margin-left-small\">\n          <input #avsdf type=\"radio\" name=\"layout\" (change)=\"onChangeLayout($event, avsdf.value)\" value=\"avsdf\"\n                 id=\"avsdf\" [checked]=\"view.layoutName === avsdf.value\"/>\n                <label for=\"avsdf\">Circular</label>\n          </span>\n        </li>\n        <li>\n          <span class=\"margin-left-small\">\n          <input #cise type=\"radio\" name=\"layout\" (change)=\"onChangeLayout($event, cise.value)\" value=\"cise\"\n                 id=\"cise\" [checked]=\"view.layoutName === cise.value\" [disabled]=\"groupby.checked\"/>\n                <label for=\"cise\">Bubbles</label>\n          </span>\n        </li>\n      </div>\n\n      <h5>Edges</h5>\n      <div class=\"margin-bottom-large\" style=\"background-color: #fbfbfb\">\n        <li>\n          <span class=\"margin-left-small\">\n          <input #expand type=\"checkbox\" (change)=\"onChangeExpand(expand.checked, affectedByMutationCb)\"\n                 [checked]=\"view.expanded\" id=\"expand\"/>\n            <label for=\"expand\">Expand</label>\n          </span>\n        </li>\n        <li>\n          <span class=\"margin-left-small tool-tip\">\n            <input #affectedByMutationCb type=\"checkbox\" id=\"affectedByMutationCb\"\n                   (change)=\"onChangeAffectedByMutation(affectedByMutationCb.checked, expand)\"\n                   [checked]=\"view.affectedByMutation\" [disabled]=\"!hasMutation\"/>\n            <label for=\"affectedByMutationCb\" [ngClass]=\"{'disabled':!hasMutation}\">Affected By Mutation</label>\n            <span class=\"tool-tip-text\" *ngIf=\"!hasMutation\">There is no mutation in this network</span>\n          </span>\n        </li>\n      </div>\n\n      <h5>Group By</h5>\n      <div class=\"margin-bottom-large\" style=\"background-color: #fbfbfb\">\n        <li>\n          <span class=\"margin-left-small\">\n          <input #groupby type=\"checkbox\" (change)=\"onChangeGroupBy(groupby.checked)\"\n                 [checked]=\"view.groupBySpecies\" id=\"group-by\" [disabled]=\"cise.checked\"/>\n            <label for=\"group-by\">Species</label>\n          </span>\n        </li>\n      </div>\n    </ul>\n  </div>\n\n  <div class=\"columns medium-12 large-8\" id=\"viewer-column\">\n    <h4 class=\"underline margin-bottom-large\">Interaction Network</h4>\n    <div id=\"graph-top-panel\">\n      <div id=\"suggestions_div\">\n        <div class=\"input-group margin-bottom-none\">\n          <input id=\"nodeL\" #nodeL class=\"input-group-field\" type=\"text\" (keydown.enter)=\"onClickSearch(nodeL.value)\"\n                 placeholder=\"Interactor Name\"/>\n          <div class=\"input-group-button\">\n            <input id=\"network-search-button\" type=\"button\" name=\"submit\" value=\"1\" (click)=\"onClickSearch(nodeL.value)\"\n                   class=\"button icon icon-functional\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"for-canvas-graph\"></div>\n  </div>\n\n  <div class=\"columns small-12 medium-6 large-2\" id=\"legend-column\" *ngIf=\"legend\">\n    <ip-interactions-legend [legend]=\"legend\" [expanded]=\"view.expanded\"\n                            [mutation]=\"view.affectedByMutation\"></ip-interactions-legend>\n  </div>\n</div>\n\n<ng-template #error>\n\n  <div [ngSwitch]=\"view.error.status\" class=\"row expanded margin-top-large margin-bottom-large\" id=\"no-network-viewer\">\n    <div class=\"alert-panel\" *ngSwitchCase=\"403\">\n      <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Too many results</h3>\n      There are more than <b>1500 interactions</b> in your results, too many for our network\n      viewer display, sorry.<br>\n      To solve this problem, you can:\n      <ul>\n        <li>Use the filters above</li>\n        <li>Make your search more specific</li>\n        <li>Use <a href=\"https://apps.cytoscape.org/apps/intactapp\">IntAct App</a> on <a href=\"https://cytoscape.org/\">Cytoscape</a>\n          to visualise without size restrictions\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"alert-panel\" *ngSwitchDefault>\n      <h3><i class=\"icon icon-common icon-exclamation-triangle\"></i> Error {{view.error.status}}\n        : {{view.error.statusText}}</h3>\n      <p><i>{{view.error.message}}</i></p>\n      An unexpected error occurred. Please help us fix this issue by describing the steps that led to this error <a\n      href=\"//www.ebi.ac.uk/support/intact\">in our feedback area</a>\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ 27008:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactomes/interactome/interactome.component.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" *ngIf=\"interactome.symbol\">\n  <div class=\"medium-12\">\n    <b>{{interactome.scientificName}}</b><br>\n    {{interactome.nameDetails}}\n  </div>\n  <a href=\"https://www.uniprot.org/taxonomy/{{interactome.taxid}}\" target=\"_blank\">{{interactome.taxid}}</a>\n\n  <div class=\"flex-spacer\"></div>\n  <div class=\"medium-12\" style=\"text-align: center\">\n    <button (click)=\"search.speciesSearch(interactome)\" class=\"species-button\">\n        <span [attr.data-icon]=\"interactome.symbol\" style=\"color: #68297c\"\n              [ngClass]=\"{'icon ': true,'icon-species': interactome.symbol !== '?', 'icon-functional': interactome.symbol === '?'}\">\n        </span>\n    </button>\n  </div>\n  <div class=\"actions button-group no-margin\">\n    <button class=\"button lighter\" (click)=\"goToInteractomePSI25()\">miXML 2.5</button>\n    <button class=\"button lighter\" (click)=\"goToInteractomePSI30()\">miXML 3.0</button>\n  </div>\n</div>\n\n");

/***/ }),

/***/ 9595:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/interactomes/interactomes.component.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"columns medium-12\" style=\"display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  grid-gap: 1rem;\">\n    <div class=\"medium-12\" *ngFor=\"let interactome of interactomes\" style=\"break-inside: avoid-column\">\n      <ip-interactome [interactome]=\"interactome\"></ip-interactome>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 31728:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/contributors/contributors.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"contributors\" class=\"margin-top-large\" style=\"text-align: center\">\n  <h4><p class=\"icon icon-generic\" data-icon=\"}\"> Our Contributors</p></h4>\n</div>\n\n<div style=\"text-align: center\">\n  <a href=\"//mint.bio.uniroma2.it\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_mint_s.png\" alt=\"Mint\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.uniprot.org\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_uniprot_s.png\" alt=\"UniProt\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.expasy.org/resources/uniprotkb-swiss-prot\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_sib_s.png\" alt=\"SIB\" style=\"height:50px\">\n  </a>\n  <a href=\"//dip.doe-mbi.ucla.edu/dip/Main.cgi\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_dip_s.png\" alt=\"DIP\" style=\"height:50px\">\n  </a>\n  <a href=\"//ophid.utoronto.ca/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_id2_s.png\" alt=\"ID2\" style=\"\n    height: 75px;\n    background-image: radial-gradient(farthest-side at 0 100%, #39bbc7, #3A332D);\n    padding: 5px;\n    border-radius: 5px;\">\n  </a>\n  <a href=\"//www.innatedb.com\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_innatedb_s.png\" alt=\"InnateDB\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.molecularconnections.com\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_mconnections_s.png\" alt=\"Molecular Connections\" style=\"height:50px\">\n  </a>\n  <a href=\"http://matrixdb.univ-lyon1.fr/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_matrixdb_s.png\" alt=\"matrixDB\" style=\"height:75px\">\n  </a>\n  <a href=\"//www.mechanobio.info\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_mbinfo_s.png\" alt=\"mbInfo\" style=\"height: 50px;\n    background-color: rgba(18,58,83,0.7);\n    border-radius: 10px;\n    padding: 5px;\">\n  </a>\n  <a href=\"//agbase.arizona.edu/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_agbase_s.png\" alt=\"AGBase\" style=\"height:75px; \">\n  </a>\n  <a href=\"//hpidb.igbb.msstate.edu/\" target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_hpidb.png\" alt=\"HPIDB\" style=\"height:50px; border-radius: 10px;\">\n  </a>\n  <a href=\"//www.ucl.ac.uk/cardiovascular/research/pre-clinical-and-fundamental-science/functional-gene-annotation\"\n     target=\"_blank\">\n    <img src=\"assets/images/contributors/imex_acg_s.png\" alt=\"ACG\" style=\"height:50px\">\n  </a>\n  <a href=\"//www.imexconsortium.org\" target=\"_blank\">\n    <img style=\"height: 100px\" src=\"assets/images/contributors/IMEx_logo_webmedium.jpg\" alt=\"IMEx\">\n  </a>\n</div>\n\n");

/***/ }),

/***/ 4430:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/header/compact-header/compact-header.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"masthead\" class=\"masthead compact-for-data\">\n  <div class=\"masthead-inner row expanded collapse\">\n    <!-- local-title -->\n    <div>\n      <a routerLink=\"/home\" title=\"Back to IntAct homepage\">\n        <div class=\"media-object\" id=\"local-title\">\n          <div class=\"media-object-section\">\n            <img class=\"padding-bottom-small\" src=\"assets/images/logo/intact_logo.svg\" alt=\"IntAct logo\"\n                 style=\"height: 3rem;\">\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- /local-title -->\n\n    <ip-local-search style=\"flex: 1\"></ip-local-search>\n\n    <!-- local-nav -->\n    <nav>\n      <ul id=\"local-nav\" class=\"dropdown menu float-left\" data-dropdown-menu=\"true\" data-description=\"navigational\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/download\" routerLinkActive=\"active\">Download</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/documentation\" routerLinkActive=\"active\">Documentation</a></li>\n        <!--  TODO replace back with Support and remove hard code styling after the beta finish-->\n        <li routerLinkActive=\"active\"><a style=\"background: crimson\" href=\"//www.ebi.ac.uk/support/intact\">Feedback <i class=\"icon icon-generic\"\n                                                                                          data-icon=\"x\"></i></a></li>\n      </ul>\n    </nav>\n    <!-- /local-nav -->\n  </div>\n  <ip-progress-bar></ip-progress-bar>\n</header>\n");

/***/ }),

/***/ 65554:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/header/expanded-header/expanded-header.component.html ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"masthead\" class=\"masthead\">\n  <div class=\"masthead-inner row expanded\"> <!-- expanded -->\n    <!-- local-title -->\n    <div class=\"columns\">\n      <a routerLink=\"/home\" title=\"Back to Intact homepage\">\n        <div class=\"media-object\" id=\"local-title\">\n          <div class=\"media-object-section\" >\n            <img src=\"assets/images/logo/intact_logo.svg\" alt=\"IntAct logo\" class=\"padding-left-large\" style=\"height:5em; width:21em;\">\n          </div>\n        </div>\n      </a>\n    </div>\n    <!-- /local-title -->\n\n    <!-- local-nav -->\n    <div class=\"row expanded no-padding\">\n      <nav class=\"bar column medium-6 small-12 no-padding\">\n        <ul id=\"local-nav\" class=\"dropdown menu\" data-dropdown-menu=\"true\" data-description=\"navigational\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/download\" routerLinkActive=\"active\">Download</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/documentation\" routerLinkActive=\"active\">Documentation</a></li>\n          <li routerLinkActive=\"active\"><a style=\"background: crimson\" href=\"//www.ebi.ac.uk/support/intact\">Feedback <i class=\"icon icon-generic\" data-icon=\"x\"></i></a></li>\n        </ul>\n      </nav>\n\n      <ip-local-search class=\"column medium-5 small-12 no-padding\"></ip-local-search>\n    </div>\n\n    <!-- /local-nav -->\n  </div>\n</header>\n");

/***/ }),

/***/ 95674:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/header/local-search/local-search.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngStyle]=\"{'visibility':!hasRoute('home') ? 'visible': 'hidden'}\" id=\"intact-local-search\">\n  <div id=\"localSearchBox\" class=\"no-margin white-border\">\n    <input #query class=\"typeahead frosty-glass\" type=\"text\" name=\"first\" id=\"local-searchbox\"\n           (keydown.enter)=\"search(query.value, 'enter')\"\n           placeholder=\"Search by gene names, UniProt ACs, Pubmed, protein names, Complex ACs\"/>\n    <button id=\"local-search-button\" class=\"button\"\n            (click)=\"search(query.value, 'button')\">\n      <i class=\"icon icon-common icon-search\"></i>\n    </button>\n\n  </div>\n</div>\n");

/***/ }),

/***/ 35774:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/loading-indicators/progress-bar/progress-bar.component.html ***!
  \***************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar *ngIf=\"isDisplayed\"\n                 [color]=\"color\"\n                 [mode]=\"mode\">\n</mat-progress-bar>\n\n");

/***/ }),

/***/ 13999:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.html ***!
  \***********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"small-5 small-centered columns\">\n  <mat-progress-spinner style=\"margin:0 auto;\"\n                       [attr.color]=\"color\"\n                       [mode]=\"mode\"\n                       [value]=\"0\">\n  </mat-progress-spinner>\n  <div style=\"text-align: center\">\n    <h4>Loading {{query}}</h4>\n    <p *ngIf=\"takesLonger\">This takes longer than usual. Bear with us!</p>\n  </div>\n</div>\n");

/***/ }),

/***/ 3488:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/layout/local-footer/local-footer.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Optional local footer (insert citation / project-specific copyright / etc here -->\n<footer id=\"local-footer\" class=\"local-footer\" role=\"local-footer\">\n  <div class=\"row expanded margin-top-medium\">\n    <ip-contributors></ip-contributors>\n  </div>\n</footer>\n<!-- End optional local footer -->\n");

/***/ }),

/***/ 68809:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/about/about.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>About</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"about-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"about#overview\" aria-selected=\"true\">Overview</a></li>\n    <li class=\"tabs-title\"><a href=\"about#collaborators\">Collaborators</a></li>\n    <li class=\"tabs-title\"><a href=\"about#funding\">Funding</a></li>\n    <li class=\"tabs-title\"><a href=\"about#statistics\">Statistics</a></li>\n    <li class=\"tabs-title\"><a href=\"about#publications\">Publications</a></li>\n    <li class=\"tabs-title\"><a href=\"about#license_privacy\">License and Privacy</a></li>\n    <li class=\"tabs-title\"><a href=\"about#conceptual_design\">Logo and Design Portfolio</a></li>\n    <li class=\"tabs-title\"><a href=\"about#sab\">SAB</a></li>\n   </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"about-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"overview\">\n      <ip-markdown [src]=overview></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"collaborators\">\n      <ip-markdown [src]=collaborators></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"funding\">\n      <ip-markdown [src]=funding></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"statistics\">\n      <ip-markdown [data]=statistics></ip-markdown>\n      <p>Work in progress</p>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"publications\">\n      <ip-markdown [src]=publications></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"license_privacy\">\n      <ip-markdown [src]=license_privacy></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"conceptual_design\">\n      <ip-markdown [src]=conceptual_design></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"sab\">\n      <ip-markdown [src]=sab></ip-markdown>\n    </div>\n\n    <div class=\"tabs-panel\" id=\"cite_us\">\n      <ip-markdown [src]=cite_us></ip-markdown>\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ 43633:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/data-submission/data-submission.component.html ***!
  \********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Data Submission</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"data-submission-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/datasets#how-to-submit\" aria-selected=\"true\">How to submit?</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"data-submission-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"how-to-submit\">\n      <ip-markdown [src]=how_to_submit></ip-markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 90467:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/datasets/datasets.component.html ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Datasets</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"datasets-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/datasets#dataset\" aria-selected=\"true\">Datasets</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"datasets-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"dataset\">\n      <ip-markdown [src]=dataset></ip-markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 5090:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/documentation.component.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row button-grid\" data-equalizer data-equalize-on=\"large\" id=\"doc-button-grid\">\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./user-guide\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf129;\"></h3>\n      <h5 class=\"white-color\">User Guide</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./technical_corner\">\n      <h3 class=\"icon icon-common white-color \"data-icon=\"&#xf11c;\"></h3>\n      <h5 class=\"white-color\">Technical Corner</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./datasets\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf187;\"></h3>\n      <h5 class=\"white-color\">Datasets</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./data_submission\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf093;\"></h3>\n      <h5 class=\"white-color\">Data Submission</h5></a>\n  </div>\n</div>\n");

/***/ }),

/***/ 25103:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/shared/markdown/markdown.component.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [innerHTML]=\"output\"></div>\n");

/***/ }),

/***/ 60504:
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/technical-corner/technical-corner.component.html ***!
  \**********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Technical Corner</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"technical-corner-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/technical_corner#apis\" aria-selected=\"true\">APIs</a></li>\n    <!--li class=\"tabs-title\"><a href=\"documentation/technical_corner#source_code\">Source Code</a></li-->\n    <li class=\"tabs-title\"><a href=\"documentation/technical_corner#tools\">Tools</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"technical-corner-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"apis\">\n      <ip-markdown [src]=apis></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"source_code\">\n      <ip-markdown [src]=source_code></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"tools\">\n      <ip-markdown [src]=tools></ip-markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 94503:
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/documentation/user-guide/user-guide.component.html ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>User Guide</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"user-guide-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"documentation/user-guide#data_sources\" aria-selected=\"true\">Data Sources & Annotation Practices</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#usage\">Searching IntAct</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#expansion_method\">Expansion Method</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#interaction_scoring\">Interaction Scoring</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#definitions_formats\">Definitions and Formats</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#data_export\">Data Export</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#access_intact\">Access IntAct</a></li>\n    <li class=\"tabs-title\"><a href=\"documentation/user-guide#curation_manual\">Curation Manual</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"user-guide-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"data_sources\">\n      <ip-markdown [src]=data_sources></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"usage\">\n      <ip-markdown [src]=usage></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"expansion_method\">\n      <ip-markdown [src]=expansion_method></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"interaction_scoring\">\n      <ip-markdown [src]=interaction_scoring></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"definitions_formats\">\n      <ip-markdown [src]=definitions_formats></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"data_export\">\n      <ip-markdown [src]=data_export></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"access_intact\">\n      <ip-markdown [src]=access_intact></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"curation_manual\">\n      <ip-markdown [src]=curation_manual></ip-markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 43536:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/download/datasets/datasets.component.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>Datasets</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"datasets-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"download/datasets#curated\" aria-selected=\"true\">Curated datasets</a></li>\n    <li class=\"tabs-title\"><a href=\"download/datasets#computationally\">Computational datasets</a></li>\n    <li class=\"tabs-title\"><a href=\"download/datasets#species\">Species-specific datasets</a></li>\n    <li class=\"tabs-title\"><a href=\"download/datasets#mutations\">Mutations dataset</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"datasets-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"curated\">\n      <ip-markdown [src]=curated></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"computationally\">\n      <ip-markdown [src]=computationally></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"species\">\n      <ip-markdown [src]=species></ip-markdown>\n    </div>\n    <div class=\"tabs-panel\" id=\"mutations\">\n      <ip-markdown [src]=mutations></ip-markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 70974:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/download/download.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row button-grid\" data-equalizer data-equalize-on=\"large\" id=\"doc-button-grid\">\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./ftp\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf019;\"></h3>\n      <h5 class=\"white-color\">FTP</h5></a>\n  </div>\n  <div class=\"columns medium-6 small-6 text-center padding-bottom-large\">\n    <a class=\"button medium-12 columns intact-background\" data-equalizer-watch routerLink=\"./datasets\">\n      <h3 class=\"icon icon-common white-color\" data-icon=\"&#xf187;\"></h3>\n      <h5 class=\"white-color\">Datasets</h5></a>\n  </div>\n\n</div>\n");

/***/ }),

/***/ 71880:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/download/ftp/ftp.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-large margin-bottom-large row\">\n  <h1>FTP</h1>\n  <ul class=\"tabs\" data-tabs data-deep-link=\"true\" data-update-history=\"false\" id=\"download-tabs\">\n    <li class=\"tabs-title is-active\"><a href=\"download#ftp\" aria-selected=\"true\">FTP</a></li>\n  </ul>\n\n  <div class=\"tabs-content\" data-tabs-content=\"download-tabs\">\n    <div class=\"tabs-panel is-active\" id=\"ftp\">\n      <ip-markdown [src]=ftp></ip-markdown>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 98660:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/navigation/redirect/redirect.component.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Redirection</h1>\n\nYou are being redirected to <a [href]=\"href\">{{href}}</a><br>\nPlease wait till <a [href]=\"href\">{{href}}</a>  is ready.\n");

/***/ }),

/***/ 17991:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/column-toggle/column-toggle.component.html ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-toggle-container\">\n  <button class=\"dropdown button stick-and-fill-right adjust-width\" type=\"button\" [attr.data-toggle]=\"columnView\">\n    Column toggle\n  </button>\n\n  <div id=\"{{columnView}}\" class=\"dropdown-pane\" data-dropdown data-hover=\"true\" data-hover-pane=\"true\">\n    <ul class=\"no-bullet tight\">\n      <li *ngFor=\"let column of columns; let i = index\">\n        <label>\n          <input #col class=\"list-view\" type=\"checkbox\" name=\"list\" [attr.data-column]=\"i\" value=\"{{column.title}}\"\n                 (change)=\"onChangeColumnSelected(col.value)\"\n                 [checked]=\"isColumnSelected(col.value)\">{{column.title}}\n        </label>\n      </li>\n    </ul>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ 49732:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.html ***!
  \******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg [attr.viewBox]=\"viewBox\" class=\"complete-legend-line\">\n  <defs>\n    <linearGradient id=\"lg\" [attr.x1]=\"min\" [attr.x2]=\"max\" y1=\"0\" y2=\"0\" gradientUnits=\"userSpaceOnUse\">\n      <stop *ngFor=\"let point of points\" [attr.stop-color]=\"point.color\" [attr.offset]=\"point.x\"></stop>\n    </linearGradient>\n  </defs>\n\n  <rect x=\"0\" y=\"0\" [attr.width]=\"max - min\" [attr.height]=\"height / 2\" [attr.ry]=\"height / 4\" fill=\"url(#lg)\"\n        [attr.stroke-width]=\"height / 14\" class=\"upper-filled\"/>\n\n  <text *ngFor=\"let pointLabel of pointLabels;\" [attr.x]=\"pointLabel\" [attr.y]=\"3 * height / 4\" [attr.font-size]=\"height/3\"\n        dominant-baseline=\"middle\" text-anchor=\"middle\">{{pointLabel}}</text>\n</svg>\n");

/***/ }),

/***/ 85510:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.html ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg viewBox=\"0 0 100 100\" class=\"edge-diagram\">\n  <line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\"\n        [attr.stroke-width]=\"thickness\"\n        [attr.stroke]=\"color\"\n        [attr.stroke-dasharray]=\"strokeShape\"></line>\n  <g *ngIf=\"midCrossColor\">\n    <line x1=\"35\" y1=\"35\" x2=\"65\" y2=\"65\"\n          stroke-width=\"8\"\n          [attr.stroke]=\"midCrossColor\"></line>\n    <line x1=\"35\" y1=\"65\" x2=\"65\" y2=\"35\"\n          stroke-width=\"8\"\n          [attr.stroke]=\"midCrossColor\"></line>\n  </g>\n</svg>\n");

/***/ }),

/***/ 81292:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.html ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg [attr.viewBox]=\"viewBox\" class=\"complete-legend-line\">\n  <polygon [attr.points]=\"connectionPoints\" [attr.fill]=\"color\" opacity=\"0.5\"></polygon>\n  <rect [attr.height]=\"minThickness\" [attr.y]=\"(height - minThickness)/2\"\n        [attr.width]=\"edgeWidth\" [attr.x]=\"0\"\n        [attr.fill]=\"color\"></rect>\n  <rect [attr.height]=\"maxThickness\" [attr.y]=\"0\"\n        [attr.width]=\"edgeWidth\" [attr.x]=\"width - edgeWidth\"\n        [attr.fill]=\"color\"></rect>\n  <text [attr.x]=\"edgeWidth\" [attr.y]=\"(height + minThickness) / 2 + fontSize\"\n        [attr.fill]=\"color\" [attr.font-size]=\"fontSize\" text-anchor=\"middle\">{{minValue}}</text>\n  <text [attr.x]=\"width - edgeWidth\" [attr.y]=\"totalHeight\"\n        [attr.fill]=\"color\" [attr.font-size]=\"fontSize\" text-anchor=\"middle\">{{maxValue}}</text>\n</svg>\n");

/***/ }),

/***/ 1022:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/components/diagrams/node-diagram/node-diagram.component.html ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg viewBox=\"0 0 100 100\" class=\"node-diagram\" [ngStyle]=\"{'height': height}\" #svg>\n  <g [ngSwitch]=\"shape\" #shapeGroup>\n    <circle *ngSwitchCase=\"NodeShape.ELLIPSE\"\n            r=\"47.57\" cx=\"50%\" cy=\"50%\"/>\n    <path *ngSwitchCase=\"NodeShape.TRIANGLE\"\n          d=\"m 50.714288,5.8194648 44.880439,91.4407922 -91.3680247,0 z\"/>\n    <path *ngSwitchCase=\"NodeShape.DIAMOND\"\n          d=\"M 2.6785714,50 49.821429,2.8007365 97.301851,49.604865 49.821429,97.123279 Z\"/>\n    <path *ngSwitchCase=\"NodeShape.HEXAGON\"\n          d=\"M 2.321,50 26.071429,9.7650222 H 73.398681 L 97.577186,50 73.398681,90.516137 H 26.071429 Z\"/>\n    <path *ngSwitchCase=\"NodeShape.OCTAGON\"\n          d=\"M 97.443707,69.535644 69.733981,97.361553 30.464356,97.443707 2.6384466,69.733981 2.5562928,30.464356 30.266019,2.6384466 69.535644,2.5562928 97.361553,30.266019 Z\"/>\n    <rect *ngSwitchCase=\"NodeShape.ROUNDED_RECTANGLE\"\n          width=\"95.125\" height=\"95.125\" ry=\"25\" x=\"2.5\" y=\"2.5\"/>\n    <path *ngSwitchCase=\"NodeShape.PARALLELOGRAM\"\n          d=\"m4.1071 2.7838h44.523l47.084 94.477-47.023 0.17857z\"/>\n    <path *ngSwitchCase=\"NodeShape.VEE\"\n          d=\"m2.5 2.4266 47.5 38.214 47.679-38.559-47.679 92.143z\"/>\n    <path *ngSwitchCase=\"NodeShape.TAG\"\n          d=\"m1.9643 98.214-0.056406-96.306h48.092l47.302 47.697-47.302 48.59z\"/>\n  </g>\n\n  <text *ngIf=\"label !== null\" fill=\"white\" x=\"50%\" y=\"52.5%\" dominant-baseline=\"middle\" text-anchor=\"middle\" #labelElt>\n    {{label}}\n  </text>\n</svg>\n");

/***/ }),

/***/ 6849:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 9915:
/*!******************************************************************************!*\
  !*** ./src/app/home-dashboard/advanced-search/advanced-search.component.css ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".text-input {\n  padding: 4px 8px;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n}\n\n.input-group {\n  height: 21px!important;\n  padding: 0;\n}\n\n#editor, #highlighting {\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 5px 8px 0 8px;\n  border: 1px solid #CCC;\n  width: 100%;\n  height: 95px;\n  overflow: auto;\n  white-space: pre-wrap;\n}\n\ntextarea#editor {\n  z-index: 1;\n  resize: none;\n  color: transparent;\n  background: transparent;\n  caret-color: black; /* Or choose your favorite color */\n}\n\n#highlighting {\n  z-index: 0;\n}\n\n#editor, #highlighting, #highlighting * {\n  /* Also add text styles to highlighting tokens */\n  font-family: monospace;\n  font-weight: bold;\n  font-size: 15px;\n  -moz-tab-size: 2;\n    -o-tab-size: 2;\n       tab-size: 2;\n}\n\n#editor {\n  /*width: 100%;*/\n  /*height: 21px!important;*/\n  /*padding: 8px;*/\n  /*border: 1px solid #CCC;*/\n  /*font-family: monospace;*/\n  /*font-weight: bold;*/\n  /*white-space: normal;*/\n}\n\n.button-group .button.icon {\n  font-size: xxx-large;\n  border: none;\n  padding: 15px;\n}\n\n#arrow-panel {\n  display: flex;\n  justify-content: center;\n}\n\n#ad-search-button {\n  padding: calc(50% - 0.85em) 15px calc(50% - 0.85em) 15px!important;\n  height: 95px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFFLGtDQUFrQztBQUN4RDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBVztJQUFYLGNBQVc7T0FBWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsWUFBWTtBQUNkIiwiZmlsZSI6ImFkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtaW5wdXQge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIGhlaWdodDogMjFweCFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNlZGl0b3IsICNoaWdobGlnaHRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHggOHB4IDAgOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NXB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG50ZXh0YXJlYSNlZGl0b3Ige1xuICB6LWluZGV4OiAxO1xuICByZXNpemU6IG5vbmU7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNhcmV0LWNvbG9yOiBibGFjazsgLyogT3IgY2hvb3NlIHlvdXIgZmF2b3JpdGUgY29sb3IgKi9cbn1cblxuI2hpZ2hsaWdodGluZyB7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNlZGl0b3IsICNoaWdobGlnaHRpbmcsICNoaWdobGlnaHRpbmcgKiB7XG4gIC8qIEFsc28gYWRkIHRleHQgc3R5bGVzIHRvIGhpZ2hsaWdodGluZyB0b2tlbnMgKi9cbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGFiLXNpemU6IDI7XG59XG5cbiNlZGl0b3Ige1xuICAvKndpZHRoOiAxMDAlOyovXG4gIC8qaGVpZ2h0OiAyMXB4IWltcG9ydGFudDsqL1xuICAvKnBhZGRpbmc6IDhweDsqL1xuICAvKmJvcmRlcjogMXB4IHNvbGlkICNDQ0M7Ki9cbiAgLypmb250LWZhbWlseTogbW9ub3NwYWNlOyovXG4gIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cbiAgLyp3aGl0ZS1zcGFjZTogbm9ybWFsOyovXG59XG5cbi5idXR0b24tZ3JvdXAgLmJ1dHRvbi5pY29uIHtcbiAgZm9udC1zaXplOiB4eHgtbGFyZ2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuI2Fycm93LXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNhZC1zZWFyY2gtYnV0dG9uIHtcbiAgcGFkZGluZzogY2FsYyg1MCUgLSAwLjg1ZW0pIDE1cHggY2FsYyg1MCUgLSAwLjg1ZW0pIDE1cHghaW1wb3J0YW50O1xuICBoZWlnaHQ6IDk1cHg7XG59XG5cblxuIl19 */";

/***/ }),

/***/ 67751:
/*!************************************************************************!*\
  !*** ./src/app/home-dashboard/batch-search/batch-search.component.css ***!
  \************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #fbfbfb;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n/* Default class applied to drop zones on over */\n\n.my-drop-zone {\n  border: dotted 3px lightgray;\n}\n\n.nv-file-over {\n  border: dotted 3px #68297c;\n}\n\n.is-success {\n  color: green;\n}\n\n.is-error {\n  color: red;\n}\n\n.is-cancel {\n  color: orange;\n}\n\n/* Tweaks ebi-global */\n\n.sticky-cell {\n  vertical-align: top;\n  border-right: 1px solid white;\n  background-color: rgb(197, 147, 222);\n  /*border-left: 1px solid rgb(149, 85, 171);*/\n}\n\n.sticky-cell > * {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 35%;\n}\n\n.sticky-cell div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.select-buttons * {\n  width: 72%;\n  margin-bottom: -1px;\n}\n\n.select-buttons span:first-child {\n  font-weight: bolder;\n  color: #FFFFFF;\n  font-size: large;\n  margin-bottom: 0.5em;\n}\n\ntable tr, th {\n  font-size: 13px;\n  white-space: nowrap;\n}\n\nth {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: rgb(149, 85, 171) !important;\n  z-index: 1;\n}\n\n.terms-resolution-container {\n  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.19);\n  max-height: 44vh;\n  overflow: auto;\n}\n\ntr.separator td {\n  height: 1px;\n  background-color: rgb(149, 85, 171) !important;\n  padding: 0 0;\n}\n\ntr.other-interactors {\n  background-color: #ffeaff;\n}\n\ntr.other-interactors td:last-child {\n  font-weight: bold;\n  text-align: left;\n}\n\ntbody {\n  border-bottom: 2px solid black !important;\n}\n\ntbody:last-child {\n  border-bottom: 0 !important;\n}\n\n.y-overflowed {\n  height: 5em;\n  overflow-y: auto;\n  box-shadow: inset 0px -5px 5px -5px #00000066, inset 0px 5px 5px -5px #00000066;\n  margin: 1em 0;\n}\n\nul {\n  margin: 0;\n}\n\n[type='file'], [type='checkbox'], [type='radio'] {\n   margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdGNoLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFFbEIsOENBQThDO0FBQ2hEOztBQUVBLGdEQUFnRDs7QUFDaEQ7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUdBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLDhDQUE4QztFQUM5QyxVQUFVO0FBQ1o7O0FBR0E7RUFDRSwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsOENBQThDO0VBQzlDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLCtFQUErRTtFQUMvRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7R0FDRyxTQUFTO0FBQ1oiLCJmaWxlIjoiYmF0Y2gtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAuMDUpO1xufVxuXG4vKiBEZWZhdWx0IGNsYXNzIGFwcGxpZWQgdG8gZHJvcCB6b25lcyBvbiBvdmVyICovXG4ubXktZHJvcC16b25lIHtcbiAgYm9yZGVyOiBkb3R0ZWQgM3B4IGxpZ2h0Z3JheTtcbn1cblxuLm52LWZpbGUtb3ZlciB7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjNjgyOTdjO1xufVxuXG4uaXMtc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmlzLWVycm9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmlzLWNhbmNlbCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi8qIFR3ZWFrcyBlYmktZ2xvYmFsICovXG5cbi5zdGlja3ktY2VsbCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk3LCAxNDcsIDIyMik7XG4gIC8qYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMTQ5LCA4NSwgMTcxKTsqL1xufVxuXG4uc3RpY2t5LWNlbGwgPiAqIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAzNSU7XG59XG5cbi5zdGlja3ktY2VsbCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5zZWxlY3QtYnV0dG9ucyAqIHtcbiAgd2lkdGg6IDcyJTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnNlbGVjdC1idXR0b25zIHNwYW46Zmlyc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cblxudGFibGUgdHIsIHRoIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG50aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgODUsIDE3MSkgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cblxuXG4udGVybXMtcmVzb2x1dGlvbi1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIG1heC1oZWlnaHQ6IDQ0dmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG50ci5zZXBhcmF0b3IgdGQge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgODUsIDE3MSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAwO1xufVxuXG50ci5vdGhlci1pbnRlcmFjdG9ycyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhZmY7XG59XG5cbnRyLm90aGVyLWludGVyYWN0b3JzIHRkOmxhc3QtY2hpbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGJvZHkge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxudGJvZHk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuXG4ueS1vdmVyZmxvd2VkIHtcbiAgaGVpZ2h0OiA1ZW07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNXB4IDVweCAtNXB4ICMwMDAwMDA2NiwgaW5zZXQgMHB4IDVweCA1cHggLTVweCAjMDAwMDAwNjY7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5bdHlwZT0nZmlsZSddLCBbdHlwZT0nY2hlY2tib3gnXSwgW3R5cGU9J3JhZGlvJ10ge1xuICAgbWFyZ2luOiAwO1xufVxuIl19 */";

/***/ }),

/***/ 43999:
/*!***********************************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-archive.component.css ***!
  \***********************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  font-size: 105%;\n  color: #4d4d4d;\n  font-weight: 600;\n}\n\ni {\n  font-size: 15pt;\n  vertical-align: center;\n}\n\n.month {\n  font-size: small;\n  font-weight: bold;\n}\n\n.year {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 20%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 25px;\n  color: white;\n  background-color: #68297c;\n\n}\n\ntable {\n  margin-bottom: 0;\n  border: none;\n}\n\ntd, th, tbody {\n  border:none;\n}\n\n.accordion-content {\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzZXQtYXJjaGl2ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoiZGF0YXNldC1hcmNoaXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIGZvbnQtc2l6ZTogMTA1JTtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmkge1xuICBmb250LXNpemU6IDE1cHQ7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG59XG5cbi5tb250aCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ueWVhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjAlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4Mjk3YztcblxufVxuXG50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGQsIHRoLCB0Ym9keSB7XG4gIGJvcmRlcjpub25lO1xufVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuIl19 */";

/***/ }),

/***/ 2065:
/*!***************************************************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/dataset-archive/dataset-by-year/dataset-by-year.component.css ***!
  \***************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  font-size: 105%;\n  color: #4d4d4d;\n  font-weight: 600;\n}\n\ni {\n  font-size: 15pt;\n  vertical-align: center;\n}\n\n.month {\n  font-size: small;\n  font-weight: bold;\n}\n\n.year {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 20%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 25px;\n  color: white;\n  background-color: #68297c;\n  /*background-color: #b46eb4;*/\n}\n\ntable {\n  margin-bottom: 0;\n  border: none;\n}\n\ntd, th, tbody {\n  border:none;\n  padding-left: 1em;\n}\n\ntr {\n  /*background-color: #ffedff;*/\n}\n\ntr:nth-child(even) {\n  /*background-color: #f8e0ff;*/\n}\n\n.accordion-content {\n  padding: 0;\n}\n\n.mat-raised-button {\n  margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzZXQtYnkteWVhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImRhdGFzZXQtYnkteWVhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBmb250LXNpemU6IDEwNSU7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAxNXB0O1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9udGgge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnllYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDIwJTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODI5N2M7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2I0NmViNDsqL1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGQsIHRoLCB0Ym9keSB7XG4gIGJvcmRlcjpub25lO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxudHIge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmZmVkZmY7Ki9cbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlMGZmOyovXG59XG5cbi5hY2NvcmRpb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 5741:
/*!********************************************************************************!*\
  !*** ./src/app/home-dashboard/featured-dataset/featured-dataset.component.css ***!
  \********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#5ca23561;\n}\n\n\n#dataset-group > .button {\n  margin-right: 1px !important;\n  margin-bottom: 1px !important;\n  width: calc(50% - 0.5px);\n}\n\n\n#dataset-group .button:last-of-type {\n  margin-right: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVkLWRhdGFzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3Qix3QkFBd0I7QUFDMUI7OztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6ImZlYXR1cmVkLWRhdGFzZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg0IHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjojNWNhMjM1NjE7XG59XG5cblxuI2RhdGFzZXQtZ3JvdXAgPiAuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDAuNXB4KTtcbn1cblxuI2RhdGFzZXQtZ3JvdXAgLmJ1dHRvbjpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 76613:
/*!*************************************************************!*\
  !*** ./src/app/home-dashboard/home-dashboard.component.css ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".callout-twitter {\n  background-color: #1bc0ea73; /*#1bc0ea8c;*/\n  border-radius: 8px;\n}\n.callout-latest-news {\n  background-color: #8d3ab336;\n  border-radius: 8px;\n}\n.callout-featured-dataset {\n  background-color: #5ca23561;\n  border-radius: 8px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkIsRUFBRSxhQUFhO0VBQzFDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJob21lLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGxvdXQtdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYmMwZWE3MzsgLyojMWJjMGVhOGM7Ki9cbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNhbGxvdXQtbGF0ZXN0LW5ld3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGQzYWIzMzY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5jYWxsb3V0LWZlYXR1cmVkLWRhdGFzZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNhMjM1NjE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuIl19 */";

/***/ }),

/***/ 38215:
/*!********************************************************************************!*\
  !*** ./src/app/home-dashboard/home-description/home-description.component.css ***!
  \********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".icon-species {\n  color: white;\n  background-color: #68297c;\n  border-radius: 100px;\n  font-size: xx-large;\n  padding: 5px;\n}\n\n.alert-header {\n  display: inline-flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: nowrap;\n}\n\n.alert-button-group {\n  display: flex;\n  align-items: flex-start;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  grid-gap: 1px;\n  gap: 1px;\n}\n\n.alert-button-group > .button:not(:first-child) {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n\n.alert-button-group > .button {\n  flex: 1;\n  margin: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGFBQVE7RUFBUixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLE9BQU87RUFDUCxvQkFBb0I7QUFDdEIiLCJmaWxlIjoiaG9tZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc3BlY2llcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4Mjk3YztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFsZXJ0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi5hbGVydC1idXR0b24tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFweDtcbn1cblxuLmFsZXJ0LWJ1dHRvbi1ncm91cCA+IC5idXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBmbGV4LWJhc2lzOiAwO1xufVxuXG4uYWxlcnQtYnV0dG9uLWdyb3VwID4gLmJ1dHRvbiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuIl19 */";

/***/ }),

/***/ 21059:
/*!********************************************************!*\
  !*** ./src/app/home-dashboard/news/news.component.css ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#8d3ab336;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoibmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiM4ZDNhYjMzNjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 58565:
/*!**********************************************************************************************!*\
  !*** ./src/app/home-dashboard/newsletter-subscription/newsletter-subscription.component.css ***!
  \**********************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color: #eea8a8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3NsZXR0ZXItc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Im5ld3NsZXR0ZXItc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNlZWE4YTg7XG59XG4iXX0= */";

/***/ }),

/***/ 57825:
/*!************************************************************!*\
  !*** ./src/app/home-dashboard/search/search.component.css ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/************** SEARCH SECTION *******************************/\n\n#div-quick-search .tabs-panel {\n  background: #cec2d4 !important;\n}\n\n/*#search-tabs{*/\n\n/*  border: 1px solid #cec2d4;*/\n\n/*}*/\n\n/*#search .tabs-title > a {*/\n\n/*  font-size: 0.9rem;*/\n\n/*  color: #3e3e3e;*/\n\n/*}*/\n\n/*#search .tabs-title > a:hover {*/\n\n/*  background: #672e7b85;!*#7d96a75c; !*#57b2b787*!*/\n\n/*  color: #0a0a0a;*/\n\n/*}*/\n\n/*#search .tabs-title > a:focus,*/\n\n/*#search .tabs-title > a[aria-selected='true'] {*/\n\n/*  color: #3e3e3e;*/\n\n/*  background: rgba(90, 46, 110, 0.29);*/\n\n/*}*/\n\n.callout-advanced {\n  background-color: #f6f4f6;\n  border-radius: 5px;\n  border: 1px solid #CCC;\n}\n\n/************** END SEARCH SECTION *******************************/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhEQUE4RDs7QUFFOUQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsZ0JBQWdCOztBQUNoQiwrQkFBK0I7O0FBQy9CLElBQUk7O0FBRUosNEJBQTRCOztBQUM1Qix1QkFBdUI7O0FBQ3ZCLG9CQUFvQjs7QUFDcEIsSUFBSTs7QUFDSixrQ0FBa0M7O0FBQ2xDLHFEQUFxRDs7QUFDckQsb0JBQW9COztBQUNwQixJQUFJOztBQUNKLGlDQUFpQzs7QUFDakMsa0RBQWtEOztBQUNsRCxvQkFBb0I7O0FBQ3BCLHlDQUF5Qzs7QUFDekMsSUFBSTs7QUFFSjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBLGtFQUFrRSIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKiBTRUFSQ0ggU0VDVElPTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4jZGl2LXF1aWNrLXNlYXJjaCAudGFicy1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICNjZWMyZDQgIWltcG9ydGFudDtcbn1cblxuLyojc2VhcmNoLXRhYnN7Ki9cbi8qICBib3JkZXI6IDFweCBzb2xpZCAjY2VjMmQ0OyovXG4vKn0qL1xuXG4vKiNzZWFyY2ggLnRhYnMtdGl0bGUgPiBhIHsqL1xuLyogIGZvbnQtc2l6ZTogMC45cmVtOyovXG4vKiAgY29sb3I6ICMzZTNlM2U7Ki9cbi8qfSovXG4vKiNzZWFyY2ggLnRhYnMtdGl0bGUgPiBhOmhvdmVyIHsqL1xuLyogIGJhY2tncm91bmQ6ICM2NzJlN2I4NTshKiM3ZDk2YTc1YzsgISojNTdiMmI3ODcqISovXG4vKiAgY29sb3I6ICMwYTBhMGE7Ki9cbi8qfSovXG4vKiNzZWFyY2ggLnRhYnMtdGl0bGUgPiBhOmZvY3VzLCovXG4vKiNzZWFyY2ggLnRhYnMtdGl0bGUgPiBhW2FyaWEtc2VsZWN0ZWQ9J3RydWUnXSB7Ki9cbi8qICBjb2xvcjogIzNlM2UzZTsqL1xuLyogIGJhY2tncm91bmQ6IHJnYmEoOTAsIDQ2LCAxMTAsIDAuMjkpOyovXG4vKn0qL1xuXG4uY2FsbG91dC1hZHZhbmNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY0ZjY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbn1cblxuLyoqKioqKioqKioqKioqIEVORCBTRUFSQ0ggU0VDVElPTiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuIl19 */";

/***/ }),

/***/ 92837:
/*!******************************************************************!*\
  !*** ./src/app/home-dashboard/tile-menu/tile-menu.component.css ***!
  \******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/*This avoids the purple coming from the main theme*/\n.industry-background.button:focus {\n  background: #0086b4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRDtBQUNwRDtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJ0aWxlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVGhpcyBhdm9pZHMgdGhlIHB1cnBsZSBjb21pbmcgZnJvbSB0aGUgbWFpbiB0aGVtZSovXG4uaW5kdXN0cnktYmFja2dyb3VuZC5idXR0b246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMDA4NmI0O1xufVxuIl19 */";

/***/ }),

/***/ 44:
/*!******************************************************************************!*\
  !*** ./src/app/home-dashboard/twitter-display/twitter-display.component.css ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#1bc0ea73;\n}\n\n.twitter-timeline-min-width {\n  min-width: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3aXR0ZXItZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoidHdpdHRlci1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IzFiYzBlYTczO1xufVxuXG4udHdpdHRlci10aW1lbGluZS1taW4td2lkdGgge1xuICBtaW4td2lkdGg6IDBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 50093:
/*!**********************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-dashboard.component.css ***!
  \**********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 36221:
/*!******************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details-tabs.component.css ***!
  \******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/*.tabs-panel[_ngcontent-c4] {*/\n/*  background: #e6e6e6 !important;*/\n/*}*/\n/*.tabs-title > a {*/\n/*  font-size: 1em;*/\n/*  color: #3e3e3e;*/\n/*}*/\n/*.tabs-title > a:hover {*/\n/*  background: #8a8a8a91;*/\n/*  color: #0a0a0a;*/\n/*}*/\n/*.tabs-title > a:focus,*/\n/*.tabs-title > a[aria-selected='true'] {*/\n/*  color: #0a0a0a;*/\n/*  background: #e6e6e6;*/\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdGFicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUMvQixvQ0FBb0M7QUFDcEMsSUFBSTtBQUVKLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLElBQUk7QUFDSiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0oseUJBQXlCO0FBQ3pCLDBDQUEwQztBQUMxQyxvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLElBQUkiLCJmaWxlIjoiZGV0YWlscy10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi50YWJzLXBhbmVsW19uZ2NvbnRlbnQtYzRdIHsqL1xuLyogIGJhY2tncm91bmQ6ICNlNmU2ZTYgIWltcG9ydGFudDsqL1xuLyp9Ki9cblxuLyoudGFicy10aXRsZSA+IGEgeyovXG4vKiAgZm9udC1zaXplOiAxZW07Ki9cbi8qICBjb2xvcjogIzNlM2UzZTsqL1xuLyp9Ki9cbi8qLnRhYnMtdGl0bGUgPiBhOmhvdmVyIHsqL1xuLyogIGJhY2tncm91bmQ6ICM4YThhOGE5MTsqL1xuLyogIGNvbG9yOiAjMGEwYTBhOyovXG4vKn0qL1xuLyoudGFicy10aXRsZSA+IGE6Zm9jdXMsKi9cbi8qLnRhYnMtdGl0bGUgPiBhW2FyaWEtc2VsZWN0ZWQ9J3RydWUnXSB7Ki9cbi8qICBjb2xvcjogIzBhMGEwYTsqL1xuLyogIGJhY2tncm91bmQ6ICNlNmU2ZTY7Ki9cbi8qfSovXG4iXX0= */";

/***/ }),

/***/ 90843:
/*!*************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/confidences/confidences.component.css ***!
  \*************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWRlbmNlcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 41319:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/curation-annotations/curation-annotations.component.css ***!
  \*******************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "table#curAnnotations {\n  overflow-wrap: anywhere;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cmF0aW9uLWFubm90YXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiY3VyYXRpb24tYW5ub3RhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlI2N1ckFubm90YXRpb25zIHtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG59XG4iXX0= */";

/***/ }),

/***/ 71817:
/*!*****************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/cv-term/cv-term.component.css ***!
  \*****************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdi10ZXJtLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 40962:
/*!***********************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/experiment/experiment.component.css ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#2e4d6e4f;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiZXhwZXJpbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiMyZTRkNmU0Zjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 47848:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/experimental-conditions/experimental-conditions.component.css ***!
  \*************************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmltZW50YWwtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 91245:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/external-xrefs/external-xrefs.component.css ***!
  \*******************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".submit-to-link {\n  cursor: pointer;\n  border-bottom-width: 1px;\n  border-bottom-style: dotted;\n  border-bottom-color: inherit;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  padding: 0;\n  background: none;\n}\n\n.submit-to-link:hover,\n.submit-to-link:focus,\n.submit-to-link:active {\n  border-bottom-style: solid;\n  border-bottom-color: #68297c;\n  color: #68297c;\n  opacity: 0.9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLXhyZWZzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6ImV4dGVybmFsLXhyZWZzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0LXRvLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uc3VibWl0LXRvLWxpbms6aG92ZXIsXG4uc3VibWl0LXRvLWxpbms6Zm9jdXMsXG4uc3VibWl0LXRvLWxpbms6YWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM2ODI5N2M7XG4gIGNvbG9yOiAjNjgyOTdjO1xuICBvcGFjaXR5OiAwLjk7XG59XG4iXX0= */";

/***/ }),

/***/ 79653:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/features-table/features-table.component.css ***!
  \*******************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy10YWJsZS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 14407:
/*!*********************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/interaction-details.component.css ***!
  \*********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color:#5a2e6e3d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiaW50ZXJhY3Rpb24tZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiM1YTJlNmUzZDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 53933:
/*!***********************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/parameters/parameters.component.css ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0ZXJzLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 76570:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/participant-table/participant-table.component.css ***!
  \*************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".columnToggle {\n  font-size: 1em;\n  background-color: #e6e6e6;\n  width: 1.8em;\n  height: 1.8em;\n  background-position: 50% 50%;\n  margin-top: .5em;\n  margin-bottom: .5em;\n  box-sizing: border-box;\n  text-shadow: 0 1px 0 #fff;\n  border-radius: .25em;\n  border: 1px solid #44545f;\n  cursor: pointer;\n}\n\n.iconColumn {\n  color: #44545f;\n  font-size: 1.5em;\n}\n\n.column_toggle_popup {\n  display: block;\n  position: absolute;\n  /*top: 2.5em;*/\n  right: 4em;\n  text-align: left !important;\n}\n\n.column_toggle_btnwrap {\n  background-color: #fff;\n  padding: .5em .8em;\n  border: 1px solid #ccc;\n  box-shadow: 0 1px 2px #ccc;\n  border-radius: .2em;\n  z-index: 1;\n}\n\n.hiddenToggle {\n  display: none;\n}\n\nselect {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpY2lwYW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoicGFydGljaXBhbnQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW5Ub2dnbGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgd2lkdGg6IDEuOGVtO1xuICBoZWlnaHQ6IDEuOGVtO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBtYXJnaW4tdG9wOiAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ0NTQ1ZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbkNvbHVtbiB7XG4gIGNvbG9yOiAjNDQ1NDVmO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uY29sdW1uX3RvZ2dsZV9wb3B1cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qdG9wOiAyLjVlbTsqL1xuICByaWdodDogNGVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2x1bW5fdG9nZ2xlX2J0bndyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuNWVtIC44ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGlkZGVuVG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuc2VsZWN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbiJdfQ== */";

/***/ }),

/***/ 92740:
/*!*************************************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-tabs/details/publication/publication.component.css ***!
  \*************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "h4 {\n  border-bottom-style: solid;\n  border-color: #2e6e314f;\n}\n\n.button.alert {\n  cursor: default;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJwdWJsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMmU2ZTMxNGY7XG59XG5cbi5idXR0b24uYWxlcnQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4iXX0= */";

/***/ }),

/***/ 4934:
/*!**********************************************************************************************!*\
  !*** ./src/app/interactions/interaction-details/details-viewer/details-viewer.component.css ***!
  \**********************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "#details-viewer h4 {\n  border-bottom-style: solid;\n  border-color: #5a2e6e3d;\n}\n\n#interaction-viewer-container {\n  height: 600px;\n  background: #fbfbfb;\n}\n\n.complexViewerSVG {\n  height: 100%;\n  width: 100%;\n  display: block;\n}\n\n.image-center {\n  text-align: center;\n}\n\n#annotations-select {\n  width: auto;\n}\n\n#legend {\n  overflow: auto;\n  max-height: 699px;\n  margin-bottom: 0;\n}\n\n@media print, screen and (min-width: 64em) {\n  #legend {\n    max-height: 657px;\n  }\n}\n\ntr.legend-group {\n  background-color: white !important;\n}\n\ntable.color-key tr {\n  background: #fbfbfb;\n}\n\ntable.color-key tbody {\n  border: none;\n}\n\ntd.color-square {\n  width: 1.7rem;\n  height: 1.7rem;\n}\n\n/* Styling of right click menu in the viewer */\n\n.protein {\n  cursor: crosshair;\n}\n\n/*you need this to stop horrible looking flickering of text as you drag*/\n\nsvg {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.xlv_text {\n  text-shadow: -1px -1px 0 white,\n  1px -1px 0 white,\n  -1px 1px 0 white,\n  1px 1px 0 white;\n}\n\n.custom-menu-margin {\n  padding: 20px;\n  display: none;\n  z-index: 10000;\n  position: absolute;\n}\n\n.custom-menu {\n  overflow: hidden;\n  border: 1px solid #CCC;\n  white-space: nowrap;\n  background: #FFF;\n  color: #333;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: all;\n}\n\n.custom-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.custom-menu li {\n  padding: 8px 12px;\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.custom-menu input {\n  cursor: pointer;\n}\n\n.custom-menu li:hover {\n  background-color: #DEF;\n}\n\n.custom-menu li:nth-child(1) {\n  cursor: pointer;\n}\n\n.custom-menu li:nth-child(2) {\n  display: flex;\n  flex-direction: row;\n}\n\n.barScale {\n  padding-left: 10px;\n}\n\n.barScale label {\n  display: unset;\n}\n\n.barScale label > [type='checkbox'], label > [type='radio'] {\n  margin-right: 0.5rem;\n  margin-left: 0.25rem;\n  margin-bottom: 0;\n}\n\ntd.legend-label {\n  padding: 2px 2px 2px 0.5rem;\n}\n\n.tooltip[display=\"none\"] {\n  display: none;\n}\n\n#rect-to-circle {\n  stroke-width: 2;\n  stroke: black;\n  paint-order: markers fill stroke;\n  fill: none;\n}\n\n#rect-to-circle[can-animate='true'] {\n  -webkit-animation: rect-to-circle-morph 5s ease infinite;\n          animation: rect-to-circle-morph 5s ease infinite;\n}\n\n#rect-tick {\n  stroke-width: 0;\n  fill: black;\n}\n\n#rect-tick[can-animate='true'] {\n  -webkit-animation: rect-tick-morph 5s ease infinite;\n          animation: rect-tick-morph 5s ease infinite;\n}\n\n#protein-svg {\n  height: 15pt;\n  vertical-align: middle;\n}\n\n.centered {\n  text-align: center;\n}\n\n.node-diagram {\n  height: 17pt;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMtdmlld2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBLDhDQUE4Qzs7QUFDOUM7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUEsd0VBQXdFOztBQUN4RTtFQUNFLHlCQUF5QjtFQUV6QixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFOzs7aUJBR2U7QUFDakI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdEQUFnRDtVQUFoRCxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsbURBQTJDO1VBQTNDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiZGV0YWlscy12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXRhaWxzLXZpZXdlciBoNCB7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM1YTJlNmUzZDtcbn1cblxuI2ludGVyYWN0aW9uLXZpZXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xufVxuXG4uY29tcGxleFZpZXdlclNWRyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uaW1hZ2UtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYW5ub3RhdGlvbnMtc2VsZWN0IHtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNsZWdlbmQge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNjk5cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbkBtZWRpYSBwcmludCwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XG4gICNsZWdlbmQge1xuICAgIG1heC1oZWlnaHQ6IDY1N3B4O1xuICB9XG59XG5cbnRyLmxlZ2VuZC1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmNvbG9yLWtleSB0ciB7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG59XG5cbnRhYmxlLmNvbG9yLWtleSB0Ym9keSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGQuY29sb3Itc3F1YXJlIHtcbiAgd2lkdGg6IDEuN3JlbTtcbiAgaGVpZ2h0OiAxLjdyZW07XG59XG5cbi8qIFN0eWxpbmcgb2YgcmlnaHQgY2xpY2sgbWVudSBpbiB0aGUgdmlld2VyICovXG4ucHJvdGVpbiB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4vKnlvdSBuZWVkIHRoaXMgdG8gc3RvcCBob3JyaWJsZSBsb29raW5nIGZsaWNrZXJpbmcgb2YgdGV4dCBhcyB5b3UgZHJhZyovXG5zdmcge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnhsdl90ZXh0IHtcbiAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIHdoaXRlLFxuICAxcHggLTFweCAwIHdoaXRlLFxuICAtMXB4IDFweCAwIHdoaXRlLFxuICAxcHggMXB4IDAgd2hpdGU7XG59XG5cblxuLmN1c3RvbS1tZW51LW1hcmdpbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuLmN1c3RvbS1tZW51IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgY29sb3I6ICMzMzM7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmN1c3RvbS1tZW51IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY3VzdG9tLW1lbnUgbGkge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmN1c3RvbS1tZW51IGlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3VzdG9tLW1lbnUgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREVGO1xufVxuXG4uY3VzdG9tLW1lbnUgbGk6bnRoLWNoaWxkKDEpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3VzdG9tLW1lbnUgbGk6bnRoLWNoaWxkKDIpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJhclNjYWxlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uYmFyU2NhbGUgbGFiZWwge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLmJhclNjYWxlIGxhYmVsID4gW3R5cGU9J2NoZWNrYm94J10sIGxhYmVsID4gW3R5cGU9J3JhZGlvJ10ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbnRkLmxlZ2VuZC1sYWJlbCB7XG4gIHBhZGRpbmc6IDJweCAycHggMnB4IDAuNXJlbTtcbn1cblxuLnRvb2x0aXBbZGlzcGxheT1cIm5vbmVcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcmVjdC10by1jaXJjbGUge1xuICBzdHJva2Utd2lkdGg6IDI7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHBhaW50LW9yZGVyOiBtYXJrZXJzIGZpbGwgc3Ryb2tlO1xuICBmaWxsOiBub25lO1xufVxuXG4jcmVjdC10by1jaXJjbGVbY2FuLWFuaW1hdGU9J3RydWUnXSB7XG4gIGFuaW1hdGlvbjogcmVjdC10by1jaXJjbGUtbW9ycGggNXMgZWFzZSBpbmZpbml0ZTtcbn1cblxuI3JlY3QtdGljayB7XG4gIHN0cm9rZS13aWR0aDogMDtcbiAgZmlsbDogYmxhY2s7XG59XG5cbiNyZWN0LXRpY2tbY2FuLWFuaW1hdGU9J3RydWUnXSB7XG4gIGFuaW1hdGlvbjogcmVjdC10aWNrLW1vcnBoIDVzIGVhc2UgaW5maW5pdGU7XG59XG5cbiNwcm90ZWluLXN2ZyB7XG4gIGhlaWdodDogMTVwdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm9kZS1kaWFncmFtIHtcbiAgaGVpZ2h0OiAxN3B0O1xufVxuIl19 */";

/***/ }),

/***/ 76023:
/*!***********************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/custom_switchOnOff.css ***!
  \***********************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".switch{\n  --uiSwitchSize: var(--switchSize, 64px);\n  --uiSwitchBgColor: var(--switchBgColor, #f1f1f1);\n  --uiSwitchBgColorActive: var(--switchBgColorActive, rgb(104,41,124));\n  --uiSwitchBorderColorActive: var(--switchBorderColorActive, #fff);\n  --uiSwitchBorderColorFocus: var(--switchBgColorFocus, rgb(104,41,124));\n  --uiSwitchButtonBgColor: var(--switchButtonBgColor, #fff);\n\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.switch__label{\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.switch__toggle{\n  width: 0;\n  height: 0;\n  opacity: 0;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.switch__toggle:focus ~ .switch__label{\n  box-shadow: 0 0 0 4px var(--uiSwitchBorderColorFocus);\n  box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorFocus);\n}\n\n.switch__toggle:checked:focus ~ .switch__label{\n  box-shadow: 0 0 0 4px var(--uiSwitchBorderColorActive);\n  box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorActive);\n}\n\n.switch__label:before, .switch__label:after{\n  content: \"\";\n  cursor: pointer;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.switch__label:before{\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background-color: var(--uiSwitchBgColor);\n}\n\n.switch__label:after{\n  top: 50%;\n  z-index: 3;\n  transition: transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n}\n\n/* type 1 */\n\n.switch_type1{\n  --uiSwitchBorderRadius: var(--switchBorderRadius, 60px);\n\n  width: var(--uiSwitchSize);\n  height: calc((var(--uiSwitchSize) / 2));\n  border-radius: var(--uiSwitchBorderRadius);\n  background-color: var(--uiSwitchBgColorActive);\n}\n\n.switch_type1 .switch__label{\n  border-radius: var(--uiSwitchBorderRadius);\n}\n\n.switch_type1 .switch__label:before{\n  border-radius: var(--uiSwitchBorderRadius);\n  transition: opacity .2s ease-out .1s, transform .2s ease-out .1s;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.switch_type1 .switch__toggle:checked ~ .switch__label:before{\n  transform: scale(0);\n  opacity: .7;\n}\n\n.switch_type1 .switch__label:after{\n  width: calc(var(--uiSwitchSize) / 2);\n  height: calc(var(--uiSwitchSize) / 2);\n  transform: translate3d(0, -50%, 0);\n\n  background-color: var(--uiSwitchButtonBgColor);\n  border-radius: 100%;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, .3);\n}\n\n.switch_type1 .switch__toggle:checked ~ .switch__label:after{\n  transform: translate3d(100%, -50%, 0);\n}\n\n/* demo styles for switch */\n\n.switch{\n  --switchSize: 35px;\n  /*margin-top: 40px;*/\n  margin-bottom: 0px;\n}\n\n@media screen and (min-width: 768px){\n\n  html{\n    font-size: 62.5%;\n  }\n}\n\n@media screen and (max-width: 767px){\n\n  html{\n    font-size: 50%;\n  }\n}\n\nbody{\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;\n  font-size: 1.6rem;\n  color: #222;\n  background-color: #dfdfdf;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\na{\n  text-decoration: none;\n  color: #222;\n}\n\n@media screen and (min-width: 641px){\n\n  .footer__container{\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .melnik909{\n    margin-left: 2rem;\n  }\n}\n\n@media screen and (max-width: 640px){\n\n  .melnik909{\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbV9zd2l0Y2hPbk9mZi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0RBQWdEO0VBQ2hELG9FQUFvRTtFQUNwRSxpRUFBaUU7RUFDakUsc0VBQXNFO0VBQ3RFLHlEQUF5RDs7RUFFekQscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7O0VBRVYsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxxREFBZ0Y7RUFBaEYsZ0ZBQWdGO0FBQ2xGOztBQUVBO0VBQ0Usc0RBQWlGO0VBQWpGLGlGQUFpRjtBQUNuRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlOztFQUVmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDViw4REFBOEQ7QUFDaEU7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLHVEQUF1RDs7RUFFdkQsMEJBQTBCO0VBQzFCLHVDQUF1QztFQUN2QywwQ0FBMEM7RUFDMUMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGdFQUFnRTtFQUNoRSxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsa0NBQWtDOztFQUVsQyw4Q0FBOEM7RUFDOUMsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFHQSwyQkFBMkI7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLDBIQUEwSDtFQUMxSCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFHQTs7RUFFRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6ImN1c3RvbV9zd2l0Y2hPbk9mZi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoe1xuICAtLXVpU3dpdGNoU2l6ZTogdmFyKC0tc3dpdGNoU2l6ZSwgNjRweCk7XG4gIC0tdWlTd2l0Y2hCZ0NvbG9yOiB2YXIoLS1zd2l0Y2hCZ0NvbG9yLCAjZjFmMWYxKTtcbiAgLS11aVN3aXRjaEJnQ29sb3JBY3RpdmU6IHZhcigtLXN3aXRjaEJnQ29sb3JBY3RpdmUsIHJnYigxMDQsNDEsMTI0KSk7XG4gIC0tdWlTd2l0Y2hCb3JkZXJDb2xvckFjdGl2ZTogdmFyKC0tc3dpdGNoQm9yZGVyQ29sb3JBY3RpdmUsICNmZmYpO1xuICAtLXVpU3dpdGNoQm9yZGVyQ29sb3JGb2N1czogdmFyKC0tc3dpdGNoQmdDb2xvckZvY3VzLCByZ2IoMTA0LDQxLDEyNCkpO1xuICAtLXVpU3dpdGNoQnV0dG9uQmdDb2xvcjogdmFyKC0tc3dpdGNoQnV0dG9uQmdDb2xvciwgI2ZmZik7XG5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnN3aXRjaF9fbGFiZWx7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc3dpdGNoX190b2dnbGV7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zd2l0Y2hfX3RvZ2dsZTpmb2N1cyB+IC5zd2l0Y2hfX2xhYmVse1xuICBib3gtc2hhZG93OiAwIDAgMCB2YXIoLS11aVN3aXRjaFRoaWNrRm9jdXMsIDRweCkgdmFyKC0tdWlTd2l0Y2hCb3JkZXJDb2xvckZvY3VzKTtcbn1cblxuLnN3aXRjaF9fdG9nZ2xlOmNoZWNrZWQ6Zm9jdXMgfiAuc3dpdGNoX19sYWJlbHtcbiAgYm94LXNoYWRvdzogMCAwIDAgdmFyKC0tdWlTd2l0Y2hUaGlja0ZvY3VzLCA0cHgpIHZhcigtLXVpU3dpdGNoQm9yZGVyQ29sb3JBY3RpdmUpO1xufVxuXG4uc3dpdGNoX19sYWJlbDpiZWZvcmUsIC5zd2l0Y2hfX2xhYmVsOmFmdGVye1xuICBjb250ZW50OiBcIlwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zd2l0Y2hfX2xhYmVsOmJlZm9yZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlTd2l0Y2hCZ0NvbG9yKTtcbn1cblxuLnN3aXRjaF9fbGFiZWw6YWZ0ZXJ7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllcigwLjQ0LC0wLjEyLCAwLjA3LCAxLjE1KTtcbn1cblxuLyogdHlwZSAxICovXG5cbi5zd2l0Y2hfdHlwZTF7XG4gIC0tdWlTd2l0Y2hCb3JkZXJSYWRpdXM6IHZhcigtLXN3aXRjaEJvcmRlclJhZGl1cywgNjBweCk7XG5cbiAgd2lkdGg6IHZhcigtLXVpU3dpdGNoU2l6ZSk7XG4gIGhlaWdodDogY2FsYygodmFyKC0tdWlTd2l0Y2hTaXplKSAvIDIpKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdWlTd2l0Y2hCb3JkZXJSYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aVN3aXRjaEJnQ29sb3JBY3RpdmUpO1xufVxuXG4uc3dpdGNoX3R5cGUxIC5zd2l0Y2hfX2xhYmVse1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS11aVN3aXRjaEJvcmRlclJhZGl1cyk7XG59XG5cbi5zd2l0Y2hfdHlwZTEgLnN3aXRjaF9fbGFiZWw6YmVmb3Jle1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS11aVN3aXRjaEJvcmRlclJhZGl1cyk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2Utb3V0IC4xcywgdHJhbnNmb3JtIC4ycyBlYXNlLW91dCAuMXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zd2l0Y2hfdHlwZTEgLnN3aXRjaF9fdG9nZ2xlOmNoZWNrZWQgfiAuc3dpdGNoX19sYWJlbDpiZWZvcmV7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IC43O1xufVxuXG4uc3dpdGNoX3R5cGUxIC5zd2l0Y2hfX2xhYmVsOmFmdGVye1xuICB3aWR0aDogY2FsYyh2YXIoLS11aVN3aXRjaFNpemUpIC8gMik7XG4gIGhlaWdodDogY2FsYyh2YXIoLS11aVN3aXRjaFNpemUpIC8gMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlTd2l0Y2hCdXR0b25CZ0NvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgLjMpO1xufVxuXG4uc3dpdGNoX3R5cGUxIC5zd2l0Y2hfX3RvZ2dsZTpjaGVja2VkIH4gLnN3aXRjaF9fbGFiZWw6YWZ0ZXJ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgLTUwJSwgMCk7XG59XG5cblxuLyogZGVtbyBzdHlsZXMgZm9yIHN3aXRjaCAqL1xuXG4uc3dpdGNoe1xuICAtLXN3aXRjaFNpemU6IDM1cHg7XG4gIC8qbWFyZ2luLXRvcDogNDBweDsqL1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcblxuICBodG1se1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xuXG4gIGh0bWx7XG4gICAgZm9udC1zaXplOiA1MCU7XG4gIH1cbn1cblxuYm9keXtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3BlbiBTYW5zLCBVYnVudHUsIEZpcmEgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcbiAgbWFyZ2luOiAwO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyMjI7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpe1xuXG4gIC5mb290ZXJfX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5tZWxuaWs5MDl7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xuXG4gIC5tZWxuaWs5MDl7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 52238:
/*!******************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/download-form/download-form.component.css ***!
  \******************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 85750:
/*!***********************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/interactions-filters.component.css ***!
  \***********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* Facets customization */\n.dropdown-pane {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 1rem;\n}\n/* Filters bar styling */\n#filters-bar {\n  background: white\n}\n.scrollbar.filter {\n  background: white;\n  width: 100%;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n.no-overflow {\n  overflow-y: unset;\n}\n::ng-deep .custom-slider .ngx-slider .ngx-slider-bar {\n  background-image: url('mi-score-slider-image.svg') !important;\n  background-position: center !important; /* Center the image */\n  background-repeat: no-repeat !important; /* Do not repeat the image */\n  background-size: cover !important; /* display the whole image */\n  z-index: 1;\n  padding: 2px;\n  border-radius: 2px !important;\n  border: 1px solid #D9D9D9 !important;\n}\n::ng-deep .custom-slider .ngx-slider .ngx-slider-selection {\n  z-index: 2 !important;\n  background: rgba(255, 255, 255, 0) !important;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 2px !important;\n  height: 12px;\n  top: 13px;\n}\n::ng-deep .custom-slider .ngx-slider .ngx-slider-pointer {\n  width: 32px;\n  height: 32px;\n  border-style: solid;\n  border-color: #ffffff;\n  border-width: 2px;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);\n}\n::ng-deep .custom-slider .ngx-slider .ngx-slider-pointer:active,\n::ng-deep .custom-slider .ngx-slider .ngx-slider-pointer:focus {\n  box-shadow: 0 0 0 3px #216fd1;\n  outline: none;\n}\n::ng-deep .custom-slider .ngx-slider .ngx-slider-pointer:after {\n  background-color: white !important;\n  top: 10px;\n  left: 10px;\n}\n::ng-deep .custom-slider .ngx-slider .ngx-slider-bubble {\n  bottom: 14px;\n}\n/* Disable color for text in toogles */\n.disabled-color {\n  color: #847f7f;\n}\ndiv.reset-button {\n  text-align: center;\n}\nbutton.delete-button {\n  background-color: #68297C;\n  color: white;\n  padding: 5px;\n}\nbutton.delete-button > i {\n  line-height: 18px;\n}\n.species-cell {\n  color: white;\n  border-radius: 100px;\n  line-height: 16px;\n  /*padding: 2px 6px 0;*/\n}\n.discreet {\n  border-width: 1px;\n  border-style: solid;\n  color: #cdaae0;\n  border-color: #cdaae0;\n  background-color: white;\n  padding: 2px 5px;\n}\n.emphasized {\n  font-weight: bolder;\n  color: white;\n  background-color: #cdaae0;\n  padding: 3px 6px;\n}\n.dashed {\n  border-style: dashed;\n  border-width: 1px;\n  border-color: #68297C;\n  color: #68297C;\n  padding: 2px 5px;\n}\n.dashed.emphasized {\n  color: white;\n}\n@supports ( -moz-appearance:none ) {\n  /* Add non-firefox CSS code here */\n  .discreet,\n  .dashed {\n    padding: 2px 5px 0;\n  }\n\n  .emphasized {\n    padding: 3px 6px 1px;\n  }\n}\n.table-scroll {\n  position: relative;\n  width: 100%;\n  z-index: 1;\n  margin: auto;\n  overflow: auto;\n  border-collapse: separate;\n  border: none;\n  border-spacing: 0;\n}\n.table-scroll thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: white;\n  z-index: 4;\n}\n.term-id {\n  font-weight: bolder;\n  display: inline-block;\n  margin-right: 0.2rem;\n}\nem {\n  font-size: 11pt;\n  font-weight: normal;\n}\n.centered-switch-wrap {\n  display: flex;\n  justify-content: center;\n  padding-right: 13px;\n  font-weight: bold;\n}\n.vertically-centered {\n  margin: auto;\n  display: inline-block;\n  /*vertical-align: middle;*/\n}\ninput.vertically-centered {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.underline {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9ucy1maWx0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0U7QUFDRjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLDZEQUErRjtFQUMvRixzQ0FBc0MsRUFBRSxxQkFBcUI7RUFDN0QsdUNBQXVDLEVBQUUsNEJBQTRCO0VBQ3JFLGlDQUFpQyxFQUFFLDRCQUE0QjtFQUMvRCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0Msd0NBQXdDO0VBQ3hDLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHdDQUF3QztBQUMxQztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFHQSxzQ0FBc0M7QUFDdEM7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEM7O0lBRUUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx1Q0FBK0I7VUFBL0IsK0JBQStCO0FBQ2pDIiwiZmlsZSI6ImludGVyYWN0aW9ucy1maWx0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGYWNldHMgY3VzdG9taXphdGlvbiAqL1xuLmRyb3Bkb3duLXBhbmUge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi8qIEZpbHRlcnMgYmFyIHN0eWxpbmcgKi9cbiNmaWx0ZXJzLWJhciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlXG59XG5cbi5zY3JvbGxiYXIuZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5uby1vdmVyZmxvdyB7XG4gIG92ZXJmbG93LXk6IHVuc2V0O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Jlc3VsdHMvbWktc2NvcmUtc2xpZGVyLWltYWdlLnN2ZycpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50OyAvKiBDZW50ZXIgdGhlIGltYWdlICovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50OyAvKiBkaXNwbGF5IHRoZSB3aG9sZSBpbWFnZSAqL1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1zZWxlY3Rpb24ge1xuICB6LWluZGV4OiAyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTJweDtcbiAgdG9wOiAxM3B4O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItcG9pbnRlciB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyOmFjdGl2ZSxcbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICMyMTZmZDE7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYnViYmxlIHtcbiAgYm90dG9tOiAxNHB4O1xufVxuXG5cbi8qIERpc2FibGUgY29sb3IgZm9yIHRleHQgaW4gdG9vZ2xlcyAqL1xuLmRpc2FibGVkLWNvbG9yIHtcbiAgY29sb3I6ICM4NDdmN2Y7XG59XG5cbmRpdi5yZXNldC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuYnV0dG9uLmRlbGV0ZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjgyOTdDO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuYnV0dG9uLmRlbGV0ZS1idXR0b24gPiBpIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5zcGVjaWVzLWNlbGwge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLypwYWRkaW5nOiAycHggNnB4IDA7Ki9cbn1cblxuLmRpc2NyZWV0IHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGNvbG9yOiAjY2RhYWUwO1xuICBib3JkZXItY29sb3I6ICNjZGFhZTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG4uZW1waGFzaXplZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkYWFlMDtcbiAgcGFkZGluZzogM3B4IDZweDtcbn1cblxuLmRhc2hlZCB7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjNjgyOTdDO1xuICBjb2xvcjogIzY4Mjk3QztcbiAgcGFkZGluZzogMnB4IDVweDtcbn1cblxuLmRhc2hlZC5lbXBoYXNpemVkIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5Ac3VwcG9ydHMgKCAtbW96LWFwcGVhcmFuY2U6bm9uZSApIHtcbiAgLyogQWRkIG5vbi1maXJlZm94IENTUyBjb2RlIGhlcmUgKi9cbiAgLmRpc2NyZWV0LFxuICAuZGFzaGVkIHtcbiAgICBwYWRkaW5nOiAycHggNXB4IDA7XG4gIH1cblxuICAuZW1waGFzaXplZCB7XG4gICAgcGFkZGluZzogM3B4IDZweCAxcHg7XG4gIH1cbn1cblxuLnRhYmxlLXNjcm9sbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi50YWJsZS1zY3JvbGwgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi50ZXJtLWlkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbn1cblxuZW0ge1xuICBmb250LXNpemU6IDExcHQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5jZW50ZXJlZC1zd2l0Y2gtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZlcnRpY2FsbHktY2VudGVyZWQge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyp2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyovXG59XG5cbmlucHV0LnZlcnRpY2FsbHktY2VudGVyZWQge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG4iXX0= */";

/***/ }),

/***/ 55818:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-filters/negative-filter/negative-filter.component.css ***!
  \**********************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.bi-layered {\n  display: flex;\n  flex-direction: column;\n  line-height: normal;\n  margin: 0.5em 0;\n}\n\n.top-level {\n  margin-bottom: 0.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lZ2F0aXZlLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6Im5lZ2F0aXZlLWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iaS1sYXllcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG4udG9wLWxldmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG4iXX0= */";

/***/ }),

/***/ 18017:
/*!*****************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-list/interactions-list.component.css ***!
  \*****************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmFjdGlvbnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 44351:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-list/interactions-table/interactions-table.component.css ***!
  \*************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".iconColumn {\n  color: #44545f;\n  font-size: 1.5em;\n}\n\nselect {\n  box-sizing: border-box;\n  width: 100%;\n  border-radius: 0;\n}\n\n.top {\n  display: flex !important;\n  justify-content: space-around!important;\n}\n\n.top > .dataTables_info {\n  order: 0!important;\n}\n\n.top > .dataTables_paginate {\n  order: 1!important;\n  padding-top: 0;\n}\n\n.top > .dataTables_length {\n  order: 2!important;\n  padding-top: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9ucy10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJpbnRlcmFjdGlvbnMtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uQ29sdW1uIHtcbiAgY29sb3I6ICM0NDU0NWY7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbnNlbGVjdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4udG9wIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCFpbXBvcnRhbnQ7XG59XG5cbi50b3AgPiAuZGF0YVRhYmxlc19pbmZvIHtcbiAgb3JkZXI6IDAhaW1wb3J0YW50O1xufVxuLnRvcCA+IC5kYXRhVGFibGVzX3BhZ2luYXRlIHtcbiAgb3JkZXI6IDEhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi50b3AgPiAuZGF0YVRhYmxlc19sZW5ndGgge1xuICBvcmRlcjogMiFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4iXX0= */";

/***/ }),

/***/ 56858:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-list/interactors-table/interactors-table.component.css ***!
  \***********************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmFjdG9ycy10YWJsZS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 88478:
/*!**************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-results.component.css ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "@media print, screen and (min-width: 64em) {\n  /* Large size screen */\n  .sticky-bar {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 15;\n    background-color: white;\n    box-shadow: 0 1rem 14px -1rem rgba(33, 33, 33, 0.2);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9ucy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEI7SUFDRSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1EQUFtRDtFQUNyRDtBQUNGIiwiZmlsZSI6ImludGVyYWN0aW9ucy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xuICAvKiBMYXJnZSBzaXplIHNjcmVlbiAqL1xuICAuc3RpY2t5LWJhciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDE0cHggLTFyZW0gcmdiYSgzMywgMzMsIDMzLCAwLjIpO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 57092:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-viewer/interactions-legend/interactions-legend.component.css ***!
  \*****************************************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".node-line,\n.edge-line {\n  padding-left: 5pt;\n  background: #fbfbfb;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.node-line {\n  height: 22pt;\n}\n.edge-line {\n  height: 17pt;\n}\n.node-line span,\n.edge-line span{\n  vertical-align: middle;\n  padding-left: 4pt;\n}\n.edge-line:last-child {\n  padding-bottom: 21pt;\n}\nh5 {\n  margin-bottom: 0;\n  margin-top: 0.5rem;\n}\n.network-legend-label {\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9ucy1sZWdlbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUdBO0FBQ0EiLCJmaWxlIjoiaW50ZXJhY3Rpb25zLWxlZ2VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtbGluZSxcbi5lZGdlLWxpbmUge1xuICBwYWRkaW5nLWxlZnQ6IDVwdDtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ubm9kZS1saW5lIHtcbiAgaGVpZ2h0OiAyMnB0O1xufVxuLmVkZ2UtbGluZSB7XG4gIGhlaWdodDogMTdwdDtcbn1cblxuLm5vZGUtbGluZSBzcGFuLFxuLmVkZ2UtbGluZSBzcGFue1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDRwdDtcbn1cblxuLmVkZ2UtbGluZTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDIxcHQ7XG59XG5cbmg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG5cbi5uZXR3b3JrLWxlZ2VuZC1sYWJlbCB7XG59XG4iXX0= */";

/***/ }),

/***/ 57822:
/*!*********************************************************************************************************!*\
  !*** ./src/app/interactions/interactions-results/interactions-viewer/interactions-viewer.component.css ***!
  \*********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".underline {\n  border-bottom-style: solid;\n  border-color: #5a2e6e3d;\n}\n\n#for-canvas-graph {\n  flex-grow: 1;\n  background: #fbfbfb;\n  min-height: 40vh;\n}\n\n/* Legend adjustments */\n\n#node-color-legend,\n#node-shape-legend,\n#node-border-legend,\n#compound-node-color-legend,\n#edge-color-legend,\n#edge-thickness-legend,\n#edge-shapes-legend {\n  /* margin-bottom-large */\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\n#node-color-legend img,\n#node-border-legend img,\n#compound-node-color-legend img {\n  height: 1.5rem;\n  padding-right: 0.3rem;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n#node-shape-legend img {\n  height: 1.5rem;\n  width: 2rem;\n  padding-right: 0.3rem;\n  margin-bottom: 0.1rem;\n  font-size: 14px;\n}\n\n#edge-color-legend img {\n  padding-right: 0.3rem;\n  font-size: 14px;\n}\n\n#edge-thickness-legend img,\n#edge-shapes-legend img {\n  width: 3rem;\n  padding-right: 0.3rem;\n  font-size: 14px;\n}\n\n.download-graph-options {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n#download-png,\n#download-graphml {\n  flex: 1 1 0;\n  margin: 5px;\n}\n\n#network-viewer-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: stretch;\n}\n\n#toolbar-column {\n  /*flex: 1;*/\n  padding-left: 0;\n  order: 0;\n}\n\n#viewer-column {\n  /*flex: 1;*/\n  display: flex;\n  flex-direction: column;\n  order: 1;\n}\n\n#legend-column {\n  /*flex: 1;*/\n  padding-right: 0;\n  order: 2;\n}\n\n@media print, screen and (max-width: 40em) {\n  /* Small size screen */\n  #viewer-column {\n    order: 1;\n  }\n\n  body:after {\n    content: 'small';\n    display: none;\n  }\n}\n\n@media print, screen and (min-width: 40em) {\n  /* Medium size screen */\n  #viewer-column {\n    order: 3;\n  }\n\n  body:after {\n    content: 'medium';\n    display: none;\n  }\n}\n\n@media print, screen and (min-width: 64em) {\n  /* Large size screen */\n  #viewer-column {\n    order: 1;\n  }\n\n  body:after {\n    content: 'large';\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9ucy12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCOzs7Ozs7O0VBT0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QjtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QjtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2Y7QUFDRjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QjtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJpbnRlcmFjdGlvbnMtdmlld2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudW5kZXJsaW5lIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzVhMmU2ZTNkO1xufVxuXG4jZm9yLWNhbnZhcy1ncmFwaCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgbWluLWhlaWdodDogNDB2aDtcbn1cblxuLyogTGVnZW5kIGFkanVzdG1lbnRzICovXG4jbm9kZS1jb2xvci1sZWdlbmQsXG4jbm9kZS1zaGFwZS1sZWdlbmQsXG4jbm9kZS1ib3JkZXItbGVnZW5kLFxuI2NvbXBvdW5kLW5vZGUtY29sb3ItbGVnZW5kLFxuI2VkZ2UtY29sb3ItbGVnZW5kLFxuI2VkZ2UtdGhpY2tuZXNzLWxlZ2VuZCxcbiNlZGdlLXNoYXBlcy1sZWdlbmQge1xuICAvKiBtYXJnaW4tYm90dG9tLWxhcmdlICovXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbiNub2RlLWNvbG9yLWxlZ2VuZCBpbWcsXG4jbm9kZS1ib3JkZXItbGVnZW5kIGltZyxcbiNjb21wb3VuZC1ub2RlLWNvbG9yLWxlZ2VuZCBpbWcge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4zcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI25vZGUtc2hhcGUtbGVnZW5kIGltZyB7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4zcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2VkZ2UtY29sb3ItbGVnZW5kIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jZWRnZS10aGlja25lc3MtbGVnZW5kIGltZyxcbiNlZGdlLXNoYXBlcy1sZWdlbmQgaW1nIHtcbiAgd2lkdGg6IDNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZG93bmxvYWQtZ3JhcGgtb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuI2Rvd25sb2FkLXBuZyxcbiNkb3dubG9hZC1ncmFwaG1sIHtcbiAgZmxleDogMSAxIDA7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4jbmV0d29yay12aWV3ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuI3Rvb2xiYXItY29sdW1uIHtcbiAgLypmbGV4OiAxOyovXG4gIHBhZGRpbmctbGVmdDogMDtcbiAgb3JkZXI6IDA7XG59XG5cbiN2aWV3ZXItY29sdW1uIHtcbiAgLypmbGV4OiAxOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG9yZGVyOiAxO1xufVxuXG4jbGVnZW5kLWNvbHVtbiB7XG4gIC8qZmxleDogMTsqL1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBvcmRlcjogMjtcbn1cblxuQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwZW0pIHtcbiAgLyogU21hbGwgc2l6ZSBzY3JlZW4gKi9cbiAgI3ZpZXdlci1jb2x1bW4ge1xuICAgIG9yZGVyOiAxO1xuICB9XG5cbiAgYm9keTphZnRlciB7XG4gICAgY29udGVudDogJ3NtYWxsJztcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgcHJpbnQsIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBNZWRpdW0gc2l6ZSBzY3JlZW4gKi9cbiAgI3ZpZXdlci1jb2x1bW4ge1xuICAgIG9yZGVyOiAzO1xuICB9XG5cbiAgYm9keTphZnRlciB7XG4gICAgY29udGVudDogJ21lZGl1bSc7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHByaW50LCBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLyogTGFyZ2Ugc2l6ZSBzY3JlZW4gKi9cbiAgI3ZpZXdlci1jb2x1bW4ge1xuICAgIG9yZGVyOiAxO1xuICB9XG5cbiAgYm9keTphZnRlciB7XG4gICAgY29udGVudDogJ2xhcmdlJztcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 16507:
/*!********************************************************************!*\
  !*** ./src/app/interactomes/interactome/interactome.component.css ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".icon-species {\n  font-size: 100px;\n  color: #80727f;\n  line-height: 100px;\n}\n\na {\n  align-self: center;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);\n  padding: 1.5em 1em;\n  border-radius: 12px;\n  height: 100%;\n}\n\n.flex-spacer {\n  flex: 1;\n}\n\ndiv.actions {\n  text-align: center;\n}\n\n.species-button {\n  padding: 1em;\n  color: #68297c;\n  border-radius: 200em;\n  margin: 1em;\n  border: none;\n  cursor: pointer;\n}\n\n.species-button:hover {\n  opacity: 0.9;\n  box-shadow: 0 0 20px #68297c;\n}\n\nbutton.download-button {\n  border: 2px solid #68297c;\n  border-radius: 25px;\n  color: #68297c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0b21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEIiLCJmaWxlIjoiaW50ZXJhY3RvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXNwZWNpZXMge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBjb2xvcjogIzgwNzI3ZjtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xufVxuXG5hIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMS41ZW0gMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mbGV4LXNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbmRpdi5hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BlY2llcy1idXR0b24ge1xuICBwYWRkaW5nOiAxZW07XG4gIGNvbG9yOiAjNjgyOTdjO1xuICBib3JkZXItcmFkaXVzOiAyMDBlbTtcbiAgbWFyZ2luOiAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3BlY2llcy1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICM2ODI5N2M7XG59XG5cbmJ1dHRvbi5kb3dubG9hZC1idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjgyOTdjO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogIzY4Mjk3Yztcbn1cbiJdfQ== */";

/***/ }),

/***/ 59427:
/*!*********************************************************!*\
  !*** ./src/app/interactomes/interactomes.component.css ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmFjdG9tZXMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 68872:
/*!****************************************************************!*\
  !*** ./src/app/layout/contributors/contributors.component.css ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "a, a:visited {\n  border: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyaWJ1dG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImNvbnRyaWJ1dG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSwgYTp2aXNpdGVkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */";

/***/ }),

/***/ 22428:
/*!***************************************************************************!*\
  !*** ./src/app/layout/header/compact-header/compact-header.component.css ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* NAVIGATION SUBMENU OVERRIDE EBI-GLOBAL TO REMOVE A WHITE RIGHT LINE */\n\n.no-border-submenu {\n  border-right: 0 !important;\n}\n\n/* COMPACT HEADER */\n\n.masthead.compact-for-data .masthead-inner {\n  padding-top: .5rem;\n}\n\n.masthead.compact-for-data .masthead-inner div#local-title {\n  margin-bottom: 0;\n}\n\n.masthead.compact-for-data .masthead-inner h1 {\n  font-size: 2.5rem;\n  margin-bottom: 0;\n  margin-top: -.5rem;\n}\n\n.masthead.compact-for-data .masthead-inner form {\n  margin-top: -1rem;\n}\n\n.masthead.compact-for-data .masthead-inner nav {\n  margin-top: .75rem;\n  clear: none;\n}\n\n.masthead.compact-for-data.compact-disabled .masthead-inner > nav.column {\n  width: 100%;\n  left: 0;\n}\n\n.masthead-inner {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhY3QtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFOztBQUV4RTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImNvbXBhY3QtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOQVZJR0FUSU9OIFNVQk1FTlUgT1ZFUlJJREUgRUJJLUdMT0JBTCBUTyBSRU1PVkUgQSBXSElURSBSSUdIVCBMSU5FICovXG5cbi5uby1ib3JkZXItc3VibWVudSB7XG4gIGJvcmRlci1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4vKiBDT01QQUNUIEhFQURFUiAqL1xuLm1hc3RoZWFkLmNvbXBhY3QtZm9yLWRhdGEgLm1hc3RoZWFkLWlubmVyIHtcbiAgcGFkZGluZy10b3A6IC41cmVtO1xufVxuXG4ubWFzdGhlYWQuY29tcGFjdC1mb3ItZGF0YSAubWFzdGhlYWQtaW5uZXIgZGl2I2xvY2FsLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm1hc3RoZWFkLmNvbXBhY3QtZm9yLWRhdGEgLm1hc3RoZWFkLWlubmVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IC0uNXJlbTtcbn1cblxuLm1hc3RoZWFkLmNvbXBhY3QtZm9yLWRhdGEgLm1hc3RoZWFkLWlubmVyIGZvcm0ge1xuICBtYXJnaW4tdG9wOiAtMXJlbTtcbn1cblxuLm1hc3RoZWFkLmNvbXBhY3QtZm9yLWRhdGEgLm1hc3RoZWFkLWlubmVyIG5hdiB7XG4gIG1hcmdpbi10b3A6IC43NXJlbTtcbiAgY2xlYXI6IG5vbmU7XG59XG5cbi5tYXN0aGVhZC5jb21wYWN0LWZvci1kYXRhLmNvbXBhY3QtZGlzYWJsZWQgLm1hc3RoZWFkLWlubmVyID4gbmF2LmNvbHVtbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xufVxuXG4ubWFzdGhlYWQtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4iXX0= */";

/***/ }),

/***/ 27518:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/header/expanded-header/expanded-header.component.css ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* NAVIGATION SUBMENU OVERRIDE EBI-GLOBAL TO REMOVE A WHITE RIGHT LINE */\n\n.no-border-submenu {\n  border-right: 0 !important ;\n}\n\n.bar {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n}\n\n.masthead nav ul li.active a {\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGVkLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdFQUF3RTs7QUFFeEU7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJleHBhbmRlZC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5BVklHQVRJT04gU1VCTUVOVSBPVkVSUklERSBFQkktR0xPQkFMIFRPIFJFTU9WRSBBIFdISVRFIFJJR0hUIExJTkUgKi9cblxuLm5vLWJvcmRlci1zdWJtZW51IHtcbiAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQgO1xufVxuXG4uYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ubWFzdGhlYWQgbmF2IHVsIGxpLmFjdGl2ZSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iXX0= */";

/***/ }),

/***/ 33736:
/*!***********************************************************************!*\
  !*** ./src/app/layout/header/local-search/local-search.component.css ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".frosty-glass {\n  background: rgba(255, 255, 255, 0.3);\n  color: #FFFFFF;\n}\n\n.white-border {\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  border-bottom: 0;\n}\n\n#localSearchBox {\n  display: inline-flex;\n  flex-direction: row;\n  width: 100%;\n  justify-items: flex-end;\n}\n\n#local-search-button {\n  background: rgba(255, 255, 255, 0.3);\n  padding: 0.9em 1.2em;\n  margin: 0;\n  font-size: 0.8em;\n  border-left: 1px solid white;\n}\n\n#local-searchbox {\n  font-size: medium;\n  flex: 1;\n  height: 2.4em;\n  border-bottom: 0;\n}\n\n#local-searchbox::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1; /* Firefox */\n}\n\n#local-searchbox::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1; /* Firefox */\n}\n\n#local-searchbox::-ms-input-placeholder { /* Internet Explorer 10-11 */\n  color: #FFFFFF;\n}\n\n#local-searchbox::-ms-input-placeholder { /* Microsoft Edge */\n  color: #FFFFFF;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUEscUNBQWdDLHlDQUF5QztFQUN2RSxjQUFjO0VBQ2QsVUFBVSxFQUFFLFlBQVk7QUFDMUI7O0FBSEEsZ0NBQWdDLHlDQUF5QztFQUN2RSxjQUFjO0VBQ2QsVUFBVSxFQUFFLFlBQVk7QUFDMUI7O0FBRUEsMENBQTBDLDRCQUE0QjtFQUNwRSxjQUFjO0FBQ2hCOztBQUVBLDBDQUEwQyxtQkFBbUI7RUFDM0QsY0FBYztBQUNoQiIsImZpbGUiOiJsb2NhbC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcm9zdHktZ2xhc3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4ud2hpdGUtYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbiNsb2NhbFNlYXJjaEJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XG59XG5cbiNsb2NhbC1zZWFyY2gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBwYWRkaW5nOiAwLjllbSAxLjJlbTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4jbG9jYWwtc2VhcmNoYm94IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMi40ZW07XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbiNsb2NhbC1zZWFyY2hib3g6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG59XG5cbiNsb2NhbC1zZWFyY2hib3g6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4jbG9jYWwtc2VhcmNoYm94OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbiJdfQ== */";

/***/ }),

/***/ 70792:
/*!***********************************************************************************!*\
  !*** ./src/app/layout/loading-indicators/progress-bar/progress-bar.component.css ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 76550:
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/loading-indicators/progress-spinner/progress-spinner.component.css ***!
  \*******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 95498:
/*!****************************************************************!*\
  !*** ./src/app/layout/local-footer/local-footer.component.css ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NhbC1mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 70332:
/*!******************************************************!*\
  !*** ./src/app/navigation/about/about.component.css ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\nip-markdown ::ng-deep img {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUdBQXFHO0FBQ3JHO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgdGhpcyBpc3N1ZSB0byB1bmRlcnN0YW5kIHdoeSB3ZSBuZWVkIG5nLWRlZXAgaHR0cHM6Ly9naXRodWIuY29tL2pmY2VyZS9uZ3gtbWFya2Rvd24vaXNzdWVzLzU2Ki9cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDIge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDMge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaXAtbWFya2Rvd24gOjpuZy1kZWVwIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 67465:
/*!****************************************************************************************!*\
  !*** ./src/app/navigation/documentation/data-submission/data-submission.component.css ***!
  \****************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtc3VibWlzc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFHQUFxRztBQUNyRztFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZGF0YS1zdWJtaXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgdGhpcyBpc3N1ZSB0byB1bmRlcnN0YW5kIHdoeSB3ZSBuZWVkIG5nLWRlZXAgaHR0cHM6Ly9naXRodWIuY29tL2pmY2VyZS9uZ3gtbWFya2Rvd24vaXNzdWVzLzU2Ki9cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDIge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDMge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuIl19 */";

/***/ }),

/***/ 7230:
/*!**************************************************************************!*\
  !*** ./src/app/navigation/documentation/datasets/datasets.component.css ***!
  \**************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\nip-markdown ::ng-deep table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  font-size: small;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUdBQXFHO0FBQ3JHO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImRhdGFzZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgdGhpcyBpc3N1ZSB0byB1bmRlcnN0YW5kIHdoeSB3ZSBuZWVkIG5nLWRlZXAgaHR0cHM6Ly9naXRodWIuY29tL2pmY2VyZS9uZ3gtbWFya2Rvd24vaXNzdWVzLzU2Ki9cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDIge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDMge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaXAtbWFya2Rvd24gOjpuZy1kZWVwIHRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4iXX0= */";

/***/ }),

/***/ 83791:
/*!**********************************************************************!*\
  !*** ./src/app/navigation/documentation/documentation.component.css ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 94518:
/*!*********************************************************************************!*\
  !*** ./src/app/navigation/documentation/shared/markdown/markdown.component.css ***!
  \*********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrZG93bi5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 22751:
/*!******************************************************************************************!*\
  !*** ./src/app/navigation/documentation/technical-corner/technical-corner.component.css ***!
  \******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2huaWNhbC1jb3JuZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxR0FBcUc7QUFDckc7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InRlY2huaWNhbC1jb3JuZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNlZSB0aGlzIGlzc3VlIHRvIHVuZGVyc3RhbmQgd2h5IHdlIG5lZWQgbmctZGVlcCBodHRwczovL2dpdGh1Yi5jb20vamZjZXJlL25neC1tYXJrZG93bi9pc3N1ZXMvNTYqL1xuaXAtbWFya2Rvd24gOjpuZy1kZWVwIGgxIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMyB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4iXX0= */";

/***/ }),

/***/ 85007:
/*!******************************************************************************!*\
  !*** ./src/app/navigation/documentation/user-guide/user-guide.component.css ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\n#user-guide-tabs>li>a {\n  padding-right:12px;\n  padding-left:12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZ3VpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxR0FBcUc7QUFDckc7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InVzZXItZ3VpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNlZSB0aGlzIGlzc3VlIHRvIHVuZGVyc3RhbmQgd2h5IHdlIG5lZWQgbmctZGVlcCBodHRwczovL2dpdGh1Yi5jb20vamZjZXJlL25neC1tYXJrZG93bi9pc3N1ZXMvNTYqL1xuaXAtbWFya2Rvd24gOjpuZy1kZWVwIGgxIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMyB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbiN1c2VyLWd1aWRlLXRhYnM+bGk+YSB7XG4gIHBhZGRpbmctcmlnaHQ6MTJweDtcbiAgcGFkZGluZy1sZWZ0OjEycHg7XG59XG4iXX0= */";

/***/ }),

/***/ 71276:
/*!*********************************************************************!*\
  !*** ./src/app/navigation/download/datasets/datasets.component.css ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\nip-markdown ::ng-deep h3 {\n  font-size: large;\n}\nip-markdown ::ng-deep table {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n  font-size: small;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUdBQXFHO0FBQ3JHO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImRhdGFzZXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgdGhpcyBpc3N1ZSB0byB1bmRlcnN0YW5kIHdoeSB3ZSBuZWVkIG5nLWRlZXAgaHR0cHM6Ly9naXRodWIuY29tL2pmY2VyZS9uZ3gtbWFya2Rvd24vaXNzdWVzLzU2Ki9cbmlwLW1hcmtkb3duIDo6bmctZGVlcCBoMSB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDIge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDMge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuaXAtbWFya2Rvd24gOjpuZy1kZWVwIHRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4iXX0= */";

/***/ }),

/***/ 4058:
/*!************************************************************!*\
  !*** ./src/app/navigation/download/download.component.css ***!
  \************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 32713:
/*!***********************************************************!*\
  !*** ./src/app/navigation/download/ftp/ftp.component.css ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* See this issue to understand why we need ng-deep https://github.com/jfcere/ngx-markdown/issues/56*/\nip-markdown ::ng-deep h1 {\n  font-size: xx-large;\n}\nip-markdown ::ng-deep h2 {\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ0cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFHQUFxRztBQUNyRztFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImZ0cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2VlIHRoaXMgaXNzdWUgdG8gdW5kZXJzdGFuZCB3aHkgd2UgbmVlZCBuZy1kZWVwIGh0dHBzOi8vZ2l0aHViLmNvbS9qZmNlcmUvbmd4LW1hcmtkb3duL2lzc3Vlcy81NiovXG5pcC1tYXJrZG93biA6Om5nLWRlZXAgaDEge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuaXAtbWFya2Rvd24gOjpuZy1kZWVwIGgyIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xufVxuIl19 */";

/***/ }),

/***/ 16591:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/column-toggle/column-toggle.component.css ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".stick-and-fill-right {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n}\n\nul.tight li {\n  height: 1.3em;\n}\n\n.column-toggle-container .dropdown-pane {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 0.3em 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi10b2dnbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiY29sdW1uLXRvZ2dsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNrLWFuZC1maWxsLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudWwudGlnaHQgbGkge1xuICBoZWlnaHQ6IDEuM2VtO1xufVxuXG4uY29sdW1uLXRvZ2dsZS1jb250YWluZXIgLmRyb3Bkb3duLXBhbmUge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmc6IDAuM2VtIDFlbTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 29375:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/color-range-diagram/color-range-diagram.component.css ***!
  \**************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".upper-filled {\n  paint-order: markers stroke fill;\n}\n\nrect {\n  stroke: #ababab;\n}\n\ntext {\n  fill: #3c3c3c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLXJhbmdlLWRpYWdyYW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiY29sb3ItcmFuZ2UtZGlhZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwcGVyLWZpbGxlZCB7XG4gIHBhaW50LW9yZGVyOiBtYXJrZXJzIHN0cm9rZSBmaWxsO1xufVxuXG5yZWN0IHtcbiAgc3Ryb2tlOiAjYWJhYmFiO1xufVxuXG50ZXh0IHtcbiAgZmlsbDogIzNjM2MzYztcbn1cbiJdfQ== */";

/***/ }),

/***/ 74734:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/edge-diagram/edge-diagram.component.css ***!
  \************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".edge-diagram {\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkZ2UtZGlhZ3JhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImVkZ2UtZGlhZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkZ2UtZGlhZ3JhbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iXX0= */";

/***/ }),

/***/ 50169:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component.css ***!
  \********************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGdlLXRoaWNrbmVzcy1kaWFncmFtLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 83834:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/diagrams/node-diagram/node-diagram.component.css ***!
  \************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".node-diagram {\n  vertical-align: middle;\n  height: 20pt;\n}\n\n.node-diagram text {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n          user-select: text;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGUtZGlhZ3JhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6Im5vZGUtZGlhZ3JhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vZGUtZGlhZ3JhbSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMjBwdDtcbn1cblxuLm5vZGUtZGlhZ3JhbSB0ZXh0IHtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4iXX0= */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map