import { withBase } from '../utils'
import { useLanguage } from '../i18n/useLanguage'

type QuietSlothLogoProps = {
  placement: 'header' | 'footer'
}

export function QuietSlothLogo({ placement }: QuietSlothLogoProps) {
  const { t } = useLanguage()
  return (
    <span className={`quiet-sloth-logo quiet-sloth-logo--${placement}`}>
      <img
        src={withBase('images/quiet-sloth-avatar.png')}
        width="512"
        height="512"
        alt={t('brand.name')}
      />
    </span>
  )
}
