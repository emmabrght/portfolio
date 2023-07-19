import "../Organisms/style.css";

export default function Main() {
  return (
    <div>
      <section className="main" id="about">
        <img
          src={require("../img/me asf lol.jpg")}
          alt="emma-bright"
          loading="lazy"
          className="main-img"
        />
        <div className="bio animate__animated animate__shakeX">
          <h2 className="bio-title">About Me</h2>
          <p className="bio-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            sed dolorem fugit sapiente porro veniam pariatur dolore nostrum
            delectus inventore tempore minus nemo, iste ullam illo laboriosam
            maiores repudiandae quos!
          </p>
        </div>
      </section>
      <section className="more-about">
        <h2>More About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt
          ipsum, autem deleniti cupiditate molestias quis unde quae totam porro
          dicta iure animi inventore, veniam hic! Omnis nulla, delectus a
          voluptatibus
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          nostrum dolor minus, libero delectus praesentium perferendis
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          consequuntur labore? Ea totam voluptas amet!
        </p>
      </section>
    </div>
  );
}
