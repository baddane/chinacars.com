Publish one new high-quality article to the website in full autonomy, then push to main.

1. Discover the site: run `git checkout main && git pull origin main`. If package.json exists and node_modules is absent, run `npm install`.
2. Determine the build command by checking package.json for a "build" script, or detect the generator (Hugo → `hugo`, Jekyll → `bundle exec jekyll build`, Astro/Gatsby/Next → corresponding script).
3. Locate the articles folder by finding the directory with the most .md/.mdx files (common paths: content/, src/content/, posts/, _posts/, blog/, src/pages/blog/).
4. Read 2–3 existing articles to learn the format, style, frontmatter structure, and naming conventions.
5. Infer the site's niche and topic from existing content.
6. Write one new article following the discovered conventions exactly: same frontmatter fields, same markdown style, same file naming pattern.
7. Add a car comparison to the comparison tool. Make sure the comparison doesn't already exist before adding it. Use the actual images of the vehicles being added. Follow the existing structure of the comparison tool exactly, and don't break or modify any of its functionality.
8. Place the article in the correct folder, run the build command to verify it renders, then commit and push to main with a clear message (e.g., "Add article: [title]").

If the site structure is unclear or build fails, stop and report the issue.
Always push directly to the main branch.

── 4. VALIDATION (bloquant, économe en tokens) ──
- Vérifie le frontmatter et les liens internes.
- Lance le build SANS ingérer les logs :
    npm run build > /tmp/build.log 2>&1 && echo "BUILD_OK" || (echo "BUILD_FAIL"; tail -n 30 /tmp/build.log)
  Ne lis le log QUE si "BUILD_FAIL". Ne pousse jamais un build cassé.
