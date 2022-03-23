import { useState } from 'react';

import { EuiButton, EuiButtonGroup, EuiPageTemplate, EuiSpacer } from '@elastic/eui';

import { SideNav } from './sidenav';
import { MethodCrawler } from './method_crawler';
import { MethodApi} from './method_api';
import { MethodEs} from './method_es';

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState({ id: 'crawler', label: 'Web Crawler' });
  
  const saveButton = <EuiButton fill>Create search index</EuiButton>
  const searchIndexType = 'Web Crawler'
  
  const buttonGroupOptions = [
    { id: 'crawler', label: 'Web Crawler' },
    { id: 'api', label: 'API Endpoint' },
    { id: 'connector', label: 'Connector' },
    { id: 'elasticsearch', label: 'ES Index' },
  ];

  const handleMethodChange = (val: string) => {
    const selected: any = buttonGroupOptions.find((b) => b.id === val);
    setSelectedMethod(selected);
  }
  return (
    <EuiPageTemplate
      pageSideBar={<SideNav/>}
      pageHeader={{
        pageTitle: `New ${selectedMethod.label}`,
        rightSideItems: [saveButton]
      }}
      style={{minHeight: 'calc(100vh - 7rem)'}}
    >
      {/* FOR PROTOTYPE ONLY */}
      <EuiButtonGroup
        legend="Select an index method"
        options={buttonGroupOptions}
        idSelected={selectedMethod.id}
        onChange={(val) => handleMethodChange(val)}
      />
      <EuiSpacer size='l' />
      {/* END: FOR PROTOTYPE ONLY */}
      {selectedMethod.id === 'crawler' && <MethodCrawler />}
      {selectedMethod.id === 'api' && <MethodApi/>}
      {selectedMethod.id === 'elasticsearch' && <MethodEs/>}
    </EuiPageTemplate>
  );
};

