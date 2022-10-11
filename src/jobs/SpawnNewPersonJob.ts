import axios from "axios";
import Person from "../models/Person";
import { createWriteStream } from "fs";

export default class SpawnNewPersonJob {
  static async run() {
    // Create a new person
    const person = new Person();
    await person.$query().insert(person);
    // Download image
    const writeStream = createWriteStream(`./public/${person.id}.jpg`);
    const responseStream = await axios({
        method: 'get',
        url: 'https://thispersondoesnotexist.com/image',
        responseType: "stream",
      }
    );

    responseStream.data.pipe(writeStream);
  }
}
