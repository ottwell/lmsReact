import { ICourseProps } from '../../components/Course/ICourseProps';

export interface ICursumWebpartReactState {
    apiData: Array<ICourseProps>;
    error: boolean;
    errorData: any;
    loadingData: boolean;
}