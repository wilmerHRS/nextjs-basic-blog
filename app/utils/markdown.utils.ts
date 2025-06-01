import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import { PostData } from "../interfaces/markdown.interfaces";

export namespace MarkdownUtils {
  export async function getPost(slug: string) {
    const fullPath = path.join(process.cwd(), "app", "content", `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id: slug,
      contentHtml,
      ...matterResult.data,
    } as PostData;
  }

  export function getPostsName() {
    const fullPath = path.join(process.cwd(), "app", "content");
    const filenames = fs.readdirSync(fullPath);

    return filenames.map((filename) => filename.replace(/\.md$/, ""));
  }
}
