import Background from "../../ui/Background";

const header = "About Us";
const body =
  "  Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.";

export default function AboutHero() {
  return (
    <div className="xl:grid xl:grid-cols-10 grid-">
      <div className=" w-full xl:col-span-4 xl:order-2">
        <img
          src="/about/mobile/image-about-hero.jpg"
          alt=""
          className="object-cover w-full md:hidden"
        />
        <img
          src="/about/tablet/image-about-hero.jpg"
          alt=""
          className="object-cover w-full hidden md:block md:rounded-t-xl xl:hidden"
        />
        <img
          src="/about/desktop/image-about-hero.jpg"
          alt=""
          className=" h-full hidden xl:block w-full max-h-[480px] xl:rounded-r-lg "
        />
      </div>
      <Background
        header={header}
        body={body}
        className="xl:flex-1 xl:col-span-6 xl:order-1"
      />
    </div>
  );
}
