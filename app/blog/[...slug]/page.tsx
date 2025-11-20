import PostLayout from '@/layouts/PostLayout'
import { components } from '@/components/MDXComponents'
import { genPageMetadata } from 'app/seo'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export const metadata = genPageMetadata({ title: 'Post' })

export function generateStaticParams() {
  return allBlogs.map((p) => ({ slug: p.slug.split('/') }))
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugParam } = await params
  const slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam
  const post = allBlogs.find((p) => p.slug === slug) || null
  if (!post) return notFound()

  const sorted = sortPosts(allBlogs)
  const posts = allCoreContent(sorted)
  const postIndex = posts.findIndex((p) => p.slug === post.slug)
  const prev = posts[postIndex + 1] || null
  const next = posts[postIndex - 1] || null

  const authorList = post.authors || ['default']
  const authorDetails = authorList
    .map((author) => allAuthors.find((a) => a.slug === author))
    .filter(Boolean) as typeof allAuthors

  return (
    <PostLayout content={post} authorDetails={authorDetails} next={next} prev={prev}>
      <MDXLayoutRenderer code={post.body.code} components={components} />
    </PostLayout>
  )
}
