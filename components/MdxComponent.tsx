import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Mermaid, Pre } from "@portaljs/core";
import { useEffect, useState } from "react";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
    mermaid: Mermaid,
    pre: Pre,
    table: (props) => (
        <div className="overflow-x-auto">
            <table {...props} />
        </div>
    ),
};

export default function MdxComponent({ children }) {
    const [mdxSource, setMdxSource] = useState(null);

    useEffect(() => {
        console.log(children);
        async function loadMdx() {
            const mdx = await serialize(children, {
                mdxOptions: {
                    development: process.env.NODE_ENV === 'development',
                }
            })
            setMdxSource(mdx);
        }
        loadMdx();
    }, [children])

    return (
        <div className="prose max-w-none mx-auto">
            {mdxSource && <MDXRemote {...mdxSource} components={components} />}
        </div>
    );
}
