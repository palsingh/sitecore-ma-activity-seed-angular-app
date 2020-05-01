"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ma_core_1 = require("@sitecore/ma-core");
var sample_single_activity_1 = require("./sampleactivity/sample-single.activity");
var sample_single_item_module_ngfactory_1 = require("../codegen/sampleactivity/sample-single-item.module.ngfactory");
var sample_single_item_editor_component_1 = require("../codegen/sampleactivity/editor/sample-single-item-editor.component");
var SamplePlugin = (function () {
    function SamplePlugin() {
    }
    SamplePlugin = __decorate([
        ma_core_1.Plugin({
            activityDefinitions: [
                {
                    id: '00bfe4ff-a0f8-4864-a34a-43f22ec1829e',
                    activity: sample_single_activity_1.SampleSingleItemActivity,
                    editorComponenet: sample_single_item_editor_component_1.SampleSingleItemEditorComponent,
                    editorModuleFactory: sample_single_item_module_ngfactory_1.SampleSingleItemModuleNgFactory
                }
            ]
        })
    ], SamplePlugin);
    return SamplePlugin;
}());
exports.default = SamplePlugin;
//# sourceMappingURL=sample.plugin.js.map