import Banner from "../models/banner.js";

export const getBanners = async (req, res) => {
  const banner = [];
  try {
    const bannerCategory = await Banner.distinct("title");
    for (const key of bannerCategory) {
      const data = await Banner.find({ title: key, status:true },{_id:0});
      banner.push({ title: key, data });
    }
    res.status(200).send(banner);
  } catch (error) {
    res.status(400).send(error);
  }
};
