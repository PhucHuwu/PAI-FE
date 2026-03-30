import DiaDiemPage from '@/features/dia-diem/pages/DiaDiemPage'

export default async function DiaDiemRoutePage({
  searchParams,
}: {
  searchParams: Promise<{ province?: string }>
}) {
  const params = await searchParams
  return <DiaDiemPage initialProvince={params.province ?? ''} />
}
