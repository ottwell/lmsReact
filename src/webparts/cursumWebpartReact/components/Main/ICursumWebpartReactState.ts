import { ICourseConfig } from '../../Models/ICourseConfig.model';

export interface ICursumWebpartReactState {
    apiData: Array<ICourseConfig>;
    error: boolean;
    errorData: any;
    loadingData: boolean;
}