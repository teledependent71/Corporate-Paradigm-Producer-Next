import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Corporate Paradigm Producer</title>
          <meta
            property="og:title"
            content="test-page - Corporate Paradigm Producer"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_ogwxcg) => (
            <>
              <h1>{context_ogwxcg?.name}</h1>
            </>
          )}
          initialData={props.contextOgwxcgProp}
          persistDataDuringLoading={true}
          key={props?.contextOgwxcgProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextOgwxcgProp = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextOgwxcgProp: contextOgwxcgProp?.data?.[0],
    },
  }
}
