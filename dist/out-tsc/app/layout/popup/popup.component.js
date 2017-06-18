var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, trigger, transition, style, animate } from '@angular/core';
var PopupComponent = (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.onClick = function (e) {
        this.show = false;
    };
    PopupComponent.prototype.ngOnInit = function () {
    };
    return PopupComponent;
}());
__decorate([
    Input('pop-open'),
    __metadata("design:type", Object)
], PopupComponent.prototype, "show", void 0);
PopupComponent = __decorate([
    Component({
        selector: 'popup',
        host: {
            "(click)": "onClick($event)",
            "[@background]": "show"
        },
        animations: [
            trigger('pop', [
                transition(':enter', [
                    style({ transform: 'translateY(-60%) translateX(-50%)', opacity: 0 }),
                    animate('200ms', style({ transform: 'translateY(-50%) translateX(-50%)', opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ transform: 'translateY(-50%) translateX(-50%)', opacity: 1 }),
                    animate('200ms', style({ transform: 'translateY(-40%) translateX(-50%)', opacity: 0 }))
                ])
            ]),
            trigger('background', [
                transition(':enter', [
                    style({ opacity: 0 }),
                    animate('230ms', style({ opacity: 1 }))
                ]),
                transition(':leave', [
                    style({ opacity: 1 }),
                    animate('230ms', style({ opacity: 0 }))
                ])
            ])
        ],
        templateUrl: './popup.component.html',
        styleUrls: ['./popup.component.sass']
    }),
    __metadata("design:paramtypes", [])
], PopupComponent);
export { PopupComponent };
//# sourceMappingURL=../../../../../src/app/layout/popup/popup.component.js.map