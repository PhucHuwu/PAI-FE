import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getFileUrl(path: string | null | undefined): string {
  if (!path) return ''
  // MinIO returns full http:// URLs; also handles any other absolute URLs
  if (path.startsWith('http')) return path
  // Legacy fallback: /uploads/filename still served via backend (prefixed with / if missing)
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:3000'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${normalizedPath}`
}
