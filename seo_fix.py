#!/usr/bin/env python3
"""SEO fixes for LoyalBond site: blog dates, FDA compliance, title optimization."""

import os
import re

BASE = os.path.dirname(os.path.abspath(__file__))

def read_file(path):
    with open(os.path.join(BASE, path), 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(os.path.join(BASE, path), 'w', encoding='utf-8') as f:
        f.write(content)

# ============================================================
# 1. Blog dates: first 7 → 2026-08-07, last 7 → 2026-08-08
# ============================================================
def fix_blog_dates():
    path = 'src/lib/data/blog.ts'
    content = read_file(path)
    
    # Find all date: 'YYYY-MM-DD' lines within blogPosts array
    # We'll count occurrences and replace the first 7 with 08-07 and last 7 with 08-08
    dates = list(re.finditer(r"date: '(\d{4}-\d{2}-\d{2})',", content))
    print(f"Found {len(dates)} blog posts with dates")
    
    if len(dates) != 14:
        print(f"WARNING: Expected 14 dates, found {len(dates)}")
    
    # Build new content by replacing in reverse order
    new_content = content
    for i, m in enumerate(dates):
        new_date = '2026-08-07' if i < 7 else '2026-08-08'
        old = m.group(0)
        new = f"date: '{new_date}',"
        new_content = new_content.replace(old, new, 1)
        print(f"  Post {i+1}: {m.group(1)} → {new_date}")
    
    write_file(path, new_content)
    print("✅ Blog dates updated.\n")

# ============================================================
# 2a. FDA compliance: 'anxiety relief' replacements
# ============================================================
def fix_anxiety_relief():
    # page.tsx line 11: 'anxiety relief' → 'daily comfort support'
    path = 'src/app/page.tsx'
    content = read_file(path)
    old = 'anxiety relief'
    new = 'daily comfort support'
    # Only in the description (line 11 context)
    # The description on line 11 has anxiety relief
    count = content.count(old)
    content = content.replace(old, new, 1)  # Replace first occurrence (in metadata description)
    print(f"page.tsx: replaced 'anxiety relief' → 'daily comfort support' (was {count} occurrences)")
    write_file(path, content)
    
    # HeroSection.tsx line 19: 'anxiety relief' → 'everyday calm support'
    path = 'src/components/HeroSection.tsx'
    content = read_file(path)
    old = 'anxiety relief'
    new = 'everyday calm support'
    count = content.count(old)
    content = content.replace(old, new)
    print(f"HeroSection.tsx: replaced 'anxiety relief' → 'everyday calm support' ({count} occurrences)")
    write_file(path, content)
    print("✅ Anxiety relief replacements done.\n")

# ============================================================
# 2b. FDA compliance: 'joint pain' in product page FAQ
# ============================================================
def fix_joint_pain_product():
    path = 'src/app/products/[slug]/page.tsx'
    content = read_file(path)
    
    # FAQ question
    old_q = "q: 'Does this bed help with joint pain?'"
    new_q = "q: 'Is this bed good for dogs with stiff joints?'"
    content = content.replace(old_q, new_q)
    print(f"products/[slug]/page.tsx: FAQ question updated")
    
    # Check answer for "joint pain" too
    # The answer in this context doesn't have "joint pain" but let's be safe
    # Look at the orthopedic bed FAQ answer specifically
    # Line 216 answer: 'The high-density supportive foam...' - no joint pain there
    # But let's check if any other FAQ answer has joint pain
    joint_pain_count = content.count('joint pain')
    print(f"products/[slug]/page.tsx: remaining 'joint pain' count: {joint_pain_count}")
    
    write_file(path, content)
    print("✅ Product page joint pain fix done.\n")

# ============================================================
# 2c. FDA compliance: 'joint pain' → 'joint discomfort' in blog.ts
# ============================================================
def fix_joint_pain_blog():
    path = 'src/lib/data/blog.ts'
    content = read_file(path)
    old = 'joint pain'
    new = 'joint discomfort'
    count = content.count(old)
    content = content.replace(old, new)
    print(f"blog.ts: replaced 'joint pain' → 'joint discomfort' ({count} occurrences)")
    write_file(path, content)
    print("✅ Blog joint pain fix done.\n")

# ============================================================
# 3. Homepage title shorten
# ============================================================
def fix_homepage_title():
    path = 'src/app/page.tsx'
    content = read_file(path)
    
    old_title = "title: 'LoyalBond | Functional Pet Wellness — Senior Care, Recovery & Mobility Aids',"
    new_title = "title: 'LoyalBond | Functional Pet Wellness — Senior Care & Mobility Aids',"
    
    count = content.count(old_title)
    content = content.replace(old_title, new_title)
    print(f"page.tsx: replaced title ({count} occurrences)")
    
    # Also fix openGraph.title
    old_og = "title: 'LoyalBond | Functional Pet Wellness — Senior Care, Recovery & Mobility Aids',"
    # Wait, both metadata.title and openGraph.title have the same string... let me check
    # Actually both lines have exactly same text. Let's verify we replaced both
    new_count = content.count(new_title)
    print(f"page.tsx: new title count after replacement: {new_count}")
    
    # Check char count
    title_text = 'LoyalBond | Functional Pet Wellness — Senior Care & Mobility Aids'
    print(f"  New title length: {len(title_text)} chars")
    
    write_file(path, content)
    print("✅ Homepage title updated.\n")

if __name__ == '__main__':
    print("=" * 60)
    print("Starting SEO fixes...")
    print("=" * 60 + "\n")
    
    fix_blog_dates()
    fix_anxiety_relief()
    fix_joint_pain_product()
    fix_joint_pain_blog()
    fix_homepage_title()
    
    print("=" * 60)
    print("All SEO fixes completed!")
    print("=" * 60)
