/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core';
import * as import1 from '../../../../src/app/modules/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '../../../../src/app/modules/app-routing.module';
import * as import6 from '@angular/forms';
import * as import7 from '../../../../src/app/services/education.service';
import * as import8 from '../../../../src/app/services/job.service';
import * as import9 from '../../../../src/app/services/project.service';
import * as import10 from '../../../../src/app/services/scroll.service';
import * as import11 from '../../../../src/app/services/screen-size.service';
import * as import12 from '../components/home.component.ngfactory';
import * as import13 from '../components/about-me.component.ngfactory';
import * as import14 from '../components/education.component.ngfactory';
import * as import15 from '../components/work-experience.component.ngfactory';
import * as import16 from '../components/work-samples.component.ngfactory';
import * as import17 from '../components/job-details.component.ngfactory';
import * as import18 from '../components/project-details.component.ngfactory';
import * as import19 from '../components/college-details.component.ngfactory';
import * as import20 from '../components/app.component.ngfactory';
import * as import21 from '../../../../src/app/components/home.component';
import * as import22 from '../../../../src/app/components/about-me.component';
import * as import23 from '../../../../src/app/components/education.component';
import * as import24 from '../../../../src/app/components/work-experience.component';
import * as import25 from '../../../../src/app/components/work-samples.component';
import * as import26 from '../../../../src/app/components/job-details.component';
import * as import27 from '../../../../src/app/components/project-details.component';
import * as import28 from '../../../../src/app/components/college-details.component';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import12.HomeComponentNgFactory,
            import13.AboutMeComponentNgFactory,
            import14.EducationComponentNgFactory,
            import15.WorkExperienceComponentNgFactory,
            import16.WorkSamplesComponentNgFactory,
            import17.JobDetailsComponentNgFactory,
            import18.ProjectDetailsComponentNgFactory,
            import19.CollegeDetailsComponentNgFactory,
            import20.AppComponentNgFactory
        ], [import20.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_25", {
        get: function () {
            if ((this.__LOCALE_ID_25 == null)) {
                (this.__LOCALE_ID_25 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_26", {
        get: function () {
            if ((this.__NgLocalization_26 == null)) {
                (this.__NgLocalization_26 = new import2.NgLocaleLocalization(this._LOCALE_ID_25));
            }
            return this.__NgLocalization_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_27", {
        get: function () {
            if ((this.__APP_ID_27 == null)) {
                (this.__APP_ID_27 = import0.ɵg());
            }
            return this.__APP_ID_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = import0.ɵl());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = import0.ɵm());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_30", {
        get: function () {
            if ((this.__DomSanitizer_30 == null)) {
                (this.__DomSanitizer_30 = new import4.ɵe(this.parent.get(import4.DOCUMENT)));
            }
            return this.__DomSanitizer_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_31", {
        get: function () {
            if ((this.__Sanitizer_31 == null)) {
                (this.__Sanitizer_31 = this._DomSanitizer_30);
            }
            return this.__Sanitizer_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_32", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_32 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_32 = new import4.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_33", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_33 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_33 = [
                    new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT), this._HAMMER_GESTURE_CONFIG_32)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_34", {
        get: function () {
            if ((this.__EventManager_34 == null)) {
                (this.__EventManager_34 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_33, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_35", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_35 == null)) {
                (this.__ɵDomSharedStylesHost_35 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_36", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_36 == null)) {
                (this.__ɵDomRendererFactory2_36 = new import4.ɵDomRendererFactory2(this._EventManager_34, this._ɵDomSharedStylesHost_35));
            }
            return this.__ɵDomRendererFactory2_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_37", {
        get: function () {
            if ((this.__RendererFactory2_37 == null)) {
                (this.__RendererFactory2_37 = this._ɵDomRendererFactory2_36);
            }
            return this.__RendererFactory2_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_38", {
        get: function () {
            if ((this.__ɵSharedStylesHost_38 == null)) {
                (this.__ɵSharedStylesHost_38 = this._ɵDomSharedStylesHost_35);
            }
            return this.__ɵSharedStylesHost_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_39", {
        get: function () {
            if ((this.__Testability_39 == null)) {
                (this.__Testability_39 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_40", {
        get: function () {
            if ((this.__Meta_40 == null)) {
                (this.__Meta_40 = new import4.Meta(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Meta_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_41", {
        get: function () {
            if ((this.__Title_41 == null)) {
                (this.__Title_41 = new import4.Title(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Title_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_42", {
        get: function () {
            if ((this.__ActivatedRoute_42 == null)) {
                (this.__ActivatedRoute_42 = import3.ɵf(this._Router_19));
            }
            return this.__ActivatedRoute_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_43", {
        get: function () {
            if ((this.__NoPreloading_43 == null)) {
                (this.__NoPreloading_43 = new import3.NoPreloading());
            }
            return this.__NoPreloading_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_44", {
        get: function () {
            if ((this.__PreloadingStrategy_44 == null)) {
                (this.__PreloadingStrategy_44 = this._NoPreloading_43);
            }
            return this.__PreloadingStrategy_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_45", {
        get: function () {
            if ((this.__RouterPreloader_45 == null)) {
                (this.__RouterPreloader_45 = new import3.RouterPreloader(this._Router_19, this._NgModuleFactoryLoader_17, this._Compiler_16, this, this._PreloadingStrategy_44));
            }
            return this.__RouterPreloader_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_46", {
        get: function () {
            if ((this.__PreloadAllModules_46 == null)) {
                (this.__PreloadAllModules_46 = new import3.PreloadAllModules());
            }
            return this.__PreloadAllModules_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_47", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_47 == null)) {
                (this.__ROUTER_INITIALIZER_47 = import3.ɵi(this._ɵg_3));
            }
            return this.__ROUTER_INITIALIZER_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_48", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_48 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_48 = [this._ROUTER_INITIALIZER_47]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_49", {
        get: function () {
            if ((this.__ɵi_49 == null)) {
                (this.__ɵi_49 = new import6.ɵi());
            }
            return this.__ɵi_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EducationService_50", {
        get: function () {
            if ((this.__EducationService_50 == null)) {
                (this.__EducationService_50 = new import7.EducationService());
            }
            return this.__EducationService_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_JobService_51", {
        get: function () {
            if ((this.__JobService_51 == null)) {
                (this.__JobService_51 = new import8.JobService());
            }
            return this.__JobService_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ProjectService_52", {
        get: function () {
            if ((this.__ProjectService_52 == null)) {
                (this.__ProjectService_52 = new import9.ProjectService());
            }
            return this.__ProjectService_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ScrollService_53", {
        get: function () {
            if ((this.__ScrollService_53 == null)) {
                (this.__ScrollService_53 = new import10.ScrollService(this.parent.get(import4.DOCUMENT)));
            }
            return this.__ScrollService_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ScreenSizeService_54", {
        get: function () {
            if ((this.__ScreenSizeService_54 == null)) {
                (this.__ScreenSizeService_54 = new import11.ScreenSizeService(this.parent.get(import4.DOCUMENT)));
            }
            return this.__ScreenSizeService_54;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import4.ɵa();
        this._NgProbeToken_2 = [import3.ɵb()];
        this._ɵg_3 = new import3.ɵg(this);
        this._APP_INITIALIZER_4 = [
            import0.ɵo,
            import4.ɵc(this.parent.get(import4.NgProbeToken, null), this._NgProbeToken_2),
            import3.ɵh(this._ɵg_3)
        ];
        this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
        this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
        this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ɵa_10 = import3.ɵd(this.parent.get(import3.Router, null));
        this._UrlSerializer_11 = new import3.DefaultUrlSerializer();
        this._RouterOutletMap_12 = new import3.RouterOutletMap();
        this._ROUTER_CONFIGURATION_13 = {};
        this._LocationStrategy_14 = import3.ɵc(this.parent.get(import2.PlatformLocation), this.parent.get(import2.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_13);
        this._Location_15 = new import2.Location(this._LocationStrategy_14);
        this._Compiler_16 = new import0.Compiler();
        this._NgModuleFactoryLoader_17 = new import0.SystemJsNgModuleLoader(this._Compiler_16, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null));
        this._ROUTES_18 = [[
                {
                    path: '',
                    redirectTo: '/Home',
                    pathMatch: 'full'
                },
                {
                    path: 'Home',
                    component: import21.HomeComponent
                },
                {
                    path: 'AboutMe',
                    component: import22.AboutMeComponent
                },
                {
                    path: 'Education',
                    component: import23.EducationComponent
                },
                {
                    path: 'WorkExperience',
                    component: import24.WorkExperienceComponent
                },
                {
                    path: 'WorkSamples',
                    component: import25.WorkSamplesComponent
                },
                {
                    path: 'JobDetails/:id',
                    component: import26.JobDetailsComponent
                },
                {
                    path: 'ProjectDetails/:id',
                    component: import27.ProjectDetailsComponent
                },
                {
                    path: 'CollegeDetails/:id',
                    component: import28.CollegeDetailsComponent
                },
                {
                    path: '**',
                    redirectTo: '/Home',
                    pathMatch: 'full'
                }
            ]
        ];
        this._Router_19 = import3.ɵe(this._ApplicationRef_7, this._UrlSerializer_11, this._RouterOutletMap_12, this._Location_15, this, this._NgModuleFactoryLoader_17, this._Compiler_16, this._ROUTES_18, this._ROUTER_CONFIGURATION_13, this.parent.get(import3.UrlHandlingStrategy, null), this.parent.get(import3.RouteReuseStrategy, null));
        this._RouterModule_20 = new import3.RouterModule(this._ɵa_10, this._Router_19);
        this._AppRoutingModule_21 = new import5.AppRoutingModule();
        this._ɵba_22 = new import6.ɵba();
        this._FormsModule_23 = new import6.FormsModule();
        this._AppModule_24 = new import1.AppModule();
        return this._AppModule_24;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_2;
        }
        if ((token === import3.ɵg)) {
            return this._ɵg_3;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_6;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_7;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_8;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_9;
        }
        if ((token === import3.ɵa)) {
            return this._ɵa_10;
        }
        if ((token === import3.UrlSerializer)) {
            return this._UrlSerializer_11;
        }
        if ((token === import3.RouterOutletMap)) {
            return this._RouterOutletMap_12;
        }
        if ((token === import3.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_13;
        }
        if ((token === import2.LocationStrategy)) {
            return this._LocationStrategy_14;
        }
        if ((token === import2.Location)) {
            return this._Location_15;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_16;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_17;
        }
        if ((token === import3.ROUTES)) {
            return this._ROUTES_18;
        }
        if ((token === import3.Router)) {
            return this._Router_19;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_20;
        }
        if ((token === import5.AppRoutingModule)) {
            return this._AppRoutingModule_21;
        }
        if ((token === import6.ɵba)) {
            return this._ɵba_22;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_23;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_24;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_25;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_26;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_27;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_28;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_29;
        }
        if ((token === import4.DomSanitizer)) {
            return this._DomSanitizer_30;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_31;
        }
        if ((token === import4.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_32;
        }
        if ((token === import4.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_33;
        }
        if ((token === import4.EventManager)) {
            return this._EventManager_34;
        }
        if ((token === import4.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_35;
        }
        if ((token === import4.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_36;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_37;
        }
        if ((token === import4.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_38;
        }
        if ((token === import0.Testability)) {
            return this._Testability_39;
        }
        if ((token === import4.Meta)) {
            return this._Meta_40;
        }
        if ((token === import4.Title)) {
            return this._Title_41;
        }
        if ((token === import3.ActivatedRoute)) {
            return this._ActivatedRoute_42;
        }
        if ((token === import3.NoPreloading)) {
            return this._NoPreloading_43;
        }
        if ((token === import3.PreloadingStrategy)) {
            return this._PreloadingStrategy_44;
        }
        if ((token === import3.RouterPreloader)) {
            return this._RouterPreloader_45;
        }
        if ((token === import3.PreloadAllModules)) {
            return this._PreloadAllModules_46;
        }
        if ((token === import3.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_47;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_48;
        }
        if ((token === import6.ɵi)) {
            return this._ɵi_49;
        }
        if ((token === import7.EducationService)) {
            return this._EducationService_50;
        }
        if ((token === import8.JobService)) {
            return this._JobService_51;
        }
        if ((token === import9.ProjectService)) {
            return this._ProjectService_52;
        }
        if ((token === import10.ScrollService)) {
            return this._ScrollService_53;
        }
        if ((token === import11.ScreenSizeService)) {
            return this._ScreenSizeService_54;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_35 && this._ɵDomSharedStylesHost_35.ngOnDestroy());
        (this.__RouterPreloader_45 && this._RouterPreloader_45.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map