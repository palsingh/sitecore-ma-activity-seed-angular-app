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
var core_1 = require("@angular/core");
var ma_core_1 = require("@sitecore/ma-core");
var SampleSingleItemEditorComponent = (function (_super) {
    __extends(SampleSingleItemEditorComponent, _super);
    function SampleSingleItemEditorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleSingleItemEditorComponent.prototype.ngOnInit = function () {
        this.count = this.model ? this.model.count || 0 : 0;
    };
    SampleSingleItemEditorComponent.prototype.increaseValue = function () {
        this.count++;
    };
    SampleSingleItemEditorComponent.prototype.decreaseValue = function () {
        this.count--;
    };
    SampleSingleItemEditorComponent.prototype.serialize = function () {
        return {
            count: this.count
        };
    };
    SampleSingleItemEditorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'sample-single-item-editor',
                    template: "\n        <section class=\"content\">\n            <div class=\"form-group\">\n                <div class=\"row sample-single-item-editor\">\n                    <label class=\"col-6 title\">Count</label>\n                    <div class=\"col-6\">\n                        <span class=\"minus-icon\" (click)=\"decreaseValue()\">-</span>\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"count\"/>\n                        <span class=\"plus-icon\" (click)=\"increaseValue()\">+</span>\n                    </div>\n                </div>\n            </div>\n        </section>\n    ",
                    styles: [""]
                },] },
    ];
    return SampleSingleItemEditorComponent;
}(ma_core_1.EditorBase));
exports.SampleSingleItemEditorComponent = SampleSingleItemEditorComponent;
//# sourceMappingURL=sample-single-item-editor.component.js.map