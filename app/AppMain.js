define(["require", "exports", "classes/Greeter"], function (require, exports, gt) {
    "use strict";
    class AppMain {
        run() {
            var el = document.getElementById('content');
            var greeter = new gt.Greeter(el);
            greeter.start();
        }
    }
    exports.AppMain = AppMain;
});
//# sourceMappingURL=AppMain.js.map