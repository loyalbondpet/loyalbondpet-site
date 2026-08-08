import Link from 'next/link'

const careGuides = [
  { slug: 'arthritis', title: 'Arthritis & Hip Dysplasia' },
  { slug: 'post-acl-surgery', title: 'Post-ACL Surgery Recovery' },
  { slug: 'senior-10plus', title: 'Senior Dogs 10+ Years' },
  { slug: 'cognitive-dysfunction', title: 'Cognitive Dysfunction' },
  { slug: 'short-leg-breeds', title: 'Short-Leg Breeds (Corgi, Dachshund)' },
  { slug: 'brachycephalic-breeds', title: 'Brachycephalic Breeds (Frenchie, Bulldog)' },
  { slug: 'pregnant-postpartum', title: 'Pregnant & Postpartum Dogs' },
  { slug: 'weight-management', title: 'Weight Management' },
]

export default function CareGuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Care Guides</h1>
      <p className="text-gray-600 mb-8">Expert guidance for your senior dog's comfort and quality of life.</p>
      <div className="grid gap-4">
        {careGuides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/care-guide/${guide.slug}`}
            className="block p-6 border rounded-lg hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{guide.title}</h2>
            <p className="text-gray-600">Read our comprehensive care guide for {guide.title.toLowerCase()}.</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
