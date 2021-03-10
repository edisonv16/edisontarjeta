import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'body-component',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

    btntele = false;

    constructor() {}

    ngOnInit(): void { }
}
