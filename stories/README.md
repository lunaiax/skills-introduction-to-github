# Stories

Workspace for story projects driven by the vendored [`story-skills`](../story-skills) CLI.

## Projects

- **`scratch-harbor/`** — a throwaway project for exercising the CLI. Seeded with
  2 characters, 1 location, 1 faction, 1 arc, 1 chapter, 1 scene, 1 promise and
  1 open question. Nothing here is precious; reshape or delete it freely.

## Driving the CLI

No install step is needed — run the vendored entrypoint directly:

```shell
node story-skills/bin/story.js <command> stories/scratch-harbor
```

Everyday commands:

| Command | What it does |
|---|---|
| `validate` | structure, frontmatter and registry check |
| `links` | cross-reference targets and backlinks |
| `continuity` | deaths, promises, questions, casts, durable state |
| `doctor` | health checks plus repair steps |
| `next` | recommended next writing actions |
| `report` | inventory and progress summary |
| `wordcount --write` | count prose, update chapter frontmatter |
| `reindex` | rebuild registry tables from the markdown |

Creating and editing entities:

```shell
node story-skills/bin/story.js add character "Name" --path stories/scratch-harbor --role protagonist
node story-skills/bin/story.js add chapter "Title" --path stories/scratch-harbor --number 2
node story-skills/bin/story.js rename character old-id "New Name" --path stories/scratch-harbor
node story-skills/bin/story.js remove promise some-promise --path stories/scratch-harbor
```

`rename` and `remove` update or scrub id references across the project, so prefer
them over editing filenames by hand. Run `validate` afterwards either way.

`--help` lists every command and flag.
