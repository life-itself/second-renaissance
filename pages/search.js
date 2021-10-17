import Search from "../components/Search.js"

export default function Page() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="mt-16 mb-8 text-4xl">Search</h1>
        <Search />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
    }
  };
}
