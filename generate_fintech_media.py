import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import imageio

os.makedirs('c:/Users/carra/Music/spendly-web/public/videos', exist_ok=True)
os.makedirs('c:/Users/carra/Music/spendly-web/public/images/gifs', exist_ok=True)

# Load Spendly original icon
icon_path = 'c:/Users/carra/Music/spendly-web/public/images/brand/spendly-icon-original.png'
brand_icon = None
if os.path.exists(icon_path):
    brand_icon = Image.open(icon_path).convert('RGBA')

# Font loader helper
def get_font(size, bold=False):
    font_names = [
        'C:/Windows/Fonts/segoeui.ttf' if not bold else 'C:/Windows/Fonts/segoeuib.ttf',
        'C:/Windows/Fonts/arial.ttf' if not bold else 'C:/Windows/Fonts/arialbd.ttf',
    ]
    for fn in font_names:
        if os.path.exists(fn):
            return ImageFont.truetype(fn, size)
    return ImageFont.load_default()

font_title = get_font(32, bold=True)
font_balance = get_font(46, bold=True)
font_lg = get_font(22, bold=True)
font_md = get_font(18, bold=False)
font_md_bold = get_font(18, bold=True)
font_sm = get_font(14, bold=False)
font_sm_bold = get_font(14, bold=True)
font_xs = get_font(12, bold=False)

