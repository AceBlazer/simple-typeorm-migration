import { Connection, createConnection } from "typeorm";
import { Photo } from "./entity/Photo";
import express from "express";

const app = express();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server running at port " + PORT));

createConnection()
  .then(async (database: Connection) => {
    const photoRepository = database.getRepository(Photo);

    const photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    await photoRepository.save(photo);
    console.log("Photo has been saved");

    const savedPhotos = await photoRepository.find();
    console.log("All photos from the db: ", savedPhotos);
  })
  .catch((error) => console.error(error));
