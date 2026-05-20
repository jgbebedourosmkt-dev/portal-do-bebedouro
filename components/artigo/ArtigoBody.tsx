interface ArtigoBodyProps {
  content: string
}

export default function ArtigoBody({ content }: ArtigoBodyProps) {
  return (
    <div
      className="prose prose-lg max-w-none text-txt2 leading-relaxed
        prose-headings:font-black prose-headings:text-txt
        prose-h2:text-[31px] prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-[24px] prose-h3:mt-7 prose-h3:mb-3
        prose-p:mb-5 prose-p:text-[19px] prose-p:leading-relaxed
        prose-a:text-az2 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-txt prose-strong:font-bold
        prose-ul:my-4 prose-ul:pl-6 prose-ul:list-disc
        prose-ol:my-4 prose-ol:pl-6 prose-ol:list-decimal
        prose-li:mb-2 prose-li:text-[19px]
        prose-blockquote:border-l-4 prose-blockquote:border-acc prose-blockquote:pl-5 prose-blockquote:py-1 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-txt3 prose-blockquote:bg-bg prose-blockquote:rounded-r-md prose-blockquote:not-italic
        prose-table:w-full prose-table:my-6 prose-table:border-collapse prose-table:text-[17px]
        prose-thead:bg-az prose-thead:text-white
        prose-th:border prose-th:border-borda prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold
        prose-td:border prose-td:border-borda prose-td:px-4 prose-td:py-3
        prose-tr:even:bg-bg"
      style={{ fontFamily: 'var(--font-barlow)' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
