import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmToolboxComponent } from './epm-toolbox.component';
import { EpmSearchComponent } from '../epm-search/epm-search.component';
import { FormsModule } from '@angular/forms';

describe('EpmToolboxComponent', () => {
    let component: EpmToolboxComponent;
    let fixture: ComponentFixture<EpmToolboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EpmToolboxComponent,
                EpmSearchComponent
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
