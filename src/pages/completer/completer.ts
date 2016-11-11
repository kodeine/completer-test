import { Component } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
    selector: 'my-component',
    template: `<h1>Search color</h1>
            <ng2-completer [(ngModel)]="searchStr" [dataService]="dataService" [minSearchLength]="0"></ng2-completer>`
})
export class MyComponent {

    public searchStr: string;
    public dataService: CompleterData;
    public searchData = [
        { color: 'red', value: '#f00' },
        { color: 'green', value: '#0f0' },
        { color: 'blue', value: '#00f' },
        { color: 'cyan', value: '#0ff' },
        { color: 'magenta', value: '#f0f' },
        { color: 'yellow', value: '#ff0' },
        { color: 'black', value: '#000' }
    ];

    constructor(private completerService: CompleterService) {
        this.dataService = completerService.local(this.searchData, 'color', 'color');
    }
}