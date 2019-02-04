import {LaunchEventData} from "tns-core-modules/application";


export interface NativeApplicationEventEmitter {
    iOS: any,
    android: any,
    args: LaunchEventData,
    orientation?:string,
    error?:any
}