export async function viacep(cep: string): Promise<{
  cep: string;
  complemento?: string;
  bairro?: string;
  localidade?: string; // cidade
  estado: string;
}> {
  return await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json();
}
