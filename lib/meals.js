import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("./meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return db.prepare("select * from meals").all();
}

export function getMeal(slug) {
  return db.prepare("select * from meals where slug= ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(error.message || "Error writing image file");
    }
  });
  meal.image = `/images/${filename}`;
  db.prepare(
    `
  INSERT INTO MEALS (title, slug, summary, instructions, creator, creator_email, image) 
  VALUES (@title, @slug, @summary, @instructions,  @creator, @creator_email,@image)
  `
  ).run(meal);
}
