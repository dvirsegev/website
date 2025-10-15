import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 xl:max-w-6xl xl:px-16">{children}</section>
  )
}
