export default function Page({ params }: { params: { slug: string } }) {
  return <div>Domestic tours {params.slug}</div>
}