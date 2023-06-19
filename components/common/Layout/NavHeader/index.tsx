import { FunctionComponent } from "react";
import { AuthProps } from "components/decorator/WithAuth";

interface Props {
  isLogin: boolean;
}

const NavHeader: FunctionComponent<Props> = ({ isLogin }) => {
  return (
    <div className="py-8 bg-gradient-to-r from-cyan-300 to-blue-300">
      <div className="fixed top-0 left-0 w-full">
        <div className="md:max-w-5xl w-full mx-auto py-4">
          <div className="w-full flex items-center justify-between">
            <div className="font-bold text-gray-600">
              {isLogin ? "Go to profile" : "SignIn/Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavHeader;
