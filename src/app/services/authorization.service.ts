import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {

    constructor() { }

    login(user) {
        localStorage.setItem('epm-mentoring-user', JSON.stringify(user));
    }
    logout() {
        localStorage.removeItem('epm-mentoring-user');
    }
    isAuthenticated(): boolean {
        return !!localStorage.getItem('epm-mentoring-user');
    }
    getUserInfo() {
        let user;
        try {
            user = JSON.parse(localStorage.getItem('epm-mentoring-user'));
        } 
        catch(e) {
            user = {
                login: null
            };
        }
        return user.login;
    }
}