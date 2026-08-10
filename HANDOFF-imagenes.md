# HANDOFF — Implementación de 100 imágenes de catálogo en "Mueblería Betsi"

**Fecha**: 2026-08-10
**Remitente**: Hermes (sesión organizador de imágenes)
**Destinatario**: Chat de implementación del proyecto web "muebleria betsi"
**Repositorio destino**: `C:\Users\logic\OneDrive\Desktop\muebleria betsi` (rama `main`)

---

## 1. RESUMEN EJECUTIVO

Se clasificaron **100 fotografías reales del inventario**, unificadas a **1200×1200 px**
(JPEG, calidad 88, recorte central *cover*, sin deformar) y ya **copiadas dentro de
`frontend/img/`** en subcarpetas por categoría.

⚠️ **ACCION IMPORTANTE**: las 9 imágenes de muestra antiguas
(`producto1-3`, `silla1-3`, `sillon1-3`) fueron **ELIMINADAS por orden del dueño**.
Las páginas **aún las referencian → el sitio muestra fotos rotas** hasta que migres.
`hero1.jpeg` se conserva intacta.

## 2. Imágenes ya copiadas en el repo (subcarpetas)

Dentro de `frontend/img/`:

| Carpeta | Cantidad | Rol |
|---|---|---|
| `frontend/img/Sillas/` | 29 | Productos de sillas |
| `frontend/img/Sillones/` | 56 | Productos de sillones/sofás |
| `frontend/img/Estantes/` | 9 | Productos de estantes/repisas |
| ~~Sin clasificar~~ | ~~6~~ | **DESCARTADA**: las 6 fueron eliminadas por orden del dueño |
| *(Mesas)* | 0 | **no hay fotos de mesas** |

**94 imágenes de producto** confiables, nombres conservados del original
(`WhatsApp Image ... .jpeg`), todas 1200×1200.

**Las 6 descartadas NO se perdieron**: respaldo intacto en
`~/organizador-muebles/img-unificado/Sin clasificar/` (WSL). Nada se destruyó permanentemente.

> Respaldos: originales crudos en `~/organizador-muebles/img/` (WSL).
> Copia unificada completa en `~/organizador-muebles/img-unificado/`.

## 3. Referencias ROTAS que debes migrar YA

Estas páginas apuntan a imágenes ya borradas → **reemplazar por las subcarpetas**:

| Archivo | Referencia rota | Reemplazo sugerido |
|---|---|---|
| `frontend/index.html` (productos destacados) | `img/producto1-3.jpeg` | `img/Sillas/*.jpeg` y `img/Sillones/*.jpeg` |
| `frontend/html/sillas.html` | `../img/silla1-3.jpeg` | `../img/Sillas/*.jpeg` |
| `frontend/html/sillones.html` | `../img/sillon1-3.jpeg` | `../img/Sillones/*.jpeg` |
| `frontend/html/mesas.html` | `../img/mesa1-2.svg` | mantenlo (no hay fotos de mesas) |
| `frontend/html/estantes.html` | `../img/estante1-2.svg` | puedes usar `../img/Estantes/*.jpeg` |
| `hero1.jpeg` | se conserva | no tocar |

## 4. Lo que el chat implementador DEBE hacer

1. **Migrar las 3 páginas** con fotos rotas a las subcarpetas nuevas (tabla arriba).
2. **Decidir el modelo de catálogo**: el sitio hoy mostraba 3 productos de muestra.
   Con 94 fotos reales conviene **renderizar el catálogo dinámicamente** desde un
   array en `catalogo.js` (en vez de decenas de `<img>` estático). Aplicar `loading="lazy"`.
3. **Alt descriptivo** por producto.
4. **Mesas**: no hay fotos. Decidir si se omite la sección o se deja con los `.svg`.
   **Sin clasificar**: descartada por el dueño (6 fotos eliminadas del repo; respaldo intacto).
5. Coordinar `git commit`: el repo ya arrastraba cambios sin commitear en CSS/HTML/JS;
   esta entrega agrega `D` de 9 imágenes + `??` de subcarpetas. Revisar antes de commitear.

## 5. Notas técnicas

- Todas las imágenes: JPEG, RGB, progressive, 1200×1200. Listas para web.
- Para thumbnails livianos se puede generar 400×400 con Pillow (venv `~/.venv-unif`).
- Iconos `.png`/`.svg` se conservan intactos.
- La eliminación de las 9 muestras fue explícita del dueño (hay respaldo en WSL).

## 6. Verificación al terminar

- `index.html`, `sillas.html`, `sillones.html` sin referencias rotas (revisar con `grep producto|silla1|sillon1`).
- Secciones muestran fotos 1200×1200 nítidas.
- `git status` cuadra: 29/56/9 (94 productos; sin clasificar eliminada).

---

*Fin de documento de handoff.*
