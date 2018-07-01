import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmSearchComponent } from './epm-search.component';
import { FormsModule } from '@angular/forms';

describe('EpmSearchComponent', () => {
    let component: EpmSearchComponent;
    let fixture: ComponentFixture<EpmSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EpmSearchComponent
            ],
            imports: [
                FormsModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EpmSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
