import { HomePage } from './pages/HomePage'
import { GuidePage, HealthPage, NotFoundPage, PrivacyPage, SupportPage, TermsPage } from './pages/ContentPages'
import { currentRoute } from './utils'

const pages: Record<string, () => React.JSX.Element> = {
  '/': HomePage,
  '/support': SupportPage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
  '/health': HealthPage,
  '/guide': GuidePage,
}

export default function App() {
  const Page = pages[currentRoute()] ?? NotFoundPage
  return <Page />
}
