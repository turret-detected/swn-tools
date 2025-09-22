# swn-tools

Current deployment: https://swn-tools.pages.dev/

A WIP collection for tools for SWN GMs.

Built with [Nuxt](https://nuxt.com).

## Planned Features (in no particular order)

- [x] Initial planet generation
- [x] Generate full systems with other celestial bodies
- [x] Generate world tags
- [ ] Selectively regenerate parts of a planet
- [ ] Add abbr tags and corresponding description of planet info (ex: explain
      Dysbaric or give world tag description)
- [ ] i18n support
- [x] Generate system maps as svg files
- [x] Export systems
- [ ] Import systems
- [x] Support undo/redo when using generate
- [ ] Support undo/redo when rerolling individual planets
- [ ] Generate and modify ships
- [ ] Export and import ships
- [ ] Sane default ships (base game and expanded ones)
- [ ] Expanded system generation (additional details beyond base game)
- [ ] Better dynamic planet names (some planet names are only for colonized planets,
      other names are generated with syllabic rules)

## Development

```sh
npm install # install deps
npm run dev # run dev server
npm run build # do prod build
npm run preview # preview prod build
```

For style guidance, reference the
[Google Style Guide](https://google.github.io/styleguide/tsguide.html)
