import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmHeaderComponent } from './epm-header.component';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MockLogoComponent } from '../../mocks/mock.components';

describe('EpmHeaderComponent', () => {
    let component: EpmHeaderComponent;
    let fixture: ComponentFixture<EpmHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EpmHeaderComponent,
                MockLogoComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EpmHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
