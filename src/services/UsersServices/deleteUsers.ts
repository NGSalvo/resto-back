import { UserModel } from '../../models';

export async function softDeleteUser(id: string): Promise<string | null> {
  try {
    const foundedUser = await UserModel.findById(id);
    await UserModel.findByIdAndUpdate(id, { active: !foundedUser?.active });
    if (foundedUser?.active === true)
      return `Usuario "${foundedUser.name}" desahabilitado`;

    return `Usuario "${foundedUser?.name}" habilitado`;
  } catch (error) {
    return null;
  }
}
