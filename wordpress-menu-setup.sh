#!/bin/bash
# =============================================================================
# WordPress Menu Setup — naturalhistory.app
# Crea un menú de navegación con submenús para Procedimiento y FAQ
# =============================================================================
# Uso: bash wordpress-menu-setup.sh
# Requisitos: curl, python3

set -euo pipefail

WP_URL="https://naturalhistory.app"
WP_USER="jokin"
WP_PASS="tbnF 71OW 4Yqp zyfk jtME 2p9h"

# Colores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

ok()   { echo -e "${GREEN}✔ $1${NC}"; }
err()  { echo -e "${RED}✘ $1${NC}"; exit 1; }
info() { echo -e "${YELLOW}→ $1${NC}"; }

# Función auxiliar: petición autenticada
wp_post() {
  local endpoint="$1"
  local data="$2"
  curl -s -X POST \
    -u "$WP_USER:$WP_PASS" \
    -H "Content-Type: application/json" \
    "$WP_URL/wp-json/wp/v2/$endpoint" \
    -d "$data"
}

wp_get() {
  local endpoint="$1"
  curl -s \
    -u "$WP_USER:$WP_PASS" \
    "$WP_URL/wp-json/wp/v2/$endpoint"
}

extract_id() {
  python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('id',''))" <<< "$1"
}

check_error() {
  local response="$1"
  local context="$2"
  if echo "$response" | python3 -c "import sys,json; d=json.load(sys.stdin); exit(0 if 'code' not in d else 1)" 2>/dev/null; then
    :
  else
    local msg
    msg=$(echo "$response" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('message','Error desconocido'))" 2>/dev/null || echo "$response")
    err "$context: $msg"
  fi
}

# =============================================================================
echo ""
echo "============================================="
echo "  Configurando menú en naturalhistory.app"
echo "============================================="
echo ""

# 1. Verificar conexión y autenticación
info "Verificando acceso a la API..."
ME=$(curl -s -u "$WP_USER:$WP_PASS" "$WP_URL/wp-json/wp/v2/users/me")
USERNAME=$(echo "$ME" | python3 -c "import sys,json; print(json.load(sys.stdin).get('name',''))" 2>/dev/null)
if [ -z "$USERNAME" ]; then
  err "No se pudo autenticar. Verifica usuario y contraseña de aplicación."
fi
ok "Conectado como: $USERNAME"

# 2. Crear el menú principal
info "Creando menú 'Menú Principal'..."
MENU_RESP=$(wp_post "menus" '{"name":"Menú Principal","slug":"menu-principal"}')
check_error "$MENU_RESP" "Crear menú"
MENU_ID=$(extract_id "$MENU_RESP")
ok "Menú creado (ID: $MENU_ID)"

# 3. Crear ítem de primer nivel: Procedimiento
info "Creando ítem 'Procedimiento'..."
PROC_RESP=$(wp_post "menu-items" "{
  \"title\": \"Procedimiento\",
  \"url\": \"#\",
  \"status\": \"publish\",
  \"menus\": $MENU_ID,
  \"menu_order\": 1
}")
check_error "$PROC_RESP" "Crear Procedimiento"
PROC_ID=$(extract_id "$PROC_RESP")
ok "Procedimiento creado (ID: $PROC_ID)"

# 4. Submenú: Procedimiento → Para familias
info "Creando submenú 'Procedimiento → Para familias'..."
RESP=$(wp_post "menu-items" "{
  \"title\": \"Para familias\",
  \"url\": \"/procedimiento-familias/\",
  \"status\": \"publish\",
  \"menus\": $MENU_ID,
  \"parent\": $PROC_ID,
  \"menu_order\": 1
}")
check_error "$RESP" "Crear Procedimiento > Para familias"
ok "Para familias (Procedimiento) creado"

