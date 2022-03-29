import { useState } from 'react';

import {
  EuiCode,
  EuiPanel,
  EuiSpacer,
  EuiTitle
} from '@elastic/eui';

import { NewSearchIndexTemplate } from './newSearchIndexTemplate';

export const MethodEs: React.FC = () => {
  const [endpoint, setEndpoint] = useState('');
  
  const onNameChange = (value: string) => {
    setEndpoint(value.split(' ').join('-').toLowerCase());
  }
  return (
    <NewSearchIndexTemplate
      description="Serve results from an existing Elasticsearch index alongside your other content. Use Enterprise Search features like curations and relevance tuning."
      docsUrl="https://google.com"
      type='Elasticsearch index'
      onNameChange={(value: string) => onNameChange(value)}
    >
      <EuiPanel
        color='subdued'
        style={{ minHeight: '30rem', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <EuiTitle size="s"><h4>Place the Elasticsearch index selectable list here...</h4></EuiTitle> 
      </EuiPanel>
    </NewSearchIndexTemplate>
  )
}