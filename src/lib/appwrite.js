import { Client, Databases } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.PROJECT_ID); // Your project ID

export const getEvents = async () => {
  try {
    const promise = await databases.listDocuments(
      process.env.PROJECT_DB,
      process.env.EVENTS
    );

    const response = await promise;
    // console.log("wprlogm", response.documents); // Success/
    return response.documents;
  } catch (error) {
    console.log(error);
  }
};
