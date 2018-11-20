import * as React from 'react';
import './ConfigPlaceholder.css';
import * as strings from 'CursumWebpartReactWebPartStrings';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import { IConfigurePlaceholderProps } from './IConfigPlaceholderProps';
import { IConfigurePlaceholderState } from './IConfigPlaceholderState';

export class ConfigurePlaceholder extends React.Component<IConfigurePlaceholderProps, IConfigurePlaceholderState> {
    constructor (props: IConfigurePlaceholderProps) {
        super(props);
        this._configureWebPart = this._configureWebPart.bind(this);
        
      }


    public render(): React.ReactElement<IConfigurePlaceholderProps> {
        return (
            <Placeholder
                iconName='Edit'
                iconText={strings.configureTitle}
                description={strings.configureDesc}
                buttonLabel={strings.configureButton}
                onConfigure={ this._configureWebPart } />
        );
    }
    private _configureWebPart(): void {
        this.props.configureStartCallback();
    }
}
