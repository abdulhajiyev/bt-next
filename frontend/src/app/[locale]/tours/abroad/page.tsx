export default function Page({ params }: { params: { slug: string } }) {
  return <div>Tours abroad {params.slug}</div>
}