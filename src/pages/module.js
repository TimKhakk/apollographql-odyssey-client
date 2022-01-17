import { gql, useQuery } from '@apollo/client'
import { Layout, ModuleDetail, QueryResult } from '../components'

export const GET_MODULE = gql`
  query getModule($moduleId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
      track {
        id
        title
        modules {
          id
          title
          length
        }
      }
    }
  }
`

export const Module = ({ moduleId }) => {
  const queryConfig = {
    variables: {
      moduleId,
    },
  }
  const { loading, error, data } = useQuery(GET_MODULE, queryConfig)

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail module={data?.module} track={data?.module.track} />
      </QueryResult>
    </Layout>
  )
}
