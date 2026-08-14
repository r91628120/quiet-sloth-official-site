import { HomePage } from './pages/HomePage'
import { GuidePage, HealthPage, NotFoundPage, PrivacyPage, SupportPage, TermsPage } from './pages/ContentPages'
import { TestPage } from './pages/TestPage'
import { currentRoute } from './utils'

const pages: Record<string, () => React.JSX.Element> = {
  '/': HomePage,
  '/support': SupportPage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
  '/health': HealthPage,
  '/guide': GuidePage,
  '/test': TestPage,
}

export default function App() {
  const Page = pages[currentRoute()] ?? NotFoundPage
  return <Page />
}
