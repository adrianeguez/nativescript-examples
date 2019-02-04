import {AndroidActivityBundleEventData, AndroidActivityEventData} from "tns-core-modules/application";

export interface EventAndroid {
    eventName?: string,
    activity?: any,
    bundle?: any,
    requestCode?: number,
    resultCode?: number,
    intent?: number,
    args?: any | AndroidActivityBundleEventData | AndroidActivityEventData,
}