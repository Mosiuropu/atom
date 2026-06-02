# Mosiur's Atom Fork 🚀

[![Fork](https://img.shields.io/badge/fork-Mosiuropu-22c55e?style=flat&logo=github)](https://github.com/Mosiuropu/atom)
[![Original](https://img.shields.io/badge/upstream-atom%2Fatom-1a6b3c?style=flat&logo=github)](https://github.com/atom/atom)

> A personalized fork of the [Atom text editor](https://github.com/atom/atom) — preserving the hackable spirit while adding quality-of-life improvements and custom configurations. Maintained by [Md. Mosiur Rahman](https://github.com/Mosiuropu).

Atom was [sunset by GitHub](https://github.blog/2022-06-08-sunsetting-atom/) in December 2022, but the editor's modular architecture and extensibility remain unmatched. This fork aims to keep the project alive with community-driven enhancements.

---

## ✨ What's Different in This Fork

| Feature | Original Atom | Mosiur's Fork |
|---------|--------------|---------------|
| Welcome experience | Default Atom welcome | Custom fork welcome with research & dev tools |
| About dialog | Standard GitHub branding | Fork-branded "Mosiur's Atom" |
| Default packages | Stock selection | Curated set with molecular-bio + dev additions |
| Documentation | Upstream docs | Extended docs with fork-specific guides |
| Community | GitHub Atom org | Open to all — PRs welcome |

## 🔧 Planned Enhancements

- [x] Fork initialized from `atom/atom` master
- [x] Custom README and fork documentation
- [x] Personalized About dialog and welcome experience
- [x] Molecular biology language grammar (FASTA, FASTQ, BED, GFF3, VCF, GenBank)
- [ ] Curated package recommendations for scientific computing
- [ ] Additional language grammars (R, Julia, LaTeX enhanced)
- [ ] Performance optimizations for large-file editing
- [ ] Updated Electron version (security patches) — requires significant architectural changes
- [ ] Community-contributed theme variants

## 📦 Installation

### Prerequisites
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (for building from source)

### From Source

```bash
git clone https://github.com/Mosiuropu/atom.git
cd atom
npm install
npm start
```

### Pre-built Binaries

Pre-built binaries for macOS, Windows, and Linux will be available from the [Releases](https://github.com/Mosiuropu/atom/releases) page once CI is configured.

## 🏗 Building

Follow the platform-specific build guides from the original Atom documentation:

- [Building on Linux](https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core/#platform-linux)
- [Building on macOS](https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core/#platform-mac)
- [Building on Windows](https://flight-manual.atom.io/hacking-atom/sections/hacking-on-atom-core/#platform-windows)

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome! This fork is open to collaboration. See [CONTRIBUTING.md](CONTRIBUTING.md) for the original contribution guidelines and [FORK.md](FORK.md) for fork-specific notes.

## 📄 License

[MIT](LICENSE.md) — same as the original Atom project.

When using Atom or other GitHub logos, follow the [GitHub logo guidelines](https://github.com/logos).

---

*"A hackable text editor for the 21st century — now with a touch of molecular breeding."* 🌾🧬
