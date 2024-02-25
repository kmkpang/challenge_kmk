import { useState } from "react";
import { UserService } from "../service/user.service";
import { UserInfoType } from "../types/commonType";

const useUserStore = () => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);

  const getUserInfo = async () => {
    try {
      const data = await UserService.getUserInfo();
      if (typeof data !== 'undefined' && data !== null) {
        setUserInfo(data?.user as UserInfoType);
        return data
      } else {
        console.error("No valid data received from getUserInfo()");
      }
    } catch (error) {
      console.error('Error in getUserInfo:', error);
      setUserInfo(null);
    }
  }

  const verifyThaiNationalID = async (idNumber: string, fileInput: any) => {
    try {
      const formdata = new FormData();
      formdata.append("thaiNationalIdNumber", idNumber);
      formdata.append("thaiNationalIdCardPhoto", fileInput, "file");
      const data = await UserService.verifyThaiNationalID(formdata);
      if (typeof data !== 'undefined' && data !== null) {
        setUserInfo(data?.user as UserInfoType);
        return data
      } else {
        console.error("No valid data received from getUserInfo()");
      }
    } catch (error) {
      console.error('Error in getUserInfo:', error);
    }
  }

  return {
    userInfo,
    getUserInfo,
    verifyThaiNationalID
  };
}

export default useUserStore;