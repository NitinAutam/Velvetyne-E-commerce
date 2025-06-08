const { products } = require("../data/product");
const { Item } = require("../models/itemModel");

// Load product data once at server start

const getTestingProducts = (req, res) => {
  const {
    category,
    subCategory,
    minPrice,
    maxPrice,
    sort,
    page = 1,
    limit = 10,
    bestseller,
    search,
  } = req.query;

  // Convert strings to usable types
  const min = Number(minPrice) || 0;
  const max = Number(maxPrice) || Infinity;
  const currentPage = Number(page);
  const perPage = Number(limit);
  const best = bestseller === "true";

  const filtered = [];

  // Efficient single-pass filtering
  for (const p of products) {
    if (category && p.category !== category) continue;
    if (subCategory && p.subCategory !== subCategory) continue;
    if (p.price < min || p.price > max) continue;
    if (bestseller !== undefined && p.bestseller !== best) continue;
    if (
      search &&
      !p.name.toLowerCase().includes(search.toLowerCase()) &&
      !p.description.toLowerCase().includes(search.toLowerCase())
    )
      continue;

    filtered.push(p);
  }

  // Sorting
  if (sort === "lowhigh") filtered.sort((a, b) => a.price - b.price);
  if (sort === "highlow") filtered.sort((a, b) => b.price - a.price);

  // Pagination
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  res.json({
    total: filtered.length,
    page: currentPage,
    limit: perPage,
    data: paginated,
  });
};

const getActualProducts = async (req, res) => {
  const {
    category,
    subCategory,
    minPrice,
    maxPrice,
    sort,
    page = 1,
    limit = 10,
    bestseller,
    search,
  } = req.query;

  const min = Number(minPrice) || 0;
  const max = Number(maxPrice) || Infinity;
  const currentPage = Number(page);
  const pageLimit = Number(limit);
  const best = bestseller === "true";
  let sortOption =
    sort === "lowhigh"
      ? { price: 1 }
      : sort === "highlow"
        ? { price: -1 }
        : search
          ? { score: { $meta: "textScore" } }
          : {};

  const query = {
    //Item.find({ category: { $in: ["Men", "Women"] } })
    ...(category?.length > 0 && { category: { $in: category } }),
    ...(subCategory?.length > 0 && { subCategory: { $in: subCategory } }),
    ...(bestseller !== undefined && { bestseller: best }),
    ...(search && { $text: { $search: search } }),
    price: { $gte: min, $lte: max },
  };
  try {
    const filtered = await Item.find(query)
      .sort(sortOption)
      .skip((currentPage - 1) * pageLimit)
      .limit(pageLimit)
      .select(search ? { score: { $meta: "textScore" } } : {}) // Only include score if searching
      .lean();

    const total = await Item.countDocuments(query);

    res.status(200).json({
      total,
      page: currentPage,
      limit: pageLimit,
      data: filtered,
    });
  } catch (err) {
    console.error("getActualProducts error:", err);
    res.status(500).json({ message: err.message || "Server Error" });
  }
};

module.exports = { getTestingProducts, getActualProducts };
