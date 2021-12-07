import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h3 className={headerStyles.title}>
        <span>Next.js</span> PokéDex
      </h3>
      <p className={headerStyles.description}>
        Managing states and routes through Next.js
      </p>
      {/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
