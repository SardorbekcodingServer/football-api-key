from PIL import Image

# Open the generated PNG file
input_path = "/mnt/data/Create_a_simple_favicon_design_featuring_a_minimal.png"
output_path = "/mnt/data/favicon.ico"

# Convert the PNG image to ICO format
with Image.open(input_path) as img:
    # Resize to standard favicon sizes (e.g., 16x16, 32x32, 48x48)
    img.save(output_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])

output_path
