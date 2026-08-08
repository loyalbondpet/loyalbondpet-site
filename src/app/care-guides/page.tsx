import Link from 'next/link'

const careGuides = [
  { slug: 'arthritis', title: 'Arthritis' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
  { slug: 'lift-assist-harness', title: 'Lift Assist Harness' },
  { slug: 'silicone-paw-protector-boots', title: 'Silicone Paw Protector Boots' },
  { slug: 'post-acl-surgery', title: 'Post Acl Surgery' },
  { slug: 'lift-assist-harness', title: 'Lift Assist Harness' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
  { slug: 'silicone-paw-protector-boots', title: 'Silicone Paw Protector Boots' },
  { slug: 'senior-10plus', title: 'Senior 10Plus' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
  { slug: 'snuffle-mat-set', title: 'Snuffle Mat Set' },
  { slug: 'lift-assist-harness', title: 'Lift Assist Harness' },
  { slug: 'cognitive-dysfunction', title: 'Cognitive Dysfunction' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
  { slug: 'drying-towel', title: 'Drying Towel' },
  { slug: 'silicone-paw-protector-boots', title: 'Silicone Paw Protector Boots' },
  { slug: 'short-leg-breeds', title: 'Short Leg Breeds' },
  { slug: 'hind-leg-support-harness', title: 'Hind Leg Support Harness' },
  { slug: 'silicone-paw-protector-boots', title: 'Silicone Paw Protector Boots' },
  { slug: 'lift-assist-harness', title: 'Lift Assist Harness' },
  { slug: 'brachycephalic-breeds', title: 'Brachycephalic Breeds' },
  { slug: 'drying-towel', title: 'Drying Towel' },
  { slug: 'snuffle-mat-set', title: 'Snuffle Mat Set' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
  { slug: 'pregnant-postpartum', title: 'Pregnant Postpartum' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
  { slug: 'lift-assist-harness', title: 'Lift Assist Harness' },
  { slug: 'snuffle-mat-set', title: 'Snuffle Mat Set' },
  { slug: 'weight-management', title: 'Weight Management' },
  { slug: 'snuffle-mat-set', title: 'Snuffle Mat Set' },
  { slug: 'lift-assist-harness', title: 'Lift Assist Harness' },
  { slug: 'orthopedic-bolster-dog-bed', title: 'Orthopedic Bolster Dog Bed' },
]

export default function CareGuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Care Guides</h1>
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
