import {environment} from "~/environments/environment";

const separador = '----------------------';

export abstract class EventosDelegate extends UIResponder implements UIApplicationDelegate {

    public static ObjCProtocols = [UIApplicationDelegate];
    protected static _queue: Object = {};

    applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        if (!environment.production) {
            console.log(`${separador} applicationWillFinishLaunchingWithOptions ${separador}`);
        }
        return true;
    }

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
        if (!environment.production) {
            console.log(`${separador} applicationDidFinishLaunchingWithOptions ${separador}`);
        }
        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        if (!environment.production) {
            console.log(`${separador} applicationDidBecomeActive ${separador}`);
        }
    }

    applicationDidEnterBackground(application: UIApplication): void {
        if (!environment.production) {
            console.log(`${separador} applicationDidEnterBackground ${separador}`);
        }
    }

    applicationWillResignActive(application: UIApplication): void {
        if (!environment.production) {
            console.log(`${separador} applicationWillResignActive ${separador}`);
        }
    }

    applicationWillEnterForeground(application: UIApplication): void {
        if (!environment.production) {
            console.log(`${separador} applicationWillEnterForeground ${separador}`);
        }
    }

    applicationWillTerminate(application: UIApplication): void {
        if (!environment.production) {
            console.log(`${separador} applicationWillTerminate ${separador}`);
        }
    }

    protected static _promise(fn: string, args: any) {
        let constants = {
            // keep a copy of the call-time application state
            state: args.application.applicationState
        };

        let promise = Promise.resolve().then(() => {
            return {fn: fn, args: args, constants: constants};
        });

        let entry;

        if (!(entry = this._queue[fn])) {
            entry = {callbacks: [], promise: promise};
            this._queue[fn] = entry;
            return entry;
        }

        entry.promise = promise;

        if (entry.callbacks.length > 0) {
            entry.callbacks.forEach(function (callback) {
                entry.promise.then(callback);
            });
        }

        return entry;
    }

    public static apply(fn: string, callback: any) {
        let entry;

        if (!(entry = this._queue[fn])) {
            entry = this._queue[fn] = {callbacks: [], promise: false};
        }

        if (!entry.promise) {
            entry.callbacks.push(callback);
        } else {
            entry.promise.then(callback);
        }

        return entry;
    }

}