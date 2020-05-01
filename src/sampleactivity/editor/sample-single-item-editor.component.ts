import { Component, OnInit } from '@angular/core';
import { EditorBase } from '@sitecore/ma-core';

@Component({
    selector: 'sample-single-item-editor',
    template: `
        <section class="content">
            <div class="form-group">
                <div class="row sample-single-item-editor">
                    <label class="col-6 title">Count</label>
                    <div class="col-6">
                        <span class="minus-icon" (click)="decreaseValue()">-</span>
                        <input type="number" class="form-control" [(ngModel)]="count"/>
                        <span class="plus-icon" (click)="increaseValue()">+</span>
                    </div>
                </div>
            </div>
        </section>
    `,
    //CSS Styles are ommitted for brevity
    styles: [``]
})

export class SampleSingleItemEditorComponent extends EditorBase implements OnInit {

    /**
    * Count property is bound to the input element
    */
    count: number;

    /**
    * A component lifecycle hook. Called whenever the model property or any other property in the component changes
    */
    ngOnInit(): void {
        this.count = this.model ? this.model.count || 0 : 0;
    }

    /**
    * Increases the count by 1. Bound to the '+' button
    */
    increaseValue() {
        this.count++;
    }

    /**
    * Decreases the count by 1. Bound to the '-' button
    */
    decreaseValue() {
        this.count--;
    }

    /**
    * Called when the changes in the editor are applied.
    * @returns an object that contains the values of the parameters of the activity, where each property corresponds to a parameter key.
    */
    serialize(): any {
        return {
            count: this.count
        };
    }
}