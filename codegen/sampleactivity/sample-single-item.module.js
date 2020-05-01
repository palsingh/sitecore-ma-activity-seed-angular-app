"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var sample_single_item_editor_component_1 = require("./editor/sample-single-item-editor.component");
var SampleSingleItemModule = (function () {
    function SampleSingleItemModule() {
    }
    SampleSingleItemModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        forms_1.FormsModule
                    ],
                    declarations: [sample_single_item_editor_component_1.SampleSingleItemEditorComponent],
                    entryComponents: [sample_single_item_editor_component_1.SampleSingleItemEditorComponent]
                },] },
    ];
    return SampleSingleItemModule;
}());
exports.SampleSingleItemModule = SampleSingleItemModule;
//# sourceMappingURL=sample-single-item.module.js.map