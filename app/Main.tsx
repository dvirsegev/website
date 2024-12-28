'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Main() {
  const router = useRouter()

  useEffect(() => {
    // Client-side redirect to '/about'
    router.push('/about')
  }, [router])

  return null
}
