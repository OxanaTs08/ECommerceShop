import { makeAutoObservable } from "mobx";

export interface IUser {
    id: number;
    email: string;
    role: string;
}
export default class UserStore {
    private _isAuth: boolean;
    private _user?: IUser;
    
    constructor() {
        this._isAuth = false;
        this._user = {id: 0, email: '', role: ''};
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }
    get isAuth(){
        return this._isAuth
    }
    
    get User(){
        return this._user
    }
    
}
