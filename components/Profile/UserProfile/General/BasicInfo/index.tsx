import { FunctionComponent } from "react";
import CustomAvatar from "components/common/MuiComponent/CustomAvatar";
import { Button, TextField } from "@mui/material";
import CssTextField, {
  RedditTextField,
} from "components/common/Input/CustomTextField";
import Typography from "@mui/material/Typography";

interface Props {}

const BasicInfo: FunctionComponent<Props> = ({}) => {
  return (
    <div className="md:flex md:justify-between w-full">
      <div className="w-full">
        <Typography className="text-[17px] font-bold pb-4">
          Basic Details
        </Typography>
      </div>
      <div className="w-full">
        <div>
          <CustomAvatar
            name="Vishwajeet rai"
            url="https://iravis.s3.ap-southeast-2.amazonaws.com/profile/pic (1).jpeg"
            className="border border-dashed border-gray-200"
          />
        </div>
        <div className="pt-4 md:pt-8">
          <div className="flex justify-between items-center">
            <RedditTextField
              label="full name"
              defaultValue="Vishwajeet Rai"
              size="small"
              variant="filled"
              fullWidth
            />
            <div className="pl-2 md:pl-4">
              <Button sx={{ background: "white", color: "black" }}>
                <div className="text-[14px] text-gray-800 font-bold text-[14px]">
                  Save
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-8">
          <div className="flex justify-between items-center">
            <RedditTextField
              label="Email"
              defaultValue="v@v.com"
              size="small"
              variant="filled"
              fullWidth
            />
            <div className="pl-2 md:pl-4">
              <Button sx={{ background: "white", color: "black" }}>
                <div className="text-[14px] text-gray-800 font-bold text-[14px]">
                  Edit
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
