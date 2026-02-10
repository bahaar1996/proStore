import z from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "عنوان باید حداقل 3 کاراکتر باشد"),
  price: z.number().min(1, "قیمت باید مثبت باشد"),
  description: z.string().min(10),
});

export type ProductFormData = z.infer<typeof productSchema>;
