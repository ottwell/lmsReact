import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as strings from 'CursumWebpartReactWebPartStrings';
import { CursumWebpartReact } from './components/Main/CursumWebpartReact';
import { ICursumWebpartReactProps } from './components/Main/ICursumWebpartReactProps';
import { LmsApiService } from './services/api.sevice';
import { ValidationHelper } from './helpers/validation.helper';

export interface ICursumWebpartReactWebPartProps {
  azureAppId: string;
  apiUrl: string;
  resultCount: string;
  cssExternalUrl: string;
  authRedirectEndPoint: string;
}

export default class CursumWebpartReactWebPart extends BaseClientSideWebPart<ICursumWebpartReactWebPartProps> {
  private _dataProvider: LmsApiService;

  protected onInit(): Promise<void> {
    this._dataProvider = new LmsApiService();
    this._openPropertyPane = this._openPropertyPane.bind(this);
    SPComponentLoader.loadCss(this.properties.cssExternalUrl);
    return super.onInit();
  }



  public render(): void {
    const element: React.ReactElement<ICursumWebpartReactProps > = React.createElement(
      CursumWebpartReact,
      {
        context: this.context,
        apiUrl: this.properties.apiUrl,
        azureAppId: this.properties.azureAppId,
        resultCount: this.properties.resultCount,
        dataProvider: this._dataProvider,
        configureStartCallback: this._openPropertyPane,
        authRedirectEndPoint: this.properties.authRedirectEndPoint
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _openPropertyPane(): void {
    this.context.propertyPane.open();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'strings.PropertyPaneDescription'
          },
          groups: [
            {
              groupName: '',
              groupFields: [
                PropertyPaneTextField('azureAppId', {
                  label: strings.AzureAppIdLabel,
                  onGetErrorMessage: ValidationHelper.validateWRegExp.bind(this),
                  deferredValidationTime: 500
                }),
                PropertyPaneTextField('apiUrl', {
                  label: strings.ApiUrlLabel,
                  onGetErrorMessage: ValidationHelper.validateWRegExp.bind(this),
                  deferredValidationTime: 500
                }),
                PropertyPaneTextField('resultCount', {
                  label: strings.ResultCountLabel,
                  onGetErrorMessage: ValidationHelper.validateNumberRange.bind(this),
                  deferredValidationTime: 500
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
