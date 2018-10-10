import { LmsApiService } from '../../services/api.sevice';

export interface ICourseProps {
    RatingCount: number;
    LikeCount: number;
    AvgRating: number;
    IsBookmarked: boolean;
    UsersStatus: number;
    UsersStatusLabel: string;
    UsersProgress: number;
    EnrollmentId: number;
    UsersStart: Date;
    UsersScore: number;
    UsersExpiry: Date;
    UsersAttemptLocatorId: string;
    ContainerItemId: number;
    ContainerId: number;
    Id: number;
    DomainId: number;
    CatalogItemTypeLabel: string;
    CatalogItemType: number;
    Title: string;
    SortIndex: number;
    EstimatedTime: string;
    BGColor: string;
    Description: string;
    BGId: number;
    LogoId: number;
    Kudos: number;
    LifespanDays: number;
    ItemType: number;
    ItemTypeLabel: string;
    UniqueItemId: string;
    Price: number;
    HasRestrictions: true;
    LogoUrl: string;
    BackgroundImageUrl: string;
    LaunchInfo: ILaunchInfo;
    dataProvider: LmsApiService;
}

export interface ILaunchInfo {
    ButtonLabel: string;
    CourseViewerUrl: string;
    LaunchUrl: string;
}