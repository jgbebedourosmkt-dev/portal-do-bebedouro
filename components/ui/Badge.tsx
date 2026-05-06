interface BadgeProps {
  label: string
  variant?: string
}

const variantClasses: Record<string, string> = {
  acc: 'bg-acc text-[#111]',
  vd: 'bg-vd2 text-white',
  az: 'bg-az text-white',
  az3: 'bg-az3 text-white',
  default: 'bg-txt3 text-white',
}

export default function Badge({ label, variant = 'default' }: BadgeProps) {
  const cls = variantClasses[variant] ?? variantClasses.default
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${cls}`}
      style={{ fontFamily: 'var(--font-barlow-condensed)' }}
    >
      {label}
    </span>
  )
}
