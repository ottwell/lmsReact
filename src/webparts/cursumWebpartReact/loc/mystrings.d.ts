declare interface ICursumWebpartReactWebPartStrings {
  AzureAppIdLabel: string;
  ApiUrlLabel: string;
  ResultCountLabel: string;
  configureTitle: string; 
  configureDesc: string;
  configureButton: string;
  courseReadMoreLabel: string;
  SystemMessages: ICursumWebpartReactSystemMessages;
  
}

declare interface ICursumWebpartReactSystemMessages {
  invalidParam: string;
  unknownDataError: string;
}

declare module 'CursumWebpartReactWebPartStrings' {
  const strings: ICursumWebpartReactWebPartStrings;
  export = strings;
}
