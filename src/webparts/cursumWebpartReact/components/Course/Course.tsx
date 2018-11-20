import * as React from 'react';
import * as strings from 'CursumWebpartReactWebPartStrings';
import './Course.css';
import { ICourseProps } from './ICourseProps';
import { ICourseState } from './ICourseState';

export class Course extends React.Component<ICourseProps, ICourseState> {
    constructor(props: ICourseProps) {
        super(props);
    }


    public render(): React.ReactElement<ICourseProps> {
        const course = this.props.courseConfig;
        let backgroundImageDetails = {
            backgroundImage: 'url(' + course.BackgroundImageUrl + ')'
        };
        let progressBarStyle = {
            width: (course.UsersStatus * 10) + '%'
        };
        return (
            <div className="course-catalog-container-item col-sm-6 col-lg-4 col-xl-4 NotAttempted CoursesWithoutSessions">
                <div className="course-catalog-container-item-content course-catalog-tile">
                    <div className="course-catalog-tile-thumbnail" style={backgroundImageDetails}>
                        <img className="course-icon" alt="" src={course.LogoUrl} />
                        <div title="Gennemført" className="statusicons NotAttempted-icon"><em className="fas fa-thumbs-up"></em></div>
                    </div>
                    <div className="course-catalog-tile-content">
                        <h4 title="Delve" className="mt-2">{course.Title}</h4>
                        <div className="course-catalog-tile-content-details">
                            <div className="progress course-progress">
                                <div className="progress-bar bg-progress-success course-NotAttempted" role="progressbar" style={progressBarStyle} aria-valuenow={course.UsersStatus} aria-valuemin="0" aria-valuemax="10">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                    <div className="course-catalog-container-item-button-group text-center">
                        <div className="course-catalog-container-item-button-group-inner btn-group">
                            <button className="course-catalog-container-item-button-launch btn btn-dark btn-start" onClick={this.redirect.bind(this, course.LaunchInfo ? course.LaunchInfo.LaunchUrl : "")}>{course.LaunchInfo ? course.LaunchInfo.ButtonLabel : "Launch"}</button>
                            <button className="course-catalog-container-item-button-readmore btn btn-light" onClick={this.redirect.bind(this, course.LaunchInfo ? course.LaunchInfo.CourseViewerUrl : "")}>{strings.courseReadMoreLabel}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    private redirect(targetUrl: string) {
        const url = new URL(this.props.apiUrl);
        this.props.dataProvider.getRedirectUrl(url.origin + this.props.authRedirectEndPoint, targetUrl).then((urlx: string) => {
            window.open(urlx, '_blank');
        });
      }
}