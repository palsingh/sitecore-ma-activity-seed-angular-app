import { Plugin } from '@sitecore/ma-core';
import { SampleSingleItemActivity } from './sampleactivity/sample-single.activity';
import { SampleSingleItemModuleNgFactory } from '../codegen/sampleactivity/sample-single-item.module.ngfactory';
import { SampleSingleItemEditorComponent } from '../codegen/sampleactivity/editor/sample-single-item-editor.component';

@Plugin({
    activityDefinitions: [
        {
            // The ID of the sitecore activity item that exists in the master database under sitecore/System/Settings/Analytics/Marketing Automation/Activity Types item
            id: '00bfe4ff-a0f8-4864-a34a-43f22ec1829e', // keep it lowercase
            activity: SampleSingleItemActivity,
            editorComponenet: SampleSingleItemEditorComponent,
            editorModuleFactory: SampleSingleItemModuleNgFactory
        }
    ]
})
export default class SamplePlugin {}