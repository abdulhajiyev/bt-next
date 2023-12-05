export default function Page({ params }: { params: { slug: string } }) {
  return <div>Istanbul {params.slug}</div>
}