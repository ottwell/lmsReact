import { LmsApiService } from '../../services/api.sevice';
import { ICourseConfig } from '../../Models/ICourseConfig.model';

export interface ICourseProps {
    courseConfig: ICourseConfig;
    dataProvider: LmsApiService;
    authRedirectEndPoint: string;
    apiUrl: string;
}