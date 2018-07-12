import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'epm-header',
    templateUrl: './epm-header.component.html',
    styleUrls: ['./epm-header.component.css'],
})
export class EpmHeaderComponent implements OnInit {

    public isUserLogged: boolean;
    public userLogin: any;
    @Output() userLogging = new EventEmitter<boolean>();
    @Input() loginPageVisible: boolean;

    constructor(private authService: AuthorizationService) { }

    ngOnInit() {
        this.isUserLogged = this.authService.isAuthenticated();
        if (this.isUserLogged) {
            this.userLogin = this.authService.getUserInfo();
        }
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.loginPageVisible && !changes.loginPageVisible.currentValue) {
            this.isUserLogged = this.authService.isAuthenticated();
            if (this.isUserLogged) {
                this.userLogin = this.authService.getUserInfo();
            }
        }
    }
    loginUser() {
        this.userLogging.emit(true);
        this.isUserLogged = this.authService.isAuthenticated();
    }
    logoffUser() {
        this.authService.logout();
        this.isUserLogged = this.authService.isAuthenticated();
    }

}
