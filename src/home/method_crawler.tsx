import {
  EuiPanel,
  EuiTitle,
} from '@elastic/eui';

import { NewSearchIndexTemplate } from './newSearchIndexTemplate';

export const MethodCrawler: React.FC = () => {
  return (
    <NewSearchIndexTemplate
      description="Looking to use the web crawler? Well that's great. You can get started right here by adding your domain and Enterprise Search will do the rest."
      docsUrl="https://google.com"
      type='Web Crawler'
    >
      <EuiPanel
        color='subdued'
        style={{ minHeight: '30rem', display: "flex", alignItems: "center", justifyContent: "center" }}>
          <EuiTitle size="s"><h4>Place the crawler domain validation here...</h4></EuiTitle> 
      </EuiPanel>
    </NewSearchIndexTemplate>
  ) 
}