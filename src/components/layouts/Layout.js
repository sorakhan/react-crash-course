import Navbar from "./Navbar";

import style from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={style.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
