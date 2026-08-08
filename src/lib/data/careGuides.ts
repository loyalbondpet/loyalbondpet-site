export interface CareGuidePage {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: { title: string; description: string }[];
  recommendedProducts: { slug: string; name: string; reason: string }[];
  relatedBlogLinks: { title: string; href: string }[];
}

export const careGuidePages: CareGuidePage[] = [
  {
    slug: 'arthritis',
    title: 'Comfort Support for Dogs with Mobility Challenges',
    subtitle: 'Supporting Comfort for Dogs with Joint Challenges',
    description: 'Many senior dogs experience reduced mobility and joint stiffness as they age. Larger breeds may face additional challenges with movement and comfort. The right daily support routine — supportive bedding, safe floor traction, and gentle exercise — can help maintain their comfort and quality of life.',
    challenges: [
      { title: 'Difficulty Standing Up', description: 'Dogs with limited mobility often struggle to rise from resting positions, especially in the morning or after long naps. Providing supportive bedding with pressure-distributing foam can reduce stiffness.' },
      { title: 'Reluctance on Slippery Floors', description: 'Smooth surfaces like hardwood and tile become hazardous for dogs with reduced stability. Non-slip solutions help maintain confidence on these surfaces.' },
      { title: 'Hesitation with Stairs and Heights', description: 'Jumping onto furniture or navigating stairs can be challenging for dogs with limited mobility. Supportive aids help them access favorite spots safely.' },
      { title: 'Decreased Activity Levels', description: 'Dogs with mobility challenges may reduce activity, which can further affect their movement. Gentle, supported walks help maintain comfort and confidence.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: '4-inch memory foam distributes body weight evenly, reducing pressure points during rest.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Provides gentle lift support for rear-end assistance during walks, supporting comfortable movement.' },
      { slug: 'silicone-paw-protector-boots', name: 'Silicone Paw Protector Boots', reason: 'Adds traction to paws, providing stable footing on smooth floors.' },
    ],
    relatedBlogLinks: [
      { title: 'How to Choose the Right Orthopedic Bed for Your Dog', href: '/blog/how-to-choose-the-right-orthopedic-bed-for-your-dog' },
      { title: 'Silicone Paw Covers vs Traditional Dog Boots: What Works Better at Home', href: '/blog/silicone-paw-covers-vs-traditional-boots' },
    ],
  },
  {
    slug: 'post-acl-surgery',
    title: 'Mobility Recovery Support for Dogs',
    subtitle: 'Helping Your Dog Move with Confidence and Comfort',
    description: 'Dogs recovering from leg injuries or mobility setbacks need careful movement management and extra support. The recovery period requires patience and the right products to keep your dog comfortable while gradually rebuilding confidence in movement.',
    challenges: [
      { title: 'Restricted Movement', description: 'Dogs in recovery need limited, controlled movement. A support harness allows you to assist with bathroom breaks and short walks without putting strain on the affected leg.' },
      { title: 'Comfortable Rest Positioning', description: 'Finding a comfortable resting position is crucial during recovery. Orthopedic beds with even weight distribution help maintain rest quality.' },
      { title: 'Floor Traction During Recovery', description: 'Even brief slips can set back progress. Non-slip paw pads provide essential traction during the critical recovery phase.' },
      { title: 'Weight Management During Confinement', description: 'Reduced activity during recovery can lead to weight gain. Controlled feeding with slow feeders supports appropriate caloric intake.' },
    ],
    recommendedProducts: [
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Essential for assisting bathroom breaks and controlled walks without straining the recovering leg.' },
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Provides comfortable, pressure-free resting surface during extended confinement periods.' },
      { slug: 'silicone-paw-protector-boots', name: 'Silicone Paw Protector Boots', reason: 'Critical for preventing slips that could set back progress during early recovery.' },
    ],
    relatedBlogLinks: [
      { title: 'How to Choose the Right Lifting Harness for Your Senior Dog', href: '/blog/how-to-choose-lifting-harness-senior-dog' },
      { title: '5 Mobility Aids Every Senior Dog Owner Should Know', href: '/blog/5-mobility-aids-senior-dog-owner-guide' },
    ],
  },
  {
    slug: 'senior-10plus',
    title: 'Care Guide for Senior Dogs 10+ Years',
    subtitle: 'Adapting Your Home and Routine for Your Aging Companion',
    description: 'Dogs over 10 years old enter their golden years with unique needs. Cognitive changes, sensory decline, reduced mobility, and shifting sleep patterns all require adjustments to their environment and daily routine. Proactive adaptations can significantly maintain their comfort and your bond.',
    challenges: [
      { title: 'Changed Sleep Patterns', description: 'Senior dogs often sleep more but rest less deeply. An orthopedic bed with bolsters creates a secure, comfortable sleeping environment that supports deeper rest.' },
      { title: 'Sensory Decline', description: 'Hearing and vision loss can make dogs anxious. Consistent floor traction and familiar, non-slip pathways help them navigate their environment with confidence.' },
      { title: 'Reduced Mobility', description: 'Muscle loss and joint stiffness make everyday movements challenging. Support harnesses and low-entry furniture access help maintain mobility and independence.' },
      { title: 'Changes in Eating Habits', description: 'Senior dogs may eat less or have difficulty with standard bowls. A non-slip mat under the bowl and slightly raised feeding spot can support a comfortable eating posture and encourage regular nutrition.' },
      { title: 'Temperature Sensitivity', description: 'Older dogs regulate body temperature less effectively. Cool, well-ventilated resting spots in summer and warm bedding in winter maintain comfort year-round.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Bolster provides security and neck support; low entry accommodates limited mobility.' },
      { slug: 'snuffle-mat-set', name: 'Snuffle Mat Set', reason: 'Engages natural foraging instincts for mental stimulation without physical strain on joints.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Allows independent access to furniture and vehicles without jumping.' },
    ],
    relatedBlogLinks: [
      { title: '10 Signs Your Senior Dog Needs Extra Support', href: '/blog/10-signs-your-senior-dog-needs-extra-support' },
      { title: 'Snuffle Mats for Senior Dogs: Mental Exercise Without Physical Strain', href: '/blog/snuffle-mats-senior-dogs-mental-exercise' },
    ],
  },
  {
    slug: 'cognitive-dysfunction',
    title: 'Care Guide for Dogs with Age-Related Cognitive Changes',
    subtitle: 'Creating a Comfortable Environment for Dogs with Cognitive Changes',
    description: 'Many senior dogs experience cognitive changes as they age — disorientation, altered sleep patterns, and increased anxiety are common. Environmental modifications and consistent routines can help reduce confusion and support your dog\'s comfort and well-being.',
    challenges: [
      { title: 'Disorientation and Confusion', description: 'Dogs experiencing cognitive changes may appear lost in familiar spaces. Consistent non-slip pathways and clear, safe boundaries reduce the risk of falls and panic.' },
      { title: 'Sleep-Wake Cycle Disruption', description: 'Nighttime restlessness and daytime sleeping are common. A dedicated, comfortable bed in a consistent location helps anchor their sleep environment.' },
      { title: 'Anxiety and Pacing', description: 'Increased anxiety manifests as pacing, whining, or clinging. A bolster bed with raised edges provides a secure, enclosed feeling that may reduce anxious behaviors.' },
      { title: 'Changes in Interaction', description: 'Some dogs withdraw while others become more clingy. Maintaining gentle grooming routines supports bonding and provides reassuring sensory input.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Enclosed bolster design provides a secure, nest-like environment that promotes a sense of safety.' },
      { slug: 'drying-towel', name: 'Pet Drying Towel', reason: 'Gentle grooming supports bonding and provides calming tactile stimulation.' },
      { slug: 'silicone-paw-protector-boots', name: 'Silicone Paw Protector Boots', reason: 'Consistent traction helps disoriented dogs navigate with more confidence.' },
    ],
    relatedBlogLinks: [
      { title: 'Why Senior Dogs Need Low-Entry Orthopedic Beds', href: '/blog/why-senior-dogs-need-low-entry-orthopedic-beds' },
      { title: 'Post-Bath Care for Senior Dogs: Quick-Dry Towel Guide', href: '/blog/post-bath-care-senior-dogs-quick-dry-towel-guide' },
    ],
  },
  {
    slug: 'short-leg-breeds',
    title: 'Care Guide for Short-Leg Breeds (Corgi, Dachshund)',
    subtitle: 'Supporting Comfort and Mobility in Long-Backed Dogs',
    description: 'Short-legged breeds like Corgis, Dachshunds, and Basset Hounds face unique challenges as they age. Their elongated spine and short legs put extra stress on the back and joints. Proactive daily support — safe flooring, weight management, and mobility aids — is essential for their comfort.',
    challenges: [
      { title: 'Spinal Stress from Jumping', description: 'Jumping on and off furniture is one of the highest-risk activities for long-backed breeds. Furniture stairs and gradual-access solutions help reduce strain on their back significantly.' },
      { title: 'Difficulty on Slippery Surfaces', description: 'Short legs provide less stability on smooth floors. Paw grips and non-slip solutions are essential for preventing dangerous slips.' },
      { title: 'Weight Management', description: 'Extra weight puts disproportionate stress on their spine. Slow feeders and controlled portioning help maintain healthy weight.' },
      { title: 'Rear Leg Weakness', description: 'Many short-leg breeds develop rear leg weakness with age. A support harness assists with walking and prevents dragging injuries.' },
    ],
    recommendedProducts: [
      { slug: 'hind-leg-support-harness', name: 'Senior Dog Hind Leg Support Harness', reason: 'Provides targeted rear-end support for breeds prone to back challenges, supporting comfortable daily movement.' },
      { slug: 'silicone-paw-protector-boots', name: 'Silicone Paw Protector Boots', reason: 'Essential traction for short-legged dogs on hardwood and tile floors.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Provides rear-end lift assistance for breeds prone to hind leg weakness.' },
    ],
    relatedBlogLinks: [
      { title: 'Building a Complete Home Safety Setup for Aging Dogs', href: '/blog/building-complete-home-safety-setup-aging-dogs' },
      { title: '5 Mobility Aids Every Senior Dog Owner Should Know', href: '/blog/5-mobility-aids-senior-dog-owner-guide' },
    ],
  },
  {
    slug: 'brachycephalic-breeds',
    title: 'Care Guide for Brachycephalic Breeds (French Bulldog, Bulldog)',
    subtitle: 'Supporting Daily Comfort for Flat-Faced Dogs',
    description: 'Brachycephalic breeds including French Bulldogs, Bulldogs, Pugs, and Boston Terriers have unique facial structures that affect their breathing and temperature regulation. As these dogs age, weight management and reduced exercise tolerance require thoughtful product choices to support daily comfort.',
    challenges: [
      { title: 'Heat Intolerance', description: 'Flat-faced dogs are more heat-sensitive due to their facial structure. Providing cool, comfortable resting surfaces helps them regulate temperature, especially in warm months.' },
      { title: 'Exercise Limitations', description: 'Reduced exercise capacity can lead to weight gain. Enrichment tools like snuffle mats encourage slower eating while keeping meals engaging and comfortable.' },
      { title: 'Skin Fold Maintenance', description: 'Facial and body skin folds require regular cleaning. Gentle grooming tools make this routine more comfortable for both dog and owner.' },
      { title: 'Sleep Disruption from Breathing', description: 'Many brachycephalic dogs experience disrupted sleep. A supportive bed with bolster allows them to find a comfortable position that optimizes airway position.' },
    ],
    recommendedProducts: [
      { slug: 'drying-towel', name: 'Pet Drying Towel', reason: 'Essential for regular skin fold cleaning and gentle coat maintenance for brachycephalic breeds prone to skin fold infections.' },
      { slug: 'snuffle-mat-set', name: 'Snuffle Mat Set', reason: 'Encourages slow, mindful eating through natural sniffing and foraging behavior.' },
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Bolster design allows brachycephalic dogs to find comfortable sleeping positions that support restful sleep.' },
    ],
    relatedBlogLinks: [
      { title: 'Post-Bath Care for Senior Dogs: Quick-Dry Towel Guide', href: '/blog/post-bath-care-senior-dogs-quick-dry-towel-guide' },
      { title: 'Why Senior Dogs Need Low-Entry Orthopedic Beds', href: '/blog/why-senior-dogs-need-low-entry-orthopedic-beds' },
    ],
  },
  {
    slug: 'pregnant-postpartum',
    title: 'Care Guide for Pregnant & Postpartum Dogs',
    subtitle: 'Supporting Mothers Through Pregnancy and Recovery',
    description: 'Pregnancy and nursing place extraordinary physical demands on dogs. From the physical stress of carrying puppies to the demands of nursing and recovery, mother dogs need extra comfort and support. The right products can reduce physical strain during this demanding period.',
    challenges: [
      { title: 'Increasing Weight and Mobility Challenges', description: 'As pregnancy progresses, extra weight makes movement more difficult. A support harness assists with walking and stair navigation in late pregnancy.' },
      { title: 'Comfortable Nursing Environment', description: 'Nursing mothers spend extended periods lying down. An orthopedic bed with bolsters provides a comfortable, secure nursing area with easy cleanup.' },
      { title: 'Joint Stress from Extra Weight', description: 'The extra weight of pregnancy adds physical demands. Non-slip solutions prevent dangerous falls that could harm both mother and puppies.' },
      { title: 'Post-Partum Recovery', description: 'After delivery, mothers need rest and nutrition support. Consistent, gentle enrichment activities like snuffle mats provide mental stimulation during the demanding nursing period.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Creates a comfortable, enclosed nursing area with machine-washable covers for easy cleanup.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Assists mobility in late pregnancy and during post-partum recovery walks.' },
      { slug: 'snuffle-mat-set', name: 'Snuffle Mat Set', reason: 'Provides gentle mental enrichment and slows eating pace during pregnancy and nursing.' },
    ],
    relatedBlogLinks: [
      { title: 'Why Senior Dogs Need Low-Entry Orthopedic Beds', href: '/blog/why-senior-dogs-need-low-entry-orthopedic-beds' },
      { title: '5 Mobility Aids Every Senior Dog Owner Should Know', href: '/blog/5-mobility-aids-senior-dog-owner-guide' },
    ],
  },
  {
    slug: 'weight-management',
    title: 'Care Guide for Weight Management',
    subtitle: 'Helping Your Dog Maintain a Healthy Weight',
    description: 'A significant number of companion dogs carry extra weight, which can affect their mobility and overall comfort. A comprehensive weight management approach includes controlled feeding, appropriate exercise, and supportive products to maintain daily comfort.',
    challenges: [
      { title: 'Controlled Feeding', description: 'Overfeeding is the primary cause of canine obesity. Slow feeders extend meal time, promoting satiety signals and preventing rapid consumption.' },
      { title: 'Reduced Exercise Capacity', description: 'Overweight dogs often struggle with exercise. A support harness enables gentle, assisted walks that gradually build fitness without overloading joints.' },
      { title: 'Joint Pressure from Extra Weight', description: 'Extra weight adds pressure during rest. Orthopedic beds with pressure-distributing foam help reduce pressure points and support comfortable sleep.' },
      { title: 'Floor Safety for Heavier Dogs', description: 'Heavier dogs are more prone to slipping on smooth surfaces. Non-slip paw pads provide essential traction to prevent falls.' },
    ],
    recommendedProducts: [
      { slug: 'snuffle-mat-set', name: 'Snuffle Mat Set', reason: 'Built-in maze pattern slows eating by up to 10x, supporting portion control and satiety.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Enables assisted, low-impact walks that support comfortable daily exercise as part of a healthy weight management routine.' },
      { slug: 'orthopedic-bolster-dog-bed', name: 'Orthopedic Bolster Dog Bed', reason: 'Distributes the weight of heavier dogs evenly, reducing pressure points during rest.' },
    ],
    relatedBlogLinks: [
      { title: 'Snuffle Mats for Senior Dogs: Mental Exercise Without Physical Strain', href: '/blog/snuffle-mats-senior-dogs-mental-exercise' },
      { title: 'How to Choose the Right Lifting Harness for Your Senior Dog', href: '/blog/how-to-choose-lifting-harness-senior-dog' },
    ],
  },
];

export function getCareGuideBySlug(slug: string): CareGuidePage | undefined {
  return careGuidePages.find(p => p.slug === slug);
}

export function getAllCareGuideSlugs(): string[] {
  return careGuidePages.map(p => p.slug);
}


