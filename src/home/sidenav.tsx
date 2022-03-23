import { useState } from 'react';
import { EuiSideNav } from '@elastic/eui';

export const SideNav = () => {
  const [selectedItemName, setSelectedItemName] = useState('');
  const createItem = (name: string, id: string, data: any = {}) => {
    return {
      ...data,
      id: name,
      name,
      isSelected: selectedItemName === id,
      onClick: () => console.log(name),
    }
  }
  const sideNav = [
    createItem('Overview', 'entSearchOverview', { emphasize: true }),
    createItem('Content', 'entSearchContent', {
      items: [
        createItem('Search Indices', 'searchIndices', {
          items: [
            createItem('My Search Index', 'indexName', {
              emphasize: true,
              isOpen: true,
              items: [
                createItem('Overview', 'searchIndexOverview'),
                createItem('Documents', 'searchIndexDocuments'),
                createItem('Schema', 'searchIndexSchema'),
                createItem('Logs', 'searchIndexLogs')
              ]
            }),
          ],
          isOpen: true,
        }),
        createItem('Settings', 'contentSettings')
      ]
    }),
    createItem('App Search', 'appSearch'),
    createItem('Workplace Search', 'workplaceSearch')

  ]
  return (
    <div style={{ height: 'calc(100% - 96px)' }} className='enterpriseSearchNavigation'>
      <EuiSideNav
        items={sideNav}
        style={{overflow: 'hidden' }}
      />
    </div>
  )
}
