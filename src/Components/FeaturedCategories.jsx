import { useEffect, useState } from "react";
import FeaturedCateCard from "./FeaturedCateCard";

const FeaturedCategories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("/featuredCategories.json")
            .then(res => res.json())
        .then(data=>setCategories(data))
    },[])
    return (
      <div className="px-2 my-16">
        <div>
          <h1 className="text-5xl font-semibold text-center">Featured Categories</h1>
                <p className="text-center mt-2 mb-5">Browse through some of our most popular categories</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        categories.map(category=> <FeaturedCateCard key={category.id} category={category}></FeaturedCateCard> )
}
                </div>
        </div>
      </div>
    );
};

export default FeaturedCategories;