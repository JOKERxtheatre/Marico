const Footer = () => {
  return (
    <div className="Footer-section flex items-center justify-center w-full container mt-36 pb-10">
      <div className="Footer flex items-center justify-between w-full">
        <div className="Footer-logo flex flex-col items-start">
          <div>
            <a href="/" className="flex items-center justify-center gap-2.5">
              <svg
                width="38"
                height="43"
                viewBox="0 0 47.176 52.3838"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Shape-82"
                  d="M0 39.3438L0 52.3809L11.292 52.3809L11.292 50.5371L0 39.3438Z"
                  fill="#326CF9"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Shape-83"
                  d="M35.884 52.3838L47.176 52.3838L47.176 39.3457L35.887 50.5391L35.884 52.3838Z"
                  fill="#326CF9"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Shape-84"
                  d="M47.176 0.118164L23.638 27.8711L0 0L0 23.9824L23.638 51.8555L47.172 24.1055L47.176 0.118164Z"
                  fill="#326CF9"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>
              <span className="text-white font-extrabold text-4xl">Marico</span>
            </a>
          </div>
          <h4
            className="text-2xl font-normal leading-[40px]"
            style={{
              color: "#707070",
            }}
          >
            info@marico.co
          </h4>
        </div>
        <div className="Nav-menu">
          <ul className="flex items-center justify-center text-zinc-500 gap-x-8 text-lg">
            <a href="/">
              <li>About</li>
            </a>

            <a href="/">
              <li>Pricing</li>
            </a>

            <a href="/">
              <li>Blog</li>
            </a>
            <a href="/">
              <li>Sign in</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
