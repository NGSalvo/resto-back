import { DishModel } from '../../models';

export async function toggleDish(id: string): Promise<string | null> {
  try {
    const foundDish = await DishModel.findById(id);
    await DishModel.findByIdAndUpdate(id, { active: !foundDish?.active });
    if (foundDish?.active === true)
      return `Se deshabilito el platillo: ${foundDish.title}`;

    return `Se habilito el platillo: ${foundDish?.title}`;
  } catch (error) {
    return null;
  }
}
