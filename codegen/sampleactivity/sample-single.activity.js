"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ma_core_1 = require("@sitecore/ma-core");
var SampleSingleItemActivity = (function (_super) {
    __extends(SampleSingleItemActivity, _super);
    function SampleSingleItemActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleSingleItemActivity.prototype.getVisual = function () {
        var subTitle = this.isDefined ? 'Count: ' + this.editorParams.count : '';
        var cssClass = this.isDefined ? '' : 'undefined';
        return "\n            <div class=\"marketing-action " + cssClass + "\">\n                <span class=\"icon\">\n                    <img src=\"/~/icon/OfficeWhite/32x32/gearwheels.png\" />\n                </span>\n                <p class=\"text with-subtitle\" title=\"Sample single item\">\n                    Sample single item\n                    <small class=\"subtitle\" title=\"" + subTitle + "\">" + subTitle + "</small>\n                </p>\n            </div>\n        ";
    };
    Object.defineProperty(SampleSingleItemActivity.prototype, "isDefined", {
        get: function () {
            return Boolean(this.editorParams.count);
        },
        enumerable: true,
        configurable: true
    });
    return SampleSingleItemActivity;
}(ma_core_1.SingleItem));
exports.SampleSingleItemActivity = SampleSingleItemActivity;
//# sourceMappingURL=sample-single.activity.js.map