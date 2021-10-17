import Topic from '../../components/Topic'
import topics from '../../data/topic';

export default function Page({topic}) {
  return (
    <Topic topic={topic} />
  )
}

export const getStaticProps = async ({ params }) => {
  const topicSlug = params['slug'][0]
  const topic = topics.filter(topic => topic.id == topicSlug)[0]
  return {
    props: {
      topic: topic
    }
  }
}

export const getStaticPaths = async () => {
  var paths = topics.map((topic) => topic.id)

  // Map the path into the static paths object required by Next.js
  paths = paths.map((slug) => {
    // /demo => [demo]
    const parts = slug.split('/')
    return { params: { slug: parts } }
  })

  return {
    paths,
    fallback: false,
  }
}
