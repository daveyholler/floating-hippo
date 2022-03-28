import {
  EuiPanel,
  EuiTitle,
} from '@elastic/eui';

import { NewSearchIndexTemplate } from './newSearchIndexTemplate';

export const MethodCrawler: React.FC = () => {
  return (
    <NewSearchIndexTemplate
      description="The Elastic Web Crawler allows you to easily and automatically index content from public-facing websites and knowledge bases."
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