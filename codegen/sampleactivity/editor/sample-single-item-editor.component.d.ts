import { OnInit } from '@angular/core';
import { EditorBase } from '@sitecore/ma-core';
export declare class SampleSingleItemEditorComponent extends EditorBase implements OnInit {
    count: number;
    ngOnInit(): void;
    increaseValue(): void;
    decreaseValue(): void;
    serialize(): any;
}
