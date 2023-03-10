import { ActionReducerMap } from "@ngrx/store";
import { AuthState } from "../models/auth";
import { authReducer } from "./reducer/login.reducers";
import { alertReducer } from "./reducer/alert.reducer";
import { AlertState } from "../models/types";
import { Spinner } from '../models/spinner';
import { spinnerReducer } from './reducer/spinner.reducer';

export interface AppState{
    auth:AuthState,
    alert: AlertState
    isLoading : Spinner
}

export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    auth:authReducer,
    alert: alertReducer,
    isLoading : spinnerReducer
}