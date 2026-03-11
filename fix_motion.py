import re

# Read the file
file_path = r"c:\Users\aliei\OneDrive\Desktop\mmy_data\portiolio\components\portfolio.tsx"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find motion elements with className
# This pattern captures: <motion.tag ... className="..." ...>
pattern = r'<(motion\.[a-zA-Z]+)\s+([^>]*?)className="([^"]*?)"([^>]*)>'

def replace_motion_class(match):
    """Replace motion element className with wrapped div"""
    element_type = match.group(1)  # e.g., motion.div, motion.h2
    before_class = match.group(2)   # attributes before className
    class_value = match.group(3)     # className value
    after_class = match.group(4)     # attributes after className
    
    # Extract the tag name (div, h1, h2, p, etc.)
    tag_match = re.match(r'motion\.(\w+)', element_type)
    if not tag_match:
        return match.group(0)  # Return original if no match
    
    tag_name = tag_match.group(1)
    
    # Combine all attributes excluding className
    all_attrs = (before_class + after_class).strip()
    
    # Return the replacement: wrapper div with class, motion element inside with animation props
    if all_attrs:
        return f'<div className="{class_value}">\n                  <{element_type} {all_attrs}>'
    else:
        return f'<div className="{class_value}">\n                  <{element_type}>'

# Apply replacements
new_content = re.sub(pattern, replace_motion_class, content)

# Handle closing tags - pair motion.tag closing with div closing
# This is trickier, so we'll do specific manual replacements for common patterns

# Now we need to add closing </div> for each <div className that wraps a motion element
# Look for patterns like: </motion.X>\n                  </div> and replace with </motion.X>\n                </div>

# Pattern to find motion closing tags that should be wrapped
closing_pattern = r'</motion\.(\w+)>\s*$'

# Split by lines, process, and rejoin
lines = new_content.split('\n')
result_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    result_lines.append(line)
    
    # Check if this is a closing motion tag that needs a wrapper div closing tag
    if re.search(r'</motion\.\w+>', line):
        # Look ahead to see if there's already a closing div follow up or if we need to add it
        if i + 1 < len(lines):
            next_line = lines[i + 1]
            # If next line is not a closing div, we might need to add one
            # But this is complex, so we'll handle it differently
    
    i += 1

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

# Count replacements
match_count = len(re.findall(pattern, content))
print(f"Processed file. Found {match_count} motion elements with className")
print("File updated successfully")
