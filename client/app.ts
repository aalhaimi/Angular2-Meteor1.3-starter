import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { MeteorComponent } from 'angular2-meteor';


@Component({
    selector: 'app',
    templateUrl: "client/app.html"
})

class MoshTut extends MeteorComponent{
    constructor() {
        super();
    }

    toggle = false;
    get style() {
        return this.toggle ? 'red' : 'black';
    }
    toggleStyle() {
        this.toggle = !this.toggle;
    }
}

bootstrap(MoshTut);