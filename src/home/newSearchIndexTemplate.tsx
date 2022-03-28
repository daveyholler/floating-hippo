import { useState } from 'react';
import {
  EuiButton,
  EuiComboBox,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { MethodCrawler } from './method_crawler';

export interface ISearchIndex {
  description: string;
  docsUrl: string;
  type: string;
  onNameChange?: any;
}

export interface ISearchEngineOption {
  label: string;
}

export const NewSearchIndexTemplate: React.FC<ISearchIndex> = ({ children, description, docsUrl, type, onNameChange }) => {
  const [selectedSearchEngines, setSelectedSearchEngines] = useState();
  const [name, setName] = useState('')

  const searchEnginesStatic = [
    { label: 'My First Search Engine' },
    { label: 'Another Search Engine' },
    { label: 'Dharma Initiative Research' },
    { label: 'Flight 815 Customer Feedback' },
    { label: 'The Swan Station Manuals' },
    { label: 'The Hydra Station Manuals' },
  ];

  const onChange = (selectedOptions: any) => {
    setSelectedSearchEngines(selectedOptions);
  }
  
  const handleNameChange = (event: any) => {
    setName(event.target.value);
    onNameChange && onNameChange(event.target.value)
  }

  return (
    <EuiFlexGroup direction="column">
      {/* <EuiFlexItem grow={false}>
        <EuiPanel color="primary" style={{ maxWidth: '25rem'}} >
          <EuiText size="s">
            <EuiTitle><h4>About the {type}</h4></EuiTitle>
            <p>{description}</p>
            <EuiButton iconSide="right" size="s" iconType="popout" href={docsUrl} target="_blank">Read the docs</EuiButton>
          </EuiText>
        </EuiPanel>
      </EuiFlexItem> */}
      <EuiFlexItem grow>
        <EuiFormRow label={`Name your ${type.toLowerCase()}`} fullWidth>
          <EuiFieldText
            placeholder={`Set a name for the ${type.toLowerCase()}`}
            fullWidth
            isInvalid={false}
            value={name}
            onChange={(event) => handleNameChange(event)}
          />
        </EuiFormRow>
        <EuiFormRow label="Attach search engines" fullWidth>
          <EuiComboBox
            fullWidth
            options={searchEnginesStatic}
            onChange={onChange}
            selectedOptions={selectedSearchEngines}/>
        </EuiFormRow>
        <EuiSpacer />
        {children}
      </EuiFlexItem>
    </EuiFlexGroup>
  )
}
