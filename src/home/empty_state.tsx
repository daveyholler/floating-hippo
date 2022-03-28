import { EuiEmptyPrompt, EuiLink, EuiTitle } from '@elastic/eui';

export const SearchIndexEmptyState: React.FC = () => {
  return (
    <>
      <EuiEmptyPrompt
        title={<h3>Add content to Enterprise Search</h3>}
        body={
          <p>Data you add in Enterprise Search is called a Search Index and it’s searchable in both App and Workplace Search. Now you can use your connectors in App Search and your web crawlers in Workplace Search.</p>
        }
        footer={
          <>
            <EuiTitle size="xxs">
              <h4>Want to learn more about Search Indices?</h4>
            </EuiTitle>
            <EuiLink href="#" target="_blank">Read the docs</EuiLink>
          </>
        }
      />
    </>
  )
}