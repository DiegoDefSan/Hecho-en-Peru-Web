import { z } from 'zod';

const IMAGE_REGEX = /^.+\.(jpg|png)$/i;

const productSchema = z.object({
  name: z
    .string()
    .min(1, { message: "The product name must be introduced." })
    .min(3, { message: "The product name must have, at least, 3 characters." }),
  price: z
    .number({ invalid_type_error: "The product price must be introduced." })
    .min(0.1, { message: "The product price must cost, at least, $ 0.1." }),
  stock: z
    .number({ invalid_type_error: "The product stock must be introduced." })
    .min(1, { message: "The product must have, at least, one unit." }),
  imagePath: z
    .string()
    .min(1, { message: "The image product must be introduced." })
    .regex(IMAGE_REGEX, { message: "Image path invalid." }),
  rating: z
    .number({ invalid_type_error: "The product rating must be introduced." })
    .min(0.1, { message: "The product rating must be, at least, 0.1." })
    .max(5.0, { message: "The product rating must be, at most, 5.0." }),
  history: z
    .string()
    .min(1, { message: "The product name must be introduced." }),
  details: z
    .string()
    .min(1, { message: "The product name must be introduced." }),
  category: z.string(),
  region: z.string(),
  handcraft: z.string(),
})

export default productSchema;
export type formProductValidation = z.infer<typeof productSchema>;