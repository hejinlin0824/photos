import os
import json

# 指定图片文件夹路径
image_folder = './images'

# 获取文件夹中所有图片文件名（你可以根据需要扩展文件类型）
image_files = [f for f in os.listdir(image_folder) if f.endswith(('.jpg', '.jpeg', '.png', '.gif'))]

# 将文件名列表保存到 JSON 文件中
with open('images.json', 'w') as json_file:
    json.dump(image_files, json_file, indent=4)

print(f"Generated images.json with {len(image_files)} images.")
