import BannerJG from './BannerJG'
import BannerOzean from './BannerOzean'
import BannerJGVerde from './BannerJGVerde'
import MaisLidas from './MaisLidas'
import NewsletterMini from './NewsletterMini'
import Categorias from './Categorias'
import type { Post } from '@/lib/posts'

interface SidebarProps {
  posts: Post[]
}

export default function Sidebar({ posts }: SidebarProps) {
  return (
    <aside className="hidden md:block w-[320px] flex-shrink-0 pl-6 pt-8 space-y-6">
      <BannerJG />
      <MaisLidas posts={posts} />
      <BannerOzean />
      <NewsletterMini />
      <Categorias />
      <BannerJGVerde />
    </aside>
  )
}
