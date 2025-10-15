import ListLayoutLean from '@/layouts/ListLayoutLean'
import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export const metadata = genPageMetadata({ title: 'Blog' })

export default function Page() {
  const sorted = sortPosts(allBlogs)
  const posts = allCoreContent(sorted)
  return <ListLayoutLean posts={posts} title="Blog" />
}
