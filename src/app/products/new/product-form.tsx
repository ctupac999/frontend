"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createProduct } from "../products.api";
import { useRouter } from "next/navigation";


export function ProductForm() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        await createProduct({
            ...data,
            price:parseFloat(data.price),
        });
        router.push("/");
        router.refresh();
    });

    return (
        <form onSubmit={onSubmit}>
            <Label>Product Name</Label>
            <Input {...register("name")} />

            <Label>Description</Label>
            <Input {...register("description")} />

            <Label>Price</Label>
            <Input type="number" {...register("price")} />

            <Label>Image</Label>
            <Input {...register("image")} />

            <Button type="submit">Create Product</Button>
        </form>
    );
}
