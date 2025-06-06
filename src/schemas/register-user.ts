import { z } from 'zod';

export type RegisterUserSchemaType = z.infer<typeof RegisterUserSchema>;

export const RegisterUserSchema = z
  .object({
    name: z
      .string({ message: 'Insira um nome válido!' })
      .min(5, { message: 'O nome deve ter no mínimo 5 caracteres!' })
      .max(50, { message: 'O nome deve ter no máximo 50 caracteres!' }),

    rg: z
      .string({ message: 'Insira um RG válido!' })
      .regex(/^\d+$/, { message: 'O RG deve conter apenas números!' })
      .min(8, { message: 'O RG deve ter no mínimo 8 caracteres!' })
      .max(20, { message: 'O RG deve ter no máximo 20 caracteres!' }),

    cpf: z
      .string({ message: 'Insira um CPF válido!' })
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
        message: 'O CPF deve estar no formato xxx.xxx.xxx-xx',
      }),

    phoneNumber: z
      .string({ message: 'Insira um número de telefone válido!' })
      .regex(/^\d{2} \d{5}-\d{4}$/, {
        message: 'O telefone deve estar no formato xx xxxxx-xxxx',
      }),

    cep: z
      .string({ message: 'Insira um CEP válido!' })
      .regex(/^\d{5}-\d{3}$/, {
        message: 'O CEP deve estar no formato xxxxx-xxx',
      }),

    state: z
      .string({ message: 'Insira um estado válido!' })
      .min(2, { message: 'O estado deve ter 2 caracteres!' })
      .max(2, { message: 'O estado deve ter 2 caracteres!' }),

    city: z
      .string({ message: 'Insira uma cidade válida!' })
      .min(2, { message: 'A cidade deve ter no mínimo 2 caracteres!' })
      .max(50, { message: 'A cidade deve ter no máximo 50 caracteres!' }),

    neighborhood: z
      .string({ message: 'Insira um bairro válido!' })
      .min(2, { message: 'O bairro deve ter no mínimo 2 caracteres!' })
      .max(50, { message: 'O bairro deve ter no máximo 50 caracteres!' }),

    street: z
      .string({ message: 'Insira uma rua válida!' })
      .min(2, { message: 'A rua deve ter no mínimo 2 caracteres!' })
      .max(100, { message: 'A rua deve ter no máximo 100 caracteres!' }),

    number: z
      .string({ message: 'Insira um número válido!' })
      .regex(/^\d+$/, { message: 'O RG deve conter apenas números!' })
      .min(1, { message: 'O número deve ter no mínimo 1 caractere!' })
      .max(10, { message: 'O número deve ter no máximo 10 caracteres!' }),

    complement: z.string().optional(),

    email: z
      .string({ message: 'Insira um nome válido!' })
      .email({ message: 'Insira um e-mai válido!' }),

    password: z
      .string({ message: 'Insira uma senha válida!' })
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' })
      .max(30, { message: 'A senha deve ter no máximo 30 caracteres!' })
      .regex(/[A-Z]/, {
        message: 'A senha deve conter pelo menos uma letra maiúscula!',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve conter pelo menos uma letra minúscula!',
      })
      .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número!' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'A senha deve conter pelo menos um caractere especial!',
      }),

    confirmPassword: z
      .string({ message: 'Confirme sua senha!' })
      .min(8, { message: 'A senha deve ter no mínimo 8 caracteres!' })
      .max(30, { message: 'A senha deve ter no máximo 30 caracteres!' })
      .regex(/[A-Z]/, {
        message: 'A senha deve conter pelo menos uma letra maiúscula!',
      })
      .regex(/[a-z]/, {
        message: 'A senha deve conter pelo menos uma letra minúscula!',
      })
      .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número!' })
      .regex(/[^A-Za-z0-9]/, {
        message: 'A senha deve conter pelo menos um caractere especial!',
      }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem!',
    path: ['confirmPassword'],
  });
