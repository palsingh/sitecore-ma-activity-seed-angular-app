import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SampleSingleItemEditorComponent } from './editor/sample-single-item-editor.component';

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [SampleSingleItemEditorComponent],
    entryComponents: [SampleSingleItemEditorComponent]
})
export class SampleSingleItemModule { }