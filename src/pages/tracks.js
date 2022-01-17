// import React from 'react';
import { gql, useQuery } from '@apollo/client'
import TrackCard from '../containers/track-card'
import QueryResult from '../components/query-result'
import { Layout } from '../components'

const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      length
      modulesCount
      thumbnail
    }
  }
`

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { data, loading, error } = useQuery(TRACKS)

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map(track => (
          <TrackCard key={track.id} {...track} />
        ))}
      </QueryResult>
    </Layout>
  )
}

export default Tracks
