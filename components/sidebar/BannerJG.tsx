import Image from 'next/image'

export default function BannerJG() {
  return (
    <a href="#" className="block rounded overflow-hidden">
      <Image
        src="/images/banner-jg.png"
        alt="JG Bebedouros"
        width={268}
        height={380}
        style={{ width: '100%', height: 'auto' }}
        className="rounded"
      />
    </a>
  )
}
