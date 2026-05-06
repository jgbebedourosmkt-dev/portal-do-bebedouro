import Image from 'next/image'

export default function BannerOzean() {
  return (
    <a href="#" className="block rounded overflow-hidden">
      <Image
        src="/images/banner-ozean.png"
        alt="Ozean Purificadores"
        width={268}
        height={380}
        style={{ width: '100%', height: 'auto' }}
        className="rounded"
      />
    </a>
  )
}
