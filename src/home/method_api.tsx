import { useState } from 'react';

import {
  EuiCode,
  EuiPanel,
  EuiSpacer,
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
      description="So you want to use the API do ya? That's cool. We've got details on how to do that here."
      docsUrl="https://google.com"
      type='API Endpoint'
      onNameChange={(value: string) => onNameChange(value)}
    >
      <EuiPanel hasBorder>
        <EuiTitle size="xs">
          <h3>Your endpoint is: </h3>
        </EuiTitle>
        <EuiSpacer size='m' />
        {endpoint ? (
          <EuiCode>https://my-es-url.aws.com/23782837/es/{endpoint}</EuiCode>
        ) : (
          <EuiCode>Set a name for your Search Index</EuiCode>
        )}
        <EuiSpacer size="l" />
        <p>The existing API instructions should render here.</p>
      </EuiPanel>
    </NewSearchIndexTemplate>
  )
}