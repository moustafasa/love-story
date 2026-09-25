export const POST = async (req: Request) => {
  const formData = await req.formData();
  console.log(formData);
  return new Response("Memory added successfully", { status: 200 });
};
