import { gql, useQuery } from '@apollo/client'
import { Layout, QueryResult } from '../components'
import TrackDetail from '../components/track-detail'

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      modules {
        id
        title
        length
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
    }
  }
`

export const Track = ({ trackId }) => {
  const queryConfig = {
    variables: {
      trackId,
    },
  }
  const { loading, error, data } = useQuery(GET_TRACK, queryConfig)

  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  )
}
