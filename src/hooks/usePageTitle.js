import { useEffect } from 'react'

const BASE = 'CHAUFFEURS 1ST ASSIST LTD'

// Gives every route its own browser-tab title (and search-result title).
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Chauffeur Services London`
  }, [title])
}
