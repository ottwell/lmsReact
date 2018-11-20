import * as React from 'react';
import styles from './CursumWebpartReact.module.scss';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { ICursumWebpartReactProps } from './ICursumWebpartReactProps';
import { ICursumWebpartReactState } from './ICursumWebpartReactState';
import { ConfigurePlaceholder } from '../ConfigPlaceholder/ConfigPlaceholder';
import { ErrorPlaceholder } from '../ErrorPlaceholder/ErrorPlaceholder';
import { Course } from '../Course/Course';
import { ICourseConfig } from '../../Models/ICourseConfig.model';




export class CursumWebpartReact extends React.Component<ICursumWebpartReactProps, ICursumWebpartReactState> {


  constructor(props: ICursumWebpartReactProps) {
    super(props);
    this.state = {
      apiData: null,
      error: false,
      errorData: undefined,
      loadingData: false
    };

  }

  public componentWillReceiveProps(nextProps: ICursumWebpartReactProps) {
    if (nextProps.azureAppId && nextProps.apiUrl) {
      if (nextProps.apiUrl !== this.props.apiUrl || nextProps.azureAppId !== this.props.azureAppId) {
        this.setState({
          apiData: null,
          loadingData: true
        });
        this._loadAsyncData(nextProps.apiUrl, nextProps.azureAppId);
      }
    }
  }

  public render(): React.ReactElement<ICursumWebpartReactProps> {
    return (
      <div>
        <Spinner size={SpinnerSize.medium} hidden={!this.state.loadingData} />
        {
          (!this.props.apiUrl || !this.props.azureAppId) &&
          <ConfigurePlaceholder/>
        }
        {
          this.state.error && !this.state.loadingData &&
          <ErrorPlaceholder errorData={this.state.errorData} />
        }
        {
          this.state.apiData &&
          <div className="container">
            <div className="course-catalog-container-items-inner course-catalog-container-list-inner row">
              {
                this.state.apiData.slice(0, parseInt(this.props.resultCount)).map((courseData: ICourseConfig) => {
                  return <Course authRedirectEndPoint={this.props.authRedirectEndPoint} apiUrl={this.props.apiUrl} courseConfig={courseData} dataProvider={this.props.dataProvider} />;
                })
              }
            </div>
          </div>
        }
      </div>
    );
  }



  public componentDidMount() {
    if (!this.state.apiData && this.props.apiUrl && this.props.apiUrl) {
      this.setState({ loadingData: true });
      this._loadAsyncData(this.props.apiUrl, this.props.azureAppId);
    }
  }



  private _loadAsyncData(url: string, appId: string): void {
    this.props.dataProvider.getLmsData<ICourseConfig>(this.props.context, url, appId).then((data: ICourseConfig[]) => {
      this.setState({
        apiData: data,
        error: false,
        loadingData: false
      });
    }, ((error: any) => {
      this.setState({
        error: true,
        errorData: error,
        loadingData: false
      });
    }));
  }

}
