import Contants from "expo-constants";
import * as Permissions from "expo-permissions";

class UserPermissions {
  getCameraPermission = async () => {
    if (Contants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status != "granted") {
        alert("Necessário permissão para acessar rolo da camêra.");
      }
    }
  };
}
export default new UserPermissions();
