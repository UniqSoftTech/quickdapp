import { useApi } from "../context/api.context";
import { ethers } from "ethers";
import { useToast } from "../context/toast.context";
import Form, { IFieldProps } from "@/component/form";
import * as Yup from "yup";

export default function GetStartedPage() {
  const { fetchRequest, isGenerate } = useApi();
  const { showToast } = useToast();

  const validationSchema = {
    address: Yup.string().test(
      "Addresss",
      "Addresss is required",
      (value) => value?.length === 42 && ethers.isAddress(value)
    ),
    title: Yup.string().required("Title is required"),
    desc: Yup.string().required("Desc is required"),
    color: Yup.string().required("Desc is required"),
    logo: Yup.string().test("Logo", "Logo is required", (value: any) =>
      /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(value)
    ),
  };

  const fields: IFieldProps[] = [
    {
      name: "address",
      type: "input",
      label: "Contract address",
      required: true,
      placeholder: "0x0000000000000000000000000000000000000000",
    },
    {
      name: "title",
      type: "input",
      label: "App title",
      required: true,
      placeholder: "Enter app title",
    },
    {
      name: "desc",
      type: "input",
      label: "App description",
      required: true,
      placeholder: "Enter app description",
    },
    {
      name: "logo",
      type: "input",
      label: "Brand logo URL",
      required: true,
      placeholder: "Enter brand logo URL",
    },
    {
      name: "color",
      type: "color-picker",
      label: "Brand color",
      required: true,
    },
  ];

  async function handleSubmit(e: any) {
    const res = await fetchRequest({
      url: "/generate",
      method: "POST",
      model: "Generate",
      body: {
        contract_address: e?.address,
        description: e.desc,
        title: e.title,
        theme: e.color,
        logo: e.logo,
      },
    });

    if (!res?.success) showToast(res?.messase, "error");
    else showToast(res?.message, "success");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden font-mono">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-800 via-transparent to-black opacity-50 pointer-events-none"></div>

      <div className="w-11/12 sm:w-10/12 md:w-6/12 lg:w-6/12 xl:w-3/12 border bg-black rounded-2xl shadow-2xl p-4 flex flex-col gap-6">
        <p className="text-white text-center font-bold text-2xl">
          Customize your Application
        </p>

        <div className="text-white">
          <Form
            fields={fields}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialValues={{ color: "#ffffff" }}
            buttonOptions={{ text: "Generate", loading: isGenerate }}
          />
        </div>
      </div>
    </div>
  );
}
