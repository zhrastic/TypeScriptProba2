/// <reference path="../modules/require.d.ts" />
/// <reference path="AppMain.ts" />
require.config({});
require(['AppMain'], (main) => {
    // code from window.onload
    var appMain = new main.AppMain();
    appMain.run();
});
//# sourceMappingURL=AppConfig.js.map