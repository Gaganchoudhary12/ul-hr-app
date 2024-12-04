import Banner from "../models/banner.js";

export const getBanners = async (req, res) => {
  const banner = [];
  try {
    const bannerCategory = await Banner.distinct("title");
    for (const key of bannerCategory) {
      const todayDate = new Date();
      console.log(todayDate, "todayDate", {
        title: key,
        endDate: { $gte: todayDate.toISOString() },
      });

      const data = await Banner.find(
        {
          title: key,
          startDate: { $lte: todayDate.toISOString() },
          endDate: { $gte: todayDate.toISOString() },
        },
        { _id: 0 }
      );
      console.log(data, "data");
      banner.push({ title: key, data });
    }
    res.status(200).send(banner);
  } catch (error) {
    res.status(400).send(error);
  }
};
