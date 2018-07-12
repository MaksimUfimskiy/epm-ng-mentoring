import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
    selector: 'epm-login',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginComponent implements OnInit {

    public userName: string = '';
    public password: string = '';
    @Output() userLogging = new EventEmitter<boolean>();

    constructor(private authService: AuthorizationService) { }

    ngOnInit() { }

    loginUser() {
        this.authService.login({
            login: this.userName,
            password: this.password
        });
        this.userLogging.emit(false);
    }
}
