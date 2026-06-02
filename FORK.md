# Mosiur's Atom Fork — Customizations

This document tracks all changes made to this fork beyond the upstream `atom/atom` codebase.

## Customizations Applied

### 1. README.md
- Rewritten to identify this as Mosiur's Atom Fork
- Added comparison table vs. original Atom
- Added planned enhancements checklist
- Updated installation instructions to point to this fork

### 2. package.json (root)
- `name`: `atom` → `atom-mosiur-fork`
- `productName`: `Atom` → `Mosiur's Atom`
- `description`: Updated to reflect fork status
- `repository`: Points to `github.com/Mosiuropu/atom`
- `bugs`: Points to fork's issue tracker
- Added `author` field
- Added `language-molecular-bio` bundled package

### 3. Welcome Package (`packages/welcome`)
- Welcome title: "A hackable text editor..." → "Mosiur's Atom Fork"
- Added fork-specific welcome message
- Updated resource links to point to fork repository
- Updated footer links

### 4. About Dialog (`packages/about`)
- Added "Mosiur's Atom Fork" heading in about dialog
- Updated credits section with fork repository link
- Maintains original Atom version info and licensing
- Added CSS styles for fork name heading

### 5. Added FORK.md
- This document — tracks all fork-specific changes

### 6. Language Package: Molecular Biology (`packages/language-molecular-bio`)
New bundled language grammar package providing syntax highlighting for:
- **FASTA** (`.fasta`, `.fa`, `.fna`, `.faa`) — nucleotide and protein sequence files
- **FASTQ** (`.fastq`, `.fq`) — sequencing quality score files
- **BED** (`.bed`) — genomic interval data
- **GFF3** (`.gff`, `.gff3`, `.gtf`) — genome annotation format
- **VCF** (`.vcf`) — Variant Call Format
- **GenBank** (`.gb`, `.gbk`) — annotated sequence records

### 7. Electron Version
- Current: Electron 11.5.0 (upstream Atom baseline)
- **Note:** Upgrading Electron in Atom requires significant architectural changes due to:
  - Removal of the `remote` module in Electron 12+
  - Context isolation and sandboxing changes
  - Native module recompilation requirements
  - Breaking IPC API changes
- The Pulsar-Edit community fork documents this migration complexity
- Planned as a future enhancement once the upgrade path is clear

## Upstream Compatibility

This fork is based on `atom/atom` version 1.65.0-dev. All original Atom
functionality is preserved. Customizations are additive and do not break
compatibility with Atom packages or existing configurations.

## How to Contribute

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for the original contribution guidelines.
