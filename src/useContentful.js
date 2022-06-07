import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    host: "preview.contentful.com",
  });

  const getHerdMembers = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "herdMember",
        select: "fields",
        "order": "sys.createdAt",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const herdImage = item.fields.herdImage.fields;
        return {
          ...item.fields,
          herdImage,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const getAboutTypes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "aboutType",
        select: "fields",
        "order": "sys.createdAt",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const typeImage = item.fields.typeImage.fields;
        return {
          ...item.fields,
          typeImage,
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  return { getAboutTypes, getHerdMembers };

  //   return { getHerdMembers };
};

export default useContentful;
