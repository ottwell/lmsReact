import { WebPartContext } from '@microsoft/sp-webpart-base';
import { AadHttpClient, HttpClientResponse } from '@microsoft/sp-http';


export class LmsApiService {
    private lmsClient: AadHttpClient;
    private getLmsDataCache$: Promise<any[]>;
    private urlCache: string;
    private appIdCache: string;


    private getLmsClient(context: WebPartContext, appId: string): void {
        this.lmsClient = new AadHttpClient(context.serviceScope, appId);
        this.appIdCache = appId;
    }

    public getLmsData<T>(context: WebPartContext, url: string, appId: string): Promise<T[]> {
        if (this.getLmsDataCache$ == null || this.appIdCache !== appId || this.urlCache !== url) {
            if (!this.lmsClient) this.getLmsClient(context, appId);
            this.urlCache = url;
            this.getLmsDataCache$ = this.lmsClient.get(url, AadHttpClient.configurations.v1).then((res: HttpClientResponse) => {
                return res.json();
            }).then((dataArray: T[]) => {
                if (Array.isArray(dataArray)) {
                    return dataArray.map((item) => {
                        return item as T;
                    });
                }
                else {
                    return Promise.reject(dataArray);
                }
            }, (error) => {
                return Promise.reject(error);
            });
        }
        return this.getLmsDataCache$;
    }


    public getRedirectUrl(serviceUrl: string, targetUrl: string): Promise<string> {
        const url = serviceUrl + '?returnUrl=' + targetUrl;
        return this.lmsClient.get(url, AadHttpClient.configurations.v1).then((res: HttpClientResponse) => {
            return res.json();
        }).then((data: string) => {
            return data;
        });
    }
}