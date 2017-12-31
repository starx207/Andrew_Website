import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot/src/app/modules/app.module.ngfactory';
if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map