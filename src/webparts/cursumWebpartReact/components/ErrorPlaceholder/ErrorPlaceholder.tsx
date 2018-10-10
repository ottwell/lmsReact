import * as React from 'react';
import './ErrorPlaceholder.css';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { IErrorPlaceholderProps } from './IErrorPlaceholderProps';
import { IErrorPlaceholderState } from './IErrorPlaceholderState';

export class ErrorPlaceholder extends React.Component<IErrorPlaceholderProps, IErrorPlaceholderState> {
    constructor(props: IErrorPlaceholderProps) {
        super(props);
    }


    public render(): React.ReactElement<IErrorPlaceholderProps> {
        let errorMessage = this.props.errorData.message ? this.props.errorData.message : undefined;
        if (!errorMessage) errorMessage = this.props.errorData.Message;
        if (!errorMessage) errorMessage = 'Unknown Error';
        return (
            <MessageBar
                messageBarType={MessageBarType.blocked}
                isMultiline={false}
                dismissButtonAriaLabel="Close">
                {errorMessage}
            </MessageBar>
        );
    }
}
