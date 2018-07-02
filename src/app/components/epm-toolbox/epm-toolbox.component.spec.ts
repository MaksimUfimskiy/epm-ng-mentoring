import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmToolboxComponent } from './epm-toolbox.component';
import { FormsModule } from '@angular/forms';
import { MockSearchComponent } from '../../mocks/mock.components';

describe('EpmToolboxComponent', () => {
    let component: EpmToolboxComponent;
    let fixture: ComponentFixture<EpmToolboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EpmToolboxComponent,
                MockSearchComponent
            ],
            imports: [
                FormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EpmToolboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
