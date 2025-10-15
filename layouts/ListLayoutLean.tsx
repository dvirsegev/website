import Link from '@/components/Link'
import type { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

interface ListLayoutLeanProps {
  posts: CoreContent<Blog>[]
  title: string
}

export default function ListLayoutLean({ posts, title }: ListLayoutLeanProps) {
  return (
    <div className="divide-y divide-gray-200">
      <ul>
        {posts.map((post) => {
          const { path, title, date } = post
          return (
            <li key={path} className="py-2">
              <div className="flex items-baseline gap-4">
                <h2 className="pr-4 text-lg font-medium tracking-tight">
                  <Link
                    href={`/${path}`}
                    className="text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                  >
                    {title}
                  </Link>
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(date, siteMetadata.locale)}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
