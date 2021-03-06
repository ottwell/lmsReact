import { WebPartContext } from '@microsoft/sp-webpart-base';
import { LmsApiService } from '../../services/api.sevice';

export interface ICursumWebpartReactProps {
  context: WebPartContext;
  azureAppId: string;
  apiUrl: string;
  authRedirectEndPoint: string;
  resultCount: string;
  dataProvider: LmsApiService;
}
