import {
  EuiPanel,
  EuiTitle
} from '@elastic/eui';

import { NewSearchIndexTemplate } from './newSearchIndexTemplate';

export const MethodConnector: React.FC = () => {
  return (
    <NewSearchIndexTemplate
      description="Ingest data from content sources like GitHub, Google Drive or SharePoint You can also build your own connectors using Custom API sources."
      docsUrl="https://google.com"
      type='Connector'
    >
      <EuiPanel
        color='subdued'
        style={{ minHeight: '30rem', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <EuiTitle size="s"><h4>Place the connector flow here...</h4></EuiTitle> 
      </EuiPanel>
    </NewSearchIndexTemplate>
  ) 
}