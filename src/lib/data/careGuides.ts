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
    title: 'Care Guide for Dogs with Arthritis & Hip Dysplasia',
    subtitle: 'Supporting Comfort for Dogs with Joint Challenges',
    description: 'Arthritis affects approximately 1 in 4 dogs during their lifetime, with prevalence increasing significantly in senior dogs. Hip dysplasia, a genetic condition common in larger breeds, often leads to arthritis as dogs age. While these conditions change how your dog moves, the right daily support routine can help maintain their comfort and quality of life.',
    challenges: [
      { title: 'Difficulty Standing Up', description: 'Dogs with arthritis often struggle to rise from resting positions, especially in the morning or after long naps. Providing supportive bedding with pressure-distributing foam can reduce stiffness.' },
      { title: 'Reluctance on Slippery Floors', description: 'Smooth surfaces like hardwood and tile become hazardous for dogs with reduced joint stability. Non-slip solutions help maintain confidence on these surfaces.' },
      { title: 'Hesitation with Stairs and Heights', description: 'Jumping onto furniture or navigating stairs puts excessive stress on compromised joints. Ramps and assistive devices allow safe access to favorite spots.' },
      { title: 'Decreased Activity Levels', description: 'Dogs with joint discomfort may reduce activity, leading to muscle loss that further destabilizes joints. Gentle, supported walks help maintain mobility.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bed', name: 'Orthopedic Dog Bed', reason: '4-inch memory foam distributes body weight evenly, reducing pressure on hips and joints during rest.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Provides gentle lift support for rear-end assistance during walks, reducing joint strain.' },
      { slug: 'paw-covers', name: 'Anti-Slip Paw Covers', reason: 'Adds traction to paws, reducing the compensatory joint stress from slipping on smooth floors.' },
    ],
    relatedBlogLinks: [
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
      { title: 'Arthritis Care Guide', href: '/care-guides/arthritis' },
    ],
  },
  {
    slug: 'post-acl-surgery',
    title: 'Post-ACL Surgery Recovery Support',
    subtitle: 'Helping Your Dog Recover with Confidence and Comfort',
    description: 'ACL (cranial cruciate ligament) surgery is one of the most common orthopedic procedures in dogs. The recovery period typically lasts 8-12 weeks and requires careful movement management. The right support products can help your dog stay comfortable while protecting the surgical site during healing.',
    challenges: [
      { title: 'Restricted Movement', description: 'Post-surgery dogs need limited, controlled movement. A support harness allows you to assist with bathroom breaks and short walks without putting stress on the surgical leg.' },
      { title: 'Comfortable Rest Positioning', description: 'Finding a comfortable position while protecting the surgery site is crucial. Orthopedic beds with even weight distribution help maintain rest quality.' },
      { title: 'Floor Traction During Recovery', description: 'Even brief slips can compromise surgical results. Non-slip paw pads provide essential traction during the critical healing phase.' },
      { title: 'Weight Management During Confinement', description: 'Reduced activity during recovery can lead to weight gain that stresses the healing joint. Controlled feeding with slow feeders supports appropriate caloric intake.' },
    ],
    recommendedProducts: [
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Essential for assisting bathroom breaks and controlled walks without loading the surgical leg.' },
      { slug: 'orthopedic-bed', name: 'Orthopedic Dog Bed', reason: 'Provides comfortable, pressure-free resting surface during extended confinement periods.' },
      { slug: 'paw-covers', name: 'Anti-Slip Paw Covers', reason: 'Critical for preventing slips that could compromise surgical repair during early recovery.' },
    ],
    relatedBlogLinks: [
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
      { title: 'Post-ACL Surgery Care Guide', href: '/care-guides/post-acl-surgery' },
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
      { title: 'Reduced Mobility', description: 'Muscle loss and joint stiffness make everyday movements challenging. Support harnesses and ramps assist with mobility while maintaining independence.' },
      { title: 'Changes in Eating Habits', description: 'Senior dogs may eat less or have difficulty with standard bowls. Elevated feeders support comfortable eating posture and encourage regular nutrition.' },
      { title: 'Temperature Sensitivity', description: 'Older dogs regulate body temperature less effectively. Cooling mats in summer and warm bedding in winter maintain comfort year-round.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bed', name: 'Orthopedic Dog Bed', reason: 'Bolster provides security and neck support; low entry accommodates limited mobility.' },
      { slug: 'snuffle-mat', name: 'Snuffle Mat Set', reason: 'Raised height supports comfortable eating posture for stiff senior dogs.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Allows independent access to furniture and vehicles without jumping.' },
    ],
    relatedBlogLinks: [
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
      { title: 'Feeding Aids Collection', href: '/collections/feeding-aids' },
    ],
  },
  {
    slug: 'cognitive-dysfunction',
    title: 'Care Guide for Dogs with Cognitive Dysfunction',
    subtitle: 'Supporting Dogs Through Cognitive Changes',
    description: 'Canine Cognitive Dysfunction (CCD), similar to dementia in humans, affects an estimated 28% of dogs aged 11-12 and 68% of dogs aged 15-16. While there is no cure, environmental modifications and consistent routines can help reduce confusion and anxiety, supporting your dog\'s comfort and well-being.',
    challenges: [
      { title: 'Disorientation and Confusion', description: 'Dogs with CCD may appear lost in familiar spaces. Consistent non-slip pathways and clear, safe boundaries reduce the risk of falls and panic.' },
      { title: 'Sleep-Wake Cycle Disruption', description: 'Nighttime restlessness and daytime sleeping are common. A dedicated, comfortable bed in a consistent location helps anchor their sleep environment.' },
      { title: 'Anxiety and Pacing', description: 'Increased anxiety manifests as pacing, whining, or clinging. A bolster bed with raised edges provides a secure, enclosed feeling that may reduce anxious behaviors.' },
      { title: 'Changes in Interaction', description: 'Some dogs withdraw while others become more needy. Maintaining gentle grooming routines supports bonding and provides calming sensory input.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bed', name: 'Orthopedic Dog Bed', reason: 'Enclosed bolster design provides a secure, nest-like environment that may reduce anxiety.' },
      { slug: 'drying-towel', name: 'Pet Drying Towel', reason: 'Gentle grooming supports bonding and provides calming tactile stimulation.' },
      { slug: 'paw-covers', name: 'Anti-Slip Paw Covers', reason: 'Consistent traction helps disoriented dogs navigate with more confidence.' },
    ],
    relatedBlogLinks: [
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
      { title: 'Grooming & Bath Collection', href: '/collections/grooming-bath' },
    ],
  },
  {
    slug: 'short-leg-breeds',
    title: 'Care Guide for Short-Leg Breeds (Corgi, Dachshund)',
    subtitle: 'Protecting the Spine and Supporting Mobility in Long-Backed Dogs',
    description: 'Short-legged breeds like Corgis, Dachshunds, and Basset Hounds face unique challenges as they age. Their elongated spine and short legs put extra stress on the back and joints. IVDD (Intervertebral Disc Disease) is particularly prevalent in these breeds, making proactive support essential.',
    challenges: [
      { title: 'Spinal Stress from Jumping', description: 'Jumping on and off furniture is one of the highest-risk activities for long-backed breeds. Ramps eliminate this risk entirely.' },
      { title: 'Difficulty on Slippery Surfaces', description: 'Short legs provide less stability on smooth floors. Paw grips and non-slip solutions are essential for preventing dangerous slips.' },
      { title: 'Weight Management', description: 'Extra weight puts disproportionate stress on their spine. Slow feeders and controlled portioning help maintain healthy weight.' },
      { title: 'Rear Leg Weakness', description: 'Many short-leg breeds develop rear leg weakness with age. A support harness assists with walking and prevents dragging injuries.' },
    ],
    recommendedProducts: [
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Critical for preventing jumps that could cause spinal disc herniation.' },
      { slug: 'paw-covers', name: 'Anti-Slip Paw Covers', reason: 'Essential traction for short-legged dogs on hardwood and tile floors.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Provides rear-end lift assistance for breeds prone to hind leg weakness.' },
    ],
    relatedBlogLinks: [
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
      { title: 'Feeding Aids Collection', href: '/collections/feeding-aids' },
    ],
  },
  {
    slug: 'brachycephalic-breeds',
    title: 'Care Guide for Brachycephalic Breeds (French Bulldog, Bulldog)',
    subtitle: 'Managing Heat, Breathing, and Comfort for Flat-Faced Dogs',
    description: 'Brachycephalic breeds including French Bulldogs, Bulldogs, Pugs, and Boston Terriers have shortened airways that create lifelong breathing challenges. As these dogs age, weight gain and reduced exercise tolerance compound their respiratory difficulties. Thoughtful product choices can support their daily comfort.',
    challenges: [
      { title: 'Heat Intolerance', description: 'Flat-faced dogs cannot pant efficiently, making them extremely heat-sensitive. Cooling mats provide essential temperature regulation, especially in warm months.' },
      { title: 'Exercise Limitations', description: 'Reduced exercise capacity can lead to weight gain. Elevated feeding solutions encourage slower eating while minimizing respiratory strain during meals.' },
      { title: 'Skin Fold Maintenance', description: 'Facial and body skin folds require regular cleaning. Gentle grooming tools make this routine more comfortable for both dog and owner.' },
      { title: 'Sleep Disruption from Breathing', description: 'Many brachycephalic dogs experience disrupted sleep. A supportive bed with bolster allows them to find a comfortable position that optimizes airway position.' },
    ],
    recommendedProducts: [
      { slug: 'snuffle-mat', name: 'Snuffle Mat Set', reason: 'Essential temperature regulation for breeds that cannot cool themselves effectively through panting.' },
      { slug: 'snuffle-mat', name: 'Snuffle Mat Set', reason: 'Raised position reduces neck strain and supports easier breathing during meals.' },
      { slug: 'drying-towel', name: 'Pet Drying Towel', reason: 'Gentle tool for maintaining coat health and checking skin folds without causing stress.' },
    ],
    relatedBlogLinks: [
      { title: 'Seasonal Collection', href: '/collections/seasonal' },
      { title: 'Grooming & Bath Collection', href: '/collections/grooming-bath' },
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
      { title: 'Joint Stress from Extra Weight', description: 'The weight of pregnancy stresses joints, especially hips and knees. Non-slip solutions prevent dangerous falls that could harm both mother and puppies.' },
      { title: 'Post-Partum Recovery', description: 'After delivery, mothers need rest and nutrition support. Elevated feeding stations reduce neck and back strain during the demanding nursing period.' },
    ],
    recommendedProducts: [
      { slug: 'orthopedic-bed', name: 'Orthopedic Dog Bed', reason: 'Creates a comfortable, enclosed nursing area with machine-washable covers for easy cleanup.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Assists mobility in late pregnancy and during post-partum recovery walks.' },
      { slug: 'snuffle-mat', name: 'Snuffle Mat Set', reason: 'Supports comfortable eating posture during pregnancy and nursing when neck strain is a concern.' },
    ],
    relatedBlogLinks: [
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
      { title: 'Feeding Aids Collection', href: '/collections/feeding-aids' },
    ],
  },
  {
    slug: 'weight-management',
    title: 'Care Guide for Weight Management',
    subtitle: 'Helping Your Dog Maintain a Healthy Weight',
    description: 'Over 50% of dogs in developed countries are overweight or obese. Excess weight is particularly dangerous for senior dogs, accelerating joint deterioration, reducing mobility, and increasing the risk of chronic conditions. A comprehensive weight management approach includes diet control, appropriate exercise, and supportive products.',
    challenges: [
      { title: 'Controlled Feeding', description: 'Overfeeding is the primary cause of canine obesity. Slow feeders extend meal time, promoting satiety signals and preventing rapid consumption.' },
      { title: 'Reduced Exercise Capacity', description: 'Overweight dogs often struggle with exercise. A support harness enables gentle, assisted walks that gradually build fitness without overloading joints.' },
      { title: 'Joint Pressure from Extra Weight', description: 'Every extra pound puts 4x the stress on joints. Orthopedic beds with pressure-distributing foam reduce the impact of excess weight during rest.' },
      { title: 'Floor Safety for Heavier Dogs', description: 'Heavier dogs are more prone to slipping, which can cause serious injuries. Non-slip paw pads provide essential traction to prevent falls.' },
    ],
    recommendedProducts: [
      { slug: 'snuffle-mat', name: 'Snuffle Mat Set', reason: 'Built-in maze pattern slows eating by up to 10x, supporting portion control and satiety.' },
      { slug: 'lift-assist-harness', name: 'Dog Lift-Assist Harness', reason: 'Enables assisted, low-impact walks that support gradual weight loss without joint strain.' },
      { slug: 'orthopedic-bed', name: 'Orthopedic Dog Bed', reason: 'Distributes the weight of heavier dogs evenly, reducing pressure points during rest.' },
    ],
    relatedBlogLinks: [
      { title: 'Feeding Aids Collection', href: '/collections/feeding-aids' },
      { title: 'Home Safety Collection', href: '/collections/home-safety' },
    ],
  },
];

export function getCareGuideBySlug(slug: string): CareGuidePage | undefined {
  return careGuidePages.find(p => p.slug === slug);
}

export function getAllCareGuideSlugs(): string[] {
  return careGuidePages.map(p => p.slug);
}
