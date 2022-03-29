import { useState } from 'react';

import {
  EuiCode,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle
} from '@elastic/eui';

import { NewSearchIndexTemplate } from './newSearchIndexTemplate';

export const MethodApi: React.FC = () => {
  const [endpoint, setEndpoint] = useState('');
  
  const onNameChange = (value: string) => {
    setEndpoint(value.split(' ').join('-').toLowerCase());
  }
  return (
    <NewSearchIndexTemplate
      description={<EuiText size="s">The <EuiLink href="#" target="_blank">documents API</EuiLink> can be used to add new documents to your engine, update documents, retrieve documents by id, and delete documents. There are a variety of <EuiLink href="#" target="_blank">client libraries</EuiLink> to help you get started.</EuiText>}
      docsUrl="https://google.com"
      type='API Endpoint'
      onNameChange={(value: string) => onNameChange(value)}
    >
      <EuiPanel hasBorder>
        <EuiTitle size="xs">
          <h3>Enter a name to preview your new API endpoint</h3>
        </EuiTitle>
        {endpoint && (
          <>
            <EuiSpacer size='m' />
            <EuiCode>https://my-es-url.aws.com/23782837/es/{endpoint}</EuiCode>
          </>
        )}
        <EuiSpacer size="l" />
        <p>The existing API instructions should render here.</p>
      </EuiPanel>
    </NewSearchIndexTemplate>
  )
}