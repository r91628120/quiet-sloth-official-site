export function withBase(path = '') {
  const cleanPath = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${cleanPath}`
}

export function currentRoute() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const pathname = window.location.pathname
  const withoutBase = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname
  return withoutBase.replace(/index\.html$/, '').replace(/\/$/, '') || '/'
}
