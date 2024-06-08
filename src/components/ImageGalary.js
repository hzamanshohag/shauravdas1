import MasonryImageDesktop from "./MasonryImageDesktop";
import MasonryImageLaptop from "./MasonryImageListLaptop";
import MasonryImagePhones from "./ImageList";
import MasonryImageTablet from "./MasonryImageListMobile";

const ImageGalary = () => {
  return (
    <div className="dizme_tm_testimonials image_galary">
      <div className="dizme_tm_main_title" data-align="center">
        <span>My Photos</span>
        <h3>From This Day Forward</h3>
        <p>
          I have toured with my band Reshmi & Mati as a keyboardist and also
          worked with Mila, Different Touch, artist’s of power Voice, CloseUp-1,
          Shera Kontho and Solo Performers. I am familiar with different styles
          of music.
        </p>
      </div>

      <div className="list_wrapper box-phone">
        <MasonryImagePhones></MasonryImagePhones>
      </div>
      <div className="list_wrapper box-tablet">
        <MasonryImageTablet></MasonryImageTablet>
      </div>
      <div className="list_wrapper box-laptop">
        <MasonryImageLaptop></MasonryImageLaptop>
      </div>
      <div className="list_wrapper box-desktop">
        <MasonryImageDesktop></MasonryImageDesktop>
      </div>
    </div>
  );
};

export default ImageGalary;
