import { useGetAllProductQuery } from "../../redux/api/productApi/ProductApi";

const ImageGallery: React.FC = () => {
  const { data } = useGetAllProductQuery(undefined);
  const images = data?.data;
  console.log("image gala", images);

  return (
    <section className="py-12 bg-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white font-bold text-lg">
                  Image {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;