import { useState } from 'react';
import {
  EuiButton,
  EuiComboBox,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { MethodCrawler } from './method_crawler';

export interface ISearchIndex {
  description: any;
  docsUrl: string;
  type: string;
  onNameChange?: any;
}

export interface ISearchEngineOption {
  label: string;
}

export const NewSearchIndexTemplate: React.FC<ISearchIndex> = ({
  children,
  description,
  docsUrl,
  type,
  onNameChange
}) => {
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
    <>
      <EuiFlexGroup direction="column">
        <EuiFlexItem grow={false}>
          <EuiTitle size="s"><h2>New {type}</h2></EuiTitle>
          <EuiText size="s" color="subdued">
            <p>{description} <EuiLink target="_blank" href="#">Learn more</EuiLink></p>
          </EuiText>
        </EuiFlexItem>
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
          <EuiFormRow label="Attach search engines" fullWidth helpText="Select one or more existing search engines. You can also create one later">
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
      <EuiSpacer />
      <span>
        <EuiButton fill isDisabled={!name}>Create Search Index</EuiButton>
      </span>
    </>
  )
}
