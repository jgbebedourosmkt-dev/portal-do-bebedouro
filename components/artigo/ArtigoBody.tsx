interface ArtigoBodyProps {
  content: string
}

export default function ArtigoBody({ content }: ArtigoBodyProps) {
  return (
    <div
      className="prose prose-lg max-w-none text-txt2 leading-relaxed
        prose-headings:font-black prose-headings:text-txt
        prose-h2:text-[31px] prose-h2:mt-8 prose-h2:mb-3
        prose-h3:text-[24px] prose-h3:mt-6 prose-h3:mb-2
        prose-p:mb-4 prose-p:text-[19px]
        prose-a:text-az2 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-txt prose-strong:font-bold
        prose-ul:pl-5 prose-ol:pl-5
        prose-li:mb-1
        prose-blockquote:border-l-4 prose-blockquote:border-acc prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-txt3"
      style={{ fontFamily: 'var(--font-barlow)' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
