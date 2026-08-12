import { withBase } from '../utils'

type QuietSlothLogoProps = {
  placement: 'header' | 'footer'
}

export function QuietSlothLogo({ placement }: QuietSlothLogoProps) {
  return (
    <span className={`quiet-sloth-logo quiet-sloth-logo--${placement}`}>
      <img
        src={withBase('images/quiet-sloth-logo.webp')}
        width="512"
        height="512"
        alt="靜靜樹懶"
      />
    </span>
  )
}
