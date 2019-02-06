import {ios} from "tns-core-modules/application";

export const escucharEventosIos = (production) => {
    if (ios && !production) {
        const separador = '----------------------';
        class EventosDelegate extends UIResponder implements UIApplicationDelegate {

            public static ObjCProtocols = [UIApplicationDelegate];



            applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
                console.log(`${separador} applicationWillFinishLaunchingWithOptions ${separador}`);

                return true;
            }

            applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
                console.log(`${separador} applicationDidFinishLaunchingWithOptions ${separador}`);

                return true;
            }

            applicationDidBecomeActive(application: UIApplication): void {
                console.log(`${separador} applicationDidBecomeActive ${separador}`);
            }

            applicationDidEnterBackground(application: UIApplication): void {
                console.log(`${separador} applicationDidEnterBackground ${separador}`);
            }

            applicationWillResignActive(application: UIApplication): void {
                console.log(`${separador} applicationWillResignActive ${separador}`);
            }

            applicationWillEnterForeground(application: UIApplication): void {
                console.log(`${separador} applicationWillEnterForeground ${separador}`);
            }

            applicationWillTerminate(application: UIApplication): void {
                console.log(`${separador} applicationWillTerminate ${separador}`);
            }

        }

        ios.delegate = EventosDelegate;
    }
};

