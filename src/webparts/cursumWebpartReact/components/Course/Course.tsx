import * as React from 'react';
import './Course.css';
import { ICourseProps } from './ICourseProps';
import { ICourseState } from './ICourseState';

export class Course extends React.Component<ICourseProps, ICourseState> {
    constructor(props: ICourseProps) {
        super(props);
    }


    public render(): React.ReactElement<ICourseProps> {
        let backgroundImageDetails = {
            backgroundImage: 'url(' + this.props.BackgroundImageUrl + ')'
        };
        let progressBarStyle = {
            width: (this.props.UsersStatus * 10) + '%'
        };
        return (
            <div className="course-catalog-container-item col-sm-6 col-lg-4 col-xl-4 NotAttempted CoursesWithoutSessions">
                <div className="course-catalog-container-item-content course-catalog-tile">
                    <div className="course-catalog-tile-thumbnail" style={backgroundImageDetails}>
                        <img className="course-icon" alt="" src={this.props.LogoUrl} />
                        <div title="Gennemført" className="statusicons NotAttempted-icon"><em className="fas fa-thumbs-up"></em></div>
                    </div>
                    <div className="course-catalog-tile-content">
                        <h4 title="Delve" className="mt-2">{this.props.Title}</h4>
                        <div className="course-catalog-tile-content-details">
                            <div className="progress course-progress">
                                <div className="progress-bar bg-progress-success course-NotAttempted" role="progressbar" style={progressBarStyle} aria-valuenow={this.props.UsersStatus} aria-valuemin="0" aria-valuemax="10">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    <div className="course-catalog-container-item-button-group text-center">
                        <div className="course-catalog-container-item-button-group-inner btn-group">
                            <button className="course-catalog-container-item-button-launch btn btn-dark btn-start" onClick={this.redirect.bind(this, this.props.LaunchInfo.LaunchUrl)}>{this.props.LaunchInfo.ButtonLabel}</button>
                            <button className="course-catalog-container-item-button-readmore btn btn-light" onClick={this.redirect.bind(this, this.props.LaunchInfo.CourseViewerUrl)}>Læs mere</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    private redirect(targetUrl: string) {
        this.props.dataProvider.getRedirectUrl('https://rc.cursum.net/api/v1/userauthentication/authredirecturl', targetUrl).then((url: string) => {
            window.open(url, '_blank');
        });
      }
}