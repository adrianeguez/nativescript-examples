import {Injectable} from "@angular/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TranslationService{
    translateHttpLoader: TranslateHttpLoader;
    constructor(private readonly _http:HttpClient){
        // this.translator = new TranslateHttpLoader(this._http, 'assets/i18n','json');
    }
}