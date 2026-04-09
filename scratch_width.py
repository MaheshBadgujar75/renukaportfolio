import os
import re

directories = ['src/pages', 'src/components']

def replace_classes(match):
    return match.group(0).replace('max-w-6xl', 'w-full max-w-full px-4 xl:px-12').replace('max-w-7xl', 'w-full max-w-full px-4 xl:px-12')

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if not file.endswith('.tsx'):
                continue
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace max-w-6xl or max-w-7xl specifically
            new_content = content.replace('max-w-6xl', 'w-full max-w-full')
            new_content = new_content.replace('max-w-7xl', 'w-full max-w-full')
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {path}")
