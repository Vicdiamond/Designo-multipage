import Background from "../../ui/Background";
import Button from "../../ui/Button";

const body =
  "Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.";
function ContactHero() {
  return (
    <Background
      header="Contact Us"
      body={body}
      page="contact"
      className="mb-[120px] xl:mb-[160px]"
    >
      <form className="w-full mt-[48px] md:px-[58px] xl:mt-0">
        <input
          type="text"
          placeholder="Name"
          className="bg-inherit text-white placeholder:text-white border-b-2 w-full py-[11px] px-2 outline-none"
        />
        <input
          type="text"
          placeholder="Email address"
          className="bg-inherit text-white placeholder:text-white border-b-2 w-full py-[11px] px-2 mt-[25px] outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          className="bg-inherit text-white placeholder:text-white border-b-2 w-full py-[11px] px-2 mt-[25px] outline-none"
        />
        <div className="mt-[25px] mb-[40px]">
          <label htmlFor="message">Your message</label>
          <input
            type="textarea"
            placeholder=""
            className="bg-inherit text-white placeholder:text-white border-b-2 w-full py-[1px] text-wrap px-2 outline-none mt-[70px]"
          />
        </div>

        <div className="flex items-center justify-center md:justify-end w-full ">
          <Button type="secondary">SUBMIT</Button>
        </div>
      </form>
    </Background>
  );
}

export default ContactHero;
