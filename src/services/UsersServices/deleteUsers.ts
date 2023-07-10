import { UserModel } from '../../models';

export async function softDeleteUser(id: string): Promise<string | null> {
  try {
    const foundedUser = await UserModel.findById(id);
    await UserModel.findByIdAndUpdate(id, { active: !foundedUser?.active });
    if (foundedUser?.active === true)
      return `Usuario "${foundedUser.name[0].toUpperCase()}${foundedUser.name.slice(
        1,
      )}" desahabilitado`;

    return `Usuario "${foundedUser?.name[0].toUpperCase()}${foundedUser?.name.slice(
      1,
    )}" habilitado`;
  } catch (error) {
    return null;
  }
}
