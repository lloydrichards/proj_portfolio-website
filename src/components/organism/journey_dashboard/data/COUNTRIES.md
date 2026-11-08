# Country outlines

`countries.json` is derived from Natural Earth's 1:110m admin-0 countries:
https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson

Downloaded 2026-11-08. The file retains country codes, names, and geometry; polygons are normalized to multipolygons, exterior winding is normalized for D3, and coordinates are rounded to two decimals. These outlines are for an overview, not precise location mapping.

Natural Earth data is public domain: https://www.naturalearthdata.com/about/terms-of-use/

Singapore is supplemented from Natural Earth 1:50m admin-0 countries, downloaded 2026-11-08, because it is absent from the 1:110m dataset. Its rings use the same winding convention; coordinates retain three decimals for the small outline. Source: https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_50m_admin_0_countries.geojson
