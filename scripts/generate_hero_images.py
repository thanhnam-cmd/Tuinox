import zlib
import struct
import math
import os

def create_png(width, height, get_pixel, output_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    raw = bytearray()
    for y in range(height):
        raw.append(0)  # Filter type None
        for x in range(width):
            r, g, b, a = get_pixel(x, y, width, height)
            cr = max(0, min(255, int(r)))
            cg = max(0, min(255, int(g)))
            cb = max(0, min(255, int(b)))
            ca = max(0, min(255, int(a)))
            raw.extend((cr, cg, cb, ca))
    
    compressor = zlib.compressobj(level=6)
    compressed = compressor.compress(raw) + compressor.flush()
    
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    # IHDR: 8-bit RGBA (color type 6)
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    png.extend(struct.pack('>I', len(ihdr)) + b'IHDR' + ihdr + struct.pack('>I', zlib.crc32(b'IHDR' + ihdr)))
    # IDAT
    png.extend(struct.pack('>I', len(compressed)) + b'IDAT' + compressed + struct.pack('>I', zlib.crc32(b'IDAT' + compressed)))
    # IEND
    png.extend(struct.pack('>I', 0) + b'IEND' + struct.pack('>I', zlib.crc32(b'IEND')))
    
    with open(output_path, 'wb') as f:
        f.write(png)
    print(f"Generated {output_path} ({width}x{height})")

# 1. LOGO PNG (Image 1: FIND TUBEPINOX.VN)
def draw_logo(w, h):
    # We will generate a crisp 800x320 logo
    def pixel(x, y, w, h):
        # Background transparent
        # Normalize coordinates
        nx = x / w * 460
        ny = y / h * 190
        
        blue = (35, 69, 153, 255)  # #234599
        red = (237, 40, 40, 255)   # #ED2828
        
        # Check F blue curve
        # Upper hook
        if 15 <= nx <= 115 and 20 <= ny <= 75:
            # outer curve
            if nx <= 45 or (ny <= 34 and nx <= 112) or (nx <= 30 and ny <= 75):
                return blue
        
        # F red inner hook
        if 15 <= nx <= 90 and 68 <= ny <= 145:
            if (nx <= 30) or (68 <= ny <= 82 and nx <= 88) or (nx <= 45 and ny <= 140):
                return red
                
        # Letter I
        if 125 <= nx <= 162 and 20 <= ny <= 145:
            return blue
            
        # Letter N
        if 180 <= nx <= 290 and 20 <= ny <= 145:
            # left column
            if 180 <= nx <= 214:
                return blue
            # right column
            if 256 <= nx <= 290:
                return blue
            # diagonal
            diag_center = 195 + (nx - 180) * 0.7
            if abs(ny - (25 + (nx - 195) * 1.3)) < 18:
                return blue
                
        # Letter D
        if 310 <= nx <= 425 and 20 <= ny <= 145:
            if 310 <= nx <= 345:
                return blue
            if nx >= 335:
                dx = (nx - 340) / 75
                dy = (ny - 82) / 60
                dist = math.sqrt(dx*dx + dy*dy)
                if 0.65 <= dist <= 1.05 and nx >= 340:
                    return blue
                    
        # Registered R mark (top right)
        if 435 <= nx <= 458 and 18 <= ny <= 42:
            rcx, rcy = 446, 30
            dist = math.sqrt((nx - rcx)**2 + (ny - rcy)**2)
            if 9 <= dist <= 11.5:
                return red
            if 442 <= nx <= 450 and 24 <= ny <= 36:
                return red

        # Sub bar
        if 15 <= nx <= 150 and 158 <= ny <= 166:
            return blue
        if 156 <= nx <= 162 and 158 <= ny <= 166:
            return blue
        if 166 <= nx <= 172 and 158 <= ny <= 166:
            return blue
            
        # TUBEPINOX.VN text zone
        if 180 <= nx <= 455 and 152 <= ny <= 175:
            # T (Red)
            if 180 <= nx <= 194:
                if 154 <= ny <= 158 or (185 <= nx <= 189 and 154 <= ny <= 172):
                    return red
            # U (Blue)
            if 198 <= nx <= 214:
                if (198 <= nx <= 202 or 210 <= nx <= 214 or 168 <= ny <= 172) and 154 <= ny <= 172:
                    return blue
            # B (Blue)
            if 218 <= nx <= 234 and 154 <= ny <= 172:
                return blue
            # E (Blue)
            if 238 <= nx <= 252 and 154 <= ny <= 172:
                return blue
            # P (Blue)
            if 256 <= nx <= 270 and 154 <= ny <= 172:
                return blue
            # I (Red)
            if 274 <= nx <= 278 and 154 <= ny <= 172:
                return red
            # N (Blue)
            if 282 <= nx <= 298 and 154 <= ny <= 172:
                return blue
            # O (Blue)
            if 302 <= nx <= 320 and 154 <= ny <= 172:
                return blue
            # X (Blue)
            if 324 <= nx <= 342 and 154 <= ny <= 172:
                return blue
            # .VN (Blue)
            if 346 <= nx <= 400 and 154 <= ny <= 172:
                return blue

        return (0, 0, 0, 0)
        
    create_png(w, h, pixel, "public/images/logo.png")

# 2. IMAGE 2: Champagne Beige Modern L-Kitchen with Lift-Up Blum Doors & Tall Wire Pantry
def draw_kitchen_2(w, h):
    def pixel(x, y, w, h):
        nx = x / w
        ny = y / h
        
        # Ceiling & downlights
        if ny < 0.22:
            base = int(240 - ny * 60)
            # Spotlights
            for sx in [0.2, 0.48, 0.78]:
                d = math.sqrt((nx - sx)**2 + (ny - 0.08)**2)
                if d < 0.06:
                    glow = int(max(0, 1.0 - d / 0.06) * 55)
                    return (min(255, base + glow), min(255, base + glow), min(255, base + glow // 2), 255)
            # Ceiling fan
            if math.sqrt((nx - 0.48)**2 + (ny - 0.08)**2) < 0.045:
                return (45, 40, 38, 255)
            return (base, base, base - 5, 255)
            
        # Floor (light grey marble with subtle veins)
        if ny > 0.76:
            fl_base = int(220 + math.sin(nx * 12 + ny * 8) * 10)
            # Veins
            vein = math.sin(nx * 30 - ny * 15) * math.cos(nx * 10 + ny * 20)
            if abs(vein) > 0.7:
                fl_base -= 20
            return (fl_base, fl_base + 2, fl_base + 5, 255)
            
        # Warm LED Backsplash
        if 0.44 <= ny <= 0.58 and nx < 0.82:
            # Amber glow
            glow_y = 1.0 - (ny - 0.44) / 0.14
            r = min(255, int(220 + glow_y * 35))
            g = min(255, int(195 + glow_y * 30))
            b = min(255, int(160 + glow_y * 10))
            return (r, g, b, 255)
            
        # Upper Cabinets (Champagne/taupe reflective doors)
        if 0.22 <= ny < 0.44 and nx < 0.82:
            # Lift cabinet Blum open in center
            if 0.32 <= nx <= 0.52:
                # Open interior showing stainless steel wire rack
                if 0.27 <= ny <= 0.43:
                    # Stainless steel wire rack lines
                    if int(ny * 120) % 6 == 0 or int(nx * 200) % 10 == 0:
                        return (235, 240, 245, 255) # Wire
                    return (120, 115, 110, 255) # Interior grey
                # Angled lifted door above
                return (215, 200, 185, 255)
                
            # Range hood area
            if 0.53 <= nx <= 0.67:
                return (35, 33, 32, 255)
                
            # Champagne door surface with reflection
            shimmer = int(math.sin(nx * 40) * 12)
            return (210 + shimmer, 195 + shimmer, 175 + shimmer, 255)

        # Tall Pantry on Right (Open with stainless steel wire pull-out shelves)
        if nx >= 0.82 and 0.22 <= ny <= 0.88:
            # Baskets
            if int(ny * 100) % 12 < 3:
                return (230, 235, 240, 255) # Stainless shelf edge
            return (130, 125, 120, 255)

        # Stainless Steel Countertop
        if 0.58 <= ny <= 0.62 and nx < 0.82:
            sh = int(180 + math.cos(nx * 20) * 40)
            return (sh, sh + 5, sh + 10, 255)
            
        # Lower Cabinets (Champagne beige with drawers)
        if 0.62 < ny <= 0.88 and nx < 0.82:
            # Open drawer pulled out in middle
            if 0.50 <= nx <= 0.64 and 0.68 <= ny <= 0.82:
                return (225, 210, 190, 255)
            # Gap / handle channel
            if abs(ny - 0.64) < 0.008 or abs(ny - 0.74) < 0.006:
                return (80, 75, 70, 255) # Channel
            return (205, 190, 170, 255)
            
        # Plinth
        return (60, 58, 56, 255)

    create_png(w, h, pixel, "public/images/hero-slide-2.png")

# 3. IMAGE 3: Titanium Grey & Gloss White L-Kitchen with Cove Ceiling
def draw_kitchen_3(w, h):
    def pixel(x, y, w, h):
        nx = x / w
        ny = y / h
        
        # Ceiling with curved cove light
        if ny < 0.20:
            # Cove light curve
            cove_y = 0.08 + math.sin(nx * 3.14) * 0.03
            if abs(ny - cove_y) < 0.015:
                return (255, 250, 180, 255) # Warm cove LED
            return (248, 250, 252, 255)
            
        # Floor (light marble with diagonal reflections)
        if ny > 0.75:
            fl = int(215 + (nx + ny) * 15)
            return (fl, fl + 2, fl + 5, 255)
            
        # Refrigerator Housing on Right (High-gloss dark graphite)
        if nx > 0.72 and 0.20 <= ny <= 0.86:
            if 0.24 <= ny <= 0.82 and 0.74 <= nx <= 0.95:
                # White empty fridge space
                return (245, 247, 250, 255)
            return (45, 52, 60, 255)
            
        # Upper Cabinets: Top fascia in dark graphite, lower section in Glossy White
        if 0.20 <= ny < 0.44 and nx <= 0.72:
            # Top fascia
            if ny < 0.28:
                return (45, 52, 60, 255)
            # Glass front display boxes
            if (0.24 <= nx <= 0.44 or 0.52 <= nx <= 0.68) and 0.30 <= ny <= 0.41:
                return (25, 30, 38, 255)
            # Gloss white cabinet door
            return (250, 252, 255, 255)
            
        # Backsplash with ambient LED
        if 0.44 <= ny < 0.58 and nx <= 0.72:
            led = max(0, 1.0 - (ny - 0.44) / 0.08) * 45
            return (int(210 + led), int(218 + led), int(225 + led), 255)
            
        # Black Quartz Countertop
        if 0.58 <= ny <= 0.62 and nx <= 0.72:
            return (20, 22, 25, 255)
            
        # Lower Cabinets: High-Gloss Dark Titanium Grey
        if 0.62 < ny <= 0.86 and nx <= 0.72:
            # Gloss reflection gradient
            refl = int(math.sin(nx * 15) * 8)
            # Niche for microwave
            if 0.28 <= nx <= 0.40 and 0.66 <= ny <= 0.78:
                return (15, 17, 20, 255)
            return (50 + refl, 58 + refl, 68 + refl, 255)
            
        return (40, 44, 50, 255)

    create_png(w, h, pixel, "public/images/hero-slide-3.png")

# 4. IMAGE 4: Modern American Walnut Wood + Waterfall Marble Island
def draw_kitchen_4(w, h):
    def pixel(x, y, w, h):
        nx = x / w
        ny = y / h
        
        # Floor (Warm oak herringbone / warm tile)
        if ny > 0.72:
            pat = int(math.sin(nx * 40 + ny * 20) * 15)
            return (215 + pat, 195 + pat, 170 + pat, 255)
            
        # Upper Gloss Grey Cabinets & Walnut open shelf
        if ny < 0.36:
            if nx > 0.75:
                # Refrigerator & microwave tower
                if 0.12 <= ny <= 0.72 and 0.78 <= nx <= 0.94:
                    return (180, 185, 190, 255) # Stainless fridge
                return (110, 55, 20, 255) # Walnut frame
            if 0.60 <= nx <= 0.75:
                return (125, 60, 22, 255) # Open walnut shelf
            return (225, 228, 232, 255) # Gloss grey
            
        # Backsplash with window
        if 0.36 <= ny < 0.50 and nx < 0.75:
            # Window to outside green
            if 0.20 <= nx <= 0.45:
                return (180, 215, 200, 255)
            return (245, 245, 245, 255)
            
        # Lower Cabinets: American Walnut Wood Grain
        if 0.50 <= ny <= 0.72 and nx < 0.52:
            # Wood grain lines
            grain = int(math.sin(ny * 120 + nx * 10) * 18)
            return (130 + grain, 65 + grain // 2, 25, 255)

        # FOREGROUND WATERFALL MARBLE ISLAND (Right side)
        if nx >= 0.52:
            # White marble top & waterfall vertical edge
            if 0.42 <= ny <= 0.48 or (nx >= 0.88 and 0.42 <= ny <= 0.78):
                # Marble veins
                vn = int(math.sin(nx * 30 + ny * 30) * 10)
                return (248 + vn, 248 + vn, 250 + vn, 255)
            # Island front face: Rich Walnut Wood
            if 0.48 < ny <= 0.78 and 0.55 <= nx < 0.88:
                # Bar stool area
                grain = int(math.sin(ny * 100) * 20)
                # Leather barstool seats
                if math.sqrt((nx - 0.62)**2 + (ny - 0.62)**2) < 0.06 or math.sqrt((nx - 0.74)**2 + (ny - 0.62)**2) < 0.06:
                    return (70, 50, 40, 255)
                return (125 + grain, 60 + grain // 2, 22, 255)
                
        return (230, 230, 230, 255)

    create_png(w, h, pixel, "public/images/hero-slide-4.png")

# 5. IMAGE 5: Neo-Classic Luxury Villa Walnut Kitchen with Arch & Wine Cooler Island
def draw_kitchen_5(w, h):
    def pixel(x, y, w, h):
        nx = x / w
        ny = y / h
        
        # Ceiling: Ornate tray ceiling with warm LED cove
        if ny < 0.22:
            if 0.15 <= nx <= 0.85 and 0.04 <= ny <= 0.16:
                # Plaster pattern center
                return (255, 252, 245, 255)
            return (245, 242, 238, 255)
            
        # Floor: Polished white marble with black granite border strips
        if ny > 0.74:
            if abs(nx - 0.12) < 0.015 or abs(nx - 0.88) < 0.015:
                return (25, 25, 25, 255) # Black granite border
            return (245, 245, 245, 255)
            
        # Monumental Arched Doorway on Left
        if nx < 0.18:
            # Wood arch casing & display shelves
            return (115, 55, 18, 255)
            
        # Upper Classic Cabinets with Raised Panels
        if 0.22 <= ny < 0.44:
            if nx > 0.80:
                # Stainless double fridge
                return (180, 185, 190, 255)
            # Classical raised panel wood
            grain = int(math.sin(nx * 60) * 12)
            return (118 + grain, 56 + grain // 2, 20, 255)
            
        # Backsplash White Marble
        if 0.44 <= ny < 0.54 and nx <= 0.80:
            return (248, 248, 248, 255)
            
        # Lower Wall Cabinets
        if 0.54 <= ny <= 0.74 and nx <= 0.80:
            # Background wall run
            return (115, 55, 18, 255)

        # CENTRAL VILLA ISLAND WITH INTEGRATED WINE COOLER
        if 0.28 <= nx <= 0.72 and 0.50 <= ny <= 0.86:
            # Island Marble Top
            if 0.50 <= ny <= 0.56:
                return (252, 252, 252, 255)
            # Wine cooler glass door on island end
            if 0.42 <= nx <= 0.58 and 0.58 <= ny <= 0.82:
                # Horizontal bottle racks
                if int(ny * 80) % 8 < 2:
                    return (190, 195, 200, 255) # Chrome rack
                return (20, 25, 30, 255) # Dark interior
            # Island Classic Walnut Base
            return (120, 58, 20, 255)
            
        return (235, 235, 235, 255)

    create_png(w, h, pixel, "public/images/hero-slide-5.png")

# Run generation
draw_logo(800, 320)
draw_kitchen_2(800, 480)
draw_kitchen_3(800, 480)
draw_kitchen_4(800, 480)
draw_kitchen_5(800, 480)

# Duplicate as image.png / image-2.png etc. so any reference resolves!
import shutil
shutil.copyfile("public/images/logo.png", "public/image.png")
shutil.copyfile("public/images/hero-slide-2.png", "public/image-2.png")
shutil.copyfile("public/images/hero-slide-3.png", "public/image-3.png")
shutil.copyfile("public/images/hero-slide-4.png", "public/image-4.png")
shutil.copyfile("public/images/hero-slide-5.png", "public/image-5.png")
print("All hero images and logo generated successfully!")
