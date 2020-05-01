import { SingleItem } from '@sitecore/ma-core';

export class SampleSingleItemActivity extends SingleItem {

    getVisual(): string {
        const subTitle = this.isDefined ? 'Count: ' + this.editorParams.count : '';
        const cssClass = this.isDefined ? '' : 'undefined';

        //CSS class can either be marketing-action or other-element
        return `
            <div class="marketing-action ${cssClass}">
                <span class="icon">
                    <img src="/~/icon/OfficeWhite/32x32/gearwheels.png" />
                </span>
                <p class="text with-subtitle" title="Sample single item">
                    Sample single item
                    <small class="subtitle" title="${subTitle}">${subTitle}</small>
                </p>
            </div>
        `;
    }

    get isDefined(): boolean {
        /*
        The editorParams propery value is the object that is serialized from the activity editor.
        If the activity is undefined the editorParams propery will evaluate to {}
        */
        return Boolean(this.editorParams.count);
    }
}
