import audiophiles from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

import heroDesktop from "../assets/images/image-hero-desktop.png";
import heroMobile from "../assets/images/image-hero-mobile.png";

const Hero = () => {
  return (
    <main>
      <picture>
        <source media="(min-width: 1024px)" srcSet={heroDesktop} />
        <img src={heroMobile} alt="Hero Image" />
      </picture>

      <section>
        <div>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <span>
            <img src={databiz} alt="Databiz Client" />
            <img src={audiophiles} alt="Audiophiles Client" />
            <img src={meet} alt="Meet Client" />
            <img src={maker} alt="Maker Client" />
          </span>
        </div>
      </section>
    </main>
  );
};

export default Hero;
