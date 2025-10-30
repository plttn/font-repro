# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

## Reproduction steps

In one terminal window, run `pnpm/npm astro preview`. This is so that the URL
will resolve properly. 

In another window, run `pnpm/npm astro build`. This will attempt to build the
route `og.png.ts` which you should expect to error out on 

```text
Unsupported OpenType signature wOF2
  Stack trace:
    at Object.parseBuffer [as parse] (/Users/jack/Developer/font-repro/node_modules/.pnpm/@shuding+opentype.js@1.4.0-beta.0/node_modules/@shuding/opentype.js/dist/opentype.js:11450:18)
```