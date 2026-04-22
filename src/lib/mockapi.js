const DEFAULT_BASE_URL = 'https://69e631d4ce4e908a155f2924.mockapi.io/fardheenportfolio'

export const MOCKAPI_BASE_URL = (import.meta.env.VITE_MOCKAPI_BASE_URL || DEFAULT_BASE_URL).replace(
  /\/+$/,
  '',
)

export async function createContact(contact) {
  const res = await fetch(`${MOCKAPI_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  })

  if (!res.ok) {
    let details = ''
    try {
      details = await res.text()
    } catch {
      // ignore
    }
    throw new Error(`MockAPI error (${res.status})${details ? `: ${details}` : ''}`)
  }

  return res.json()
}

