import { useState } from 'react';

import {
  EuiButton,
  EuiButtonGroup,
  EuiCheckableCard,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiPageTemplate,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { SearchIndexEmptyState } from './empty_state';
import { SideNav } from './sidenav';
import { MethodCrawler } from './method_crawler';
import { MethodApi} from './method_api';
import { MethodEs} from './method_es';
import { MethodConnector } from './method_connector';

interface CardLabelProps {
  title: string;
  description: any;
}

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState({ id: '', label: 'Web Crawler' });
  const [methodIsSelected, setMethodIsSelected] = useState(false);
  
  const buttonGroupOptions = [
    { id: 'crawler', label: 'Web Crawler', description: "Automatically index content from your website or knowlege base" },
    { id: 'api', label: 'API Endpoint', description:  <EuiText size="s">Use a variety of client libraries to <EuiCode>POST</EuiCode> documents to your Search Index</EuiText>},
    { id: 'connector', label: 'Connector (WIP)', description: "Ingest data from content sources like GitHub, Google Drive or SharePoint" },
    { id: 'elasticsearch', label: 'ES Index', description: "Connect to an existing Elasticsearch index" },
    { id: 'json', label: 'Paste or upload JSON (WIP)', description: "Manually upload JSON files" },
  ];

  const handleMethodChange = (val: string) => {
    const selected: any = buttonGroupOptions.find((b) => b.id === val);
    setSelectedMethod(selected);
    setMethodIsSelected(true);
  }
  const NewSearchIndexLayout = () => (
    <>
      {selectedMethod.id === 'crawler' && <MethodCrawler />}
      {selectedMethod.id === 'api' && <MethodApi/>}
      {selectedMethod.id === 'elasticsearch' && <MethodEs/>}
      {selectedMethod.id === 'connector' && <MethodConnector/>}
    </> 
  );
  
  const CardLabel: React.FC<CardLabelProps> = ({ title, description }) => (
    <span style={{ minWidth: "13rem", width: 'calc(100% - .5rem)', display: "inline-block" }}>
      <EuiTitle size="xxs"><h4>{title}</h4></EuiTitle>
      <EuiText size="s"><p>{description}</p></EuiText>
    </span>
  )
  
  const SelectSearchIndexLayout = () => (
    <>
      <EuiFlexGroup>
        <EuiFlexItem grow={false} style={{ maxWidth: "22rem" }}>
          <EuiPanel color="subdued" grow={false} >
            <EuiTitle size="xs"><h4>Create a Search Index</h4></EuiTitle>
            <EuiSpacer size="xs" />
            <EuiText size="s">
              <p>Add your content to Enterprise Search by creating a Search Index. <EuiLink href="#" target="_blank">Learn more about Search Indices</EuiLink></p>  
            </EuiText>
            <EuiSpacer />
            <EuiFlexGroup direction="column" gutterSize="s" alignItems="flexStart">
              {buttonGroupOptions.map(item => (
                <EuiFlexItem style={{ width: 'calc(100% - .5rem)' }}>
                  <EuiCheckableCard
                    id={`method_${item.id}`}
                    label={ <CardLabel title={item.label} description={item.description} /> }
                    value={item.id}
                    name="method_options"
                    onChange={() => handleMethodChange(item.id)}
                    checked={selectedMethod.id === item.id}
                  />
                </EuiFlexItem>
              ))}
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
        <EuiFlexItem>
          {methodIsSelected ? <NewSearchIndexLayout /> : <SearchIndexEmptyState />}
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
  
  return (
    <EuiPageTemplate
      pageSideBar={<SideNav/>}
      pageHeader={{
        pageTitle: 'New Search Index'
      }}
      style={{minHeight: 'calc(100vh - 7rem)'}}
    >
      <SelectSearchIndexLayout />
    </EuiPageTemplate>
  );
};

