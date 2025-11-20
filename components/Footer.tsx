import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
      <div className="flex flex-col items-center py-4">
        <div className="mb-4 flex space-x-6">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
        </div>
        <div className="text-sm text-gray-500">© Copyright 2025 Dvir Segev • Dvir Segev</div>
      </div>
    </footer>
  )
}
