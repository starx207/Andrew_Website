/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '../styles/work-samples.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from '../../../../src/app/components/work-samples.component';
import * as import4 from '../../../../src/app/services/project.service';
import * as import5 from '../../../../src/app/services/job.service';
import * as import6 from '@angular/router';
import * as import7 from '../../../../src/app/services/screen-size.service';
var styles_WorkSamplesComponent = [import0.styles];
export var RenderType_WorkSamplesComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_WorkSamplesComponent,
    data: {}
});
function View_WorkSamplesComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'small', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n            (',
            ')\n        '
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.getCompany(v.parent.context.$implicit.companyId);
        ck(v, 1, 0, currVal_0);
    });
}
function View_WorkSamplesComponent_3(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'h3', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            'Developed For: ',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.parent.context.$implicit.software;
        ck(v, 1, 0, currVal_0);
    });
}
function View_WorkSamplesComponent_4(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'badge'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.context.$implicit;
        ck(v, 1, 0, currVal_0);
    });
}
function View_WorkSamplesComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 19, 'div', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 4, 'h2', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n        ',
            '\n        '
        ])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_WorkSamplesComponent_2)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_WorkSamplesComponent_3)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_WorkSamplesComponent_4)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [[
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.navigateTo(v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['Find Out More'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = co.companies;
        ck(v, 5, 0, currVal_1);
        var currVal_2 = v.context.$implicit.software;
        ck(v, 9, 0, currVal_2);
        var currVal_3 = v.context.$implicit.tags;
        ck(v, 12, 0, currVal_3);
    }, function (ck, v) {
        var currVal_0 = v.context.$implicit.title;
        ck(v, 3, 0, currVal_0);
        var currVal_4 = v.context.$implicit.shortDescr;
        ck(v, 15, 0, currVal_4);
    });
}
export function View_WorkSamplesComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Projects'])),
        (l()(), import1.ɵted(null, ['\n\n'])),
        (l()(), import1.ɵeld(0, null, null, 9, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 6, 'blockquote', [[
                'cite',
                'Batman Begins'
            ]
        ], null, null, null, null, null)),
        import1.ɵdid(139264, null, 0, import2.NgClass, [
            import1.IterableDiffers,
            import1.KeyValueDiffers,
            import1.ElementRef,
            import1.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import1.ɵpod([
            'col-xs-11',
            'pull-right'
        ]),
        (l()(), import1.ɵted(null, ['\n        It\'s not who I am underneath, but what I do that defines me.\n        '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'small', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['Batman'])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n\n'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_WorkSamplesComponent_1)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 7, 0, true, co.isScreenXS());
        ck(v, 6, 0, currVal_0);
        var currVal_1 = co.projects;
        ck(v, 15, 0, currVal_1);
    }, null);
}
function View_WorkSamplesComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'work-samples', [], null, null, null, View_WorkSamplesComponent_0, RenderType_WorkSamplesComponent)),
        import1.ɵdid(122880, null, 0, import3.WorkSamplesComponent, [
            import4.ProjectService,
            import5.JobService,
            import6.Router,
            import7.ScreenSizeService
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var WorkSamplesComponentNgFactory = import1.ɵccf('work-samples', import3.WorkSamplesComponent, View_WorkSamplesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=work-samples.component.ngfactory.js.map