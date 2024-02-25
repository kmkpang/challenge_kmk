import { APIService } from "./api.service";

export const UserService = {
  async getUserInfo() {
    try {
      const data = await APIService.post('GET','/users/me');
      return data
    } catch (error) {
      console.error('Error :', error);
    }
  },
  async verifyThaiNationalID(formdata: any) {
    try {
        const data = await APIService.post('PUT','/users/me',formdata);
        return data
    } catch (error) {
      console.error('Error :', error);
    }
  },
}