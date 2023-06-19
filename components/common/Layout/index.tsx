import { FunctionComponent } from "react";
import NavHeader from "components/common/Layout/NavHeader";
import { useSelector } from "react-redux";
import { ReduxState } from "Interface/ReduxState";
import MaterialHeader from "components/common/Layout/NavHeader/MaterialHeader";

interface Props {}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const auth = useSelector((state: ReduxState) => state.auth.auth);
  console.log(auth);
  return (
    <div>
      <MaterialHeader isLogin={!!auth?.isValid} />
      {children}
    </div>
  );
};
export default Layout;
