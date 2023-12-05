export default function Page({ params }: { params: { slug: string } }) {
  return <div>All tours {params.slug}</div>
}