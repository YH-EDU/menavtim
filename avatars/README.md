# Journey Character Avatars

All sprites are **CC0 or open-license** game art — free for personal and commercial use.

## Characters (8)

| ID | Hebrew | Pack | URL |
|----|--------|------|-----|
| `misa` | חנה | Phaser RPG / Tuxemon sample atlas | bundled in `public/phaser-rpg/atlas/` |
| `knight` | אביר | Animated Shield Maiden (Sevarihk) — 4-dir walk | https://opengameart.org/content/animated-shield-maiden-sprite-busts |
| `fox` | שועל | Fox (Wolf Pack Rework) — 4-dir walk | https://opengameart.org/content/fox-wolf-pack-rework |
| `cat` | נמר | [LPC] Cats Rework — top-down 4-dir + leopard spots | https://opengameart.org/content/cats-rework |
| `robot` | רובוט | Kenney Toon Characters 1 — Robot (side walk + flipX) | https://opengameart.org/content/toon-characters-1 |
| `horse` | חד־קרן | LPC Horse Extended — 6-frame 4-dir walk (white) | https://opengameart.org/content/lpc-horse-extended |
| `car` | מכונית | Kenney Racing Pack — drive-bob + rotate | https://opengameart.org/content/racing-pack |
| `rocket` | חללית | Kenney Space Shooter Redux — ship + fire FX | https://opengameart.org/content/space-shooter-redux |

## License

| Pack | License |
|------|---------|
| Kenney (Robot, Racing, Space Shooter) | **CC0 1.0** |
| Animated Shield Maiden (Sevarihk) | **CC-BY 4.0** — credit + link to OGA |
| Fox (Wolf Pack Rework) | **OGA-BY 3.0+** |
| [LPC] Cats / Horses (bluecarrot16) | **CC-BY 3.0 / GPL / OGA-BY** — credit bluecarrot16 |
| LPC Horse Extended | **CC-BY 3.0 / GPL / OGA-BY** — credit bluecarrot16 |

## Files

- `atlas/` — Phaser JSON atlases + PNG sheets used in-game
- `previews/` — character-select card images (single sharp frame, ~64px)
- `_downloads/` — original zip archives (dev reference, not required at runtime)

## Rebuild atlases

After updating `_downloads/` packs:

```bash
node scripts/build-avatar-atlases.mjs
```

## Direct download URLs

- Shield Maiden: https://opengameart.org/sites/default/files/npc-nordic-shieldmaiden1.png
- Kenney Robot Pack: https://opengameart.org/sites/default/files/Robot%20pack.zip
- LPC Horses: https://opengameart.org/sites/default/files/horse-1.1.zip
- Kenney Racing Pack: https://opengameart.org/sites/default/files/racing-pack.zip
- Kenney Space Shooter Redux: https://opengameart.org/sites/default/files/SpaceShooterRedux.zip
- Fox rework: https://opengameart.org/sites/default/files/fox-1.1.zip
- Cats Rework: https://opengameart.org/sites/default/files/cat-1.0.zip

## Notes

**Robot** uses `toonSide` mode: Kenney Toon side-view walk + flipX for left/right; static back/down for up/down. **Car & rocket** use `rotate` / `rocket` modes.

**Replaced assets:** Tiny Characters (blurry upscaled אבירה) and Square Characters Monster (bull-like robot) were removed.
