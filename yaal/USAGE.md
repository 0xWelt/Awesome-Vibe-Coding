# USAGE

## NAME

yaal - Yet Another Awesome List

## SYNOPSIS

**npm run dev**

**npm run build**

## DESCRIPTION

**npm run dev** starts the development server.

**npm run build** builds the application for production.

The tool automatically detects configuration and README files by checking:

1. Parent directory first (`../yaal.config.yaml`, `../README.md`)
2. Local directory as fallback (`./yaal.config.yaml`, `./README.md`)

## EXAMPLES

Start development server with automatic file detection:

```bash
npm run dev
```

Build with automatic file detection:

```bash
npm run build
```
