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
const styles_WorkSamplesComponent:any[] = [import0.styles];
export const RenderType_WorkSamplesComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_WorkSamplesComponent,
  data: {}
}
);
function View_WorkSamplesComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'small',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n            (',
      ')\n        '
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.getCompany((<any>v.parent).context.$implicit.companyId);
    ck(v,1,0,currVal_0);
  });
}
function View_WorkSamplesComponent_3(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      'Developed For: ',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = (<any>v.parent).context.$implicit.software;
    ck(v,1,0,currVal_0);
  });
}
function View_WorkSamplesComponent_4(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'badge'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
  });
}
function View_WorkSamplesComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),19,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,'h2',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n        ',
      '\n        '
    ]
    )),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_WorkSamplesComponent_2)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_WorkSamplesComponent_3)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_WorkSamplesComponent_4)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'button',[[
        'type',
        'button'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.navigateTo(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Find Out More'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_1:any = co.companies;
    ck(v,5,0,currVal_1);
    const currVal_2:any = v.context.$implicit.software;
    ck(v,9,0,currVal_2);
    const currVal_3:any = v.context.$implicit.tags;
    ck(v,12,0,currVal_3);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.title;
    ck(v,3,0,currVal_0);
    const currVal_4:any = v.context.$implicit.shortDescr;
    ck(v,15,0,currVal_4);
  });
}
export function View_WorkSamplesComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Projects'])),
    (l()(),import1.ɵted((null as any),['\n\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'div',[[
        'class',
        'row'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),6,'blockquote',[[
        'cite',
        'Batman Begins'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import1.ɵpod([
      'col-xs-11',
      'pull-right'
    ]
    ),
    (l()(),import1.ɵted((null as any),['\n        It\'s not who I am underneath, but what I do that defines me.\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'small',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Batman'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n\n'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_WorkSamplesComponent_1)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any))
  ]
  ,(ck,v) => {
    var co:import3.WorkSamplesComponent = v.component;
    const currVal_0:any = ck(v,7,0,true,co.isScreenXS());
    ck(v,6,0,currVal_0);
    const currVal_1:any = co.projects;
    ck(v,15,0,currVal_1);
  },(null as any));
}
function View_WorkSamplesComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'work-samples',([] as any[]),(null as any),(null as any),(null as any),View_WorkSamplesComponent_0,RenderType_WorkSamplesComponent)),
    import1.ɵdid(122880,(null as any),0,import3.WorkSamplesComponent,[
      import4.ProjectService,
      import5.JobService,
      import6.Router,
      import7.ScreenSizeService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const WorkSamplesComponentNgFactory:import1.ComponentFactory<import3.WorkSamplesComponent> = import1.ɵccf('work-samples',import3.WorkSamplesComponent,View_WorkSamplesComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL0FuZHJld1N0YXJyL0RvY3VtZW50cy92c0NvZGUvUGVyc29uYWwgV2Vic2l0ZS9zcmMvYXBwL2NvbXBvbmVudHMvd29yay1zYW1wbGVzLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9BbmRyZXdTdGFyci9Eb2N1bWVudHMvdnNDb2RlL1BlcnNvbmFsIFdlYnNpdGUvc3JjL2FwcC9jb21wb25lbnRzL3dvcmstc2FtcGxlcy5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9BbmRyZXdTdGFyci9Eb2N1bWVudHMvdnNDb2RlL1BlcnNvbmFsIFdlYnNpdGUvc3JjL2FwcC90ZW1wbGF0ZXMvd29yay1zYW1wbGVzLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vVXNlcnMvQW5kcmV3U3RhcnIvRG9jdW1lbnRzL3ZzQ29kZS9QZXJzb25hbCBXZWJzaXRlL3NyYy9hcHAvY29tcG9uZW50cy93b3JrLXNhbXBsZXMuY29tcG9uZW50LnRzLldvcmtTYW1wbGVzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPlByb2plY3RzPC9oMT5cblxuPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxibG9ja3F1b3RlIGNpdGU9XCJCYXRtYW4gQmVnaW5zXCIgW25nQ2xhc3NdPVwieydjb2wteHMtMTEnOiB0cnVlLCAncHVsbC1yaWdodCc6IGlzU2NyZWVuWFMoKX1cIj5cbiAgICAgICAgSXQncyBub3Qgd2hvIEkgYW0gdW5kZXJuZWF0aCwgYnV0IHdoYXQgSSBkbyB0aGF0IGRlZmluZXMgbWUuXG4gICAgICAgIDxzbWFsbD5CYXRtYW48L3NtYWxsPlxuICAgIDwvYmxvY2txdW90ZT5cbjwvZGl2PlxuXG48ZGl2ICpuZ0Zvcj1cImxldCBwcm9qZWN0IG9mIHByb2plY3RzXCI+XG4gICAgPGgyPlxuICAgICAgICB7e3Byb2plY3QudGl0bGV9fVxuICAgICAgICA8c21hbGwgKm5nSWY9XCJjb21wYW5pZXNcIj5cbiAgICAgICAgICAgICh7e2dldENvbXBhbnkocHJvamVjdC5jb21wYW55SWQpfX0pXG4gICAgICAgIDwvc21hbGw+XG4gICAgPC9oMj5cbiAgICA8aDMgKm5nSWY9XCJwcm9qZWN0LnNvZnR3YXJlXCI+RGV2ZWxvcGVkIEZvcjoge3twcm9qZWN0LnNvZnR3YXJlfX08L2gzPlxuICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2VcIiAqbmdGb3I9XCJsZXQgdGFnIG9mIHByb2plY3QudGFnc1wiPnt7dGFnfX08L3NwYW4+XG4gICAgPHA+e3twcm9qZWN0LnNob3J0RGVzY3J9fTwvcD5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwibmF2aWdhdGVUbyhwcm9qZWN0KVwiPkZpbmQgT3V0IE1vcmU8L2J1dHRvbj5cbjwvZGl2PiIsIjx3b3JrLXNhbXBsZXM+PC93b3JrLXNhbXBsZXM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1lRO0lBQXlCO01BQUE7TUFBQTtJQUFBO0lBQUE7Ozs7SUFBQTtJQUFBOzs7OztJQUk3QjtJQUE2QjtNQUFBO01BQUE7SUFBQTtJQUFBOzs7SUFBQTtJQUFBOzs7OztNQUM3QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXFEO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFBO0lBQUE7Ozs7O0lBUnpEO0lBQXNDO0lBQ2xDO0lBQUk7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUVBO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFUTtJQUNQO0lBQ0w7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFxRTtJQUNyRTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFtRTtJQUNuRTtJQUFHO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBMEI7TUFDN0I7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFzQjtRQUFBO1FBQUE7TUFBQTtNQUF0QjtJQUFBO0lBQW9EO0lBQXNCOzs7O0lBUC9EO0lBQVAsU0FBTyxTQUFQO0lBSUE7SUFBSixTQUFJLFNBQUo7SUFDb0I7SUFBcEIsVUFBb0IsU0FBcEI7O0lBUEk7SUFBQTtJQVFEO0lBQUE7Ozs7O0lBbEJQO0lBQUk7SUFBYTtNQUVqQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlCO01BQ2I7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQWlDO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBNEQ7SUFFekY7SUFBTztJQUFjO0lBQ1o7SUFDWDtJQUVOO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBTnFDO0lBQWpDLFNBQWlDLFNBQWpDO0lBTUM7SUFBTCxVQUFLLFNBQUw7Ozs7O0lDVEE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTs7O0lBQUE7OzsifQ==