# 5. Submenú: Procedimiento → Para sanitarios
info "Creando submenú 'Procedimiento → Para sanitarios'..."
RESP=$(wp_post "menu-items" "{
  \"title\": \"Para sanitarios\",
  \"url\": \"/procedimiento-sanitarios/\",
  \"status\": \"publish\",
  \"menus\": $MENU_ID,
  \"parent\": $PROC_ID,
  \"menu_order\": 2
}")
check_error "$RESP" "Crear Procedimiento > Para sanitarios"
ok "Para sanitarios (Procedimiento) creado"

# 6. Crear ítem de primer nivel: FAQ
info "Creando ítem 'FAQ'..."
FAQ_RESP=$(wp_post "menu-items" "{
  \"title\": \"FAQ\",
  \"url\": \"#\",
  \"status\": \"publish\",
  \"menus\": $MENU_ID,
  \"menu_order\": 2
}")
check_error "$FAQ_RESP" "Crear FAQ"
FAQ_ID=$(extract_id "$FAQ_RESP")
ok "FAQ creado (ID: $FAQ_ID)"

# 7. Submenú: FAQ → Para familias
info "Creando submenú 'FAQ → Para familias'..."
RESP=$(wp_post "menu-items" "{
  \"title\": \"Para familias\",
  \"url\": \"/faq-familias/\",
  \"status\": \"publish\",
  \"menus\": $MENU_ID,
  \"parent\": $FAQ_ID,
  \"menu_order\": 1
}")
check_error "$RESP" "Crear FAQ > Para familias"
ok "Para familias (FAQ) creado"

# 8. Submenú: FAQ → Para sanitarios
info "Creando submenú 'FAQ → Para sanitarios'..."
RESP=$(wp_post "menu-items" "{
  \"title\": \"Para sanitarios\",
  \"url\": \"/faq-sanitarios/\",
  \"status\": \"publish\",
  \"menus\": $MENU_ID,
  \"parent\": $FAQ_ID,
  \"menu_order\": 2
}")
check_error "$RESP" "Crear FAQ > Para sanitarios"
ok "Para sanitarios (FAQ) creado"

# 9. Asignar a la ubicación "primary" del tema activo
info "Buscando ubicaciones de menú disponibles..."
LOCATIONS=$(wp_get "menu-locations")
PRIMARY_AVAILABLE=$(echo "$LOCATIONS" | python3 -c "
import sys, json
d = json.load(sys.stdin)
print('si' if 'primary' in d else 'no')
" 2>/dev/null)

if [ "$PRIMARY_AVAILABLE" = "si" ]; then
  info "Asignando menú a la ubicación 'primary'..."
  ASSIGN_RESP=$(curl -s -X POST \
    -u "$WP_USER:$WP_PASS" \
    -H "Content-Type: application/json" \
    "$WP_URL/wp-json/wp/v2/menu-locations" \
    -d "{\"primary\": $MENU_ID}")
  ok "Menú asignado a la ubicación 'primary'"
else
  echo ""
  echo -e "${YELLOW}Ubicaciones disponibles en tu tema:${NC}"
  echo "$LOCATIONS" | python3 -c "
import sys, json
d = json.load(sys.stdin)
for k, v in d.items():
    print(f'  - {k}: {v}')
" 2>/dev/null
  echo ""
  echo -e "${YELLOW}➜ Ve a WordPress Admin → Apariencia → Menús → Gestionar ubicaciones${NC}"
  echo -e "${YELLOW}  y asigna 'Menú Principal' (ID: $MENU_ID) a la ubicación deseada.${NC}"
fi

# =============================================================================
echo ""
echo "============================================="
echo -e "${GREEN}  ¡Menú creado correctamente!${NC}"
echo "============================================="
echo ""
echo "Estructura del menú:"
echo "  ├── Procedimiento"
echo "  │   ├── Para familias     → /procedimiento-familias/"
echo "  │   └── Para sanitarios   → /procedimiento-sanitarios/"
echo "  └── FAQ"
echo "      ├── Para familias     → /faq-familias/"
echo "      └── Para sanitarios   → /faq-sanitarios/"
echo ""
echo "Nota: Actualiza las URLs en WordPress Admin → Menús"
echo "      si las páginas tienen rutas diferentes."
echo ""
