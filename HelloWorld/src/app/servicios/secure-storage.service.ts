import {Injectable} from "@angular/core";
import {SecureStorage} from "nativescript-secure-storage";
import {from} from "rxjs";

declare const kSecAttrAccessibleWhenUnlockedThisDeviceOnly;

@Injectable()
export class SecureStorageService {
    private storage = new SecureStorage(kSecAttrAccessibleWhenUnlockedThisDeviceOnly);

    set(key, value) {
        return from(this.storage.set({
            key,
            value: JSON.stringify({data: value})
        }));
    }
}