def draw_rounded_rect(draw, bbox, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

# -------------------------------------------------------------
# 1. GENERATE DASHBOARD DEMO VIDEO & GIF (1280x720, 60 frames)
# -------------------------------------------------------------
print("Generating Spendly Dashboard Video and GIF...")
fps = 24
total_frames = 60
frames_dashboard = []

w, h = 1280, 720

for i in range(total_frames):
    t = i / float(total_frames)
    # ease in-out
    ease = 0.5 - 0.5 * math.cos(t * math.pi * 2)
    
    # Base canvas
    img = Image.new('RGB', (w, h), (246, 250, 248))
    draw = ImageDraw.Draw(img)
    
    # Decorative subtle gradient background blobs
    # Green glow top right
    # App shell window
    margin_x = 60
    margin_y = 40
    shell_w = w - margin_x * 2
    shell_h = h - margin_y * 2
    
    # Shadow behind shell
    for s in range(5, 0, -1):
        alpha_val = int(12 * (1 - s/6))
        draw_rounded_rect(draw, (margin_x - s, margin_y + s*2, margin_x + shell_w + s, margin_y + shell_h + s*2), radius=24, fill=(225, 235, 230))
        
    draw_rounded_rect(draw, (margin_x, margin_y, margin_x + shell_w, margin_y + shell_h), radius=20, fill=(255, 255, 255), outline=(226, 235, 231), width=2)
    
    # Header bar
    header_h = 70
    draw.line((margin_x, margin_y + header_h, margin_x + shell_w, margin_y + header_h), fill=(240, 245, 242), width=1)
    
    # Logo & workspace selector
    if brand_icon:
        s_icon = brand_icon.resize((38, 38), Image.Resampling.LANCZOS)
        img.paste(s_icon, (margin_x + 28, margin_y + 16), s_icon)
    
    draw.text((margin_x + 76, margin_y + 18), "Spendly", font=font_lg, fill=(16, 42, 42))
    draw.text((margin_x + 160, margin_y + 24), "|  Espacio: Mis Finanzas", font=font_sm, fill=(100, 116, 139))
    
    # Badge Pro Active
    draw_rounded_rect(draw, (margin_x + shell_w - 230, margin_y + 18, margin_x + shell_w - 140, margin_y + 50), radius=16, fill=(221, 247, 236))
    draw.text((margin_x + shell_w - 212, margin_y + 24), "PRO ACTIVO", font=font_xs, fill=(12, 143, 114))
    
    # Avatar
    draw.ellipse((margin_x + shell_w - 70, margin_y + 16, margin_x + shell_w - 32, margin_y + 54), fill=(8, 184, 137))
    draw.text((margin_x + shell_w - 58, margin_y + 24), "LC", font=font_sm_bold, fill=(255, 255, 255))
    
    # Left Column: Balance & Chart Card
    c1_x = margin_x + 30
    c1_y = margin_y + header_h + 24
    c1_w = 680
    c1_h = 490
    
    draw_rounded_rect(draw, (c1_x, c1_y, c1_x + c1_w, c1_y + c1_h), radius=16, fill=(250, 253, 251), outline=(235, 242, 238), width=1)
    
    # Balance Header
    draw.text((c1_x + 24, c1_y + 20), "Balance Consolidado Total", font=font_sm, fill=(100, 116, 139))
    current_balance = 12450.0 + 1850.0 * ease
    draw.text((c1_x + 24, c1_y + 44), f"S/ {current_balance:,.2f}", font=font_balance, fill=(16, 42, 42))
    
    # Growth indicator badge
    draw_rounded_rect(draw, (c1_x + 360, c1_y + 52, c1_x + 490, c1_y + 84), radius=16, fill=(221, 247, 236))
    draw.text((c1_x + 372, c1_y + 58), "+14.8% este mes", font=font_xs, fill=(12, 143, 114))
    
    # Live Interactive Chart
    chart_x = c1_x + 30
    chart_y = c1_y + 140
    chart_w = c1_w - 60
    chart_h = 240
    
    # Grid lines
    for gy in range(4):
        gly = chart_y + gy * (chart_h // 3)
        draw.line((chart_x, gly, chart_x + chart_w, gly), fill=(238, 244, 240), width=1)
        draw.text((chart_x - 5, gly - 8), f"S/{15 - gy*3}k", font=font_xs, fill=(160, 175, 170), anchor="ra")
        
    # Bezier / Wave points
    points = []
    num_pts = 24
    for p in range(num_pts):
        px = chart_x + p * (chart_w / (num_pts - 1))
        # dynamic wave
        base_h = 0.5 + 0.3 * math.sin(p * 0.4 + t * 4) + 0.15 * math.cos(p * 0.8)
        py = chart_y + chart_h - (base_h * (chart_h - 40))
        points.append((px, py))
        
    # Draw area polygon under line
    poly_pts = [(chart_x, chart_y + chart_h)] + points + [(chart_x + chart_w, chart_y + chart_h)]
    draw.polygon(poly_pts, fill=(235, 250, 243))
    
    # Draw glowing line
    for p in range(len(points) - 1):
        draw.line((points[p], points[p+1]), fill=(8, 184, 137), width=3)
        
    # Current active pulsating dot
    active_idx = int((num_pts - 1) * (0.3 + 0.6 * t))
    cur_dot = points[active_idx]
    pulse_r = 7 + 3 * math.sin(t * math.pi * 4)
    draw.ellipse((cur_dot[0] - pulse_r, cur_dot[1] - pulse_r, cur_dot[0] + pulse_r, cur_dot[1] + pulse_r), fill=(114, 240, 168))
    draw.ellipse((cur_dot[0] - 5, cur_dot[1] - 5, cur_dot[0] + 5, cur_dot[1] + 5), fill=(7, 93, 80))
    
    # Tooltip above dot
    tt_w, tt_h = 130, 42
    tt_x = cur_dot[0] - tt_w//2
    tt_y = cur_dot[1] - tt_h - 14
    if tt_x + tt_w > c1_x + c1_w - 20: tt_x = c1_x + c1_w - 20 - tt_w
    if tt_x < c1_x + 20: tt_x = c1_x + 20
    draw_rounded_rect(draw, (tt_x, tt_y, tt_x + tt_w, tt_y + tt_h), radius=8, fill=(16, 42, 42))
    draw.text((tt_x + 12, tt_y + 6), "Disponible actual", font=font_xs, fill=(160, 200, 190))
    draw.text((tt_x + 12, tt_y + 20), f"S/ {current_balance:,.0f}", font=font_sm_bold, fill=(255, 255, 255))
    
    # Right Column: Live Transactions & Goals
    c2_x = c1_x + c1_w + 24
    c2_y = c1_y
    c2_w = shell_w - c1_w - 84
    c2_h = c1_h
    
    # Recent Transactions Card
    draw_rounded_rect(draw, (c2_x, c2_y, c2_x + c2_w, c2_y + 240), radius=16, fill=(255, 255, 255), outline=(235, 242, 238), width=1)
    draw.text((c2_x + 18, c2_y + 16), "Movimientos Recientes", font=font_md_bold, fill=(16, 42, 42))
    draw_rounded_rect(draw, (c2_x + c2_w - 85, c2_y + 14, c2_x + c2_w - 18, c2_y + 36), radius=10, fill=(240, 246, 243))
    draw.text((c2_x + c2_w - 74, c2_y + 18), "EN VIVO", font=font_xs, fill=(8, 184, 137))
    
    txs = [
        ("Nómina Quincenal", "Hoy, 10:30 am", "+S/ 1,850.00", (12, 143, 114), (221, 247, 236)),
        ("Supermercado Wong", "Hoy, 08:15 am", "-S/ 245.80", (220, 38, 38), (254, 242, 242)),
        ("Aporte Fondo Retiro", "Ayer, 06:40 pm", "-S/ 400.00", (8, 184, 137), (240, 250, 246)),
    ]
    for idx, (title, date_str, amount, color, bg_col) in enumerate(txs):
        ty = c2_y + 54 + idx * 58
        draw.line((c2_x + 18, ty, c2_x + c2_w - 18, ty), fill=(245, 248, 246), width=1)
        # pill icon
        draw_rounded_rect(draw, (c2_x + 18, ty + 10, c2_x + 52, ty + 44), radius=10, fill=bg_col)
        # arrow icon text
        draw.text((c2_x + 30, ty + 16), "+" if "+" in amount else "-", font=font_md_bold, fill=color)
        draw.text((c2_x + 62, ty + 10), title, font=font_sm_bold, fill=(16, 42, 42))
        draw.text((c2_x + 62, ty + 28), date_str, font=font_xs, fill=(140, 155, 150))
        draw.text((c2_x + c2_w - 20, ty + 18), amount, font=font_sm_bold, fill=color, anchor="ra")
        
    # Savings Goals Card
    g_y = c2_y + 256
    g_h = c1_h - 256
    draw_rounded_rect(draw, (c2_x, g_y, c2_x + c2_w, g_y + g_h), radius=16, fill=(255, 255, 255), outline=(235, 242, 238), width=1)
    draw.text((c2_x + 18, g_y + 16), "Metas de Ahorro Activas", font=font_md_bold, fill=(16, 42, 42))
    
    # Goal 1: Fondo de Emergencia
    draw.text((c2_x + 18, g_y + 52), "Fondo de Emergencia", font=font_sm_bold, fill=(16, 42, 42))
    draw.text((c2_x + c2_w - 20, g_y + 52), "S/ 8,400 / S/ 10,000", font=font_xs, fill=(100, 116, 139), anchor="ra")
    
    # Progress track
    bar_y = g_y + 74
    bar_w = c2_w - 36
    draw_rounded_rect(draw, (c2_x + 18, bar_y, c2_x + 18 + bar_w, bar_y + 10), radius=5, fill=(240, 245, 242))
    # Fill
    fill_ratio = 0.84 + 0.08 * math.sin(t * math.pi * 2)
    draw_rounded_rect(draw, (c2_x + 18, bar_y, c2_x + 18 + int(bar_w * fill_ratio), bar_y + 10), radius=5, fill=(8, 184, 137))
    
    # Goal 2: Viaje a Cusco
    draw.text((c2_x + 18, g_y + 104), "Viaje a Cusco", font=font_sm_bold, fill=(16, 42, 42))
    draw.text((c2_x + c2_w - 20, g_y + 104), "S/ 3,150 / S/ 3,500", font=font_xs, fill=(100, 116, 139), anchor="ra")
    
    bar2_y = g_y + 126
    draw_rounded_rect(draw, (c2_x + 18, bar2_y, c2_x + 18 + bar_w, bar2_y + 10), radius=5, fill=(240, 245, 242))
    fill_ratio2 = 0.90 + 0.05 * math.cos(t * math.pi * 2)
    draw_rounded_rect(draw, (c2_x + 18, bar2_y, c2_x + 18 + int(bar_w * fill_ratio2), bar2_y + 10), radius=5, fill=(12, 143, 114))
    
    frames_dashboard.append(img)

# Save Video MP4
video_path = 'c:/Users/carra/Music/spendly-web/public/videos/spendly-dashboard-demo.mp4'
print(f"Writing MP4 video to {video_path}...")
writer = imageio.get_writer(video_path, fps=fps, quality=9, codec='libx264', pixelformat='yuv420p')
for frame in frames_dashboard:
    writer.append_data(np.array(frame))
writer.close()

# Save High Quality GIF (every second frame for optimal file size)
gif_path = 'c:/Users/carra/Music/spendly-web/public/images/gifs/spendly-dashboard-live.gif'
print(f"Writing GIF to {gif_path}...")
gif_frames = [f.resize((800, 450), Image.Resampling.LANCZOS) for f in frames_dashboard[::2]]
gif_frames[0].save(gif_path, save_all=True, append_images=gif_frames[1:], duration=int(1000/(fps/2)), loop=0, optimize=True)

# -------------------------------------------------------------
# 2. GENERATE GOALS & SAVINGS PROGRESS GIF (600x500, 36 frames)
# -------------------------------------------------------------
print("Generating Goals & Savings Progress GIF...")
frames_goals = []
gw, gh = 640, 480
for i in range(36):
    t = i / 36.0
    ease = 0.5 - 0.5 * math.cos(t * math.pi * 2)
    
    img = Image.new('RGB', (gw, gh), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    # Outer Card
    draw_rounded_rect(draw, (20, 20, gw - 20, gh - 20), radius=20, fill=(250, 253, 251), outline=(226, 235, 231), width=2)
    
    # Header
    if brand_icon:
        s_icon = brand_icon.resize((32, 32), Image.Resampling.LANCZOS)
        img.paste(s_icon, (40, 40), s_icon)
        
    draw.text((82, 42), "Metas de Ahorro Inteligentes", font=font_lg, fill=(16, 42, 42))
    draw.text((82, 70), "Progreso en tiempo real con Spendly", font=font_sm, fill=(100, 116, 139))
    
    # Big Goal Featured: Fondo de Emergencia
    cur_val = 3000 + int(7000 * ease)
    pct = int((cur_val / 10000.0) * 100)
    
    draw_rounded_rect(draw, (40, 110, gw - 40, 290), radius=16, fill=(255, 255, 255), outline=(221, 247, 236), width=2)
    
    # Badge
    draw_rounded_rect(draw, (gw - 160, 126, gw - 60, 154), radius=14, fill=(221, 247, 236))
    draw.text((gw - 145, 132), f"{pct}% Logrado", font=font_xs, fill=(12, 143, 114))
    
    draw.text((64, 128), "Fondo de Emergencia Familiar", font=font_md_bold, fill=(16, 42, 42))
    draw.text((64, 154), "Objetivo: 6 meses de gastos fijos", font=font_xs, fill=(120, 135, 130))
    
    # Big Amount
    draw.text((64, 184), f"S/ {cur_val:,.0f}", font=font_balance, fill=(12, 143, 114))
    draw.text((280, 204), "/ S/ 10,000.00", font=font_md, fill=(120, 135, 130))
    
    # Big Animated Bar
    bw = gw - 128
    draw_rounded_rect(draw, (64, 250, 64 + bw, 270), radius=10, fill=(235, 245, 240))
    fill_w = int(bw * (cur_val / 10000.0))
    draw_rounded_rect(draw, (64, 250, 64 + fill_w, 270), radius=10, fill=(8, 184, 137))
    
    # Sub card: Aportes Recientes
    draw_rounded_rect(draw, (40, 310, gw - 40, gh - 40), radius=14, fill=(240, 250, 246))
    draw.text((64, 324), "Ultimo depósito automático registrado:", font=font_xs, fill=(100, 116, 139))
    draw.text((64, 344), "+S/ 450.00 a Fondo de Emergencia", font=font_sm_bold, fill=(12, 143, 114))
    draw.text((gw - 64, 344), "¡Felicidades! +4.5%", font=font_xs, fill=(7, 93, 80), anchor="ra")
    
    frames_goals.append(img)

gif_goals_path = 'c:/Users/carra/Music/spendly-web/public/images/gifs/spendly-goals-progress.gif'
print(f"Writing Goals GIF to {gif_goals_path}...")
frames_goals[0].save(gif_goals_path, save_all=True, append_images=frames_goals[1:], duration=60, loop=0, optimize=True)

# -------------------------------------------------------------
# 3. GENERATE ANALYTICS & EXPENSE TRACKING GIF (640x480, 30 frames)
# -------------------------------------------------------------
print("Generating Analytics & Breakdown GIF...")
frames_analytics = []
aw, ah = 640, 480
categories = [
    ("Vivienda & Servicios", 0.38, (12, 143, 114)),
    ("Alimentación & Súper", 0.28, (8, 184, 137)),
    ("Transporte & Auto", 0.16, (7, 93, 80)),
    ("Entretenimiento & Ocio", 0.12, (114, 240, 168)),
    ("Salud & Bienestar", 0.06, (200, 240, 225)),
]

for i in range(30):
    t = i / 30.0
    ease = 0.5 - 0.5 * math.cos(t * math.pi * 2)
    
    img = Image.new('RGB', (aw, ah), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    draw_rounded_rect(draw, (20, 20, aw - 20, ah - 20), radius=20, fill=(250, 253, 251), outline=(226, 235, 231), width=2)
    
    draw.text((40, 40), "Análisis Mensual de Gastos", font=font_lg, fill=(16, 42, 42))
    draw.text((40, 68), "Distribución automática sin fórmulas complejas", font=font_sm, fill=(100, 116, 139))
    
    # Donut / Progress Bar breakdown
    bar_y = 105
    bw = aw - 80
    cur_x = 40
    for name, share, color in categories:
        sw = int(bw * share)
        draw_rounded_rect(draw, (cur_x, bar_y, cur_x + sw - 2, bar_y + 22), radius=6, fill=color)
        cur_x += sw
        
    # Categories list
    for idx, (name, share, color) in enumerate(categories):
        cy = 150 + idx * 56
        draw_rounded_rect(draw, (40, cy, aw - 40, cy + 46), radius=12, fill=(255, 255, 255), outline=(235, 242, 238), width=1)
        
        # Color pill
        draw_rounded_rect(draw, (56, cy + 14, 74, cy + 32), radius=6, fill=color)
        draw.text((86, cy + 13), name, font=font_sm_bold, fill=(16, 42, 42))
        
        # Animated dynamic amount
        cur_amt = int(4800 * share * (0.95 + 0.1 * ease))
        draw.text((aw - 130, cy + 13), f"S/ {cur_amt:,}", font=font_sm_bold, fill=(16, 42, 42))
        draw.text((aw - 60, cy + 13), f"{int(share*100)}%", font=font_xs, fill=(100, 116, 139), anchor="ra")
        
    frames_analytics.append(img)

gif_analytics_path = 'c:/Users/carra/Music/spendly-web/public/images/gifs/spendly-analytics-chart.gif'
print(f"Writing Analytics GIF to {gif_analytics_path}...")
frames_analytics[0].save(gif_analytics_path, save_all=True, append_images=frames_analytics[1:], duration=70, loop=0, optimize=True)

print("All media assets generated successfully!")
