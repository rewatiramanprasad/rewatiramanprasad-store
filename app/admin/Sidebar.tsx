'use client'
import { adminLinks } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

function Sidebar() {
  const pathname = usePathname()
  return (
    <aside>
      {adminLinks.map((link) => {
        const variant = pathname === link.href ? 'default' : 'ghost'
        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal justify-start"
            variant={variant}
            key={link.label}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        )
      })}
    </aside>
  )
}

export default Sidebar
